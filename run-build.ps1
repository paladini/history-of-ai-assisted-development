$ErrorActionPreference = "Continue"
Set-Location $PSScriptRoot
$log = Join-Path $PSScriptRoot "BUILD_RESULT.txt"

"Build started: $(Get-Date -Format o)" | Set-Content $log -Encoding utf8

function Invoke-Logged {
  param([string]$Label, [string[]]$Command)
  "`n=== $Label ===" | Add-Content $log -Encoding utf8
  & $Command[0] @($Command[1..($Command.Length - 1)]) 2>&1 | Tee-Object -FilePath $log -Append -Encoding utf8
  return $LASTEXITCODE
}

if (-not (Test-Path .git)) {
  Invoke-Logged "git init" @("git", "init") | Out-Null
}

$exit = 0
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
  if ((Invoke-Logged "pnpm install" @("pnpm", "install")) -ne 0) { $exit = 1 }
  elseif ((Invoke-Logged "pnpm build" @("pnpm", "build")) -ne 0) { $exit = 1 }
} else {
  if ((Invoke-Logged "npm install" @("npm", "install")) -ne 0) { $exit = 1 }
  elseif ((Invoke-Logged "npm run build" @("npm", "run", "build")) -ne 0) { $exit = 1 }
}

$distExists = Test-Path dist
"`n=== dist/ exists: $distExists ===" | Add-Content $log -Encoding utf8
if ($distExists) {
  Get-ChildItem dist | ForEach-Object { "  - $($_.Name)" } | Add-Content $log -Encoding utf8
}
"`n=== FINAL EXIT CODE: $exit ===" | Add-Content $log -Encoding utf8
exit $exit

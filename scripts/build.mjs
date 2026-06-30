import { spawnSync } from 'node:child_process';
import { appendFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const logPath = join(root, 'BUILD_RESULT.txt');
const lines = [];

function log(line) {
  lines.push(line);
  console.log(line);
}

function run(cmd, args) {
  log(`\n=== ${cmd} ${args.join(' ')} ===`);
  const result = spawnSync(cmd, args, {
    cwd: root,
    encoding: 'utf8',
    shell: true,
    env: process.env,
  });
  if (result.stdout) log(result.stdout.trimEnd());
  if (result.stderr) log(result.stderr.trimEnd());
  log(`exit code: ${result.status ?? 'null'}`);
  return result.status ?? 1;
}

writeFileSync(logPath, `Build started: ${new Date().toISOString()}\n`, 'utf8');

let exit = 0;
if (run('pnpm', ['--version']) !== 0) {
  log('pnpm not found, trying npm');
  exit = run('npm', ['install']);
  if (exit === 0) exit = run('npm', ['run', 'build']);
} else {
  exit = run('pnpm', ['install']);
  if (exit === 0) exit = run('pnpm', ['build']);
}

const distPath = join(root, 'dist');
const distExists = existsSync(distPath);
log(`\n=== dist/ exists: ${distExists} ===`);
if (distExists) {
  const files = readdirSync(distPath, { recursive: true });
  log(`dist/ file count: ${files.length}`);
  log('dist/ top-level entries:');
  for (const entry of readdirSync(distPath)) {
    log(`  - ${entry}`);
  }
}

log(`\n=== FINAL EXIT CODE: ${exit} ===`);
appendFileSync(logPath, lines.join('\n') + '\n', 'utf8');
process.exit(exit);

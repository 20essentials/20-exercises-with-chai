/*
  pnpm test 1     # Runs all tests in folder 1 or 01
  pnpm test       # Runs all tests recursively
*/

import { spawn } from "node:child_process";
import path from "node:path";
import { existsSync } from "node:fs";

const arg = process.argv[2];

function runMocha(args) {
  const child = spawn("mocha", args, {
    stdio: "inherit",
    shell: true,
  });

  child.on("exit", (code) => process.exit(code));
}

if (!arg || isNaN(arg)) {
  console.log("Running all Mocha tests...");
  runMocha(["--watch", "--recursive", "**/*.test.js"]);
} else {
  const padded = String(arg).padStart(2, "0");
  const plain = String(Number(arg));

  let testDir;
  if (existsSync(path.resolve(padded))) {
    testDir = path.resolve(padded);
  } else if (existsSync(path.resolve(plain))) {
    testDir = path.resolve(plain);
  } else {
    console.error(`Test folder not found. Tried: "${padded}" and "${plain}"`);
    process.exit(1);
  }

  console.log("Running Mocha tests in:", testDir);
  runMocha(["--watch", "--recursive", `${testDir}/**/*.test.js`]);
}

#!/usr/bin/env node
const { cpSync, existsSync, mkdirSync } = require("fs");
const { resolve } = require("path");

const projectDir = process.cwd();
const srcDir = resolve(projectDir, "src");
const distDir = resolve(projectDir, "dist");

console.log("ENVIRONMENT:", process.env.ENVIRONMENT);

if (!existsSync(srcDir)) {
  console.error("No src directory found for", projectDir);
  process.exit(1);
}

mkdirSync(distDir, { recursive: true });
cpSync(srcDir, distDir, { recursive: true });

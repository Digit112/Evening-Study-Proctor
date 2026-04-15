import { defineConfig } from 'tsup';

export default defineConfig({
  // Make sure this file actually exists at this path!
  entry: ['src/index.ts'], 
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
});
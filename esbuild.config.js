#!/usr/bin/env node

import esbuildServe from 'esbuild-serve'
import { glsl } from 'esbuild-plugin-glsl'

esbuildServe(
  {
    logLevel: 'info',
    entryPoints: ['src/index.ts'],
    bundle: true,
    loader: { '.woff2': 'file', '.png': 'file', '.ttf': 'file' },
    outfile: 'www/main.js',
    sourcemap: true,
    plugins: [glsl({
      minify: true
    })]
  },
  { root: 'www' }
)

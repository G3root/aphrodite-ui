//credit: https://github.com/graup/vanilla-extract-rollup-example/blob/main/packages/ui/rollup.config.js
import json from '@rollup/plugin-json';
import path from 'path';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import depsExternal from 'rollup-plugin-node-externals';
import ts from 'typescript';

const loadCompilerOptions = (tsconfig) => {
  if (!tsconfig) return {};
  const configFile = ts.readConfigFile(tsconfig, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    './'
  );
  return options;
};

const compilerOptions = loadCompilerOptions('tsconfig.json');

const plugins = [depsExternal(), esbuild(), json()];

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    input: 'src/index.ts',
    plugins,
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',

        assetFileNames({ name }) {
          return name.replace(/^src\//, '');
        },

        exports: 'named'
      }
    ]
  },
  // Declaration files
  {
    input: 'src/index.ts',
    plugins: [
      ...plugins,
      dts({
        compilerOptions: {
          ...compilerOptions,
          baseUrl: path.resolve(compilerOptions.baseUrl || '.'),
          declaration: true,
          noEmit: false,
          emitDeclarationOnly: true,
          noEmitOnError: true,
          target: ts.ScriptTarget.ESNext
        }
      })
    ],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src'
      }
    ]
  }
];
export default config;

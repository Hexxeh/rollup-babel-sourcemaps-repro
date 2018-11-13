import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: './index.js',
  output: {
    file: "./dist/index.js",
    format: "cjs",
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    babel({
      plugins: [
        '@babel/plugin-transform-block-scoped-functions',
        '@babel/plugin-transform-block-scoping',
      ],
      include: "node_modules/**",
      babelrc: false,
    }),
    commonjs(),
  ]
};

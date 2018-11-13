This repo reproduces an issue when using Rollup + rollup-plugin-babel where invalid/incomplete sourcemaps are generated.

When commenting out the babel plugin, a sourcemap is generated that includes position info for all lines of the generated bundle.

When the babel plugin is active, sourcemap positions seem to have a 'hole' in the middle, where many mappings are missing.

eg, try to find a mapping for the line containing "Function.prototype.apply.call(originalConsoleLevel, global$3.console, args);" within the output sourcemap.

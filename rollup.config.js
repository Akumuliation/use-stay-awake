import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    url({
      include: ["**/*.mp4", "**/*.ogv"],
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};

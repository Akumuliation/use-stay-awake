import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: "esm",
      exports: "default",
    },
  ],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    url({
      include: ["**/*.mp4", "**/*.webm"],
      limit: "819200",
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};

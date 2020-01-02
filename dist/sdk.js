const BINARYEN_VERSION = "90.0.0-nightly.20200101";
const ASSEMBLYSCRIPT_VERSION = "0.8.1";

// AMD/require.js (browser)
if (typeof define === "function" && define.amd) {
  const paths = {
    "binaryen": "https://cdn.jsdelivr.net/npm/binaryen@" + BINARYEN_VERSION + "/index",
    "assemblyscript": "https://cdn.jsdelivr.net/npm/assemblyscript@" + ASSEMBLYSCRIPT_VERSION + "/dist/assemblyscript",
    "assemblyscript/cli/asc": "https://cdn.jsdelivr.net/npm/assemblyscript@" + ASSEMBLYSCRIPT_VERSION + "/dist/asc",
  };
  require.config({ paths });
  define(Object.keys(paths), (binaryen, assemblyscript, asc) => ({
    BINARYEN_VERSION,
    ASSEMBLYSCRIPT_VERSION,
    binaryen,
    assemblyscript,
    asc
  }));

// CommonJS fallback (node)
} else if (typeof module === "object" && module.exports) {
  module.exports = {
    BINARYEN_VERSION,
    ASSEMBLYSCRIPT_VERSION,
    binaryen: require("binaryen"),
    assemblyscript: require("assemblyscript"),
    asc: require("assemblyscript/cli/asc")
  };
}

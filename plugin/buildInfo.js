const dayjs = require("dayjs")

function buildInfoPlugin(version, name) {
  const startTime = Date.now()
  return {
    name: "buildInfoPlugin",
    buildStart() {
      console.log("\u001B[32m", "Build process has started...")
    },
    buildEnd() {
    },
  }
}

module.exports = buildInfoPlugin

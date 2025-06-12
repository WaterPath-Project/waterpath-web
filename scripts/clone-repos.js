const { execSync } = require("child_process")
const fs = require("fs")

const repos = [
  {
    name: "glowpa",
    url: "https://git.wur.nl/glowpa/glowpa-r.git",
  },
  {
    name: "waterpath-data-schemas",
    url: "https://github.com/WaterPath-Project/waterpath-data-schemas.git",
  },
  {
    name: "waterpath-data",
    url: "https://github.com/WaterPath-Project/waterpath-data.git",
  },
  {
    name: "waterpath-learning-materials",
    url: "https://github.com/WaterPath-Project/waterpath-learning-materials.git",
  },
  {
    name: "waterpath-data-integration-tool",
    url: "https://github.com/WaterPath-Project/waterpath-data-integration-tool.git",
  }
]

const cloneDir = "./external-repos"

if (!fs.existsSync(cloneDir)) {
  fs.mkdirSync(cloneDir)
}

repos.forEach(({ name, url }) => {
  const path = `${cloneDir}/${name}`
  if (!fs.existsSync(path)) {
    execSync(`git clone --depth=1 ${url} ${path}`, { stdio: "inherit" })
  }
  else {
    execSync(`cd ${path} & git pull`)
  }
})

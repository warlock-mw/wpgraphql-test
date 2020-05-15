const path = require(`path`)

module.exports = {
  tailwind: {
    styled: "@emotion/styled",
    config: path.resolve(`${__dirname}/tailwind.config.js`),
    format: "auto",
  },
}
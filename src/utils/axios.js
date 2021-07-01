
const axios = require('axios').default

const install = app => {
  app.config.globalProperties.$axios = axios
}

export { install as default }

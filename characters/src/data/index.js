const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Character")
    return results.data;
  },
}
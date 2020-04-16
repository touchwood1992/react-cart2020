const axios = require("axios");

const AxiosInstance = axios.create({
  baseURL: "https://api.pexels.com/v1/search?query=laptop&per_page=15&page=1",
  headers: {
    Authorization: "563492ad6f9170000100000102b8961a8db24366a45a6548144e3cd4",
  },
});

export default AxiosInstance;

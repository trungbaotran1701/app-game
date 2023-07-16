import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "859fa14f9c074aacb212b513cf462cf5",
  },
});

import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "40e3507166e540d0a4643b53dbc2756c" },
});

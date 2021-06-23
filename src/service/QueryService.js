import Constant from "../constants/constants";
import { request } from "graphql-request";

const QueryService = {
  theme: {},
  async fetch(query, param) {
    let data;
    data = await request(Constant.get("global", "API_ENDPOINT"), query, param);
    return data;
  },
};

export default QueryService;

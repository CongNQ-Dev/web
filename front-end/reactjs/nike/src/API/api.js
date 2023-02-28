import axios from "axios";
import * as URL from "./url";

export default function API(endPoint, method, body, token) {
  return axios({
    method: method,
    url: `${URL.API_NIKE}/${endPoint}`,
    data: body,
    headers: { Authorization: `Bearer${token}` },
  });
}

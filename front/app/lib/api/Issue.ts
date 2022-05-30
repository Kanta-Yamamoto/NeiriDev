import { client } from "../../lib/api/client";
import Cookies from "js-cookie";

export const GetIssues = () => {
  return client.get("issues", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

export const PostIssue = (params) => {
  return client.post("issues", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

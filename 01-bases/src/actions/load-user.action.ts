import axios from "axios";
import type { ReqUserListResponse } from "../assets/interfaces/request.resposne";

export const loadUserActions = async (page: number) => {
  try {
    const { data } = await axios.get<ReqUserListResponse>(
      `https://reqres.in/api/users`,
      {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
        params: {
          page: page,
        },
      }
    );
    console.log(data.data, "ds");
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

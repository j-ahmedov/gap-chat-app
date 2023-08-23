import axios from "axios";
import { requestParams } from "../constants/request_params";

export const getToken = async (username, password) => {
  try {
    const response = await axios.post(
      `${requestParams.url_template}/auth/token/login/`,
      { username, password }
    );
    return response;
  } catch (error) {
    return error;
  }
};

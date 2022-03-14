import axios from "axios";
import { BASE_URL } from "../utils/Constant";

export async function getData(...endpoints) {
  const final_url = `${BASE_URL}${endpoints}`;

  try {
    const response = await axios.get(final_url);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.error("Error in catch in ", e);
  }
}

export async function postData(body, ...endpoints) {
  const final_url = `${BASE_URL}${endpoints}`;
  console.log("finalurl", final_url);
  try {
    const response = await axios.post(final_url, body);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.log("Error in catch ", e);
  }
}

/* This function takes query as a param and returns the array of beer objects.*/
export const fetchSearchResults = async (query) => {
  if (query && query.length > 0) {
    const parsedQuery = query.replaceAll(" ", "+");
    const url = `${BASE_URL}/users/all?name=${parsedQuery}`;
    const res = await axios.get(url);
    const resJson = res.data.users;
    return resJson;
  } else {
    return [];
  }
};

import axios from "axios";

// export const url = "http://localhost:5000";
export const url = "https://ancient-earth-80509.herokuapp.com";

export async function getData(...endpoints) {
  const final_url = `${url}${endpoints}`;

  try {
    const response = await axios.get(final_url);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.error("Error in catch in ", e);
  }
}

export async function postData(body, ...endpoints) {
  const final_url = `${url}${endpoints}`;
  console.log("finalurl", final_url);
  try {
    const response = await axios.post(final_url, body);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.log("Error in catch ", e);
  }
}

// export const BASE_URL = "http://localhost:5000";
// export const BASE_URL = "https://ancient-earth-80509.herokuapp.com";
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

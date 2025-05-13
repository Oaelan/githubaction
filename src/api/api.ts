import axios from "axios";

const BASE_URL = "https://learn.codeit.kr/api/codestudit";

export async function getPosts() {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
}

export async function getPostsByUsername(username: string) {
  const response = await axios.get(`${BASE_URL}/posts?username=${username}`);
  return response.data;
}

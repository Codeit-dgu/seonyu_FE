// src/api.js
/*import axios from "axios";

const API_URL = "/api/groups/1/posts"; // 예시 URL

export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error("Error creating post:", error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};*/

// src/api.js
import mockData from "./mockData";

let posts = [...mockData]; // 가짜 데이터 저장용 배열
let id = posts.length + 1; // 게시글 ID 관리

export const createPost = async (newPost) => {
  return new Promise((resolve) => {
    const postWithId = { id: id++, ...newPost }; // ID 추가
    posts.push(postWithId); // 가짜 데이터 배열에 추가
    resolve({ data: postWithId }); // API 응답 형식으로 반환
  });
};

export const getPosts = async () => {
  return new Promise((resolve) => {
    resolve({ data: posts }); // 가짜 데이터 반환
  });
};

export const getPostById = (id) => {
  return posts.find((post) => post.id === id); // ID로 게시글 찾기
};

export const removePost = async (id) => {
  return new Promise((resolve) => {
    posts = posts.filter((post) => post.id !== id); // ID로 게시글 삭제
    resolve({ data: posts }); // 삭제 성공 시 반환
  });
};

import React from "react";
import { Link } from "react-router-dom";
import { removePost } from "../api";
import "./PostList.css";

const PostList = ({ posts, deletePost }) => {
  const handleDelete = async (id) => {
    try {
      const response = await removePost(id); // API 함수 호출
      deletePost(response.data); // 프롭으로 받은 함수 실행
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div className="listContainer">
      {posts.map((post) => (
        <div key={post.id} className="postContainer">
          <div className="selectLine">
            <span id="postInfoText">{post.nickname} | </span>
            <span id="postInfoText">{post.isPublic ? "공개" : "비공개"}</span>
            <span
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              추억 삭제하기
            </span>
          </div>
          <Link to={`/posts/${post.id}`} state={{ post }}>
            <p className="postTitle">{post.title}</p>
          </Link>
          <div>
            <p className="tagText">{post.tags.map((tag) => `#${tag} `)}</p>
          </div>
          <div className="postBottom">
            <span className="bottomText">{post.location}</span>
            <span className="bottomText">{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// 스타일 정의

const deleteButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "4px",
  cursor: "pointer",
};

const postInfoStyle = {
  marginTop: "10px",
};

export default PostList;

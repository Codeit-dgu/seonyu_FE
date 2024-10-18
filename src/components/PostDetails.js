import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams(); // URL에서 post.id 가져오기
  const location = useLocation(); // location을 통해 state 접근
  const post = location.state?.post; // 전달된 state에서 post 가져오기
  const navigate = useNavigate();

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <div className="postDetailTopContainer">
        <div className="selectLine">
          <span id="postInfoText">{post.nickname} | </span>
          <span id="postInfoText">{post.isPublic ? "공개" : "비공개"}</span>
        </div>
        <p className="postTitle">{post.title}</p>
        <div>
          <p className="tagText">{post.tags.map((tag) => `#${tag} `)}</p>
        </div>
        <hr id="vector"></hr>
      </div>

      <div className="postDetailcontentContainer">
        {/* 이미지 보여주기 */}
        {post.imageUrl && (
          <div className="imgContainer">
            <img
              className="img"
              src={post.imageUrl}
              alt={post.title}
              style={imageStyle}
            />
          </div>
        )}
        <p className="content">{post.content}</p>
      </div>
      <button
        className="listButton"
        style={buttonStyle}
        onClick={() => navigate("/")}
      >
        목록으로 돌아가기
      </button>
    </div>
  );
};

// 스타일 설정
const postDetailsStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  marginBottom: "20px",
};

const imageContainerStyle = {
  marginTop: "20px",
  textAlign: "center",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default PostDetails;

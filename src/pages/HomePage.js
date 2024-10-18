import React, { useState, useEffect } from "react";
import { getPosts } from "../api"; // API 함수 import
import PostForm from "../components/PostForm"; // PostForm 경로 확인
import PostList from "../components/PostList"; // PostList 경로 확인
import "./HomePage.css";

const HomePage = () => {
  const [isPublic, setIsPublic] = useState(true); // 게시글 공개 여부
  const [posts, setPosts] = useState([]); // 게시글 목록
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부

  const handlePublicClick = () => {
    setIsPublic(true);
  };

  const handlePrivateClick = () => {
    setIsPublic(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 게시글 목록 가져오기
  const fetchPosts = async () => {
    const response = await getPosts();
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts(); // 컴포넌트가 마운트될 때 게시글 목록 가져오기
  }, []);

  // 공개 또는 비공개 게시글만 필터링
  const filteredPosts = posts.filter((post) => post.isPublic === isPublic);

  return (
    <>
      <div className="homeSelect">
        <button id="publicButton" onClick={handlePublicClick}>
          공개
        </button>
        <button id="publicButton" onClick={handlePrivateClick}>
          비공개
        </button>

        {/* "기억 만들기" 버튼 클릭 시 모달 열기 */}
        <button className="createMemory" onClick={handleOpenModal}>
          기억 만들기
        </button>
      </div>

      {/* 게시글 목록 표시 */}
      <PostList
        posts={filteredPosts}
        deletePost={(newPost) => {
          alert("삭제가 완료되었습니다!!");
          setPosts(newPost);
        }}
      />

      {/* 모달 표시 */}
      {showModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <button onClick={handleCloseModal} style={closeButtonStyle}>
              X
            </button>
            <PostForm
              addPost={(newPost) => {
                // 새 게시글 추가 로직
                handleCloseModal(); // 게시글 추가 후 모달 닫기
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

// 모달 스타일
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: "#fff",
  width: "100%",
  padding: "20px",
};

// 닫기 버튼 스타일
const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "34px",
  height: "34px",
  flexShrink: 0,
};

export default HomePage;

import React, { useState } from "react";
import { createPost } from "../api"; // API 함수 import
import "./PostForm.css";

const PostForm = ({ addPost }) => {
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postPassword, setPostPassword] = useState("");
  const [groupPassword, setGroupPassword] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      nickname,
      title,
      content,
      postPassword,
      groupPassword,
      imageUrl,
      tags: tags.split(","), // 쉼표로 구분된 태그
      location,
      date,
      isPublic,
    };

    try {
      const response = await createPost(newPost); // API 함수 호출
      addPost(response.data); // 서버에서 반환한 데이터 사용
    } catch (error) {
      console.error("Failed to create post:", error);
    }

    // 폼 초기화
    setNickname("");
    setTitle("");
    setContent("");
    setPostPassword("");
    setGroupPassword("");
    setImageUrl("");
    setTags("");
    setLocation("");
    setDate("");
    setIsPublic(true);
  };

  // 이미지 파일 선택 시 처리하는 함수
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Base64 인코딩된 이미지 URL 저장
      };
      reader.readAsDataURL(file); // 파일을 Base64로 변환
    }
  };
  return (
    <div className="entireForm">
      <p className="formTitle">추억 만들기</p>
      <form className="formPage" onSubmit={handleSubmit}>
        <div className="containerLeft">
          <div id="formContainer">
            <p id="formContainerTitle">닉네임</p>
            <input
              id="formContainerInput"
              type="text"
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
          <div id="formContainer">
            <p id="formContainerTitle">제목</p>
            <input
              id="formContainerInput"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div id="formContainer">
            <p id="formContainerTitle">이미지</p>
            <input
              id="formContainerInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div id="formContainer">
            <p id="formContainerTitle">본문</p>
            <textarea
              id="formContainerInput"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="containerRight">
          <div id="formContainer">
            <p id="formContainerTitle">태그</p>
            <input
              id="formContainerInput"
              type="text"
              placeholder="Tags (comma-separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div id="formContainer">
            <p id="formContainerTitle">장소</p>
            <input
              id="formContainerInput"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div id="formContainer">
            <p id="formContainerTitle">추억의 순간</p>
            <input
              id="formContainerInput"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div id="formContainer">
            <p id="formContainerTitle">추억 공개 선택</p>
            <label>공개</label>
            <input
              id="formContainerInput"
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
          </div>
          <div id="formContainer">
            <p id="formContainerTitle">비밀번호 생성</p>
            <input
              id="formContainerInput"
              type="password"
              placeholder="Password"
              value={postPassword}
              onChange={(e) => setPostPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="formButton" type="submit">
          올리기
        </button>
      </form>
    </div>
  );
};

export default PostForm;

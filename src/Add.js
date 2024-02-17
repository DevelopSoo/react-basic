import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <label>제목</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          const response = await axios.post("http://localhost:3001/posts", {
            title: title,
            views: 0,
          });
          console.log(response.status);
          console.log(response.data);
          navigate("/posts");
        }}
      >
        등록
      </button>
    </div>
  );
}

export default Add;

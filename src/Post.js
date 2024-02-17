import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Post() {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  // 1. 게시물 상세 id를 알아야 상세 데이터를 가져온다
  const { id } = useParams();
  // http://localhost:3000/posts/1
  // const { id } => id = 1

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
      setPost(res.data);
      setTitle(res.data.title);
    });
  }, []);

  // 2. 가져온 데이터로 화면에 보여준다
  return (
    <div>
      {post?.title}
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        수정하기
      </button>
      {open && (
        <div
          style={{
            border: "1px solid black",
            width: "200px",
            height: "200px",
          }}
        >
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
              // console.log("수정한 데이터: ", title);
              await axios.patch(`http://localhost:3001/posts/${post?.id}`, {
                title: title,
              });
              navigate("/posts");
            }}
          >
            수정
          </button>
        </div>
      )}
    </div>
  );
}

export default Post;

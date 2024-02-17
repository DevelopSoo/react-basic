import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// 1. READ: 게시물 목록을 가져온다
// -> 게시물 하나를 클릭하면 상세 게시물을 보여준다
function Posts() {
  // 1. state를 만든다.
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // 2. useEffect 안에서 axios 요청을 한다
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      const { data } = res;
      setPosts(data);
    });
  }, []);

  // 3. state에 map을 활용해서 화면에 보여준다
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post.id}>
          {/* 1. /posts/1 */}
          <Link to={`/posts/${post.id}`}>
            <div>
              <h1>제목: {post.title}</h1>
              <h1>조회수: {post.views}</h1>
            </div>
          </Link>
          <hr />
        </Fragment>
      ))}
      <button
        onClick={() => {
          navigate("/posts/add");
        }}
      >
        추가하기
      </button>
    </div>
  );
}

export default Posts;

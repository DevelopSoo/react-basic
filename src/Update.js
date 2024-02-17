import React, { useState } from "react";
import { useParams } from "react-router-dom";

// 1. 내가 클릭한 데이터를 input에 넣어준다
// 내가 클릭한 데이터를 알 수 있는 방법
// - url에 있는 id를 가져온다
// - id를 활용하여 db에서 데이터를 가져온다
// 2. input의 초기값에 넣어준다
function Update() {
  const [title, setTitle] = useState("");
  const { id } = useParams();

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
    </div>
  );
}

export default Update;

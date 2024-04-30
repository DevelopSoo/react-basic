import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({ products }) {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const onSelectHandler = (e) => {
    setSelectedOption(e.target.value);
  };
  const product = products.find((product) => product.id === Number(id));

  return (
    <div>
      <h1>상세 페이지</h1>
      <div
        style={{
          display: "flex",
          gap: "44px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "240px",
            backgroundColor: "#068FFF",
            color: "white",
            textAlign: "center",
          }}
        >
          <h2>{product.name}</h2>
        </div>
        <div>
          <h3>가격: {product.price} 원</h3>
          <h3>좋아요: {product.likeCount} 개</h3>
          <h3>구매옵션</h3>
          <select
            style={{
              width: "100px",
            }}
            onChange={onSelectHandler}
          >
            <option value="">선택하세요</option>
            {product.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {selectedOption && <p>선택된 옵션: {selectedOption}</p>}
        </div>
      </div>
    </div>
  );
}

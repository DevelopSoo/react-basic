// 1. Link import 하기
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
  // 2. 아래와 같이 변수로 선언
  const navigate = useNavigate();
  return (
    <main>
      {/* 케러셀 */}
      <section
        style={{
          backgroundColor: "#4E4FEB",
          color: "white",
          height: "300px",
          lineHeight: "300px",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        케러셀
      </section>
      {/* 여름 추천템 */}
      <section
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2 // 3. 이벤트 발생 시 navigate할 수 있음
          onClick={() => {
            // a 태그 X & 추가적인 코드 짤 수 있음
            alert("진짜 이동할꺼야??");
            navigate("/products");
          }}
        >
          🔥 여름 추천템 🔥
        </h2>
        <Link to="/products">더보기</Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품1
          </div>
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품2
          </div>
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품3
          </div>
        </div>
      </section>
      {/* 추가적인 데이터 */}
      <section
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 세일 상품 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#EEEEEE",
            }}
          >
            상품1
          </div>
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#EEEEEE",
            }}
          >
            상품2
          </div>
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#EEEEEE",
            }}
          >
            상품3
          </div>
        </div>
      </section>
    </main>
  );
}

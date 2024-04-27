import { Link, useSearchParams } from "react-router-dom";

export default function Products({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div
      style={{
        marginTop: "56px",
        textAlign: "center",
      }}
    >
      <h2>🔥 여름 추천템 🔥</h2>
      <button
        onClick={() => {
          setSearchParams({
            sort: "price",
          });
        }}
      >
        가격순정렬
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
                color: "white",
              }}
            >
              <h2>{product.name}</h2>
              <p>가격: {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likeCount: 100,
    },
    {
      id: 2,
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likeCount: 200,
    },
    {
      id: 3,
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likeCount: 300,
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main products={products} />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:id"
            element={<Product products={products} />}
          />
          <Route path="/login" element={<div>로그인 페이지</div>} />
          <Route path="/signup" element={<div>회원가입 페이지</div>} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <div>없는 페이지입니다.</div>
              <Link to="/">홈으로 이동</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

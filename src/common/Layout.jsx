import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
          }}
        >
          <div>로고</div>
        </Link>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "white",
            }}
          >
            <div>로그인</div>
          </Link>
          <Link
            to="/signup"
            style={{
              color: "white",
            }}
          >
            <div>회원가입</div>
          </Link>
        </div>
      </header>
      <Outlet />
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "fixed",
          bottom: "0",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </>
  );
}

export default Layout;

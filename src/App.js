import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";
import Add from "./Add";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. url에서 /posts로 들어오면 Posts 컴포넌트가 화면에 보인다. */}
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/add" element={<Add />} />
        {/* <Route path="/posts/:id/update" element={<Update />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

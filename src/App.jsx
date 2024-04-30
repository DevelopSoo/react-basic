import { useSelector, useDispatch } from "react-redux";
import { 증가 } from "./main";

function App() {
  // 여기서 데이터는 configureStore의 reducer에 있던 값이다. { 카운트: counterReducer }
  const count = useSelector((데이터) => 데이터.카운트.value);
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(증가());
  };

  return (
    <div>
      숫자: {count}
      <button onClick={onAdd}>+</button>
    </div>
  );
}

export default App;

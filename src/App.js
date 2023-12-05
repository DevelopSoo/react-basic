import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { nanoid } from "nanoid";

function App() {
  const queryClient = new useQueryClient();

  const { data, isLoading, isError, error } = useQuery("posts", async () => {
    const response = await axios.get("http://localhost:3001/posts");
    return response.data;
  });

  const mutation = useMutation(
    async (새로운데이터) => {
      await axios.post("http://localhost:3001/posts", 새로운데이터);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  if (isLoading) {
    return <div>데이터 가져오는 중임</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
      <button
        onClick={() => {
          mutation.mutate({
            id: nanoid(),
            title: "useState로 입력된 title",
            author: "useState로 입력된 author",
          });
        }}
      >
        데이터추가!!
      </button>
    </div>
  );
}

export default App;

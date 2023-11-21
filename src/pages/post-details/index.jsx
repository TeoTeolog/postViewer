import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../shared/api/postApi";

export default function PostDetails(props) {
  const { taskId } = useParams();
  const { data, error, isLoading } = useGetPostByIdQuery(taskId);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <h1>Post</h1>
      {!!data ? data.body : "loading"}
    </>
  );
}

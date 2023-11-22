import { useParams } from "react-router-dom";
import { PostDetailCard } from "#entities/post";
import { usePostModel } from "#entities/post";

export default function PostDetails(props) {
  const { taskId } = useParams();
  const { post, error, isLoading } = usePostModel(taskId);

  return (
    <>
      <h1>Post #{post?.id}</h1>
      {isLoading || !post ? (
        "loading"
      ) : (
        <PostDetailCard key={post.id} post={post} />
      )}
    </>
  );
}

//simple posts list implementation widget

import { Post } from "#entities/post";
import { usePostsListModel } from "#entities/post";

export const PostList = () => {
  const { posts, isLoading } = usePostsListModel();
  return (
    <>
      {isLoading || !posts
        ? "loading"
        : posts.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

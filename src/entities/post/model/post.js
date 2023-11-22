import { useGetPostByIdQuery } from "#shared/api/postApi";
import { useEffect, useState } from "react";

//model using created API by RTK Query; fetching and parsing

//for only one post
export const usePostModel = (id) => {
  const { data, isLoading, error } = useGetPostByIdQuery(id);
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (data)
      setPost({
        id: data.id,
        title: data.title,
        author: data.author,
        text: data.body,
      });
  }, [data]);
  return { post, isLoading, error };
};

//for list of posts
export const usePostsListModel = () => {
  // i think it is legal cheat, not a crutch (if it eyesore, i can fix it)
  const { data, isLoading, error } = useGetPostByIdQuery("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data)
      setPosts(
        data.map((element) => ({
          id: element.id,
          title: element.title,
          author: element.author,
          text: element.body,
        }))
      );
  }, [data]);

  return {
    posts,
    isLoading,
    error,
  };
};

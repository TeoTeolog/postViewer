import {
  useGetPostByIdQuery,
  useGetPostsSliceQuery,
} from "#shared/api/postApi";
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
  // a little prepaering before virtualization
  const { data, isLoading, error } = useGetPostsSliceQuery({
    start: 0,
    limit: 50,
  });
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

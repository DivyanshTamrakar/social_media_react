import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { LeftSection, RightSection, PostContainer } from "./Post.style";
import { fetchPost } from "../../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";

function PostComponent() {
  const postArray = useSelector((state) => state.posts.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch, postArray]);

  return (
    <PostContainer>
      <LeftSection>
        {postArray?.map(
          (
            {
              _id,
              post,
              caption,
              likes,
              comments,
              user_profile,
              username,
              createdAt,
            },
            index
          ) => {
            return (
              <PostCard
                key={index}
                postId={_id}
                post={post}
                caption={caption}
                likes={likes}
                comments={comments}
                user_profile={user_profile}
                username={username}
                createdAt={createdAt}
              />
            );
          }
        )}
      </LeftSection>
      <RightSection></RightSection>
    </PostContainer>
  );
}

export default PostComponent;

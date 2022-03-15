import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { LeftSection, RightSection, PostContainer } from "./Post.style";
import { fetchPost } from "../../features/posts/postSlice";
import { useSelector, useDispatch } from "react-redux";
import Load from "../../utils/Loader";

function PostComponent() {
  const postArray = useSelector((state) => state.posts.posts);
  const loadstate = useSelector((state) => state.posts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div>
      {loadstate ? (
        <Load />
      ) : (
        <div>
          {postArray.length > 0 ? (
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
          ) : (
            <Load />
          )}
        </div>
      )}
    </div>
  );
}

export default PostComponent;

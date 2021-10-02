import React from "react";
import Load from "../../utils/Loader";
import PostCard from "./PostCard";
import { LeftSection, RightSection, PostContainer } from "./Post.style";
import { usePost } from "../../Context/PostsContext";

function PostComponent() {
  const { posts, showloader } = usePost();

  return (
    <div>
      {showloader ? (
        <Load />
      ) : (
        <PostContainer>
          <LeftSection>
            {posts.map(
              ({
                _id,
                post,
                caption,
                likes,
                comments,
                user_profile,
                username,
                createdAt,
              }) => {
                return (
                  <PostCard
                    key={_id}
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
      )}
    </div>
  );
}

export default PostComponent;

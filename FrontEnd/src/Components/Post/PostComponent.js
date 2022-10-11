import React from "react";
import PostCard from "./PostCard";
import { LeftSection, RightSection, PostContainer } from "./Post.style";
import { useSelector } from "react-redux";
import Load from "../../utils/Loader";

function PostComponent() {
  const { posts, isLoading } = useSelector((state) => state.posts);

  return (
    <div>
      {isLoading ? (
        <Load />
      ) : (
        <div>
          {posts.length > 0 ? (
            <PostContainer>
              <LeftSection>
                {posts?.map(
                  ({
                    _id,
                    post,
                    caption,
                    likes,
                    posted_user_data,
                    comments,
                    createdAt,
                  }) => {
                    return (
                      <PostCard
                        key={_id}
                        postId={_id}
                        post={post}
                        caption={caption}
                        likes={likes}
                        posted_user_data={posted_user_data}
                        comments={comments}
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

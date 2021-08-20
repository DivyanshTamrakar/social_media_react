import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import TimeAgo from "react-timeago";
import Button from "@material-ui/core/Button";
import {
  Caption,
  ActionArea,
  LeftSection,
  RightSection,
  Comment,
  HeadArea,
  PostSection,
  PostContainer,
} from "./Post.style";
import { getData } from "../../FetchingApi/fetchApi";
function PostComponent() {
  const [comment, setcomment] = useState("");
  const [posts, setposts] = useState([]);

  useEffect(() => {
    GetPosts();
  }, [posts]);

  const GetPosts = async () => {
    try {
      const response = await getData("/addpost");
      if (response.success) {
        setposts(response.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContainer>
      <LeftSection>
        {posts.map(({ userid, post, caption, likes, user_profile, username ,createdAt}) => {
          return (
            <PostSection>
              <HeadArea>
                <Avatar alt="Remy Sharp" src={user_profile} />
                <h4>{username}</h4>
              </HeadArea>
              <img
                src={post}
                alt={"divy"}
                height="400px"
                width="100%"
              />
              <ActionArea>
                <FavoriteBorderIcon />
                <ChatBubbleOutlineIcon />
                <BookmarkBorderIcon />
              </ActionArea>

              <Caption>
                <h4>{username}</h4>

                <span>{caption}</span>
              </Caption>
              <TimeAgo date={createdAt} />
              <Comment>
                <input
                  type="text"
                  placeholder="Add comment"
                  onChange={(e) => setcomment(e.target.value)}
                />
                <Button
                  disabled={comment === "" ? true : false}
                  color="primary"
                >
                  Post
                </Button>
              </Comment>
            </PostSection>
          );
        })}
      </LeftSection>
      <RightSection></RightSection>
    </PostContainer>
  );
}

export default PostComponent;

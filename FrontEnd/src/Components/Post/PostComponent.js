import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import TimeAgo from "react-timeago";
import Button from "@material-ui/core/Button";
import { data } from "../../Data/data";
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

function PostComponent() {
  const [comment, setcomment] = useState("");
  return (
    <PostContainer>
      <LeftSection>
        {data.map((element) => {
          return (
            <PostSection>
              <HeadArea>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h4>{element.username}</h4>
              </HeadArea>
              <img
                src={"https://i.stack.imgur.com/y9DpT.jpg"}
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
                <h4>{element.username}</h4>

                <span>{element.caption}</span>
              </Caption>
              <TimeAgo date={element.created} />
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

import React, { useState, useEffect, useReducer } from "react";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import TimeAgo from "react-timeago";
import Button from "@material-ui/core/Button";
import { useProfile } from "../../Context/ProfileContext";
import { postData } from "../../FetchingApi/fetchApi";
import {
  Caption,
  ActionArea,
  Comment,
  HeadArea,
  PostSection,
} from "./Post.style";

function PostCard({
  postId,
  post,
  caption,
  likes,
  user_profile,
  username,
  createdAt,
}) {
  const likeClick = async (id) => {
    let body = { postId: id, userid: user._id };
    try {
      let response = await postData(body, "/addpost/like");

      if (response.success) {
        console.log(response.message);
      }
    } catch (error) {
      console.log("errorr", error);
    }
  };

  const DislikeClick = async (id) => {
    let body = { postId: id, userid: user._id };
    try {
      let response = await postData(body, "/addpost/dislike");

      if (response.success) {
        console.log(response.message);
      }
    } catch (error) {
      console.log("errorr", error);
    }
  };

  const [comment, setcomment] = useState("");
  const { user } = useProfile();

  return (
    <div>
      <PostSection>
        <HeadArea>
          <Avatar alt="Remy Sharp" src={user_profile} />
          <h4>{username}</h4>
        </HeadArea>
        <img src={post} alt={"post"} height="400px" width="100%" />
        <ActionArea>
          {likes.includes(user._id) ? (
            <FavoriteIcon onClick={() => DislikeClick(postId)} />
          ) : (
            <FavoriteBorderIcon onClick={() => likeClick(postId)} />
          )}
          <ChatBubbleOutlineIcon />
          <BookmarkBorderIcon />
        </ActionArea>
        <span>{likes.length} likes</span>
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
          <Button disabled={comment === "" ? true : false} color="primary">
            Post
          </Button>
        </Comment>
      </PostSection>
    </div>
  );
}

export default PostCard;

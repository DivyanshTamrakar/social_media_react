import React, { useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
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
  ImageArea
} from "./Post.style";

function PostCard({
  postId,
  post,
  caption,
  likes,
  user_profile,
  comments,
  username,
  createdAt,
}) {
  const [comment, setcomment] = useState("");
  const [commentlist, setcommentlist] = useState(comments);
  const { user } = useProfile();
  const [likeArray, setlikeArray] = useState(likes);
  const commentRef = useRef(0)

  const likeClick = async (id) => {
    let body = { postId: id, userid: user._id };
    try {
      let response = await postData(body, "/addpost/like");

      if (response.success) {
        setlikeArray(response.result.likes);
        console.log(typeof likeArray.length);
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
        setlikeArray(response.result.likes);
      }
    } catch (error) {
      console.log("errorr", error);
    }
  };

  async function postComment() {
    setcomment("");
    const body = {
      postid: postId,
      text: comment,
      postedBy: user._id,
    };

    try {
      const response = await postData(body, "/addpost/comment");

      if (response.success) {
        setcommentlist(response.result.comments);
      }
    } catch (error) {
      console.log("errorr", error);
    }
  }

 

  return (
      <PostSection>
        <HeadArea>
          <Avatar alt="Remy Sharp" src={user_profile} />
          <h4>{username}</h4>
        </HeadArea>
        <ImageArea >
        <img src={post} alt={"post"}/>
        </ImageArea>
        <ActionArea>
          {likeArray.includes(user._id) ? (
            <FavoriteIcon color="error" onClick={() => DislikeClick(postId)} />
          ) : (
            <FavoriteBorderIcon onClick={() => likeClick(postId)} />
          )}
          <ChatBubbleOutlineIcon onClick={()=>commentRef.current.focus()} />
        </ActionArea>
        <span>{likeArray.length} likes</span>
        <Caption>
          <h4>{username}</h4>
          <span>{caption}</span>
        </Caption>
        <TimeAgo date={createdAt} />
        {commentlist.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                fontWeight: "bold",
                textAlign: "left",
                marginLeft: "15px",
              }}
            >
              <span> {item.postedBy.username}</span>
              <span
                style={{
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                {" "}
                {item.text}
              </span>
            </div>
          );
        })}
        <Comment>
          <input
          ref={commentRef}
            type="text"
            placeholder="Add comment"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
          />
          <Button
            onClick={postComment}
            disabled={!comment ? true : false}
            color="primary"
          >
            Post
          </Button>
        </Comment>
      </PostSection>
  );
}

export default PostCard;

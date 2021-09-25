import React from "react";
import "reactjs-popup/dist/index.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import Popup from "reactjs-popup";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import Button from "@material-ui/core/Button";
import { useProfile } from "../../Context/ProfileContext";
import { usePost } from "../../Context/PostsContext";
import { postData } from "../../FetchingApi/fetchApi";
import {
  AddImage,
  ComposePost,
  Post,
  Caption,
  HeaderArea,
  contentstyle,
  placeholder,
} from "../../styles/addpost.style";
function AddPost() {
  const [open, setOpen] = useState(false);
  const [post, setpost] = useState(placeholder);
  const [caption, setcaption] = useState("");
  const { user } = useProfile();
  const { GetPosts } = usePost();

  const ImageHandler = (e) => {
    const reader = new FileReader();

    console.log(reader);
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setpost(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const closeModal = () => setOpen(false);

  const PostHandler = async () => {
    const body = {
      userid: user._id,
      post: post,
      caption: caption,
      user_profile: user.photo_url,
      username: user.username,
    };
    setOpen(true);

    try {
      const resposne = await postData(body, "/addpost");

      if (resposne.success) {
        closeModal();
        GetPosts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Post>
      {!open && (
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setOpen((o) => !o)}
        >
          <AddIcon />
        </Fab>
      )}
      <Popup
        open={open}
        modal={true}
        closeOnDocumentClick={false}
        repositionOnResize={true}
        onClose={closeModal}
        contentStyle={contentstyle}
      >
        <ComposePost>
          <HeaderArea>
            <h3>Compose Post</h3>
            <CancelSharpIcon onClick={closeModal} />
          </HeaderArea>
          <hr></hr>
          <Caption>
            <textarea
              type="textarea"
              placeholder={"Whats on your mind " + user.name + "?"}
              onChange={(e) => setcaption(e.target.value)}
            />
          </Caption>
          <AddImage>
            <img alt="postimage" src={post} />
            {post !== placeholder && (
              <CancelSharpIcon onClick={() => setpost(placeholder)} />
            )}

            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={ImageHandler}
            />
            <label htmlFor="contained-button-file">
              {post === placeholder && (
                <Button variant="outlined" color="secondary" component="span">
                  Upload
                </Button>
              )}
            </label>
          </AddImage>
          <Button
            variant="contained"
            color="primary"
            disabled={post === placeholder ? true : false}
            onClick={PostHandler}
          >
            Post
          </Button>
        </ComposePost>
      </Popup>
    </Post>
  );
}

export default AddPost;

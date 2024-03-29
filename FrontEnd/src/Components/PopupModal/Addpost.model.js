import React from "react";
import "reactjs-popup/dist/index.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import Popup from "reactjs-popup";
import CancelSharpIcon from "@material-ui/icons/CancelSharp";
import Button from "@material-ui/core/Button";
import {
  AddImage,
  ComposePost,
  Post,
  Caption,
  HeaderArea,
  contentstyle,
  placeholder,
} from "../../styles/addpost.style";
import { UploadPost } from "../../features/posts/postSlice";
import { useDispatch, useSelector } from "react-redux";

function AddPost() {
  const [open, setOpen] = useState(false);
  const [post, setpost] = useState(placeholder);
  const [caption, setcaption] = useState("");

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const ImageHandler = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setpost(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const closeModal = () => setOpen(false);

  const uploadPost = async () => {
    dispatch(
      UploadPost({
        userid: user._id,
        post: post,
        caption: caption,
      })
    );

    closeModal();
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
            onClick={uploadPost}
          >
            Post
          </Button>
        </ComposePost>
      </Popup>
    </Post>
  );
}

export default AddPost;

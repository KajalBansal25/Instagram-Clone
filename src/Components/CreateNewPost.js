import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "./img";
import Profile from "./Profile";

const CreateNewPost = ({ hidePopup }) => {
  const navigate = useNavigate();
  const [files, setFiles] = useState();

  let [updatedPost, setUpdatedPost] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append("postedBy", `${JSON.parse(localStorage.getItem("id"))}`);
    data.append("username", `${JSON.parse(localStorage.getItem("username"))}`);
    console.log("submithandler>>>", e.target);
    const token = `${JSON.parse(localStorage.getItem("token"))}`;
    console.log(token, ">>>>>>>>>?");

    axios({
      method: "POST",
      url: "http://localhost:8086/post/uploadpost",
      data: data,
      headers: { token: token, "Content-Type": "multipart/form-data" },
      params: {
        _limit: 1,
      },
    })
      .then((res) => {
        console.log("success>>", res.data);
        console.log("success>>>kajal>>>",res)
        if(res.status===200){
          setFiles(`http://localhost:8086/` + res.data.data.filePath);
        hidePopup();
        updatedPost = res.data;
        setUpdatedPost(updatedPost);
        console.log("updatedpost:>>", updatedPost);
        }
        else if(res.status===401|| res.data===403){
          alert("u r unauthorized user hahahha hmm hnn")
          localStorage.clear()
          navigate("/login")
        }

      })
      .catch((err) => {
        console.log("error in posting of the createnewpost", err);
      });
  };

  const clickHandler = () => {
    setFiles(null);
    console.log("CLickHandler", files);
  };

  const onInputChange = (e) => {
    console.log("oninputchange", e.target.files);
    let src = URL.createObjectURL(e.target.files[0]);
    console.log("SRC>>>", src);
    setFiles(src);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          height: "130vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <div className="createnewpost">
          <form onSubmit={submitHandler}>
            <div className="createnewpostshare">
              <p>Create new post</p>
              <input type="submit" value="Share" />
            </div>
            <div className="createnewpostsection">
              <div className="createnewpostsectionone">
                <svg
                  aria-label="Icon to represent media such as images or videos"
                  className="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="77"
                  role="img"
                  viewBox="0 0 97.6 77.3"
                  width="96"
                >
                  <path
                    d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Select photos and videos here</p>
                <input type="file" name="image" onChange={onInputChange} />
                {files ? <button onClick={clickHandler}>Discard</button> : null}
                {console.log("files", files)}
                {files ? (
                  <img
                    src={files}
                    style={{ height: "200px", width: "200px" }}
                  />
                ) : null}
              </div>
              <div className="createnewpostsectiontwo">
                <div className="createnewpostsectiontwoone">
                  <img src={profile} alt="profile" className="profileofpost" />
                  ID name
                </div>
                <input
                  type="text"
                  name="caption"
                  placeholder="Write a caption..."
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateNewPost;

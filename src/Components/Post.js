import axios from "axios";
import React, { useEffect, useState } from "react";
import { profile } from "./img";
import SvgList from "./SvgList";
import { useNavigate } from "react-router-dom";



const Post = () => {
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState();

  const [deletePost, setDeletePost] = useState(false);
  const token = `${JSON.parse(localStorage.getItem("token"))}`;
  const navigate = useNavigate();

  const getPosts = () => {
    axios({
      method: "POST",
      url: "http://localhost:8086/post/getpost",
      data: { id: "" },
      headers: { token: token },
    }).then((res) => {
      console.log("res.data>>>getting feed post>>>", res.data);
      console.log("res>>>getting feed posts",res.status)
      // res.status=401
            if(res.status===200)
      setPosts(res.data);
      else if(res.status===401|| res.status===403){
        localStorage.clear()
        alert("u r unauthorized user hahaha")
        navigate("/login")
      }
    });
  };
  useEffect(() => {
    getPosts();
  }, []);

  const deleteHandler = (id, itemforbackend) => {
    console.log(id);
    console.log(itemforbackend._id);
    const updatedPosts = posts.filter((elem, ind) => {
      return id !== ind;
    });
    setPosts(updatedPosts);

    axios({
      method: "DELETE",
      url: `http://localhost:8086/post/deletepost/${itemforbackend._id}`,
      headers: { token: token },
    })
      .then((res) => {
        console.log("res.data._id for the data to be deleted", res.data);
        if(res.data==="OK"){
          setDeletePost(!deletePost);
        }
        else if(res.data==="unauthorized"|| res.data==="forbidden"){
          alert("u r unauthorized user")
          localStorage.clear()
          navigate("/login")
        }
        setDeletePost(!deletePost);
      })
      .catch((err) => {
        console.log(
          "error in sending the deleting api to the backend from the frontend>>>",
          err
        );
      });
  };

  return (
    <>
      {/* <div className="postcontainer">
        <div className="postnamecontainer">
          <div className="postandname">
            <img src={profile} alt="profile" className="profileofpost" />
            
            <span>ID Name</span>
          </div>
          <div className="severalpost">...</div>
        </div>
        <img src={personOne} alt="person1" className="personId" />

        <div className="commentsandposts">
          <div className="commentsandpostsone">
            <div className="commentsandpostsoneicon">
             <SvgList />
              
              
            </div>
            <div className="profilecommentcontent">
              <div className="profilecommentcontentimgpara">
                <img src={profile} alt="profile" className="profilecomment" />
                <p id="like">Liked by sakshi dubey and others</p>
              </div>
              <p>ID name random plans are best</p>
              <p>View all three comments</p>
              <p>22 HOURS AGO</p>
            </div>
          </div>
          <div className="commentsandpoststwo">
            <svg
              aria-label="Save"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="commentsection">
          <div className="commentsectionleft">
            <svg
              aria-label="Emoji"
              className="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
            </svg>

            <input placeholder="Add a comment..." />
          </div>
          <button className="commentsectionright" type="submit">
            Post
          </button>
        </div>
      </div> */}
      {posts.map((item, index) => (
        <div className="postcontainer">
          <div className="postnamecontainer">
            <div className="postandname">
              <img src={profile} alt="profile" className="profileofpost" />
              {/* <span>ID Name</span> */}
              {/* <span>{item.fileName}</span> */}
              {/* <span>{JSON.parse(localStorage.getItem("username"))}</span> */}
              {/* <span>{item.postedBy}</span> */}
              <span>{item.username}</span>
            </div>
            {/* <div className="severalpost">...</div> */}
            <div className="severalpost">
              {" "}
              <button onClick={() => deleteHandler(index, item)}>
                Delete
              </button>{" "}
            </div>
            {console.log("kkkkkkk", JSON.stringify(item._id))}
            {console.log("kkkkkkk", item._id)}
          </div>
          {console.log("post", item)}
          {console.log("item.filepath is:>>>", item.filePath)}
          <img
            src={"http://localhost:8086/" + item.filePath}
            alt="person1"
            className="personId"
            key={index}
            style={{ height: "608.703px", width: "100%", objectFit: "contain" }}
          />
          {console.log("key>>>", index)}
          <div className="commentsandposts">
            <div className="commentsandpostsone">
              <div className="commentsandpostsoneicon">
                <SvgList />
              </div>
              <div className="profilecommentcontent">
                <div className="profilecommentcontentimgpara">
                  <img src={profile} alt="profile" className="profilecomment" />
                  <p id="like">Liked by sakshi dubey and others</p>
                </div>
                <p>ID name random plans are best</p>
                <p>View all three comments</p>
                <p>22 HOURS AGO</p>
              </div>
            </div>
            <div className="commentsandpoststwo">
              <svg
                aria-label="Save"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="commentsection">
            <div className="commentsectionleft">
              <svg
                aria-label="Emoji"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
              </svg>

              <input placeholder="Add a comment..." />
            </div>
            <button className="commentsectionright" type="submit">
              Post
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Post;

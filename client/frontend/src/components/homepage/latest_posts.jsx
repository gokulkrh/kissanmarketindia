import { React, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import "../../styles/homepage/latest_posts.css";
import favicon from "../../images/favheart.png";
import clockIcon from "../../images/clock.png";
import locationIcon from "../../images/locations.png";

export default function LatestPosts() {
  const hasMountedRef = useRef(false);
  const [data, setData] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://localhost:5000/v1/posts/all")
      .then((response) => response.data)
      .then((data) => {
        setData(data.posts);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useLayoutEffect(() => {
    if (!hasMountedRef.current) {
      fetchPosts();
      hasMountedRef.current = true;
    }
  }, []);

  return (
    <div className="posts-container">
      <h2>Latest Posts</h2>
      <div className="post-list">
        {data.map((posts) => (
          <div key={posts.post_id} className="post-card">
            <div className="posts-image">
              <img
                className="posts-thumbnail"
                src={
                  "http://localhost:5000/images/categories/" +
                  posts.category +
                  ".jpg"
                }
                alt="blah"
              />
              <button className="favourite-button">
                <img className="posts-favicon" src={favicon} alt="blah" />
              </button>
            </div>
            <div className="post-description">
              <h3>{posts.title}</h3>
              <br />
              <span>{posts.description}</span>
              <br />
              <span>{posts.category}</span>
              <br />
            </div>
            <div className="post-time-loc-container">
              <p className="time-loc-text">
                <img className="time-loc-icons" src={clockIcon} alt="blah" />
                &nbsp;
                {new Date(posts.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }) +
                  " at " +
                  new Date(posts.created_at).toLocaleTimeString("en-US", {
                    hour12: true,
                    hour: "numeric",
                    minute: "numeric",
                  })}
              </p>
              <p className="time-loc-text">
                <img className="time-loc-icons" src={locationIcon} alt="blah" />
                &nbsp;{posts.place}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

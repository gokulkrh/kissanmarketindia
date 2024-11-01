import { React, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import "../../styles/homepage/categories-carousel.css";

import nextIcon from "../../images/next.png";
import prevIcon from "../../images/prev.png";

function Categories() {
  const hasMountedRef = useRef(false);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/v1/categories/list")
      .then((response) => response.data)
      .then((data) => {
        setData(data.categories);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useLayoutEffect(() => {
    if (!hasMountedRef.current) {
      fetchData();
      hasMountedRef.current = true;
    }
  }, []);

  return (
    <div className="categories-container">
      <h2>Browse by Category</h2>
      <div className="categories-content">
        <button>
          <img src={prevIcon} alt="blah" />
        </button>
        <ul className="categories-list">
          {data.map((category, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + 4;
            return (
              <li key={category.name} onClick={fetchData}>
                <img className="category-image" src={category.image_url} alt={category.name} />
                <br />
                <span>{category.name}</span>
              </li>
            );
          })}
        </ul>
        <button>
          <img src={nextIcon} alt="blah" />
        </button>
      </div>
    </div>
  );
}

export { Categories };

import {React, useLayoutEffect, useRef, useState} from "react";
import axios from "axios";
import "./styles/categories-carousel.css"

function Categories() {
    const hasMountedRef = useRef(false);
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:5000/v1/categories")
        .then((response) => response.data)
        .then((data) => {
            setData(data);
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
            <div className="categories-content">
                <div className="card-wrapper">
                    {data.map((category) => (
                        <div className="card">
                            <img className="category-image" src={category.img_url} alt={category.name} />
                            <span>{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories

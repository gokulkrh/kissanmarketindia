import { React } from "react";
import "../../styles/search/search_bar.css";

import locationIcon from "../../images/location.png";
import postIcon from "../../images/posts3.png";

export default function HomePageSearch() {
  return (
    <div className="homepage-search-area">
      <div className="homepage-search-bar">
        <img src={postIcon} alt="blah" />
        <input type="text" className="input-location" placeholder="What ?" />
        <hr className="vertical-search-divider"></hr>
        <img src={locationIcon} alt="blah" />
        <input type="text" className="input-product" placeholder="Where ?" />
      </div>
      <button className="search-input-submit">Find</button>
    </div>
  );
}

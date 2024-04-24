import React from "react";
import { Categories } from "../components/homepage/categories_carousel";
import LatestPosts from "../components/homepage/latest_posts";
import HomePageSearch from "../components/search/search_bar";

export default function LandingPage() {
  return (
    <React.Fragment>
      <HomePageSearch />
      <Categories />
      <LatestPosts />
    </React.Fragment>
  );
}

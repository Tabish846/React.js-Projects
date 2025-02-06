import React from "react";
import Row from "./Row";
import { movies1, movies2 } from "./data";

const Content = () => {
  return (
    <div>
      <div className="content">
        <Row title="Most Popular" posters={movies1} />
        <Row title="Top Picks for You" posters={movies2} />
        <Row title="Trending Now" posters={movies1} />
        <Row title="Most Viewed" posters={movies2} />
        
      </div>
    </div>
  );
};

export default Content;

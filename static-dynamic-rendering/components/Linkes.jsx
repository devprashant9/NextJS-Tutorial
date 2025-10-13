"use client";

import { useState } from "react";

const Linkes = () => {
  const [likes, setLikes] = useState(2000);
  if (typeof localStorage !== "undefined") {
    console.log(localStorage);
  }
  return (
    <div>
      {likes} Likes
      <button onClick={() => setLikes(likes + 1)}>Click</button>
    </div>
  );
};

export default Linkes;

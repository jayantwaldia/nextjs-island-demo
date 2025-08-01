"use client";
import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} className="like-button">
      {liked ? "❤️" : "🤍"} {liked ? "Liked" : "Like"}
    </button>
  );
}

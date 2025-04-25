import React, { useState } from "react";
import { FaHeart, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

type Props = {
  likes: number;
  upvotes: number;
  downvotes: number;
  onLike?: () => void;
  onUpvote?: () => void;
  onDownvote?: () => void;
};

const BetRatingCard: React.FC<Props> = ({
  likes,
  upvotes,
  downvotes,
  onLike,
  onUpvote,
  onDownvote,
}) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="bg-light rounded shadow-sm d-flex flex-column align-items-center p-3"
      style={{ width: "500px" }}
    >
      {/* Empty image container */}
      <div
        className="mb-3 rounded"
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#f1f1f1",
        }}
      />

      {/* Voting stats */}
      <div className="d-flex justify-content-between w-100 px-2 text-secondary">
        <div
          className="d-flex align-items-center gap-2"
          onMouseEnter={() => setHovered("heart")}
          onMouseLeave={() => setHovered(null)}
          onClick={onLike}
          role="button"
        >
          <FaHeart color={hovered === "heart" ? "#ff80ab" : undefined} />
          <span>{likes}</span>
        </div>

        <div
          className="d-flex align-items-center gap-2"
          onMouseEnter={() => setHovered("up")}
          onMouseLeave={() => setHovered(null)}
          onClick={onUpvote}
          role="button"
        >
          <FaThumbsUp color={hovered === "up" ? "#7ed957" : undefined} />
          <span>{upvotes}</span>
        </div>

        <div
          className="d-flex align-items-center gap-2"
          onMouseEnter={() => setHovered("down")}
          onMouseLeave={() => setHovered(null)}
          onClick={onDownvote}
          role="button"
        >
          <FaThumbsDown color={hovered === "down" ? "#ff6b6b" : undefined} />
          <span>{downvotes}</span>
        </div>
      </div>
    </div>
  );
};

export default BetRatingCard;

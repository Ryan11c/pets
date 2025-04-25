import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
//import "./BetRatingCard.css"; // Optional for custom styles

type Props = {
  imageUrl?: string;
  upvotes: number;
  downvotes: number;
  onUpvote?: () => void;
  onDownvote?: () => void;
};

const BetRatingCard: React.FC<Props> = ({
  imageUrl,
  upvotes,
  downvotes,
  onUpvote,
  onDownvote,
}) => {
  return (
    <div className="d-flex flex-column align-items-center p-3">
      <div
        className="bg-light mb-2"
        style={{
          width: 150,
          height: 150,
          backgroundColor: "#d8ebf9",
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
          backgroundSize: "cover",
          border: "1px solid #333",
        }}
      />
      <div className="d-flex justify-content-around w-100">
        <div className="text-center">
          <button
            className="btn btn-outline-secondary rounded-pill bg-light"
            onClick={onDownvote}
          >
            <FaThumbsDown size={32} />
          </button>
          <div>{downvotes.toLocaleString()}</div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-outline-secondary rounded-pill bg-light"
            onClick={onUpvote}
          >
            <FaThumbsUp size={32} />
          </button>
          <div>{upvotes.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default BetRatingCard;

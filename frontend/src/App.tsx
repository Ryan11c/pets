// App.tsx
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BetRatingCard from "./components/BetRatingCard";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex" style={{ minHeight: "100vh" }}>
        <div className="flex-grow-1 d-flex align-items-center justify-content-center gap-4 flex-wrap p-4">
          <BetRatingCard
            likes={124}
            upvotes={87}
            downvotes={12}
            onUpvote={() => alert("You upvoted the first one!")}
            onDownvote={() => alert("You downvoted the first one!")}
          />
          <BetRatingCard
            likes={98}
            upvotes={65}
            downvotes={18}
            onUpvote={() => alert("You upvoted the second one!")}
            onDownvote={() => alert("You downvoted the second one!")}
          />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default App;
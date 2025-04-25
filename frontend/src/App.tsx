import React from 'react';
import Navbar from './components/Navbar';
import BetRatingCard from './components/BetRatingCard';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5 d-flex justify-content-center gap-4 flex-wrap">
        <BetRatingCard
          upvotes={2000}
          downvotes={10}
          onUpvote={() => alert('You upvoted the first one!')}
          onDownvote={() => alert('You downvoted the first one!')}
        />
        <BetRatingCard
          upvotes={1800}
          downvotes={25}
          onUpvote={() => alert('You upvoted the second one!')}
          onDownvote={() => alert('You downvoted the second one!')}
        />
      </div>
    </>
  );
};

export default App;
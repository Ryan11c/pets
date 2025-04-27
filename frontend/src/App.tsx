import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import BetRatingCard from "./components/BetRatingCard";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Fluffy",
      imageUrl: "https://th.bing.com/th/id/R.103c669e919607b743904a82182c48c6?rik=aj0MTR58WbfJPw&riu=http%3a%2f%2fwww.shaparack.com%2fresources%2fdbimages%2f1481447091_0.jpg&ehk=puOfkca%2brBOsHM%2fv3fVb4DYzpEANMOTPr5iV1%2bXiR2g%3d&risl=&pid=ImgRaw&r=0",
      likes: 124,
      upvotes: 87,
      downvotes: 12,
    },
    {
      id: 2,
      name: "Barky",
      imageUrl: "https://placedog.net/500/500?id=1",
      likes: 98,
      upvotes: 65,
      downvotes: 18,
    },
  ]);

  const handleVote = (id: number, type: "like" | "up" | "down") => {
    setPets(prevPets =>
      prevPets.map(pet =>
        pet.id === id
          ? {
              ...pet,
              likes: type === "like" ? pet.likes + 1 : pet.likes,
              upvotes: type === "up" ? pet.upvotes + 1 : pet.upvotes,
              downvotes: type === "down" ? pet.downvotes + 1 : pet.downvotes,
            }
          : pet
      )
    );
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar pets={pets} />
      <div className="flex-grow-1 d-flex align-items-center justify-content-center gap-4 flex-wrap p-4">
        {pets.map(pet => (
          <BetRatingCard
            key={pet.id}
            name={pet.name}
            imageUrl={pet.imageUrl}
            likes={pet.likes}
            upvotes={pet.upvotes}
            downvotes={pet.downvotes}
            onLike={() => handleVote(pet.id, "like")}
            onUpvote={() => handleVote(pet.id, "up")}
            onDownvote={() => handleVote(pet.id, "down")}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

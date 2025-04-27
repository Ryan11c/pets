import React from "react";

type SidebarProps = {
  pets: {
    id: number;
    name: string;
    likes: number;
    upvotes: number;
    downvotes: number;
  }[];
};

const Sidebar: React.FC<SidebarProps> = ({ pets }) => {
  const sortedPets = [...pets].sort(
    (a, b) =>
      (b.likes + b.upvotes - b.downvotes) - (a.likes + a.upvotes - a.downvotes)
  );

  return (
    <div
      className="bg-white text-dark p-4"
      style={{
        width: "280px",
        minHeight: "100vh",
      }}
    >
      <h4 className="mb-4 text-center">🏆 Leaderboard</h4>
      <div className="d-flex flex-column gap-3">
        {sortedPets.map((entry, index) => (
          <div
            key={entry.id}
            className="bg-light p-3 rounded shadow-sm d-flex justify-content-between"
          >
            <strong>{entry.name}</strong>
            <span>{entry.likes + entry.upvotes - entry.downvotes} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

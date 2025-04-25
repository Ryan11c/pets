import React from "react";

const leaderboardData = [
  { name: "Fluffy", points: 2450 },
  { name: "Barky", points: 2310 },
  { name: "Spike", points: 1980 },
  { name: "Whiskers", points: 1740 },
  { name: "Ziggy", points: 1590 },
];

const Sidebar: React.FC = () => {
  return (
    <div
      className="bg-dark text-white p-4"
      style={{
        width: "280px",
        minHeight: "100vh",
        borderLeft: "1px solid #444",
      }}
    >
      <h4 className="mb-4 text-center">🏆 Leaderboard</h4>
      <div className="d-flex flex-column gap-3">
        {leaderboardData.map((entry, index) => (
          <div
            key={index}
            className="bg-light text-dark p-3 rounded shadow-sm d-flex justify-content-between"
          >
            <strong>{entry.name}</strong>
            <span>{entry.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

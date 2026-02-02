import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import UserStatus from "./components/UserStatus";

function App() {
  const [user, setUser] = useState({
    name: "Batmann 🦇",
    role: "Dark Knight",
    rating: 5,
    price: 999,
    status: "On Patrol"
  });

  const toggleStatus = () => {
    setUser((prevUser) => ({
      ...prevUser,
      status:
        prevUser.status === "On Patrol"
          ? "In Batcave"
          : "On Patrol"
    }));
  };

  return (
    <div className="app-container">
      <ProfileCard user={user} />
      <UserStatus
        status={user.status}
        toggleStatus={toggleStatus}
      />
    </div>
  );
}

export default App;

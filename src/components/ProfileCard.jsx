export default function ProfileCard({ user }) {
  return (
    <div className="card">
      <div className="card-banner"></div>

      <div className="card-content">
        <img
          src={`${import.meta.env.BASE_URL}batman.jpg`}
          alt="Batmann"
          className="profile-image"
        />

        <h2 className="card-name">{user.name}</h2>
        <p className="card-role">{user.role}</p>

        <div className="skills">
          {["Martial Arts", "Detective", "Stealth", "+99"].map(
            (skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            )
          )}
        </div>

        <div className="stats">
          <div>⭐ {user.rating}</div>
          <div>🚩 ${user.price}/Night</div>
          <div>🕒 24/7</div>
        </div>

        <div className="status">
          Status:
          <span className="status-text">
            {user.status}
          </span>
        </div>

        <button className="main-btn">
          Signal the Bat
        </button>
      </div>
    </div>
  );
}

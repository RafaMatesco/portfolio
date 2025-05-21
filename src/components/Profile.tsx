import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="profile px-5">
      <div className="profile_image neon-glow">
        <img src="./pfp.jpg" alt="" />
      </div>
      <div className="profile_text">
        <span>Meu nome é</span>
        <h1>Rafael Matesco</h1>
        <div>
          <div>
            Fullstack dev <div className="vr"></div> Técnico em informática
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

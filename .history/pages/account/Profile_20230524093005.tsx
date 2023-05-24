import React from "react";
import { getCurrentUser } from "../../services/auth.service";

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-2xl font-bold mb-4">
        <h3>
          <strong>{currentUser?.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser?.accessToken.substring(0, 20)} ...{" "}
        {currentUser?.accessToken.substr(currentUser?.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser?._id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser?.email}
      </p>
      <strong>Authorities:</strong>
      <ul className="list-disc ml-6">
        {currentUser?.roles &&
          currentUser?.roles.map((role: string, index: number) => (
            <li key={index}>{role}</li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;

import React from "react";
import { getCurrentUser } from "../../services/auth.service";

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-2xl font-bold my-4">
        <h3 className="text-gray-600 text-xl font-bold uppercase">
          <strong>{`${currentUser?.result.username}'s`}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser?.token.substring(0, 20)} ...{" "}
        {currentUser?.token.substr(currentUser?.token.length - 20)}
      </p>
      <p className="">
        <strong>Id:</strong> {currentUser?.result._id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser?.result.email}
      </p>
      <strong>Authorities:</strong>
      <ul className="list-disc ml-6">
        {currentUser?.roles &&
          currentUser?.roles.map((role: string, index: number) => (
            <li key={index}>{role || `User`}</li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;

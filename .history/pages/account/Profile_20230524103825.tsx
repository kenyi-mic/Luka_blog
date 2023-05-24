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
        <strong>ID:</strong> {currentUser?.result._id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser?.result.email}
      </p>
      <p>
        <strong>Role:</strong>
        {`Author`}
      </p>
    </div>
  );
};

export default Profile;

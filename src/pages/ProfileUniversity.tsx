import React from "react";
import { checkAuth } from "../utils/checkAuth";

const ProfileUniversity = () => {
  checkAuth();
  
  return <div>ProfileUniversity</div>;
};

export default ProfileUniversity;

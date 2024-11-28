"use client";
import React from "react";
import ProfileDetails from "@/components/setting/ProfileDetails";
import StudentLocation from "./StudentLocation";


const ProfileSetting: React.FC = () => {
  return (
      <div className="w-full">
        <ProfileDetails/>
        <StudentLocation/>
      
      </div>
  );
};

export default ProfileSetting;

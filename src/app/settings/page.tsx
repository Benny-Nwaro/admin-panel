"use client";
import React from "react";
import SettingsMenu from "@/components/setting/SettingsMenu";
import MainWrapper from "@/components/MainWarpper";
import ProfileSetting from "@/components/setting/ProfileSetting";


const Settings: React.FC = () => {
  return (
    <MainWrapper>
          <SettingsMenu />
    </MainWrapper>
  );
};

export default Settings;

"use client";
import React from "react";
import SettingsMenu from "@/components/setting/SettingsMenu";
import MainWrapper from "@/components/MainWarpper";


const Settings: React.FC = () => {
  return (
    <MainWrapper>
          <SettingsMenu />
    </MainWrapper>
  );
};

export default Settings;

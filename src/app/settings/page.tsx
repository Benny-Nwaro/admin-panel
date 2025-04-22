"use client";
import React from "react";
import MainWrapper from "@/components/MainWarpper";
import AdminTable from "@/components/setting/AdminTable";


const Settings: React.FC = () => {
  return (
    <MainWrapper>
      <div className="mx-16">
      <AdminTable />
      </div>
    </MainWrapper>
  );
};

export default Settings;

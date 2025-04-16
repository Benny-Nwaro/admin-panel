"use client"
import React, { useState } from "react";
import TabsSwitcher from "../TabsSwitcher";
import TeachersPage from "./TeachersPage";
import StudentsPage from "../students/StudentsPage";


const DashboardCard: React.FC = () => {
  const [showTeacherPage, setShowTeacherPage] = useState(true); // State to control MusicTable visibility
  const [showStudentPage, setShowStudentPage] = useState(false); // State to control MusicTable visibility



  const handleCardClick = (tab: string) => {
    if(tab === "Teachers"){
      setShowTeacherPage(true)
      setShowStudentPage(false)
    }
    else{
      setShowTeacherPage(false)
      setShowStudentPage(true)

    }

  };

  return (
    <div className="lg:w-full max-md:w-full  ">
      <h1 className="text-lg font-bold mb-12">Users</h1>
      <TabsSwitcher onChange={handleCardClick} />
        {showTeacherPage && <TeachersPage/>}
        {showStudentPage && <StudentsPage/>}


     
    </div>
  );
};

export default DashboardCard;

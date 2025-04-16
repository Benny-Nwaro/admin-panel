import React from "react";
import { FaBolt, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import LessonTable from "./LessonTable";
import AnalyticsCard from "./AnalyticsCard";
import Section from "./Section";
import StatBox from "./StatBox";

const LiveClassesAnalytics: React.FC = () => {
  const stats = [
    { icon: <FaBolt />, value: "2,391", label: "Total Live Classes Today", color: "bg-indigo-600" },
    { icon: <FaUsers />, value: "329,032", label: "Total Students Enrolled in Live Classes", color: "bg-green-600" },
    { icon: <FaChalkboardTeacher />, value: "239", label: "Total Teachers Assigned Today", color: "bg-blue-600" },
  ];

  const privateClasses = {
    total: 234,
    online: { live: 255, scheduled: 754 },
    teacherPlace: { live: 55, scheduled: 12 },
    studentPlace: { live: 26, scheduled: 11 },
  };

  const groupClasses = {
    total: 234,
    live: 34,
    upcoming: 34,
    averageSize: 34,
  };

  const courses = {
    total: 234,
    inProgress: 34,
    newEnrollments: 34,
    completionRate: "93%",
  };

  return (
    <div className="p-4 lg:mx-16 sm:p-6 bg-white min-h-screen text-black max-md:pt-20 max-md:w-full">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {stats.map((stat, index) => (
          <AnalyticsCard key={index} {...stat} />
        ))}
      </div>

      <div>
        <Section title="Private Classes">
          <StatBox label="Total Active Private Classes" value={privateClasses.total} />
          <StatBox label="Online Classes" value={`${privateClasses.online.live} live | ${privateClasses.online.scheduled} scheduled`} />
          <StatBox label="Teacher’s Place" value={`${privateClasses.teacherPlace.live} live | ${privateClasses.teacherPlace.scheduled} scheduled`} />
          <StatBox label="Student’s Place Classes" value={`${privateClasses.studentPlace.live} live | ${privateClasses.studentPlace.scheduled} scheduled`} />
        </Section>

        <Section title="Group Classes">
          <StatBox label="Total Active Group Classes" value={groupClasses.total} />
          <StatBox label="Classes Currently Live" value={`${groupClasses.live} live classes`} />
          <StatBox label="Upcoming Classes" value={`${groupClasses.upcoming} Scheduled for today`} />
          <StatBox label="Average Class Size" value={`${groupClasses.averageSize} Students per class`} />
        </Section>

        <Section title="Courses">
          <StatBox label="Total Active Courses" value={courses.total} />
          <StatBox label="Courses in Progress" value={courses.inProgress} />
          <StatBox label="New Enrollments" value={`${courses.newEnrollments} New enrollments`} />
          <StatBox label="Completion Rate" value={courses.completionRate} />
        </Section>
      </div>

      <div className="mt-8 max-md:w-full overflow-x-auto ">
        <LessonTable />
      </div>
    </div>
  );
};

export default LiveClassesAnalytics;
import React from "react";
import { FaBolt, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import LessonTable from "./LessonTable";

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
    <div className="p-6 bg-white min-h-screen text-white lg:px-12 max-md:pt-20 max-md:w-full max-md:overflow-x-scroll">
      {/* Top Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-lg ${stat.color} flex flex-col`}>
        <div className="flex space-x-1 mb-4 w-full items-end">
            {Array.from({ length: 70 }).map((_, i) => (
                <div
                key={i}
                className="w-1 bg-gray-300 rounded-full"
                style={{ height: `${Math.random() * 50 + 20}px` }}
                ></div>
            ))}
            </div>
            <div className="flex flex-row justify-between">
            <div className="flex flex-col  ">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
            <div className="text-4xl">{stat.icon}</div>
            </div>
      
          </div>
        ))}
      </div>
      <div>
        {/* Private Classes Section */}
        <Section title="Private Classes">
            <StatBox label="Total Active Private Classes" value={privateClasses.total} />
            <StatBox label="Online Classes" value={`${privateClasses.online.live} live | ${privateClasses.online.scheduled} scheduled`} />
            <StatBox label="Teacher’s Place" value={`${privateClasses.teacherPlace.live} live | ${privateClasses.teacherPlace.scheduled} scheduled`} />
            <StatBox label="Student’s Place Classes" value={`${privateClasses.studentPlace.live} live | ${privateClasses.studentPlace.scheduled} scheduled`} />
        </Section>

        {/* Group Classes Section */}
        <Section title="Group Classes">
            <StatBox label="Total Active Group Classes" value={groupClasses.total} />
            <StatBox label="Classes Currently Live" value={`${groupClasses.live} live classes`} />
            <StatBox label="Upcoming Classes" value={`${groupClasses.upcoming} Scheduled for today`} />
            <StatBox label="Average Class Size" value={`${groupClasses.averageSize} Students per class`} />
        </Section>

        {/* Courses Section */}
        <Section title="Courses">
            <StatBox label="Total Active Courses" value={courses.total} />
            <StatBox label="Courses in Progress" value={courses.inProgress} />
            <StatBox label="New Enrollments" value={`${courses.newEnrollments} New enrollments`} />
            <StatBox label="Completion Rate" value={courses.completionRate} />
        </Section>
      </div>
      <div className="max-md:w-full overflow-x-auto">
      <LessonTable/>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mt-8 p-6 bg-white rounded-lg">
    <h2 className="text-xl font-semibold text-gray-400">{title.toUpperCase()}</h2>
    <div className="grid md:grid-cols-4 gap-4 mt-4">{children}</div>
  </div>
);

// Reusable Stat Box Component
const StatBox: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="p-4 bg-white text-black rounded-lg text-left shadow-xl">
    <h3 className="text-lg font-semibold">{label}</h3>
    <p className="text-2xl font-bold text-black mt-2">{value}</p>
  </div>
);

export default LiveClassesAnalytics;

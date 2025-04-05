import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import CourseOverview from "./CourseOverview";
import tutor from "@/app/assets/images/tutor.png"
interface Course {
  id: number;
  title: string;
  status: "Pending" | "Approved";
  dateCreated: string;
  lastUpdated: string;
  price: string;
  author: string;
  students: number;
  instructor: any;
}

const coursesData: Course[] = [
  {
    id: 1,
    title: "Piano Lesson for Complete Beginners",
    status: "Pending",
    dateCreated: "12/03/2024",
    lastUpdated: "12/03/2024",
    price: "$5000",
    author: "Bekwa U.",
    students: 1000,
    instructor: {
      name: "Bekwa U.",
      profileImage:{tutor},
      tagline: "author's tagline"
    }
  },
  {
    id: 2,
    title: "Piano Lesson for Complete Beginners",
    status: "Approved",
    dateCreated: "12/03/2024",
    lastUpdated: "12/03/2024",
    price: "$5000",
    author: "Bekwa U.",
    students: 1000,
    instructor: {
      name: "Bekwa U.",
      profileImage: {tutor},
      tagline: "author's tagline"
    }
  },
  {
    id: 3,
    title: "Piano Lesson for Complete Beginners",
    status: "Pending",
    dateCreated: "12/03/2024",
    lastUpdated: "12/03/2024",
    price: "$5000",
    author: "Bekwa U.",
    students: 1000,
    instructor: {
      name: "Bekwa U.",
      profileImage: {tutor},
      tagline: "author's tagline"
    }
  }
];

const CoursesTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show full-page CourseOverview if a course is selected
  if (selectedCourse) {
    return (
      <div className="p-6 bg-white w-full h-fit">
        <button
          className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          onClick={() => setSelectedCourse(null)}
        >
          Back
        </button>
        <CourseOverview
          title={selectedCourse.title}
          description="This is a course"
          targetAudience="This course is for beginners"
          learningObjectives="Learn"
          announcements="Please take note"
          categories={selectedCourse.status}
          price={selectedCourse.price}
          instructor={selectedCourse.instructor}
        />
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">COURSES</h2>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">All Courses</h3>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Sort <ChevronDown size={16} className="ml-1" />
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="p-3">#</th>
              <th className="p-3">Title</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Last Updated</th>
              <th className="p-3">Course Plan</th>
              <th className="p-3">Author</th>
              <th className="p-3">Student No.</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id} className={`border-b ${course.id % 2 === 0 ? "bg-white" : "bg-blue-50"}`}>
                <td className="p-3 font-bold">{course.id}</td>
                <td className="p-3">{course.title}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-white rounded-lg ${
                      course.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="p-3">{course.dateCreated}</td>
                <td className="p-3">{course.lastUpdated}</td>
                <td className="p-3">{course.price}</td>
                <td className="p-3">{course.author}</td>
                <td className="p-3">{course.students}</td>
                <td className="p-3">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => setSelectedCourse(course)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesTable;

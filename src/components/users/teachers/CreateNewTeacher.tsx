import React, { useState } from "react";
import { Calendar, ChevronDown, X } from "lucide-react";

const CreateNewTeacher: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(["Algebra", "Calculus"]);
  const [availability, setAvailability] = useState<{ [key: string]: string[] }>({
    Monday: ["12:00 PM - 1:00 PM"],
    Wednesday: ["12:00 PM - 1:00 PM"],
    Thursday: ["12:00 PM - 1:00 PM"],
    Friday: ["12:00 PM - 1:00 PM"],
  });
  const [subjectCategory, setSubjectCategory] = useState<string>("Subject category");
  const [subject, setSubject] = useState<string>("Subject");

  const handleRemoveSubject = (subjectToRemove: string) => {
    setSelectedSubjects(selectedSubjects.filter((subject) => subject !== subjectToRemove));
  };

  const handleAddSubject = () => {
    if (subject && subject !== "Subject" && !selectedSubjects.includes(subject)) {
      setSelectedSubjects([...selectedSubjects, subject]);
      setSubject("Subject"); // Reset subject selection
    }
  };

  const toggleAvailability = (day: string, time: string) => {
    setAvailability((prevAvailability) => {
      const dayAvailability = prevAvailability[day] || [];
      if (dayAvailability.includes(time)) {
        return {
          ...prevAvailability,
          [day]: dayAvailability.filter((t) => t !== time),
        };
      } else {
        return {
          ...prevAvailability,
          [day]: [...dayAvailability, time],
        };
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="text-gray-600 text-lg">← Create New Teacher</button>
      </div>

      {/* Profile Section */}
      <div className="border-b pb-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Profile Section</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Profile Image & Video */}
          <div className="col-span-1 flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-sm">Profile Image</span>
            </div>
            <button className="text-blue-500 text-sm">Add tutor profile image</button>
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Profile Video</span>
            </div>
            <button className="text-blue-500 text-sm">Select video to upload</button>
          </div>

          {/* Profile Inputs */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <input type="text" placeholder="Enter First Name" className="input-field" />
            <input type="text" placeholder="Enter Last Name" className="input-field" />
            <input type="email" placeholder="Enter Email Address" className="input-field" />
            <div className="relative">
              <input type="text" placeholder="12/05/1995" className="input-field pr-10" />
              <Calendar className="absolute top-3 right-3 text-gray-500" size={18} />
            </div>
            <input type="text" placeholder="Enter house address" className="input-field" />
            <div className="flex items-center space-x-2">
              <select className="border rounded-lg px-2 py-2">
                <option>NIG</option>
              </select>
              <input type="text" placeholder="Phone number" className="input-field flex-1" />
            </div>
            <input type="text" placeholder="ex: write short sample" className="input-field col-span-2" />
            <textarea placeholder="ex: write short sample" className="input-field col-span-2 h-20"></textarea>
          </div>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="border-b pb-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Preferences</h2>

        {/* Subjects */}
        <div className="flex flex-col space-y-2">
          <span className="font-medium">Select subjects (6 Max)</span>
          <div className="flex space-x-2">
            {selectedSubjects.map((subject) => (
              <span key={subject} className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center space-x-2">
                {subject} <X size={14} className="ml-2 cursor-pointer" onClick={() => handleRemoveSubject(subject)} />
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <select className="border px-3 py-2 rounded-lg" value={subjectCategory} onChange={(e) => setSubjectCategory(e.target.value)}>
              <option>Subject category</option>
              <option>Math</option>
              <option>Science</option>
            </select>
            <select className="border px-3 py-2 rounded-lg" value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option>Subject</option>
              {subjectCategory === "Math" && (<>
                <option>Algebra</option>
                <option>Calculus</option>
              </>)}
              {subjectCategory === "Science" && (<>
                <option>Physics</option>
                <option>Chemistry</option>
              </>)}
            </select>
            <button className="bg-blue-500 text-white px-3 py-2 rounded-lg" onClick={handleAddSubject}>Add</button>
          </div>
        </div>

        {/* Lesson Location */}
        <div className="mt-4">
          <span className="font-medium">Lesson Location</span>
          <div className="flex flex-col space-y-2 mt-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" /> <span>At Teacher&apos;s Location</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" /> <span>At Student&apos;s Location</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" /> <span>Online</span>
            </label>
          </div>
        </div>
      </div>

      {/* Availability Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Availability</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
          Africa/Lagos <ChevronDown size={16} className="ml-2" />
        </button>

        <div className="overflow-x-auto mt-4 border rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Time</th>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <th key={day} className="p-3">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["12:00 PM - 1:00 PM"].map((time) => (
                <tr key={time} className="border-t">
                  <td className="p-3">{time}</td>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <td key={day} className="p-3 cursor-pointer" onClick={() => toggleAvailability(day, time)}>
                      {availability[day]?.includes(time) && (
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center">✔</div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submit Section */}
      <div className="mt-6 flex justify-between">
        <button className="border px-6 py-2 rounded-lg">Cancel</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Submit</button>
      </div>
    </div>
  );
};

export default CreateNewTeacher;
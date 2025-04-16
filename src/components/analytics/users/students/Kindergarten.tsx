import React from "react";

const data = [
  { subject: "SQL", online: 7, teacher: 2, student: 0 },
  { subject: "Javascript", online: 5, teacher: 1, student: 0 },
  { subject: "Scratch", online: 7, teacher: 2, student: 3 },
  { subject: "Python", online: 4, teacher: 3, student: 4 },
  { subject: "Cyber Security", online: 6, teacher: 1, student: 3 },
  { subject: "Backend Engineering", online: 4, teacher: 3, student: 4 },
  { subject: "Databases", online: 6, teacher: 1, student: 3 },
  { subject: "Java Programming", online: 1, teacher: 3, student: 1 },
  { subject: "PhP", online: 4, teacher: 4, student: 3 },
  { subject: "ReactJS", online: 6, teacher: 4, student: 2 },
  { subject: "HTML & CSS", online: 4, teacher: 1, student: 2 },
  { subject: "Computer Programming", online: 7, teacher: 0, student: 4 },
  { subject: "SQL", online: 3, teacher: 0, student: 2 },
  { subject: "Docker", online: 5, teacher: 0, student: 1 },
  { subject: "Machine Learning", online: 7, teacher: 2, student: 0 },
];

const Kindergarten = () => {
  const totalOnline = data.reduce((acc, row) => acc + row.online, 0);
  const totalTeacher = data.reduce((acc, row) => acc + row.teacher, 0);
  const totalStudent = data.reduce((acc, row) => acc + row.student, 0);
  const total = totalOnline + totalTeacher + totalStudent;

  return (
    <div className="p-6 bg-white text-white rounded-lg border border-red-400 shadow-lg">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">Kindergarten</h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white text-black">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Subjects</th>
              <th className="py-2 px-4">Online</th>
              <th className="py-2 px-4">Teachers place</th>
              <th className="py-2 px-4">Students place</th>
              <th className="py-2 px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-green-100"}
              >
                <td className="py-2 px-4">{row.subject}</td>
                <td className="py-2 px-4">{row.online}</td>
                <td className="py-2 px-4">{row.teacher}</td>
                <td className="py-2 px-4">{row.student}</td>
                <td className="py-2 px-4">{row.online + row.teacher + row.student}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6 text-center text-black">
        <div className="bg-white p-4 rounded-lg font-semibold">
          Total Online <div className="text-2xl">{totalOnline}</div>
        </div>
        <div className="bg-white p-4 rounded-lg font-semibold">
          Total Teachers place <div className="text-2xl">{totalTeacher}</div>
        </div>
        <div className="bg-white p-4 rounded-lg font-semibold">
          Total Students place <div className="text-2xl">{totalStudent}</div>
        </div>
        <div className="bg-white p-4 rounded-lg font-semibold">
          Total <div className="text-2xl">{total}</div>
        </div>
      </div>
    </div>
  );
};

export default Kindergarten;

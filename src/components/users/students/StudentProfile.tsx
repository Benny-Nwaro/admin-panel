import React from "react";

const StudentProfile: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Header */}
      <h2 className="text-xl font-bold mb-4">STUDENT PROFILE DETAILS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="col-span-1 bg-gray-50 p-4 rounded-lg shadow">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
            <h3 className="text-lg font-bold mt-2">Adeniyi Joshua</h3>
            <span className="text-sm text-gray-500 flex items-center gap-2">
              Verification Status{" "}
              <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs">
                Verified
              </span>
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="text-sm">
              <span className="font-semibold">Email:</span> undibekwa@gmail.com
            </div>
            <div className="text-sm">
              <span className="font-semibold">Gender:</span> Male
            </div>
            <div className="text-sm">
              <span className="font-semibold">Phone:</span> +1234567890
            </div>
            <div className="text-sm">
              <span className="font-semibold">Address:</span> 2464 Royal Ln,
              Mesa, New Jersey 45463
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-100 p-4 rounded-lg shadow">
              <p className="text-sm font-semibold">Attendance Rate</p>
              <h3 className="text-xl font-bold">95%</h3>
              <p className="text-xs text-gray-500">
                Bekwa attended 34 out of 36 classes so far
              </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow">
              <p className="text-sm font-semibold">Number of Lessons</p>
              <h3 className="text-xl font-bold">23</h3>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow">
              <p className="text-sm font-semibold">Average Grade</p>
              <h3 className="text-xl font-bold">A-</h3>
              <p className="text-xs text-gray-500">
                Bekwa's average grade is 78/100
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow">
              <p className="text-sm font-semibold">Progress Tracker</p>
              <h3 className="text-xl font-bold">75%</h3>
              <p className="text-xs text-gray-500">
                Bekwa have completed 75% of all his lessons
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ongoing Lessons */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Ongoing Lessons</h3>
        <table className="w-full border-collapse mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Lessons</th>
              <th className="p-3 text-left">Teacher</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t bg-blue-50">
              <td className="p-3">1</td>
              <td className="p-3">Private Lessons (Intermediate Piano)</td>
              <td className="p-3">Bekwa Undie (Virtual)</td>
              <td className="p-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  Rejected
                </span>
              </td>
            </tr>
            <tr className="border-t bg-white">
              <td className="p-3">2</td>
              <td className="p-3">Private Lessons (Intermediate Piano)</td>
              <td className="p-3">Bekwa Undie (Virtual)</td>
              <td className="p-3">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="border-t bg-blue-50">
              <td className="p-3">3</td>
              <td className="p-3">Private Lessons (Intermediate Piano)</td>
              <td className="p-3">Bekwa Undie (Virtual)</td>
              <td className="p-3">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bookings */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Bookings</h3>
        <table className="w-full border-collapse mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Lesson Details</th>
              <th className="p-3 text-left">Tutor</th>
              <th className="p-3 text-left">Method</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date Created</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t bg-blue-50">
              <td className="p-3">1</td>
              <td className="p-3">Private Lessons (Intermediate Piano)</td>
              <td className="p-3">Bekwa Undie</td>
              <td className="p-3">PayPal</td>
              <td className="p-3">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm">
                  Pending Payment
                </span>
              </td>
              <td className="p-3">18/12/2024</td>
              <td className="p-3">$30/hr</td>
              <td className="p-3">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
                  Actions ⬇️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfile;

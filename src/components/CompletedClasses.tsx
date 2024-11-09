// components/CompletedClasses.tsx

import React from 'react';

const CompletedClasses: React.FC = () => {
    const classes = [
        {
            student: 'Wade Warren',
            lesson: 'Xylophone',
            date: '20/05/2024',
            time: '08:30-09:12am',
            venue: 'Online',
            status: 'Present',
        },
        {
            student: 'Ronald Richards',
            lesson: 'Stand see principles social site catching.',
            date: '20/05/2024',
            time: '08:30-09:12am',
            venue: "Student's Location",
            status: 'Present',
        },
        {
            student: 'Albert Flores',
            lesson: 'For plane asserts domains wheel.',
            date: '20/05/2024',
            time: '08:30-09:12am',
            venue: "Teacher's Location",
            status: 'Missed',
        },
        {
            student: 'Kathryn Murphy',
            lesson: 'Scraps barn eow info no awareness',
            date: '20/05/2024',
            time: '08:30-09:12am',
            venue: 'Online',
            status: 'Cancelled',
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg max-w-full">
            <div className="text-sm bg-blue-100 text-blue-900 p-4 rounded-lg mb-6">
                <p>
                    Please note that only classes marked as "Complete" will be eligible for payment. Ensure you mark your classes
                    accordingly to receive timely compensation.
                </p>
            </div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">12 Completed Classes</h2>
                <button className="text-blue-600 hover:underline">This week, May 12-18</button>
            </div>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2">Student</th>
                        <th className="px-4 py-2">Lesson</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Venue</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classItem, index) => (
                        <tr key={index} className="text-center border-b">
                            <td className="px-4 py-2 flex items-center space-x-2">
                                <img
                                    src={`/path-to-avatar/avatar-${index + 1}.jpg`} // replace with actual avatars or use a placeholder image
                                    alt={classItem.student}
                                    className="w-10 h-10 rounded-full"
                                />
                                <span>{classItem.student}</span>
                            </td>
                            <td className="px-4 py-2">{classItem.lesson}</td>
                            <td className="px-4 py-2">{classItem.date}</td>
                            <td className="px-4 py-2">{classItem.time}</td>
                            <td className="px-4 py-2">{classItem.venue}</td>
                            <td className="px-4 py-2">
                                <span
                                    className={`px-4 py-1 rounded-full text-white ${classItem.status === 'Present'
                                            ? 'bg-green-500'
                                            : classItem.status === 'Missed'
                                                ? 'bg-red-500'
                                                : 'bg-gray-500'
                                        }`}
                                >
                                    {classItem.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompletedClasses;
 

// import React, { useState } from 'react'
// import ComingClasses from './ComingClasses'
// import OngoingClasses from './OngoingClasses'
// import CompletedClasses from './CompletedClasses'

// {
// }
// const ClassesComponents: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('upcoming classes')

//   return (
//     <div className=' max-w-full overflow-auto'>
//       <div className='flex justify-between items-center mb-4 '>
//         <div className='flex space-x-4'>
//           <button
//             className={`px-4 py-2 font-medium rounded ${
//               activeTab === 'upcoming classes'
//                 ? 'border-b-2 border-[#414158] text-[#414158]'
//                 : 'text-[#9193A5]'
//             }`}
//             onClick={() => setActiveTab('upcoming classes')}
//           >
//             Upcoming Classes
//           </button>
//           <button
//             className={`px-4 py-2 font-medium rounded ${
//               activeTab === 'ongoing classes'
//                 ? 'border-b-2 border-[#414158] text-[#414158]'
//                 : 'text-[#9193A5]'
//             }`}
//             onClick={() => setActiveTab('ongoing classes')}
//           >
//             Ongoing Classes
//           </button>
//           <button
//             className={`px-4 py-2  font-medium rounded ${
//               activeTab === 'completed classes'
//                 ? 'border-b-2 border-[#414158] text-[#414158]'
//                 : 'text-[#9193A5]'
//             }`}
//             onClick={() => setActiveTab('completed classes')}
//           >
//             Completed Classes
//           </button>
//         </div>
//       </div>
//       {/* Conditional Rendering */}
//       {activeTab === 'upcoming classes' && <ComingClasses />}{' '}
//       {/* Render UpcomingClasses when activeTab is 'upcoming' */}
//       {activeTab === 'ongoing classes' && <OngoingClasses />}{' '}
//       {/* Show the Ongoing Classes here */}
//       {activeTab === 'completed classes' && <CompletedClasses />}
//     </div>
//   )
// }

// export default ClassesComponents

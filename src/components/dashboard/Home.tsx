import HeaderBar from "./HeaderBar";
import StatsCard from "./StatsCard";
import UserLocation from "./UserLocation";


export default function Home() {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <HeaderBar/>
        <div className="lg:flex flex-row grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
          <StatsCard title="Students"  bgColor="bg-orange-500" />
          <StatsCard title="Tutors" bgColor="bg-purple-950"  />
          <StatsCard title="Lessons"  bgColor="bg-blue-400"  />
          <StatsCard title="Courses" bgColor="bg-purple-800"  />
        </div>
        <UserLocation />
      </div>
    );
  }

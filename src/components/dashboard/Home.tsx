import HeaderBar from "./HeaderBar";
import StatsCard from "./StatsCard";
import UserLocation from "./UserLocation";


export default function Home() {
    return (
      <div className="lg:p-6 bg-white  min-h-screen max-md:w-full">
        <HeaderBar/>
        <div className="flex flex-col md:flex-row lg:space-x-4 max-md:space-y-4 mt-4">
          <StatsCard title="Students"  bgColor="bg-orange-500" />
          <StatsCard title="Tutors" bgColor="bg-purple-950"  />
          <StatsCard title="Lessons"  bgColor="bg-blue-400"  />
          <StatsCard title="Courses" bgColor="bg-purple-800"  />
        </div>
        <UserLocation />
      </div>
    );
  }

import Image from 'next/image';
import worldMap from "../../app/assets/images/world.png";

interface CountryData {
  name: string;
  users: string;
  flag: string;
}

const tutors: CountryData[] = [
  { name: 'Australia', users: '5,761,687 Users', flag: '🇦🇺' },
  { name: 'New Zealand', users: '5,761,687 Users', flag: '🇳🇿' },
  { name: 'US', users: '698,723 Users', flag: '🇺🇸' },
  { name: 'Brazil', users: '68,412 Users', flag: '🇧🇷' },
  { name: 'Ireland', users: '698,723 Users', flag: '🇮🇪' },
  { name: 'Japan', users: '68,412 Users', flag: '🇯🇵' },
];

const students: CountryData[] = [
  { name: 'United Kingdom', users: '5,761,687 Users', flag: '🇬🇧' },
  { name: 'India', users: '5,761,687 Users', flag: '🇮🇳' },
  { name: 'Ireland', users: '698,723 Users', flag: '🇮🇪' },
  { name: 'US', users: '68,412 Users', flag: '🇺🇸' },
  { name: 'Japan', users: '698,723 Users', flag: '🇯🇵' },
  { name: 'Brazil', users: '68,412 Users', flag: '🇧🇷' },
];

const UserLocation = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">User Location</h2>
        <button className="border px-3 py-1 sm:px-4 sm:py-2 rounded-md text-gray-600 text-sm sm:text-base">By country ▼</button>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
          <Image src={worldMap} alt="User map" className="rounded-md w-full h-auto" />
        </div>
      


        <div className="flex flex-row max-md:flex-col justify-between lg:w-1/2">
        <div className=''>
        <div className="flex justify-between items-center font-bold text-xl sm:text-2xl mb-2 sm:mb-4">
              <h3 className="text-md sm:text-lg font-semibold">Tutors</h3>
              <a href="#" className="text-black text-sm">See all</a>
            </div>
            <ul>
              {tutors.map((country, index) => (
                <li key={index} className="flex items-center text-gray-700 py-1">
                  <span className="mr-2 text-2xl sm:text-4xl">{country.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-base sm:text-xl">{country.name}</span>
                    <span className=" -mt-1 text-xs sm:text-sm">{country.users}</span>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      

     <div className=''>
     <div className="flex justify-between items-center font-bold text-xl sm:text-2xl mt-4 mb-2 sm:mb-4">
              <h3 className="text-md sm:text-lg font-semibold">Students</h3>
              <a href="#" className="text-black text-sm">See all</a>
            </div>
            <ul>
              {students.map((country, index) => (
                <li key={index} className="flex items-center text-gray-700 py-1">
                  <span className="mr-2 text-2xl sm:text-4xl">{country.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-base sm:text-xl">{country.name}</span>
                    <span className="-mt-1 text-xs sm:text-sm">{country.users}</span>
                  </div>
                </li>
              ))}
            </ul>
     </div>
          </div>
      </div>
      </div>
  );
};

export default UserLocation;
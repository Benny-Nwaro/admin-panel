import Image from 'next/image';
import worldMap from "../../app/assets/images/world.png"
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
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">User Location</h2>
        <button className="border px-4 py-2 rounded-md text-gray-600">By country ▼</button>
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="flex-1">
          <Image src={worldMap} alt="User map" width={800} height={400} className="rounded-md" />
        </div>
        <div className="flex flex-row space-x-32 px-4 mt-4 md:mt-0">
          <ul>
             <div className="flex justify-between font-extrabold text-2xl mb-4">
            <h3 className="text-md font-semibold">Tutors</h3>
            <a href="#" className="text-black text-sm ml-32">See all</a>
          </div>
            {tutors.map((country, index) => (
               <li key={index} className="flex flex-col text-gray-700 py-1">
               <div className='flex flex-row'>
               <span className="mr-2 text-4xl">{country.flag}</span> 
               <span className='text-xl'>{country.name}</span>
               </div>
               <span className='ml-12 -mt-3 text-sm'> {country.users}</span>
             </li>
            ))}
          </ul>
        
          <ul className=''>
          <div className="flex justify-between font-extrabold text-2xl mb-4">
            <h3 className="text-md font-semibold">Students</h3>
            <a href="#" className="text-black text-sm ml-32">See all</a>
          </div>
            {students.map((country, index) => (
              <li key={index} className="flex flex-col text-gray-700 py-1">
                <div className='flex flex-row'>
                <span className="mr-2 text-4xl">{country.flag}</span> 
                <span className='text-xl'>{country.name}</span>
                </div>
                <span className='ml-12 -mt-3 text-sm'> {country.users}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserLocation;

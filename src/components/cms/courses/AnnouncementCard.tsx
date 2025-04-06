import Image from "next/image";
import React from "react";

interface TestimonialProps {
  name: string;
  date: string;
  message: string;
  avatar: string;
}

const AnnouncementCard: React.FC<TestimonialProps> = ({ name, date, message, avatar }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex gap-4 max-w-xl">
      <Image src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-gray-700 mt-2 text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default AnnouncementCard;

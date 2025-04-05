import React from "react";
import TestimonialCard from "./AnnouncementCard";

const announcements = [
  {
    name: "Darlene Robertson",
    date: "Jan 20, 2024",
    message:
      "These teeth goalposts boys 2 first-order. Seems calculator could catching dunder later rundown manage. Put ask disband knowledge right kpis price me let’s seat. Shower staircase problem low re-inventing. Feature policy.",
    avatar: "/avatar1.jpg",
  },
  {
    name: "Darrell Steward",
    date: "Jan 20, 2024",
    message:
      "These teeth goalposts boys 2 first-order. Seems calculator could catching dunder later rundown manage. Put ask disband knowledge right kpis price me let’s seat. Shower staircase problem low re-inventing. Feature policy.",
    avatar: "/avatar2.jpg",
  },
];

const Announcements: React.FC = () => {
  return (
    <div className="space-y-4">
      {announcements.map((announcement, index) => (
        <TestimonialCard key={index} {...announcement} />
      ))}
    </div>
  );
};

export default Announcements;

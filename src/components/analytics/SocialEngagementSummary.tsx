import React from "react";
import facebook from "@/app/assets/icons/dashboard/facebook.png";
import twitter from "@/app/assets/icons/dashboard/twitter.png";
import instagram from "@/app/assets/icons/dashboard/instagram.png";
import youtube from "@/app/assets/icons/dashboard/youtube.png";
import linkedin from "@/app/assets/icons/dashboard/linkedin.png";
import pinterest from "@/app/assets/icons/dashboard/pinterest.png";
import trustpilot from "@/app/assets/icons/dashboard/trustpilot.png";
import google from "@/app/assets/icons/dashboard/google.png";
import Image from "next/image";


const socialPlatforms = [
  { name: "Facebook", metric: "Likes", value: "235k", impressions: "235k", icon: facebook },
  { name: "X", metric: "Followers", value: "235k", impressions: "235k", icon: twitter },
  { name: "Instagram", metric: "Followers", value: "235k", impressions: "235k", icon: instagram },
  { name: "Youtube", metric: "Subscribers", value: "235k", impressions: "235k", icon: youtube },
  { name: "LinkedIn", metric: "Followers", value: "235k", impressions: "235k", icon: linkedin },
  { name: "Pinterest", metric: "Followers", value: "235k", impressions: "235k", icon: pinterest },
  { name: "Trustpilot", metric: "Reviews", value: "235k", impressions: "235k", icon: trustpilot },
  { name: "Google", metric: "Reviews", value: "235k", impressions: "235k", icon: google },
];

const SocialEngagementSummary: React.FC = () => {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg max-md:w-full max-md:px-3">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Social Engagement Summary</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
          📅 Jan 2024 - Jun 2024
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {socialPlatforms.map((platform, index) => (
          <div key={index} className="bg-white text-black p-4 rounded-lg flex items-center gap-4 shadow-md">
            <Image src={platform.icon.src} alt={platform.name} className="w-10 h-10" />
            <div>
              <h3 className="font-bold text-lg">{platform.name}</h3>
              <p className="text-sm">{platform.metric} <span className="font-bold">{platform.value}</span></p>
              <p className="text-sm">Impressions <span className="font-bold">{platform.impressions}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialEngagementSummary;

import EmailRow from "./EmailRow";

const emails = [
  { sender: "Tolani Bayode", subject: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM", color: "#2D9CDB" },
  { sender: "Ogunmodede–Smith", subject: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM", color: "#27AE60" },
  { sender: "Yussuf Ahmed", subject: "Vacation Home Rental Success", time: "7:52 PM", color: "#F2C94C" },
  { sender: "Boluwatife Olusola", subject: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM", color: "#BB6BD9", starred: true },
  { sender: "Adese Samson", subject: "Enhance Your Brand Potential With Giant Advertising Blimps", time: "4:13 PM", color: "#A9746E" },
  { sender: "Solomon Ideh", subject: "Always Look On The Bright Side Of Life", time: "3:52 PM", color: "#2F80ED" },
];

export default function EmailList() {
  return (
    <div className="flex-1 overflow-x-scroll">
      <div className="px-4 py-4">
        <input
          type="text"
          placeholder="Search mail"
          className="w-full px-4 py-2 rounded-full border text-sm outline-none"
        />
      </div>

      {emails.map((email, idx) => (
        <EmailRow key={idx} {...email} />
      ))}
    </div>
  );
}

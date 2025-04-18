type EmailProps = {
    sender: string;
    subject: string;
    time: string;
    color: string;
    starred?: boolean;
  };
  
  export default function EmailRow({ sender, subject, time, color, starred }: EmailProps) {
    const initials = sender.split(" ")[0][0];
  
    return (
      <div className="flex items-center px-4 py-3 hover:bg-gray-50 border-b">
        <input type="checkbox" className="mr-3" />
        <span className="mr-3 cursor-pointer">{starred ? "⭐" : "☆"}</span>
        <div
          className={`w-8 h-8 rounded-full text-nowrap px-2 flex items-center justify-center text-white font-bold mr-3`}
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div className="flex-1">
          <div className="font-semibold">{sender}</div>
          <div className="text-sm text-gray-500 truncate">{subject}</div>
        </div>
        <div className="text-sm text-gray-500">{time}</div>
      </div>
    );
  }
  
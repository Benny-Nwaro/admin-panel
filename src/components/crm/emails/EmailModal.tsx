'use client';

import { X } from 'lucide-react';
import ScheduleEmailModal from './ScheduleEmailModal';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
  });
interface EmailModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EmailModal({ open, onClose }: EmailModalProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState("");


    const modules = {
        toolbar: [
          [{ font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-end z-50">
      <div className="bg-white w-full max-w-3xl h-screen rounded-r-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-semibold">New mail</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* From / To */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">From:</span>
            <span className="text-sm text-gray-700 font-semibold">undiebekwa@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">To:</span>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">Ebiere Osuagwu</div>
          </div>
        </div>

        {/* Subject */}
        <input
          type="text"
          placeholder="Write a subject line"
          className="mt-4 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Toolbar */}
        {/* <div className="mt-4 flex items-center justify-between">
          <select className="border rounded-md px-2 py-1 text-sm">
            <option>Inter</option>
          </select>
          <div className="flex gap-2 text-gray-600 text-sm">
            <button className="p-1 hover:text-black">📎</button>
            <button className="p-1 hover:text-black">📷</button>
            <button className="p-1 hover:text-black">🖼️</button>
            <button className="p-1 hover:text-black">🗎</button>
            <button className="p-1 hover:text-black font-bold">B</button>
            <button className="p-1 hover:text-black italic">I</button>
            <button className="p-1 hover:text-black underline">U</button>
            <button className="p-1 hover:text-black">•</button>
            <button className="p-1 hover:text-black">1.</button>
            <button className="p-1 hover:text-black">≡</button>
            <button className="p-1 hover:text-black">⇅</button>
            <button className="p-1 hover:text-black">🗑️</button>
            <button className="p-1 hover:text-black">✉️</button>
          </div>
        </div> */}

<div className="mt-4">
      <ReactQuill
        value={message}
        onChange={setMessage}
        modules={modules}
        placeholder="Write a message..."
        style={{ height: "520px" }} // Adjust wrapper height
        className="bg-[#F1F1F9]"
      />
    </div>

        {/* Message Box */}
        {/* <textarea
          placeholder="Write a message..."
          className="mt-4 w-full h-3/5  bg-[#F1F1F9] border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}

        {/* Footer Buttons */}
        <div className="flex mt-3 justify-between items-center gap-4">
            <div className='space-x-3'>
            <button className="px-4 py-2 border rounded-full">Save to drafts</button>
            <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full">Schedule Send</button>
            </div>
            <div className='space-x-3'>
            <button onClick={onClose} className="px-4 py-2 border rounded-full">Cancel</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Send</button>
            </div>
        </div>
      </div>
        <ScheduleEmailModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

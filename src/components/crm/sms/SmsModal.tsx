'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Plus, Smile } from 'lucide-react';

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
}

// Emoji Picker Component
const EmojiPicker: React.FC<{ onSelect: (emoji: string) => void }> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-gray-700"
        title="Insert Emoji"
      >
        <Smile size={20} />
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-white border rounded shadow-md mt-2 w-48">
          <div className="grid grid-cols-5 p-1">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => {
                  onSelect(emoji);
                  setIsOpen(false);
                }}
                className="p-1 hover:bg-gray-100 cursor-pointer text-lg"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function SmsModal({ open, onClose }: EmailModalProps) {
  const [message, setMessage] = useState('');
  const [toRecipients, setToRecipients] = useState<string[]>(['Ebiere Osuagwu']);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAddRecipient = () => {
    const newRecipient = prompt('Enter recipient name:');
    if (newRecipient && newRecipient.trim() !== '') {
      setToRecipients([...toRecipients, newRecipient.trim()]);
    }
  };

  const handleRemoveRecipient = (recipientToRemove: string) => {
    setToRecipients(toRecipients.filter((r) => r !== recipientToRemove));
  };

  const handleInsertEmoji = (emoji: string) => {
    const cursorPosition = textareaRef.current?.selectionStart ?? message.length;
    const newMessage =
      message.slice(0, cursorPosition) + emoji + message.slice(cursorPosition);
    setMessage(newMessage);

    // Move cursor after emoji
    setTimeout(() => {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(
        cursorPosition + emoji.length,
        cursorPosition + emoji.length
      );
    }, 0);
  };

  const handleSend = () => {
    if (!message.trim()) {
      alert('Please write a message before sending.');
      return;
    }

    if (toRecipients.length === 0) {
      alert('Please add at least one recipient.');
      return;
    }

    // Simulate sending
    alert(`Sent to: ${toRecipients.join(', ')}\n\nMessage:\n${message}`);
    onClose();
    setMessage('');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-end z-50">
      <div className="bg-white w-full max-w-3xl h-screen rounded-r-xl shadow-lg p-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-semibold">New SMS</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* From / To */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-medium text-sm w-10 flex-shrink-0">From:</span>
            <span className="text-sm font-medium text-gray-900">+234 810 000 0000</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="font-medium text-sm w-10 flex-shrink-0">To:</span>
            <div className="flex flex-wrap gap-2">
              {toRecipients.map((recipient) => (
                <div
                  key={recipient}
                  className="bg-[#e0e0e0] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                >
                  {recipient}
                  <button
                    onClick={() => handleRemoveRecipient(recipient)}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
              <button onClick={handleAddRecipient} className="text-blue-500">
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Message + Footer pinned at bottom */}
        <div className="mt-auto space-y-3">
        <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message..."
            className="w-full min-h-[200px] border border-gray-300 rounded-md py-2 px-3 bg-[#F1F1F9] focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm resize-none"
        />

        <div className="flex justify-between items-center mb-8">
            <EmojiPicker onSelect={handleInsertEmoji} />
            <div className="flex gap-2">
            <button onClick={onClose} className="px-6 py-2 rounded-full text-sm">
                Cancel
            </button>
            <button
              onClick={handleSend}
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-sm font-medium flex items-center gap-2"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send"
              >
                <path d="m22 2-7 20-4-9-9-4 20-7z" />
                <path d="m2 2 9 9" />
              </svg>
            </button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

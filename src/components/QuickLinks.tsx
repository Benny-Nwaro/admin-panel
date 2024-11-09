import React from 'react'

const QuickLinks = () => {
  const notes = [
    {
      title: 'Note title',
      date: 'June 11, 2024',
      content:
        'Close hear the what to now book third eye. Price thought no-brainer proceduralize socialize. Stakeholders loss reinvent so marginalised activities explore hour to. But encourage key loop food paradigm movin...',
    },
    {
      title: 'Note title',
      date: 'June 11, 2024',
      content:
        "Do close bells win great high-level office. What's vendor keywords uat giant i'm die spaces ipsum live. Talk just pulling no us eager principles. Staircase look data boardroom uat board high-level. Based procrastina...",
    },
  ]
  return (
    <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
      <div className='flex justify-between p-6 border-b-2 w-full items-center mb-4'>
        <h2 className='text-lg font-semibold'>Your Notes</h2>
        <a href='#' className='text-blue-500 font-medium'>
          See All
        </a>
      </div>
      {/* <hr className='w-full h-0.5 mx-auto bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700' /> */}

      <div className='max-w-2xl mx-auto mt-10'>
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            title={note.title}
            date={note.date}
            content={note.content}
          />
        ))}
      </div>
    </div>
  )
}

interface NoteCardProps {
  title: string
  date: string
  content: string
}
const NoteCard: React.FC<NoteCardProps> = ({ title, date, content }) => {
  return (
    <div className='bg-gray-100 p-6 rounded-2xl shadow-md mb-4 '>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-lg mb-2 text-gray-900'>{title}</h3>
        <p className='text-sm text-gray-500'>{date}</p>
      </div>
      <div>
        <p className='text-gray-700'>{content}</p>
      </div>
    </div>
  )
}

export default QuickLinks

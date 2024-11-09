import React from 'react'

const ToDoList = () => {
  const todos = [
    { id: 1, color: 'bg-pink-500', label: 'Things to do' },
    { id: 2, color: 'bg-yellow-500', label: 'Things to do' },
    { id: 3, color: 'bg-green-500', label: 'Things to do' },
    { id: 4, color: 'bg-purple-600', label: 'Things to do' },
    { id: 5, color: 'bg-blue-500', label: 'Things to do' },
  ]

  return (
    <div className='w-full max-w-sm p-4 my-6 bg-white shadow-lg rounded-3xl'>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold'>To Do</h2>
      </div>

      {/* Progress Bar */}
      <div className='w-full bg-gray-200 rounded-full h-2 mb-4'>
        <div
          className='bg-blue-500 py-1 h2 rounded-full'
          style={{ width: '8%' }}
        ></div>
        <span className='text-gray-500 text-xs font-extrabold'>
          1/12 Complete
        </span>
      </div>
      <hr className='w-full py-0.5 mx-auto my-7 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />

      {/* To Do List */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className='flex items-center  cursor-pointer justify-between mb-4'
          >
            <div className='flex items-center'>
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${todo.color}`}
              >
                <svg
                  className='w-5 h-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 6H16M8 12H16M8 18H16'
                  />
                </svg>
              </div>
              {/* Label */}
              <span className='ml-4 text-gray-700'>{todo.label}</span>
            </div>
            {/* Checkbox */}
            <div className='w-6 h-6 rounded-full border-2 border-gray-300'></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList

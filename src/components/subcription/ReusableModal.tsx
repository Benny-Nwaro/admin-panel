import React, { ReactNode } from 'react'

interface ReusableModalProps {
  isOpen: boolean
  onClose: () => void
  title?: ReactNode
  children: ReactNode
  actions?: ReactNode
  className?: string
  style?: React.CSSProperties
}

const ReusableModal = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
}: ReusableModalProps) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white rounded-2xl shadow-lg wfull max-w2xl mx-4 p-6 relative'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 text-2xl right-4 text-gray-400 hover:text-gray-600'
        >
          &times;
        </button>

        {/* Title */}
        {title && (
          <h2 className='text-xl font-bold text-start text-[#171717] mb-4'>
            {title}
          </h2>
        )}

        {/* Content */}
        <div className='mb-6'>{children}</div>

        {/* Actions */}
        {actions && <div className='flex justify-center'>{actions}</div>}
      </div>
    </div>
  )
}

export default ReusableModal

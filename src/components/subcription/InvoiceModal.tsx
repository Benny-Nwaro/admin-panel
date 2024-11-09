// components/InvoiceModal.tsx
import Image from 'next/image'
import dummyImg from '../../app/assets/images/educify_pic.png'

const InvoiceModal = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row p-4 gap-4'>
        {/* Left Section - User Info and Payment Summary */}
        <div className='bg-white rounded-lg p-4 flex-1'>
          <div className='bg-[#3198F5] p-4 rounded-t-lg text-white flex items-center gap-4'>
            <Image
              src={dummyImg} // Replace with actual user image if available
              alt='User'
              width={60}
              height={60}
              className='rounded-full'
            />
            <div>
              <h3 className='font-bold text-lg'>Guy Hawkins</h3>
              <span className='flex items-center gap-1 text-sm'>
                <span className='bg-white text-[#3198F5] rounded-full px-2 py-1'>
                  verified
                </span>
              </span>
            </div>
          </div>

          <div className='bg-[#F1F1F9] p-4 mt-4 rounded-lg shadow'>
            <div className='flex justify-between'>
              <div>
                <p className='font-bold text-[16px] mb-4 text-[#171717] '>
                  Invoice Number
                </p>
                <p>HDS4893434</p>
                <p>
                  Issue Date: <span>12 July, 2024</span>{' '}
                </p>
              </div>
              <div>
                <p className='font-bold text-[16px] mb-4 text-[#171717]'>
                  Billed to
                </p>
                <p>Student’s name</p>
                <p>Email address</p>
              </div>
            </div>
          </div>

          <div className='bg-[#F1F1F9] p-4 mt-4 rounded-lg shadow'>
            <h4 className='font-bold text-[16px] mb-4 text-[#171717]'>
              Payment summary
            </h4>
            <div className='flex justify-between'>
              <p>Amount</p>
              <p>$12 USD</p>
            </div>
            <div className='flex justify-between'>
              <p>Tax</p>
              <p>$0</p>
            </div>
            <div className='flex justify-between font-bold text-[16px] text-[#171717] mt-2'>
              <p>Total</p>
              <p>$12 USD</p>
            </div>
          </div>
        </div>

        {/* Right Section - Lesson Details */}
        <div className='bg-white p-4 flex-1 rounded-lg w-full maxw-lg shadow'>
          <h4 className='font-bold text-[#171717] border-b-2 py-2 mb-4'>
            Lesson details
          </h4>
          <div className='grid gridcols-2 gap-4'>
            <div className='flex justify-between'>
              <p className='font-medium text-[#414158] text-[14px]'>
                Lesson name
              </p>
              <p className='font-bold text-[14px] text-[#171717]'>Algebra</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-medium text-[#414158] text-[14px]'>
                Lesson location
              </p>
              <p className='font-bold text-[14px] text-[#171717]'>Online</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-medium text-[#414158] text-[14px]'>Package</p>
              <p className='font-bold text-[14px] text-[#171717]'>
                Monthly (4 lessons)
              </p>
            </div>
            <div className='flex justify-between'>
              <p className='font-medium text-[#414158] text-[14px]'>
                Lesson frequency
              </p>
              <p className='font-bold text-[14px] text-[#171717]'>Weekly</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-medium text-[#414158] text-[14px]'>
                Lesson days
              </p>
              <p className='font-bold text-[14px] text-[#171717]'>Tuesdays</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-medium  w-48 text-[#414158] text-[14px]'>
                Lesson dates
              </p>
              <p className='font-bold max-wsm text-[14px] text-[#171717]'>
                01/08/2024, 08/08/2024, 15/08/2024, 22/08/2024
              </p>
            </div>
            <div className='flex justify-between'>
              <p className='font-medium text-[#414158] text-[14px]'>Duration</p>
              <p className='font-bold text-[14px] text-[#171717]'>30 Minutes</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-medium text-[#414158] text-[14px]'>
                Start time
              </p>
              <p className='font-bold text-[14px] text-[#171717]'>14:30</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-medium text-[#414158] text-[14px]'>End time</p>
              <p className='font-bold text-[14px] text-[#171717]'>15:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceModal

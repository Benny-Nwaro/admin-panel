import Image from 'next/image';
import PianoPicture from '@/app/assets/images/pianofull.png';
import Link from 'next/link';

export default function Listing() {
    return (
        <div className="mx-12">
            <div className="flex flex-row justify-between items-center py-8">
                <h1 className="font-extrabold text-xl">All Listing (2)</h1>
                <Link href="/listing/newlisting" className="bg-[#3198F5] hover:bg-blue-700 text-white font-bold text-sm py-4 px-8 rounded-full">
                    Create New Listing
                </Link>
            </div>
            <div className="bg-white rounded-2xl w-7/8">
                <div className="px-8 py-6">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-extrabold text-xl">Piano</h1>
                        <div>
                            <label className="inline-flex items-center cursor-pointer">
                                <span className="ms-3 text-sm font-bold text-[#3198F5] pr-4">Online</span>
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-[#10CC001A] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <p className="text-[#414158] font-extrabold text-balance my-8">Piano Lessons for the next millennium. Come and work with me to make this awesome opportunity.</p>
                            <div className="flex flex-row items-center gap-4">
                                <p className="text-[#9193A5]">Level</p>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Beginner
                                </button>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Intermediate
                                </button>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Advanced
                                </button>
                            </div>
                            <div className="flex flex-row items-center gap-4 my-5">
                                <p className="text-[#9193A5]">Location</p>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Online
                                </button>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    My Studio
                                </button>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Student's Location
                                </button>
                            </div>
                            <div className="bg-[#D3E9FD] rounded-2xl w-full">
                                <div className="px-8 py-6">
                                    <h1 className="font-extrabold text-medium">Price</h1>
                                    <div className="flex flex-row mt-4 gap-4">
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            Trial <span className="text-[#3198F5] pl-2">Free</span>
                                        </button>
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            30 Mins <span className="text-[#3198F5] pl-2">$20</span>
                                        </button>
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            45 Mins <span className="text-[#3198F5] pl-2">$30</span>
                                        </button>
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            60 Mins <span className="text-[#3198F5] pl-2">$40</span>
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            90 Mins <span className="text-[#3198F5] pl-2">$60</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <a href="/listing/modifylisting" className="bg-[#3198F5] hover:bg-[#3198F5] text-white font-extrabold text-medium py-4 px-8 rounded-full">
                                    Modify Listing
                                </a>
                            </div>
                        </div>
                        <div className="mt-40">
                            <Image
                                src={PianoPicture}
                                alt="Piano"
                                className="w-[392px] h-[235px] object-cover"
                            />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-2xl w-7/8 mt-10">
                <div className="px-8 py-6">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-extrabold text-xl">Piano</h1>
                        <div>
                            <label className="inline-flex items-center cursor-pointer">
                                <span className="ms-3 text-sm font-bold text-[#3198F5] pr-4">Online</span>
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-[#10CC001A] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <p className="text-[#414158] font-extrabold text-balance my-8">Piano Lessons for the next millennium. Come and work with me to make this awesome opportunity.</p>
                            <div className="flex flex-row items-center gap-4">
                                <p className="text-[#9193A5]">Level</p>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Beginner
                                </button>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Intermediate
                                </button>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Advanced
                                </button>
                            </div>
                            <div className="flex flex-row items-center gap-4 my-5">
                                <p className="text-[#9193A5]">Location</p>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Online
                                </button>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    My Studio
                                </button>
                                <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#171717] text-sm py-2 px-4 rounded-full">
                                    Student's Location
                                </button>
                            </div>
                            <div className="bg-[#D3E9FD] rounded-2xl w-full">
                                <div className="px-8 py-6">
                                    <h1 className="font-extrabold text-medium">Price</h1>
                                    <div className="flex flex-row mt-4 gap-4">
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            Trial <span className="text-[#3198F5] pl-2">Free</span>
                                        </button>
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            30 Mins <span className="text-[#3198F5] pl-2">$20</span>
                                        </button>
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            45 Mins <span className="text-[#3198F5] pl-2">$30</span>
                                        </button>
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            60 Mins <span className="text-[#3198F5] pl-2">$40</span>
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <button className="border border-[#9193A5] hover:bg-[#3198F5] text-[#414158] text-sm py-2 px-6 rounded-full">
                                            90 Mins <span className="text-[#3198F5] pl-2">$60</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <a href="/listing/modifylisting" className="bg-[#3198F5] hover:bg-[#3198F5] text-white font-extrabold text-medium py-4 px-8 rounded-full">
                                    Modify Listing
                                </a>
                            </div>
                        </div>
                        <div className="mt-40">
                            <Image
                                src={PianoPicture}
                                alt="Piano"
                                className="w-[392px] h-[235px] object-cover"
                            />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
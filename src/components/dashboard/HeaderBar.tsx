import { HiOutlineFolderDownload } from "react-icons/hi";

function HeaderBar() {
    return (
      <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-lg font-semibold">Hi Bekwa 👋, Welcome to your dashboard</h1>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <button className="flex flex-row bg-blue-500 text-white px-4 py-2 rounded-md"><HiOutlineFolderDownload className="text-xl" /> Download student list</button>
          <button className="flex flex-row bg-blue-500 text-white px-4 py-2 rounded-md"><HiOutlineFolderDownload className="text-xl" />Download tutor list</button>
        </div>
      </div>
    );
  }
  export default HeaderBar;
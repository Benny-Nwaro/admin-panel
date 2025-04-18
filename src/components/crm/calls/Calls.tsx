import { useState } from "react";
import { Input } from "./components";
import { Button } from "./components";
import { Card, CardContent } from "./components";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components";
import { Phone, Plus, Delete } from "lucide-react";
import Sidebar from "./Sidebar";
import CreateContactModal from "./CreateContactModal";

const contacts = [
  { name: "Jane Cooper", phone: "(270) 555-0117", color: "bg-green-500" },
  { name: "Devon Lane", phone: "(308) 555-0121", color: "bg-blue-500" },
  { name: "Darrell Steward", phone: "(684) 555-0102", color: "bg-purple-700" },
  { name: "Devon Lane", phone: "(704) 555-0127", color: "bg-lime-300" },
  { name: "Courtney Henry", phone: "(505) 555-0125", color: "bg-purple-700" },
  { name: "Wade Warren", phone: "(225) 555-0118", color: "bg-green-700" },
  { name: "Bessie Cooper", phone: "(406) 555-0120", color: "bg-pink-600" },
  { name: "Robert Fox", phone: "(480) 555-0103", color: "bg-pink-300" },
  { name: "Jacob Jones", phone: "(702) 555-0122", color: "bg-blue-700" },
  { name: "Jenny Wilson", phone: "(239) 555-0108", color: "bg-pink-400" },
];

export default function Calls() {
  const [dialedNumber, setDialedNumber] = useState("+234 484 062 2055");
  const [activeTab, setActiveTab] = useState("Contacts");
  const [isOpen, setIsOpen] = useState(false);



  const handleDial = (digit: string | number) => setDialedNumber((prev) => prev + digit);
  const handleDelete = () => setDialedNumber((prev) => prev.slice(0, -1));

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // You can add logic here to load content based on the selected tab
    console.log(`Selected tab: ${tab}`);
  };

//   const renderContent = () => {
//     switch (activeTab) {
//       case "Contacts":
//         return <div>Contacts Content</div>;
//       case "Frequently called":
//         return <div>Frequently Called Content</div>;
//       case "Import":
//         return <div>Import Content</div>;
//       default:
//         return null;
//     }
//   };

  return (
    <div className="flex h-fit max-md:flex-col space-y-4">
      {/* Sidebar */}
      <Sidebar onTabClick={handleTabClick} activeTab={activeTab}/>

      {/* Main Content */}
      <div className="w-3/5 lg:border-r-2 lg:border-l-2 p-4 max-md:w-full">
        <Input placeholder="Search" className="mb-4 rounded-full bg-[#F1F1F9]" />
        <Tabs defaultValue="students">
        <TabsList value={activeTab} setValue={setActiveTab}>
        <TabsTrigger value="students" onClick={() => setActiveTab("students")} active={activeTab === "students"}>
          Students
        </TabsTrigger>
        <TabsTrigger value="parents" onClick={() => setActiveTab("parents")} active={activeTab === "parents"}>
          Parents
        </TabsTrigger>
        <TabsTrigger value="teachers" onClick={() => setActiveTab("teachers")} active={activeTab === "teachers"}>
          Teachers
        </TabsTrigger>
        <TabsTrigger value="admins" onClick={() => setActiveTab("admins")} active={activeTab === "admins"}>
          Admins
        </TabsTrigger>
          </TabsList>

          <TabsContent value="students">
            <div>Content for Students tab</div>
          </TabsContent>

          <TabsContent value="parents">
            <div>Content for Parents tab</div>
          </TabsContent>

          <TabsContent value="teachers">
            <div>Content for Teachers tab</div>
          </TabsContent>

          <TabsContent value="admins">
            <div>Content for Admins tab</div>
          </TabsContent>
          <TabsContent value="students">
            <div className="mt-4 space-y-3">
              {contacts.map(({ name, phone, color }) => (
                <div key={phone} className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${color}`}>
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-tight">{name}</p>
                    <p className="text-gray-500 text-xs">{phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Dialer */}
      <div className="w-2/6 p-2 max-md:w-full">
        <Card className="text-center mb-4">
          <CardContent className="py-6">
            <p className="font-bold text-lg mb-4">{dialedNumber}</p>
            <Button onClick={() => setIsOpen(true)} className="mx-auto flex items-center gap-2 text-sm rounded-full">
              <Plus size={16} /> Add to contact
            </Button>
          </CardContent>
        </Card>
        <CreateContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        {/* Dialpad */}
        <div className="grid grid-cols-3 gap-2 text-center text-xl font-semibold  px-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "delete"].map((val, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (val === "delete") handleDelete();
                else if (val !== "") handleDial(val);
              }}
              className={`w-full py-4 rounded-full  ${val === "delete" ? "" : val === "" ? "" : "hover:bg-gray-100 "}`}
            >
              {val === "delete" ? <Delete className="mx-auto text-xl font-bold" size={18} /> : val}
            </button>
          ))}
        </div>

        <div className="flex justify-left -mt-14 ml-16">
          <Button className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600">
            <Phone className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

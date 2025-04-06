import React from "react";
// import Table from "@/components/productsandpackages/Table"; // Adjust the path to your Table component

// Define a type for the data
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   status: "Active" | "Inactive";
// };

const MyTablePage: React.FC = () => {
  // const tableData: User[] = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     status: "Active",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     status: "Inactive",
  //   },
  //   {
  //     id: 3,
  //     name: "Alice Johnson",
  //     email: "alice.johnson@example.com",
  //     status: "Active",
  //   },
  // ];

  // const tableColumns = ["ID", "Name", "Email", "Status"];

  // Update the handleActionClick type to accept a User type
  // const handleActionClick = (item: User) => {
  //   console.log("Action clicked for:", item);
  // };

  // const handleAddClick = () => {
  //   console.log("Add button clicked");
  // };

  return (
    <div>
      {/* <Table
        title="User List"
        columns={tableColumns}
        data={tableData}
        onActionClick={handleActionClick}
        addButtonLabel="Add User"
        onAddClick={handleAddClick}
      /> */}
    </div>
  );
};

export default MyTablePage;

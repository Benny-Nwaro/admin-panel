import React from "react";
import Table from "@/components/productsandpackages/Table"; // Adjust the path to your Table component

const MyTablePage: React.FC = () => {
  const tableData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
    },
  ];

  const tableColumns = ["ID", "Name", "Email", "Status"];

  const handleActionClick = (item: any) => {
    console.log("Action clicked for:", item);
    // Add your action logic here (e.g., open a modal, navigate, etc.)
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
    // Add your add logic here (e.g., open a form to add a new item)
  };

  return (
    <div>
      <Table
        title="User List"
        columns={tableColumns}
        data={tableData}
        onActionClick={handleActionClick}
        addButtonLabel="Add User"
        onAddClick={handleAddClick}
      />
    </div>
  );
};

export default MyTablePage;
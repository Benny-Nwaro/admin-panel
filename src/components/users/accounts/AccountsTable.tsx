import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
  TextField,
  Pagination,
  Menu,
} from "@mui/material";

interface User {
  id: number;
  fullName: string;
  email: string;
  role: string;
}

const dummyUsers: User[] = [
  { id: 1, fullName: "Adenekan Aleem Ayomide", email: "Foodieworldwide@gmail.com", role: "Admin" },
  { id: 2, fullName: "Bekwa Undie", email: "bekwaundie@gmail.com", role: "Admin" },
  { id: 3, fullName: "Jane Doe", email: "janetdoe123@gmail.com", role: "Admin" },
  { id: 4, fullName: "John Smith", email: "johnsmith@gmail.com", role: "User" },
  { id: 5, fullName: "Alice Johnson", email: "alicejohnson@gmail.com", role: "Moderator" },
];

const AccountsTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(dummyUsers);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 3;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>, user: User) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleEdit = () => {
    alert(`Edit ${selectedUser?.fullName}`);
    handleCloseMenu();
  };

  const handleDelete = () => {
    if (selectedUser) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUser.id));
      handleCloseMenu();
    }
  };

  // Filter users based on search
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Handle pagination
  const paginatedUsers = filteredUsers.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Paper sx={{ padding: 2 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <h2>Accounts</h2>
        <div>
          <Select defaultValue="Sort" sx={{ marginRight: 2 }}>
            <MenuItem value="Sort">Sort</MenuItem>
            <MenuItem value="Name">Name</MenuItem>
            <MenuItem value="Role">Role</MenuItem>
          </Select>
          <TextField
            size="small"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell><strong>Full Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user, index) => (
              <TableRow key={user.id} sx={{ backgroundColor: index % 2 === 0 ? "#f0f7ff" : "inherit" }}>
                <TableCell>{user.id}</TableCell>
                <TableCell><strong>{user.fullName}</strong></TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    size="small" 
                    onClick={(event) => handleOpenMenu(event, user)}
                  >
                    Actions ▼
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>

      {/* Pagination Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <span>Showing {Math.min((page - 1) * rowsPerPage + 1, filteredUsers.length)} to {Math.min(page * rowsPerPage, filteredUsers.length)} of {filteredUsers.length} entries</span>
        <Pagination
          count={Math.ceil(filteredUsers.length / rowsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </div>
    </Paper>
  );
};

export default AccountsTable;
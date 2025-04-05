import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SelectChangeEvent } from "@mui/material";

const EditAdminForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "Bekwa",
    lastName: "Undie",
    email: "bekwaundie1@gmail.com",
    phoneNumber: "70 567 335 19381",
    country: "NIG",
    role: "",
    accessLevel: "",
  });

  // ✅ Separate handler for TextField (input fields)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Separate handler for Select dropdowns
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: "auto", borderRadius: 4 }}>
      <h2>Edit Admin</h2>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* First Name & Last Name */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </Box>

        {/* Email & Phone Number */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField fullWidth label="Email Address" name="email" value={formData.email} onChange={handleInputChange} />
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <FormControl sx={{ minWidth: 80 }}>
              <Select name="country" value={formData.country} onChange={handleSelectChange} displayEmpty>
                <MenuItem value="NIG">🇳🇬 NIG</MenuItem>
                <MenuItem value="USA">🇺🇸 USA</MenuItem>
                <MenuItem value="UK">🇬🇧 UK</MenuItem>
              </Select>
            </FormControl>
            <TextField fullWidth label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
          </Box>
        </Box>

        {/* Role & Access Level */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select name="role" value={formData.role} onChange={handleSelectChange}>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Moderator">Moderator</MenuItem>
              <MenuItem value="User">User</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Access Level</InputLabel>
            <Select name="accessLevel" value={formData.accessLevel} onChange={handleSelectChange}>
              <MenuItem value="Full Access">Full Access</MenuItem>
              <MenuItem value="Limited Access">Limited Access</MenuItem>
              <MenuItem value="Read Only">Read Only</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth startIcon={<CheckCircleIcon />}>
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
};

export default EditAdminForm;

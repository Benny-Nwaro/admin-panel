"use client"
import React, { useState } from 'react';
import MainWrapper from '@/components/MainWarpper';
import ChatComponent from '@/components/messages/MessageBox';
import MessageList from '@/components/messages/AllMessages';
import PaymentDisplay from '@/components/messages/PaymentDisplay';
import AccountsTable from '@/components/users/accounts/AccountsTable';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const Message: React.FC = () => {
    const theme = createTheme();

    return (
        <MainWrapper>
        <div className="flex flex-col lg:flex-row gap-4 pt-10 lg:px-10 ">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
            <ThemeProvider theme={theme}>
                <CssBaseline /> {/* Ensures proper baseline styling */}
                <AccountsTable /> {/* Render your component */}
                </ThemeProvider>            
    </div>
        </div>
    </MainWrapper>
    );
};

export default Message;

import { FC } from "react";
import { Button, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { FormControl } from '@mui/material';
import './style.css';

interface AdminLoginBtnProps { }

const AdminLoginBtn: FC<AdminLoginBtnProps> = () => {
    const adminName = import.meta.env.VITE_ADMIN_EMAIL;

    const handleLogin = () => {


    }

    return (
        <>
            <div className="flexible-container">
                <h2 className="text-center">Admin Login</h2>
                <div className="centerContainer">
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Will provide in your email</FormHelperText>
                    </FormControl>
                    
                    <Button onClick={handleLogin} variant="contained"> Login as Admin</Button>
                </div>
            </div>
        </>)
}

export default AdminLoginBtn;
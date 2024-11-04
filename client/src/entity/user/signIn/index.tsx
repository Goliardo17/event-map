'use client'

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useForm } from "react-hook-form"
import { SxProps, Theme, Typography } from "@mui/material"

type SignInForm = {
    email: string,
    password: string
}

const style: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px"
}

export const SignIn: React.FC = () => {
    const {
        register,
    } = useForm()

    return (
        <Box sx={style}>
            <Typography variant="h5">Войти</Typography>
            <TextField
                label="Email"
                type="email"
                {...register("email")}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                {...register("password")}
            />
        </Box>
    )
}
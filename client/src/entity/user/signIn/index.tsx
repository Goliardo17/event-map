'use client'

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useForm } from "react-hook-form"
import { Button, SxProps, Theme, Typography } from "@mui/material"

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
        getValues
    } = useForm()

    const onSend = () => {
        const data = getValues("user")
        const jsonData = JSON.stringify(data)

        localStorage.setItem("user", jsonData)
    }

    return (
        <Box sx={style}>
            <Typography variant="h5">Войти</Typography>
            <TextField
                label="Email"
                type="email"
                {...register("user.email")}
                sx={{backgroundColor: "white"}}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                {...register("user.password")}
                sx={{backgroundColor: "white"}}
            />
            <Button onClick={onSend}>Войти</Button>
        </Box>
    )
}
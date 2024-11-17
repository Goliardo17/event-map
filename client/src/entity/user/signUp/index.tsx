'use client'

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { useForm } from "react-hook-form"
import { Button, SxProps, Theme, Typography } from "@mui/material"

const style: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px"
}

export const SignUp: React.FC = () => {
    const {
        register,
        getValues
    } = useForm()

    const onSend = () => {
        const data = getValues("registrate")
        console.log(data)
    }

    return (
        <Box sx={style}>
            <Typography variant="h5">Войти</Typography>
            <TextField
                label="Name"
                type="name"
                {...register("registrate.name")}
                sx={{backgroundColor: "white"}}
            />
            <TextField
                label="Email"
                type="email"
                {...register("registrate.email")}
                sx={{backgroundColor: "white"}}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                {...register("registrate.password")}
                sx={{backgroundColor: "white"}}
            />
            <Button onClick={onSend}>Войти</Button>
        </Box>
    )
}
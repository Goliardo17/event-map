'use client'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '@/src/entity/user/signIn/schema'

import {SxProps, Theme} from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField";

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
    } = useForm<SignInForm>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(signInSchema)
    })

    const onSend = () => {
        const data: SignInForm = getValues()

        const jsonData = JSON.stringify(data)
        localStorage.setItem("user", jsonData)
    }

    return (
        <Box sx={style}>
            <Typography variant="h5">Войти</Typography>
            <TextField
                label="Email"
                type="email"
                {...register("email")}
                sx={{ backgroundColor: "white" }}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                {...register("password")}
                sx={{ backgroundColor: "white" }}
            />
            <Button onClick={onSend}>Войти</Button>
        </Box>
    )
}
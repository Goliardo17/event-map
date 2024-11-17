'use client'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '@/src/entity/user/signUp/schema'

import {SxProps, Theme} from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField";

type SignUpForm = {
    name: string,
    email: string,
    password: string
}

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
    } = useForm<SignUpForm>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        resolver: yupResolver(signUpSchema)
    })

    const onSend = () => {
        const data: SignUpForm = getValues()

        const jsonData = JSON.stringify(data)
        localStorage.setItem("user", jsonData)
    }

    return (
        <Box sx={style}>
            <Typography variant="h5">Войти</Typography>
            <TextField
                label="Name"
                type="name"
                {...register("name")}
                sx={{backgroundColor: "white"}}
            />
            <TextField
                label="Email"
                type="email"
                {...register("email")}
                sx={{backgroundColor: "white"}}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                {...register("password")}
                sx={{backgroundColor: "white"}}
            />
            <Button onClick={onSend}>Войти</Button>
        </Box>
    )
}
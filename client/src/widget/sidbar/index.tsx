'use client'

import { useState } from "react"

import { SignIn } from "@/src/entity/user/signIn"
import { SignUp } from "@/src/entity/user/signUp"
import { SxProps, Theme } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

const style: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#e0e0e0",
    padding: "25px",
}

export const SideBar: React.FC = () => {
    const [registrate, setRegistarte] = useState(false)

    const changeForm = (): void => {
        setRegistarte(!registrate)
    }

    return (
        <Box sx={style}>
            {registrate ? <SignUp/> : <SignIn />}
            <Button onClick={changeForm}>{registrate ? 'Уже есть аккаунт' : 'Зарегистрироваться'}</Button>
        </Box>
    )
}
import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { SxProps, Theme } from "@mui/material"
import { Logo } from "@/src/share/ui/logo"

const gray: string = "#e0e0e0"

const style: SxProps<Theme> = {
    display: "flex",
    backgroundColor: gray,
    borderRadius: "50px", 
    padding: "20px 45px",
}

export const Header: React.FC = () => {
    return (
        <Container>
            <Box sx={style}>
                <Logo/>  
            </Box>
        </Container>
    )
}
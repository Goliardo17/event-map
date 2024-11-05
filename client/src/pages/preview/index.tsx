import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { News } from "@/src/widget/news"
import { Footer } from "@/src/widget/footer"
import { Header } from "@/src/widget/header"
import { SideBar } from "@/src/widget/sidbar"
import React from "react"
import { SxProps, Theme } from "@mui/material"

const stylePage: SxProps<Theme> = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    justifyContent: "space-between"
}

const styleWrapper: SxProps<Theme> = {
    height: "100%", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "25px"
}

const styleContent: SxProps<Theme> = {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "25px"
}

export const Preview: React.FC = () => {
    return (
        <Box sx={stylePage}>
            <Box sx={styleWrapper}>
                <Header />
                <Container sx={styleContent}>
                    <News />
                    <SideBar />
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}
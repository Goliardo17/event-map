import Box from "@mui/material/Box"
import { Banner } from "@/src/share/ui/banner"
import { Information } from "@/src/share/ui/information"
import { Social } from "@/src/share/ui/social"
import Container from "@mui/material/Container"
import { SxProps, Theme } from "@mui/material"

const gray: string = "#e0e0e0"

const style: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    backgroundColor: gray,
    borderRadius: "50px", 
    padding: "20px 45px"
}

export const Footer = () => {
    return (
        <Container>
            <Box sx={style}>
                <Box display="flex" justifyContent="space-between">
                    <Information />
                    <Social />
                </Box>
                <Banner />
            </Box>
        </Container>
    )
}
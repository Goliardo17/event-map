import React from "react"
import { Banner } from "@/src/share/ui/banner"
import Button from "@mui/material/Button" 
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Information } from "@/src/share/ui/information"
import { Logo } from "@/src/share/ui/logo"
import { NewsPost } from "@/src/share/ui/newsPost"
import { Social } from "@/src/share/ui/social"

export const Preview: React.FC = () => {
    return (
        <Container>
            <Button />
            <Logo />
            
            <NewsPost title="GEN-1.1" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus omnis dolor minima voluptate distinctio sed, quisquam vero? Delectus, perferendis. Perferendis esse, unde nulla corporis cumque voluptates laudantium neque veritatis."/>
            <Typography>Text</Typography>
            <Information />
            <Social />
            <Banner />
        </Container>
    )
}
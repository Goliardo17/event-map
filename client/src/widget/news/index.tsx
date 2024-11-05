import React from "react"
import { NewsPost } from "@/src/share/ui/newsPost"
import { posts } from "@/src/share/moсk/newsPost"
import Box from "@mui/material/Box"
import { SxProps, Theme } from "@mui/material"

const style: SxProps<Theme> = {
    maxWidth: '800px', 
    height: '100%', 
    overflowY: "scroll"
}

export const News: React.FC = () => {
    return (
        <Box sx={style}>
            {
                posts.map((news) => <NewsPost key={`news-post-${news.id}`} title={news.title} body={news.description} />)
            }
        </Box>
    )
}
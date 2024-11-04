import React from "react"
import { NewsPost } from "@/src/share/ui/newsPost"
import { posts } from "@/src/share/moсk/newsPost"

export const News: React.FC = () => {
    return (
        <>
            {
                posts.map((news) => <NewsPost key={`news-post-${news.id}`} title={news.title} body={news.description} />)
            }
        </>
    )
}
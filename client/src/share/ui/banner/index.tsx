import Typography from '@mui/material/Typography';
import { SxProps, Theme } from "@mui/material"

const gray: string = "#e0e0e0"

const style: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center"
}

export const Banner = () => {
    return (
        <Typography variant="body2" sx={style}>
            &#169; 2023 Ваша компания. Все права защищены.
        </Typography>
    )
}
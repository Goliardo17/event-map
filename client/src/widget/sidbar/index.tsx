import { SignIn } from "@/src/entity/user/signIn"
import { Button, SxProps, Theme } from "@mui/material"
import Box from "@mui/material/Box"

const style: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#e0e0e0",
    padding: "25px",
}

export const SideBar: React.FC = () => {
    return (
        <Box sx={style}>
            <SignIn />
            <Button>Зарегистрироваться</Button>
        </Box>
    )
}
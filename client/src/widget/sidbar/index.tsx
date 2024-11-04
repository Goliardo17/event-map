import { SignIn } from "@/src/entity/user/signIn"
import { SxProps, Theme } from "@mui/material"
import Box from "@mui/material/Box"

const style: SxProps<Theme> = {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "25px"
}

export const SideBar: React.FC = () => {
    return (
        <Box sx={style}>
            <SignIn />
        </Box>
    )
}
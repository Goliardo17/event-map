import { Button } from "@mui/material"

type ButtonTypeProps = {
    type: string,
    label: string
}

export const ButtonType: React.FC<ButtonTypeProps> = ({ type, label }) => {
    switch (type) {
        case "primary":
            return <Button variant="contained" style={{ background: '#7341ff' }}>{label}</Button>
        default:
            return <Button>{label}</Button>
    }
}
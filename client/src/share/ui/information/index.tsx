import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid2"
import Link from "@mui/material/Link"

const purple: string = "#7341ff"

export const Information = () => {
  return (
    <Box display="flex" justifyContent="space-between" gap="15px">
      <Link color={purple}>О нас</Link>
      <Link color={purple}>Контакты</Link>
      <Link color={purple}>Политика конфиденциальности</Link>
    </Box>
  )
}
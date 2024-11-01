import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid2"
import Link from "@mui/material/Link"

export const Information = () => {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Grid container spacing={1} wrap="wrap">
        <Grid size={2} sx={{ display: "flex", justifyContent: "center"}}>
          <Link>О нас</Link>
        </Grid>
        <Grid size={2} sx={{ display: "flex", justifyContent: "center"}}>
          <Link>Контакты</Link>
        </Grid>
        <Grid size={6} sx={{ display: "flex", justifyContent: "center"}}>
          <Link>Политика конфиденциальности</Link>
        </Grid>
      </Grid>
    </Box>
  )
}
import React from "react"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://nadialefebvre.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nadia Lefebvre
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default Copyright

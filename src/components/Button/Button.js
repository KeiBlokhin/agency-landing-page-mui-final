import React from 'react'
import MuiButton from '@mui/material/Button'

const styles = {
  btn: (theme) => ({
    background: theme.palette.slateBlue.main,
    borderRadius: '8px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    padding: '20px 60px',
    '&:hover': {
      background: '#646ab0',
    },
  }),
}

const Button = ({ children }) => {
  return <MuiButton sx={styles.btn}>{children}</MuiButton>
}

export default Button

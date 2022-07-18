import React from 'react'
import MuiButton from '@mui/material/Button'
import Box from '@mui/material/Box'
import arrow from '../../assets/img/chevron-down.svg'

const pages = [
  { title: 'Demos', arrow: true },
  { title: 'Services', arrow: true },
  { title: 'Pages', arrow: true },
  { title: 'Portfolio', arrow: true },
  { title: 'Blog', arrow: true },
  { title: 'Contact', arrow: false },
]

const styles = {
  btnLink: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '22px',
    textTransform: 'capitalize',
    color: '#000000',
    marginRight: '44px',
    paddingX: 0,
    display: 'flex',
  },
}

const Navbar = () => {
  return (
    <Box
      sx={{ flexGrow: 1, display: { lg: 'flex' }, justifyContent: 'flex-end' }}
    >
      {pages.map((page) => (
        <MuiButton key={page} sx={styles.btnLink}>
          {page.title}{' '}
          {page.arrow && <img src={arrow} style={{ marginLeft: '5px' }} />}
        </MuiButton>
      ))}
    </Box>
  )
}

export default Navbar

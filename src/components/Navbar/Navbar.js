import React from 'react'
import MuiButton from '@mui/material/Button'
import Box from '@mui/material/Box'

//IMPORTING SVG'S
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
      {pages.map((page, index) => (
        <MuiButton key={index} sx={styles.btnLink}>
          {page.title}{' '}
          {page.arrow && (
            <img src={arrow} style={{ marginLeft: '5px' }} alt='arrow' />
          )}
        </MuiButton>
      ))}
    </Box>
  )
}

export default Navbar

import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '../Button'

//IMPORTING IMAGES
import photo_banner from '../../assets/img/photo_banner.png'

import styles from './styles'

const Hero = () => {
  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant='h2'>
            The most <br />
            Advanced Education
          </Typography>
          <Typography variant='body1' sx={styles.text}>
            Choose out of 2500+ mentors. Trusted by 250k users. <br />
            Industry experts and top university professors Runs in a browser.
            Can be downloaded on desktop, tablet and mobiles. Extremely fast
            loading at 200ms. Updates work directory from the website.
          </Typography>
          <Button>join us</Button>
        </Box>
        <Box component='img' src={photo_banner} sx={styles.photo} />
      </Box>
    </Box>
  )
}

export default Hero

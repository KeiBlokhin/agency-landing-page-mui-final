import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '../Card'
import styles from './styles'

const data = [
  { title: 'Strategy' },
  { title: 'Product design' },
  { title: 'Development' },
]

const CreativeDesign = () => {
  return (
    <Box sx={styles.creativeDesign}>
      <Box sx={styles.wrapper}>
        <Typography variant='h2'>creative design solutions</Typography>
        <Typography
          variant='body1'
          sx={{ textTransform: 'capitalize', margin: '25px 0' }}
        >
          professional deign agency to provide solutions
        </Typography>
        <Stack sx={styles.stack}>
          {data.map((item, index) => {
            return <Card title={item.title} key={index} />
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default CreativeDesign

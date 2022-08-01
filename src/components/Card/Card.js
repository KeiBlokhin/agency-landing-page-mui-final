import React from 'react'
import Box from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import arrowRight from '../../assets/img/arrow-right.svg'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import strategy_svg from '../../assets/img/strategy.svg'
import design_svg from '../../assets/img/vector-art-and-design-svgrepo-com.svg'
import development_svg from '../../assets/img/code-coding-development-programming-web-webpage-svgrepo-com.svg'

import styles from './styles'

const Card = ({ title }) => {
  let svg = null

  switch (title) {
    case 'Strategy':
      svg = strategy_svg
      break
    case 'Product design':
      svg = design_svg
      break
    case 'Development':
      svg = development_svg
      break
    default:
      return false
  }

  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: 0 }}>
        <Box component='img' src={svg} />
        <Typography variant='h3' sx={styles.title}>
          {title}
        </Typography>
        <List>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} /> product manegment
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} /> mpv definition
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} /> product strategy
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button size='small' sx={styles.btn}>
          Read More
          <Box component='img' src={arrowRight} />
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card

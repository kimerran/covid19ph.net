import React from 'react'
import { Card, Grid, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    animationName: 'fade',
    animationDuration: 'var(--duration)',
    animationFillMode: 'forwards',
    opacity: 0,
    transform: 'translateX(-1rem)',
    animationDelay: 'calc((var(--row-xs) + var(--column-xs)) * var(--duration) / 4)',
    [theme.breakpoints.up('md')]: {
      animationDelay: 'calc((var(--row-md) + var(--column-md)) * var(--duration) / 4)',
    },
    [theme.breakpoints.up('lg')]: {
      animationDelay: 'calc((var(--row-lg) + var(--column-lg)) * var(--duration) / 4)',
    },
  },
}))

const CardGrid = ({
  items,
  query,
  animationDuration = '500ms',
  contentComponent: Content,
}) => {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={3}
      style={{
        '--duration': animationDuration,
      }}
    >
      {
        items.map((row, i) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={row.url + query}
            style={{
              '--row-xs': i,
              '--row-md': Math.floor(i / 2),
              '--row-lg': Math.floor(i / 3),
              '--column-xs': 0,
              '--column-md': i % 2,
              '--column-lg': i % 3,
            }}
          >
            <Card
              className={classes.card}
            >
              <Content
                {...row}
                index={i}
              />
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default CardGrid

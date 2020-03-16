import React from 'react'
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  linkImage: {
    backgroundColor: '#eee',
  },
  linkTitle: {
    height: `${8 / 3}em`,
    WebkitLineClamp: 2,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  linkUrl: {
    height: `${3 * 1.43}em`,
    wordBreak: 'break-word',
    WebkitLineClamp: 3,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}))

const LinkContent = ({
  image,
  title,
  url,
}) => {
  const classes = useStyles()

  return (
    <CardActionArea
      component="a"
      href={url}
      rel="noreferrer noopener"
      target="_blank"
    >
      <CardMedia
        component="img"
        height="256"
        image={image}
        alt={title}
        title={title}
        className={classes.linkImage}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.linkTitle}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.linkUrl}
        >
          {url}
        </Typography>
      </CardContent>
    </CardActionArea>
  )
}

export default LinkContent

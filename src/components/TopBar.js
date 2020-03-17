import React from 'react'
import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Search as SearchIcon, } from '@material-ui/icons'
import { fade, makeStyles } from '@material-ui/core/styles'
import ShareButtons from './ShareButtons'

const useStyles = makeStyles(theme => ({
  grow: {
    display: 'block',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    flexBasis: 280,
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  sectionMobile: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  offset: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  card: {
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

const TopBar = ({
  title,
  onSearchChange,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search&hellip;"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onSearchChange}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ShareButtons />
          </div>
          <div className={classes.sectionMobile}>
            <ShareButtons
              mobile
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar

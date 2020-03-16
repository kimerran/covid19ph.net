import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fade, withStyles, } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import * as MUI from '@material-ui/core'

import { loadLinks } from './actions/MainActions'

const staticLinks = require('./data/main_links.json')

const styles = theme => ({
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
  title: {
    flexGrow: 1,
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
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
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
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class App extends Component {
  state = {
    links: [],
    query: '',
  }

  timeout = null

  async componentDidMount() {
    const { loadLinks, main, } = this.props

    await loadLinks()

    if (window.location.hostname === 'localhost') {
      this.setState({ links: staticLinks, })
    } else {
      this.setState({ links: main.links, })
    }
  }

  handleChange = e => {
    const { value, } = e.target
    if (this.timeout !== null) {
      window.clearTimeout(this.timeout)
      this.timeout = null
    }
    this.timeout = window.setTimeout(() => {
      this.setState({
        query: value.trim().toLowerCase(),
      })
    }, 500)
  }

  render() {
    const { classes, } = this.props
    const { query, links, } = this.state
    return <React.Fragment>
      <CssBaseline />
      <MUI.AppBar position="static">
        <MUI.Toolbar>
          <MUI.Typography
            variant="h6" component="h1"
            className={classes.title}
          >
            COVID-19 PH Links
          </MUI.Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <MUI.InputBase
              placeholder="Search&hellip;"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={this.handleChange}
            />
          </div>
        </MUI.Toolbar>
      </MUI.AppBar>
      <div className={classes.offset}>
        <MUI.Container>
          <MUI.Grid
            container
            spacing={3}
            style={{
              '--duration': '500ms',
            }}
          >
            {
              links
                .filter(row => (
                  row.url.toLowerCase().includes(query)
                  || row.title.toLowerCase().includes(query)
                ))
                .map((row, i) => (
                  <MUI.Grid
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
                    <MUI.Card
                      className={classes.card}
                      style={{
                        animationName: 'fade',
                        animationDuration: 'var(--duration)',
                        animationFillMode: 'forwards',
                      }}
                    >
                      <MUI.CardActionArea
                        component="a"
                        href={row.url}
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        <MUI.CardMedia
                          component="img"
                          height="256"
                          image={row.image}
                          alt={row.title}
                          title={row.title}
                          className={classes.linkImage}
                        />
                        <MUI.CardContent>
                          <MUI.Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.linkTitle}
                          >
                            {row.title}
                          </MUI.Typography>
                          <MUI.Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.linkUrl}
                          >
                            {row.url}
                          </MUI.Typography>
                        </MUI.CardContent>
                      </MUI.CardActionArea>
                    </MUI.Card>
                  </MUI.Grid>
              ))
            }
          </MUI.Grid>
        </MUI.Container>
      </div>
    </React.Fragment>
  }
}

function mapStateToProps(state) {
  return {
    main: state.main
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    loadLinks,
  }, dispatch);
}

export default
  connect(mapStateToProps, matchDispatchToProps)
  (withStyles(styles)(App));

import React from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import { Container, Typography, Button, } from '@material-ui/core'

import * as Link from './controllers/Link'
import * as Search from './controllers/Search'

import TopBar from './components/TopBar'
import CardGrid from './components/CardGrid'
import LinkContent from './components/LinkContent'

const useStyles = makeStyles(theme => ({
  offset: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}))

const App = ({
  title = 'COVID-19 PH Links',
}) => {
  const classes = useStyles()
  const [links, setLinks, ] = React.useState([])
  const [linksLoading, setLinksLoading, ] = React.useState(false)
  const [linksError, setLinksError, ] = React.useState(null)
  const [query, setQuery, ] = React.useState([])

  React.useEffect(() => {
    Link.load({ setLinks, setLinksLoading, setLinksError, })
  }, [])

  const items = links.filter(row => (
    query
      .reduce(
        (search, q) => (
          search || row.title.toLowerCase().includes(q)
        ),
        false
      )
    || row.url.toLowerCase().includes(query.join(' '))
  ))

  return (
    <React.Fragment>
      <TopBar
        title={title}
        onSearchChange={Search.search({ setQuery, })}
      />
      <div
        className={classes.offset}
      >
        <Container>
          {
            linksLoading
            && (
              <Typography
                variant="h3"
                component="p"
              >
                Loading&hellip;
              </Typography>
            )
          }
          {
            !linksLoading
            && linksError
            && (
              <div>
                <Typography
                  variant="h3"
                  component="p"
                >
                  {linksError}
                </Typography>
                <Button
                  onClick={Link.retry({ setLinks, setLinksLoading, setLinksError, })}
                >
                  Retry
                </Button>
              </div>
            )
          }
          {
            !linksLoading
            && !linksError
            && (
              <CardGrid
                animationDuration="500ms"
                items={items}
                query={query.join(' ')}
                contentComponent={LinkContent}
              />
            )
          }
        </Container>
      </div>
    </React.Fragment>
  )
}

export default App

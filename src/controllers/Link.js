import Client from '../services/request/Client'
import * as Link from '../services/api/Link'
import localLinks from '../data/main_links.json'

export const load = async ({
  setLinks,
  setLinksLoading,
  setLinksError,
}) => {
  setLinksLoading(true)
  setLinksError(null)
  setLinks([])
  try {
    let json
    if (window.location.hostname !== 'localhost') {
      const client = new Client()
      const response = await client(Link.getLinks(Date.now()))
      json = await response.json()
    } else {
      json = localLinks
    }

    setLinks(json)
  } catch (err) {
    setLinksError(err.message)
  }
  setLinksLoading(false)
}

export const retry = ({
  setLinks,
  setLinksLoading,
  setLinksError,
}) => async () => load({
  setLinks,
  setLinksLoading,
  setLinksError,
})

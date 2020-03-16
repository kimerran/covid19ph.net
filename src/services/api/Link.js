export const getLinks = timestamp => ({
  method: 'get',
  url: `https://raw.githubusercontent.com/kimerran/covid19ph.net/master/src/data/main_links.json?x=${timestamp}`,
})

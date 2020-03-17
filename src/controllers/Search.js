const SEARCH_DEBOUNCE = 500
let timeout = null

export const search = ({ setQuery, }) => e => {
  const { value, } = e.target
  if (timeout !== null) {
    window.clearTimeout(timeout)
    timeout = null
  }
  timeout = window.setTimeout(() => {
    setQuery(
      value
        .split(' ')
        .map(s => s.trim().toLowerCase()),
    )
  }, SEARCH_DEBOUNCE)
}

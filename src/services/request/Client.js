export default function Client() {
  return ({
    url,
    ...params
  }) => window.fetch(url, params)
}

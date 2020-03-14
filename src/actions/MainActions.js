import axios from 'axios';

const loadLinks = () => async (dispatch) => {
  const { data } = await axios.get('https://raw.githubusercontent.com/kimerran/covid19ph.net/master/src/data/main_links.json')
  dispatch({ type: 'SET_LINKS', data })
}

export {
  loadLinks,
}
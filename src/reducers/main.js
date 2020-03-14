const defaultState = {
  links: []
}

export default function (state= defaultState, action) {
  switch (action.type) {
    case 'SET_LINKS':
      return Object.assign({}, state, { links: action.data })
    default:
      return state;
  }
}
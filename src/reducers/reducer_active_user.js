// its job is to listen for an action.
export default function(state = null, action) {

  switch (action.type) {
    case 'USER_SELECTED':
      return action.payload;
      break;

  }
  return state;
}

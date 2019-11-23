const authReducer = (state = false, action) => {
  switch (action.type) {
    case 'Sign In':
      return !state;
    default:
      return false;
  }
}

export default authReducer;
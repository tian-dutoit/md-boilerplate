const example = (state = [], action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return {
        ...state,
        example: !state.example 
  }
    default:
      return state
  }
}

export default example
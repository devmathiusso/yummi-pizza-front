const INITIAL_STATE = {
  isLoadingContent: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return {
        ...state,
        isLoadingContent: !state.isLoadingContent
      }

    default:
      return state;
  }
}

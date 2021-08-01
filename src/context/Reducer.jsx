/**
 * Edit the state; Call a function to edit or edit right here;
 * @param {*} state
 * @param {*} action
 * @returns
 */
export const Reducer = (state, action) => {
  switch (action.type) {
    case 'EDIT_USER': {
      const { key, value } = action.payload;
      return ({ ...state, user: { ...state.user, [key]: value } });
    }
    default:
      return state;
  }
};

export default Reducer;

export const editUser = (dispatch, key, value) => {
  dispatch({
    type: 'EDIT_USER',
    payload: { key, value },
  });
};

export default editUser;

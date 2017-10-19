export const selectUser = (user) => {

  //logic
  console.log("you clicked on user", user.first);

  return {
    type: "USER_SELECTED",
    payload: user
  }
};

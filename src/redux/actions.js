import zIndex from "@material-ui/core/styles/zIndex";

export const addBiz = (biz) => {
  return {
    type: `ADD_BIZ`,
    value: biz,
  };
};

export const removeBiz = (index) => {
  return {
    type: `REMOVE_BIZ`,
    value: index,
  };
};

export const loginUser = (user) => {
  return {
    type: `LOGIN`,
    value: user,
  };
};

export const logoutUser = (user) => {
  return {
    type: `LOGOUT`,
    value: user,
  };
};

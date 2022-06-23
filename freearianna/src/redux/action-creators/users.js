import config from "../../config";
import axios from "axios";

const test = "https://freearianna-nodejs.herokuapp.com";

const HEADERS = {
  headers: {
    authorization: `${config.auth}`,
  },
};

const setUserListStart = () => {
  return {
    type: "SET_USER_LIST_START",
    payload: { error: null, deleteError: null }, // init
  };
};

const setUserListSuccess = data => {
  return {
    type: "SET_USER_LIST_SUCCESS",
    payload: { users: data },
  };
};

const setUserListError = err => {
  return {
    type: "SET_USER_LIST_ERROR",
    payload: { error: err },
  };
};

export const setUserList = () => dispatch => {
  dispatch(setUserListStart());
  axios
    .get(`${config.base_url}/api/users`)
    .then(res => {
      dispatch(setUserListSuccess(res.data.recalls));
    })
    .catch(err => dispatch(setUserListError(err)));
};

// --------------

const createUserStart = () => {
  return {
    type: "CREATE_USER_START",
    payload: {},
  };
};
const createProfileStart = () => {
  return {
    type: "CREATE_PROFILE_START",
    payload: {},
  };
};

const createUserSuccess = userData => {
  // data: user obj: {fn, ln, sex, age, pw}
  return {
    type: "CREATE_USER_SUCCESS",
    payload: userData,
  };
};
const createProfileSuccess = userData => {
  return {
    type: "CREATE_PROFILE_SUCCESS",
    payload: { userData: userData },
  };
};

const createUserError = err => {
  return {
    type: "CREATE_USER_ERROR",
    payload: { error: err },
  };
};
const createProfileError = err => {
  return {
    type: "CREATE_PROFILE_ERROR",
    payload: { error: err },
  };
};

export const createUser = userData => dispatch => {
  dispatch(createUserStart());
  const __config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(`${config.base_url}/api/users/recall`, userData, __config)
    .then(res => dispatch(createUserSuccess(res.data)))
    .catch(err => dispatch(createUserError(err)));
};

export const createProfile = (userData, navigate) => dispatch => {
  dispatch(createProfileStart());
  axios
    .post(`${config.base_url}/api/users/createprofile`, userData)
    .then(res => {
      dispatch(createProfileSuccess(res.data));
      console.log(res.data);
      const username =
        res.data.content.full_name.split(" ")[0] +
        res.data.content.full_name.split(" ")[1];
      navigate(
        `/recallnow/${res.data.content._id}/${res.data.content.full_name}`
      );
    })
    .catch(err => dispatch(createProfileError(err)));
};
export const initUser = () => dispatch => {
  dispatch({
    type: "INIT_USER",
    payload: {
      firstname: "",
      lastname: "",
      sex: "",
      age: "",
      password: "",
      createSuccess: false,
      error: null,
    },
  });
};

// ---------

const editUserStart = () => {
  return {
    type: "EDIT_USER_START",
    payload: {},
  };
};
const editProfileStart = () => {
  return {
    type: "EDIT_PROFILE_START",
    payload: {},
  };
};

const editUserSuccess = userData => {
  // data: user obj: {fn, ln, sex, age, pw}
  return {
    type: "EDIT_USER_SUCCESS",
    payload: userData,
  };
};
const editProfileSuccess = userData => {
  // data: user obj: {fn, ln, sex, age, pw}
  return {
    type: "EDIT_PROFILE_SUCCESS",
    payload: userData,
  };
};
const editUserError = err => {
  return {
    type: "EDIT_USER_ERROR",
    payload: { error: err },
  };
};
const editProfileError = err => {
  return {
    type: "EDIT_PROFILE_ERROR",
    payload: { error: err },
  };
};

export const editUser = (userData, history, initEdit) => dispatch => {
  dispatch(editUserStart());
  const __config = {
    headers: {
      authorization: `${config.auth}`,
      "Content-Type": "application/json",
    },
  };
  axios
    .put(`${config.base_url}/api/users/${userData.id}`, userData, __config)
    .then(res => {
      dispatch(editUserSuccess(res.data));
      // other method:
      history.push("/");
      initEdit();
    })
    .catch(err => dispatch(editUserError(err)));
};

export const updateUser = (userData, navigate) => dispatch => {
  dispatch(editProfileStart());
  const __config = {
    headers: {
      authorization: `${config.auth}`,
      "Content-Type": "application/json",
    },
  };
  axios
    .put(
      `${config.base_url}/api/users/updateProfile/${userData.person}`,
      userData,
      __config
    )
    .then(res => {
      dispatch(editProfileSuccess(res.data));

      // navigate('/recall')
    })
    .catch(err => dispatch(editProfileError(err)));
};

// -------

export const initEdit = () => dispatch => {
  // console.log('init dispatch');
  dispatch({
    type: "INIT_EDIT",
    payload: {
      firstname: "",
      lastname: "",
      sex: "",
      age: "",
      password: "",
      editSuccess: false,
      error: null,
    },
  });
};

// --------

const deleteUserStart = () => {
  return {
    type: "DELETE_USER_START",
    payload: {},
  };
};

const deleteUserSuccess = () => {
  return {
    type: "DELETE_USER_SUCCESS",
  };
};

const deleteUserError = err => {
  return {
    type: "DELETE_USER_ERROR",
    payload: { deleteError: err },
  };
};

export const deleteUser = id => dispatch => {
  dispatch(deleteUserStart());
  axios
    .delete(`${config.base_url}/api/users/${id}`)
    .then(() => {
      dispatch(deleteUserSuccess()); //might use if we need deleted id
      dispatch(setUserList());
    })
    .catch(err => dispatch(deleteUserError(err)));
};

// --------

const getUserStart = () => {
  return {
    type: "GET_USER_START",
    payload: {},
  };
};
const getProfileStart = () => {
  return {
    type: "GET_PROFILE_START",
    payload: {},
  };
};
const findProfileStart = () => {
  return {
    type: "FIND_PROFILE_START",
    payload: {},
  };
};

const getUserSuccess = userData => {
  return {
    type: "GET_USER_SUCCESS",
    payload: { user: userData },
  };
};
const getProfileSuccess = userData => {
  return {
    type: "GET_PROFILE_SUCCESS",
    payload: { profile: userData },
  };
};

const getUserError = err => {
  return {
    type: "GET_USER_ERROR",
    payload: { error: err },
  };
};

export const getUser = (id, setUserData) => dispatch => {
  dispatch(getUserStart());
  axios
    .get(`${config.base_url}/api/users/${id}`)
    .then(res => {
      console.log(res);
      const { firstname, lastname, sex, age } = res.data;
      const userData = { firstname, lastname, sex, age };
      //dispatch(getUserSuccess(userData));
      //setUserData(userData);
    })
    .catch(err => dispatch(getUserError(err)));
};
export const getProfile = (id, setUserData) => dispatch => {
  dispatch(getProfileStart());

  axios
    .get(`${config.base_url}/api/users/profile?id=${id}`)
    .then(res => {
      const {
        //firstname,
        //lastname,
        full_name,
        //email,
        case_name,
        license,
        zipcode,
        //address,
        signatures_Require,
        //phone,
        state,
        county,
        user_avatar,
        page_title,
        page_contents,
        current_sign,
        pdf1,
        pdf2,
        pdf3,
        pdf4,
        pdf1_title,
        pdf2_title,
        pdf3_title,
        pdf4_title,
      } = res.data;
      const userData = {
        //firstname,
        //lastname,
        full_name,
        //email,
        case_name,
        license,
        zipcode,
        //address,
        signatures_Require,
        //phone,
        state,
        county,
        user_avatar,
        page_title,
        page_contents,
        current_sign,
        pdf1,
        pdf2,
        pdf3,
        pdf4,
        pdf1_title,
        pdf2_title,
        pdf3_title,
        pdf4_title,
      };
      dispatch(getProfileSuccess(userData));
      setUserData(userData);
    })
    .catch(err => dispatch(getUserError(err)));
};

export const findProfile = (address, setUserData) => dispatch => {
  dispatch(findProfileStart());
  axios
    .post(`${config.base_url}/api/users/findprofile/${address}`, {}, HEADERS)
    .then(res => {
      console.log(res.data);
      setUserData(res.data);
      return res.data;
    })
    .catch(err => dispatch(getUserError(err)));
};

export const findSigner = (profile_id, setProfileUsers) => dispatch => {
  dispatch(findProfileStart());
  axios
    .get(`${config.base_url}/api/users/findsigner?id=${profile_id}`)
    .then(res => {
      setProfileUsers(res.data);
      return res.data;
    })
    .catch(err => dispatch(getUserError(err)));
};

export const findEmailSignUser = (userEmail, setEmailStatue) => dispatch => {
  dispatch(findProfileStart());
  axios
    .post(
      `${config.base_url}/api/users/findemailsigner/${userEmail.email}&${userEmail.person}`,
      {},
      HEADERS
    )
    .then(res => {
      if (res.data.users.length !== 0) {
        setEmailStatue(true);
      }
      if (res.data.users.length === 0) {
        setEmailStatue(false);
      }
      return res.data;
    })
    .catch(err => dispatch(getUserError(err)));
};
export const findPhoneSignUser = (userPhone, setPhoneStatue) => dispatch => {
  dispatch(findProfileStart());
  axios
    .post(
      `${config.base_url}/api/users/findphonesigner/${userPhone.phone}&${userPhone.person}`,
      {},
      HEADERS
    )
    .then(res => {
      if (res.data.users.length !== 0) {
        setPhoneStatue(true);
      }
      if (res.data.users.length === 0) {
        setPhoneStatue(false);
      }

      return res.data;
    })
    .catch(err => dispatch(getUserError(err)));
};

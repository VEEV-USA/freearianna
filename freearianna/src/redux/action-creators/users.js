import axios from 'axios';
const setUserListStart = () => {
  return {
    type: 'SET_USER_LIST_START',
    payload: { error: null, deleteError: null } // init
  };
};

const setUserListSuccess = data => {
  // data: Array of user obj
  //   console.log(data[0]);
  return {
    type: 'SET_USER_LIST_SUCCESS',
    payload: { users: data }
  };
};

const setUserListError = err => {
  return {
    type: 'SET_USER_LIST_ERROR',
    payload: { error: err }
  };
};

export const setUserList = () => dispatch => {
  dispatch(setUserListStart());
  axios
    .get('http://localhost:5000/api/users')
    .then(res => dispatch(setUserListSuccess(res.data)))
    .catch(err => dispatch(setUserListError(err)));
};

// --------------

const createUserStart = () => {
  return {
    type: 'CREATE_USER_START',
    payload: {}
  };
};
const createProfileStart = () => {
  return {
    type: 'CREATE_PROFILE_START',
    payload: {}
  };
};

const createUserSuccess = userData => {
  // data: user obj: {fn, ln, sex, age, pw}
  return {
    type: 'CREATE_USER_SUCCESS',
    payload: userData
  };
};
const createProfileSuccess = userData => {
  return {
    type: 'CREATE_PROFILE_SUCCESS',
    payload: {userData:userData}
  };
};

const createUserError = err => {
  return {
    type: 'CREATE_USER_ERROR',
    payload: { error: err }
  };
};
const createProfileError = err => {
  return {
    type: 'CREATE_PROFILE_ERROR',
    payload: { error: err }
  };
};

export const createUser = userData => dispatch => {
  dispatch(createUserStart());
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios
    .post('http://localhost:5000/api/users/recall', userData, config)
    .then(res => dispatch(createUserSuccess(res.data)))
    .catch(err => dispatch(createUserError(err)));
};

export const createProfile = (userData, navigate) => dispatch => {
  dispatch(createProfileStart());
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios
    .post('http://localhost:5000/api/users/createprofile', userData, config)
    .then(res => {
      dispatch(createProfileSuccess(res.data)); 
      navigate('/recallnow',{ state: res.data })
    })
    .catch(err => dispatch(createProfileError(err)));
    
};
export const initUser = () => dispatch => {
  dispatch({
    type: 'INIT_USER',
    payload: {
      firstname: '',
      lastname: '',
      sex: '',
      age: '',
      password: '',
      createSuccess: false,
      error: null
    }
  });
};

// ---------

const editUserStart = () => {
  return {
    type: 'EDIT_USER_START',
    payload: {}
  };
};
const editProfileStart = () => {
  return {
    type: 'EDIT_PROFILE_START',
    payload: {}
  };
};

const editUserSuccess = userData => {
  // data: user obj: {fn, ln, sex, age, pw}
  return {
    type: 'EDIT_USER_SUCCESS',
    payload: userData
  };
};
const editProfileSuccess = userData => {
  // data: user obj: {fn, ln, sex, age, pw}
  return {
    type: 'EDIT_PROFILE_SUCCESS',
    payload: userData
  };
};
const editUserError = err => {
  return {
    type: 'EDIT_USER_ERROR',
    payload: { error: err }
  };
};
const editProfileError = err => {
  return {
    type: 'EDIT_PROFILE_ERROR',
    payload: { error: err }
  };
};

export const editUser = (userData, history, initEdit) => dispatch => {
  dispatch(editUserStart());
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios
    .put(`http://localhost:5000/api/users/${userData.id}`, userData, config)
    .then(res => {
      dispatch(editUserSuccess(res.data));
      // other method:
      history.push('/');
      initEdit();
    })
    .catch(err => dispatch(editUserError(err)));
};

export const updateUser = (userData,navigate) => dispatch => {
  dispatch(editProfileStart());
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios
    .put(`http://localhost:5000/api/users/updateProfile/${userData.person}`, userData, config)
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
    type: 'INIT_EDIT',
    payload: {
      firstname: '',
      lastname: '',
      sex: '',
      age: '',
      password: '',
      editSuccess: false,
      error: null
    }
  });
};

// --------

const deleteUserStart = () => {
  return {
    type: 'DELETE_USER_START',
    payload: {}
  };
};

const deleteUserSuccess = () => {
  // console.log(userData);
  return {
    type: 'DELETE_USER_SUCCESS'
    // payload: userData
  };
};

const deleteUserError = err => {
  return {
    type: 'DELETE_USER_ERROR',
    payload: { deleteError: err }
  };
};

export const deleteUser = id => dispatch => {
  dispatch(deleteUserStart());
  axios
    .delete(`http://localhost:5000/api/users/${id}`)
    .then(() => {
      dispatch(deleteUserSuccess()); //might use if we need deleted id
      dispatch(setUserList());
    })
    .catch(err => dispatch(deleteUserError(err)));
};

// --------

const getUserStart = () => {
  return {
    type: 'GET_USER_START',
    payload: {}
  };
};
const getProfileStart = () => {
  return {
    type: 'GET_PROFILE_START',
    payload: {}
  };
};
const findProfileStart = () => {
  return {
    type: 'FIND_PROFILE_START',
    payload: {}
  };
};

const getUserSuccess = userData => {
  // console.log(userData);
  return {
    type: 'GET_USER_SUCCESS',
    payload: { user: userData }
  };
};
const getProfileSuccess = userData => {
  // console.log(userData);
  return {
    type: 'GET_PROFILE_SUCCESS',
    payload: { profile: userData }
  };
};

const getUserError = err => {
  return {
    type: 'GET_USER_ERROR',
    payload: { error: err }
  };
};

export const getUser = (id, setUserData) => dispatch => {
  dispatch(getUserStart());
  axios
    .get(`http://localhost:5000/api/users/${id}`)
    .then(res => {
      const { firstname, lastname, sex, age } = res.data;
      const userData = { firstname, lastname, sex, age };
      dispatch(getUserSuccess(userData));
      setUserData(userData);
    })
    .catch(err => dispatch(getUserError(err)));
};
export const getProfile = (id, setUserData) => dispatch => {
  dispatch(getProfileStart());

  axios
    .get(`http://localhost:5000/api/users/profile/${id}`)
    .then(res => {
      const { firstname, lastname,full_name, email,case_name, license,zipcode, address,signatures_Require, phone, state, country,user_avatar,page_title,page_contents,current_sign,pdf1_title,pdf2_title,pdf3_title,pdf4_title,pdf1,pdf2,pdf3,pdf4} = res.data;
      const userData = { firstname, lastname,full_name, email,case_name, license,zipcode, address,signatures_Require, phone, state, country,user_avatar,page_title,page_contents,current_sign,pdf1_title,pdf2_title,pdf3_title,pdf4_title,pdf1,pdf2,pdf3,pdf4 };
      dispatch(getProfileSuccess(userData));
      setUserData(userData);
    })
    .catch(err => dispatch(getUserError(err)));
};



export const findProfile = (address, setUserData) => dispatch => {
  dispatch(findProfileStart());
  axios
    .get(`http://localhost:5000/api/users/findprofile/${address}`)
    .then(res => {
      setUserData(res.data);
      return res.data
    })
    .catch(err => dispatch(getUserError(err)));
};
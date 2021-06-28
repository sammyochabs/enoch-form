import { authConstants } from "../Actions/constants";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    phoneNumber: "",
    email: "",
    picture: "",
    password: "",
    recieveEmail: "",
    acceptPrivacy: "",
  },
  signingUp: false,
  signedUp: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case authConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        signingUp: true,
      };
      break;

    case authConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        signingUp: false,
        signedUp: true,
      };
      break;
  }
  console.log(state);
  return state;
};

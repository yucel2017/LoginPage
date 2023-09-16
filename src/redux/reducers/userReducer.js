const { State } = require('react-native-gesture-handler');
const { CHANGE_FULL_NAME, CHANGE_SUR_NAME, CHANGE_E_MAIL, CHANGE_TEL } = require('../actions/actionTypes.js');

const initialState = {
    fullName: '',
    surName: '',
    eMail: '',
    tel:''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_FULL_NAME:
            return { ...state, fullName: action.payload };

        case CHANGE_SUR_NAME:
            return { ...state, surName: action.payload };

        case CHANGE_E_MAIL:
            return { ...state, eMail: action.payload };

        case CHANGE_TEL:
            return { ...state, tel: action.payload };

    };

    return state;
};

export default userReducer;


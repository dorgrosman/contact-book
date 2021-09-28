// import SEARCH  from './';
import { SET_CONTACT_LIST } from '../Action/ContactAction'
import { SET_CONTACT_SEARCH } from './../Action/ContactAction';
const initialState = {
    contentsList: [],
    contents: [''],
    searchInput: ''
};

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_LIST:
            state.contentsList = action.payload
            state.contentsList.map(content => {
                content.isHighlight = false;
                if (content.id.value == null) {
                    content.id.value = makeId()
                }
            })
            return { ...state }
        case SET_CONTACT_SEARCH:
            state.searchInput = action.payload;
            return { ...state, searchInput: action.payload }
        default:
            return state;
    }
}

function makeId(length = 5) {
    var txt = '';
    var possible = '1234567890';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
export default ContactReducer
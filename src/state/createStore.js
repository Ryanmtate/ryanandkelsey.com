import { createStore, combineReducers } from "redux";
import main from "./mainReducer";
import rsvp from "./rsvpReducer";
import hotels from "./hotelsReducer";

const store = () => createStore(combineReducers({ main, rsvp, hotels }), {});

export default store;

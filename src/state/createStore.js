import { createStore, combineReducers } from "redux";
import main from "./mainReducer";
import rsvp from "./rsvpReducer";
import hotels from "./hotelsReducer";
import registry from "./registryReducer";

const store = () =>
    createStore(combineReducers({ main, rsvp, hotels, registry }), {});

export default store;

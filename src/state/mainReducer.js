const INITIAL_STATE = {
    // loading state;
    // key, value store
};

export const MAIN_REDUCER_GENERIC = "MAIN_REDUCER_GENERIC";

export default function mainReducer(
    state = INITIAL_STATE,
    { type, key, value }
) {
    switch (type) {
        case MAIN_REDUCER_GENERIC:
            return {
                ...state,
                [key]: value
            };
        default:
            return state;
    }
}

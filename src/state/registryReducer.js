const INITIAL_STATE = {
    list: [
        {
            name: "Donate to MTTA",
            website: "https://www.skimtta.org",
        },
        {
            name: "Amazon",
            website: "https://www.amazon.com/wedding/share/RyanandKelseyTate",
            
        },
        {
            name: "Home Depot Gift Cards",
            website: "https://www.homedepot.com/c/Gift_Cards",
        },
        {
            name: "Target Gift Cards",
            website: "https://www.target.com/c/gift-cards/-/N-5xsxu",
        },
    ]
};

export const REGISTRY_REDUCER_GENERIC = "REGISTRY_REDUCER_GENERIC";

export default function registryReducer(
    state = INITIAL_STATE,
    { type, key, value }
) {
    switch (type) {
        case REGISTRY_REDUCER_GENERIC:
            return {
                ...state,
                [key]: value
            };
        default:
            return state;
    }
}
const INITIAL_STATE = {
    list: [
        {
            name: "SilverCloud Inn",
            phoneNumber: "253-272-1300",
            address: "2317 Ruston Way, Tacoma, WA 98402",
            website: "www.silvercloud.com/Tacoma",
            discountCode: "TATE",
            password: "TATE",
            discountRate: "$10 Off"
        },
        {
            name: "Hotel Murano",
            phoneNumber: "253-591-4150",
            address: "1320 Broadway Plaza, Tacoma, WA 98402",
            website: "http://bit.ly/2D2y75T",
            discountCode: "WEDDING",
            password: "WEDDING",
            discountRate: "10% Off"
        }
    ]
};

export const HOTELS_REDUCER_GENERIC = "HOTELS_REDUCER_GENERIC";

export default function hotelsReducer(
    state = INITIAL_STATE,
    { type, key, value }
) {
    switch (type) {
        case HOTELS_REDUCER_GENERIC:
            return {
                ...state,
                [key]: value
            };
        default:
            return state;
    }
}

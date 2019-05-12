const INITIAL_STATE = {
    rsvpd: false,
    going: false,
    email: "",
    contact_name: "",
    note: "",
    number_guests: 1,
    activities: [
        {
            name: "Lunch, Paint & Sip",
            title: "paint_sip",
            checked: false,
            location: "Uncorked Canvas - Tacoma, WA",
            capacity: 30,
            date: new Date("8/12/2019"),
            hour: 15
        },
        // {
        //     name: "Aerial Yoga",
        //     title: "aerial_yoga",
        //     checked: false,
        //     location: "Cilly Fitness at Good Karma - Tacoma, WA",
        //     capacity: 10,
        //     date: new Date("8/12/2019"),
        //     hour: 11
        // },
        {
            name: "Seattle Adventure",
            title: "seattle_adventure",
            checked: false,
            location: "Meet at R&K's House - Tacoma, WA",
            capacity: 10,
            date: new Date("8/8/2019"),
            hour: 8
        },
        // {
        //     title: "NW Adventure Trek",
        //     checked: false,
        //     location: "Meet at R&K's House - Tacoma, WA",
        //     capacity: 100,
        //     date: new Date("8/13/2019"),
        //     hour: 8
        // },
        // {
        //     title: "Day Trip to Seattle",
        //     checked: false,
        //     location: "Meet at R&K's House - Tacoma, WA",
        //     capacity: 100,
        //     date: new Date("8/13/2019"),
        //     hour: 8
        // },
        {
            name: "Emerald Downs Horse Races",
            title: "horse_races",
            checked: false,
            location: "Emerald Downs - Auburn, WA",
            capacity: 100,
            date: new Date("8/11/2019"),
            hour: 10
        },
        {
            name: "Tacoma Adventure",
            title: "tacoma_adventure",
            checked: false,
            location: "Meet at R&K's House - Tacoma, WA",
            capacity: 100,
            date: new Date("8/9/2019"),
            hour: 10
        },
        {
            name: "Sounders FC 2 vs. Orange County FC",
            title: "soccer_game",
            checked: false,
            location: "Cheney Stadium - Tacoma, WA",
            capacity: 100,
            date: new Date("8/9/2019"),
            hour: 18
        }
        // {
        //     title: "Rainer's Minor League Baseball Game",
        //     checked: false,
        //     location: "Cheney Stadium - Tacoma, WA",
        //     capacity: 100,
        //     date: new Date("8/15/2019"),
        //     hour: 18
        // }
    ]
};

export const RSVP_REDUCER_GENERIC = "RSVP_REDUCER_GENERIC";

export default function rsvpReducer(
    state = INITIAL_STATE,
    { type, key, value }
) {
    switch (type) {
        case RSVP_REDUCER_GENERIC:
            return {
                ...state,
                [key]: value
            };
        default:
            return state;
    }
}

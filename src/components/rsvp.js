import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export default class RSVPForm extends Component {
    constructor() {
        super();
        this.state = {
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
                    hour: 16
                },
                {
                    name: "Aerial Yoga",
                    title: "aerial_yoga",
                    checked: false,
                    location: "Cilly Fitness at Good Karma - Tacoma, WA",
                    capacity: 10,
                    date: new Date("8/12/2019"),
                    hour: 10
                },
                {
                    name: "Seattle Adventure",
                    title: "seattle_adventure",
                    checked: false,
                    location: "Meet at R&Ks - Tacoma, WA",
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
    }

    renderButtons(opts) {
        return opts.map((opt, i) => {
            const { ref, title, color, onClick, rsvp, disabled } = opt;
            return (
                <div
                    style={{
                        gridColumn: "6",
                        padding: 5
                    }}
                    key={i}
                >
                    <Button
                        block
                        color={color}
                        onClick={onClick.bind(this, ref, rsvp)}
                        disabled={disabled}
                    >
                        {title}
                    </Button>
                </div>
            );
        });
    }

    async handleRSVP(ref, rsvp) {
        try {
            console.log("ref, rsvp", ref, rsvp);
            console.log("this.state", this.state);
            await axios.post("http://localhost:3000/wedding/rsvp", this.state);

            this.setState({ rsvpd: true, going: rsvp });
        } catch (error) {
            console.log("error", error);
        }
    }

    partySizeOptions(size) {
        const options = [];
        for (var i = 0; i < size; i++) {
            options.push(<option key={i}>{i + 1}</option>);
        }
        return options;
    }

    guestPartyInfo() {
        const { number_guests } = this.state;

        if (number_guests === 1) {
            return null;
        } else {
            const guestParties = [];
            for (var i = 1; i < number_guests; i++) {
                guestParties.push(
                    <FormGroup key={i}>
                        <Label for={`guest_name_${i}`}>
                            Guest {i} Information
                        </Label>
                        <Input
                            type="name"
                            name={`guest_name_${i}`}
                            id={`guest_name_${i}`}
                            placeholder="Enter Your Guest's First and Last Name"
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state[`guest_name_${i}`] || ""}
                        />
                    </FormGroup>
                );
            }
            return guestParties;
        }
    }

    activityOptions(activities) {
        return activities
            .sort((a, b) => {
                return a.date - b.date;
            })
            .map((activity, i) => {
                const { name, location, date, hour, checked } = activity;
                return (
                    <FormGroup check key={i}>
                        <Label check>
                            <Input
                                type="checkbox"
                                name={`activity_${i}`}
                                checked={checked}
                                onChange={e => {
                                    activities[i] = {
                                        ...activities[i],
                                        checked: e.target.checked
                                    };
                                    this.setState({ activities: activities });
                                }}
                            />{" "}
                            <span style={{ color: "#f0ad4e" }}>{name}</span> |{" "}
                            <span style={{ color: "#4BBF73" }}>
                                {location}
                            </span>{" "}
                            | {date ? date.toLocaleDateString() : null}{" "}
                            {date
                                ? new Date(
                                      date.setHours(hour)
                                  ).toLocaleTimeString()
                                : null}
                        </Label>
                    </FormGroup>
                );
            });
    }

    handleOnChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    renderRsvpForm() {
        const { activities, contact_name } = this.state;

        return (
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: 1200,
                    margin: 50,
                    padding: 100,
                    zoom: "75%"
                }}
            >
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                >
                    <FormGroup>
                        <Label for="contact_name">Name</Label>
                        <Input
                            type="name"
                            name="name"
                            id="contact_name"
                            placeholder="Enter Your First and Last Name"
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state["contact_name"]}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state["email"]}
                        />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="NumberGuests">
                            Party Size (Incl. You )
                        </Label>
                        <Input
                            type="select"
                            name="number_guests"
                            id="NumberGuests"
                            onChange={e => {
                                // Set our party size to the changed value
                                this.setState({
                                    number_guests: +e.target.value
                                });
                            }}
                        >
                            {this.partySizeOptions(6)}
                        </Input>
                    </FormGroup>
                    {this.guestPartyInfo()}
                    <hr />
                    <FormGroup>
                        <Label for="note">
                            Leave a Special Note for Ryan & Kelsey
                        </Label>
                        <Input
                            type="textarea"
                            name="note"
                            id="note"
                            value={this.state["note"]}
                            onChange={this.handleOnChange.bind(this)}
                        />
                    </FormGroup>
                    <hr />
                    <FormGroup tag="fieldset">
                        <legend>Activities To Do While in Town!</legend>
                        {this.activityOptions(activities)}
                    </FormGroup>
                    <hr />
                    {this.renderButtons([
                        {
                            title: "Excitedly Accept!",
                            ref: "/rsvp/accept",
                            onClick: this.handleRSVP,
                            rsvp: true,
                            disabled: contact_name.length < 5,
                            color: "success"
                        },
                        {
                            title: "Regretfully Decline!",
                            ref: "/rsvp/decline",
                            onClick: this.handleRSVP,
                            rsvp: false,
                            disabled: contact_name.length < 5,
                            color: "secondary"
                        }
                    ])}
                </Form>
            </div>
        );
    }

    render() {
        const { rsvpd, going } = this.state;

        return rsvpd ? (
            going ? (
                <div style={{ margin: 200, height: 400, zoom: "75%" }}>
                    <div
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: 100,
                            height: 50,
                            textAlign: "center"
                        }}
                    >
                        <h1 style={{ color: "white" }}>See you soon!</h1>
                    </div>
                </div>
            ) : (
                <div style={{ margin: 200, height: 400, zoom: "75%" }}>
                    <div
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: 100,
                            height: 50,
                            textAlign: "center"
                        }}
                    >
                        <h1 style={{ color: "white" }}>Sorry to miss you!</h1>
                    </div>
                </div>
            )
        ) : (
            this.renderRsvpForm()
        );
    }
}

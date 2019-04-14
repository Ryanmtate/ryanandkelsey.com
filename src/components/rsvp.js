import React, { Component } from "react";
// import { Link } from "gatsby";
import {
    ButtonGroup,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";

export default class RSVPForm extends Component {
    state = {
        contactName: "",
        partySize: 1,
        namesOfGuestAndParty: {},
        activities: [
            {
                title: "Lunch, Paint & Sip",
                location: "Uncorked Canvas - Tacoma, WA",
                capacity: 30,
                date: new Date("8/12/2019"),
                hour: 16
            },
            {
                title: "Aerial Yoga",
                location: "Cilly Fitness at Good Karma - Tacoma, WA",
                capacity: 10,
                date: new Date("8/12/2019"),
                hour: 10
            },
            {
                title: "Day Trip to Seattle",
                location: "Meet at R&K's House - Tacoma, WA",
                capacity: 100,
                date: new Date("8/8/2019"),
                hour: 8
            },
            {
                title: "Emerald Downs Horse Races",
                location: "Emerald Downs - Auburn, WA",
                capacity: 100,
                date: new Date("8/11/2019"),
                hour: 10
            },
            {
                title: "Tacoma Adventure",
                location: "Meet at R&K's House - Tacoma, WA",
                capacity: 100,
                date: new Date("8/9/2019"),
                hour: 10
            },
            {
                title: "Sounders FC 2 vs. Orange County FC",
                location: "Cheney Stadium - Tacoma, WA",
                capacity: 100,
                date: new Date("8/9/2019"),
                hour: 18
            }
        ]
    };

    renderButtons(opts) {
        return opts.map((opt, i) => {
            const { ref, title, color } = opt;
            return (
                <div
                    style={{
                        gridColumn: "6",
                        padding: 5
                    }}
                    key={i}
                >
                    <Button block color={color}>
                        {title}
                    </Button>
                </div>
            );
        });
    }

    partySizeOptions(size) {
        const options = [];
        for (var i = 0; i < size; i++) {
            options.push(<option key={i}>{i + 1}</option>);
        }
        return options;
    }

    guestPartyInfo() {
        const { partySize } = this.state;

        if (partySize == 1) {
            return null;
        } else {
            const guestParties = [];
            for (var i = 1; i < partySize; i++) {
                guestParties.push(
                    <FormGroup key={i}>
                        <Label for={`${i}_contactGuest`}>
                            Guest {i} Information
                        </Label>
                        <Input
                            type="name"
                            name={`${i}_contactGuest`}
                            id={`${i}_contactGuest`}
                            placeholder="Enter Your Guest's First and Last Name"
                        />
                    </FormGroup>
                );
            }
            return guestParties;
        }
    }

    activityOptions() {
        const { activities } = this.state;

        return activities
            .sort((a, b) => {
                return a.date - b.date;
            })
            .map((activity, i) => {
                const { title, location, capacity, date, hour } = activity;
                return (
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name={`activity_${i}`} />{" "}
                            <span style={{ color: "#f0ad4e" }}>{title}</span> |{" "}
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

    render() {
        return (
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    margin: 50,
                    padding: 100
                }}
            >
                <Form>
                    <FormGroup>
                        <Label for="contactName">Name</Label>
                        <Input
                            type="name"
                            name="name"
                            id="contactName"
                            placeholder="Enter Your First and Last Name"
                        />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="PartySize">Party Size (Incl. You)</Label>
                        <Input
                            type="select"
                            name="partysize"
                            id="PartySize"
                            onChange={e => {
                                // Set our party size to the changed value
                                this.setState({ partySize: +e.target.value });
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
                        <Input type="textarea" name="note" id="note" />
                    </FormGroup>
                    <hr />
                    <FormGroup tag="fieldset">
                        <legend>Activities To Do While in Town!</legend>
                        {this.activityOptions()}
                    </FormGroup>
                    <hr />
                    {this.renderButtons([
                        {
                            title: "Excitedly Accept!",
                            ref: "/rsvp/accept",
                            color: "success"
                        },
                        {
                            title: "Regretfully Decline!",
                            ref: "/rsvp/decline",
                            color: "secondary"
                        }
                    ])}
                </Form>
            </div>
        );
    }
}

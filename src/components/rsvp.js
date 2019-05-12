import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import Hotels from "./HotelsComponent";

import { RSVP_REDUCER_GENERIC } from "../state/rsvpReducer";

export class RSVPForm extends Component {
    constructor() {
        super();
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
            const { dispatch } = this.props;
            await axios.post(
                "http://localhost:3000/wedding/rsvp",
                this.props.rsvp
            );
            dispatch({
                type: RSVP_REDUCER_GENERIC,
                key: "going",
                value: rsvp
            });

            dispatch({
                type: RSVP_REDUCER_GENERIC,
                key: "rsvpd",
                value: true
            });
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
        const { rsvp } = this.props;
        const { number_guests } = rsvp;

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
                            value={rsvp[`guest_name_${i}`] || ""}
                        />
                    </FormGroup>
                );
            }
            return guestParties;
        }
    }

    activityOptions(activities) {
        const { dispatch } = this.props;
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
                                    dispatch({
                                        type: RSVP_REDUCER_GENERIC,
                                        key: "activities",
                                        value: activities
                                    });
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
        const { dispatch } = this.props;
        dispatch({
            type: RSVP_REDUCER_GENERIC,
            key: e.target.id,
            value: e.target.value
        });
    }

    renderRsvpForm() {
        const {
            dispatch,
            rsvp: { activities, contact_name, email, note }
        } = this.props;

        return (
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: 1200,
                    margin: 150,
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
                            value={contact_name}
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
                            value={email}
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
                                dispatch({
                                    type: RSVP_REDUCER_GENERIC,
                                    key: "number_guests",
                                    value: +e.target.value
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
                            value={note}
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
        const {
            rsvp: { rsvpd, going }
        } = this.props;

        return rsvpd ? (
            going ? (
                <Hotels />
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

const mapStateToProps = (state, props) => {
    return {
        rsvp: state.rsvp
    };
};

const RSVPFormComponent = connect(mapStateToProps)(RSVPForm);

export default RSVPFormComponent;

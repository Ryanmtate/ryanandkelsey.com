import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const fontStyle = {
    color: "rgb(180, 202, 205)"
};

export default class HotelDetails extends React.Component {
    constructor(props) {
        super(props);

        this.name = props.name;
        this.phoneNumber = props.phoneNumber;
        this.address = props.address;
        this.website = props.website;
        this.discountCode = props.discountCode;
        this.password = props.password;
        this.discountRate = props.discoun;
    }

    bookNow() {
        return (
            <Button
                block
                color={"success"}
                size={"sm"}
                target="_blank"
                href={this.props.website}
            >
                Book Now!
            </Button>
        );
    }

    render() {
        const {
            name,
            phoneNumber,
            address,
            discountCode,
            password,
            discountRate
        } = this.props;
        return (
            <div
                style={{
                    marginTop: "50px"
                }}
            >
                <br />
                <h1 style={fontStyle}>
                    {name} | {phoneNumber}
                </h1>
                <h2 style={fontStyle}>{address}</h2>
                {this.bookNow()}
                <hr />
            </div>
        );
    }
}

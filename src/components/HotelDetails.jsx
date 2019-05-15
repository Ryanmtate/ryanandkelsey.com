import React from "react";
import { Button } from "reactstrap";

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
        const { target, website } = this.props;
        return (
            <Button
                block
                color={"success"}
                size={"sm"}
                target={target ? "_blank" : null}
                href={website}
            >
                <h3
                    style={{
                        color: "#fff",
                        padding: "10px"
                    }}
                >
                    Book Now!
                </h3>
            </Button>
        );
    }

    render() {
        const {
            name,
            phoneNumber,
            address,
            discountCode,
            password
        } = this.props;
        return (
            <div
                style={{
                    marginTop: "50px",
                    textAlign: "center"
                }}
            >
                <h1 style={fontStyle}>
                    {name} | {phoneNumber}
                </h1>
                <h2 style={fontStyle}>{address}</h2>
                <h4
                    style={{
                        color: fontStyle.color,
                        padding: "2px"
                    }}
                >
                    Discount Code: {discountCode}{" "}
                    {password ? `| Password: ${password}` : null}
                </h4>
                <br />
                {this.bookNow()}
            </div>
        );
    }
}

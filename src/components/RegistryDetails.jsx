import React from "react";
import { Button } from "reactstrap";

const fontStyle = {
    color: "rgb(180, 202, 205)"
};

export default class RegistryDetails extends React.Component {
    constructor(props) {
        super(props);
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
                Go to Site!
            </Button>
        );
    }

    render() {
        const { name } = this.props;
        return (
            <div
                style={{
                    marginTop: "50px"
                }}
            >
                <br />
                <h1 style={fontStyle}>{name}</h1>
                {this.bookNow()}
                <hr />
            </div>
        );
    }
}

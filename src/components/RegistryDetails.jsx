import React from "react";
import { Button } from "reactstrap";

const fontStyle = {
    color: "rgb(180, 202, 205)"
};

export default class RegistryDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    registryLink() {
        const { target, website, name } = this.props;
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
                    {name}
                </h3>
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
                {this.registryLink()}
            </div>
        );
    }
}

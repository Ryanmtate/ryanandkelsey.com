import React from "react";
import { connect } from "react-redux";
import RegistryDetails from "./RegistryDetails";
import { Button } from "reactstrap";

const fontStyle = {
    color: "rgb(180, 202, 205)",
    textAlign: "center",
    fontSize: "36px"
};

export class Registry extends React.Component {
    registryOptions() {
        const {
            registry: { list }
        } = this.props;

        return (
            <div>
                <hr />
                <br />
                <h2 style={fontStyle}>No gifts expected</h2>
                <h2 style={fontStyle}>but if you feel inclined</h2>
                <h2 style={fontStyle}>view our registry</h2>
                {list.map((registry, i) => {
                    return <RegistryDetails {...registry} key={i} />;
                })}
                <br />
                <hr />
                <br />
                <Button block color={"warning"} size={"sm"} href={"/hotels"}>
                    <h3
                        style={{
                            color: "rgb(167, 91, 8)",
                            padding: "10px",
                            fontSize: "36px"
                        }}
                    >
                        See Hotel Options
                    </h3>
                </Button>
            </div>
        );
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: screen.width < 400 ? 1500 : 1000,
                    margin: screen.width < 400 ? 0 : 150,
                    padding: 100,
                    zoom: "75%"
                }}
            >
                {this.registryOptions()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        registry: state.registry
    };
};

const RegistryComponent = connect(mapStateToProps)(Registry);

export default RegistryComponent;

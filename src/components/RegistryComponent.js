import React from "react";
import { connect } from "react-redux";
import RegistryDetails from "./RegistryDetails";

const fontStyle = {
    color: "rgb(180, 202, 205)",
    textAlign: "center",
    fontSize: "36px"
};

export class Registry extends React.Component {

    render() {
        const {
            registry: { list }
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
                <h1 style={fontStyle}>Registry Options!</h1>
                
                {list.map((registry, i) => {
                    return <RegistryDetails {...registry} key={i} />;
                })}
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

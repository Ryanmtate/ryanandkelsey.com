import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import HotelDetails from "./HotelDetails";

const fontStyle = {
    color: "rgb(180, 202, 205)",
    textAlign: "center",
    fontSize: "36px"
};

export class Hotels extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            hotels: { list }
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
                <h1 style={fontStyle}>We're Excited to See You Soon!</h1>
                <br />
                <h1 style={fontStyle}>Need a Hotel?</h1>
                {list.map((hotel, i) => {
                    return <HotelDetails {...hotel} key={i} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        hotels: state.hotels
    };
};

const HotelsComponent = connect(mapStateToProps)(Hotels);

export default HotelsComponent;

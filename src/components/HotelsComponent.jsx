import React from "react";
import { connect } from "react-redux";
import HotelDetails from "./HotelDetails";
import { Button } from "reactstrap";

const fontStyle = {
    color: "rgb(180, 202, 205)",
    textAlign: "center",
    padding: "10px",
    fontSize: "48px"
};

export class Hotels extends React.Component {
    render() {
        const {
            hotels: { list }
        } = this.props;
        return (
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: screen.width < 400 ? 2000 : 1500,
                    margin: screen.width < 400 ? 0 : 150,
                    padding: 100,
                    zoom: "75%"
                }}
            >
                <h1 style={fontStyle}>We're Excited </h1>
                <h1 style={fontStyle}>to See You Soon!</h1>
                <h3
                    style={{
                        ...fontStyle,
                        fontSize: "36px",
                        paddingTop: "20px"
                    }}
                >
                    Need a Hotel?
                </h3>
                {list.map((hotel, i) => {
                    return <HotelDetails {...hotel} key={i} />;
                })}
                <br />
                <hr />
                <br />
                <Button block color={"warning"} size={"sm"} href={"/registry"}>
                    <h3
                        style={{
                            color: "rgb(167, 91, 8)",
                            padding: "10px",
                            fontSize: "36px"
                        }}
                    >
                        See Registry Options
                    </h3>
                </Button>
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

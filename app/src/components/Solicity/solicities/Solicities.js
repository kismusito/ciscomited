import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar } from "../../../components";
import { solicityActions } from "../../../_actions";
import moment from "moment";
import "./solicities.css";

class Solicities extends Component {
    componentDidMount() {
        this.props.getSolicities();
    }

    render() {
        const { getSolicitiesReducer } = this.props;
        return (
            <div className="background_login">
                <Navbar />
                <div className="custom_background_sidebar">
                    <div className="center_container">
                        <div className="container_white_edit show_overflow_on_mobile">
                            <div className="title">Listado de solicitudes</div>
                            <ul className="solicityList">
                                {getSolicitiesReducer.status &&
                                    getSolicitiesReducer.solicities.map((solicity) => (
                                        <li key={solicity._id} className="solicityListItem">
                                            <div className="itemDate">{moment(solicity.create_at).format("L")}</div>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { getSolicitiesReducer } = state;
    return { getSolicitiesReducer };
}

const actionCreator = {
    getSolicities: solicityActions.getSolicities,
};

const solicitiesComponent = connect(mapStateToProps, actionCreator)(Solicities);
export { solicitiesComponent as Solicities };

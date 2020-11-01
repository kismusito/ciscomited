import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar } from "../../../components";
import { SolicityDetail } from "./solicityDetail";
import { solicityActions , generatorActions} from "../../../_actions";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { HighlightOff } from "@material-ui/icons";
import { TextField } from "@material-ui/core/";
import moment from "moment";
import "./solicities.css";

class Solicities extends Component {
    constructor(props) {
        super();

        this.state = {
            showGenerateModal: false,
            solicityID: "",
            solicityDate: new Date(),
            solicityHour: new Date(),
            solicityLink: "",
        };
    }

    componentDidMount() {
        this.props.getSolicities();
    }

    eHandleChangeStatus = (key) => {
        const solicityData = {
            solicityID: key,
            status: this.eHandleStatus.value,
        };

        this.props.changeStatus(solicityData);
    };

    eHandleShowDetails = (key) => {
        this.props.getDetails(key);
    };

    showGenerateModal = (key) => {
        this.setState({
            showGenerateModal: true,
            solicityID: key,
        });
    };

    hideGenerateModal = (key) => {
        this.setState({
            showGenerateModal: false,
            solicityID: "",
        });
    };

    changeDate = (value) => {
        this.setState({
            solicityDate: value,
        });
    };

    changeHour = (value) => {
        this.setState({
            solicityHour: value,
        });
    };

    changeLink = (ref) => {
        this.setState({
            solicityLink: ref.target.value,
        });
    };

    eSubmitGenerateSolicity = (e) => {
        e.preventDefault();
        const citationData = {
            solicityID: this.solicityID.value,
            citationDate: this.state.solicityDate,
            citationHour: this.state.solicityHour,
            citationLink: this.state.solicityLink,
        };
        this.props.generateCitation(citationData)
    };

    render() {
        const { getSolicitiesReducer, getRolInfoReducer, getSolicityReducer } = this.props;
        return (
            <div className="background_login">
                <Navbar />
                <div className="custom_background_sidebar">
                    {getSolicityReducer.status && <SolicityDetail />}
                    {this.state.showGenerateModal && (
                        <div className="center_container overlay_black">
                            <div className="container_white_edit custom_container_details">
                                <div
                                    className="close_modal"
                                    onClick={() => this.hideGenerateModal()}
                                >
                                    <HighlightOff />
                                </div>
                                <div className="title">Generar citación</div>
                                <form method="POST" onSubmit={this.eSubmitGenerateSolicity}>
                                    <input
                                        type="hidden"
                                        ref={(input) => (this.solicityID = input)}
                                        defaultValue={this.state.solicityID}
                                    />
                                    <div className="grid_pickers">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                margin="normal"
                                                label="Fecha"
                                                format="MM/dd/yyyy"
                                                required
                                                value={this.state.solicityDate}
                                                onChange={this.changeValues}
                                                KeyboardButtonProps={{
                                                    "aria-label": "change date",
                                                }}
                                            />
                                            <KeyboardTimePicker
                                                margin="normal"
                                                label="Hora"
                                                value={this.state.solicityHour}
                                                onChange={this.changeHour}
                                                required
                                                KeyboardButtonProps={{
                                                    "aria-label": "change time",
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                    <div className="form_group_material">
                                        <TextField
                                            label="Link de la reunión"
                                            multiline
                                            fullWidth
                                            required
                                            value={this.state.solicityLink}
                                            onChange={this.changeLink}
                                            variant="outlined"
                                        />
                                    </div>
                                    <button className="btn btn_big btn_teal mt-5">Generar</button>
                                </form>
                            </div>
                        </div>
                    )}

                    <div className="center_container">
                        <div className="container_white_edit show_overflow_on_mobile">
                            <div className="title">Listado de solicitudes</div>
                            <ul className="solicityList">
                                {getSolicitiesReducer.status &&
                                    getSolicitiesReducer.solicities.map((solicity) => (
                                        <li key={solicity._id} className="solicityListItem">
                                            <div className="itemDate">
                                                {moment(solicity.create_at).format("L")}
                                            </div>
                                            <div className="center_elements">
                                                <div className="status">
                                                    {solicity.statusDetail}
                                                </div>

                                                {getRolInfoReducer.status &&
                                                    getRolInfoReducer.rolInfo.capacity ===
                                                        "director" && (
                                                        <select
                                                            className="select_style_solicity"
                                                            defaultValue={solicity.status}
                                                            onChange={() =>
                                                                this.eHandleChangeStatus(
                                                                    solicity._id
                                                                )
                                                            }
                                                            ref={(input) =>
                                                                (this.eHandleStatus = input)
                                                            }
                                                        >
                                                            <option value="approved">
                                                                Aprobar
                                                            </option>
                                                            <option value="pending">
                                                                Pendiente
                                                            </option>
                                                            <option value="reject">
                                                                No aprobar
                                                            </option>
                                                        </select>
                                                    )}
                                                {solicity.status === "approved" &&
                                                    getRolInfoReducer.status &&
                                                    getRolInfoReducer.rolInfo.capacity ===
                                                        "admin" && (
                                                        <div
                                                            className="button_generate_citation"
                                                            onClick={() =>
                                                                this.showGenerateModal(solicity._id)
                                                            }
                                                        >
                                                            Generar citación
                                                        </div>
                                                    )}
                                                <div
                                                    className="button_generate_citation"
                                                    onClick={() =>
                                                        this.eHandleShowDetails(solicity._id)
                                                    }
                                                >
                                                    Detalles
                                                </div>
                                            </div>
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
    const {
        getSolicitiesReducer,
        updateSolicityStatusReducer,
        getRolInfoReducer,
        getSolicityReducer,
    } = state;
    return {
        getSolicitiesReducer,
        updateSolicityStatusReducer,
        getRolInfoReducer,
        getSolicityReducer,
    };
}

const actionCreator = {
    getSolicities: solicityActions.getSolicities,
    changeStatus: solicityActions.changeSolicityStatus,
    getDetails: solicityActions.getSolicityDetails,
    generateCitation: generatorActions.generateCitation
};

const solicitiesComponent = connect(mapStateToProps, actionCreator)(Solicities);
export { solicitiesComponent as Solicities };

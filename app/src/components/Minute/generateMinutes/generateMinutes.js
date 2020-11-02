import React, { Component } from "react";
import { connect } from "react-redux";
import { searchActions, generatorActions } from "../../../_actions";
import Speech from "./speechRecognition";
import Timer from "./timer";
import "./generateMinutes.css";

class GenerateMinutes extends Component {
    constructor(props) {
        super();

        this.state = {
            content: "",
        };
    }

    eHandleSubmit = (_) => {
        const citationInfo = {
            content: this.state.content,
        };

        this.props.generateMinute(citationInfo);
    };

    eHandleSubmitGenerate = (e) => {
        e.preventDefault();
        this.eHandleSubmit();
    };

    eHandleEditContent = (contentArea) => {
        this.setState({
            content: contentArea.target.outerHTML,
        });
    };

    resetForm = (_) => {
        console.log(this.contentMinute);
        this.setState({
            appreticesSelected: [],
            content: "",
        });
        this.contentMinute.innerHTML = "";
        this.props.resetMinute();
    };

    reintentForm = (_) => {
        this.eHandleSubmit();
    };

    takeAttended = (key) => {
        console.log(key);
    };

    render() {
        const { generateConstantReducer } = this.props;

        return (
            <div className="background_login">
                <div className="custom_background_sidebar">
                    <div className="center_container">
                        {generateConstantReducer.status && (
                            <div className="show_alert_popUp alert_show">
                                <img
                                    src="assets/img/check_alert.png"
                                    className="image_responsive_popup"
                                    alt="alert popup confirm"
                                />
                                <div className="subtitle">
                                    Revisa el PDF antes de cerrar esta pestaña
                                </div>

                                <div className="btn_section_flex">
                                    <a
                                        className="btn mt-5 w50 btn_teal"
                                        href={generateConstantReducer.pdfLink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Ver PDF
                                    </a>

                                    <button
                                        className="btn mt-5 w50 btn_teal"
                                        onClick={() => this.resetForm()}
                                    >
                                        Aceptar
                                    </button>

                                    <button
                                        className="btn mt-5 w50 btn_orange"
                                        onClick={() => this.reintentForm()}
                                    >
                                        Reintentar
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="container_white_edit no_over_hidden min_width_editor">
                            {generateConstantReducer.loading && (
                                <div className="loading_file">
                                    <div className="text_loading">Estamos procesando los datos</div>
                                    <div className="loader_upload"></div>
                                </div>
                            )}

                            <div className="center_elements justify_right">
                                <button
                                    onClick={() => this.takeAttended(this.props.match.params.id)}
                                    className="button_generate_citation"
                                >
                                    Tomar asistencia
                                </button>
                            </div>

                            <div className="title">Actas</div>
                            <div className="subtitle mb-4">
                                Para generar una citacion necesitaremos varios datos, puedes
                                utilizar el buscador avanzado de aprendizes, solo busca el aprendiz
                                y dale clic.
                            </div>

                            <Timer />
                            <Speech />

                            <button className="btn btn_big btn_teal mt-5">Generar acta</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authReducer, searchReducer, generateConstantReducer } = state;
    return { authReducer, searchReducer, generateConstantReducer };
}

const actionCreator = {
    searchAppretice: searchActions.searchAppretices,
    generateMinute: generatorActions.generateMinute,
    resetMinute: generatorActions.resetCitationMinute,
};

const generateMinutesComponent = connect(mapStateToProps, actionCreator)(GenerateMinutes);
export { generateMinutesComponent as GenerateMinutes };

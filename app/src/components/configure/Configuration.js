import React, { Component } from "react";
import { connect } from "react-redux";
import { NavbarSidebar } from "../";
import "./Configuration.css";

class Configuration extends Component {
    render() {
        return (
            <div className="background_login">
                <NavbarSidebar />
                <div className="custom_background_sidebar">
                    <div className="center_container">
                        <div className="container_white_edit">
                            <h3>Cambiar contraseña</h3>
                            <form method="POST">
                                <div className="form_group">
                                    <label for="current-password" className="labelText">Contraseña actual</label>
                                    <input
                                        type="text"
                                        className="form_control"
                                        placeholder="Nombre"
                                        name="current-password"
                                        ref={(input) => (this.nameEdit = input)}
                                    />
                                </div>

                                <div className="form_group">
                                    <label for="new-password" className="labelText">Nueva contraseña</label>
                                    <input
                                        type="text"
                                        className="form_control"
                                        placeholder="Nombre"
                                        name="new-password"
                                        ref={(input) => (this.nameEdit = input)}
                                    />
                                </div>

                                <div className="form_group">
                                    <label for="repeat-password" className="labelText">Repetir contraseña</label>
                                    <input
                                        type="text"
                                        className="form_control"
                                        placeholder="Nombre"
                                        name="repeat-password"
                                        ref={(input) => (this.nameEdit = input)}
                                    />
                                </div>

                                <button className="btn btn_big btn_orange">
                                        Cambiar contraseña
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authReducer } = state;
    return { authReducer };
}

const actionCreator = {};

const configurationComponent = connect(mapStateToProps, actionCreator)(Configuration);
export { configurationComponent as Configuration };

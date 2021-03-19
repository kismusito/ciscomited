import React, { Component } from "react";
import { connect } from "react-redux";
import "./UploadUsers.css";
import { uploadActions } from "../../../_actions";
import { ArrowUpward } from "@material-ui/icons/";

class UploadUsers extends Component {
    constructor() {
        super();

        this.state = {
            manual: false,
        };
    }

    eHandleSubmitForm = (_) => {
        const formData = new FormData(this.formData);
        this.formData.reset();
        this.props.uploadApprentices(formData);
    };

    submitForm = (e) => {
        e.preventDefault();
        this.eHandleSubmitForm();
    };

    render() {
        const { uploadReducer } = this.props;

        return (
            <div className="background_login">
                <div className="custom_background_sidebar">
                    <div className="center_container direction_column">
                        <div className="actionButtons">
                            <div
                                onClick={() => this.setState({ manual: false })}
                            >
                                Subir csv
                            </div>
                            <div
                                onClick={() => this.setState({ manual: true })}
                            >
                                Subir manual
                            </div>
                        </div>
                        <div className="container_white_edit min_height center_elements">
                            {uploadReducer.loading && (
                                <div className="loading_file">
                                    <div className="text_loading">
                                        Estamos procesando el archivo.
                                    </div>
                                    <div className="loader_upload"></div>
                                </div>
                            )}

                            {!this.state.manual && (
                                <form
                                    method="POST"
                                    encType="multipart/form-data"
                                    onSubmit={this.eHandleSubmitForm}
                                    className="form_total_size center_elements h300"
                                    ref={(input) => (this.formData = input)}
                                >
                                    <input
                                        type="file"
                                        name="fileUpload"
                                        id="fileUpload"
                                        onChange={this.submitForm}
                                        className="file_input_container"
                                        required={true}
                                    />

                                    <div className="container_upload_section">
                                        <div className="file_upload_icon">
                                            <div className="overlay_white">
                                                <ArrowUpward />
                                            </div>
                                        </div>
                                        <p className="select_text">
                                            Arrastra tu archivo aquí
                                        </p>
                                    </div>
                                </form>
                            )}

                            {this.state.manual && (
                                <div className="manualStudentCreation">
                                    <div className="title">
                                        Añadir estudiante
                                    </div>
                                    <div className="subtitle">
                                        Aquí podrás añadir nuevos estudiantes
                                        uno por uno.
                                    </div>
                                    <form
                                        method="POST"
                                        encType="multipart/form-data"
                                        onSubmit={this.eHandleSubmitForm}
                                        className="mt-15"
                                        ref={(input) => (this.formData = input)}
                                    >
                                        <div className="form_group">
                                            <input
                                                type="text"
                                                className="form_control"
                                                placeholder="Nombre"
                                                name="firstName"
                                                ref={(input) =>
                                                    (this.nameEdit = input)
                                                }
                                            />
                                        </div>
                                        <div className="form_group">
                                            <div className="rows">
                                                <div className="col_6">
                                                    <input
                                                        type="text"
                                                        className="form_control"
                                                        placeholder="Primer apellido"
                                                        name="first_lastName"
                                                        ref={(input) =>
                                                            (this.nameEdit = input)
                                                        }
                                                    />
                                                </div>
                                                <div className="col_6">
                                                    <input
                                                        type="text"
                                                        className="form_control"
                                                        placeholder="Segundo apellido"
                                                        name="second_lastName"
                                                        ref={(input) =>
                                                            (this.nameEdit = input)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form_group">
                                            <div className="rows">
                                                <div className="col_6">
                                                    <input
                                                        type="text"
                                                        className="form_control"
                                                        placeholder="Email"
                                                        name="email"
                                                        ref={(input) =>
                                                            (this.nameEdit = input)
                                                        }
                                                    />
                                                </div>
                                                <div className="col_6">
                                                    <input
                                                        type="text"
                                                        className="form_control"
                                                        placeholder="Teléfono"
                                                        name="phone"
                                                        ref={(input) =>
                                                            (this.nameEdit = input)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form_group">
                                            <div className="rows">
                                                <div className="col_6">
                                                    <select
                                                        type="text"
                                                        className="form_control"
                                                        name="document"
                                                        ref={(input) =>
                                                            (this.nameEdit = input)
                                                        }
                                                    >
                                                        <option value="">Seleccionar tipo de documento</option>
                                                        <option value="CC">Cédula</option>
                                                        <option value="TI">Tarjeta de identidad</option>
                                                    </select>
                                                </div>
                                                <div className="col_6">
                                                    <input
                                                        type="text"
                                                        className="form_control"
                                                        placeholder="Número de documento"
                                                        name="document_number"
                                                        ref={(input) =>
                                                            (this.nameEdit = input)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authReducer, uploadReducer } = state;
    return { authReducer, uploadReducer };
}

const actionCreator = {
    uploadApprentices: uploadActions.uploadApprentices,
};

const uploadUsersComponent = connect(
    mapStateToProps,
    actionCreator
)(UploadUsers);
export { uploadUsersComponent as UploadUsers };

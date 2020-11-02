import React, { Component } from "react";
import { connect } from "react-redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/theme/material.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import { templateActions } from "../../../_actions";
import { HighlightOff } from "@material-ui/icons";
import { templateDefault } from "../../../config";

class CreateTemplates extends Component {

    constructor(props) {
        super();

        this.state = {
            code: ""
        }
    }
    componentDidMount() {
        this.props.getFields(this.selectType.value);
        this.setState({
            code: templateDefault
        })
    }

    eHandleFields = (_) => {
        this.props.getFields(this.selectType.value);
    };

    closeNewRoleModal = (_) => {
        this.props.hideModal();
    };

    eHandleCreateTemplate = (e) => {
        e.preventDefault();
        const templateData = {
            templateName: this.templateName.value,
            template: this.instance.getValue(),
        };
        
        this.props.create(templateData);
    };

    render() {
        const { getCustomFieldsReducer } = this.props;

        return (
            <div className="center_container overlay_black">
                <div className="container_white_edit custom_container_details w900">
                    <div className="close_modal" onClick={() => this.closeNewRoleModal()}>
                        <HighlightOff />
                    </div>
                    <form method="POST" onSubmit={this.eHandleCreateTemplate}>
                        <div className="rows">
                            <div className="col_8">
                                <div className="form_group">
                                    <label>Nombre de la plantilla</label>
                                    <input
                                        type="text"
                                        className="form_control mt-2"
                                        ref={(input) => (this.templateName = input)}
                                        placeholder="Nombre de la plantilla"
                                        required
                                    />
                                </div>
                                <CodeMirror
                                    value={templateDefault}
                                    editorDidMount={(editor) => { this.instance = editor }}
                                    options={{
                                        lineNumbers: true,
                                        mode: "htmlmixed",
                                    }}
                                />
                            </div>
                            <div className="col_4">
                                <h4 className="title">Campos personalizados</h4>
                                <pre className="subtitle mb-2 white_spaces_break">
                                    Para poner un campo personalizado debes encerrarlo dentro de{" "}
                                    {`%{nombre_del_campo}`}
                                </pre>
                                <select
                                    className="select_style_solicity custom_template"
                                    ref={(input) => (this.selectType = input)}
                                    onChange={this.eHandleFields}
                                >
                                    <option value="citation">Citación</option>
                                    <option value="minute">Acta</option>
                                </select>
                                <ul className="custom_fields_list">
                                    {getCustomFieldsReducer.status &&
                                        Object.values(getCustomFieldsReducer.fields).map(
                                            (field, key) => (
                                                <li className="custom_fields_item" key={key}>
                                                    {field}
                                                </li>
                                            )
                                        )}
                                </ul>
                                <button className="btn btn_big btn_teal">Crear plantilla</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { getCustomFieldsReducer } = state;
    return {
        getCustomFieldsReducer,
    };
}

const actionCreator = {
    getFields: templateActions.getCustomFields,
    hideModal: templateActions.hideModal,
    create: templateActions.createTemplate,
};

const createTemplatesComponent = connect(mapStateToProps, actionCreator)(CreateTemplates);
export { createTemplatesComponent as CreateTemplates };

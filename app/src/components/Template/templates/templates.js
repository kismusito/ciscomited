import React, { Component } from "react";
import { connect } from "react-redux";
import { CreateTemplates } from "../../../components";
import { templateActions } from "../../../_actions";
import { DeleteOutline , EditOutlined} from '@material-ui/icons';
import "./templates.css";

class Templates extends Component {
    eHandleShowModal = (_) => {
        this.props.showModal();
    };

    componentDidMount() {
        this.props.getTemplates();
    }

    render() {
        const { templateModalReducer , templatesReducer , createTemplateReducer} = this.props;
        return (
            <div className="background_login">
                <div className="custom_background_sidebar">
                    {templateModalReducer.show && <CreateTemplates />}
                    {createTemplateReducer.status &&
                        <div className="push_template push_template_success">La plantilla se ha credo correctamente</div>
                    }
                    {createTemplateReducer.status === false &&
                        <div className="push_template push_template_error">La plantilla se ha credo correctamente</div>
                    }
                    <div className="center_container">
                        <div className="container_white_edit min_height min_height_mobile show_overflow">
                            <div className="center_elements space_between">
                                <div>
                                    <h3 className="title">Plantillas</h3>
                                    <p className="subtitle">
                                        Aqui puedes gestionar todas tus plantillas
                                    </p>
                                </div>

                                <button
                                    className="btn btn_teal"
                                    onClick={() => this.eHandleShowModal()}
                                >
                                    Crear nueva
                                </button>
                            </div>
                       
                            <ul className="templates_list">
                                {templatesReducer.status && templatesReducer.templates.map(template => (
                                    <li className="templates_item" key={template._id}>
                                        <div>{template.templateName}</div>
                                        <div className="template_action_item">
                                            <EditOutlined />
                                            <DeleteOutline />
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
    const { templateModalReducer , templatesReducer , createTemplateReducer} = state;
    return { templateModalReducer , templatesReducer , createTemplateReducer};
}

const actionCreator = {
    showModal: templateActions.showModal,
    getTemplates: templateActions.getTemplates,
};

const templatesComponent = connect(mapStateToProps, actionCreator)(Templates);
export { templatesComponent as Templates };

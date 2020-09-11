import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavbarSidebar } from '../'
import { Add, HighlightOff, EditOutlined, DeleteOutlined } from '@material-ui/icons'
import { userActions } from '../../_actions'
import './Roles.css'

class Roles extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModalRoleNew: false,
            adminSelect: false,
            allRoles: []
        }
    }

    async componentDidMount() {
        this.props.getRoles()
    }

    addNewRoleModal = _ => {
        this.setState({
            showModalRoleNew: true
        })
    }

    closeNewRoleModal = _ => {
        this.setState({
            showModalRoleNew: false
        })
    }

    isAdminSelected = _ => {
        this.setState({
            adminSelect: !this.state.adminSelect
        })
    }

    addNewRolTrigger = e => {
        e.preventDefault()
        const newRol = {
            name: this.rolName.value,
            isAdmin: this.isAdmin.value
        }
        e.target.reset()
        this.setState({
            adminSelect: false
        })

        this.props.addRol(newRol)
    }

    render() {

        const { roleReducer , addRoleReducer} = this.props

        return (
            <div className="background_login">
                <NavbarSidebar />
                <div className="custom_background_sidebar">
                    <div className="center_container">
                        <div className="container_white_edit min_height min_height_mobile">
                            <div className="role_container">
                                <div className="roleList">
                                    <div className="title">Roles</div>
                                    <div className="subtitle">Aqui podrás encontrar, editar y eliminar los roles de usuario.</div>

                                    <ul className="roles_list">
                                        {roleReducer.status &&
                                            roleReducer.roles.map(element => (
                                                <li className="roles_list_item" key={element._id}>
                                                    <div className="role_name">{element.role_name}</div>
                                                    <div className="role_actions">
                                                        <div className="edit_trigger ">
                                                            <EditOutlined />
                                                        </div>
                                                        <div className="delete_trigger">
                                                            <DeleteOutlined />
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }

                                    </ul>


                                </div>
                                <div className="role_actions">
                                    <div className="add_new_role" onClick={this.addNewRoleModal}>
                                        <Add />
                                        <div>Añadir nuevo</div>
                                    </div>
                                </div>
                            </div>

                            {this.state.showModalRoleNew &&
                                <div className="modal_overlay_role">
                                    <div className="close_modal" onClick={this.closeNewRoleModal}>
                                        <HighlightOff />
                                    </div>

                                    <div className="form_desing_rol">

                                        <form method="POST" onSubmit={this.addNewRolTrigger}>
                                            <div className="form_group">
                                                <div className="title leftMargin bottomMargin2">Añadir rol</div>
                                                <input type="text" name="rolName" ref={input => this.rolName = input} className="form_control" placeholder="Nombre del rol" required={true} />
                                            </div>
                                            <div className="form_group">
                                                <div className="subTitleLow leftMargin">Capacidades</div>
                                                <div className="subtitle leftMargin">Selecciona las capacidades de este rol</div>


                                                <div className={this.state.adminSelect ? "capacitySelect selectedCapacity" : "capacitySelect"} onClick={this.isAdminSelected}>Administrador</div>

                                                <input type="hidden" name="capacity" ref={input => this.isAdmin = input} defaultValue={this.state.adminSelect} className="form_control" placeholder="Capacidad" />
                                            </div>

                                            <button className="btn btn_big btn_orange">Añadir</button>

                                            {addRoleReducer.status && 
                                                <div className="leftMargin edit_trigger">{addRoleReducer.message}</div>
                                            }

                                            {!addRoleReducer.status && 
                                                <div className="leftMargin delete_trigger">{addRoleReducer.message}</div>
                                            }
                                        </form>
                                    </div>
                                </div>
                            }


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authReducer, roleReducer , addRoleReducer} = state
    return { authReducer, roleReducer , addRoleReducer}
}

const actionCreator = {
    getRoles: userActions.getAllRoles,
    addRol: userActions.addRol
}

const rolesComponent = connect(mapStateToProps, actionCreator)(Roles)
export { rolesComponent as Roles }
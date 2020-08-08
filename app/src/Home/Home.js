import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavbarSidebar } from '../components'
import './Home.css'
import { Link } from 'react-router-dom'
import { userActions } from '../_actions'

class Home extends Component {

    componentDidMount() {
        this.props.getRoleInfo(this.props.authReducer.userInfo.user_role)
    }

    render() {

        const { getRolInfoReducer } = this.props

        return (
            <div className="background_login">
                <NavbarSidebar />
                <div className="custom_background_sidebar">

                    <div className="custom_background_apps">
                        <ul className="apps_items_list">
                            {getRolInfoReducer.status &&
                                getRolInfoReducer.rolInfo.isAdmin && (
                                    <li className="list_item_apps">
                                        <Link className="list_item_apps_link" to="/addUser">
                                            <div><img src="/assets/img/icon_edit_user.png" alt="add user new" /></div>
                                            <div className="title">Usuarios</div>
                                            <div className="subtitle">Una forma sencilla de agregar nuevos usuarios.</div>
                                        </Link>
                                    </li>
                                )
                            }
                            {getRolInfoReducer.status &&
                                getRolInfoReducer.rolInfo.isAdmin && (
                                    <li className="list_item_apps">
                                        <Link className="list_item_apps_link" to="/editUsers">
                                            <div><img src="/assets/img/edit_users.png" alt="edit user " /></div>
                                            <div className="title">Editar usuarios</div>
                                            <div className="subtitle">Esta herramienta te permite buscar usuarios y editar sus atributos.</div>
                                        </Link>
                                    </li>
                                )
                            }

                            {getRolInfoReducer.status &&
                                getRolInfoReducer.rolInfo.isAdmin && (
                                    <li className="list_item_apps">
                                        <Link className="list_item_apps_link" to="/roles">
                                            <div><img src="/assets/img/icon_user_rol.png" alt="edit roles" /></div>
                                            <div className="title">Editar roles</div>
                                            <div className="subtitle">Con esta herramiente podrás editar los roles de los usuarios y agregar nuevos.</div>
                                        </Link>
                                    </li>
                                )
                            }

                            {getRolInfoReducer.status &&
                                getRolInfoReducer.rolInfo.isAdmin && (
                                    <li className="list_item_apps">
                                        <Link className="list_item_apps_link" to="/uploadApprentices">
                                            <div><img src="/assets/img/upload_students.png" alt="edit roles" /></div>
                                            <div className="title">Subir aprendizes</div>
                                            <div className="subtitle">Con esta herramiente podrás editar los roles de los usuarios y agregar nuevos.</div>
                                        </Link>
                                    </li>
                                )
                            }

                            {getRolInfoReducer.status &&
                                getRolInfoReducer.rolInfo.isAdmin && (
                                    <li className="list_item_apps">
                                        <Link className="list_item_apps_link" to="/roles">
                                            <div><img src="/assets/img/upload_teacher.png" alt="edit roles" /></div>
                                            <div className="title">Subir instructores</div>
                                            <div className="subtitle">Con esta herramiente podrás editar los roles de los usuarios y agregar nuevos.</div>
                                        </Link>
                                    </li>
                                )
                            }

                            {getRolInfoReducer.status &&
                                getRolInfoReducer.rolInfo.isAdmin && (
                                    <li className="list_item_apps">
                                        <Link className="list_item_apps_link" to="/searchAppretices">
                                            <div><img src="/assets/img/search_user.png" alt="edit roles" /></div>
                                            <div className="title">Buscar aprendiz</div>
                                            <div className="subtitle">Con esta herramiente podrás editar los roles de los usuarios y agregar nuevos.</div>
                                        </Link>
                                    </li>
                                )
                            }

                            {getRolInfoReducer.status &&
                                getRolInfoReducer.rolInfo.isAdmin && (
                                    <li className="list_item_apps">
                                        <Link className="list_item_apps_link" to="/roles">
                                            <div><img src="/assets/img/search_intructor.png" alt="edit roles" /></div>
                                            <div className="title">Buscar instructor</div>
                                            <div className="subtitle">Con esta herramiente podrás editar los roles de los usuarios y agregar nuevos.</div>
                                        </Link>
                                    </li>
                                )
                            }

                            <li className="list_item_apps">
                                <Link className="list_item_apps_link" to="/roles">
                                    <div><img src="/assets/img/template_icon.png" alt="edit roles" /></div>
                                    <div className="title">Plantillas</div>
                                    <div className="subtitle">Con esta herramiente podrás editar los roles de los usuarios y agregar nuevos.</div>
                                </Link>
                            </li>

                            <li className="list_item_apps">
                                <Link className="list_item_apps_link" to="/roles">
                                    <div><img src="/assets/img/icon_add_file.png" alt="edit roles" /></div>
                                    <div className="title">Mis archivos</div>
                                    <div className="subtitle">Con esta herramiente podrás editar los roles de los usuarios y agregar nuevos.</div>
                                </Link>
                            </li>

                            <li className="list_item_apps">
                                <Link className="list_item_apps_link" to="/roles">
                                    <div><img src="/assets/img/icon_add_citation.png" alt="edit roles" /></div>
                                    <div className="title">Citaciones</div>
                                    <div className="subtitle">Con esta herramiente podrás editar los roles de los usuarios y agregar nuevos.</div>
                                </Link>
                            </li>

                        </ul>
                    </div>


                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authReducer, getRolInfoReducer } = state
    return { authReducer, getRolInfoReducer }
}

const actionCreator = {
    getRoleInfo: userActions.getRoleInfo
}

const homeComponent = connect(mapStateToProps, actionCreator)(Home)
export { homeComponent as Home }
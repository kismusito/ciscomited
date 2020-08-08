import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {authActions , userActions} from '../../_actions'
import './Navbar.css'

class NavbarSidebar extends Component {

    logout = _ => {
        this.props.logout()
    }

    componentDidMount() {
        this.props.getRoleInfo(this.props.authReducer.userInfo.user_role)
    }
    
    render() {

        const { authReducer , getRolInfoReducer} = this.props

        return(
            <div className="navbar_component desktop_view">
                <div className="profile_view">
                    <div className="image_profile">
                        <img src={authReducer.userInfo.profilePicture ? authReducer.userInfo.profilePicture : "/assets/img/usuario.png"} className="profile_picture" alt="profile_picture" />
                    </div>
                    <div className="profile_info">
                        <span>{authReducer.userInfo.email}</span>
                        {getRolInfoReducer.status && 
                            <span>{getRolInfoReducer.rolInfo.role_name}</span>
                        }
                        
                    </div>
                </div>

                <div className="list_of_apps">
                    <ul>
                        <li className="list_item"><Link to="/">Inicio</Link></li>
                        <li className="list_item"><Link to="/editProfile">Editar perfil</Link></li>    
                        <li className="list_item"><Link to="/config">Configuración</Link></li>
                    </ul>
                </div>

                <div className="list_of_apps">
                    <ul>
                        <li className="list_item" onClick={this.logout}>Cerrar sesión</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const actionCreator = {
    logout: authActions.logout,
    getRoleInfo: userActions.getRoleInfo
}

function mapStateToProps(state) {
    const { authReducer , getRolInfoReducer} = state
    return { authReducer , getRolInfoReducer}
}

const navbarComponent = connect(mapStateToProps , actionCreator)(NavbarSidebar)
export { navbarComponent as NavbarSidebar}
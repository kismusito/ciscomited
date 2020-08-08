import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavbarSidebar } from '../'
import './Configuration.css'

class Configuration extends Component {
    render() {
        return (
            <div className="background_login">
                <NavbarSidebar />
                <div className="custom_background_sidebar">
                    <div className="center_container">
                        <div className="container_white_edit">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authReducer } = state
    return { authReducer }
}

const actionCreator = {

}

const configurationComponent = connect(mapStateToProps, actionCreator)(Configuration)
export { configurationComponent as Configuration }
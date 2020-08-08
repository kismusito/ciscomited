import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavbarSidebar } from '../'
import { searchActions } from '../../_actions'
import './SearchAppretices.css'

class SearchAppretices extends Component {

    constructor(props) {
        super(props)

        this.state = {
            startSearch: {
                status: false,
                value: ""
            }
        }
    }

    eHandleTypeSearch(search) {
        let credentials = {
            searchValue: search
        }
        const validateIfIsDocument = search.match(/^([0-9])*$/)
        if (validateIfIsDocument) {
            credentials.type = "document"
            this.setState({
                startSearch: {
                    status: true,
                    value: "Documento"
                }
            })
        } else {
            credentials.type = "user"
            this.setState({
                startSearch: {
                    status: true,
                    value: "Nombre"
                }
            })
        }

        return credentials
    }

    eHandleSearch = e => {
        e.preventDefault()
        const getSearch = this.eHandleTypeSearch(this.searchAppretice.value)
        this.props.searchAppretice(getSearch)
    }

    showAppreticeSelect = appreticeID => {
        console.log(appreticeID)
    }
 
    render() {

        const {searchReducer} = this.props

        return (
            <div className="background_login">
                <NavbarSidebar />
                <div className="custom_background_sidebar">
                    <div className="center_container">
                        <div className="container_white_edit">
                            <div className="title">Buscar aprendices</div>
                            <div className="subtitle">Para buscar un aprendiz puedes filtrar por nombre o documento de identidad, para búsquedas mas rápidas utiliza el documento de identidad.</div>
                            <form autoComplete="off">
                                <div className="form_group_search">
                                    <input
                                        type="text"
                                        name="searchAppretice"
                                        ref={input => this.searchAppretice = input}
                                        onChange={this.eHandleSearch}
                                        placeholder="Usuario, Documento o correo electrónico"
                                        className="form_control"
                                    />
                                    {this.state.startSearch.status &&
                                        <div className="search_criter_input">{this.state.startSearch.value}</div>
                                    }

                                    {searchReducer.status &&
                                        <div className="search_container">
                                            <ul className="search_list">
                                                {searchReducer.appretices.map(appretice => (
                                                    <li className="search_list_item" key={appretice._id} onClick={() => this.showAppreticeSelect(appretice._id)}>
                                                        <div className="two_colums_search">
                                                            
                                                            <div className="search_info_user">
                                                                <div className="title_search">{appretice.nombre + " " + appretice.primer_apellido}</div>
                                                                <div className="subtitle">{appretice.numero_documento}</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authReducer , searchReducer} = state
    return { authReducer , searchReducer}
}

const actionCreator = {
    searchAppretice: searchActions.searchAppretices
}

const searchAppreticesComponent = connect(mapStateToProps, actionCreator)(SearchAppretices)
export { searchAppreticesComponent as SearchAppretices }
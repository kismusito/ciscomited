import React, { Component } from "react";
import { connect } from "react-redux";
import { mailActions } from "../../_actions";

class Mails extends Component {
    render() {
        const {} = this.props;

        return (
            <div className="background_login">
                <div className="custom_background_sidebar">
                    <div className="center_container"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {} = state;
    return {};
}

const actionCreator = {};

const mailsComponent = connect(mapStateToProps, actionCreator)(Mails);
export { mailsComponent as Mails };

import { generatorConstants } from '../_constants'
import { generatorService } from '../services'
import { history } from '../helpers'

export const generatorActions = {
    generateCitation,
    hideAndRedirect,
    generateMinute
}

function generateCitation(data) {
    return dispatch => {
        dispatch(request())

        generatorService.generateCitation(data)
            .then(response => {
                if (response.status) {
                    dispatch(success(response))
                } else {
                    dispatch(failure(response))
                }
            })
            .catch(err => {
                dispatch(failure(err))
            })
    }

    function request() { return { type: generatorConstants.GENERATORCITATION_REQUEST } }
    function success(response) { return { type: generatorConstants.GENERATORCITATION_SUCCESS , response } }
    function failure(response) { return { type: generatorConstants.GENERATORCITATION_FAILURE , response } }
}

function hideAndRedirect() {
    return dispatch => {
        dispatch(rHide())
        dispatch(finishSearched())
        history.push('/myCitations')
    }

    function rHide() { return { type: generatorConstants.REDIRECTTOCITATIONS } }
    function finishSearched() { return { type: "FINISHSEARCHED" } }
}

function generateMinute(data) {
    return dispatch => {
        dispatch(request())

        generatorService.generateMinute(data)
            .then(response => {
                if (response.status) {
                    dispatch(success(response))
                } else {
                    dispatch(failure(response))
                }
            })
            .catch(err => {
                dispatch(failure(err))
            })
    }

    function request() { return { type: generatorConstants.GENERATORMINUTE_REQUEST } }
    function success(response) { return { type: generatorConstants.GENERATORMINUTE_SUCCESS , response } }
    function failure(response) { return { type: generatorConstants.GENERATORMINUTE_FAILURE , response } }
}
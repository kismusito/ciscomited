import { searchConstants } from '../_constants'
import { searchService } from '../services'

export const searchActions = {
    searchAppretices
}

function searchAppretices(searchData) {
    return dispatch => {
        dispatch(request())

        searchService.searchAppretices(searchData)
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

    function request() { return { type: searchConstants.SEARCHAPPRETICE_REQUEST } }
    function success(response) { return { type: searchConstants.SEARCHAPPRETICE_SUCCESS , response } }
    function failure(response) { return { type: searchConstants.SEARCHAPPRETICE_SUCCESS , response } }
}
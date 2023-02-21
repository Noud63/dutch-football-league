const AllDataReducer = (state, action) => {

    switch (action.type) {
        case "DATA_REQUEST":
            return { ...state, loading: true }
        case "DATA_REQUEST_SUCCESS":
            const lists = action.payload
            return {
                ...state, leftRow: lists.leftRow,
                rightRow: lists.rightRow,
                matches: lists.matches,
                matchByDay: lists.matchByDay,
                totalMatches: lists.totalMatches,
                currentMatchday: lists.currentMatchday,
                loading: false
            }
        case "DATA_REQUEST_FAIL":
            return { ...state, loading: true, error: "Ooops, No Data!" }
        default:
            return state
    }

}

export default AllDataReducer
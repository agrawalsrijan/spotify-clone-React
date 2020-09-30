export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQChhTLA-w9YhRrQ9sHgZqdUr2vedhafjmZtZ1Y_XiB_pfG3YETAFUb-dvNpTuZqVc4z2g-wHylxsAPyOX3rmimiUgwsSpCGbvf4q-dBy536JakH-mmgEPnUN1gsble_XESdiNy17xq07br2ZeOIIqUbTcA-pd4TgPRE3jtJtytgjmRze594"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        case "SET_USER" :
            return {
                ...state,
                user: action.user
            }
        case "SET_PLAYLISTS" :
            return {
                ...state,
                playlists: action.playlists
            }
        default :
            return state
    }
}


export default reducer
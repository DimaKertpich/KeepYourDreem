export default{
    state:{
        regError: null,
        logError: null,
        loading: false,
        goodRegister: false
    },
    mutations:{
        clearGoodRegistr(state){
            state.goodRegister = false
        },

        goodregister(state){
            if(state.regError == null){
                state.goodRegister = true
            }
        },

        logError(state, payload){
            state.logError = payload;
        },

        regError(state, payload){
            state.regError = payload;
        },

        clearError(state){
            state.regError = null;
            state.logError = null;
        },

        setLoading(state, payload){
            state.loading = payload;
        }
    },

    actions:{
    }
}
import firebase from 'firebase/compat/app'

export default{
    state:{
        user: null,
        info: null
    },

    mutations:{

        setUser(state, payload){
            state.user = payload
        },

        takeName(state, payload){
           state.info = payload.name
        },

        clearuser(state){
           state.user = null
           state.info = null
        }
    },
    actions:{

        async fetchInfo({dispatch, commit}){
            const uid = await dispatch('getUid');
            const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
            commit('takeName', info);
        },

        getUid(){
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        },

        // Logout

        async logOut({commit}){
            
            await firebase.auth().signOut();
            commit('clearuser');
        },

        // Login
        async login({dispatch,commit}, {email, password}){
            
            commit('clearError');
            commit('setLoading', true);
           try{

            const logUser = await firebase.auth().signInWithEmailAndPassword(email, password);
            
            dispatch('fetchInfo');
            commit('setUser', logUser.user.uid);
            commit('setLoading', false);

           }
           catch(error){
                commit('setLoading', false);
                commit('logError', error.message);

                throw error
           }
            
        },


        // Register
        async register({commit},{email, password, name}){
            
            commit('clearError');
            commit('setLoading', true);

            try{ 
                const userUid = await firebase.auth().createUserWithEmailAndPassword(email, password);
                await firebase.database().ref(`/users/${userUid.user.uid}/info`).set({
                    name
                });
                
                commit('setLoading', false);
                commit('goodregister');
            }
            catch(error){
                commit('setLoading', false);
                commit('regError', error.message);
        
            }
        },
    }
}
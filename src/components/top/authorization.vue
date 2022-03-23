<template>
    <section class="authorization">
        <div class="container">
            <div v-if="userLog == null" class="authorization__title">
                    <div class="authorization__registration">
                        <h4 :class="{titleActive : title == true}" @click="toggleTitle('Registration')">Registration</h4>
                    </div>
                    <div class="authorization__logIn">
                        <h4 :class="{titleActive : title == false}" @click="toggleTitle('Authorization')" >Authorization</h4>
                    </div>

                    <form class="authorization__form">
                        <!-- Register -->
                        <div :class="{activeBlock : title == true}" class="authorization__wrapper-registration">

                            
                        <div v-if="goodRegister == false">
                                <div class="authorization__wrapper-input" v-for="(item ,index) in fromDataReg" :key="index">

                                    <label>{{ item.name }}
                                    <span @click="toggleCheck('active')" v-if="item.check == false" class="authorization__eye-active"><font-awesome-icon icon="fa-solid fa-eye" /></span>
                                    <span @click="toggleCheck('deactivated')" v-if="item.check == true" class="authorization__eye-deactivate"><font-awesome-icon icon="fa-solid fa-eye-slash" /></span>
                                    <span v-if="item.activated == true" :class="validToggle(index)"></span></label>
                                    <input @input="savaData($event.target.value, index)" :type="item.type" :value="item.value">
                                </div>

                                <div class="authorization__btn">
                                    <div class="authorization__btn-later">
                                        <button @click="hideRegistr" type="button">Later</button>
                                    </div>
                                    <div class="authorization__btn-send">
                                        <button @click="registerUser" type="button">Registr</button>
                                    </div>
                                </div>
                                
                                <div v-if="loading == true" class="authorization__loading">
                                    <p> Loading... </p>
                                </div>

                                <div class="authorization__error">
                                    <p>{{ this.regError }}</p>
                                </div>
                        </div>

                            <div class="authorization__goodRegistr text-center" v-if="goodRegister == true">
                                <div class="authorization__goodRegistr-icon">
                                    <font-awesome-icon icon="fa-solid fa-circle-check" />
                                </div>
                                
                                <div class="authorization__goodRegistr-title">
                                    <h4>Registration was successful</h4>
                                </div>

                                <button @click="confirmedRegister" type="button">OK</button>
                            </div>
                        </div>


                        <!-- Authorization -->
                        <div :class="{activeBlock : title == false}" class="authorization__wrapper-auth">

                                <div class="authorization__wrapper-input" v-for="(item, index) in fromDataLog" :key="index">
                                <label>{{ item.name }}
                                <span @click="toggleCheckLog('active')" v-if="item.check == false" class="authorization__eye-active"><font-awesome-icon icon="fa-solid fa-eye" /></span>
                                <span @click="toggleCheckLog('deactivated')" v-if="item.check == true" class="authorization__eye-deactivate"><font-awesome-icon icon="fa-solid fa-eye-slash" /></span></label>
                                <input @input="dataLogin($event.target.value, index)" :type="item.type" :value="item.value">
                            </div>

                            <div class="authorization__btn">
                                <div class="authorization__btn-later">
                                    <button @click="hideRegistr" type="button">Later</button>
                                </div>
                                <div class="authorization__btn-send">
                                    <button @click="loginUser" type="button">Login</button>
                                </div>
                            </div>

                            <div v-if="loading == true" class="authorization__loading">
                                <p> Loading... </p>
                            </div>

                            <div class="authorization__error">
                                <p>{{ this.logError }}</p>
                            </div>
                        </div>                
                    </form>
            </div>
            <div class="authorization__entered" v-if="userLog != null">

                <div class="authorization__logUser">
                    <div class="d-flex">
                        <div class="authorization__logUser-icon"> 
                            <font-awesome-icon icon="fa-solid fa-user" />
                        </div>

                        <div class="authorization__logUser-title">
                            <p>
                                User

                                <br> 
                                <span>{{ this.userLog }}</span>
                            </p>
                            
                        </div>
                    </div>

                    <div class="authorization__logUser-arrow">
                        <font-awesome-icon @click="hideRegistr" icon="fa-solid fa-angle-left" />
                    </div>
                </div>

                <div class="authorization__logUser-text">
                    <p>Name: <span> {{ this.userInfoLog}} </span></p>
                    <p>Email:<span> {{ email}} </span></p>
                    <p>Status: <span> Visitor </span></p>

                    <button @click="logOut" type="button">Logout</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default{
    data(){
        return{
            title: true,
            name: '',
            email: '',
            password: '',
            fromDataReg: [
                {
                    name: 'Name',
                    pattern: /^[a-zA-Z]{2,30}$/,
                    type: 'text',
                    activated: false,
                    value: ''
                },
                {
                    name: 'Mail',
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    type: 'email',
                    activated: false,
                    value: ''
                    
                },
                {
                    name: 'Password',
                    pattern: /.+/,
                    type: 'password',
                    activated: false,
                    value: '',
                    check: false
                }
             ],
             fromDataLog:[
                {
                    name: 'Mail',
                    value: '',
                    type: 'email'
                },
                {
                    name: 'Password',
                    value: '',
                    type: 'password',
                    check: false
                }
             ]
        }
    },

    methods:{

        async logOut(){
            await this.$store.dispatch('logOut');

            for(let j = 0; j < this.fromDataLog.length; j++){
                this.fromDataLog[j].value = ''
            }
        },

        confirmedRegister(){
            this.$store.commit('clearGoodRegistr');

            this.toggleTitle('Authorization');
        },

        toggleCheck(value){
            if(value == 'active'){
                this.fromDataReg[2].check = true
                this.fromDataReg[2].type = ''
            }  else{
                this.fromDataReg[2].check = false
                this.fromDataReg[2].type = 'password'
            }
        },

        toggleCheckLog(value){
             if(value == 'active'){
                this.fromDataLog[1].check = true
                this.fromDataLog[1].type = ''
            }  else{
                this.fromDataLog[1].check = false
                this.fromDataLog[1].type = 'password'
            }
        },


        validToggle(index){
            return this.fromDataReg[index].pattern.test(this.fromDataReg[index].value) ? 'fas fa-check text-success' : 'fas fa-times text-danger';
        },

        toggleTitle(value){
            if(value == 'Registration'){
                this.title = true
            } else{
                this.title = false
            }
            
            this.$store.commit('clearError');

            for(let i = 0; i < this.fromDataReg.length; i++){
                this.fromDataReg[i].value = ''
                this.fromDataReg[i].activated = false
            }

            for(let j = 0; j < this.fromDataLog.length; j++){
                this.fromDataLog[j].value = ''
            }
        },

        hideRegistr(){
            this.$emit('hideRegistr');
        },
        
        savaData(value, index){

            if(index == 0){
                this.name = value

            } else if(index == 1){
                this.email = value

            } else if(index == 2){
                this.password = value
            }

            this.fromDataReg[index].value = value
            this.fromDataReg[index].activated = true
        },

        dataLogin(value, index){

            if(index == 0){
                this.email = value;
            }else if(index == 1){
                this.password = value;
            }

            this.fromDataLog[index].value = value
        },

        loginUser(){
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
        },

        registerUser(){
            this.$store.dispatch('register',{
                email: this.email,
                password: this.password,
                name: this.name
            })

        }
    },

    computed:{

        userInfoLog(){
            return this.$store.state.auth.info;
        },

        userLog(){
            return this.$store.state.auth.user;
        },

        logUser(){
            return this.$store.auth.user;
        },

        regError(){
            return this.$store.state.common.regError;
        },

        logError(){
            return this.$store.state.common.logError;
        },

        loading(){
            return this.$store.state.common.loading;
        },

        goodRegister(){
            return this.$store.state.common.goodRegister;
        }
    }
}

</script>

<style lang="scss">

@import "../../assets/styles/allFiles.scss";

.authorization{
    width: 370px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: $colorBlack;
    z-index: 180;
    padding: 80px 30px 0;
    overflow: hidden;

    &__title{
        position: relative;
        display: flex;
        justify-content: space-between;

    }

    &__logIn,
    &__registration{

        h4{
            @include robotoLight();

            font-size: 22px;
            color: $upperInputText;
            cursor: pointer;
        }
    }

    &__form{
        position: absolute;
        width: 100%;
        top: 80px;
        left: 0;
    }

    &__wrapper-input{

        label{
            @include montserratLight();

            font-size: 14px;
            margin-top: 12px;
            color: $upperInputText;

            span{
                font-size: 14px;
                margin-left: 6px;
            }
        }

        input{
            @include robotoLight();

            display: block;
            width: 100%;
            height: 34px;
            color: $colorWhite;
            background: transparent;
            border: none;
            border-bottom: 1px solid $colorWhite;
            outline: none; 
        }
    }

    &__btn{
        display: flex;
        justify-content: space-between;
    }

    &__btn-later,
    &__btn-send{
        
        margin-top: 60px;

        button{
            @include montserratLight();

            width: 100px;
            height: 34px;
            background: transparent;
            color: $colorWhite;
            border: none;
        }
    }

    &__wrapper-registration{
        position: absolute;
        width: 100%;
        top: 0;
        left: -370px;
        transition: .4s ease-in;
    }

    &__wrapper-auth{
        position: absolute;
        width: 100%;
        top: 0;
        left: 370px;
        transition: .4s ease-in;
    }

    .activeBlock{
        left: 0;
        transition: .4s ease-in;
    }

    .titleActive{
        color: $colorWhite;
    }

    &__error{

        padding-top: 30px;

        p{
            @include montserratLight();

            color: $navColorText;
            text-align: center;
        }
    }

    &__loading{

        padding-top: 30px;

        p{
            @include montserratLight();

            font-size: 20px;
            color: $navColorText;
            text-align: center;
        }
    }

    &__goodRegistr{
        padding-top: 40px;
        h4{
            @include comfortaLight();

            margin-top: 14px;
            font-size: 20px;
            color: $colorWhite;
        }

        button{
            @include robotoLight();

            color: $colorWhite;
            background: transparent;
            border: none;
            margin-top: 20px; 
        }

        button:hover{  
            border-bottom: 1px solid $colorWhite;
        }
    }

    &__goodRegistr-icon{
        font-size: 62px;
        color: $successfulRegistration;
    }

    &__logUser{
        display: flex;
        justify-content: space-between;
    }

    &__logUser-icon{
        font-size: 46px;
        color: $colorWhite;
    }

    &__logUser-title{

        padding: 18px 0 0 12px;

        p{
            @include montserratLight();

            font-size: 18px;
            line-height: 20px;
            color: $colorWhite;

            span{
                font-size: 11px;
                color: $navColorText;
            }
        }
    }

    &__logUser-text{

        padding-top: 40px;

        p{
            @include comfortaLight();

            color: #393939;

            span{
                color: #818181;
            }
        }

        button{
            @include robotoLight();

            font-size: 18px;
            color: $colorWhite;
            background: transparent;
            border: none;
            padding: 0;
            margin-top: 20px;
        }

        button:hover{
            border-bottom: 1px solid $colorWhite;
        }
    }

    &__logUser-arrow{

        font-size: 22px;
        padding-top: 24px;
        color: $colorWhite;
        cursor: pointer;
    }
}

</style>
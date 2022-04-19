<template>
    <section class="comments">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-xl-5">
                    <div class="comments__title" >
                        <h3 class="wow animate__animated animate__fadeIn" data-wow-delay=".5s">Leave your feedback</h3>

                        <p class="wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                            Here you can leave your feedback about our project to improve it
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-6">
                        <div :key="index" v-for="(data, index) in commentedUser" class="comments__feedback wow animate__animated animate__fadeIn">
                            <div class="comments__feedback-wrapper">
                                <div class="comments__feedback-user">
                                    <div class="comments__feedback-user-icon">
                                        <font-awesome-icon :icon="data.iconUser" />
                                    </div>
                                    <div class="comments__feedback-user-name">
                                        <label>{{ data.name }}</label>
                                        <p>{{ data.status }}</p>
                                    </div>
                                </div>
                                <div class="comments__feedback-delete text-danger">
                                    <font-awesome-icon @click="deleteUser(index)" :icon="data.delete" />
                                </div>
                            </div>
                            <div class="comments__feedback-text">
                                <p>{{ data.comment }}</p>
                            </div>
                        </div>

                    <div class="comments__send-comment">
                        <p v-if="errorComment == true">
                            Please enter a message
                        </p>

                        <p v-if="logCheck == true">
                            You must be logged in to post a commen
                        </p>

                        <textarea class="wow animate__animated animate__fadeInLeft" 
                                  data-wow-delay=".5s" 
                                  :value="clearComment" @input="writeName($event.target.value)" 
                                  placeholder="Enter your message"></textarea>
                       
                        <button class="wow animate__animated animate__fadeInRight" data-wow-delay=".5s" @click="addUser" type="button">Send</button>                           
                    </div>
                </div>
            </div>
        </div>      
    </section>
</template>

<script>

export default{
    data(){
        return{
            commentedUser: [],
            currentName: null,
            clearComment: '',
            errorComment: false,
            logCheck: false
        }
    },

    methods:{
        addUser(){
    
            if(this.authUser !== null){
                this.logCheck = false
                    if(this.currentName != null){

                        this.commentedUser.push({
                        name: this.userInfoLog,
                        iconUser: 'fa-solid fa-user',
                        delete: 'fa-trash',
                        comment: this.currentName,
                        status: 'Client'
                    })
                        this.errorComment = false
                        this.currentName = null

                    } else if(this.currentName == null){
                        this.errorComment = true
                    }

            }else if(this.authUser == null){
                this.logCheck = true
            }
        },

        deleteUser(value){
            this.commentedUser.splice(value, 1);
        },

        writeName(value){

            if(value == ' '){
                this.currentName = null
            }else{
                this.currentName = value
            }

            
        }
    },

    computed:{
        
        userInfoLog(){
            return this.$store.state.auth.info;
        },

        authUser(){
            return this.$store.state.auth.user
        }
    }
}
</script>


<style lang="scss">

@import "../../assets/styles/allFiles.scss";

.comments{

    padding-bottom: 80px;

    &__title{

        margin-top: 100px;

        h3{
            @include hammersmith();

            font-size: 42px;
            color: $colorWhite;
            background: $colorBlack;
            text-transform: uppercase;
            padding-top: 6px;
            margin: 0;
        }

        p{
            @include robotoLight();

            font-size: 22px;
            padding-top: 30px;
        }
    }

    &__send-comment{
        
        text-align: right;
        margin-top: 40px;

        textarea{
            @include robotoLight();

            font-size: 18px;
            width: 100%;
            height: 140px;
            resize: none;
            padding: 14px 0 0 20px;
            outline: none;
            border: none;
            background: $commentsTextArea;
        }

        textarea::placeholder{
            @include robotoLight();

            color: $upperInputText; 
        }

        button{
            @include montserratLight();

            font-size: 18px;
            color: $colorWhite;
            padding: 4px 20px;
            margin-top: 12px;
            background: $colorBlack;
            border: 1px solid $colorBlack;
            outline: none;
        }

        p{
            @include robotoLight();
        }
    }

    &__feedback-wrapper{
        display: flex;
        justify-content: space-between;
    }

    &__feedback-user{
        display: flex;
    }

    &__feedback-user-icon{

        font-size: 46px;       
    }

    &__feedback-user-name{

        label{
            @include montserratRegular();

            font-size: 18px;
            color: $navColorTextBlack;
            padding: 12px 0 0 6px;
        }

        p{
            @include montserratLight();

            font-size: 14px;
            padding-left: 6px;
        }
    }

    &__feedback-delete{

        font-size: 20px;
        margin-top: 20px;
        cursor: pointer;
    }

    &__feedback-text{

        background: $commentsTextArea;
        p{
            @include robotoLight();

            font-size: 18px;
            padding: 10px 10px 35px 10px
        }
    }
}

</style>
<template>
        <section class="navigation" :class="{'navigation__scroll' : backMenu == true}">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="navigation__logo justify-content-center">
                            <div class="navigation__logo-main" 
                                :class="{'navigation__logo-main-black' : backMenu == true}" >
                                <h3>gym</h3>
                            </div>
                            <div class="navigation__logo-less" 
                                :class="{'navigation__logo-less-black' : backMenu == true}" >
                                <p>
                                    Keep
                                    <br>
                                    Your dreem
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-8">
                        <ul class="navigation__nav" :class="{'navigation__nav-black' : backMenu == true}">
                            <li>Home</li>
                            <li @click="activeСourses()">Сourses <i :class="toggleArrow"></i></li>
                            <li>Promotions</li>
                            <li>About us</li>
                            <li @click="authActive = !authActive" :id="btnStyle" class="navigation__nav-btn" :class="{'navigation__nav-btn-black' : backMenu == true}">Log in</li>
                        </ul>
                    </div>
                </div>
            </div>

            <dv-courses v-if="activeCoursesBuy == true"></dv-courses>
            <dv-authorization v-if="authActive == true"
                              @hideRegistr="hideRegistr"
            ></dv-authorization>
        </section>
</template>

<script>

import courses from '../top/courses'
import authorization from './authorization.vue'

export default{
    components:{
        'dv-courses' : courses,
        'dv-authorization' : authorization
    },
    data(){
        return{
            arrowNavToggle: false,
            backMenu: false,
            activeCoursesBuy: false,
            authActive: false,
            leftMenuAnimation: true
        }
    },

    methods:{

        activeСourses(){
            this.arrowNavToggle = !this.arrowNavToggle;
            this.activeCoursesBuy = !this.activeCoursesBuy;
        },

        menuActive(){
            if(window.scrollY > 50){
                this.backMenu = true
            }else{
                this.backMenu = false
            }
        },

        hideRegistr(){
            this.authActive = false;
        }
    },

    computed: {

        toggleArrow(){
            
            return (this.arrowNavToggle == false) ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
        },

        btnStyle(){ 
            return  (this.backMenu == false) ? 'navigation__black' : 'navigation__white';
        }

    },

    mounted(){
        
        window.addEventListener('scroll', this.menuActive);
    }
}

</script>

<style lang="scss">
    @import '../../assets/styles/allFiles.scss';

    .navigation{

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        padding: 26px 0 12px 0;

        &__logo{
            display: flex;
        }

        &__logo-main{

            h3{
                @include secularOne();

                font-size: 54px;
                text-transform: uppercase;
                color: $colorWhite;
            }
        }

        &__logo-less{
            p{
                @include montserratLight();

                font-size: 16px;
                color: $navColorText;
                padding: 7px 0 0px 10px;
            }
        }

        &__nav{
            margin-top: 28px;
            padding: 0;
            display: flex;
            justify-content: center;
            
                li{
                    @include montserratLight();

                    font-size: 18px;
                    list-style-type: none;
                    color: $navColorText;
                    margin-right: 64px;
                    cursor: pointer;

                    i{
                        font-size: 12px;
                    }
                }

                // :nth-child(5){
                //     margin-right: 0px;
                //     color: $colorBlack;
                // }   
        }

        &__nav-btn{
            margin-top: -4px;
            padding: 4px 20px;
            background: $colorWhite;
            box-shadow: 0px 0px 18px 3px rgba(255, 255, 255, 0.6);
        }

        &__scroll{
            background: $colorWhite;
            box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.5);
        }

        
        &__logo-main-black{
            
            h3{
                color: $colorBlack;
            }
        }

        &__logo-less-black{

            p{
                color: $navColorTextBlack;
            }
        }

        &__nav-black{
            li{
                color: $navColorTextBlack;
            }
        }

        &__nav-btn-black{
            box-shadow: 0px 0px 18px 3px rgba(0, 0, 0, 0.5);
            background: $colorBlack;
        }

        #navigation__white{
            color: $colorWhite;
        }

        #navigation__black{
            color: $colorBlack;
        }
    }

</style>
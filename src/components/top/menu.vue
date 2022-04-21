<template>
        <section class="navigation" :class="{'navigation__scroll' : backMenu == true}">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-8">
                        <div class="navigation__logo justify-content-center wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                            <div class="navigation__logo-main" 
                                :class="{'navigation__logo-main-black' : backMenu == true}" >
                                <h3>gym</h3>
                            </div>
                            <div class="navigation__logo-less" 
                                :class="{'navigation__logo-less-black' : backMenu == true}" >
                                <p>
                                    Keep
                                    <br>
                                    Your dream
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-8 col-lg-8 col-md-6 col-sm-4 col-4">

                        <div :class="{'navigation__adaptation-menu-black' : backMenu == true}" 
                              class="navigation__adaptation-menu wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                            <span @click="rightMenu = true"><font-awesome-icon icon="fa-solid fa-bars" /></span>
                        </div>


                        <ul class="navigation__nav wow animate__animated animate__fadeIn" data-wow-delay=".4s" :class="{'navigation__nav-black' : backMenu == true}">
                            <li>Home</li>
                            <li @click="activeСourses()">Сourses <span><font-awesome-icon :icon="toggleArrow" /></span></li>
                            <li>Promotions</li>
                            <li>About us</li>
                            <li @click="authActive = !authActive" :id="btnStyle" class="navigation__nav-btn" :class="{'navigation__nav-btn-black' : backMenu == true}">Log in</li>
                        </ul>
                    </div>
                </div>
            </div>

            <dv-hideNavigation v-if="rightMenu == true"
                               @showCourses="activeСourses()"
                               @hideMenu="rightMenu = false"
                               @activeAuthorization="authActive = true"
            ></dv-hideNavigation>

            <dv-courses @hideCourses="activeCoursesBuy = false"
                        v-if="activeCoursesBuy == true">
            </dv-courses>

            <dv-authorization v-if="authActive == true"
                              @hideRegistr="hideRegistr"
            ></dv-authorization>
        </section>
</template>

<script>

import courses from './hideMenu/courses.vue'
import authorization from './hideMenu/authorization.vue'
import hideNavigation from './hideMenu/hideNavigation.vue'

export default{
    components:{
        'dv-courses' : courses,
        'dv-authorization' : authorization,
        'dv-hideNavigation' : hideNavigation
    },
    data(){
        return{
            arrowNavToggle: false,
            backMenu: false,
            activeCoursesBuy: false,
            authActive: false,
            rightMenu: false
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
            
            return (this.arrowNavToggle == false) ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-up';
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
    @import '../../assets/styles/allFiles';

    .navigation{

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
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
                    margin-right: 54px;
                    cursor: pointer;

                    span{
                        font-size: 12px;
                    }
                }

                li:nth-child(5){
                       margin-right: 0px;
                   }
  
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

        &__adaptation-menu{
            display: none;
        }

    }

    // Adaptation

    @media only screen and(max-width: 1200px){

        .navigation{

            &__nav li{
                margin-right: 44px;
            }
        }
        
    }

    @media only screen and(max-width: 992px){

        .navigation{

            &__nav {
                display: none;
            }

            &__adaptation-menu{
                padding-top: 14px;
                display: block;
                text-align: right;

                span{
                    
                    font-size: 30px;
                    cursor: pointer;
                    color: $colorWhite;
                }
            }

            &__adaptation-menu-black{
                
                span{
                    color: $colorBlack;
                }
            }
        }
        
    }

</style>
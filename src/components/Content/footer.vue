<template>
    <section class="footer wow animate__animated animate__fadeIn" data-wow-delay=".5s">
        <div class="container">
            <div class="row">
                <div class="offset-xl-0 col-xl-4 offset-lg-0 col-lg-5 offset-md-0 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 wow animate__animated animate__fadeInLeft" data-wow-delay="1s">
                    <div class="footer__wrapper">
                        <div class="footer__wrapper-flex d-flex">
                            <div class="footer__wrapper-flex-logo">
                                <h3>gym</h3>
                            </div>
                            <div class="footer__wrapper-flex-less">
                                <p>
                                    Keep
                                    <br>
                                    Your dream
                                </p>
                            </div>
                        </div>
                        <div class="footer__wrapper-text">
                            <p>
                                It was some time before he obtained an answer, and the reply, when made, was unpropitious.
                            </p>
                        </div>
                        <ul class="footer__wrapper-networks">
                            <li><font-awesome-icon icon="fa-brands fa-twitter-square" /></li>
                            <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
                            <li><font-awesome-icon icon="fa-brands fa-google-plus-square" /></li>
                            <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
                            <li><font-awesome-icon icon="fa-brands fa-instagram-square" /></li>
                        </ul>
                    </div>
                </div>

                <div class="offset-xl-2 col-xl-2 offset-lg-1 col-lg-2 offset-md-0 col-md-2 offset-sm-0  col-sm-4 offset-0 col-6 wow animate__animated animate__fadeInRight" data-wow-delay="1s">
                        <ul class="footer__wrapper-link">
                            <h6>Learm more</h6>
                            <li><a href="../top/header.vue">When we work</a></li>
                            <li><a href="../top/header.vue">Courses</a></li>
                            <li><a href="../top/header.vue">Promotions</a></li>
                        </ul>
                </div>

                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6 wow animate__animated animate__fadeInRight" data-wow-delay="1.2s">
                        <ul class="footer__wrapper-link">
                            <h6>About us</h6>
                            <li><a href="../top/header.vue">About us</a></li>
                            <li><a href="../top/header.vue">Privacy police</a></li>
                            <li><a href="../top/header.vue">Terms & Conditions</a></li>
                        </ul>
                </div>
                 <div class="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-6 wow animate__animated animate__fadeInRight" data-wow-delay="1.4s">
                        <ul class="footer__wrapper-link">
                            <h6>Support</h6>
                            <li><a href="../top/header.vue">F. A. Q.</a></li>
                            <li><a href="../top/header.vue">Contact us</a></li>
                            <li><a href="../top/header.vue">Phone call</a></li>
                            <li><a href="../top/header.vue">Live chat</a></li>
                        </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

@import '../../assets/styles/allFiles.scss';

.footer{

    padding: 80px 0 60px;

    &__wrapper-flex-logo{

        h3{
            @include secularOne();

            font-size: 54px;
            text-transform: uppercase;
            color: $colorBlack;
        }
    }

    &__wrapper-flex-less{

        p{
            @include montserratLight();

            font-size: 16px;
            color: $colorBlack;
            padding: 7px 0 0px 10px;
        }
    }

    &__wrapper-text{
        @include montserratLight();

        font-size: 18px;
    }

    &__wrapper-networks{

        margin: 0;
        padding: 20px 60px 0 0;
        display: flex;
        justify-content: space-between;
        list-style-type: none;

        li{
            max-width: 28px;
            max-height: 48px;
            font-size: 32px;
            cursor: pointer;
            color: $navColorTextBlack;
            transition: .2s ease-in;
        }

        li:hover{
            font-size: 36px;
            color: $footerHoverLi;
            transition: .2s ease-in;
        }
    }

    &__wrapper-link{
        margin: 0;
        padding: 10px 0 0 0;
        list-style-type: none;

        h6{ 
            @include robotoRegular();
            margin: 0;
        }

        li{
            max-width: 196px;
            padding-top: 10px;
            a{  
                @include montserratRegular();

                font-size: 14px;
                color: #a3a3a3;
                text-decoration: none;
            }
            
        }

        li:hover{
            a{
                color: $footerHoverLi;
            }
        }

        li:nth-child(2){
            padding-top: 30px;
        }
    }
}

@media only screen and(max-width: 992px){
    
    .footer{

        &__wrapper-text{
            p{
                font-size: 16px;
            }
        }

        &__wrapper-link {
            li{
                a{
                    font-size: 12px;
                }
            }
            
        } 
        
        
    }
}

@media only screen and(max-width: 768px){
    
    .footer{
        &__wrapper{
            margin-bottom: 30px;
        }

        &__wrapper-link {
            li{
                a{
                    font-size: 14px;
                }
            }
            
        }   
    }
}
</style>
<template>
    <section id="aboutUs" class="traning">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-10 col-sm-12 col-12">
                    <div class="traning__title text-center wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                        <h3>About our team</h3>         
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-10">
                    <div class="traning__content text-center">
                        <div class="traning__content-title wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                            <h3>You can join our Keep Your Dreem team by changing people with us</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
                    <div class="traning__content-about wow animate__animated animate__fadeInLeft" data-wow-delay="1s">
                        <h2>What we are?</h2>

                        <p>
                            Keep your dream is a team of sports experts, we have gathered coaches from different parts of the country and the world. Each of them wants to help you achieve your goals in sports, so we are here
                            We are waiting for you!
                        </p>
                    </div>
                </div>

                <div class="col-xl-8 col-lg-10 col-md-12 col-sm12 col-12">
                    <div class="traning__content-about wow animate__animated animate__fadeInLeft" data-wow-delay="1s">
                        <h2>OUR MISSION & OBJECTIVES</h2>

                        <p>
                            We create our own network of gyms and provide people with a training and nutrition program. We help people regain or maintain their beauty, health and strength for many years and help people change
                        </p>
                    </div>
                </div>                
            </div>
            <div class="row justify-content-around text-center">
                <div class="col-xl-6 col-lg-10 col-md-12 col-sm-12" style="overflow: hidden">
                    <div class="traning__content-about-form wow animate__animated animate__slideInLeft" data-wow-delay=".8s">
                        <h1>Subscribe to our newsletter</h1>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-8 col-md-10 col-sm-10 col-12" style="overflow: hidden">
                    <div class="traning__content-about-form d-flex wow animate__animated animate__slideInRight" data-wow-delay=".6s">
                        <input type="email" name="email" placeholder="Enter your email"> 
                        <button type="button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss">

@import "../../assets/styles/allFiles.scss";

.traning{

    padding-top: 130px;

    &__title{

        h3{
            @include hammersmith();

            font-size: 42px;
            color: $colorWhite;
            background: $colorBlack;
            text-transform: uppercase;
            padding-top: 6px;
            margin: 0;
        }
    }

    &__content{
        margin-bottom: 100px;
    }

    &__content-title{

        margin-top: 30px;

        h3{
            @include robotoLight();

            font-size: 22px;
        }
    }

    &__content-about{
        padding-top: 20px;
        h2{
            @include robotoLight();
            
            color: $navColorTextBlack;
        }

        p{
            @include montserratLight();

            font-size: 20px;
            padding-top: 14px;
            color: $upperInputText;
        }
    }

    &__content-about-form{
        margin: 100px 0;

        h1{
            @include robotoLight();

            color: $navColorTextBlack;
        }

        input{
            @include montserratLight();

            font-size: 18px;
            width: 100%;
            padding: 0px 15px 0px;
            outline: none;
        }

        button{
            @include montserratLight();

            font-size: 18px;
            padding: 0px 24px 0;
            height: 54px;
            border: 1px solid $colorBlack;
            background: $colorBlack;
            color: $colorWhite;
            outline: none;
        }
    }
}

@media only screen and(max-width: 1200px){

    .traning{

        &__content-about{
            padding-bottom: 40px;
        }

        &__content-about-form{
            margin: 20px 20px;
        }

    }
}

@media only screen and(max-width: 768px){

    .traning{

        &__content-about{
            p{
                font-size: 18px;
            }
        }
        
    }
}

@media only screen and(max-width: 576px){

    .traning{

        &__title{
            h3{
                font-size: 36px;
            }
        }

        &__content-title{
            margin-top: 10px;
            h3{
                font-size: 18px;
            }
        }
    }
}
</style>
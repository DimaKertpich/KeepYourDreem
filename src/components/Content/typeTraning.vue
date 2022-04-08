<template>
    <section class="traning">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="traning__title text-center">
                        <h3>There is always a choice</h3>         
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <div class="traning__content text-center">
                        <div class="traning__content-title">
                            <h3>You can join our Keep Your Dreem team by changing people with us</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="traning__content-about animate__animated animate__fadeInUp animate__delay-2s">
                        <h2>What we are?</h2>

                        <p>
                            Keep your dream is a team of sports experts, we have gathered coaches from different parts of the country and the world. Each of them wants to help you achieve your goals in sports, so we are here
                            We are waiting for you!
                        </p>
                    </div>
                </div>

                <div class="col-xl-8">
                    <div class="traning__content-about">
                        <h2>OUR MISSION & OBJECTIVES</h2>

                        <p>
                            We create our own network of gyms and provide people with a training and nutrition program. We help people regain or maintain their beauty, health and strength for many years and help people change
                        </p>
                    </div>
                </div>                
            </div>
            <div class="row justify-content-around text-center">
                <div class="col-xl-6">
                    <div class="traning__content-about-from">
                        <h1>Subscribe to our newsletter</h1>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="traning__content-about-from d-flex">
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


    &__title{

        margin-top: 100px;

        h3{
            @include hammersmith();

            font-size: 50px;
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

        margin-top: 50px;

        h3{
            @include robotoLight();

            font-size: 24px;
        }
    }

    &__content-about{
        padding-top: 60px;
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

    &__content-about-from{
        margin-top: 100px;

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

</style>
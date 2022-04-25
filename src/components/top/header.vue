<template>
    <section id="home" class="header" 
            :class="{'header-one' : activeImg == 1, 'header-two' : activeImg == 2,'header-three' : activeImg == 3,'header-four' : activeImg == 4}">
        <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 text-center">
                   <div class="header__title">
                        <h3 class="wow animate__animated animate__fadeIn" data-wow-delay="1s">Everyone needs change </h3>
                        <p class="wow animate__animated animate__fadeInUp" data-wow-delay="1.2s">Powered by <a href="https://www.instagram.com/d78_voluychik/">@d78_voluychik</a></p>
                        <span class="wow animate__animated animate__fadeInUp" data-wow-delay="1.4s">a selection of personal training just for you join us</span>        
                   </div>
                   <div class="header__btn">
                       <button class="header__btn-app wow animate__animated animate__fadeInLeft" data-wow-delay="1.4s">Our application</button>
                       <button class="header__btn-learn wow animate__animated animate__fadeInRight" data-wow-delay="1.4s">Learn more</button>
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
            activeImg: 1,
            animationActive: true
        }
    },

    mounted(){

        setInterval(() => {
            
            this.activeImg++
            

            if(this.activeImg == 5){
                this.activeImg = 1
            }
        }, 4000)

    }
}


</script>

<style lang="scss">

@import "../../assets/styles/allFiles.scss";

@keyframes slide {
    0%{
        opacity: .9;
    }

    20%{
        opacity: 1;
    }

    100%{
        opacity: 1;
    }
}

.animationBg{
    animation: slide 4s infinite;
}

.header{
    background: no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;

    &-one{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8)), url('../../assets/images/1.jpg');
        animation: slide 4s infinite;
    }

    &-two{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8)), url('../../assets/images/2.jpg');
        animation: slide 4s infinite;
    } 

    &-three{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8)), url('../../assets/images/3.jpg');
        animation: slide 4s infinite;
    }  

    &-four{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8)), url('../../assets/images/4.jpg');
        animation: slide 4s infinite;
    }  

    &__title{
        display: block;
        padding-top: 240px;
        h3{
            @include hammersmith();
            
            font-size: 60px;
            color: $colorWhite;
            text-transform: uppercase;
            
        }

        p{
            @include montserratLight();

            position: relative;
            font-size: 16px;
            color: $colorWhite;
            cursor: pointer;
        }

        p:after{
            content: '';
            display: block;
            width: 20px;
            height: 1px;
            background: $colorWhite;
            position: absolute;
            top: 12px;
            left: 36%;
        }

        p:before{
            content: '';
            display: block;
            width: 20px;
            height: 1px;
            background: $colorWhite;
            position: absolute;
            top: 12px;
            right: 36%;
        }

        span{
            @include montserratLight();

            color: #AFAFAF;
        }
    }

    &__btn{
        display: flex;
        justify-content: space-around;
        margin-top: 120px;
        padding: 0px 360px;
    }

    &__btn-app{
        @include montserratLight();

        color: $colorWhite;
        padding: 10px 16px;
        background: $colorBlack;
        border: 1px solid $colorBlack;
        border-radius: 2px;
    }

    &__btn-learn{
        @include montserratLight();

        color: $colorBlack;
        padding: 10px 16px;
        background: $colorWhite;
        border: 1px solid $colorWhite;
        border-radius: 2px;
    }
}

@media only screen and(max-width: 1300px){

    .header{
        &__title{

            p:after{
                left: 33%;
            }

            p:before{
                right: 33%;
            }

        }

        &__btn{
            padding: 0px 280px;
        }
    }
}

@media only screen and(max-width: 1200px){

    .header{

        &__title{

            p:after{
                left: 30%;
            }

            p:before{
                right: 30%;
            }

        }

        &__btn{
            padding: 0 230px;
        }

    }
}

@media only screen and(max-width: 992px){

    .header{

        &__title{

            h3{
                font-size: 58px;
            }

            p:after{
                left: 30%;
            }

            p:before{
                right: 30%;
            }

        }

        &__btn{
            padding: 0 190px;
        }
    }
}

@media only screen and(max-width: 768px){

    .header{

        &__title{
            
            h3{
                font-size: 43px;
            }

            p:after{
                left: 22%;
            }

            p:before{
                right: 22%;
            }

        }

        &__btn{
            padding: 0 100px;
        }
    }
}

@media only screen and(max-width: 576px){

    .header{
        
        &__title{
            padding-top: 220px;

            h3{
                font-size: 42px;
            }

             p:after{
                left: 20%;
            }

            p:before{
                right: 20%;
            }
        }

        &__btn{
            padding: 0 80px;
        }
    }
}

@media only screen and(max-width: 420px){

    .header{
        
        &__btn{
            padding: 0 30px;
        }

        &__title{
            
            h3{
                font-size: 32px;
            }

            p{
                font-size: 14px;
                margin-bottom: 8px;
            }

            span{
                font-size: 14px;
            }

            p:after{
                top: 10px;
                left: 10%;
            }

            p:before{
                top: 10px;
                right: 10%;
            }
        }
    }
}

</style>
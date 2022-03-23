<template>
    <section class="header" 
            :class="{'header-one' : activeImg == 1, 'header-two' : activeImg == 2,'header-three' : activeImg == 3,'header-four' : activeImg == 4}">
        <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 text-center">
                   <div class="header__title">
                        <h3>Everyone needs change </h3>
                        <p>Powered by <a href="https://www.instagram.com/d78_voluychik/">@d78_voluychik</a></p>
                        <span>a selection of personal training just for you join us</span>        
                   </div>
                   <div class="header__btn">
                       <button class="header__btn-app">Our application</button>
                       <button class="header__btn-learn">Learn more</button>
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
            activeImg: 1
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

.header{
    background: no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
    
    

    &-one{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8)), url('../../assets/images/1.jpg');
    }

    &-two{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8)), url('../../assets/images/2.jpg');
    } 

    &-three{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8)), url('../../assets/images/3.jpg');
    }  

    &-four{
        background-image: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8)), url('../../assets/images/4.jpg');
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
            left: 33%;
        }

        p:before{
            content: '';
            display: block;
            width: 20px;
            height: 1px;
            background: $colorWhite;
            position: absolute;
            top: 12px;
            right: 33%;
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
        padding: 0px 280px;
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

</style>
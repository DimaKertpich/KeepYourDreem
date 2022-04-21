<template>
    <section class="choice">
        <div class="container">
            <div class="row justify-content-around text-center">
                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="choice__title wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                        <h3>There is always a choice</h3>
                    </div>
                    <div class="choice__title-text wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <p>
                            With our training program you will be able to achieve the desired result and reach the heights you want
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="choice__toggleTraning wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                    <p v-if="activeTypeHome == true" @click="toggleTraning" >Training in the gym<span><font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" /></span></p>
                    <p v-if="activeTypeGym == true"  @click="toggleTraning" >Training at home
                        <span><font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" /></span>
                        </p>
                </div>

                <div v-if="activeTypeGym == true" class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-2 col-md-8 offset-sm-0 col-sm-12 offset-1 col-10 wow animate__animated animate__fadeInLeft" data-wow-delay=".5s">
                    <div class="choice__relative">
                        <ul class="choice__gym-img">
                            <li @mouseover="showGymText = true" 
                                @mouseleave="hideGymText"  
                                :class="{moveGymImg : index == currentGymImg, changeAfter : showGymText == true}" 
                                :key="index" v-for="(gymImg, index) in arrayGymImg">

                                <span v-if="showGymText == true" @click="changeTheNumbe('gym-prev')" class="choice__gym-img-arrowL">
                                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                                </span>

                                <div v-if="showGymText === false" class="choice__gym-img-title">
                                    <h2>Visit our gym</h2>
                                </div>
                                
                                <img :src="choiceImgGym(gymImg)">

                                <div v-if="showGymText == true" class="choice__gym-img-hoverText">
                                    <p>
                                        Here you can pump your every muscle using extra load
                                    <br>
                                    <br>
                                        <a href="../Content/choice.vue">Learn more</a> 
                                    </p>
                                </div>

                                <span v-if="showGymText == true" @click="changeTheNumbe('gym-next')" class="choice__gym-img-arrowR">
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </span>
                       
                            </li>
                        </ul>

                    </div>
                </div>
                <div v-if="activeTypeHome == true" class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-2 col-md-8 offset-sm-0 col-sm-12 offset-1 col-10 wow animate__animated animate__fadeInRight" data-wow-delay=".5s">
                    <div class="choice__relative">
                        <ul class="choice__home-img">
                            <li @mouseover="showHomeText = true" 
                                @mouseleave="hideHomeText"
                                :key="index" v-for="(homeImg,index) in arrayHomeImg"
                                :class="{moveHomeImg : index == currentHomeImg, changeAfter : showHomeText == true}">

                                <span v-if="showHomeText == true" @click="changeTheNumbe('home-prev')" class="choice__home-img-arrowL">
                                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                                </span>

                                <div v-if="showHomeText === false" class="choice__home-img-title">
                                    <h2>Stay at home</h2>
                                </div>

                                <img :src="choiceImgGym(homeImg)">

                                <div v-if="showHomeText == true" class="choice__home-img-hoverText">
                                    <p>
                                        You can always stay in training and work out at home
                                    <br>
                                    <br>
                                        <a href="../Content/choice.vue">Learn more</a> 
                                    </p>
                                </div>

                                <span v-if="showHomeText == true" @click="changeTheNumbe('home-next')" class="choice__home-img-arrowR">
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </span>
                            </li>
                        </ul>
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
            toggleBtn: true,
            currentGymImg: 0,
            currentHomeImg: 0,
            showGymText: false,
            showHomeText: false,
            arrayGymImg:["gym-1.jpg","gym-2.jpg","gym-3.jpg"],
            arrayHomeImg: ["workout-1.jpg", "workout-2.jpg", "workout-3.jpg"],
            activeTypeGym: true,
            activeTypeHome: true
        }
    },


    methods:{

        toggleTraning(){

            if(this.activeTypeHome == false){
               this.activeTypeHome = true
               this.activeTypeGym = false
            } else if(this.activeTypeGym == false){
               this.activeTypeGym = true
               this.activeTypeHome = false
            }

        },
        
        choiceImgGym(value){
            return require('../../assets/images/content/' + value);
        },

        changeTheNumbe(value){

            if(value == 'gym-prev'){
                this.currentGymImg--;

                if(this.currentGymImg < 0){
                    this.currentGymImg = 2
                }
            }

            if(value == 'gym-next'){
                this.currentGymImg++;

                if(this.currentGymImg > 2){
                    this.currentGymImg = 0
                }
            }

            if(value == 'home-prev'){
                this.currentHomeImg--;

                if(this.currentHomeImg < 0){
                    this.currentHomeImg = 2
                }
            }

            if(value == 'home-next'){
                this.currentHomeImg++;

                if(this.currentHomeImg > 2){
                    this.currentHomeImg = 0
                }
            }
        },

        hideGymText(){
            setTimeout(() => {
            
               this.showGymText = false
            }, 100)
        },

        hideHomeText(){
            setTimeout(() => {
            
               this.showHomeText = false
            }, 100)
        }
    },

    mounted(){
        if(window.innerWidth < 992){
            this.activeTypeHome = false
        }
    }
}

</script>

<style lang="scss">

@import "../../assets/styles/allFiles.scss";

.choice{
    
    padding-bottom: 80px;
    
    &__title{
        margin-top: 100px;

        h3{
            @include hammersmith;

            font-size: 46px;
            color: $colorWhite;
            background: $colorBlack;
            text-transform: uppercase;
            margin: 0;
        }
    }

    &__title-text{

        margin-top: 20px;

        p{
            @include robotoLight();

            font-size: 22px;
        }
    }

    &__relative{
        position: relative;
        height: 400px;
        margin-top: 60px;
        width: 100%;
        overflow: hidden;
    }

    &__home-img{
        padding: 0;
        margin: 0;

        li{
            position: absolute;
            top: 0;
            left: 0;
            list-style-type: none;

            img{
                width: 100%;
            }
        }

        li:after{
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .8);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
        }

        li.changeAfter:after{
            background: rgba(0, 0, 0, .6);
        }

        li:nth-child(1){
            margin-top: -580px;
        }

        li:nth-child(2){
            margin-top: -580px;
        }

        li:nth-child(3){
            margin-top: -580px;
        }
        
        li:nth-child(1).moveHomeImg{
            margin-top: 0px;
        }

        li:nth-child(2).moveHomeImg{
            margin-top: 0px;
        }

        li:nth-child(3).moveHomeImg{
            margin-top: 0px;
        }
    }

    .moveHomeImg{
        animation: fade 1.5s;
    }

    &__gym-img{
        padding: 0;
        margin: 0;
        
        li{
            position: absolute;
            top: 0;
            left: 0;
            list-style-type: none;

            img{
              width: 100%;
            }   
        }

        li:after{
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .8);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
        }

        li.changeAfter:after{
            background: rgba(0, 0, 0, .6);
        }

        li:nth-child(1){
                margin-top: -580px;
            }

        li:nth-child(2){
                margin-top: -580px;
            }

        li:nth-child(3){
                margin-top: -580px;
            } 

        li:nth-child(1).moveGymImg{
                margin-top: 0px;
            }

        li:nth-child(2).moveGymImg{
                margin-top: 0px;
            }

        li:nth-child(3).moveGymImg{
                margin-top: 0px;
            }
    }

    &__home-img-arrowL,
    &__gym-img-arrowL{

        position: absolute;
        top: 170px;
        left: 0;
        font-size: 26px;
        color: rgba(255, 255, 255, .9);
        padding: 6px 18px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 40;
        cursor: pointer;
    }

    &__home-img-arrowR,
    &__gym-img-arrowR{

        position: absolute;
        top: 170px;
        right: 0;
        font-size: 26px;
        color: rgba(255, 255, 255, .9);
        padding: 6px 18px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 40;
        cursor: pointer;
    }

    .moveGymImg{
        animation: fade 1.5s;
    }

    @keyframes fade{
        from{opacity: .4;}
        to{opacity: 1;}
    }

    &__home-img-title,
    &__gym-img-title{
        position: absolute;
        top: 160px;
        left: 0;
        z-index: 30;
        width: 100%;

        h2{
            @include montserratRegular();

            color: $choiceGymImgTitle;
            text-align: center;
        }
    }

    &__home-img-hoverText,
    &__gym-img-hoverText{
        position: absolute;
        top: 86px;
        left: 0;
        z-index: 20;

        p{
            @include montserratLight();

            font-size: 20px;
            text-align: center;
            color: $choiceGymImgText;
            padding: 0px 100px 0;

                a{
                    @include robotoLight();
                    font-size: 18px;
                    color: $colorWhite;
                    list-style-type: none;
                    text-decoration: none;
                }

        }

    }

    &__toggleTraning{
        display: none;
    }
}

@media only screen and(max-width: 1200px){

    .choice{

        &__home-img-title,
        &__gym-img-title{
            top: 120px;

            p{
                font-size: 18px;
            }
        }

        &__home-img-hoverText,
        &__gym-img-hoverText{
            top: 96px;
            p{
                font-size: 18px;
                padding: 0px 60px 0px;

                    a{
                        font-size: 16px;
                    }

            }

        }
    }
}

@media only screen and(max-width: 992px){

    .choice{

         &__toggleTraning{

             display: block;

            p{
                @include robotoLight();

                font-size: 20px;
                text-align: center;
                cursor: pointer;
                max-width: 210px;
                margin: 0 auto;

                span{
                    font-size: 16px;
                    margin-left: 4px;
                }
            }

        }

        &__home-img-arrowL,
        &__gym-img-arrowL{

            top: 120px;
        }

        &__home-img-arrowR,
        &__gym-img-arrowR{

            top: 120px;
        }

        
        &__home-img-hoverText,
        &__gym-img-hoverText{
            
            top: 48px;

        }
    }
}

@media only screen and(max-width: 768px){

    .choice{

        padding-bottom: 40px;

        &__title{

            h3{
                font-size: 38px;
            }
        }

        &__title-text{

            p{
                font-size: 20px;
            }
        }

        &__home-img-arrowL,
        &__gym-img-arrowL{

            top: 140px;
        }

        &__home-img-arrowR,
        &__gym-img-arrowR{

            top: 140px;
        }

        
        &__home-img-hoverText,
        &__gym-img-hoverText{
            
            top: 64px;

        }

        &__home-img-title,
        &__gym-img-title{
            top: 130px;
        }
    }
}

@media only screen and(max-width: 576px){

    .choice{

        &__title{

            h3{
                font-size: 24px;
            }
        }

        &__home-img-title,
        &__gym-img-title{
            top: 110px;
        }

        &__title-text{

            p{
                font-size: 16px;
            }
        }
        
        &__home-img-arrowL,
        &__gym-img-arrowL{

            top: 110px;
        }

        &__home-img-arrowR,
        &__gym-img-arrowR{

            top: 110px;
        }

        
        &__home-img-hoverText,
        &__gym-img-hoverText{
            
            top: 42px;

        }
    }
}

@media only screen and(max-width: 420px){

    .choice{


        &__home-img-title,
        &__gym-img-title{
            top: 90px;
        }
        
        &__home-img-arrowL,
        &__gym-img-arrowL{
            font-size: 18px;
            top: 80px;
        }

        &__home-img-arrowR,
        &__gym-img-arrowR{
            font-size: 18px;
            top: 80px;
        }

        
        &__home-img-hoverText,
        &__gym-img-hoverText{
            
            top: 32px;

        }

        &__home-img-hoverText,
        &__gym-img-hoverText{
            
            top: 30px;

            p{
                font-size: 14px;
                padding: 0 40px;
            }

        }
    }
}

@media only screen and(max-width: 420px){

    .choice{

        &__home-img-title,
        &__gym-img-title{
            top: 70px;
        }
        
        &__home-img-arrowL,
        &__gym-img-arrowL{

            top: 70px;
        }

        &__home-img-arrowR,
        &__gym-img-arrowR{

            top: 70px;
        }

        
        &__home-img-hoverText,
        &__gym-img-hoverText{
            
            top: 18px;

            p{
                padding: 0 20px;
            }

        }
    }
}

</style>
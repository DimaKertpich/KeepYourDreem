<template>
    <section class="choice">
        <div class="container">
            <div class="row justify-content-around text-center">
                <div class="col-xl-6">
                    <div class="choice__title">
                        <h3>There is always a choice</h3>
                    </div>
                    <div class="choice__title-text">
                        <p>
                            With our training program you will be able to achieve the desired result and reach the heights you want
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-around text-center">
                <div class="col-xl-4">
                    <div class="choice__btn">
                        <button @click="toggleBtn = true" :class="{activeBtn : toggleBtn == true}">In the gym</button>
                        <button @click="toggleBtn = false" :class="{activeBtn : toggleBtn == false}">At home</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6">
                    <div class="choice__relative">
                        <ul class="choice__gym-img">
                            <li class="choice__fade" :class="{moveGymImg : index == currentGymImg}" 
                            :key="index" v-for="(gymImg, index) in arrayGymImg">
                                <span @click="increaseNumbMinus" class="choice__gym-img-arrowL">
                                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                                </span>

                                <img :src="choiceImgGym(gymImg)">

                                <span @click="increaseNumbPlus" class="choice__gym-img-arrowR">
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
            arrayGymImg:["gym-1.jpg","gym-2.jpg","gym-3.jpg"]
        }
    },

    methods:{

        choiceImgGym(value){
            return require('../../assets/images/content/' + value);
        },

        increaseNumbPlus(){
            this.currentGymImg++;

            if(this.currentGymImg > 2){
                this.currentGymImg = 0
            }

        },

        increaseNumbMinus(){
            this.currentGymImg--;

            if(this.currentGymImg < 0){
                this.currentGymImg = 2
            }
        }
    }
}

</script>

<style lang="scss">

@import "../../assets/styles/allFiles.scss";

.choice{

    &__title{
        margin-top: 100px;

        h3{
            @include hammersmith;

            font-size: 46px;
            color: $colorWhite;
            background: $colorBlack;
            text-transform: uppercase;
        }
    }

    &__title-text{

        margin-top: 20px;

        p{
            @include robotoLight();

            font-size: 22px;
        }
    }

    &__btn{

        margin-top: 20px;

        button{
            @include robotoRegular();
            
            width: 110px;
            height: 40px;
            font-size: 16px;
            display: inline;
            padding-top: 6px;
            border: 1px solid $colorBlack;
            background: $colorWhite;
            transition: .3s ease-in-out;
        }
    }


    .activeBtn{
        background: $colorBlack;
        color: $colorWhite;
    }

    &__relative{
        position: relative;
        height: 400px;
        margin-top: 100px;
        width: 100%;
        overflow: hidden;
    }

    &__gym-img{
        padding: 0;
        margin: 0;
        
        li{
            position: absolute;
            top: 0;
            left: 0;
            list-style-type: none;
            display: inline;

            img{
              width: 580px;
            }

            
        }

        li:after{
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
        }

        li:nth-child(1){
                margin-left: -580px;
            }

        li:nth-child(2){
                margin-left: -580px;
            }

        li:nth-child(3){
                margin-left: -580px;
            } 

        li:nth-child(1).moveGymImg{
                margin-left: 0px;
            }

        li:nth-child(2).moveGymImg{
                margin-left: 0px;
            }

        li:nth-child(3).moveGymImg{
                margin-left: 0px;
            }
    }

    &__gym-img-arrowL{

        position: absolute;
        top: 120px;
        left: 0;
        font-size: 26px;
        color: rgba(255, 255, 255, .9);
        padding: 6px 18px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 20;
        cursor: pointer;
    }

    &__gym-img-arrowR{

        position: absolute;
        top: 120px;
        right: 0;
        font-size: 26px;
        color: rgba(255, 255, 255, .9);
        padding: 6px 18px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 20;
        cursor: pointer;
    }

    .moveGymImg{
        animation: fade 1.5s;
    }

    @keyframes fade{
        from{opacity: .4;}
        to{opacity: 1;}
    }
}

.fade{
    animation-name: fade;
    animation-duration: 1,5s;
}

@keyframes fade{
    from{opacity: .4;}
    to{opacity: 1;}
}
</style>
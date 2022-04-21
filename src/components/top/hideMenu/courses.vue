<template>
    <section class="courses">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="courses__title text-center">
                        <h1>Choose a course</h1>
                    </div>
                    <div @click="hideCourses" class="courses__xmark">
                        <span><font-awesome-icon icon="fa-solid fa-xmark" /></span>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 text-center">
                    <div class="courses__nav-btn">
                        <button @click="moveSliderBack" class="courses__btn-prev">Prev</button>
                        <button @click="moveSliderForward" class="courses__btn-next">Next</button>
                    </div>
                </div>
            </div>
                <ul>
                    <li class="courses__info text-center" 
                        :class="{coursesMoveStepOne : counter == 1, 
                        coursesMoveStepTwo : counter == 2, 
                        coursesMoveStepThree : counter == 3,
                        coursesMoveStepFour : counter == 4,
                        coursesMoveStepFive : counter == 5}"
                        :key="index" v-for="(item, index) in coursesInfo">
                        <div class="courses__img">
                            <img :src="coursesImg(index)">
                        </div>
                        <div class="courses__info-block">
                            <div class="courses__block-title">
                                <h4>{{ item.title }}</h4>
                            </div>
                            <div class="courses__block-price">
                                <span>{{ item.price }}</span>
                            </div>
                            <div class="courses__block-text">
                                <p>
                                    {{ item.text }}
                                </p>
                            </div>  
                            <div class="courses__block-btn">
                                <button>Learn more</button>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
    </section>
</template>

<script>

export default{
    data(){
        return{
            coursesInfo: [
                {
                    image: 'subscription.jpg',
                    title: 'Subscription',
                    text: 'Here you can buy a monthly pass to the gym',
                    price: '30$'
                },
                {
                    image: 'solo.jpg',
                    title: 'A selection of training',
                    text: 'Choose a training course for yourself',
                    price: '20$'
                },
                {
                    image: 'aerobics.jpg',
                    title: 'Aerobics',
                    text: 'The price of a one-time workout in aerobics',
                    price: '10$'
                },
                {
                    image: 'coach.jpg',
                    title: 'Traning with coach',
                    text: 'The price of one training session with a coach',
                    price: '20$'
                },
                {
                    image: 'workout.jpg',
                    title: 'Workout',
                    text: 'Try something new for your body',
                    price: '40$'
                },
                {
                    image: 'food.jpg',
                    title: 'Food',
                    text: 'We will choose food just for you',
                    price: '20$'
                }
            ],
            counter: 0
        }
    },

    methods:{
        
        coursesImg(index){
            return require('../../../assets/images/courses/' + this.coursesInfo[index].image)
        },

        moveSliderForward(){
            
            if(this.counter < 2 && window.innerWidth > 1200){
                this.counter++
                console.log(this.counter)
            }

            if(this.counter < 3 && window.innerWidth > 992 && window.innerWidth < 1200){
                this.counter++
                console.log(this.counter)
            }

            if(this.counter < 4 && window.innerWidth > 768 && window.innerWidth < 992){
                this.counter++
                console.log(this.counter)
            }

            if(this.counter < 4 && window.innerWidth > 576 && window.innerWidth < 768){
                this.counter++
                console.log(this.counter)
            }

            if(this.counter < 5 && window.innerWidth < 576){
                this.counter++
                console.log(this.counter)
            }
        },

        moveSliderBack(){
            
            if(this.counter > 0){
                this.counter--
            }
        },

        hideCourses(){
            this.$emit('hideCourses');
        }
    }
}

</script>

<style lang="scss">
    @import "../../../assets/styles/allFiles";

    .courses{
        background: $colorWhite;
        width: 1200px;
        height: 630px;
        position: absolute;
        top: 112px;
        left: 50%;
        margin-left: -600px;
        z-index: 5;
        overflow: hidden;

        &__title{
            
            margin-top: 20px;

            h1{
                @include montserratLight();
            }
        }

        &__xmark{
            display: none;
        }

        &__nav-btn{
            margin-top: 12px;
        }

        &__btn-prev{
            @include montserratLight();

            font-size: 16px;
            margin-right: 20px;
            width: 78px;
            height: 30px;
            background: transparent;
            border: 1px solid $colorBlack;
        }

        &__btn-next{
            @include montserratLight();

            font-size: 16px;
            margin-left: 20px;
            width: 78px;
            height: 30px;
            background: transparent;
            border: 1px solid $colorBlack;
        }

        ul{
            margin: 0;
            padding: 0;

            li{
                list-style-type: none;
                transition: .8s ease;
            }

            li:nth-child(1){
                margin-left: -580px;
            }

            li:nth-child(2){
                margin-left: -280px;
            }

            li:nth-child(3){
                margin-left: 20px;
            }

            li:nth-child(4){
                margin-left: 320px;
            }

            li:nth-child(5){
                margin-left: 600px;
            }

            li:nth-child(6){
                margin-left: 600px;
            }

            // Move step one

            li:nth-child(1).coursesMoveStepOne{
                margin-left: -860px;
            }

            li:nth-child(2).coursesMoveStepOne{
                margin-left: -580px;
            }

            li:nth-child(3).coursesMoveStepOne{
                margin-left: -280px;
            }

            li:nth-child(4).coursesMoveStepOne{
                margin-left: 20px;
            }

            li:nth-child(5).coursesMoveStepOne{
                margin-left: 320px;
            }

            // Move step two

            li:nth-child(1).coursesMoveStepTwo{
                margin-left: -860px;
            }

            li:nth-child(2).coursesMoveStepTwo{
                margin-left: -860px;
            }

            li:nth-child(3).coursesMoveStepTwo{
                margin-left: -580px;
            }

            li:nth-child(4).coursesMoveStepTwo{
                margin-left: -280px;
            }

            li:nth-child(5).coursesMoveStepTwo{
                margin-left: 20px;
            }

            li:nth-child(6).coursesMoveStepTwo{
                margin-left: 320px;
            }
        }

        &__info{
            position: absolute;
            width: 260px;
            cursor: pointer;
            top: 160px;
            left: 50%;
        }

        ul li:hover &__img::before{
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
            z-index: 100;   
        }

        ul li:hover &__info-block{
            background: #EFEEEE;
        }

        &__img{
                position: relative;
            
            img{
                width: 100%;
            }
        }
  

        &__info-block{
            padding: 20px 0 30px 0;
            background: rgba(232, 224, 212, 0.2)
        }

        &__block-title{
            h4{
                @include robotoLight();

                font-size: 24px;
            }
        }

        &__block-text{
            @include montserratLight();

            font-size: 16px;
            padding: 0 10px;
            margin-top: 20px;
        }

        &__block-price{
            span{
                @include montserratLight();

                margin-top: 16px;
                background: rgba(229,228,226, .3);
                padding: 4px 14px;
            }
        }

        &__block-btn{
            button{
                @include robotoLight();

                margin-top: 40px;
                padding: 6px 12px;
                border: 1px solid rgba(229,228,226, .3);
                background: rgba(229,228,226, .3);
                transition: .2s ease-in;
            }

            :hover{
                background: $colorBlack;
                color: $colorWhite;
                transition: .2s ease-in;
            }
        }
    }

    // Adaptation

    @media only screen and(max-width: 1200px){

        .courses{
            width: 960px;
            height: 600px;
            margin-left: -480px;

            &__info-block{
                padding-bottom: 10px;
            }

            &__block-title{
                h4{
                    font-size: 22px;
                }
            }

            ul{
            
                li{
                    width: 240px;
                }

                li:nth-child(1){
                    margin-left: -440px;
                }

                li:nth-child(2){
                    margin-left: -160px;
                }

                li:nth-child(3){
                    margin-left: 120px;
                }

                li:nth-child(4){
                    margin-left: 400px;
                }

                li:nth-child(5){
                    margin-left: 720px;
                }

                li:nth-child(6){
                    margin-left: 720px;
                }

                // Move step one

                li:nth-child(1).coursesMoveStepOne{
                    margin-left: -700px;
                }

                li:nth-child(2).coursesMoveStepOne{
                    margin-left: -420px;
                }

                li:nth-child(3).coursesMoveStepOne{
                    margin-left: -140px;
                }

                li:nth-child(4).coursesMoveStepOne{
                    margin-left: 140px;
                }

                li:nth-child(5).coursesMoveStepOne{
                    margin-left: 420px;
                }

                li:nth-child(6).coursesMoveStepOne{
                    margin-left: 720px;
                }

                // Move step two

                li:nth-child(1).coursesMoveStepTwo{
                    margin-left: -800px;
                }

                li:nth-child(2).coursesMoveStepTwo{
                    margin-left: -680px;
                }

                li:nth-child(3).coursesMoveStepTwo{
                    margin-left: -400px;
                }
                
                li:nth-child(4).coursesMoveStepTwo{
                    margin-left: -120px;
                }

                li:nth-child(5).coursesMoveStepTwo{
                    margin-left: 160px;
                }

                li:nth-child(6).coursesMoveStepTwo{
                    margin-left: 440px;
                }

                // Move step three

                li:nth-child(1).coursesMoveStepThree{
                    margin-left: -800px;
                }

                li:nth-child(2).coursesMoveStepThree{
                    margin-left: -800px;
                }

                li:nth-child(3).coursesMoveStepThree{
                    margin-left: -640px;
                }

                li:nth-child(4).coursesMoveStepThree{
                    margin-left: -360px;
                }

                li:nth-child(5).coursesMoveStepThree{
                    margin-left: -80px;
                }

                li:nth-child(6).coursesMoveStepThree{
                    margin-left: 200px;
                }
            }
        }
    }

    @media only screen and(max-width: 992px){

        .courses{

            width: 740px;
            margin-left: -370px;
            margin-top: -2px;

        &__xmark{
            position: absolute;
            top: 21px;
            right: 30px;
            font-size: 26px;
            display: block;
            cursor: pointer;
        }

            ul{
                li:nth-child(1){
                    margin-left: -340px;
                }

                li:nth-child(2){
                    margin-left: -70px;
                }

                li:nth-child(3){
                    margin-left: 200px;
                }

                // Move step one

                li:nth-child(1).coursesMoveStepOne{
                    margin-left: -620px;
                }

                li:nth-child(2).coursesMoveStepOne{
                    margin-left: -340px;
                }

                li:nth-child(3).coursesMoveStepOne{
                    margin-left: -70px;
                }

                li:nth-child(4).coursesMoveStepOne{
                    margin-left: 200px;
                }

                // Move step two

                li:nth-child(1).coursesMoveStepTwo{
                    margin-left: -620px;
                }

                li:nth-child(2).coursesMoveStepTwo{
                    margin-left: -620px;
                }

                li:nth-child(3).coursesMoveStepTwo{
                    margin-left: -340px;
                }

                li:nth-child(4).coursesMoveStepTwo{
                    margin-left: -70px;
                }

                li:nth-child(5).coursesMoveStepTwo{
                    margin-left: 200px;
                }

                // Move step three

                li:nth-child(3).coursesMoveStepThree{
                    margin-left: -620px;
                }

                li:nth-child(4).coursesMoveStepThree{
                    margin-left: -340px;
                }

                li:nth-child(5).coursesMoveStepThree{
                    margin-left: -70px;
                }

                li:nth-child(6).coursesMoveStepThree{
                    margin-left: 200px;
                }

                // Move step Four

                 li:nth-child(1).coursesMoveStepFour{
                    margin-left: -620px;
                }

                li:nth-child(2).coursesMoveStepFour{
                    margin-left: -620px;
                }

                li:nth-child(3).coursesMoveStepFour{
                    margin-left: -620px;
                }

                li:nth-child(4).coursesMoveStepFour{
                    margin-left: -440px;
                }

                li:nth-child(5).coursesMoveStepFour{
                    margin-left: -170px;
                }

                li:nth-child(6).coursesMoveStepFour{
                    margin-left: 100px;
                }
            }
        }
    }

    @media only screen and(max-width: 768px){

        .courses{
            width: 520px;
            margin-left: -280px;

            ul{
                
                li{
                    width: 220px;
                }

                li:nth-child(1){
                    margin-left: -234px;
                }

                li:nth-child(2){
                    margin-left: 14px;
                }

                li:nth-child(3){
                    margin-left: 1000px;
                }

                // Move step one

                li:nth-child(1).coursesMoveStepOne{
                    margin-left: -700px;
                } 
                
                li:nth-child(2).coursesMoveStepOne{
                    margin-left: -234px;
                }

                li:nth-child(3).coursesMoveStepOne{
                    margin-left: 14px;
                }

                li:nth-child(4).coursesMoveStepOne{
                    margin-left: 1000px;
                }

                // Move step two

                li:nth-child(1).coursesMoveStepTwo{
                    margin-left: -700px;
                } 

                li:nth-child(2).coursesMoveStepTwo{
                    margin-left: -700px;
                }

                li:nth-child(3).coursesMoveStepTwo{
                    margin-left: -234px;
                }

                li:nth-child(4).coursesMoveStepTwo{
                    margin-left: 14px;
                }

                li:nth-child(5).coursesMoveStepTwo{
                    margin-left: 1000px;
                }

                // Move step three

                li:nth-child(1).coursesMoveStepThree{
                    margin-left: -700px;
                } 

                li:nth-child(2).coursesMoveStepThree{
                    margin-left: -700px;
                }

                li:nth-child(3).coursesMoveStepThree{
                    margin-left: -700px;
                }

                li:nth-child(4).coursesMoveStepThree{
                    margin-left: -234px;
                }

                li:nth-child(5).coursesMoveStepThree{
                    margin-left: 14px;
                }

                li:nth-child(6).coursesMoveStepThree{
                    margin-left: 1000px;
                }

                // Move step four

                li:nth-child(1).coursesMoveStepFour{
                    margin-left: -700px;
                } 

                li:nth-child(2).coursesMoveStepFour{
                    margin-left: -700px;
                }

                li:nth-child(3).coursesMoveStepFour{
                    margin-left: -700px;
                }

                li:nth-child(4).coursesMoveStepFour{
                    margin-left: -700px;
                }

                li:nth-child(5).coursesMoveStepFour{
                    margin-left: -234px;
                }

                li:nth-child(6).coursesMoveStepFour{
                    margin-left: 14px;
                }
            }
        }
    }

    @media only screen and(max-width: 576px){

        .courses{
            width: 320px;
            height: 510px;
            margin-left: -160px;

            &__title{
                h1{
                    font-size: 24px;
                }
            }

            &__xmark{
                font-size: 20px;
            }
            
            &__btn-next,
            &__btn-prev{
                font-size: 14px;
                width: 62px;
                height: 26px;
            }

            &__btn-next{
                margin-left: 10px;
            }

             &__btn-prev{
                margin-right: 10px;
            }

            &__info-block{
                padding: 10px 0 30px;
            }

            &__info{
                top: 110px;
            }

            &__block-btn{

                button{
                    margin-top: 10px;
                }
            }

            ul{

                li:nth-child(1){
                    margin-left: -111px;
                }

                 li:nth-child(2){
                    margin-left: 240px;
                }

                 // Move step one

                li:nth-child(1).coursesMoveStepOne{
                    margin-left: -400px;
                }

                li:nth-child(2).coursesMoveStepOne{
                    margin-left: -111px;
                }

                li:nth-child(3).coursesMoveStepOne{
                    margin-left: 240px;
                }

                // Move step two

                li:nth-child(1).coursesMoveStepTwo{
                    margin-left: -400px;
                }

                li:nth-child(2).coursesMoveStepTwo{
                    margin-left: -400px;
                }

                li:nth-child(3).coursesMoveStepTwo{
                    margin-left: -111px;
                }

                li:nth-child(4).coursesMoveStepTwo{
                    margin-left: 240px;
                }

                // Move step three

                li:nth-child(1).coursesMoveStepThree{
                    margin-left: -400px;
                }

                li:nth-child(2).coursesMoveStepThree{
                    margin-left: -400px;
                }

                li:nth-child(3).coursesMoveStepThree{
                    margin-left: -400px;
                }

                li:nth-child(4).coursesMoveStepThree{
                    margin-left: -111px;
                }

                li:nth-child(5).coursesMoveStepThree{
                    margin-left: 240px;
                }

                // Move step four

                li:nth-child(1).coursesMoveStepFour{
                    margin-left: -400px;
                }

                li:nth-child(2).coursesMoveStepFour{
                    margin-left: -400px;
                }

                li:nth-child(3).coursesMoveStepFour{
                    margin-left: -400px;
                }

                li:nth-child(4).coursesMoveStepFour{
                    margin-left: -400px;
                }

                li:nth-child(5).coursesMoveStepFour{
                    margin-left: -111px;
                }

                li:nth-child(6).coursesMoveStepFour{
                    margin-left: 240px;
                }

                // Move step five

                li:nth-child(1).coursesMoveStepFive{
                    margin-left: -400px;
                }

                li:nth-child(2).coursesMoveStepFive{
                    margin-left: -400px;
                }

                li:nth-child(3).coursesMoveStepFive{
                    margin-left: -400px;
                }

                li:nth-child(4).coursesMoveStepFive{
                    margin-left: -400px;
                }

                li:nth-child(5).coursesMoveStepFive{
                    margin-left: -400px;
                }

                li:nth-child(6).coursesMoveStepFive{
                    margin-left: -111px;
                }
            }
        }
    }
</style>
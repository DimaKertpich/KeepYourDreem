<template>
    <section class="courses">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="courses__title text-center">
                        <h1>Choose a course</h1>
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
                        :class="{coursesMoveStepOne : counter == 1, coursesMoveStepTwo : counter == 2}"
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
            return require('../../assets/images/courses/' + this.coursesInfo[index].image)
        },

        moveSliderForward(){
            
            if(this.counter < 2){
                this.counter++
            }
        },

        moveSliderBack(){
            
            if(this.counter > 0){
                this.counter--
            }
        }
    }
}

</script>

<style lang="scss">
    @import "../../assets/styles/allFiles.scss";

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
</style>
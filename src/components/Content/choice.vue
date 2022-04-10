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
        </div>
    </section>
</template>

<script>

export default{
    data(){
        return{
            toggleBtn: true
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
            @include robotoLight();
            
            width: 100px;
            font-size: 18px;
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
}

</style>
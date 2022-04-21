<template>
    <section class="hideNavigation">
        <div class="hideNavigation__line"></div>

        <ul class="hideNavigation__list">
            <li>Home</li>
            <li @click="showCourses">Courses<span><font-awesome-icon icon="fa-solid fa-dumbbell" /></span></li>
            <li>Promotions</li>
            <li>About us</li>
            <li @click="activeAuthorization">Log in</li>
        </ul>

        <div class="hideNavigation__bars">
            <span @click="hideMenu"><font-awesome-icon icon="fa-solid fa-xmark" /></span>
        </div>
    </section>
</template>

<script>

export default{


    methods:{
        showCourses(){
            this.$emit('showCourses');
            this.$emit('hideMenu');
        },

        hideMenu(){
            this.$emit('hideMenu');
        },

        activeAuthorization(){
            this.$emit('activeAuthorization');
            this.$emit('hideMenu');
        }
    }
}

</script>

<style lang="scss">

    @import '../../../assets/styles/allFiles.scss';

    .hideNavigation{
        position: fixed;
        height: 100vh;
        top: 0;
        right: 0;
        width: 370px;
        background: black;
        padding: 80px 20px;
        overflow: hidden;

        &__line{
            position: absolute;
            top: 6%;
            left: 30px;
            width: 1px;
            height: 90%;
            background: $choiceGymImgText;
        }

        &__list{
            list-style-type: none;
            
            li{
                @include montserratLight();

                font-size: 20px;
                color: #fff;
                cursor: pointer;
                line-height: 44px;
                max-width: 120px;

                span{
                    font-size: 18px;
                    padding-left: 8px;
                    color: $choiceGymImgText;
                }
            }
        }

        &__bars{
            position: absolute;
            top: 86px;
            right: 20px;

            span{
                font-size: 24px;
                color: $colorWhite;
                cursor: pointer;
            }
        }
    }

    @media only screen and(max-width: 576px){
        .hideNavigation{
            width: 340px;
        }
    }

</style>
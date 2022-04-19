<template>
    <section class="copyRight">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-4 wow animate__animated animate__fadeInLeft" data-wow-delay=".5s">
                    <div class="copyRight__left">
                        <p>
                            CopyRight © 2022 <span>Keep Your Dream</span>
                        </p>
                    </div>
                </div>
                <div class="col-xl-4 wow animate__animated animate__fadeInRight" data-wow-delay=".5s">
                    <div class="copyRight__right ">
                        <p>
                            Designed by <span>Voluychik Dmitro</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
@import '../../assets/styles/allFiles.scss';

.copyRight{

    padding: 20px 0 0px;
    background: #2e2e2e;

    &__left{
        
        p{  
            @include montserratLight();

            color: #818181;
            
            span{
                color: #dbdbdb;
            }
        }
    }

    &__right{

        p{  
            @include montserratLight();

            color: #818181;
            text-align: right;
            
            span{
                color: #dbdbdb;
            }
        }
    }
}

</style>
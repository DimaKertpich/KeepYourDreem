<template>
    <section class="traning">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="traning__title text-center">
                        <h3>There is always a choice</h3>
                        <div>aef</div>
                        <br>
                        <br>
                        <br>
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
}

</style>
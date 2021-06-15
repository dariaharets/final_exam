<template>
    <div id="page-3" class="page-3">
        <div class="page-3__title">
            <h3>OUR TEAM</h3>
        </div>
        <div class="page-3__content">
            <div class="page-3__image">
                <div class="page-3__image-picture">
                </div>
                <div class="page-3__image-figure figure">
                </div>
            </div>
            <div class="page-3__text">
                <h2>MASTER CHEF</h2>
                <div class="page-3__text-line line"></div>
                <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                </p>

                <p class="simple-text">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. 
                    Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. 
                    Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                </p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "Section3",
};
</script>
<style lang="scss" scoped>
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
.page-3{
    height: 675px;
    width: 100%;
    color: $white;
    background-image: url(../../../assets/background/bg-3.png);
    background-repeat: no-repeat;
    background-size: cover;

    &__title{
        width: 100%;
        height: 75px;
        padding-top: 45px;
        h3{
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.5em;
            text-align: center;
        }
    }
    
    &__content{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        
    }
    &__text{
            width: 600px;
            height: max-content;
            h2{
                font-family: 'Dosis', sans-serif;
                font-size: 36px;
                line-height: 48px;
                font-weight: 500;
                text-align: center;
            }
        }
        &__image{
            width: 590px;
            height: 475px;
            position: relative;
            display: flex;
            justify-content: flex-end;
            &-picture{
                width: 475px;
                height: 475px;
                background-image: url(../../../assets/img/page3.png);
                background-repeat: no-repeat;
                background-size: cover;
            
            }
            &-figure{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
            }
        }
        &__image:hover .figure{
            width: 200px;
            height: 200px;
            transform: rotate(-90deg);
            transition: 0.3s;
        }
    }
</style>

<template>
     <div id="page-2" class="page-2">
        <div class="page-2__text">
            <h2>ABOUT US</h2>
            <div class="page-2__text-line line"></div>
            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
            </p>

            <p class="simple-text">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. 
                Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. 
                Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
            </p>
        </div>
        <div class="page-2__image">
            <div class="page-2__image-picture"></div>
            <div class="page-2__image-figure figure"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Section2",
};
</script>
<style lang='scss' scoped>
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
    .page-2{
    height: 680px;
    width: 100%;
    background-color: $white;
    color: $black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &__text{
        width: 600px;
        height: max-content;
        h2{
            font-family: 'Dosis', sans-serif;
            font-size: 36px;
            line-height: 48px;
            font-weight: 700;
            text-align: center;
        }
    }
    &__image{
        width: 600px;
        height: 475px;
        position: relative;
        &-picture{
            width: 475px;
            height: 475px;
            background-image: url(../../../assets/img/page2.png);
            background-repeat: no-repeat;
            background-size: cover;
            
        }
        &-figure{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
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

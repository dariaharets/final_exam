<template>
<div>
  <splide :options="options">
    <splide-slide>
      <div id="page-5" class="page-5">
                <div class="page-5__title">
                    <h3>SPECIALTIES</h3>
                </div>
                <div class="page-5__content">
                    <div class="page-5__image">
                        <div class="page-5__image-picture"></div>
                        <div class="page-5__image-figure figure"></div>
                    </div>
                    <div class="page-5__text">
                        <h2>CHOCOLATE PANCAKES</h2>
                        <div class="page-5__text-line line"></div>
                        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                        </p>
                        <p class="simple-text">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. 
                                                    Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. 
                                                    Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                        </p>
                    </div>
                </div>
            </div>
    </splide-slide>
    <splide-slide>
      <div id="page-5" class="page-5">
                <div class="page-5__title">
                    <h3>SPECIALTIES</h3>
                </div>
                <div class="page-5__content">
                    <div class="page-5__image">
                        <div class="page-5__image-picture"></div>
                        <div class="page-5__image-figure figure"></div>
                    </div>
                    <div class="page-5__text">
                        <h2>FRIED NOODLES</h2>
                        <div class="page-5__text-line line"></div>
                        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                        </p>
                        <p class="simple-text">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. 
                                                    Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. 
                                                    Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                        </p>
                    </div>
                </div>
            </div>
    </splide-slide>
    <splide-slide>
      <div id="page-5" class="page-5">
                <div class="page-5__title">
                    <h3>SPECIALTIES</h3>
                </div>
                <div class="page-5__content">
                    <div class="page-5__image">
                        <div class="page-5__image-picture"></div>
                        <div class="page-5__image-figure figure"></div>
                    </div>
                    <div class="page-5__text">
                        <h2>CHICKEN WINGS</h2>
                        <div class="page-5__text-line line"></div>
                        <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
                        </p>
                        <p class="simple-text">Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. 
                                                    Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. 
                                                    Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.
                        </p>
                    </div>
                </div>
            </div>
    </splide-slide>
  </splide>
</div>

</template>

<script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  // import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // // optional style for arrows & dots
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
  import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
  // or
  import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
  export default {
    name: "Section5",
    components: {
      Splide,
      SplideSlide,
    },
    data() {
      return {
        options: {
          rewind : true,
          gap    : '1rem',
        },
      };
    },
  };
</script>
<style lang="scss">
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
.splide__arrovs {
  display: none;
}
.splide__arrow{
        display: none;
    }
.splide__pagination__page.is-active{
  transform: none;
  background-color: $white;

}
.splide{
  padding: 0;
  margin: 0 auto;
}

.page-5 {
  height: 675px;
  width: 100%;
  color: $white;
  background-image: url(../../../assets/background/bg-5.png);
  background-repeat: no-repeat;
  background-size: cover;
  
  &__title {
    width: 100%;
    height: 75px;
    padding-top: 45px;
    h3 {
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.5em;
      text-align: center;
    }
  }

  &__content {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  &__text {
    width: 600px;
    height: max-content;
    h2 {
      font-family: "Dosis", sans-serif;
      font-size: 36px;
      line-height: 48px;
      font-weight: 500;
      text-align: center;
    }
  }
  &__image {
    width: 590px;
    height: 475px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    &-picture {
      width: 475px;
      height: 475px;
      background-image: url(../../../assets/img/page5.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    &-figure {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  }
  &__image:hover .figure {
    width: 200px;
    height: 200px;
    transform: rotate(90deg);
    transition: 0.3s;
  }
}
@media all and (min-width: 330px) and (max-width: 768px){
  .page-5__image{
    display: none;
  }
  .page-5__text{
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>
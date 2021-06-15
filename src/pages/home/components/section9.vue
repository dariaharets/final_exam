<template>
     <div class="page-9">
        <div class="page-9__map">
            <div id="map"></div>
                <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxxvsitopmfx7FeFcq8ZGmthj_EmqjanQ&callback=initMap&libraries=&v=weekly" async></script>-->

        </div> 
        <footer>
            <span>© Copyright <span class="bold">Mindblister</span>  2019</span>
        </footer>
    </div>
</template>
<script>
export default {
  name: "Section9",
};

</script>
<style lang="scss" scoped>
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
.page-9 {
    &__map{
        height: 475px;
        width: 100%;
    }
    #map{
        height: 475px;
        width: 100%;
    }
    footer{
        background-color: $black;
        color: rgba(255, 255, 255, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        .bold{
            font-weight: 700;
        }
    }
}
</style>
<template>
    <div class="page-9">
        <div class="page-9__map">
            <div id="map">
                <GoogleMap id="map"
                api-key="AIzaSyBxxvsitopmfx7FeFcq8ZGmthj_EmqjanQ"
                :center="center"
                :zoom="15"
                >
                    <Marker :options="{ position: center }" />
                </GoogleMap>
            </div>
            

        </div> 
        <footer>
            <span>© Copyright <span class="bold">Mindblister</span>  2019</span>
        </footer>
    </div>
</template>
<script>
import { GoogleMap, Marker } from 'vue3-google-map'
export default {
    name: "Section9",
    components: { GoogleMap, Marker },
    setup() {
        const center = { lat: 40.689247, lng: -74.044502 }

        return { center }
    },
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
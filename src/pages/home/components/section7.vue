<template>
   <div id="page-7" class="page-7">
        <div class="page-7__title"><h3>PRIVATE EVENTS</h3></div>
        <div class="page-7__content">
            <div class="page-7__left">
                <div class="page-7__left-picture"></div>
                <div class="page-7__left-black"><span>WEDDINGS</span></div>
                <div class="page-7__figure-1 figure"></div>
            </div>
            <div class="page-7__right">
                <div class="page-7__right-picture">
                    <div class="page-7__right-black"><span>CORPORATE PARTIES</span></div>
                </div>
                
                <div class="page-7__figure-2 figure"></div>
            </div>
        </div>
        <div class="page-7__content-adaptive">
            <button>WEDDINGS</button>
            <button>CORPORATE PARTIES</button>
        </div>
        
        <a href="tel:+40729131637">
            <div class="page-7__contact">
                <span>For private events please call: 
                  <span class="bold">+40 729 131 637/+40 726 458 782</span> or use the contact form.
            </span>
            </div>
        </a>
    </div>
    <div id="gallery" class="page-7__gallery">
        <div class="page-7__gallery-1 item"></div>
        <div class="page-7__gallery-2 item"></div>
        <div class="page-7__gallery-3 item"></div>
        <div class="page-7__gallery-4 item"></div>
    </div>
</template>
<script>
export default {
  name: "Section7",
};
</script>
<style lang="scss" scoped>
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
  .page-7{
    height: 675px;
    width: 100%;
    background-image: url(../../../assets/background/bg-7.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &__title{
        color: $white;
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
    &__content-adaptive{
        display: none; 
        margin: 0 auto;
        button{
            height: 60px;
            width: 40%;
            color: $white;
            font-family: 'Dosis', sans-serif;
            font-size: 24px;
            font-weight: 500;
            background-color: $yellow;
            outline: none;
            border: none;
            border-radius: 5px;
        }
        button:hover{
            background-color: $black;
            border: solid 1px $white;
        }
    }
    &__content{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;  
    }
    &__left{
        width: 600px;
        height: 475px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        &-picture{
            width: 475px;
            height: 475px;
            background-image: url(../../../assets/img/picture-1.png);
            background-repeat: no-repeat;
            border-radius: 5px;
            background-size: 100%;
            box-shadow: 0px 0px 50px #000000;
        }    
        &-black{
            color: $white;
            font-family: 'Dosis', sans-serif;
            font-size: 24px;
            font-weight: 500;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            text-indent: 20px;
            position: absolute;
            top: 20px;
            right: 30px;
        }
    }
    &__left:hover &__figure-1{
        width: 200px;
        height: 200px;
        transition: 0.3s;
    }
    &__figure-1{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
    }

    &__right{
        width: 600px;
        height: 475px;
        position: relative;
        &-picture{
            height: 475px;
            width: 475px;
            background-image: url(../../../assets/img/picture-2.png);
            background-repeat: no-repeat;
            background-size: contain;
            border-radius: 5px;
            padding: 0;
            margin: 0;
            box-shadow: 0px 0px 50px #000000;
        }    
        &-black{
            position: absolute;
            writing-mode: vertical-lr;
            text-orientation: mixed;
            color: $white;
            font-family: 'Dosis', sans-serif;
            font-size: 24px;
            font-weight: 500;
            text-indent: 20px;
            left: 30px;
            bottom: 25px;
        }
    }
    &__right:hover &__figure-2{
        width: 200px;
        height: 200px;
        transition: 0.3s;
    }    
    &__figure-2{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }
    &__contact{
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        color: rgba(255, 255, 255, 0.5);
        font-size: 12px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        .bold{
            font-weight: bold;
        }
    }
    &__gallery{
        display: flex;
        justify-content: space-evenly;
        height: 360px;
        width: 100%;
        .item{
            height: 360px;
            width: 360px;
            background-repeat: no-repeat;
            background-size: cover;
            box-sizing: border-box;
        }
        .item:hover{
            border: 3px solid $yellow;
        }
        &-1{
            background-image: url(../../../assets/gallery/gal1.png);
        }
        &-2{
            background-image: url(../../../assets/gallery/gal2.png);
        }
        &-3{
            background-image: url(../../../assets/gallery/gal3.png);
        }
        &-4{
            background-image: url(../../../assets/gallery/gal4.png);
        }
    }
}
@media all and (min-width: 330px) and (max-width: 992px){
    .page-7__content{
        display: none;
    }
    .page-7__content-adaptive {
        width: 100%;
        display: flex;
        height: 475px;
        justify-content: space-evenly;
        align-items: center; 
        margin: 0 auto;
    }
}
</style>
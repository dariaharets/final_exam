<template>
    <div id="page-8" class="page-8">
        <div class="page-8__title">
            <h2>CONTACT</h2>
            <div class="page-8__text-line line"></div>
            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
            </p>
        </div>
        <form>
            <div class="page-8__inputs">
                <input type="text" placeholder="Name" required>
                <input type="text" placeholder="Email" required>
                <input type="text" placeholder="Phone" required>
            </div>
            
            <textarea placeholder="Message"></textarea>
            <div class="page-8__row">
                <a href="https://www.google.com/maps/search/5th+London+Boulevard/@62.4599075,7.6706633,14z">
                    <span><i class="fas fa-map-marker-alt"></i>  5th London Boulevard, U.K.</span>
                </a>
                <a href="tel:+40729131637">
                    <span><i class="fas fa-phone"></i>  +40 729 131 637/+40 726 458 782</span>
                </a>
                <a href="mailto:office@mindblister.com">
                    <span><i class="fas fa-envelope"></i>  office@mindblister.com</span>
                </a>
            <button value="submit">SEND MESSAGE</button>
            </div>  
        </form>
    </div>
</template>
<script>
export default {
  name: "Section8",
};
</script>
<style lang="scss" scoped>
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
.page-8{
    height: 675px;
    width: 100%;
    &__title{
        text-align: center;
        color: $black;
        h2{
            font-family: 'Dosis', sans-serif;
            font-size: 36px;
            line-height: 48px;
            font-weight: 700;
            text-align: center;
            padding-top: 100px;
        }
        p{
            width: 565px;
            margin: 0 auto;
        }
    }
    form{
        width: 1280px;
        height: 260px;
        margin: 50px auto;
        textarea{
            height: 120px;
            width: 100%;
            outline: none;
            background-color: $grey;
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            font-size: 14px;
            border-radius: 5px;
            border: none;
            padding: 15px;
            box-sizing: border-box;
            margin-top: 10px;
            resize: none;
        }
        textarea:focus{
            background-color: #fff;
            border: solid 2px $grey;
        }
    }
    &__inputs{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
            height: 60px;
            width: 420px;
            outline: none;
            background-color: $grey;
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            font-size: 14px;
            border-radius: 5px;
            border: none;
            padding-left: 15px;
            box-sizing: border-box;
        }
        input:focus{
            background-color: #fff;
            border: solid 2px $grey;
        }
    }
    &__row{
        width: 100%;
        height: 60px;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 12px;
        color: #33333377;
        i{
            color: $yellow;
        }
        button{
            width: 640px;
            height: 60px;
            background-color: $yellow;
            color: $white;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            font-size: 12px;
            border: none;
            border-radius: 5px;
        }
        button:hover{
            font-size: 14px;
        }
    }    
}
</style>
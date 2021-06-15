<template>
    <div id="page-4" class="page-4">
        <div class="page-4__text">
            <h2>BOOK A TABLE</h2>
            <div class="page-4__text-line line"></div>
            <form method="POST">
                <div class="form">
                <input type="text" placeholder="Name" required>
                <input type="text" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required>
                <input type="text" placeholder="Phone" required>
                <select required>
                    <option class="first">People</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </select>

                <input type="text" placeholder="Date mm/dd" pattern="\d{1,2}/\d{1,2}" required>
               
                <select required>
                    <option class="first">Time</option>
                    <option>8:00</option>
                    <option>8:30</option>
                    <option>9:00</option>
                    <option>9:30</option>
                    <option>10:00</option>
                    <option>10:30</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>1:00</option>
                    <option>2:00</option>
                    <option>3:00</option>
                </select>
                </div>
                <button>BOOK NOW</button>
            </form>
        </div>    
        <div class="page-4__image">
            <div class="page-4__image-picture"></div>
            <div class="page-4__image-figure figure"></div>
        </div>
        <p class="page-4__time">Mon - Fri:<span class="bold">8PM - 10PM</span> , Sat - Sun:<span class="bold">8PM - 3AM</span>, <a href="tel:+40729131637">Phone: +40 729 131 637/+40 726 458 782</a></p>
    </div>
</template>
<script>
export default {
  name: "Section4",
};
</script>
<style lang="scss" scoped>
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
.page-4{
    height: 675px;
    width: 100%;
    background-color: $white;
    color: $black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
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
        form{
            display: grid;
        }
        .form{
            display: grid;
            grid-template-columns: 277px 277px;
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            margin: 0 auto;
            input{
                height: 60px;
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
            select{
                height: 60px;
                outline: none;
                
                font-family: 'Open Sans', sans-serif;
                font-weight: 400;
                font-size: 14px;
                border-radius: 5px;
                border: none;
                padding-left: 15px;
                padding-right: 15px;
                color: rgba(51, 51, 51, 0.541);
                background: url(../../../assets/img/select.png) no-repeat 95% 50%;
                -webkit-appearance: none; 
                background-color: $grey;
            }
            input:focus{
                background-color: #fff;
                border: solid 2px $grey;
            }
            select:focus{
                background-color: #fff;
                border: solid 2px $grey;
            }
            
        }
        button{
                margin: 10px auto;
                width: 564px;
                height: 60px;
                background-color: $yellow;
                border: none;
                box-sizing: border-box;
                font-family: 'Open Sans', sans-serif;
                font-weight: 700;
                font-size: 12px;
                line-height: 20px;
                color: $white;
                border-radius: 5px;
        }
        button:hover{
            font-size: 14px; 
        }
    }
    &__image{
        width: 590px;
        height: 475px;
        position: relative;
        display: flex;
        &-picture{
            width: 475px;
            height: 475px;
            background-image: url(../../../assets/img/page4.png);
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
    &__time{
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        color: rgba(51, 51, 51, 0.5);
        font-size: 12px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        .bold{
            font-weight: bold;
        }
    }
}
@media all and (min-width: 330px) and (max-width: 1200px){
    .page-4{
      justify-content: space-around;
      &__text{
        width: 80%;
        margin: 0 auto;
        .form{
            grid-template-columns: 300px;
            grid-row-gap: 10px;
        }
        button{
            width: 80%;

        }
        
      }
      &__image{
        display: none;
      }
      &__time{
          display: none;
      }
    }
}
</style>
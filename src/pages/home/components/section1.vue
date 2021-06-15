<template>
  <div class="page-1" v-bind:class="{scrolled: scrollTop >= 800}">
    <header>
      <div class="page-1__left">
        <a href="#">
          <div class="page-1__left-menu">
            <span>HOME</span>
          </div>
        </a>
        <a href="#page-2">
          <div class="page-1__left-menu">
            <span>ABOUT</span>
          </div>
        </a>
        <a href="#page-3">
          <div class="page-1__left-menu">
            <span>TEAM</span>
          </div>
        </a>
        <a href="#page-4">
          <div class="page-1__left-menu">
            <span>BOOKING</span>
          </div>
        </a>

      </div>
      <a href="#"><div class="page-1__logo" :style="style"></div></a>
      <div class="page-1__logo logo-adaptive" :style="style" @click="menuOpened=!menuOpened"></div>

      <div class="page-1__right">
        <a href="#page-6">
          <div class="page-1__right-menu">
            <span>MENU</span>
          </div>
        </a>
        <a href="#gallery">
          <div class="page-1__right-menu">
            <span>GALERIE</span>
          </div>
        </a>
        <a href="#page-7">
          <div class="page-1__right-menu">
            <span>EVENTS</span>
          </div>
        </a>
        <a href="#page-8">
          <div class="page-1__right-menu">
            <span>CONTACT</span>
          </div>
        </a>
      </div>
    </header>
      <div class="page-1__content">
          <div class="page-1__time">
              <p>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
          </div>
          <div class="page-1__text">
              <h3>RESTAURANT</h3>
              <h1>HUNGRY PEOPLE</h1>
              <div class="page-1__text-line line"></div>
              <div class="page-1__text-buttons">
                  <a href="#page-4"><div><button>BOOK TABLE</button></div></a>
                  <a href="#page-6"><div><button>EXPLORE</button></div></a>
              </div>
          </div>
          <div class="page-1__media">
              <a href="https://www.facebook.com">
                  <div class="page-1__media-icon facebook"></div>
              </a>
              <a href="https://twitter.com">
                  <div class="page-1__media-icon twitter"></div>
              </a>
              <a href="https://www.instagram.com">
                  <div class="page-1__media-icon instagram"></div>
              </a>
              
          </div>
      </div>
      <div class="opened-menu" v-bind:class="{opened: menuOpened}">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>TEAM</p>
        <p>BOOKING</p>
        <p>MENU</p>
        <p>GALERIE</p>
        <p>EVENTS</p>
        <p>CONTACT</p>
      </div>
      <a href="#page-2">
          <div class="scroll"></div>
      </a>
  </div>
</template>

<script>
export default {
  name: "Section1",
  props: ['scrollTop'],
  data(){
    return{
      menuOpened: false
    }
  },
  computed: {
    style () {
      const some = 150 - this.scrollTop / 10;
      return `
        width: ${(some < 50 ? 50 : some)}px;\n
        height: ${(some < 50 ? 50 : some)}px;\n
        transform: rotate(${this.scrollTop / 5}deg);
      `;
    },
  }
};
</script>

<style lang="scss" scoped>
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
.page-1 {
    width: 100%;
    height: 800px;
    background-image: url(../../../assets/background/bg-1.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    header{
        display: flex;
        width: 100%;
        height: 120px;
        justify-content: space-around;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 12px;
        color: $white;
        line-height: 18px;
        text-align: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
    }
    &.scrolled {
      header {
        height: 100px;
        padding: 0;
        margin: 0 auto;
        background-color: rgba(0, 0, 0, 0.486);
      }
      .page-1__left{
        padding-top: 20px;
        height: 40px;
        a{
          height: 40px;
        }
      }
      .page-1__right{
        padding-top: 20px;
      } 
    }

    &__left {
        display: flex;
        justify-content: space-between;
        width: 37%;
        height: 100px;
        align-items: center;
        &-menu {
            width: 25%;
            height: 40px;
            box-sizing: border-box;
        }
        &-menu:hover{
            color: $yellow;
        }
    }

    &__right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 37%;
        height: 100px;
        &-menu {
            width: 25%;
            height: 40px;
        }
        &-menu:hover{
            color: $yellow;
        }
    }

    &__logo {
      height: 150px;
      width: 150px;
      background-image: url(../../../assets/img/logo.png);
      background-repeat: no-repeat;
      background-position: center;
      padding-top: 25px;
      background-size: contain;
    }
    .logo-adaptive {
    display: none;
    }
    &__content {
        width: 100%;
        color: $white;
        margin: 0 auto;
        padding-top: 325px;
    }
    &__time{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
        transform: rotate(-90deg);
        height: 60px;
    }
    &__text{
        width: 70%;
        height: max-content;
        margin: 0 auto;
        h3{
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.5em;
            text-align: center;
        }
        h1{
            font-family: 'Dosis', sans-serif;
            font-size: 96px;
            font-weight: 700;
            text-align: center;
            margin-top: 30px;
        }
        &-line{
            margin: 20px auto;
        }
        &-buttons{
            display: flex;
            justify-content: space-between;
            width: 440px;
            height: 60px;
            align-items: center;
            margin: 30px auto;
            button {
                box-sizing: border-box;
                background-color: transparent;
                outline: none;
                border: 1px solid rgba(255, 255, 255, 0.5);
                border-radius: 5px;
                color: $white;
                width: 200px;
                height: 60px;
                font-family: 'Open Sans', sans-serif;
                font-weight: 700;
                font-size: 12px;
                line-height: 14px;
            }
            button:hover{
                background-color: $yellow;
                border: none;
            }
        }
        
    }
    &__media{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 80px;
        width: 60px;
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-icon{
            height: 60px;
            width: 60px;
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            background-repeat: no-repeat;
            background-position: center;
        }
        .facebook {
            background-image: url(../../../assets/media/facebook.png);
        }
        .facebook:hover{
            background-image: url(../../../assets/media/facebook-active.png);
        }
        .twitter{
            background-image: url(../../../assets/media/twitter.png);
        }
        .twitter:hover{
            background-image: url(../../../assets/media/twitter-active.png);
        }
        .instagram{
            background-image: url(../../../assets/media/instagram.png);
        }
        .instagram:hover{
            background-image: url(../../../assets/media/instagram-active.png);
        }
    }
    .scroll{
        margin: 80px auto;
        height: 60px;
        width: 60px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url(../../../assets/img/scroll.png);
        
    }
  
  }  

.opened-menu.opened{
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  
}
.opened-menu {
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 150px;
  width: 100vw;
  background-color: $black;
  color: $white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  display: none;
}

@media all and (min-width: 992px) and (max-width: 1200px) {
  .page-1__logo{
    height: 100px;
    width: 100px;
    background-size: 100%;
    padding-top: 0;
    margin: 0 auto;
  }
  header{
    margin-top: 25px;
  }
  .page-1__text{
    h1{
      font-size: 90px;
    }
  }
}
@media all and (min-width: 768px) and (max-width: 992px){
  .page-1__logo{
    background-size: 100%;
    padding-top: 0;
    margin: 0 auto;
  }
  header{
    margin-top: 25px;
  }
  .page-1__text{
    h1{
      font-size: 75px;
    }
  }
  .page-1__media{
    display: flex;
    flex-direction: row;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 60px;
  }
  .page-1__time{
    display: none;
  }
}
@media all and (min-width: 500px) and (max-width: 768px){
  .page-1__left{
    display: none;
  }
  .page-1__right{
    display: none;
  }
  header{
    justify-content: space-between;
  }
  
  
  .scroll{
     margin: 40px auto;
  }
  .page-1__logo{
    display: none;
  }
  .page-1__logo.logo-adaptive {
    display: block;
  }
  
  header{
    margin-top: 25px;
  }
  .page-1__text{
    h1{
      font-size: 75px;
    }
    &-buttons{
      width: 400px;
      justify-content: space-evenly;
      button{
        width: 150px;
        height: 50px;
      }
    }
  }
  .page-1__media{
    display: flex;
    flex-direction: row;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 60px;
  }
  .page-1__time{
    display: none;
  }
}

@media all and (min-width: 500px) and (max-width: 768px){
  .page-1__left{
    display: none;
  }
  .page-1__right{
    display: none;
  }
  header{
    justify-content: space-between;
  }
  .scroll{
     margin: 40px auto;
  }
  .page-1__logo{
    height: 80px;
    width: 80px;
    background-size: 100%;
    padding-top: 0;
    margin: 0 auto;
  }
  header{
    margin-top: 25px;
  }
  .page-1__logo{
    display: none;
  }
  .page-1__logo.logo-adaptive {
    display: block;
  }
  .page-1__text{
    h1{
      font-size: 75px;
    }
    &-buttons{
      width: 400px;
      justify-content: space-evenly;
      button{
        width: 150px;
        height: 50px;
      }
    }
  }
  .page-1__media{
    display: flex;
    flex-direction: row;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 60px;
  }
  .page-1__time{
    display: none;
  }
}
@media all and (min-width: 330px) and (max-width: 500px){
   .page-1__logo{
    height: 80px;
    width: 80px;
    background-size: contain;
    padding-top: 0;
    margin: 0 auto;
  }
  header{
    margin-top: 25px;
  }
  .page-1__text{
    h1{
      font-size: 75px;
    }
  }
  .page-1__media{
    display: flex;
    flex-direction: row;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 60px;
  }
  .page-1__time{
    display: none;
  }
  .page-1__left{
    display: none;
  }
  .page-1__right{
    display: none;
  }
  .page-1__logo{
    display: none;
  }
  .page-1__logo.logo-adaptive {
    display: block;
  }
  header{
    justify-content: space-between;
  }
  .burger{
    display: block;
  }
  .scroll{
     margin: 40px auto;
  }
  .page-1__text{
    h1{
      font-size: 60px;
    }
    &-buttons{
      width: 150px;
      flex-direction: column;
      justify-content:center;
      height: max-content;
      button{
        width: 150px;
        height: 50px;
      }
    }
  }
}
</style>
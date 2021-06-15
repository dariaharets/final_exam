<template>
    <div id="page-6" class="page-6">
        <div class="page-6__title">
            <h2>DELICIOUS MENU</h2>
            <div class="page-5__text-line line"></div>
            <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.
            </p>
        </div>
        
        <div class="page-6__menu">
            <nav>
                <div v-for="(item, index) of menuSectionsList" v-bind:key="item.name" v-on:click="selectedMenu = index">
                    <span>{{item.name}}</span>
                </div>
            </nav>

            <MenuList v-bind:menuItemList="menuSectionsList[selectedMenu].menuItems" />
        </div>
    </div>
</template>
<script>
import MenuList from './menu-list.vue';
import { menuData } from './data';

export default {
  name: "Section6",
  components: { MenuList },
  data() {
      return {
          menuSectionsList: menuData,
          selectedMenu: 0,
      }
  }
};
</script>
<style lang="scss">
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
.page-6{
    height: 920px;
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
    &__menu{
        nav{
            width: 840px;
            height: 50px;
            margin: 50px auto;
            display: flex;
            justify-content: space-evenly;
            font-size: 12px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;

            div{
                width: 120px;
                height: 50px;
                border-right: 1px solid rgba(51, 51, 51, 0.2);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .drinks{
                border: none;
            }
            div:hover{
                background-color: rgba(51, 51, 51, 0.11);
            }
        }
        &-list{
                display: grid;
                width: 100%;
                justify-content: center;
                grid-template-columns: 363px 363px 363px;
                grid-column-gap: 87px;
                grid-row-gap: 10px;
                margin: 0 auto;
            &-item{
                    height: 66px;
                    font-family: 'Dosis', sans-serif;
                    font-size: 18px;
                    font-weight: 500;
                    .about{
                    font-size: 12px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 400;
                    }
            }
        }
    }
}
</style>
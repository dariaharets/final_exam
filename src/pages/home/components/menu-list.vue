<template>
    
    <div class="page-6__menu-list">
        <MenuItem
            v-for="(menuItemData, index) in menuItemList"
            v-bind:menuItemData="menuItemData"
            v-bind:key="index" />
    </div>
</template>

<script>
import MenuItem from './menu-item.vue';
export default {
  name: 'MenuList',
  components: {
    MenuItem
  },
  props: ['menuItemList'],
}
</script>

<style lang="scss">

</style>

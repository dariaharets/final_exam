<template>
    
    <div class="page-6__menu-list">
        <MenuItem
            v-for="menuItemData in menuItemList"
            v-bind:menuItemData="menuItemData"
            :key="menuItemData.title" />
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

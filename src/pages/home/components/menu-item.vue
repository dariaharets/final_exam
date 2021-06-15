<template>
    <div class="page-6__menu-list-item">
        <p>{{menuItemData.title}}</p>
        <p class="about">{{menuItemData.about}}</p>
    </div>
</template>

<script>

export default {
  name: 'MenuItem',
  props: {
      menuItemData: {
          type: Object,
          required: true,
      },
  },

}
</script>

<style lang="scss">

</style>

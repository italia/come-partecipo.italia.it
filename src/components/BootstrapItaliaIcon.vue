<template>
  <svg>
    <use :xlink:href="`${require('@/assets/sprite.svg')}#it-${iconName}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'BootstrapItaliaIcon',
  props: {
    icon: Array
  },
  computed: {
    iconName() {
      return this.icon[1]
    },
  }
}
</script>

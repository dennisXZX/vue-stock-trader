<template>
    <div>
        <re-portfolio-item
                v-for="portfolioItem in portfolio"
                :portfolioItem="portfolioItem"
                :key="portfolioItem.id"></re-portfolio-item>
    </div>
</template>

<script>
    import Stock from './PortfolioItem.vue'

  export default {
    components: {
      rePortfolioItem: Stock
    },
    computed: {
      portfolio() {
        return this.$store.getters.portfolio
      }
    }
  };
</script>

<style scoped>

</style>
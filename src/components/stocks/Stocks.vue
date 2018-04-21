<template>
    <div>
        <re-stock
                v-for="stock in stocks"
                :stock="stock"
                :key="stock.id"></re-stock>
    </div>
</template>

<script>
  import Stock from './StockItem.vue'

  export default {
    components: {
      reStock: Stock
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style scoped>

</style>
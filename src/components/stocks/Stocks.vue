<template>
    <div>
        <re-stock
                v-for="stock in stocks"
                :stock="stock"
                :key="stock.id"></re-stock>
    </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    components: {
      reStock: Stock
    },
    data() {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 110 },
          { id: 2, name: 'ASX', price: 210 },
          { id: 3, name: 'AWS', price: 10 },
          { id: 4, name: 'Apple', price: 410 },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
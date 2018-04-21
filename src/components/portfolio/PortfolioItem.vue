<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <!-- panel header -->
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ portfolioItem.name }}
                    <small>( Price: {{ portfolioItem.price }} | Quantity: {{ portfolioItem.quantity }} )</small>
                </h3>
            </div>

            <!-- panel body -->
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model.number="quantity" />
                </div>

                <div class="pull-right">
                    <button
                            class="btn btn-primary"
                            @click="placeSellOrder"
                            :disabled="quantity <= 0 || !Number.isInteger(quantity)">
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['portfolioItem'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      placeSellOrder() {
        const order = {
          stockId: this.portfolioItem.id,
          stockPrice: this.portfolioItem.price,
          quantity: this.quantity
        }

        this.$store.dispatch('sellStock', order)
        this.quantity = 0
      }
    }
  }
</script>

<style scoped>

</style>

<style scoped>

</style>
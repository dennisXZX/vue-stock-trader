<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
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
                            placeholder="Quantity to sell"
                            v-model.number="quantity"
                            :class="{ danger: insufficientQuantity }" />
                </div>

                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click="placeSellOrder"
                            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
                        {{ insufficientQuantity ? 'Not Enough' : 'Sell' }}
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
    computed: {
      insufficientQuantity() {
        return this.quantity > this.portfolioItem.quantity
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
    .danger {
        border: 1px solid red;
    }
</style>
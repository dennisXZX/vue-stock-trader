<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- logo -->
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <!-- menu on the left -->
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                </ul>

                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>

                <!-- menu on the right -->
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li
                        class="dropdown"
                        :class="{ open: isDropdownOpen }"
                        @click="isDropdownOpen = !isDropdownOpen"
                        @mouseleave="isDropdownOpen = false">
                        <a href="#"
                           class="dropdown-toggle"
                           data-toggle="dropdown"
                           role="button"
                           aria-haspopup="true"
                           aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds
      }
    },
    methods: {
      endDay() {
        this.$store.dispatch('randomizeStocks')
      },
      saveData() {
        // retrieve data from the store
        const data = {
          funds: this.$store.getters.funds,
          portfolio: this.$store.getters.portfolio,
          stocks: this.$store.getters.stocks
        }

        // store the data into firebase database
        this.$http.put('data.json', data)
      },
      loadData() {
        this.$store.dispatch('fetchData')
      }
    }
  };
</script>

<style scoped>

</style>
import Vue from 'vue'

export const fetchData = (context) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks
        const funds = data.funds
        const portfolio = data.portfolio

        const portfolioObj = {
          portfolio,
          funds
        }

        context.commit('SET_STOCK', stocks)
        context.commit('SET_PORTFOLIO', portfolioObj)
      }
    })
}
const state = {
  funds: 10000,
  portfolio: []
}

const getters = {
  portfolio(state, getters) {
    return state.portfolio.map(stockInPortfolio => {
      const record = getters.stocks.find(stock => stock.id === stockInPortfolio.id )

      return {
        id: stockInPortfolio.id,
        quantity: stockInPortfolio.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

const mutations = {
  'SET_PORTFOLIO'(state, portfolioObj) {
    state.funds = portfolioObj.funds
    state.portfolio = portfolioObj.portfolio ? portfolioObj.portfolio : []
  },
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    // check if the stock is already in portfolio
    const stockRecord = state.portfolio.find(stockInPortfolio => stockInPortfolio.id === stockId )

    // update portfolio
    if (stockRecord) {
      stockRecord.quantity += quantity
    } else {
      state.portfolio.push({
        id: stockId,
        quantity: quantity
      })
    }

    // update the funds
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    // check if the stock is already in portfolio
    const stockRecord = state.portfolio.find(stockInPortfolio => stockInPortfolio.id === stockId)

    // update portfolio
    if (stockRecord.quantity > quantity) {
      stockRecord.quantity -= quantity
    } else {
      state.portfolio = state.portfolio.filter(stockInPortfolio => stockInPortfolio.id !== stockId)
    }

    // update the funds
    state.funds += stockPrice * quantity
  }
}

const actions = {
  buyStock(context, order) {
    context.commit('BUY_STOCK', order)
  },
  sellStock(context, order) {
    context.commit('SELL_STOCK', order)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
import axios from 'axios'
import $ from 'jquery'

export default ({
  namespaced: true,
  state: {
    product: {},
    productId: '',
    productList: [],
    tempProduct: {},
    filterProducts: [],
    categories: [],
    recommendProducts: []
  },
  actions: {
    getProductList (context, { isFront, page = 1 }) {
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUTOMPATH}/admin/products?page=${page}`
      if (isFront) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUTOMPATH}/products/all`
      }
      context.commit('IS_LOADING', true, { root: true })
      axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCT_LIST', response.data.products)
          if (isFront) {
            context.commit('CATEGORIES')
            context.commit('FILTER_PRODUCTS')
          } else {
            context.commit('PAGE', response.data.pagination, { root: true })
          }
        }
      })
      context.commit('IS_LOADING', false, { root: true })
    },
    getProduct (context) {
      const prouctId = context.state.productId
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUTOMPATH}/product/${prouctId}`
      context.commit('IS_LOADING', true, { root: true })
      axios.get(url).then(async (response) => {
        if (response.data.success) {
          context.commit('PRODUCT', response.data.product)
          context.commit('IS_LOADING', false, { root: true })
          context.commit('RECOMMEND_PRODUCTS', response.data.product.category)
        }
      })
    },
    updataProduct (context, isCreate) {
      const data = context.state.tempProduct
      let apiMethod = 'post'
      let apiUrl = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUTOMPATH}/admin/product`
      if (!isCreate) {
        apiMethod = 'put'
        apiUrl = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUTOMPATH}/admin/product/${data.id}`
      }
      context.commit('ITEM_LOADING_ID', true, { root: true })
      axios[apiMethod](apiUrl, { data }).then((response) => {
        if (response.data.success) {
          context.dispatch('getProductList', { isFront: false })
          context.dispatch('alertMessageModules/updateMessage',
            { message: response.data.message, status: 'success' },
            { root: true })
        } else {
          context.dispatch('alertMessageModules/updateMessage',
            { message: response.data.message, status: 'danger' },
            { root: true })
        }
        context.commit('ITEM_LOADING_ID', '', { root: true })
        $('#updataModal').modal('hide')
      })
    },
    delProduct (context) {
      const productId = context.state.tempProduct.id
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUTOMPATH}/admin/product/${productId}`
      context.commit('ITEM_LOADING_ID', true, { root: true })
      axios.delete(url).then((response) => {
        if (response.data.success) {
          context.dispatch('getProductList', { isFront: false })
          context.dispatch('alertMessageModules/updateMessage',
            { message: response.data.message, status: 'success' },
            { root: true })
        } else {
          context.dispatch('alertMessageModules/updateMessage',
            { message: response.data.message, status: 'danger' },
            { root: true })
        }
        context.commit('ITEM_LOADING_ID', '', { root: true })
        $('#delModal').modal('hide')
      })
    }
  },
  mutations: {
    PRODUCT (state, payload) {
      state.product = payload
    },
    PRODUCT_LIST (state, payload) {
      state.productList = payload
    },
    CATEGORIES (state) {
      state.categories = state.productList
        .map((item) => item.category)
        .filter((item, index, arr) => arr.indexOf(item) === index)
    },
    FILTER_PRODUCTS (state) {
      state.filterProducts = state.productList.filter((item) => item.is_enabled)
    },
    PRODUCT_ID (state, payload) {
      state.productId = payload
    },
    RECOMMEND_PRODUCTS (state, payload) {
      state.recommendProducts = state.filterProducts
        .filter((item) => (item.category === payload) && (item.id !== state.productId))
    }
  },
  getters: {
    product: (state) => state.product,
    productList: (state) => state.productList,
    categories: (state) => state.categories,
    filterProducts: (state) => state.filterProducts,
    tempProduct: (state) => state.tempProduct,
    productId: (state) => state.productId,
    recommendProducts: (state) => state.recommendProducts
  }
})

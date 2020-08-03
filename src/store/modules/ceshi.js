export default {
    namespaced: true,
    state: {
        msg: 123
    },
    mutations: {
        change(state, num) {
            state.msg += num
        }
    },
}
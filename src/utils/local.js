export default {
    get(key) {
        return JSON.parse(winodw.localStorage.getItem(key))
    },
    set(key, value) {
        return winodw.localStorage.setItem(key, JSON.stringify(value))
    },
    remove(key) {
        return winodw.localStorage.removeItem(key)
    },
    clear() {
        return winodw.localStorage.clear()
    }
}
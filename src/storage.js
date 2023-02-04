import { crypt } from "./crypt"
export const storage = {
    pull(key) {
        var content = localStorage.getItem(crypt.encrypt(key))
        if (content == undefined | content == null | content == '') {
            return null
        }
        return crypt.aesdecrypt(content)
    },

    push(key, value) {
        var newKey = crypt.encrypt(key)
        var newValue = crypt.aesencrypt(value)

        localStorage.setItem(newKey, newValue)
    },

    remove(key) {
        var encKey = crypt.encrypt(key)

        localStorage.removeItem(encKey)
    },
}



const AES = require('crypto-js/aes');
var CryptoJS = require("crypto-js");

export const crypt = {
    encrypt(value) {
        if (value == null) {
            return
        }
        try {
            var result = Buffer.from(value, "utf8").toString("base64");
        } catch (error) {
            console.log("1")
        }
        return result
    },

    aesdecrypt(key) {
        try {
            var result = AES.decrypt(
                key,
                process.env.VUE_APP_APP_KEY,
            ).toString(CryptoJS.enc.Utf8);
        } catch (error) {
            console.log("2")
        }
        return result
    },

    decrypt(key) {
        try {
            var result = Buffer.from(key, "base64").toString()
        } catch (error) {
            console.log("3")
        }
        return result
    },

    aesencrypt(value) {
        if (value == null) {
            return
        }
        try {
            var result = AES.encrypt(
                value,
                process.env.VUE_APP_APP_KEY,
            ).toString();
        } catch (error) {
            console.log("4")
        }
        return result
    },
}
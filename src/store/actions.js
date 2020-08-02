import Vuex from "vuex"
import Vue from "vue"
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)


const actions = {
    setIsLogin(context) {
        context.commit("setIsLogin", window.localStorage.getItem("isLogin") === "true")
    },

    getMessageCount(context) {
        axios.post("/api/user/message/unread").then(res => {
            context.commit("setMessageCount", res.data.data)
        }).catch(err => {
            console.log(err)
        })
    },

    // 用户的登录
    login(context, data) {
        return new Promise((resolve, reject) => {
            axios.post("/api/user/login",
                qs.stringify(data)
            ).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            })
        })
    },
}

export default actions;

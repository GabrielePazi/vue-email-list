"use strict"

const app = Vue.createApp({
  data() {
    return {
      randomMails: []
    }
  },
  methods: {
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((axiosResp) => {
          let newMail = axiosResp.data.response

          this.randomMails.push(newMail)
        })
    }
  }
}).mount('#app')
<template>
</template>

<script>

  export default {
    name: 'Auth',
    methods: {
      init(){

        let path = window.location.href;
        let pathArr = path.split('=');

        // path code 값을 가져와 보내기
        this.$http.post('http://34.97.179.121/oauth/access_token', {
          grant_type: 'authorization_code',
          code: pathArr[1],
          client_id: 'noteClientAuth',
          scope: 'read',
          client_secret: 'testSecret3',
          redirect_uri: 'http://localhost:8081/auth'
        })
          .then(res => {
            this.$store.state.token = res;
          })
          .catch(err => {
            console.log(err);
          })

      }

    },
    created(){
        this.init();

    }
  }
</script>

<style scoped>

</style>

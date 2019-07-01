<template>
</template>

<script>

  export default {
    name: 'Auth',
    data(){
           return{
               req: window.location.pathname
           }
    },
    watch:{
            req: function () {
                    let path = window.location.pathname;
                    let pathArr = path.split('&');

                    // path code 값을 가져와 보내기
                    this.$http.post('http://34.97.179.121/oauth/access_token', {
                            params: pathArr[1]
                    })
                    .then(res => {
                            console.log(res);
                            this.$store.state.token = res;
                    })
                    .catch(err => {
                            console.log(err);
                    })
            }
    }
  }
</script>

<style scoped>

</style>

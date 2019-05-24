<template>
    <div>
        <h2 class="logo">Note</h2>
        <div class="sub-text-aling">
            <h1 class="sub-title">글씨 쓰는 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />사람 .</h1>
            <h4 class="sub-title-small">
                꿈은 머리속에 머물러있는 명사가 아니라 <br />
                다리로 발품을 팔고, 손으로 움직이는 동사입니다.
            </h4>
            <b-button pill class="button-aling" @click="login()">Login</b-button>
            <router-link to="/signup"><b-button pill class="button-aling sign-up">Signup</b-button></router-link>
        </div>
        <div class="thumbnail-wrapper">
            <img src="../../assets/wellcomefile.png">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'MainPage',
    methods: {
      login: function () {
      //   this.$auth.login({ email, password }).then(function () {
      //   alert('로그인 성공');
      //   })

        this.$auth.get()
          .then(authCode => {
            //on success
            return this.$http.post('http://your-backend-server.com/auth/google', { code: authCode, redirect_uri: 'postmessage' })
          })
          .then(response => {
            //and then
          })
          .catch(error => {
            //on fail do something
          });
      }

    }
  }
</script>

<style lang="scss" scoped>
    .logo {
        font-size: -webkit-xxx-large;
        margin-left: 5%;
        position: fixed;
        top: 0px;
        left: 0px;
    }
    .thumbnail-wrappper { width: 25%; }

    img {
        max-width: 100%;
        height: auto;
        position: fixed;
        bottom: 0px;
        left: 0px;
    }
    .sub-title {
        text-decoration:line-through;
        text-align: left;
        font-size: 100px;
        font-weight: 100;
    }
    .sub-title-small{
        font-weight: bolder;
        color: #585858;
        margin-top: 15%;
        text-align: left;
        position: relative;
        left: 100px;
    }
    .sub-text-aling{
        position: fixed;
        right: 200px;
        max-height: 100%;
        top: 150px;
        max-width: 100%;
    }
    .button-aling{
        margin-top: 8%;
        position: fixed;
        right: 150px;
        width: 15%;
        height: 5%;
        background-color: gainsboro;
        border: 0;
        color: black;
    }
    .sign-up{
        margin-right: 18%;
        /*회원가입 페이지 버튼 숨기기*/
        visibility: hidden;
    }
</style>


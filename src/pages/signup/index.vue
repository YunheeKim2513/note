<template>
    <div>
        <h1 class="main-text">Sign Up</h1>
        <hr color="darkgray" size="5px" width="84%">
        <b-container class="form-structure" fluid>
            <b-row class="my-1" v-for="type in types" :key="type">
                <b-col sm="9" :class="`${type}`=='tel' || `${type}`=='number' ? buttonCtrl : ''">
                    <b-col sm="3">
                        <label :for="`type-${type}`">{{ type }}</label>
                    </b-col>
                    <b-form-input :id="`type-${type}`" :type="type" :placeholder="`${type}` == 'tel'?'please enter without`-`.. ':`${type}..`"></b-form-input>
                </b-col>
                <b-button v-if="`${type}`=='tel'" variant="primary" class="btn-width">Send</b-button>
                <b-button v-if="`${type}`=='number'" variant="primary" class="btn-width">Input</b-button>
            </b-row>
            <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="check-effect"
            >
                <span class="emphasize">이용약관</span> 에 동의합니다.
            </b-form-checkbox>
        </b-container>
        <div class="submitBtn">
            <b-button variant="primary">SingIn</b-button>
            <b-button variant="secondary">Cancel</b-button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SignUp',
    data() {
      return {
        types: [
          'email',
          'password',
          'password confirm',
          'name',
          'tel',
          'number'
        ],
        buttonCtrl: 'width-ctrl'
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
    .main-text{
        text-align: left;
        margin-left: 8%;
    }
    .form-structure{
        max-width: 65%;
    }
    @media (min-width: 576px){
        .col-sm-3 {
            -ms-flex: 0 0 25%;
            max-width: 20%;
            text-align: left;
            padding-left: 0px;
            padding-top: 1%;
        }
        .col-sm-9 {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .width-ctrl {
            flex: 0 0 84%;
            max-width: 84%;
        }
    }
    .btn-width {
        -webkit-flex: 1;
        flex: 0 0 15%;
        height: 12%;
        margin-top: 44px;
        margin-bottom: 0px;
        background-color: #3498DB;
        border: #3498DB;
    }
    .emphasize {
        text-decoration: underline;
        color: #3498DB;
    }
    .check-effect {
        text-align: left;
    }
    .submitBtn {
        max-width: 100%;
        width: 100%;
        margin-top: 5%;
        button:nth-child( 1 ){
            background-color: #3498DB;
            width: 10%;
            margin-right: 1%;
        }
        button:nth-child( 2 ){
            width: 10%;
            margin-left: 1%;
        }
    }
</style>

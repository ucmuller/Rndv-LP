<template>
      <b-navbar class="custom-navbar fixed" toggleable="lg">
        <b-navbar-brand class="logo_a">
          <router-link to="/">
            <img class="navbar-brand" src="@/assets/img/RNDV_logo.png" width="60%" id="logo_custom" alt="logo">
          </router-link>
          <!-- <img v-if="width < 768" src="@/assets/img/btn/login_button.png" v-on:click="ankerLink('https://reserve-beta.firebaseapp.com/signinfromlp')" class="subscribe-button" alt=""> -->
          <!-- <div class="subscribe-button" v-on:click="ankerLink('https://reserve-beta.firebaseapp.com/signin')"></div> -->
        </b-navbar-brand>
        <b-navbar-toggle class="" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item class="nav-parts" href="#service"><span class="under-line">サービス</span></b-nav-item>
              <b-nav-item class="nav-parts" href="#detail"><span class="under-line">使い方</span></b-nav-item>
              <b-nav-item class="nav-parts" href="#about"><span class="under-line">特徴</span></b-nav-item>
              <b-nav-item class="nav-parts" href="#information"><span class="under-line">FAQ</span></b-nav-item>
              <b-nav-item class="nav-parts" href="#users-voice"><span class="under-line">ユーザーの声</span></b-nav-item>
              <!-- <button class="subscribe-button"></button> -->
              <button class="nav-parts common_btn btn_2" v-on:click="ankerLink('https://apps.apple.com/jp/app/id1485140161')">今すぐ始める</button>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      width: window.innerWidth
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    ankerLink (link) {
      location.href = ''
      location.href = link
    },
    handleResize () {
      this.width = window.innerWidth
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-navbar{
  width: 100%;
  margin: auto;
  box-shadow: 0px 0px 0px rgba(100,99,99,0.9);
  padding: 0.5rem 0rem;
  position: fixed;
  z-index: 3;
  background-color: #FFF;
  padding-left: 30px;
  padding-right: 30px;
  /* background-color: rgba(252, 240, 189); */
}

.navbar-light .navbar-nav .nav-link {
  color: black;
}

.custom-toggler.navbar-toggler {
  border-color: #333333;
}

.custom-toggler .navbar-toggler-icon{
  width: 18px!important;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(51, 51, 51, 1)' stroke-width='2' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.custom-toggler:hover{
  border-color: rgba(100,99,99,0.8);
  background-color:rgba(100,99,99,0.2);
}
.navbar-toggler {
  /* padding: 0.25rem 0.75rem; */
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.navbar-light .navbar-toggler-icon {
}

#logo_custom{
  margin-top: 0px;
}

.logo_a{
  width:20%;
}

.nav-parts{
  margin-left: 40px;
}

.under-line:hover{
  border-bottom: solid 2px #ffcf07;
  color: #ffcf07;
}

.common_btn{
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.btn_2{
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: #242a37;
  padding: 0px;
  border-radius: 10px;
  width: 150px;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

@media screen and (max-width: 769px) {
.custom-navbar{
  width: 100%;
  margin: auto;
  box-shadow: 0px 0px 0px rgba(100,99,99,0.9);
  padding: 0.5rem 0rem;
  padding-left: 20px;
  padding-right: 20px;
  /* background-color: rgba(252, 240, 189); */
}

.navbar-brand{
  width: 50%;
}

.navbar-toggler {
  padding: 0;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.nav-parts{
  margin-left: 0px;
}

.btn_2 {
  display: none;
}

}
</style>

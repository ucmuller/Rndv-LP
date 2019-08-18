<template>
      <b-navbar class="custom-navbar" toggleable="lg">
        <b-navbar-brand class="logo_a"><router-link to="/"><img class="navbar-brand" src="@/assets/img/RNDV_logo.png" width="100%" id="logo_custom" alt="logo"></router-link></b-navbar-brand>

        <b-navbar-toggle class="" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-navbar-nav>
              <b-nav-item href="#service">友達を招待</b-nav-item>
              <b-nav-item href="#detail">RNDVの特徴</b-nav-item>
              <b-nav-item href="#user-voice">ユーザーの声</b-nav-item>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-navbar{
  box-shadow: 0px 0px 0px rgba(100,99,99,0.9);
  background-color: rgba(252, 240, 189);
}

.navbar-dark .navbar-nav .nav-link{
  color: #333333;
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

#logo_custom{
  margin-top: 0px;
}

.logo_a{
  width:20%;
}
</style>

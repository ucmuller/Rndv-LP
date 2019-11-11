<template>
    <footer v-if="width >= 768" class="container footer bottom-section">
      <div class="footer-contents">
        <div class="footer-contents-parts"><a href="https://rendezvous.studio.design/" class="footer-anker">サービスへの想い</a></div>
        <div class="footer-contents-parts"><router-link to="/tos" class="footer-anker">利用規約</router-link></div>
        <div class="footer-contents-parts"><router-link to="/privacypolicy" class="footer-anker">プライバシーポリシー</router-link></div>
        <div class="footer-contents-parts"><router-link to="/frequentlyaskedquestions" class="footer-anker">よくあるご質問</router-link></div>
        <div class="footer-contents-parts"><a href="https://rendezvous.studio.design/" class="footer-anker">運営会社</a></div>
        <div class="footer-contents-parts">
          <img src="@/assets/img/Facebook.png" width="50px" style="margin-right:10px;" alt="">
          <img src="@/assets/img/Twitter.png" width="50px" alt="">
          <img src="@/assets/img/docomo.png" width="150px" alt="">
        </div>
      </div>
      <div class="button-area">
        <button class="btn-flat-border-hidden">お問い合わせ</button>
        <p class="text-center">&copy; Copyright © 2019 RNDV Inc. All rights reserved.</p>
        <button class="btn-flat-border" v-on:click="sendMail">お問い合わせ</button>
      </div>
        <!-- <p class="text-center">
          <router-link to="/privacypolicy">プライバシーポリシー</router-link>
          |
          <router-link to="/tos">利用規約</router-link>
          <br>
          <router-link to="/payment">成果報酬の支払い方法</router-link>
        </p> -->
    </footer>
    <footer v-else-if="width < 768" class="container footer bottom-section">
      <div class="footer-contents">
        <div class="footer-contents-parts"><a href="https://rendezvous.studio.design/" class="footer-anker">サービスへの想い</a></div>
        <div class="footer-contents-parts"><router-link to="/tos" class="footer-anker">利用規約</router-link></div>
      </div>
      <div class="footer-contents">
        <div class="footer-contents-parts"><router-link to="/privacypolicy" class="footer-anker">プライバシーポリシー</router-link></div>
        <div class="footer-contents-parts"><router-link to="/frequentlyaskedquestions" class="footer-anker">よくあるご質問</router-link></div>
      </div>
      <div class="footer-contents">
        <div class="footer-contents-parts"><a href="https://rendezvous.studio.design/" class="footer-anker">サービスへの想い</a></div>
        <div class="footer-contents-parts">
          <img src="@/assets/img/Facebook.png" width="50px" style="margin-right:10px;" alt="">
          <img src="@/assets/img/Twitter.png" width="50px" alt="">
        </div>
      </div>

      <div class="button-area">
       <button class="btn-flat-border" v-on:click="sendMail">お問い合わせ</button>
      </div>

            <div class="footer-contents">
        <div class="footer-contents-parts">
          <img src="@/assets/img/docomo.png" width="200px" style="margin-right:10px;" alt="">
        </div>
      </div>
      <div class="button-area">
        <p class="text-center">&copy; Copyright © 2019 RNDV Inc. All rights reserved.</p>
      </div>
        <!-- <p class="text-center">
          <router-link to="/privacypolicy">プライバシーポリシー</router-link>
          |
          <router-link to="/tos">利用規約</router-link> ｀
          <br>
          <router-link to="/payment">成果報酬の支払い方法</router-link>
        </p> -->
    </footer>

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      width: window.innerWidth
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    rooterPush (root) {
      this.$router.push(root)
    },
    handleResize () {
      this.width = window.innerWidth
    },
    sendMail () {
      location.href = 'mailto:' + 'cs@rndv.jp'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background-color: #54585B;
  max-width: 100%;
  padding-bottom: 20px;
}

.footer p {
  margin-bottom: 0;
  color: #999999;
}
.footer-contents{
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.footer-contents-parts{
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 60px;
  margin-bottom: 0px;
  vertical-align: middle;
}

.btn-flat-border {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #ffffff;
  border: solid 2px #ffffff;
  border-radius: 3px;
  transition: .4s;
  background: 0;
}
.btn-flat-border-hidden {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #54585B;
  border: solid 2px #54585B;
  border-radius: 3px;
  transition: .4s;
  background: 0;
}

.btn-flat-border:hover {
  color: #FFD428;
  border: solid 2px #FFD428;
}
.button-area{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.footer-anker{
  color: #ffffff;
}
.footer-anker:hover{
  color: #FFD428;
}

@media screen and (max-width: 768px) {
.footer p {
  margin-bottom: 0;
  color: #999999;
  padding-left: 0;
  padding-right: 0;
  font-size: 12px;
}

.footer-contents-parts{
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 60px;
  margin-bottom: 0px;
  vertical-align: middle;
}
.footer-contents{
  display: flex;
  font-size: 14px;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
}
.btn-flat-border {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #ffffff;
  border: solid 2px #ffffff;
  border-radius: 3px;
  transition: .4s;
  background: 0;
}
.button-area{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
}
</style>

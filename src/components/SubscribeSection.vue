<template>
    <div class="row bottom-section">
        <div class="subscribe" id="subscribe">
            <div class="section-title">
              <h1 class="text-center"><strong><span class="under-line">さあ、始めましょう</span></strong></h1>
            </div>
            <div class="subscribe-title">
              <h5 class="text-center">AppStoreからダウンロードして<br class="forSP">今すぐ利用できます。<br>iPhone以外のデバイスでの利用をご希望の方は<br>TwitterのDMよりお知らせください！</h5>
            </div>
            <div class="form-group">
            <div class="btns_bar_body">
              <a class="common_btn btn_2" href="https://apps.apple.com/jp/app/id1485140161" target="_blank"><img src="@/assets/img/btn_app.png" width="148" height="40" alt="Download on the App Sttore"></a>
              <a class="common_btn btn_3" href="https://twitter.com/rndv_ceo" target="_blank">twitterの<br>DMへ</a>
            </div>
              <!-- <div class="cp_iptxt">
                <p>メールアドレス<span style="color: red;">[必須]</span></p>
                <input v-model="email" type="email" class="" id="email" placeholder="aaa@exmaple.com">
              </div>
              <div class="cp_iptxt">
                <p>ご紹介者様のお名前<span>[任意]</span></p>
                <input v-model="staff_name" type="text" class="" id="" placeholder="">
              </div>
              <div class="cp_iptxt">
                <p>ご紹介者様の勤務店舗<span>[任意]</span></p>
                <input v-model="staff_workplace" type="text" class="" id="" placeholder="">
              </div>
            <b-form-checkbox
              id="checkbox-1"
              v-model="tos_status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
              class="text-center form-p"
            >
            <router-link to="/privacypolicy">「個人情報の取り扱い」</router-link>をご一読の上、ご登録お願いします。
            </b-form-checkbox>
                <div class="subscribe-button-area">
                  <div class="subscribe-button-2" @click="showModal('my-modal')"></div>
                </div> -->
            </div>

        </div>
        <b-modal ref="my-modal" hide-footer centered title="ご入力ありがとうございます。">
            <div class="d-block text-center">
              <h5>{{email}}<br>に登録リンクをお送りいたします。</h5>
            </div>
            <b-button class="mt-3" variant="outline-primary" block @click="sendMail">送信する</b-button>
            <b-button class="mt-2" variant="outline-danger" block @click="hideModal('my-modal')">キャンセル</b-button>
        </b-modal>
        <b-modal ref="ok-modal" hide-footer centered title="ご登録ありがとうございます。">
            <div class="d-block text-center">
              <h5>{{email}}<br>に登録リンクをお送りしました。</h5>
            </div>
            <b-button class="mt-2" variant="outline-danger" block @click="hideModal('ok-modal','success')">閉じる</b-button>
        </b-modal>
        <b-modal ref="error-modal" hide-footer centered title="アドレスを入力して下さい。">
            <div class="d-block text-center">
            </div>
            <b-button class="mt-2" variant="outline-danger" block @click="hideModal('error-modal')">閉じる</b-button>
        </b-modal>
        <b-modal ref="tos-modal" hide-footer centered title="「個人情報の取り扱い」を御一読ください。">
            <div class="d-block text-center">
            </div>
            <b-button class="mt-2" variant="outline-danger" block @click="hideModal('tos-modal')">閉じる</b-button>
        </b-modal>
    </div>
</template>

<script>
import { functions } from '@/api/firebase'
export default {
  name: 'OverView',
  data () {
    return {
      email: '',
      tos_status: 'not_accepted',
      staff_name: '',
      staff_workplace: ''
    }
  },
  methods: {
    showModal (modal) {
      if (this.email !== '') {
        this.$refs[modal].show()
      } else if (this.tos_status === 'not_accepted') {
        this.$refs['tos-modal'].show()
      } else {
        this.$refs['error-modal'].show()
      }
    },
    hideModal (modal, status) {
      if (status === 'success') {
        this.email = ''
        this.staff_name = ''
        this.staff_workplace = ''
      }
      this.$refs[modal].hide()
    },
    sendMail () {
      let data = {
        email: this.email,
        url: 'https://reserve-beta.firebaseapp.com/fromlp',
        staff_name: this.staff_name,
        staff_workplace: this.staff_workplace
      }
      const mailer = functions.httpsCallable('sendMail')

      mailer(data)
        .then(() => {
          console.log('success!')
          this.hideModal('my-modal')
          this.showModal('ok-modal')
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
          this.$ga.event('subscribe-button')
        })
    }
  }
}
</script>

<style scoped>

input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;
  width: 100%;
}
.section-title{
  margin-top: 48px;
  margin-bottom: 70px;
}

.section-title h1{
  margin-top: 48px;
  font-size: 34px;
}

.section-title h1:after {
  /* position: absolute; */
  content: " ";
  display: block;
  border-bottom: solid 7px #ffcf07;
  width: 250px;
  margin: auto;
  margin-top: 15px;
}

.bottom-section{
  margin-bottom: 96px;
}
.subscribe {
  padding-top: 48px;
  width: 100%;
  /* height: 200px; */
  margin: auto;
  padding-top: 60px;
}

.subscribe-title h5{
  line-height: 1.5;
  margin-bottom: 30px;
}

.form-group {
  margin:auto;
  width: 50%;
  /* margin-top: 56px; */
}
.subscribe-button-2 {
  border-radius: 25px;
  color: #FFF;
  background-image: url(../assets/img/btn/cta.png);
  background-repeat:no-repeat;
  background-size: cover;
  transition: .4s;
  width: 200px;
  margin: auto;
  height: 50px;
}

.subscribe-button-2:hover {
  opacity: 0.7;
}

.subscribe-button-area{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 16px;
}

.subscribe-form{
  margin-top: 5px;
  margin-bottom: 10px;
}

.form-group p {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
}

.form-control::placeholder{
  color: #cccccc;
}

.cp_iptxt {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}
.cp_iptxt input[type='text'] {
  font: 15px/24px sans-serif;
  box-sizing: border-box;
  width: 100%;
  letter-spacing: 1px;
  border: 0;
}
.cp_iptxt input[type='text']:focus {
  outline: none;
}
.cp_iptxt input[type='text']:focus::after {
  outline: none;
}
.cp_iptxt::after {
  display: block;
  width: 100%;
  height: 4px;
  margin-top: -1px;
  content: '';
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #ffcf07;
}

.form-p {
  margin-top: 30px;
}

.btns_bar_body{
  text-align: center;
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
  padding: 15px 30px;
  border-radius: 10px;
  width: 220px;
  margin-bottom: 20px;
}
.btn_3{
  font-size: 18px;
  font-weight: 900;
  color: #242a37;
  background: #fff;
  padding: 7px 30px;
  border: 1px solid #242a37;
  box-sizing: border-box;
  border-radius: 10px;
  width: 220px;
  margin-bottom: 20px;
}
.btn_more{
  font-size: 20px;
  font-weight: 900;
  color: #fff;
  background: #000;
  padding: 20px;
  width: 90%;
  max-width: 390px;
  border-radius: 35px;
}
.common_btn:hover{
  opacity: 0.7;
  text-decoration: none;
  color: #fff;
}
.btn_3:hover{
  color: #242a37;
}

@media screen and (max-width: 768px) {
.section-title h1{
  margin-top: 48px;
  font-size: 25px;
}

.section-title h1:after {
  /* position: absolute; */
  content: " ";
  display: block;
  border-bottom: solid 4px #ffcf07;
  width: 180px;
  margin: auto;
  margin-top: 5px;
}
.subscribe-title h5{
  font-size: 15px;
  margin-bottom: 30px;
}
.form-group {
  margin:auto;
  width: 80%;
  /* margin-top: 56px; */
}
.form-p {
  font-size: 13px;
  /* margin-top: 56px; */
}

.btns_bar{
  padding: 6px 0 13px;
  overflow:hidden;
}
.btns_bar_txt{
  font-size: 14px;
  display: block;
  line-height: 2;
  height: auto;
}
.btns_bar_body{
  margin: 2px auto 0;
  display: block;
  width: 90%;
  max-width: 420px;
}
.btns_bar .common_btn{
  width: 49%;
  height:50px;
  float:left;
  border-radius:10px;
}
.btns_bar .btn_2 img{
  width: auto;
  height: 60%;
}
.btns_bar .btn_3{
  padding-top:7px;
  font-size: 13px;
  margin-left:2%;
}
}
</style>

<template>
    <div class="row bottom-section">
        <div class="subscribe" id="subscribe">
            <div class="section-title">
              <h1 class="text-center"><strong><span class="under-line">さあ、始めましょう</span></strong></h1>
            </div>
            <div class="subscribe-title">
              <h5 class="text-center">メールアドレスで登録。カンタン利用！</h5>
            </div>
            <div class="form-group">
              <div class="cp_iptxt">
                <p>メールアドレス<span style="color: red;">[必須]</span></p>
                <input v-model="email" type="email" class="" id="email" placeholder="aaa@exmaple.com">
              </div>
              <div class="cp_iptxt">
                <p>ご紹介者様のお名前<span style="color: red;">[必須]</span></p>
                <input v-model="staff_name" type="text" class="" id="" placeholder="">
              </div>
              <div class="cp_iptxt">
                <p>ご紹介者様の勤務店舗<span style="color: red;">[必須]</span></p>
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
                </div>
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
        <b-modal ref="error-modal" hide-footer centered title="未入力項目があります。">
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
      staff_workplace: '',
      id: this.$route.params.id
    }
  },
  methods: {
    showModal (modal) {
      if (this.email !== '' && this.staff_name !== '' && this.staff_workplace !== '') {
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
        url: 'https://reserve-beta.firebaseapp.com/referralpage/' + this.id,
        staff_name: this.staff_name,
        staff_workplace: this.staff_workplace
      }
      const mailer = functions.httpsCallable('sendMail')

      mailer(data)
        .then(() => {
          this.hideModal('my-modal')
          this.showModal('ok-modal')
        })
        .catch(err => {
        })
        .finally(() => {
          this.loading = false
          this.$ga.event('button', 'click', 'mail', 1)
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
}
</style>

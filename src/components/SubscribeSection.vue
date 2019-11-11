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
            <input v-model="email" type="email" class="form-control form-control-lg subscribe-form" id="email" placeholder="aaa@exmaple.com">
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
              <p>下記に紹介者の「お名前」「勤務店舗」を入力の上、送信ボタンをタップしてください。</p>
              <input v-model="staff_name" type="" class="form-control form-control-lg" id="email" placeholder="紹介者名">
              <input v-model="staff_workplace" type="" class="form-control form-control-lg" id="email" placeholder="紹介者の勤務店舗名">
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
        })
    }
  }
}
</script>

<style scoped>
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
  margin-top: 10px;
  margin-bottom: 50px;
}

.form-control::placeholder{
  color: #cccccc;
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

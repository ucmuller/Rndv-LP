<template>
    <div class="row information" id="information">
        <div class="container">

            <div class="section-title">
              <h1 class="text-center"><strong><span class="under-line">よくあるご質問</span></strong></h1>
            </div>

            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_1 = !q_1" v-b-toggle.accordion-1 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>お店が契約してなくても個人で利用することが可能ですか？</p>
                    </div>
                    <div v-if="q_1" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_1" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion1" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          ランデブは、お店の契約がなくても個人でご利用いただくことが可能なサービスです。利用料もかかりませんので、ご安心してご利用下さい。
                          詳細に関しては、利用規約をご確認下さい。
                          <br>
                          <br>
                          ※在籍確認をお店にさせて頂くことがございます。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_2 = !q_2" v-b-toggle.accordion-2 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>支払いは誰がしてくれるのですか？</p>
                    </div>
                    <div v-if="q_2" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_2" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion2" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          キャンペーン期間中は、ランデブの運営会社、株式会社ランデブーがお支払い致します。
                          <br>
                          ※2020年3月持ってリリースキャンペーン（ランデブから報酬をお支払いする）は終了しました。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" v-on:click="q_3 = !q_3" block v-b-toggle.accordion-3 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>支払いはいつ、どのように行われますか？</p>
                    </div>
                    <div v-if="q_3" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_3" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion3" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          ※2020年3月持ってリリースキャンペーン（ランデブから報酬をお支払いする）は終了しました。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

            </div>
            <div class="more-information">
              <router-link to="/frequentlyaskedquestions"><p>さらに見る></p></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InformationSection',
  data () {
    return {
      q_1: true,
      q_2: false,
      q_3: false
    }
  }
}
</script>

<style scoped>
.section-title{
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

.information{
  width: 100%;
  margin: auto;
  margin-top: 48px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.information-question{
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: none;
}
.information-question:hover{
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: none;
}
.information-question:active{
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: none;
}

.information-question p {
  margin: auto;
  margin-left: 20px;
}

.information-icon{
  margin-right: 0;
}
.p-1{
  background-color: white;
  border-bottom: 1px solid rgba(84, 88, 91, 0.125);
}
.p-1:hover{
  background-color: white;
  border-bottom: 1px solid rgba(84, 88, 91, 0.125);
}
.p-1:active{
  background-color: white;
  border-bottom: 1px solid rgba(84, 88, 91, 0.125);
}

.mb-1{
  border: white;
}
.more-information{
  display: flex;
  justify-content: flex-end;
}

.more-information p {
  color: #333333;
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

.information p {
  font-size: 13px;
}
}
</style>

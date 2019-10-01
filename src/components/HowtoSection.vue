<template>
    <div v-if="width >= 768" class="row how-to" id="detail">
        <div class="container">
            <div class="section-title">
                <h1 class="text-center"><strong><span class="under-line">ランデブの使い方</span></strong></h1>
            </div>
            <div class="row">
              <div class="how-to-part-A row">
                <div class="col-xs-12 col-md-6 how-to-part-A-left">
                  <div class="how-to-heading">
                    <h3><strong>アナタが友人・家族を招待する</strong></h3>
                    <p>ランデブ内で友人・家族の来店予約を代理入力して、LINEで予約内容を送信します。</p>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6 how-to-part-A-right">
                  <img src="@/assets/img/rndv_lp_illust_1.png" width="100%" alt="">
                </div>
              </div>
              <div class="how-to-part-B row">
                <div class="col-xs-12 col-md-6 how-to-part-B-left">
                  <img src="@/assets/img/rndv_lp_illust_2.png" width="100%" alt="">
                </div>
                <div class="col-xs-12 col-md-6 how-to-part-B-right">
                  <div class="how-to-heading">
                    <h3><strong>友人・家族が予約内容を確定する</strong></h3>
                    <p>LINEで送られる予約内容を、招待された友人や家族が確認します。内容に不備がなければ、予約の確定をします。</p>
                  </div>
                </div>
              </div>
              <div class="how-to-part-C row">
                <div class="col-xs-12 col-md-6 how-to-part-C-left">
                  <div class="how-to-heading">
                    <h3><strong>来店数に応じて現金化する</strong></h3>
                    <h5>実際に来店した人数×300円を現金化することができます。キャンペーン期間中は、㈱ランデブーからお支払いしています。そのため、お店の契約がなくても、無料で個人で使うことができます</h5>
                    <br>
                    <p>※キャンペーン期間中のお支払い方法や一人あたりの単価については『お支払いに関して』をご確認下さい。</p>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6 how-to-part-C-right">
                  <img src="@/assets/img/rndv_lp_illust_3.png" width="100%" alt="">
                </div>
              </div>
            </div>
        </div>
    </div>
    <div v-else-if="width < 768" class="row how-to" id="detail">
        <div class="container">
            <div class="section-title">
                <h1 class="text-center"><strong><span class="under-line">ランデブの使い方</span></strong></h1>
            </div>
            <div class="row">
              <div class="how-to-part-A row">
                <div class="col-xs-12 col-md-6 how-to-part-A-left-mobile">
                  <div class="how-to-heading">
                    <h3><strong>アナタが友人・家族を招待する</strong></h3>
                    <h5>ランデブ内で友人・家族の来店予約を代理入力して、LINEで予約内容を送信します。</h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6 how-to-part-A-right-mobile">
                  <img src="@/assets/img/rndv_lp_illust_1.png" width="100%" alt="">
                </div>
              </div>
              <div class="how-to-part-B row">
                <div class="col-xs-12 col-md-6 how-to-part-B-left-mobile">
                  <div class="how-to-heading">
                    <h3><strong>友人・家族が予約内容を確定する</strong></h3>
                    <h5>LINEで送られる予約内容を、招待された友人や家族が確認します。内容に不備がなければ、予約の確定をします。</h5>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6 how-to-part-B-right-mobile">
                    <img src="@/assets/img/rndv_lp_illust_2.png" width="100%" alt="">
                </div>
              </div>
              <div class="how-to-part-C row">
                <div class="col-xs-12 col-md-6 how-to-part-C-left-mobile">
                  <div class="how-to-heading">
                    <h3><strong>来店数に応じて現金化する</strong></h3>
                    <h5>実際に来店した人数×300円を現金化することができます。キャンペーン期間中は、㈱ランデブーからお支払いしています。そのため、お店の契約がなくても、無料で個人で使うことができます</h5>
                    <br>
                    <p>※キャンペーン期間中のお支払い方法や一人あたりの単価については『お支払いに関して』をご確認下さい。</p>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6 how-to-part-C-right-mobile">
                  <img src="@/assets/img/rndv_lp_illust_3.png" width="100%" alt="">
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HowtoSection',
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
    handleResize () {
      this.width = window.innerWidth
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

.how-to{
  width: 80%;
  margin: auto;
  margin-top: 48px;
  margin-bottom: -15px;
  padding-top: 60px;
}
.how-to-part-A{
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.how-to-part-A-left{
  width: 100%;
  height: 300px;
  margin: auto;
  background-image: url(../assets/img/Group1.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.how-to-part-A-right{
  margin: auto;
  padding: 50px;
}
.how-to-part-B{
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.how-to-part-B-left{
  margin: auto;
  padding: 50px;
}
.how-to-part-B-right{
  width: 100%;
  height: 400px;
  background-image: url(../assets/img/Group2.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.how-to-part-C{
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.how-to-part-C-left{
  width: 100%;
  height: 400px;
  background-image: url(../assets/img/Group3.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.how-to-part-C-right{
  margin: auto;
  padding: 50px;
}
.how-to-heading{
  width: 100%;
  padding-top: 30%;
}
.how-to-heading h5{
  font-size: 16px;
}

.how-to-heading p{
  font-size: 12px;
}

@media screen and (max-width: 768px) {

.how-to{
  width: 80%;
  margin: auto;
  margin-top: 48px;
  margin-bottom: 0px;
}
.section-title{
  margin-top: 48px;
  margin-bottom: 30px;
}

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
.how-to-heading h3{
  font-size: 18px;
}
.how-to-heading p{
  font-size: 12px;
}
.how-to-part-A{
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.how-to-part-A-left-mobile{
  width: 100%;
  height: 200px;
  margin: auto;
  background-image: url(../assets/img/Group1.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.how-to-part-A-right-mobile{
  margin: auto;
  padding: 20px;
}
.how-to-part-B{
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.how-to-part-B-left-mobile{
  width: 100%;
  height: 200px;
  background-image: url(../assets/img/Group2.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.how-to-part-B-right-mobile{
  margin: auto;
  padding: 20px;
}
.how-to-part-C{
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.how-to-part-C-left-mobile{
  width: 100%;
  height: 300px;
  background-image: url(../assets/img/Group3.png);
  background-repeat: no-repeat;
  background-size: contain;
}
.how-to-part-C-right-mobile{
  margin: auto;
  padding: 20px;
}
}
</style>

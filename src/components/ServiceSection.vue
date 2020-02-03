<template>
    <div class="row service" id="service">
        <div class="container">
            <div class="section-title">
              <h1 class="text-center"><strong><span class="under-line">ランデブって何？</span></strong></h1>
            </div>
            <div class="row">
              <div class="col-md-12 service-heading">
                <img class="service_content_img" src="@/assets/img/service_img.png" alt="">
                <div>
                  <h5>ランデブ（RNDV）は、飲食店で働くアナタが、大事な人<br>（友人や家族）を自分のお店に簡単に招待できるサービスです。</h5><br><h5>アナタの大事な人を招待して喜ばしてあげて下さい。</h5><h5>喜ばせた数が、そのままお店への貢献に繋がります。</h5><h5>アナタのお店の店長やオーナーも喜びます。</h5><br><h5>喜んでもらった人数（≒お店への貢献度）は、現金化できたり、<br>大事な人に還元することができます。</h5>
                  <h6>※RNDVは、「待ち合わせ」「約束」の意味をもつフランス語のRendezvousの造語です。</h6>
                </div>
                <!-- <h5 class="">
                  ランデブ（RNDV）は、飲食店で働くアナタが、大事な人
                  <br>
                  （友人や家族）を自分のお店に簡単に招待できるサービスです。
                </h5>
                <br>
                <h5 class="">アナタの大事な人を招待して喜ばしてあげて下さい。</h5>
                <h5 class="">喜ばせた数が、そのままお店への貢献に繋がります。</h5>
                <h5 class="">アナタのお店の店長やオーナーも喜びます。</h5>
                <br>
                <h5 class="">
                  喜んでもらった人数（≒お店への貢献度）は、現金化できたり、
                  <br>
                  大事な人に還元することができます。
                </h5>
                <br>
                <br>
                <br>
                <h6 class="">※RNDVは、「待ち合わせ」「約束」の意味をもつフランス語のRendezvousの造語です。</h6> -->
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ServiceSection'
}
</script>

<style scoped>
.service{
  width: 100%;
  margin: auto;
  margin-top: 48px;
  background-color: #FFF8EA;
  margin-bottom: 56px;
  display: flex;
  justify-content: center;
  padding-top: 60px;
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

.service h5 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
}

.service_content{
  width: 85%;
  text-align: center;
  margin: 70px auto;
  padding: 60px 0;
}

.service-heading {
  margin-bottom: 60px;
  justify-content: center;
  text-align: center;
}

.service_content_img {
  width: 400px;
  margin-bottom: 30px;
}

.service h5{
  font-size: 20px;
  line-height: 1.5;
}

.service h6{
  margin: 50px auto 0;
}

.under-line{

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

.service h5 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: normal;
}

.service h6 {
  margin-bottom: 10px;
  font-size: 12px;
}

.service-heading {
  margin-bottom: 60px;
  text-align: left;
}

.service_content_img {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 30px;
}

.service_content.service h5{
  font-size: 16px;
  margin-bottom: 5px;
}
.service_content.service h6{
  font-size: 14px;
  line-height: 1.5;
}
}
</style>

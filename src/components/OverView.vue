<template>
    <div class="row about" id="about">
        <div class="container">
            <div class="section-title">
              <h1 class="text-center"><strong><span class="under-line">ランデブの特徴</span></strong></h1>
            </div>
            <div class="row">
              <div class="col-md-4">
                <img src="@/assets/img/about1.png" width="100%" style="padding: 60px;" height="">
                <h5 class="text-center"><strong>大事な人の来店頻度がわかる</strong></h5>
                <p>アナタの大事な人（友人・家族）が何回くらい来てるのか、最後に来たのはいつかなどを残しておくことが出来ます。</p>
              </div>
              <div class="col-md-4">
                <img src="@/assets/img/about2.png" width="100%" style="padding: 60px;" height="">
                <h5 class="text-center"><strong>お店に対しての貢献度が見える</strong></h5>
                <p>月ごとに自分の招待した予約数をカウントすると、お店に貢献している売上もわかるため、モチベーションが上がります。</p>
              </div>
              <div class="col-md-4">
                <img src="@/assets/img/about3.png" width="100%" style="padding: 60px;" height="">
                <h5 class="text-center"><strong>予約数に応じて現金化できる</strong></h5>
                <p>予約数に応じて現金化することができます。今後は、来店してくれた人に還元も出来るようになるのでご期待下さい。</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OverView'
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

.about{
  width: 100%;
  margin: auto;
  margin-top: 48px;
  padding-top: 60px;
}

@media screen and (max-width: 768px) {
.section-title{
  margin-top: 48px;
  margin-bottom: 70px;
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
.about h5{
  font-size: 15px;
}
.about p{
  font-size: 13px;
}

}
</style>

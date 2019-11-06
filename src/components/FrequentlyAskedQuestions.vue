<template>
    <div class="row information" id="information">
        <div class="container">
            <div class="section-title">
              <h1 class="text-center"><strong><span class="under-line">よくあるご質問</span></strong></h1>
            </div>
            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <div class="text-center information-question">
                      <h4>契約、報酬、支払いについて</h4>
                    </div>
                </b-card-header>
              </b-card>

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
                          キャンペーン期間（※2019年12月末）は、ランデブの運営会社、株式会社ランデブーがお支払い致します。
                          2020年1月以降に関しては、改めてサイト内で告知させて頂きます。
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
                          登録開始から9月30日分までの成果確定分を10月31日（木）に各自ご登録頂きました銀行口座にお振込み致します。
                          銀行口座のご登録に関しては、最低支払額の3,000円を超えた方からご登録に関してのご連絡をさせていただきます。
                          <br>
                          また、10月以降のお支払いに関しては、月末締めの翌月末払いとなります。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" v-on:click="q_4 = !q_4" block v-b-toggle.accordion-4 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>飲食店で働いていない人は使えませんか？</p>
                    </div>
                    <div v-if="q_4" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_4" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="my-accordion4" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          現在は、飲食店で働いているアルバイト、スタッフ（正社員や店長、オーナー）のみを対象としたサービスとなっております。飲食店を応援したいユーザー向けのサービスは2020年にリリース予定です。ご期待下さい。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" v-on:click="q_5 = !q_5" block v-b-toggle.accordion-5 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>紙の給与明細を発行できますか？</p>
                    </div>
                    <div v-if="q_5" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_5" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion5" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          2020年中に給与明細をアプリからダウンロードできるようにする予定です。正式に開発が決まったタイミングで改めてご案内させて頂きます。今しばらくお待ちくださいませ。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" v-on:click="q_6 = !q_6" block v-b-toggle.accordion-6 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>口座情報について</p>
                    </div>
                    <div v-if="q_6" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_6" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="my-accordion6" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          口座名義とは？
                          <br>
                          口座名義とは、その口座のご登録者様の名前です。
                          <br>
                          銀行のキャッシュカードや通帳に印字されたの名義をご確認ください。
                          <br>
                          入力の際は、セイ、メイと分けてカタカナで入力してください。
                          <br>
                          なお、口座名義は本人確認書類の名前と一致する必要があります。
                          <br>
                          本人確認手続きの申し込みを行ってから口座登録してください。
                          <br>
                          <br>
                          口座番号とは？
                          <br>
                          口座番号は、その口座がどの銀行のどの支店にあり、誰のものかを識別するための番号です。
                          <br>
                          銀行のキャッシュカードや通帳に印字された7桁の番号をご確認ください。
                          <br>
                          なお、ゆうちょ銀行をご利用の場合はこちらをご覧くださいませ。
                          <br>
                          <br>
                          支店番号とは？
                          <br>
                          支店番号とは、金融機関の本支店に割り当てられている3桁の番号です。
                          <br>
                          別名では「支店コード」「店番号」「店舗番号」ともよばれています。
                          <br>
                          銀行のキャッシュカードや通帳に印字された番号をご確認いただくか、お手数ですが全国銀行協会のホームページまたはインターネットで検索してください。
                          <br>
                          <br>
                          口座種別とは？
                          <br>
                          銀行の口座というのには種類があり、それを口座種別といます。
                          <br>
                          その種類は銀行によってもさまざまなのですが、一般的に使用されているものは、普通預金というものです。
                          <br>
                          ご不安の際は通帳等に口座種別記載されているためご確認くださいませ。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" v-on:click="q_7 = !q_7" block v-b-toggle.accordion-7 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>いつまでキャンペーンでの支払いをランデブがしてくれる予定ですか？</p>
                    </div>
                    <div v-if="q_7" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_7" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-7" accordion="my-accordion7" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          2019年12月末までを想定しております。それ以降に関しては誠意検討中でございます。
                          <br>
                          皆様のご利用が多ければ多いほど、またご協力頂けるだけ期間の延長が可能となりますので、皆様のご利用、ご協力をどうぞよろしくおねがいします。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <br>
              <br>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <div class="text-center information-question">
                      <h4>会員登録について</h4>
                    </div>
                </b-card-header>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_8 = !q_8" v-b-toggle.accordion-8 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>お店が契約してなくても個人で利用することが可能ですか？</p>
                    </div>
                    <div v-if="q_8" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_8" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-8" visible accordion="my-accordion8" role="tabpanel">
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
                  <b-button class="text-left information-question" block v-on:click="q_9 = !q_9" v-b-toggle.accordion-9 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>複数の店舗で働いているのですが、複数店舗を登録することは出来ますか？</p>
                    </div>
                    <div v-if="q_9" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_9" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-9" accordion="my-accordion9" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          現在、店舗登録はお一人様一店舗とさせていただいております。一番よく友人や家族が来る店舗で登録をお願い致します。
                          <br>
                          複数店舗の登録を可能にするかに関しては、検討しておりますが、まだ実装予定はございません。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_10 = !q_10" v-b-toggle.accordion-10 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>新しい店舗・プロフィール写真を登録し直せますか？</p>
                    </div>
                    <div v-if="q_10" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_10" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-10" accordion="my-accordion10" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          登録完了後に勤務店舗の情報を編集することは出来ません。ご都合により変更をご希望の場合は、お問い合わせよりご相談くださいませ。
                          店舗情報・プロフィール写真は予約招待確認画面に表示されます。
                          <br>
                          また、お問い合わせは、ランデブにログイン後、右上の歯車を押下頂くとお問い合わせページに移ります。
                          <br>
                          複数店舗の登録を可能にするかに関しては、検討しておりますが、まだ実装予定はございません。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_11 = !q_11" v-b-toggle.accordion-11 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>同じお店のスタッフとアカウントを共有することは可能ですか？</p>
                    </div>
                    <div v-if="q_11" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_11" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-11" accordion="my-accordion11" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          登録完了後に勤務店舗の情報を編集することは出来ません。ご都合により変更をご希望の場合は、お問い合わせよりご相談くださいませ。
                          <br>
                          店舗情報・プロフィール写真は予約招待確認画面に表示されます。
                          <br>
                          また、お問い合わせは、ランデブにログイン後、右上の歯車を押下頂くとお問い合わせページに移ります。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_12 = !q_12" v-b-toggle.accordion-12 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>LINEを利用していないと使えませんか？</p>
                    </div>
                    <div v-if="q_12" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_12" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-12" accordion="my-accordion12" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          緊急時のご連絡や確認事項のご案内のため、ランデブサポートチームLINEアカウントの追加を必須とさせて頂いております。
                          <br>
                          恐れ入りますが、何卒ご理解賜りますようお願い申し上げます。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_13 = !q_13" v-b-toggle.accordion-13 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>退会したいのですがどうすれば出来ますか？</p>
                    </div>
                    <div v-if="q_13" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_13" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-13" accordion="my-accordion13" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          ランデブにログイン後、右上にある歯車を押下。お問い合わせページより退会希望の旨をご連絡下さい。
                          <br>
                          退会手続きが完了すると、アカウントを復元することはできませんのでご注意ください。
                          <br>
                          また、以下の理由で退会をご検討している場合は、もう一度ご検討いただけますと幸いです。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_14 = !q_14" v-b-toggle.accordion-14 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>退会時に貯まっている報酬はどうなりますか？</p>
                    </div>
                    <div v-if="q_14" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_14" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-14" accordion="my-accordion14" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          退会後はアプリ内の報酬残高は引き出せません。
                          <br>
                          退会申請は振込が全て終わった後に申請をしていただく必要がございますのでご了承ください。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_15 = !q_15" v-b-toggle.accordion-15 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>機種を変更しても利用することが出来ますか？</p>
                    </div>
                    <div v-if="q_15" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_15" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-15" accordion="my-accordion15" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          WEBでご利用頂いていておりますので、メールアドレスとpasswordがあれば利用が可能です。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <br>
              <br>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <div class="text-center information-question">
                      <h4>機能・使用方法・バグについて</h4>
                    </div>
                </b-card-header>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_16 = !q_16" v-b-toggle.accordion-16 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>LINEで繋がっていない友人・家族は招待出来ないのですか？</p>
                    </div>
                    <div v-if="q_16" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_16" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-16" visible accordion="my-accordion16" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          現在、招待はLINE経由でのみとなっております。Twitterやインスタでの集客も成果に繋がるように検討しておりますが、期日などは未定となっております。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_17 = !q_17" v-b-toggle.accordion-17 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>確定ボタンを押された後に人数の変更、キャンセルがあった場合はどうすればよいですか？</p>
                    </div>
                    <div v-if="q_17" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_17" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-17" accordion="my-accordion17" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          右上の歯車を押して、問い合わせページより人数の変更、キャンセルがあった予約の報国をお願い致します。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_18 = !q_18" v-b-toggle.accordion-18 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>LINEで招待の送信が出来ません。</p>
                    </div>
                    <div v-if="q_18" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_18" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-18" accordion="my-accordion18" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          恐れ入りますが、登録時のエラーが原因となります。恐れ入りますが、ログイン→右上の歯車を押下→お問い合わせよりご連絡を下さい。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_19 = !q_19" v-b-toggle.accordion-19 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>招待して確認画面が開けず真っ白になります。</p>
                    </div>
                    <div v-if="q_19" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_19" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-19" accordion="my-accordion19" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          恐れ入りますが、登録時のエラーが原因となります。恐れ入りますが、ログイン→右上の歯車を押下→お問い合わせよりご連絡を下さい。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_20 = !q_20" v-b-toggle.accordion-20 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>LINE以外でTwitterやインスタで集客したいのですが、可能ですか？</p>
                    </div>
                    <div v-if="q_20" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_20" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-20" accordion="my-accordion20" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          現在、招待はLINE経由でのみとなっております。Twitterやインスタでの集客も成果に繋がるように検討しておりますが、期日などは未定となっております。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_21 = !q_21" v-b-toggle.accordion-21 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>招待をして、確定しなかった招待を消すことが出来ますか？</p>
                    </div>
                    <div v-if="q_21" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_21" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-21" accordion="my-accordion21" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          WEB版では招待の削除機能の実装は予定をしておりません。一定期間を設けて自動で消えるようになっておりますので、そのままご利用願います。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <br>
              <br>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <div class="text-center information-question">
                      <h4>RNDV（ランデブ）について</h4>
                    </div>
                </b-card-header>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_22 = !q_22" v-b-toggle.accordion-22 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>ランデブの由来を教えて下さい</p>
                    </div>
                    <div v-if="q_22" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_22" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-22" visible accordion="my-accordion22" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          「待ち合わせ」「約束」「たまり場」などの意味をもつフランス語の『RendezVous』が語源です。
                          <br>
                          また、宇宙で宇宙船同士がドッキングすることを「ランデブ」と言います。
                          <br>
                          宇宙という神秘的で無限の空間でドッキングする奇跡だと考えていますが、同じ時代に同じ場所で人と人が出会うのも同じくらいの奇跡だと考えています。
                          <br>
                          出会いという軌跡を大切にしたいと言う想いを込めてサービス名称にしました。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <br>
              <br>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <div class="text-center information-question">
                      <h4>その他</h4>
                    </div>
                </b-card-header>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_23 = !q_23" v-b-toggle.accordion-23 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>対応エリアについて</p>
                    </div>
                    <div v-if="q_23" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_23" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-23" visible accordion="my-accordion23" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          現在東京都を中心に首都圏のみとなっております。それ以外のエリアに関しましては、2020年に拡大予定です。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_24 = !q_24" v-b-toggle.accordion-24 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>ランデブは扶養に含まれていますか？確定申告は必要ですか？</p>
                    </div>
                    <div v-if="q_24" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_24" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-24" accordion="my-accordion24" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          最終的にはご自身でご判断いただくようお願い申し上げます。
                          <br>
                          ランデブを通じての報酬は、給与所得ではなく、事業所得もしくは雑所得のため、源泉徴収に当たらず企業側で税金を引くことはございません。
                          <br>
                          確定申告が必要で、通帳への入金額が売上の証拠になるので、通帳のコピーでの確定申告となります。
                          <br>
                          ただし、年間所得が20万未満の場合は確定申告の義務はありません。
                          <br>
                          なお、扶養の範囲の判断は「所得」が38万円を超えるかどうかで判断することになります。
                          給与のみの場合は給与額面が103万円以下（このとき給与所得は38万円になります）、雑所得がある場合は、雑所得（収入ー必要経費）を加えて合計所得金額が38万円以下であることが必要です。
                          <br>
                          実務的には各個人の判断にはなりますが、年間の報酬が103万円程度であれば必要経費は65万円ほどかかるため、扶養控除の対象になると考えられます。
                          詳細を確認されたい場合は、税理士にご確認をお願い申し上げます。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_25 = !q_25" v-b-toggle.accordion-25 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>未成年でも利用することが出来ますか？</p>
                    </div>
                    <div v-if="q_25" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_25" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-25" accordion="my-accordion25" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          18歳以上（高校生不可）であれば利用することが可能です。
                          <br>
                          ただし、未成年の飲酒等に関しては法令に則り、法令遵守をお願い致します。
                          <br>
                          ランデブでは法令違反における一切の責任を追いません。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_26 = !q_26" v-b-toggle.accordion-26 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>ランデブは副業になりますか？</p>
                    </div>
                    <div v-if="q_26" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_26" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-26" accordion="my-accordion26" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          ご自身で本業をされている場合、副業となる場合がございます。
                          <br>
                          副業の所得が1年間で20万円を超えた場合は確定申告をする必要があるため、お勤め先に副業が判明する可能性がございます。
                          <br>
                          こちらについてのご判断は弊社では致しかねますため、ご自身でご確認をお願い致します。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button class="text-left information-question" block v-on:click="q_27 = !q_27" v-b-toggle.accordion-27 variant="light">
                    <div class="text-left information-question">
                      <div class="information-icon"><img src="@/assets/img/Q1.png" width="40px" alt=""></div>
                      <p>ios版・Android版のサービス提供はありませんか？</p>
                    </div>
                    <div v-if="q_27" class="information-icon"><v-icon name="angle-up"/></div>
                    <div v-if="!q_27" class="information-icon"><v-icon name="angle-down"/></div>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-27" accordion="my-accordion27" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <div class="text-left information-question">
                        <div class="information-icon"><img src="@/assets/img/A1.png" width="35px" alt=""></div>
                        <p>
                          ios版は2019年12月に提供を予定しております。android版は、2020年中での提供を予定しております。ご期待下さい。
                        </p>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

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
      q_3: false,
      q_4: false,
      q_5: false,
      q_6: false,
      q_7: false,
      q_8: false,
      q_9: false,
      q_10: false,
      q_11: false,
      q_12: false,
      q_13: false,
      q_14: false,
      q_15: false,
      q_17: false,
      q_18: false,
      q_19: false,
      q_20: false,
      q_21: false,
      q_22: false,
      q_23: false,
      q_24: false,
      q_25: false,
      q_26: false,
      q_27: false
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

.information p {
  font-size: 13px;
}
}
</style>

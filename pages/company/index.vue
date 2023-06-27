<template>
  <!-- wrapper-->
  <div class="wrapper">

<Header />

<!--page-header-->
<div class="page-header">
      <div class="page-header__titleArea">
        <h2 class="page-header__title">会社概要</h2>
      </div>
    </div>
    <!--/page-header-->

    <!--content-->
    <main class="content">

      <!--company-info-->
      <div class="company-info">
        <div class="container">
          <div class="company-info__table">
            <table class="table-type01">
              <tbody>
                <tr>
                  <th>社名</th>
                  <td>株式会社START</td>
                </tr>
                <tr>
                  <th>設立</th>
                  <td>2025.02.10</td>
                </tr>
                <tr>
                  <th>代表取締役</th>
                  <td>ショーン・デイビット・ジュニア</td>
                </tr>
                <tr>
                  <th>資本金</th>
                  <td>10,000,000円</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>〒555-5555 東京都千代田区 スタートビルディング 606</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="company-info__access">
            <div class="company-info__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030380878!2d139.76493611544558!3d35.68123618019435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1603888975255!5m2!1sja!2sjp"
                width="100%" height="auto" frameborder=" 0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
            </div>
            <div class="company-info__map-link">
              <a href="https://goo.gl/maps/b5AqA853AfsPSw1Y7" target="_blank">Google mapで見る</a>
            </div>
          </div>
        </div>
      </div>
      <!--/company-info-->

      <!--company-news-->
      <div class="company-news">
        <div class="container">

          <div class="news-list">
            <ul class="news-list__list">
              <li class="news-list__item">
                <a href="#" class="news-list__link">
                  <div class="news-list__date">
                    <time datetime="2020-02-10" class="news__date">2030.02.10</time>
                  </div>
                  <div class="news-list__title">
                    コーポレートサイトをリニューアルしました。
                  </div>
                </a>
              </li>
              <li class="news-list__item">
                <a href="#" class="news-list__link">
                  <div class="news-list__date">
                    <time datetime="2020-02-08" class="news__date">2030.02.08</time>
                  </div>
                  <div class="news-list__title">
                    採用を強化中です！一緒に働きませんか？
                  </div>
                </a>
              </li>
              <li class="news-list__item">
                <a href="#" class="news-list__link">
                  <div class="news-list__date">
                    <time datetime="2020-02-02" class="news__date">2030.02.02</time>
                  </div>
                  <div class="news-list__title">
                    人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <!--/company-news-->

    </main>
    <!--/content-->

    <Footer />

  </div>
  <!-- /wrapper -->


</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

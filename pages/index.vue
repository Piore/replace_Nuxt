<template>
  <!-- wrapper-->
  <div class="wrapper">

<Header />

<!-- mv -->
<div class="mv">
  <div class="mv__titleArea">
    <h2 class="mv__title">START</h2>
    <div class="mv__subtitle">仕事に最高のスタートを</div>
  </div>
</div>
<!-- /mv -->

<!-- content -->
<main class="content">

  <!-- news -->
  <section class="news">
    <div class="container">
      <div class="news__inner">
        <div class="news__heading">
          <h2 class="heading-primary">ニュース</h2>
        </div>
        <div class="news__body">

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
    </div>
  </section>
  <!-- /news -->

  <!-- service -->
  <section class="service">
    <div class="container">
      <div class="service__heading">
        <h2 class="heading-primary">サービス</h2>
      </div>
      <div class="service__body">
        <div class="service-list">
          <div class="service-list__item">
            <figure class="service-list__img-wrapper">
              <span class="service-list__img material-icons-round">
                work
              </span>
            </figure>
            <div class="service-list__body">
              <div class="service-list__title">人材紹介業</div>
              <div class="service-list__text">
                <p>新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。</p>
              </div>
            </div>
          </div>
          <div class="service-list__item">
            <figure class="service-list__img-wrapper">
              <span class="service-list__img material-icons-round">
                location_city
              </span>
            </figure>
            <div class="service-list__body">
              <div class="service-list__title">スクール事業</div>
              <div class="service-list__text">
                <p>オンラインでWeb制作を学べるスクールを運営しています。</p>
              </div>
            </div>
          </div>
          <div class="service-list__item">
            <figure class="service-list__img-wrapper">
              <span class="service-list__img material-icons-round">
                desktop_windows
              </span>
            </figure>
            <div class="service-list__body">
              <div class="service-list__title">Webメディア運営</div>
              <div class="service-list__text">
                <p>人事系メディアやWebデザイン関連のメディアなどを複数運営しています。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /service -->

</main>
<!-- /content -->

    <Footer />

  </div>
  <!-- /wrapper -->


</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

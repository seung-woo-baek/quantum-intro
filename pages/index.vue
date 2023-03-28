<template>
  <div class="main-contents">
    <div class="main-banner-wrap">
      <div class="main-text-box">
        <h3 class="main-banner-logo"></h3>
        <p class="main-baaner-text">
          <strong>퀀텀에이치엔비</strong>는 키워드 분석을 통한 맞춤형 컨텐츠를 기획 및 제작하고<br>
          다양한 인사이트를 활용하여 1인 미디어 채녈 활성화, 병 의원 마케팅을 진행합니다.<br>
          또한 컨설팅을 지속할 수 있도록 상품 소싱 및 커머스까지 연계하여 수익모델을 창출하고<br>
          응급환자, 난치병 어린이 의료비 등을 위한 기부활동, 지역 의료시설을 위한 캠페인을 진행하는<br>
          <strong>병·의원 전문 맞춤형 Total Medical MCN Commerce & Marketing 기업</strong>입니다.
        </p>
      </div>
    </div>
    <div class="main-card-wrap">
      <ul class="main-card-list">
        <li class="main-card">
          <img src='../assets/images/pc/main/p.main_img01.jpg' class="main-card-img" />
          <h6 class="main-card-title">맞춤형 케어톡 웹사이트 제작 및 운영</h6>
          <p class="main-card-text">
            상품 연계·판매, 운영 및 채널 홍보를 목적으로 하는<br> 개별 맞춤형 케어톡 웹사이트를 제공합니다.
          </p>
        </li>
        <li class="main-card">
          <img src='../assets/images/pc/main/p.main_img02.jpg' class="main-card-img" />
          <h6 class="main-card-title">Dr.caretoc 컨텐츠 제작</h6>
          <p class="main-card-text">
            건강정보 관련 컨텐츠 제작 및 바이럴&채널 홍보를 위한 유튜브 채널입니다.
          </p>
        </li>
        <li class="main-card">
          <img src='../assets/images/pc/main/p.main_img02.jpg' class="main-card-img" />
          <h6 class="main-card-title">Grip을 통한 양방향 소통</h6>
          <p class="main-card-text">
            우리동네 라이브를 통한 지역마케팅 소통과 Dr.caretoc 그립 계정으로 연계방송을 통항 바이럴 마케팅이 가능합니다.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
  }
}
</script>

<style lang="scss" scoped>
  .main-banner-wrap{
    display: flex;
    align-items: center;
    min-width: 1190px;
    height: 1080px;
    padding: 0 60px;
    background: url('images/pc/main/p.main_bn.jpg') no-repeat center;
    background-size: cover;
    .main-text-box{
      display: flex;
      flex-direction: column;
      margin-left: 220px;
      .main-banner-logo{
        width: 344px;
        height: 41px;
        background: url('images/pc/main/p.main_logo.png') no-repeat
      }
      .main-baaner-text{
        margin-top: 88px;
        font-size: 18px;
        font-weight: 500;
        line-height: 200%;
        color: #313130;
      }
    }
  }
  .main-card-wrap{
    display: flex;
    justify-content: center;
    padding: 176px 0;
    min-width: 1190px;
    .main-card-list{
      display: flex;
      justify-content: space-between;
      .main-card{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        max-width: 480px;
        color: #313130;
        &+.main-card{
          margin-left: 30px;
        }
        .main-card-title{
          margin-top: 64px;
          font-size: 28px;
          font-weight: 700;
        }
        .main-card-text{
          margin-top: 24px;
          font-size: 17px;
          font-weight: 500;
        }
      }
    }
  }
</style>
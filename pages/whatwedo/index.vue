<template>
 <div class="page1-contents">
  <div class="page1-banner-inner">
    <div class="page1-banner-top">
      <h3 class="page1-title">WHAT WE DO</h3>
      <h4 class="page1-banner-sub-title">세상의 모든 건강을 연결하는 Doctor MC</h4>
    </div>
    <div class="page1-banner-middle">
      <p class="page1-banner-text1">
        <strong>M</strong>CN ――&nbsp;<strong>C</strong>ONTENTS ――&nbsp;<strong>M</strong>ARKETING ――&nbsp;<strong>C</strong>OMMERCE ――&nbsp;<strong>M</strong>EDICAL ――&nbsp;<strong>C</strong>ONTRIBUTE
      </p>
    </div>
    <div class="page1-banner-bottom">
      <img src='../../assets/images/pc/what_we_do/p.1_ob.jpg' class="page1-banner-img" />
    </div>
  </div>
  <div class="page1-card-wrap">
    <h3 class="page1-title">VISION</h3>
    <ul class="page1-card-list">
      <li class="page1-card">
        <img src="../../assets/images/pc/what_we_do/p.1_img01.jpg">
        <h5 class="page1-card-title">컨텐츠</h5>
        <p class="page1-card-text">매달 바뀌는 이슈들, 맞춤형 키워드 분석에 맞는 컨텐츠 기획으로 고관여 유입 확대 및 유튜브 영상, 쇼츠, 릴스 등 유입에 최적화된 이미지, 영상 기획 및 제작</p>
      </li>
      <li class="page1-card">
        <img src="../../assets/images/pc/what_we_do/p.1_img02.jpg">
        <h5 class="page1-card-title">마케팅</h5>
        <p class="page1-card-text">병의원 마케팅 최적화 / 1인 MCN<br><span>유튜브, 인스타, 틱톡, 블로그 등</span></p>        
      </li>
      <li class="page1-card">
        <img src="../../assets/images/pc/what_we_do/p.1_img03.jpg">
        <h5 class="page1-card-title">바이럴</h5>
        <p class="page1-card-text">타켓에 맞는 셀럽 섭외로 신규 유입 확장</p>
      </li>
      <li class="page1-card">
        <img src="../../assets/images/pc/what_we_do/p.1_img04.jpg">
        <h5 class="page1-card-title">커머스</h5>
        <p class="page1-card-text">유통페이지 구축 및 유통 관리<br>컨텐츠, PPL, 프로모션 마케팅 등을 통한 수익 창출</p>
      </li>
      <li class="page1-card">
        <img src="../../assets/images/pc/what_we_do/p.1_img05.jpg">
        <h5 class="page1-card-title">캠페인</h5>
        <p class="page1-card-text">커머스 수익의 일부를 모아 분기 단위로 응급 환자를 위한 긴급 의료비를 지원하며 하트데이지 캠페인 진행</p>
      </li>
    </ul>
  </div>
  <div class="page1-symbol-wrap">
    <img src="../../assets/images/pc/what_we_do/p.1_symbolsymbol.png">
    <div class="page1-symbol-text">
      경제적 빈곤과 전쟁 등 여러 가지 요인으로 치료가 어려운 사람들이 있습니다.<br>
      <div><span>Doctor MC</span>는 종사자와 의료가 간절히 필요한 사람들을<br></div>
      지원하기 위해 다양한 캠페인을 기획합니다.<br>
      <div><span>Doctor MC 심볼</span>은 이러한 분들이 희망을 잃지 않고 건강하게 살아가길 바라는 마음을 담았습니다.</div>
    </div>
    <p class="page1-symbol-sub-text">
      <strong>데이지</strong> : 희망, 평화, 명량, 순수한 마음 |&nbsp;<strong>ECCLine</strong> : 응급 상황을 극복하길 바라는 마음
    </p>
  </div>
 </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
  .page1-contents{
    padding-top: 128px;
    .page1-title{
      font-family: 'Proxima Nova';
      font-size: 26px;
      font-weight: 700;
      text-decoration: underline;
    }
    .page1-banner-inner{
      color: #313130;
      .page1-banner-top{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 240px 0 44px;
        background-color: #f4f4f4;
        font-weight: 700;
        .page1-banner-sub-title{
          margin-top: 64px;
          font-size: 48px;
        }
      }
      .page1-banner-middle{
        .page1-banner-text1{
          display: flex;
          justify-content: center;
          font-size: 15px;
          line-height: 34px;
          strong{
            font-weight: 700;
          }
        }
      }
      .page1-banner-bottom{
        display: flex;
        justify-content: center;
        padding: 180px 0;
        background-color: #f4f4f4;
      }
    }
    .page1-card-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 180px 0 100px;
      .page1-card-list{
        margin-top: 64px;
        display: flex;
        .page1-card{
          max-width: 308px;
          &+.page1-card{
            margin-left: 32px;
          }
          .page1-card-title{
            margin-top: 40px;
            font-size: 26px;
            font-weight: 700;
          }
          .page1-card-text{
            margin-top: 24px;
            font-size: 18px;
            font-weight: 500;
            line-height: 30px;
            span{
              font-size: 16px;
              color: #9a9a9a; 
            }
          }
        }
      }
    }
    .page1-symbol-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 747px;
      padding-top: 120px;
      background: url('images/pc/what_we_do/p.1_bg.jpg') no-repeat center;
      background-size: cover;
      .page1-symbol-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 70px;
        font-size: 18px;
        line-height: 35px;
        color: #fff;
        span{
          font-weight: 700;
          color: #3bf63c;
        }
      }
      .page1-symbol-sub-text{
        display: flex;
        justify-content: center;
        width: 662px;
        margin-top: 42px;
        line-height: 40px;
        color: #fff;
        background-color: #4b4b4a;
        strong{
          font-weight: 700;
        }
      }
    }
  }
</style>


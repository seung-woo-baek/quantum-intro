<template>
 <div class="page2-contents">
  <div class="page2-banner-inner">
    <div class="page2-banner-top">
      <h3 class="page2-title">WHY US</h3>
      <h4 class="page2-banner-sub-title">그동안 만족스러운 결과를 얻으셨나요?</h4>
      <h4 class="page2-banner-sub-text1">퀀텀 에이치앤비는 컨텐츠 & 커머스에 필요한 모든 SERVCE를 연결해 드립니다.</h4>
    </div>
    <div class="page2-banner-middle">
      <p class="page2-banner-text2">
        모든 것을 연결한 <strong>국내 유일</strong> 기업입니다.
      </p>
    </div>
    <div class="page2-banner-bottom">
      <img src='../../assets/images/pc/why_us/p.2_ob.png' class="page1-banner-img" />
    </div>
  </div>
  <div class="page2-contents-wrap">
    <div class="page2-title">CONTENTS</div>
    <ul class="page2-item-list">
      <li class="page2-item">
        <img src="../../assets/images/pc/why_us/p.2_icn01.png">
        <p class="page2-item-text">이슈별 핵심 키워드 분석 및 소재 기획 제안</p>
      </li>
      <li class="page2-item">
        <img src="../../assets/images/pc/why_us/p.2_icn02.png">
        <p class="page2-item-text">고객 유입 증가 및 채널 성장을 위한 분석 및 장기 플랜 기획</p>
      </li>
      <li class="page2-item">
        <img src="../../assets/images/pc/why_us/p.2_icn03.png">
        <p class="page2-item-text">지역 커뮤니티 활성화 이벤트 기획 & 의료인을 위한 캠페인 활동 기여</p>
      </li>
    </ul>
  </div>
  <div class="page2-commerce-wrap">
    <div class="page2-title">COMMERCE</div>
    <ul class="page2-item-list">
      <li class="page2-item">
        <img src="../../assets/images/pc/why_us/p.2_icn04.png">
        <p class="page2-item-text">셀럽 PPL 연동을 통한<br>커머스 고객 유입 증가</p>
      </li>
      <li class="page2-item">
        <img src="../../assets/images/pc/why_us/p.2_icn05.png">
        <p class="page2-item-text">병의원 전용 웹사이트<br>구축 및 제품 구성<br>& 전문적인 사이트 운영 관리</p>
      </li>
      <li class="page2-item">
        <img src="../../assets/images/pc/why_us/p.2_icn06.png">
        <p class="page2-item-text">전세계 유명 브랜드 제품<br>직접 소싱을 통한 리소스 공급</p>
      </li>
    </ul>
  </div>
 </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
  .page2-contents{
    padding-top: 128px;
    .page2-title{
      font-family: 'Proxima Nova';
      font-size: 26px;
      font-weight: 700;
      text-decoration: underline;
      color: #fff;
    }
    .page2-banner-inner{
      color: #313130;
      .page2-banner-top{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 240px 0 64px;
        background: url("images/pc/why_us/p.2_bg.jpg") no-repeat;
        background-size: cover;
        font-weight: 700;
        color: #fff;
        .page2-banner-sub-title{
          margin-top: 64px;
          font-size: 48px;
        }
        .page2-banner-sub-text1{
          margin-top: 44px;
          font-size: 20px;
          font-weight: 500;
        }
      }
      .page2-banner-middle{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 128px;
        .page2-banner-text2{
          font-size: 20px;
          line-height: 34px;
          letter-spacing: 2.1px;
          strong{
            font-weight: 700;
          }
        }
      }
      .page2-banner-bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 654px;
        background-color: #f4f4f4;
      }
    }
    .page2-contents-wrap, .page2-commerce-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 180px;
      .page2-item-list{
        display: flex;
        justify-content: center;
        margin-top: 96px;
        .page2-item{
          max-width: 206px;
          +.page2-item{
            margin-left: 60px;
          }
          .page2-item-text{
              margin-top: 44px;
              font-size: 18px;
              line-height: 28px;
              text-align: center;
            }
        }
      }
    }
    .page2-contents-wrap{
      padding-bottom: 142px;
      .page2-title{
        color: #313130;
      }
    }
    .page2-commerce-wrap{
      color: #fff;
      background: url("images/pc/why_us/p.2_bg.jpg") no-repeat;
      background-size: cover;
      padding-bottom: 64px;
    }
  }
</style>


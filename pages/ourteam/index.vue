<template>
 <div class="page3-contents">
  <h3 class="page3-title">OUR TEAM</h3>
  <h4 class="page3-sub-title">맞춤형으로 분야별 최적화 되어있는 전문가가 함께 기획해 드립니다.</h4>
  <div class="page3-contents-wrap">
    <ul class="page3-item-list">
      <li class="page3-item">
        <img src="../../assets/images/pc/our_team/p.3_icn01.png">
        <h6 class="page3-item-title">기획</h6>
        <p class="page3-item-text">컨텐츠 컨셉,<br>내용 기획</p>
      </li>
      <li class="page3-item">
        <img src="../../assets/images/pc/our_team/p.3_icn02.png">
        <h6 class="page3-item-title">마케터</h6>
        <p class="page3-item-text">컨텐츠 최적화, 키워드 서치,<br>바이럴 기획 및 유입 분석, 퍼포머스 마케팅</p>
      </li>
      <li class="page3-item">
        <img src="../../assets/images/pc/our_team/p.3_icn03.png">
        <h6 class="page3-item-title">섭외</h6>
        <p class="page2-item-text">셀럽 섭외 및 <br>시놉 기획, 계약</p>
      </li>
    </ul>
    <ul class="page3-item-list">
      <li class="page3-item">
        <img src="../../assets/images/pc/our_team/p.3_icn04.png">
        <h6 class="page3-item-title">PD</h6>
        <p class="page3-item-text">영상 기획, 연출 및 촬영</p>
      </li>
      <li class="page3-item">
        <img src="../../assets/images/pc/our_team/p.3_icn05.png">
        <h6 class="page3-item-title">편집자</h6>
        <p class="page3-item-text">영상, 모션 및 자막 편집</p>
      </li>
      <li class="page3-item">
        <img src="../../assets/images/pc/our_team/p.3_icn06.png">
        <h6 class="page3-item-title">디자이너</h6>
        <p class="page2-item-text">웹, 상세페이지, 광고 등<br>시각 디자인</p>
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
  .page3-contents{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-bottom: 128px;
    background: url('images/pc/our_team/p.3_bg.jpg') no-repeat;
    background-size: cover;
    .page3-title{
      margin-top: 368px;
      font-family: 'Proxima Nova';
      font-size: 26px;
      font-weight: 700;
      text-decoration: underline;
    }
    .page3-sub-title{
      margin-top: 64px;
      font-size: 48px;
      font-weight: 700;
    }
    .page3-contents-wrap{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      padding: 130px 187px;
      border-top: 16px solid transparent;
      border-image: linear-gradient(to right, #06c84d 0%, #5beb2c 100%);
      border-image-slice: 1;
      background-color: #fff;
      .page3-item-list{
        display: flex;
        &+.page3-item-list{
          margin-top: 72px;
        }
        .page3-item{
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 174px;
          &:first-child{
            padding-right: 70px;
          }
          &:nth-child(2){
            padding: 0 70px;
            border-left: 1px solid #4f4f4f;
            border-right: 1px solid #4f4f4f;
          }
          &:last-child{
            padding-left: 70px;
          }
          .page3-item-title{
            font-size: 26px;
            font-weight: 900;
          }
          .page3-item-text{
            margin-top: 28px;
            font-size: 18px;
            font-weight: 500;
          }
        }
      }
    }
  }
</style>


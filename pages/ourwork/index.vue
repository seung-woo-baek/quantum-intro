<template>
  <div class="page4-wrap">
    <div class="page4-contents1">
      <h3 class="page4-title">OUR WORK</h3>
      <h4 class="page4-text">기능의학과 콘텐츠 큐레이션 기반의</h4>
      <h4 class="page4-sub-title">병의원 전문 커머스</h4>
      <div class="page4-con1-wrap">
        <ul class="page4-item-list">
          <li class="page4-item">
            <div class="page4-item-img-box">
              <img src="../../assets/images/pc/our_work/p.4_img01.jpg">
            </div>
            <h6 class="page4-item-title">케어톡</h6>
          </li>
          <li class="page4-item">
            <div class="page4-item-img-box">
              <img src="../../assets/images/pc/our_work/p.4_img02.jpg">
            </div>
            <h6 class="page4-item-title">닥터케어톡</h6>
          </li>
        </ul>
      </div>
      <h4 class="page4-bottom-title">병의원 전문 커머스</h4>
      <div class="page4-con2-wrap">
        <table class="page4-table">
          <th></th>
          <th>거래처</th>
          <th>제품</th>
          <tr>
            <td>
              <img src="../../assets/images/pc/our_work/p.4_icn02.png">
            </td>
            <td class="page4-table-customer">
              <h6>병·의원</h6>
              <strong>500</strong>
            </td>
            <td class="page4-table-product">
              <h6><span>케어톡 활용</span> 병·의원</h6>
              <strong>500</strong>
            </td>
          </tr>
          <tr>
            <td>
              <img src="../../assets/images/pc/our_work/p.4_icn01.png">
            </td>
            <td class="page4-table-customer">
              <h6>타사 제품 품목 수</h6>
              <strong>200</strong>
            </td>
            <td class="page4-table-product">
              <h6><span>자사</span> 제품 품목 수</h6>
              <strong>500</strong>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
  .page4-contents1{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-bottom: 128px;
    background-color: #f4f4f4;
    background-size: cover;
    .page4-title{
      margin-top: 368px;
      font-family: 'Proxima Nova';
      font-size: 26px;
      font-weight: 700;
      text-decoration: underline;
    }
    .page4-text{
      margin-top: 64px;
      font-size: 20px;
      font-weight: 500;
      text-decoration: underline;
    }
    .page4-sub-title{
      margin-top: 20px;
      font-size: 48px;
      font-weight: 700;
    }
    .page4-con1-wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 90px;
      .page4-item-list{
        display: flex;
        .page4-item{
          &+.page4-item{
            margin-left: 30px;
          }
          display: flex;
          flex-direction: column;
          align-items: center;
          .page4-item-img-box{
            border-top: 3px solid transparent;
            border-image: linear-gradient(to right, #06c84d 0%, #5beb2c 100%);
            border-image-slice: 1;
          }
          .page4-item-title{
            margin-top: 30px;
            font-size: 30px;
            font-weight: 500;
          }
        }
      }
    }
    .page4-bottom-title{
        margin-top: 180px;
        font-size: 44px;
        font-weight: 700;
    }
    .page4-table{
      border: 3px solid #fff;
      th{
        font-size: 28px;
        color: #fff;
        line-height: 35px;
        &:not(:first-child){
          background-color: #313130;
        }
      }
    }
  }
</style>


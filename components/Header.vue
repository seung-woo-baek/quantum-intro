<template>
  <header :class="{ 'mobile-on' : isMenuOpened }">
    <div class="logo-wrap">
    <a href="/index.html">
      <h1 class="header-logo"></h1>
    </a>
    </div>
    <nav class="menu">
      <ul class="menu-list">
        <li class="menu-list-item"><a href="/whatwedo/index.html">What we do</a></li>
        <li class="menu-list-item"><a href="/whyus/index.html">Why us</a></li>
        <li class="menu-list-item"><a href="/ourteam/index.html">Our team</a></li>
        <li class="menu-list-item"><a href="/ourworks/index.html">Our work</a></li>
        <li class="menu-list-item"><a href="/contact/index.html">Contact</a></li>
      </ul>
    </nav>
    <button class="menu-burger-btn" @click="toggleMenu"/>
  </header>
</template>

<script>
export default {
  data(){
    return{
      isMenuOpened: false,
      widowWidth: 0
    }
  },
  mounted(){

  },
  methods:{
    toggleMenu(){
      this.isMenuOpened = !this.isMenuOpened
    }
  }
}
</script>

<style lang='scss' scoped>
  header{
    font-family: 'Proxima Nova', sans-serif;
    height: 128px;
    display: flex;
    justify-content: space-between;
    padding: 60px 60px 0 60px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: transparent;
    .header-logo{
      width: 219px;
      height: 28px;
      background: url('images/pc/logo.png') no-repeat;
    }
    .menu-list{
      display: flex;
      font-size: 21px;
      font-weight: 500;
      color: #313130;
      .menu-list-item{
        &+.menu-list-item{
          margin-left: 48px;
        }
      }
    }
    .menu-burger-btn{
      display: none;
      position: absolute;
      top: 40px;
      right: 40px;
      width: 27px;
      height: 27px;
      background: url('images/mobile/M.menu.png');
    }
    .mobile-menu{
      position: absolute;
      top: 0;
      height: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    header{
      height: auto;
      padding: 40px;
      background-color: #fff;
      min-width: 1190px;
      .header-logo{
        background: url('images/mobile/M.logo.png') no-repeat;
        background-size: contain;
      }
      .menu{
        display: none;
      }
      .menu-burger-btn{
        display: block;
      }
      &.mobile-on{
        flex-direction: column;
        bottom: 0;
        justify-content: flex-start;
        
        .menu-burger-btn{
          background: url('images/mobile/M.menu_close.png');
        }
        .menu{
          display: block;
          margin-top: 140px;
          .menu-list{
            flex-direction: column;
            .menu-list-item +.menu-list-item{
              margin-left: 0;
              margin-top: 100px;
            }
          }
        }
      }
    }
    
  }
</style>
<template>
  <div id="app">
    <app-header/>
    <router-view :key="$route.path"/>
  </div>
</template>

<style lang="scss">
  @import "/scss/helpers";

  // Base

  * {
      background: 0 0;
      border: 0;
      box-sizing: border-box;
      color: $color-dark;
      font: 300 20px/1.6875 -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      vertical-align: baseline;
      transition: all .5s ease, font-size 0;

      .inverted & {
          color: $color-dark-inverted;
      }

      @include phone {
          font-size: 18px;
      }

      &:focus {
          outline: 0;
      }
  }

  body.inverted {
      background: $color-dark;
  }

  img {
      border-radius: $border-radius;
      display: inline-block;
      vertical-align: bottom;
      width: 100%;
  }

  // Base > Typography

  .sub {
      color: $color-light-medium;

      .inverted & {
          color: $color-light-medium-inverted;
      }
  }

  h1 {
      font-size: 2rem;
      letter-spacing: -.025rem;
      line-height: 1.3125;
      margin-bottom: 1.3125rem;
  }

  h1,
  h2 {
      transform: translateX(-.0625rem);
  }

  h2 {
      font-size: 1.3125rem;
  }

  h2,
  p {
      margin-bottom: .875rem;
  }

  p:last-of-type {
      margin-bottom: 0;
  }

  p,
  a {
      color: $color-medium;

      .inverted & {
          color: $color-medium-inverted;
      }
  }

  a {
      position: relative;
      text-decoration: none;

      &::before,
      &::after {
          bottom: -.2rem;
          content: '';
          height: 1px;
          left: 0;
          position: absolute;
          width: 100%;
      }

      &::before {
          background: $color-light;

          .inverted & {
              background: $color-light-inverted;
          }
      }

      &::after {
          background: $color-dark;
          transform: scale3d(0, 1, 1);
          transform-origin: left;
          transition: all .3s cubic-bezier(.19, 1, .22, 1);

          .inverted & {
              background: $color-dark-inverted;
          }
      }

      &:hover {
          color: $color-dark;

          .inverted & {
              color: $color-dark-inverted;
          }

          &::after {
              transform: scale3d(1, 1, 1);
          }
      }
  }

  // Base > Layout

  #app {
      display: flex;
      margin: 0 auto;
      max-width: 1600px;
      padding: 10vw;

      @include desk {
          flex-direction: column;
      }

      @include phone {
          padding: 5vw;
      }
  }

  main {
      margin-left: auto;
      max-width: 700px;

      @include desk {
          margin: 0 auto;
      }
  }

  .intro {
      margin-bottom: 5.25rem;

      @include phone {
          padding: 0 7.5vw;
      }
  }

  .image {
      margin-bottom: 5.25rem;

      @include phone {
          margin-bottom: 1.325rem;
      }

      &:last-of-type {
          margin-bottom: 0;
      }
  }
</style>

<script>
  export default {
    name: 'App',
    data() {
      return {
        projects: 0
      }
    },
    mounted() {
      const main = document.getElementsByTagName("main")[0];
      let currentPixel = window.pageYOffset;
      const looper = function() {
        const newPixel = window.pageYOffset;
        const diff = newPixel - currentPixel;
        const speed = 1 * ((2 / (1 + Math.exp(-1 * 3 * diff))) -1);
        main.style.transform = "skewY(" + speed + "deg)";
        currentPixel = newPixel;
        requestAnimationFrame(looper);
      }
      looper();
    }
  }
</script>

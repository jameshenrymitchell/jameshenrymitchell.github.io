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
      font: 300 20px/1.6875 -apple-system, BlinkMacSystemFont, sans-serif;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      transition-duration: .5s;
      transition-property: background-color, color, fill, opacity;
      transition-timing-function: ease;
      vertical-align: baseline;

      @include phone {
          font-size: 18px;
      }

      &:focus {
          outline: 0;
      }
  }

  img {
      display: inline-block;
      vertical-align: bottom;
      width: 100%;
  }

  // Base > Typography

  .sub {
      color: $color-light-medium;
  }

  h1 {
      font-size: 2rem;
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
      }

      &::after {
          background: $color-dark;
          transform: scale3d(0, 1, 1);
          transform-origin: left;
      }

      &:hover,
      &.router-link-active {
          color: $color-dark;

          &::after {
              transform: scale3d(1, 1, 1);
          }
      }
  }

  // Base > Layout

  main {
      margin-left: auto;
      max-width: 700px;

      @include desk {
          margin: 0 auto;
      }

      @include image-width {
          max-width: 800px;
      }
  }

  .intro {
      margin-bottom: 5.25rem;
  }

  #app {
      display: flex;
      padding: 10vw;
      margin: 0 auto;
      max-width: 1600px;

      @include desk {
          flex-direction: column;
          padding: 7.5vw;
      }

      @include image-width {
          padding: 0;
      }
  }
</style>

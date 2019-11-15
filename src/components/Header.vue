<template>
  <header>
    <router-link tag="nav" to="/projects">
      <h2>James Mitchell</h2>
      <p class="sub">Product Designer</p>
    </router-link>
    <a href="mailto:hello@jamesmitchell.info"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330.001 330.001" style="enable-background:new 0 0 330.001 330.001;" xml:space="preserve"><g><path d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
    		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"/><polygon points="165.001,146.4 310.087,40.001 19.911,40 	"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></a>
  </header>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  header {
      display: flex;
      flex-direction: column;
      position: fixed;
      transform: translateY(.4365rem);
      width: auto;

      @include desk {
          align-items: center;
          flex-direction: row;
          margin: 0 auto 15vw auto;
          max-width: 700px;
          position: static;
          width: 100%;
      }

      @include phone {
          margin: 0 auto 22.5vw auto;
          padding: 7.5vw 7.5vw 0;
      }

      nav {
          cursor: pointer;

          h2 {
              margin-bottom: .125rem;
          }
      }

      a {
          margin-top: 2.625rem;

          &::before,
          &::after {
              display: none;
          }

          &:hover {
              svg {
                  fill: $color-dark;

                  .inverted & {
                      fill: $color-dark-inverted;
                  }
              }
          }

          svg {
              fill: $color-light-medium;
              height: 20px;
              width: 20px;

              .inverted & {
                  fill: $color-light-medium-inverted;
              }
          }

          @include desk {
              margin: 0 0 0 auto;
          }
      }
  }
</style>

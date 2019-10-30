<template>
  <header>
    <router-link tag="nav" to="/projects">
      <h2>James Mitchell</h2>
      <p class="sub">Product Designer</p>
    </router-link>
    <a href="mailto:hello@jamesmitchell.info"><svg enable-background="new 0 0 479.058 479.058" height="512" viewBox="0 0 479.058 479.058" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/></svg></a>
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
          display: flex;
          flex-direction: row;
          margin: 0 auto 15vw auto;
          width: 100%;
          max-width: 700px;
          position: static;
      }

      @include image-width {
          max-width: 800px;
          padding: 7.5vw 7.5vw 0;
      }

      nav {
          cursor: pointer;

          h2 {
              margin-bottom: .125rem;
          }
      }

      a {
          background: $color-light;
          border-radius: 100%;
          align-items: center;
          display: flex;
          height: 44px;
          justify-content: center;
          margin-top: 2.625rem;
          width: 44px;

          &::before,
          &::after {
              display: none;
          }

          &:hover {
              background: #fff;
              box-shadow: 0 0 .875rem 0 rgba(0, 0, 0, .15);
          }

          svg {
              fill: $color-medium;
              height: 22px;
              width: 22px;
          }

          @include desk {
              margin: 0 0 0 auto;
          }
      }
  }
</style>

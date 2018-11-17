<template>
  <footer>
    <a href="mailto:hello@jamesmitchell.info">hello@jamesmitchell.info</a>
    <small>&copy; {{ new Date().getFullYear() }}</small>
  </footer>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  footer {
      align-items: center;
      border-top: 1px solid $color-light;
      display: flex;
      padding: 2rem;

      .inverted & {
          border-color: $color-light-inverted;
      }

      a::before,
      a::after {
          display: none;
      }

      small {
          margin-left: auto;
      }
  }
</style>

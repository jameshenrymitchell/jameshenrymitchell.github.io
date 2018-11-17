<template>
  <main class="about">
    <div class="container">
      <div>
        <h1>Shaping brands and digital experiences</h1>
      </div>
      <div>
        <p>Over the past five years, I’ve worked at the intersection of design and technology&mdash;helping businesses of all sizes to secure competitive advantage and adapt to an ever-changing&nbsp;landscape.</p>
        <p>Design is much more than aesthetics. It’s creative problem solving. A&nbsp;wealth of complex, interconnected decisions that culminate in a great product, when carefully considered. Enquiry, empathy and challenge: a&nbsp;process reaching for the optimum&nbsp;solution.</p>
        <p><a href="mailto:hello@jamesmitchell.info">Drop me a line</a> if you’d like to discuss a project, or simply say&nbsp;hello.</p>
      </div>
      <div>
        <h2>Services</h2>
        <ul>
          <li>Brand Identity</li>
          <li>Information Architecture</li>
          <li>User Experience Design</li>
          <li>Digital Product Design</li>
          <li>Web Development</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  main {
      display: flex;
      padding: 6rem 0;
  }

  .container {
      display: flex;
      flex-wrap: wrap;
      max-width: 920px;

      @include medium {
          display: block;
      }

      div {
          &:first-of-type {
              margin-top: auto;
          }

          &:first-of-type,
          &:nth-of-type(2) {
              flex-basis: 60%;
          }

          &:last-of-type {
              border-top: 3px solid $color-dark;
              flex-basis: calc(40% - 4rem);
              margin-left: auto;
              margin-top: .5rem;
              padding-top: 1rem;

              .inverted & {
                  border-color: $color-dark-inverted;
              }

              @include medium {
                  border: 0;
                  margin: 1.5rem 0 0;
                  padding: 0;

                  .inverted & {
                      border: 0;
                  }
              }
          }

          h1 {
              max-width: 400px;
          }

          h1,
          h2 {
              transform: translateX(-.075rem);
          }
      }
  }
</style>

<script>
  export default {
    mounted() {
      document.title = "James Mitchell — About"
      document.getElementsByTagName("body")[0].classList.add("inverted")
      function adjustMainHeight() {
        var minHeight = window.innerHeight - (document.getElementsByTagName("header")[0].offsetHeight + document.getElementsByTagName("footer")[0].offsetHeight)
        document.getElementsByTagName("main")[0].style.minHeight = minHeight + "px"
      }
      adjustMainHeight()
      window.onresize = adjustMainHeight
    },
    beforeDestroy() {
      document.getElementsByTagName("body")[0].classList.remove("inverted")
      document.getElementsByTagName("main")[0].style.minHeight = null
    }
  }
</script>

<template>
  <main>
    <div class="intro">
      <h1 data-aos="fade">Shaping the brands and digital experiences&nbsp;of tomorrow</h1>
      <p data-aos="fade">From elevating brand perceptions to forging more meaningful bonds with customers, I’ve spent the past six years helping companies realise their potential. The digital economy is a forest of complex, interconnected ideas, and design is our compass; a catalyst for positive change. Only through an iterative process of enquiry, empathy and challenge, can we expect to answer tomorrow’s&nbsp;needs.</p>
    </div>
    <router-link data-aos="fade" tag="div" class="image" :to="'/projects/' + project.id" v-for="project in projects" v-if="project.archive == false" :data="project" :key="project.id">
      <img data-aos="fade" :src="'/static/img/' + project.id + '0.png'" :alt="project.client">
      <h2 v-html="project.title"></h2>
      <p v-html="project.client"></p>
    </router-link>
    <h2 class="footnote" data-aos="fade">Feel free to <a href="mailto:hello@jamesmitchell.info">drop me a line</a></h2>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  .image {
      border-radius: $border-radius;
      cursor: pointer;
      padding: 2.625rem 0;
      width: 100%;

      &:hover {
      }

      h2 {
          margin: 2.625rem 0 .125rem 0;
      }

      h2,
      p {
        @include phone {
            transform: translateX(7.5vw);
        }
      }
  }

  .footnote {
      color: $color-light-medium-inverted;
      margin-top: 20vw;

      @include phone {
          margin-top: 22.5vw;
          padding: 0 7.5vw;
      }

      a {
          font: inherit;
      }
  }
</style>

<script>
  import json from '../projects.json'

  export default {
    name: 'Projects',
    data() {
      return {
        projects: json
      }
    },
    mounted() {
      document.title = "James Mitchell — Digital Product Designer"
      document.getElementsByTagName("body")[0].className = "inverted"
    },
    beforeDestroy() {
      document.getElementsByTagName("body")[0].classList.remove("inverted")
      document.getElementsByTagName("body")[0].style.backgroundColor = null
    }
  }
</script>

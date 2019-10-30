<template>
  <main>
    <div class="intro">
      <h1>Shaping brands and digital&nbsp;experiences.</h1>
      <p>Over the past six years, I've helped organisations of all sizes to pursue their goals. The digital economy is a forest of complex, interconnected ideas; where design can offer clarity through an interative process of enquiry, empathy and challenge.</p>
      <p><a href="mailto:hello@jamesmitchell.info">Drop me a line</a> if you’d like to discuss a project, or simply say&nbsp;hello.</p>
    </div>
    <div class="tiles">
      <router-link tag="div" class="tile" :to="'/projects/' + project.id" v-for="project in projects" v-if="project.archive == false" :data="project" :key="project.id">
        <div class="overlay" :style="{ background: project.color }">
          <h2 v-html="project.desc"></h2>
          <p v-html="project.title"></p>
        </div>
        <img :src="'/static/img/' + project.id + '0.png'" :alt="project.title">
      </router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  .intro {
      @include image-width {
          padding: 0 7.5vw;
      }
  }

  .tiles {
      .tile {
          cursor: pointer;
          margin-bottom: 5.25rem;
          position: relative;
          width: 100%;

          @include image-width {
              margin-bottom: 1.325rem;
          }

          &:last-of-type {
              margin-bottom: 0;
          }

          &:hover {
             .overlay {
                 opacity: .975;
             }
          }

          .overlay {
              bottom: 0;
              left: 0;
              opacity: 0;
              padding: 6.3%;
              position: absolute;
              right: 0;
              top: 0;
              transition-property: opacity;

              @include image-width {
                  padding: 7.5vw;
              }

              h2 {
                  color: $color-dark-inverted;
                  margin-bottom: .125rem;
              }

              p {
                  color: $color-medium-inverted;
              }
          }

          &:last-of-type .overlay {
              h2 {
                  color: $color-dark;
              }

              p {
                  color: $color-medium;
              }
          }
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
    }
  }
</script>

<template>
  <main class="container projects">
    <div class="container">
      <h1>Hey, I’m James. A&nbsp;designer and developer, hoping to make the world (wide web) a better&nbsp;place.</h1>
      <router-link tag="a" class="caps" to="/about">Learn more</router-link>
    </div>
    <div class="tiles">
      <router-link tag="div" class="tile" :style="{ background: project.color }" :to="'/projects/' + project.id" v-for="project in projects" :data="project" :key="project.id">
        <div class="overlay">
          <h2 v-html="project.title"></h2>
          <p v-html="project.desc" v-if="project.id != 'nieuwebeelding' && project.id != 'archive'"></p>
        </div>
        <img :src="'/static/img/' + project.id + '0.png'" :alt="project.title">
      </router-link>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  main {
      max-width: 1604px;
      text-align: center;
      width: 100%;

      @include large {
          padding-bottom: 4px;
      }

      .container {
          margin-bottom: 4rem;
          max-width: 800px;

          @include medium {
              text-align: left;
          }
      }

      .tiles {
          display: flex;
          flex-wrap: wrap;

          .tile {
              cursor: pointer;
              flex-basis: calc(50% - 2px);
              margin-bottom: 4px;
              position: relative;

              &:nth-of-type(even) {
                  margin-left: auto;
              }

              &:nth-of-type(9),
              &:nth-of-type(10) {
                  margin-bottom: 0;
              }

              &:hover {
                 .overlay {
                     transform: scale(1.05);
                     transition: transform .3s;
                 }

                 img {
                     filter: grayscale(25);
                     opacity: 0.1;
                     transition: all 1s;
                 }
              }

              .overlay {
                  bottom: 0;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  left: 0;
                  padding: 6.3%;
                  position: absolute;
                  right: 0;
                  top: 0;

                  h2 {
                    color: $color-dark-inverted;
                    margin-bottom: 0;
                  }

                  p {
                    color: $color-medium-inverted;
                  }
              }

              img {
                  filter: grayscale(100);
                  opacity: .025;
                  transition-property: opacity;
              }

              @include medium {
                  flex-basis: 100%;

                  &:nth-of-type(9) {
                      margin-bottom: 4px;
                  }
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

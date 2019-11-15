<template>
  <main>
    <div v-for="project in currentProject">
      <div class="intro">
        <h1 data-aos="fade" v-html="project.title"></h1>
        <div class="meta">
          <p data-aos="fade" v-if="project.id != 'nieuwebeelding'"><span>Client:</span><span v-html="project.client"></span></p>
          <p data-aos="fade"><span>Role:</span><span v-html="project.role"></span></p>
        </div>
        <p data-aos="fade" v-if="project.desc != null" v-html="project.desc"></p>
      </div>
      <div class="image" v-for="item, index in project.img.length">
        <img data-aos="fade" :src="'/static/img/' + project.id + index + '.png'" :alt="project.img[index].alt" :title="project.img[index].alt">
        <p data-aos="fade" v-if="project.img[index].commentary != null" v-html="project.img[index].commentary"></p>
      </div>
    </div>
    <router-link data-aos="fade" tag="div" class="next" :to="'/projects/' + project.next.id" v-for="project in currentProject" :data="project" :key="project.next.id">
      <p class="sub">Next</p>
      <h2 v-html="project.next.title"></h2>
    </router-link>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  .intro {
      h1 {
          margin-bottom: 2.625rem;
      }

      .meta {
          margin-bottom: 1.325rem;

          p span {
              &:first-of-type {
                  margin-right: .5rem;
              }

              &:nth-of-type(2) {
                  color: $color-medium;
              }
          }
      }
  }

  .image {
      p {
          margin-top: 2.625rem;

          @include phone {
              padding: 0 7.5vw 7.5vw;
          }
      }
  }

  .next {
      cursor: pointer;
      margin-top: 5.25rem;
      transform-origin: left;

      @include phone {
          margin-top: 0;
          padding: 22.5vw 7.5vw 7.5vw;
      }

      h2 {
          margin-bottom: 0;
      }
  }
</style>

<script>
  import json from '../projects.json'
  import App from '@/App'

  export default {
    name: 'ProjectDetail',
    data() {
      return {
        projects: json
      }
    },
    props: ['id'],
    computed: {
      currentProject() {
        const projects = this.projects
        for (var i = 0; i < projects.length; i++) {
          if (i + 1 > projects.length - 1) {
            var nextAcc = 0
          } else if (i - 1 < 0) {
            var nextAcc = i + 1
          } else {
            var nextAcc = i + 1
          }
          projects[i].next = {
            id: projects[nextAcc].id,
            title: projects[nextAcc].title
          }
        }
        const currentProject = this.id
        return projects.filter(function(e) {
          return e.id === currentProject
        })
      }
    },
    mounted() {
      const projects = this.projects
      for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === this.id) {
          document.title = "James Mitchell — " + projects[i].client
        }
      }
    }
  }
</script>

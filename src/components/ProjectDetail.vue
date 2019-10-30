<template>
  <main>
    <div v-for="project in currentProject">
      <div class="intro">
        <h1 v-html="project.desc"></h1>
        <div class="meta">
          <p><span>Client:</span><span v-html="project.title"></span></p>
          <p><span>Role:</span><span v-html="project.scope"></span></p>
        </div>
        <p v-if="project.longdesc != null" v-html="project.longdesc"></p>
      </div>
      <img :src="'/static/img/' + project.id + '0.png'" :alt="project.img[0]">
      <img v-for="item in project.img.length-1" :src="'/static/img/' + project.id + item + '.png'" :alt="project.img[item]">
    </div>
    <router-link tag="div" class="next" :to="'/projects/' + project.next.id" v-for="project in currentProject" :data="project" :key="project.next.id">
      <p class="sub">Next</p>
      <h2 v-html="project.next.title"></h2>
    </router-link>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  .intro {
      @include image-width {
          padding: 0 7.5vw;
      }

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

  .details {
      margin: 2.625rem 0;
  }

  img {
      margin-bottom: 5.25rem;

      @include image-width {
          margin-bottom: 1.325rem;
      }
  }

  .next {
      cursor: pointer;

      @include image-width {
          padding: 0 7.5vw 7.5vw;
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
            title: projects[nextAcc].desc
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
          document.title = "James Mitchell — " + projects[i].title
        }
      }
    }
  }
</script>

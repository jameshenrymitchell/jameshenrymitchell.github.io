<template>
  <main class="project">
    <div class="container details" v-for="project in currentProject">
      <h1 v-html="project.title"></h1>
      <p class="caps" v-html="project.scope"></p>
    </div>
    <div class="bg" v-for="project in currentProject">
      <div class="container">
        <img :src="'/static/img/' + project.id + '0.png'" :alt="project.img[0]" :title="project.img[0]">
        <div class="details">
          <h2 v-html="project.desc"></h2>
          <p v-if="project.longdesc != null" v-html="project.longdesc"></p>
        </div>
        <img v-for="item in 3" :src="'/static/img/' + project.id + item + '.png'" :alt="project.img[item]" :title="project.img[item]">
      </div>
    </div>
    <nav>
      <router-link tag="div" class="prev" :to="'/projects/' + project.prev.id" v-for="project in currentProject" :data="project" :key="project.prev.id">
        <p class="caps">Previous</p>
        <h2>{{ project.prev.title }}</h2>
      </router-link>
      <router-link tag="div" class="next" :to="'/projects/' + project.next.id" v-for="project in currentProject" :data="project" :key="project.next.id">
        <p class="caps">Next</p>
        <h2>{{ project.next.title }}</h2>
      </router-link>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/helpers";

  main {
      padding-bottom: 2rem;

      .container {
          max-width: 800px;
          text-align: center;

          @include medium {
              width: 100%;
          }

          @include image-width {
              text-align: left;
          }

          &.details {
              @include image-width {
                  max-width: calc(100% - 4rem);
              }

              h1 {
                  margin-bottom: 1rem;
              }

              p {
                  margin-bottom: 7.75rem;
              }
          }
      }

      .bg {
          background: rgba(0, 0, 0, .025);
          padding-bottom: 4rem;

          @include medium {
              padding-bottom: 0;
          }

          img {
              margin-bottom: 1rem;

              @include medium {
                  margin-bottom: 4px;
              }

              &:first-of-type {
                  transform: translateY(-3.75rem);
              }

              &:first-of-type,
              &:last-of-type {
                  margin-bottom: 0;
              }
          }

          .details {
              margin: 0 2rem 4rem 2rem;
              text-align: left;
          }
      }

      nav {
          display: flex;
          margin-top: 2rem;

          .prev,
          .next {
              cursor: pointer;
              transition-property: all;
              width: 50%;

              &:hover {
                  h2::after {
                      opacity: 1;
                  }
              }

              h2 {
                  position: relative;

                  &::after {
                      content: '';
                      display: block;
                      height: 100%;
                      opacity: 0;
                      position: absolute;
                      top: -.65rem;
                  }
              }

              p {
                  margin-bottom: 0;
              }
          }

          .prev {
              margin-left: 2rem;

              &:hover {
                  transform: scale(.9) translateX(1rem);

                  h2::after {
                      left: -2.25rem;
                      padding-right: 1.75rem;
                  }
              }

              h2::after {
                  background: url("/static/img/larr.svg") no-repeat left;
                  background-size: 30px;
              }
          }

          .next {
              margin-right: 2rem;
              text-align: right;

              &:hover {
                  transform: scale(.9) translateX(-1rem);

                  h2::after {
                      right: -2.25rem;
                      padding-left: 1.75rem;
                  }
              }

              h2::after {
                  background: url("/static/img/rarr.svg") no-repeat right;
                  background-size: 30px;
              }
          }
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
            var prevAcc = i - 1
            var nextAcc = 0
          } else if (i - 1 < 0) {
            var prevAcc = projects.length - 1
            var nextAcc = i + 1
          } else {
            var prevAcc = i - 1
            var nextAcc = i + 1
          }
          projects[i].prev = {
            id: projects[prevAcc].id,
            title: projects[prevAcc].title
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
          document.title = "James Mitchell — " + projects[i].title
          document.getElementsByTagName("header")[0].style.borderColor = projects[i].color
        }
      }
    },
    beforeDestroy() {
      document.getElementsByTagName("header")[0].style.borderColor = "#000"
    }
  }
</script>

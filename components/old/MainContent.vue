<template>
  <section id="content">
    <article>
      <p>
        I’m a <strong>Gobelins</strong> student in <strong>interactive design</strong>.
        There I study and practice many interesting things like <i>UX design</i>,
        <i>storytelling</i>, <i>web documentaries</i>, <i>design thinking</i> and experiment
        some front-end technologies like <i>Vue</i>, <i>Nuxt</i>, <i>React</i>, <i>Pixi</i> or <i>Three</i>.
      </p>
    </article>
    <article>
      <p>
        Right now I’m currently working on
        <span class="main">LOUE MOI SI TU PEUX</span>
        a mobile first game where the user has 5 minutes to make the right
        choices to find a <strong>flat in Paris</strong>. He will end up realizing how absurdly
        hard it is to get an apartment. It’s a work in progress.
      </p>
    </article>
    <article>
      <p>
        Before I worked on
        <span class="main">FLIRT FACTORY</span>
        an interactive experience on desktop where the user is invited to explore
        the <strong>history of seduction through the ages</strong>. During the experience, the user
        embody a <strong>technician</strong> who has to repair this broken factory.
      </p>
    </article>
    <article>
      <p>
        Before I worked on
        <span class="main">FLIRT FACTORY</span>
        an interactive experience on desktop where the user is invited to explore
        the <strong>history of seduction through the ages</strong>. During the experience, the user
        embody a <strong>technician</strong> who has to repair this broken factory.
      </p>
    </article>
  </section>
</template>

<script>
// import ScrollMagic from '~/plugins/vue-scrollmagic'

export default {
  data () {
    return {
    }
  },
  mounted () {
//     if (process.client) {
//   require('external_library')
// }
    // let controller = new ScrollMagic.Controller();
    // const scene = new vm.$scrollmagic.Scene() // Works in every components


  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
#content {
  margin: 0 auto;
  padding: 0 35% 0 10%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  article {
    margin: 20vh 0;
    p {
      font-family: Libre Baskerville;
      font-size: 1.2em;
      line-height: 2em;
      font-weight: 200;

      strong {
        position: relative;
        width: 100%;
        border-bottom: 6px solid $audren_main;
      }

      .main {
        display: block;
        text-transform: uppercase;
        padding: 5vh 0;
        font-size: 2.2em;
        font-weight: 900;
        color: rgba(255, 255, 255, 0);
        color: rgba(255, 255, 255, 0);
        -webkit-text-fill-color: rgba(255, 255, 255, 0);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        transition: color 0.5s ease-out;
        -webkit-transition: color 0.5s ease-out;
        -moz-transition: color 0.5s ease-out;
        -o-transition: color 0.5s ease-out;

        &:hover {
          cursor: pointer;
          color: $audren_main;
          -webkit-text-fill-color: $audren_main;
          transform-origin: left;
          // -webkit-transition: all 5s ease-out 1s;
          // -moz-transition: all 5s ease-out 1s;
          // -o-transition: all 5s ease-out 1s;
          // transition: all 5s ease-out 1s;
        }
      }
    }
  }
}
</style>


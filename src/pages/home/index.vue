<template>
  <div @scroll="handleScroll" class="wrapper">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
  </div>
</template>

<script>
import Section1 from './components/section1.vue';
import Section2 from './components/section2.vue';
import Section3 from './components/section3.vue';
import Section4 from './components/section4.vue';
import Section5 from './components/section5.vue';
import Section6 from './components/section6.vue';
import Section7 from './components/section7.vue';
import Section8 from './components/section8.vue';
import Section9 from './components/section9.vue';
export default {
  name: 'Home',
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      scrollTop: 0,
    }
  },
  methods: {
   
    handleScroll(e) {
      this.scrollTop = e.target.scrollHeight;
      window.some = e.target
      window.some2 = e.surrentTarget
      // console.log(e.target, e.target.scrollTop, e.target.screenTop);
    }
  },
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
$yellow: #E8C300 ;
$grey: #E5E5E5;
$black: #000000;
$white: #FFFFFF;
a {
  text-decoration: none;
  color: inherit;
}

.wrapper {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  scroll-behavior: smooth;
  overflow: hidden;
}

.line {
  width: 60px;
  height: 5px;
  background-color: #E8C300;
  border-radius: 50px;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.lorem {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
}

.simple-text {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin-top: 20px;
}

.figure {
  width: 250px;
  height: 250px;
  border: 20px solid #E8C300;
  border-radius: 5px;
  -webkit-filter: drop-shadow(0px 0px 100px rgba(0, 0, 0, 0.5));
          filter: drop-shadow(0px 0px 100px rgba(0, 0, 0, 0.5));
}

</style>

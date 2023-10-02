<script setup>
import {projects} from "@/data";
const changeHeaderBg = ref(false);
const showMobileMenu = ref(false);
const scrollRef = ref(10);
// const navItemHovered =


const handleCloseMenu = () => {
  showMobileMenu.value = false;
}
const handleOpenMenu = () => {
  showMobileMenu.value = true;
}
const handleScroll = () => {
  if (
    window.scrollY >= scrollRef.value ||
    window.pageYOffset >= scrollRef.value
  ) {
    changeHeaderBg.value = true;
  } else {
    changeHeaderBg.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll.bind(this));
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll.bind(this));
});
</script>

<template>
  <div class="w-full bg-darkbg2 h-full overflow-x-hidden">

    <MobileNav :show="showMobileMenu" :closeNav="handleCloseMenu"/>
    <header
      class="mb-2 header px-4 sm:px-20 flex items-center justify-between transition-all duration-300 bg-[#0b1738] py-4"
    >
      <h3
        class="text-white uppercase m-regular flex items-center justify-start  gap-x-1 sm:gap-x-1.5 whitespace-nowrap"
      >
        <span class="w-6 h-6 sm:w-10 sm:h-10">
          <icons-astro-vector class="w-full h-full" />
        </span>
        <span>Hussein Abdullahi</span>
        <span class="hidden sm:block">
          <IconsZap class="w-5 h-5" />
        </span>
      </h3>

      <ul
        class="h-full sm:flex items-center text-white header__items w-max hidden"
      >
        <li
          class="mx-4 my-2 cursor-pointer px-2 py-1 header__item relative overflow-hidden"
        >
          <span
            class="header__item--btn-1 transform will-change-transform transition-transform w-full h-full block duration-100 ease-in z-20"
            >Home</span
          >
          <span
            class="header__item--btn-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full will-change-transform delay-75 duration-150 block ease-in-out z-10"
            >Home</span
          >
        </li>
        <li
          class="mx-4 my-2 cursor-pointer px-2 py-1 header__item relative overflow-hidden"
        >
          <a href="#more-about">
            <span
              class="header__item--btn-1 transform will-change-transform transition-transform w-full h-full block duration-100 ease-in"
              >About</span
            >
            <span
              class="header__item--btn-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full will-change-transform delay-75 duration-150 block ease-in-out"
              >About</span
            >
          </a>
        </li>
        <li
          class="mx-4 my-2 cursor-pointer px-2 py-1 header__item relative overflow-hidden"
        >
          <a href="#exhibit">
            <span
              class="header__item--btn-1 transform will-change-transform transition-transform w-full h-full block duration-100 ease-in"
              >Exhibit</span
            >
            <span
              class="header__item--btn-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full will-change-transform delay-75 duration-150 block ease-in-out"
              >Exhibit</span
            >
          </a>
        </li>
        <li
          class="mx-4 my-2 cursor-pointer px-2 py-1 header__item relative overflow-hidden"
        >
          <a href="#contact">
            <span
              class="header__item--btn-1 transform will-change-transform transition-transform w-full h-full block duration-100 ease-in"
              >Contact</span
            >
            <span
              class="header__item--btn-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full will-change-transform delay-75 duration-150 block ease-in-out"
              >Contact</span
            >
          </a>
        </li>
      </ul>

      <div class="navigation block sm:hidden cursor-pointer" v-show="!showMobileMenu">
        <!-- <input type="checkbox" id="navi-toggle" class="navigation__checkbox" /> -->

        <div  class="navigation__button" @click="handleOpenMenu()">
          <span class="navigation__button-icon">
            <span class="shoot"></span>
          </span>
        </div>
      </div>
    </header>
    <section class="home w-full" id="home">
      <span class="absolute cursor-follow-1 pointer-events-none"></span>
      <span class="absolute cursor-follow-2 pointer-events-none"></span>
      <span class="absolute cursor-follow-3 pointer-events-none"></span>

      <main class="pt-4 sm:pt-8 text-white px-4 md:px-20 z-50">
        <div class="intro sm:my-2 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
          <div class="w-full">
            <h3 class="font-semibold text-lg sm:text-3xl mb-4 sm:mb-12 whitespace-pre -ml-2 sm:ml-0">
              Hey Voyager, I’m<span class="lbg-name-1"> Abdullahi</span> <span class="text-sm sm:text-base">✨</span>
              <span class="lbg-name-1">.</span>
            </h3>

            <div class="sm:mt-2">
              <h2 class="text-2xl sm:text-5xl m-regular my-2">
                A Software <span class="lbg-name-2">Engineer</span>.
              </h2>

              <p class="text-2xl sm:text-5xl m-regular">
                I craft ideas into high quality, scalable apps aimed at
                providing users with great and seamless experiences on the web
                and mobile.
              </p>
            </div>
          </div>

          <div class="w-full flex items-center justify-center sm:justify-end">
            <div
              class="rounded-md overflow-hidden w-60 h-60 mx-auto sm:w-96 sm:h-96 cursor-pointer relative grayscale"
            >
              <img
                src="@/assets/images/abdullahi.png"
                placeholder="astro"
                class="w-full h-full object-cover"
              />

              <!-- <div
                class="absolute w-full h-full top-0 right-0 backdrop-saturate-100 backdrop-sepia"
              ></div> -->
            </div>
          </div>
        </div>
      </main>
    </section>

    <SectionLine />
    <section class="skills w-full px-4 sm:px-20 text-white">
      <h2 class="text-xl sm:text-5xl font-semibold relative cld-semibold">
        Skills&nbsp;<span class="font-normal text-2xl sm:text-6xl pointer-events-none"
          >x</span
        >&nbsp;Tools
      </h2>

      <main class="sm:px-2">
        <div class="block py-1 my-1">
          <span class="font-semibold text-lg sm:text-2xl inline-block sm:mr-2"
            >Languages:</span
          >

          <div class="inline-block">
            <span>Javascript/Typescript</span>, <span>Python</span>,
            <span>Go</span>, <span>Rust</span>.
          </div>
        </div>
        <div class="block py-1 my-1">
          <span class="font-semibold text-lg sm:text-2xl inline-block mr-2"
            >Frameworks:</span
          >

          <div class="inline-block">
            <span>React</span>, <span>Next</span>, <span>Vue</span>,
            <span>Nuxt</span>, <span>React-Native</span>, <span>Angular</span>,
            <span>Nodejs/Express</span>, <span>Flask</span>, <span>Gin</span> ,
            <span>Sass/Scss</span> , <span>Tailwindcss</span> ,
            <span>GraphQl</span>
            .
          </div>
        </div>
        <div class="my-1 block py-1">
          <span class="font-semibold text-lg sm:text-2xl mr-2">Libraries:</span>

          <div class="inline-block">
            <span>Redux</span>, <span>Redux-Toolkit</span>, <span>Vuex</span>,
            <span>Pinia</span>, <span>Headless UI</span>,<span
              >Styled components</span
            >, <span>Material UI</span>, <span>Chakra UI</span>,
            <span>Quasar</span>, <span>GSAP</span>, <span>Framer-motion</span>,
            <span>Threejs</span>
            .
          </div>
        </div>
        <div class="my-1 block py-1">
          <span class="font-semibold text-lg sm:text-2xl mr-2">Database/ORMs:</span>

          <div class="inline-block">
            <span>SQL</span>, <span>MySQL</span>, <span>Sequelize</span>,
            <span>NoSQL</span>, <span>MongoDB</span>, <span>Firebase</span> .
          </div>
        </div>
        <div class="my-1 block py-1">
          <span class="font-semibold text-lg sm:text-2xl mr-2">Other&nbsp;Tools:</span>

          <div class="inline-block">
            <span>Git</span>, <span>Github</span>, <span>HTML 5</span>,
            <span>CSS 3</span>.
          </div>
        </div>
      </main>
    </section>

    <SectionLine />

    <section class="projects-section w-full px-4 sm:px-16 md:px-20 text-white" id="exhibit">
      <h2 class="text-xl sm:text-5xl font-semibold relative mb-8 cld-semibold">Exhibit</h2>

      <ul class="projects w-full flex items-center flex-wrap md:grid md:grid-cols-3 md:mb-4 py-2 gap-y-3 gap-x-2 sm:gap-x-4 md:gap-6 mx-auto">
        <ProjectItem v-for="project in projects" :key="project.name+project.liveLink + project.githubLink" :stacks="project.stacks" :title="project.name" :gl="project.githubLink" :link="project.liveLink"  :description="project.description"/>
      </ul>
    </section>

    <SectionLine class="!my-6" />

    <section class="more-about px-4 sm:px-20 text-white bg-[#101A36] py-4" id="more-about">
      <h2 class="text-2xl sm:text-5xl font-semibold mb-4 sm:mb-6 cld-semibold">
        Who is Abdullahi?
      </h2>

      <div class=" text-lg cld-regular">
        <p>
          Abdullahi Hussein is a creative, innovative and passionate Software
          Engineer, passionate about writing clean and organized code,and with
          keen interest in personal and professional development.
          <br />
          <br />

          I offer my ability (fueled by my passion for building lasting
          solutions) to deliver creative, elegant and efficient solutions to
          problems. I always seek to build my skill base and stay on top of
          latest technologies thus, staying up to date on new and efficient
          problem solving techniques.

          <br />
          <br />
          When not coding, I'm either reading, watching anime/series or resting
          my head 😴. I find self development books and articles interesting.

          <br />
          <br />
          I'm also very ethusiastic about Chemical Engineering,Data-science,
          Machine Learning and AI.

          <br />
          <br />
          While learning Go, Rust,ML&nbsp;&&nbsp;AI, I'm open to and currently
          looking for opportunities where I can contribute my skills and
          collaborate with a team on ambitious projects.

          <br />
          <br />
          Cheers, you now know about me  😉.
        </p>
        <div class="about-me__img">
          <!-- <img src="./img/Ahmad Usman.jpeg" alt="Ahmad Usman Image" /> -->
        </div>
      </div>
    </section>
    <SectionLine />

    <footer class="footer text-white w-full" id="contact">
      <div class="flex flex-col items-start gap-y-2 u-margin-top px-4 sm:px-20 mb-4">
        <p class="text-xl sm:text-3xl font-semibold">
          Want to <span class="lbg-name-1">build</span>,
          <span class="lbg-name-1">ship</span> ,
          <span class="lbg-name-1">amazing</span> software project(s) 😁?
        </p>
        <p class="text-lg sm:text-3xl">
          I'm the guy you <span class="lbg-name-2 font-bold">need</span>👍.
        </p>
        <p class="mx-auto">
          Start by
          <a href="mailto:miraacle@gmail.com"
            ><span class="lbg-name-2">saying hi</span> 👋.</a
          >
        </p>

        <div class="flex items-center justify-center gap-x-4 w-full my-2 h-12">
          <!-- <div class="f"> -->

          <a class="flex items-center gap-x-1" href="mailto:miraacle@gmail.com">
            <IconsMail class="w-4 sm:w-6 h-6 sm:h-8"/>
            <span  class="text-sm sm:text-base">Mail</span>
            <IconsArrowUpRight class="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          <a
            class="text-white flex items-center gap-x-1"
            href="https://github.com/Hussein-miracle"
            target="_blank"
          >
            <IconsGithub class="w-4 sm:w-6 h-6 sm:h-8" />
            <span  class="text-sm sm:text-base">Github</span>
            <IconsArrowUpRight class="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          <a
            class="text-white flex items-center gap-x-0.5 sm:gap-x-1"
            href="https://www.linkedin.com/in/abdullahi-hussein/"
            target="_blank"
          >
            <IconsLinkedin class="w-4 sm:w-6 h-6 sm:h-8" />
            <span class="text-sm sm:text-base">LinkedIn</span>
            <IconsArrowUpRight class="w-3 h-3 sm:w-4 sm:h-4" />
          </a>

          <!-- </div> -->
        </div>

        <div class="max-w-md w-full self-center">
          <code class="">
            "No one is built for anything. We all become good at what we do as a
            result of consistent learning and acquiring information."
          </code>
          <p class="text-center my-1">#JustLearnIt, &lt #KeepAtIt /&gt.</p>
        </div>
      </div>

      <div
        class="flex items-center justify-center transition-all duration-300 bg-[#0b1738] py-4"
      >
        <p class="text-center text-xs sm:text-base">
          Built by Abdullahi Hussein © 2022. All right reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/utils.scss";

@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.header {
  height: pxToRem(70);
  // background-color: $color-yellow;
  //background-color: lighten($color:$dark-bg, $amount: 5%);

  h2::after {
    background: #00c8c8;
    filter: blur(125px);
  }

  // &__item::after,&__item::before{
  //   content: "";
  //   position: absolute;
  //   inset: 0;
  //   background: conic-gradient(

  //   );
  // }

  &__item {
    @apply rounded-md;

    &:hover {
      box-shadow: 12px 12px 27px 0px rgba(169, 70, 247, 0.49);
    }
    &:hover &--btn-1 {
      transform: translateY(-150%);
    }

    &:hover &--btn-2 {
      @apply -translate-y-1/2;
    }

    &::before {
      @apply duration-200 delay-75 will-change-transform ease-out;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      border-radius: inherit;
      background: #a946f7;
      box-shadow: 12px 12px 27px 0px rgba(169, 70, 247, 0.49);
      transform: scaleX(0);
      transform-origin: left center;
    }

    &:hover::before {
      @apply duration-300   ease-in;
      transform: scaleX(100%);
    }
  }

  &__items {
  }
}

.project-item {
  position: relative;
  // cursor: pointer;

  &::before,
  &::after {
    // width: 100%;
    // height: 100%;
    opacity: 0;
    content: "";
    position: absolute;
    inset: -0.15rem;
    border-radius: inherit;
    z-index: 0;

    background: conic-gradient(
      from var(--gradient-angle),
      #40c9ff,
      #e81cff,
      #02012e
    );

    // figma 1
    // border-radius: 12px;
    // background: conic-gradient(
    //   from var(--gradient-angle) ,
    //   #40c9ff 0deg,
    //   #e81cff 54.37500178813934deg,
    //   #1f384a 120.00000357627869deg,
    //   #190d1b 196.875deg,
    //   #33255d 309.375deg
    // );

    // figma 2
    //     border-radius: 12px;
    // background: conic-gradient(
    //   from var(--gradient-angle),
    //   #40c9ff 33.75deg,
    //   #1f384a 90deg,
    //   #190d1b 198.74999284744263deg,
    //   #33255d 309.375deg,
    //   #e81cff 360deg
    // );
    background-blend-mode: screen;

    animation: rotation 15s linear infinite;
  }

  &:hover::after,
  &:hover::before {
    // filter: blur(1.5rem);
    opacity: 1;
  }
}

.navigation{
  &__button {
    display: inline-block;
    // right: 1rem;
    // top: 1rem;
    // position: fixed;
    z-index: 100;

    // hover
    width: 3rem;
    height: 3rem;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.25);
    // background-color: rgba(, 0.8);

    &-icon {
      width: 2rem;
      position: relative;

      //hover
      margin-top: 1.5rem;

      .shoot {
        width: 2.3rem;
        // margin-top: 2.5rem;
        position: absolute;
        height: 2px;
        display: inline-block;
        background-color: white;
        left: 0;
        border-radius: 10px;
        transition: all 0.1s;
      }

      &,
      &::before,
      &::after {
        height: 2px;
        display: inline-block;
        background-color: white;
        border-radius: 10px;
        transition: all 0.2s;
      }

      &::before,
      &::after {
        position: absolute;
        width: 1.3rem;
      }

      &::before {
        content: "";
        top: -7px;
        left: 0;
      }

      &::after {
        content: "";
        top: 7px;
        right: 0;
      }
    }

    &:hover,
    &:active {
      // background-color: $dark-black-background;

      .navigation__button-icon {
        &::before,
        &::after {
          position: absolute;
          width: 1.6rem;
        }

        &::before {
          content: "";
          transform: translate(6px, -1px);
        }

        &::after {
          content: "";
          transform: translate(-6px, 1px);
        }
      }
    }
  }
}

.lbg-name-1 {
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #a984ff 53.12%,
    rgba(100, 225, 220, 0.9) 56.77%,
    rgba(128, 188, 234, 0.94) 68.23%,
    #ffffff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.lbg-name-2 {
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #ffffff 14.06%,
    #8551ff 16.15%,
    #ffffff 83.85%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cursor-follow-1 {
  position: absolute;
  width: 160px;
  height: 160px;
  left: 20px;
  top: 20px;
  z-index: 10;
  background: #6ab3df;
  filter: blur(80px);
}
.cursor-follow-3 {
  position: absolute;
  width: 160px;
  height: 160px;
  left: 20px;
  top: 70%;
  z-index: 10;
  background: #b14eff;
  filter: blur(100px);
}
.cursor-follow-2 {
  position: absolute;
  width: 200px;
  height: 200px;
  right: 20px;
  top: 40px;
  z-index: 10;
  background: #00c8c8;
  filter: blur(80px);
}

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
</style>

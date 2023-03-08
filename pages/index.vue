<template>
  <div class="w-full bg-darkbg h-full">
    <span class="absolute cursor-follow-1"></span>
    <span class="absolute cursor-follow-2"></span>
    <header
      class="header px-20 flex items-center justify-between transition-all duration-300"
      :class="{ 'bg-[#0b1738]': changeHeaderBg === true }"
    >
      <h3 class="text-white uppercase m-regular">
        <span>⚡</span>
        Hussein Abdullahi
        <span>⚡</span>
      </h3>

      <ul class="h-full flex items-center text-white header__items w-max">
        <li class="mx-6 my-2 cursor-pointer p-1.5" v-animatenavitem>Home</li>
        <li class="mx-6 my-2 cursor-pointer p-1.5">About</li>
        <li class="mx-6 my-2 cursor-pointer p-1.5">Exhibit</li>
        <li class="mx-6 my-2 cursor-pointer p-1.5">Contact</li>
      </ul>
    </header>

    <main class="pt-4 text-white px-20">
      <div class="intro my-2 flex items-center justify-between  ">
        <div class="flex-[0.5]">
          <h3 class="font-semibold text-3xl mb-4">
            Hey Voyager , I’m<span class="lbg-name-1"> Abdullahi</span> ✨
            <span class="lbg-name-1">.</span>
          </h3>

          <div class="mt-2">
            <h2 class="text-5xl m-regular my-2">
              A Frontend <span class="lbg-name-2">Engineer</span>.
            </h2>

            <p class="text-5xl m-regular">
              I craft your ideas into high quality, scalable apps aimed at
              giving you great experiences on the web.
            </p>
          </div>
        </div>

        <div class=" flex-[0.5]">
          <img src="@/assets/images/astroabdul-intro.png" placeholder='astro' class="w-full h-full object-contain" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const changeHeaderBg = ref(false);
const scrollRef = ref(10);
// const navItemHovered =
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
<style lang="scss" scoped>
@import "../assets/styles/utils.scss";

.header {
  height: pxToRem(40);
  // background-color: $color-yellow;
  //background-color: lighten($color:$dark-bg, $amount: 5%);

  h2::after {
    background: #00c8c8;
    filter: blur(125px);
  }

  &__items {
    li {
      // background-color: black;
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
  background: #00c8c8;
  filter: blur(125px);
}
.cursor-follow-2 {
  position: absolute;
  width: 200px;
  height: 200px;
  right: 20px;
  top: 40px;
  z-index: 10;
  background: #00c8c8;
  filter: blur(125px);
}

li.animated {
  // &::after{
  //   @apply w-full h-full -z-0;
  //     background: linear-gradient(
  //   180deg,
  //   #ffffff 0%,
  //   #a984ff 53.12%,
  //   rgba(100, 225, 220, 0.9) 56.77%,
  //   rgba(128, 188, 234, 0.94) 68.23%,
  //   #ffffff 100%
  // );
  // animation: changeNavItemBg 4s infinite;
  // }
}
// @keyframes changeNavItemBg {
//   0% {
//     background: #fff;
//   }
//   50% {
//         color: linear-gradient(
//       180deg,
//       #ffffff 0%,
//       #a984ff 53.12%,
//       rgba(100, 225, 220, 0.9) 56.77%,
//       rgba(128, 188, 234, 0.94) 68.23%,
//       #ffffff 100%
//     );
//   }
//   100% {
//     background-color: #00c8c8;
//   }
// }
</style>

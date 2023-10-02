<template>
  <nav
    class="w-full  h-screen sm:hidden fixed bg-[#0E1B41] z-50 flex flex-col mobile-menu"
    v-show="props.show"
  >
    <header class="relative h-[4rem]">
      <button
        class="appearance-none text-white absolute right-8 top-6"
        @click="props.closeNav()"
      >
        <IconsClose class="w-8 h-8" />
      </button>
    </header>

    <ul class="flex flex-col items-center gap-y-6  text-white mobile-menu__items w-full my-4">
      <li
        class="mx-4 my-2 cursor-pointer px-2 py-1 mobile-menu__item relative overflow-hidden "
      >
        <a href="#home" @click="props.closeNav()">
          <span
            class="mobile-menu__item--btn-1 transform will-change-transform transition-transform w-full h-full block duration-100 ease-in z-20"
            >Home</span
          >
          <span
            class="mobile-menu__item--btn-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full will-change-transform delay-75 duration-150 block ease-in-out z-10"
            >Home</span
          >
        </a>
      </li>
      <li
        class="mx-4 my-2 cursor-pointer px-2 py-1 mobile-menu__item relative overflow-hidden"
      >
        <a href="#more-about" @click="props.closeNav()">
          <span
            class="mobile-menu__item--btn-1 transform will-change-transform transition-transform w-full h-full block duration-100 ease-in"
            >About</span
          >
          <span
            class="mobile-menu__item--btn-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full will-change-transform delay-75 duration-150 block ease-in-out"
            >About</span
          >
        </a>
      </li>
      <li
        class="mx-4 my-2 cursor-pointer px-2 py-1 mobile-menu__item relative overflow-hidden"
      >
        <a href="#exhibit" @click="props.closeNav()">
          <span
            class="mobile-menu__item--btn-1 transform will-change-transform transition-transform w-full h-full block duration-100 ease-in"
            >Exhibit</span
          >
          <span
            class="mobile-menu__item--btn-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full will-change-transform delay-75 duration-150 block ease-in-out"
            >Exhibit</span
          >
        </a>
      </li>
      <li
        class="mx-4 my-2 cursor-pointer px-2 py-1 mobile-menu__item relative overflow-hidden"
      >
        <a href="#contact" @click="props.closeNav()">
          <span
            class="mobile-menu__item--btn-1 transform will-change-transform transition-transform w-full h-full block duration-100 ease-in"
            >Contact</span
          >
          <span
            class="mobile-menu__item--btn-2 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-full will-change-transform delay-75 duration-150 block ease-in-out"
            >Contact</span
          >
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(["show", "closeNav"]);
</script>


<style lang="scss" scoped>

.mobile-menu{
  &__items{
    @apply pt-12;
  }


  &__item{
    @apply border rounded-md;
  }
}

</style>
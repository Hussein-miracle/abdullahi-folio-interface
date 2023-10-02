<script setup>
const props = defineProps({
  title:{
    type:String,
  },
  description:{
    type:String,
  },
  stacks:{
    type: Array
  },
  gl:{
    type:String,
  },
  link:{
    type:String,
  }
})
</script>

<template>
  <li class="project-item w-52 sm:w-60 md:w-72 h-64 lg:h-60 rounded-md p-[1px] mx-auto ">
    <div
      class="project-item__content w-full bg-[#02012E] z-20 h-full border-inherit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-2  overflow-hidden"
    >
      <h2 class="cld-semibold text-lg sm:text-xl">{{ props.title }}</h2>

      <p class="px-1.5 max-w-sm my-1 sm:text-base text-sm h-2/6 " v-slicetext :title="props.description">
        {{ props.description }}
      </p>

      <div class="w-full my-2 h-1/5">
        <div class="flex text-base sm:text-lg gap-x-1 m-regular">
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
          <span>:</span>
        </div>

        <div class="stack-items flex flex-wrap items-center">
          <span v-for="(stack,index) in props.stacks" :key="props.description+props.stacks[index]+index">
           {{ stack }} {{ index === props.stacks.length - 1 ? '.' : ' + '  }}
          </span>
        </div>
      </div>

      <div class="space-x-2 flex mt-2 py-2 h-[4.5rem]">
        <a 
         v-show="!!props.link"
          class="text-white rounded-md sm:py-0.5 px-1 flex items-center cursor-pointer"
          :href="props.link"
          target="_blank"
        >
          <span class="mr-1">View</span>
          <IconsEye class="w-4 h-4 inline mt-1" />
        </a>
        <a
              v-show="!!props.gl"
          class="text-white  rounded-md sm:py-0.5 px-1 flex items-center cursor-pointer"
             :href="props.gl"
             target="_blank"
        >
          <span class="mr-1">Code</span>
          <IconsCode class="w-4 h-4 inline" />
        </a>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
p {
  background: linear-gradient(
    95deg,
    /* #fff 26.58%, */ #a984ff 15%,
    #64e1dc 26.77%,
    #a984ff 44.93%,
    #64e1dc 54.77%,
    #6fc2ff 64.82%,
    /* #fff 78.91%, */ #6fc2ff 95%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stack-items{
  span{
    @apply text-base;
  }
}
</style>

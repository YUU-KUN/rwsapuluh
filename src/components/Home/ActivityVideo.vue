<template>
  <div v-if="video" class="relative text-center bg-primary rounded-2xl pt-6 px-12 h-[230px] laptop:h-[600px] laptop:pt-20 laptop:flex laptop:flex-col laptop:items-center ">
    <p class="text-white font-bold text-16 mb-2 tracking-wider laptop:text-h-1 laptop:mb-4 capitalize">{{ video.title }}</p>
    <p class="text-12 laptop:text-h-4 tracking-wider mb-7 laptop:mb-20">
      {{ video.description }}
    </p>
    <div class="-bottom-4">
        <img src="/src/assets/img/activity-video.png" alt="" class="object-cover w-[282px] laptop:w-[840px] laptop:h-[500px] rounded-2xl">
    </div>
  </div>
</template>

<script>
export default {
    name: 'ActivityComponent',
    data() {
      return {
        video: ''
      }
    },
    methods: {
      getVideo() {
        this.axios.get(`video`).then((response) => {
          this.video = response.data.data
          console.log(this.video);
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    mounted() {
      this.getVideo()
    }
}
</script>

<style>

</style>
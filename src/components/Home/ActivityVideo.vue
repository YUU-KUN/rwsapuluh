<template>
  <div v-if="video"
    class="relative text-center bg-primary rounded-2xl pt-6 px-12 h-[230px] laptop:h-[600px] laptop:pt-20 laptop:flex laptop:flex-col laptop:items-center ">
    <p class="text-white font-bold text-16 mb-2 tracking-wider laptop:text-h-1 laptop:mb-4 capitalize">{{ video.title }}</p>
    <p class="text-12 laptop:text-h-4 tracking-wider mb-7 laptop:mb-20">{{ video.description }}</p>
    <div class="-bottom-4">
      <iframe class="object-cover w-[282px] laptop:w-[840px] laptop:h-[500px] rounded-2xl" :src="getEmbedVideo(video.video_url)"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityComponent',
  data() {
    return {
      video: '',
      error_message: '',
      is_video_error: false
    }
  },
  methods: {
    getVideo() {
      this.axios.get(`video`).then((response) => {
        this.video = response.data.data
        // console.log(this.video);

        // window.addEventListener('error', function (e) {
        //   console.log(e);
        //   // alert('error');
        //   this.is_video_error = true
        //   this.error_message = 'Video tidak tersedia'
        //   console.log(this.error_message);
        //   // document.getElementById('container').innerHTML = ("<p>File not found.</p>");
        // }, true);
      }).catch((error) => {
        console.log(error)
      })
    },
    toggleVideoError() {
      console.log('video error');
      // this.error_message = 'Video tidak tersedia'
    },
    getEmbedVideo(url) {
      url = url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
      url = url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')
      return url
    }
  },
  mounted() {
    this.getVideo()
  }
}
</script>

<style></style>
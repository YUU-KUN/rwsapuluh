<template>
  <Banner class="laptop:mb-36"/>
  <div class="px-6 laptop:px-36 mb-12">
    <Vision class="mb-12 laptop:mb-32"/>
    <Mission class="mb-12 laptop:mb-12"/>
    <Statistic class="mb-12 laptop:mb-24"/>
    <ActivityVideo class="mb-32 laptop:mb-[346px]"/>
    <Testimony class="mb-12 laptop:mb-40"/>
    <Activity class="mb-12"/>
    <hr class="hidden laptop:block border-primary border my-36">
    <div class="laptop:grid laptop:grid-cols-5 laptop:gap-24">
      <Maps class="mb-12 laptop:col-span-2"/>
      <Complaints class="laptop:col-span-3"/>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Home/Banner.vue';
import Vision from '../components/Home/Vision.vue';
import Mission from '../components/Home/Mission.vue';
import Statistic from '../components/Home/Statistic.vue';
import ActivityVideo from '../components/Home/ActivityVideo.vue';
import Testimony from '../components/Home/Testimony.vue';
import Activity from '../components/Home/Activity.vue';
import Maps from '../components/Home/Maps.vue';
import Complaints from '../components/Home/Complaints.vue';
export default {
  components: {
    Banner,
    Vision,
    Mission,
    Statistic,
    ActivityVideo,
    Activity,
    Testimony,
    Maps,
    Complaints
},
  data() {
    return {
      
    }
  },
  
}
</script>

<style></style>
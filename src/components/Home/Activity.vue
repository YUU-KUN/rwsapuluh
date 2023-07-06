<template>
    <div class="text-center">
        <p class="text-black text-16 font-bold mb-6 laptop:text-h-1 laptop:mb-24">Kegiatan Terbaru Kami</p>
        <div class="grid grid-cols-2 laptop:grid-cols-3 gap-2 laptop:gap-4 mb-7 laptop:mb-20">
            <div @click="detailActivity(id)" v-for="{ id, title, description, image_url, created_at, categories} in top_activities" :key="id"
                class="rounded-2xl bg-white px-3 pb-5 pt-2 text-left laptop:px-6 laptop:py-9 hover:cursor-pointer">
                <div class="relative mb-2">
                    <img :src="image_url" onerror="this.onerror=null;this.src='/src/assets/img/activity.png'" alt="" class="rounded-2xl mb-2 w-full laptop:mb-5">
                    <div class="absolute bg-white rounded-lg p-1 top-2 left-2 w-7 h-7 text-center laptop:w-14 laptop:h-14">
                        <p class="text-10 font-bold laptop:text-h-3">{{getDate(created_at)}}</p>
                        <p class="text-[8px] text-black opacity-60 font-bold laptop:text-h-5">{{ getMonth(created_at) }}</p>
                    </div>
                </div>
                <p class="uppercase text-primary text-10 mb-1 laptop:hidden">{{ categories.length > 0 ? categories[0].category.name : '-' }}</p>
                <p class="font-bold text-16 mb-2 laptop:text-h-3 laptop:mb-4">{{ title }}</p>
                <p class="text-12 opacity-50 laptop:text-h-4 truncate">{{ description }}</p>
            </div>
        </div>
        <button @click="seeAllActivity"
            class="bg-primary rounded-lg py-3 px-6 text-white text-12 font-bold laptop:px-9 laptop:py-5 laptop:text-h-3">Lihat
            Semua</button>
    </div>
</template>

<script>
export default {
    name: 'ActivityComponent',
    data() {
        return {
            top_activities: []
        }
    },
    methods: {
        getTopActivities() {
            this.axios.get('top-activity').then(response => {
                this.top_activities = response.data.data
                console.log(this.top_activities);
            })
                .catch(error => {
                    console.log(error)
                })
        },
        seeAllActivity() {
            this.$router.push({ name: 'activity' })
        },
        getDate(date) {
            const dateObj = new Date(date)
            // get 23
            const day = dateObj.getDate()
            return day
        },
        getMonth(date) {
            // get Jan
            const dateObj = new Date(date)
            const month = dateObj.toLocaleString('default', { month: 'short' })
            return month
        },
        detailActivity(activity_id) {
            this.$router.push({name: 'activity-detail', params: {activity_id}})
        }
    },
    mounted() {
        this.getTopActivities()
        // check if screen is mobile
        if (window.innerWidth < 1024) {
            this.top_activities = this.top_activities.slice(0, 2)
        }
    }
}
</script>

<style></style>
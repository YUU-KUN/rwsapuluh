<template>
    <div class="px-6 laptop:px-40">
        <!-- Breadcrumb -->
        <nav class="w-full rounded-md mb-4 text-10 laptop:text-16">
            <ol class="list-reset flex">
                <li>
                    <a href="#"
                        class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Beranda</a>
                </li>
                <li>
                    <span class="mx-2 text-neutral-500">/</span>
                </li>
                <li>
                    <a href="#"
                        class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Informasi</a>
                </li>
                <li>
                    <span class="mx-2 text-neutral-500">/</span>
                </li>
                <li class="text-primary">Prestasi</li>
            </ol>
        </nav>

        <p class="font-bold text-16 mb-9 text-center laptop:text-40">Prestasi di RW 10</p>
        <div class="bg-gradient-to-r from-white via-primary to-white h-[1px] hidden laptop:block mt-7 mb-24"></div>

        <div class="grid grid-cols-1 laptop:grid-cols-3 gap-4 w-full mb-6 laptop:mb-40">
            <div @click="detailAchievement(id)" v-for="{id, title, image_url, description} in achievements" :key="id" class="rounded-2xl bg-white p-6 text-left laptop:px-6 laptop:py-9 hover:cursor-pointer">
                <div class="relative mb-2">
                    <img :src="image_url" onerror="this.onerror=null;this.src='/src/assets/img/activity.png'" alt=""
                        class="rounded-2xl mb-2 h-[194px] w-full laptop:mb-5 laptop:h-[297px] object-cover">
                    <div class="absolute bg-white rounded-lg p-1 top-2 left-2 w-7 h-7 text-center laptop:w-14 laptop:h-14">
                        <p class="text-10 font-bold laptop:text-h-3">23</p>
                        <p class="text-[8px] text-black opacity-60 font-bold laptop:text-h-5">Jan</p>
                    </div>
                </div>
                <p class="uppercase text-primary text-10 mb-1 laptop:hidden">{{ categories.length > 0 ? categories[0].category.name : '' }}</p>
                <p class="font-bold text-16 mb-2 laptop:text-h-3 laptop:mb-4">{{title}}</p>
                <p class="text-12 opacity-50 laptop:text-h-4 truncate">{{description}}</p>
            </div>
            <!-- <div class="rounded-2xl bg-white p-6 text-left laptop:px-6 laptop:py-9">
                <div class="relative mb-2">
                    <img src="/src/assets/img/activity.png" alt=""
                        class="rounded-2xl mb-2 h-[194px] w-full laptop:mb-5 laptop:h-[297px] object-cover">
                    <div class="absolute bg-white rounded-lg p-1 top-2 left-2 w-7 h-7 text-center laptop:w-14 laptop:h-14">
                        <p class="text-10 font-bold laptop:text-h-3">23</p>
                        <p class="text-[8px] text-black opacity-60 font-bold laptop:text-h-5">Jan</p>
                    </div>
                </div>
                <p class="uppercase text-primary text-10 mb-1 laptop:hidden">TECHNOLOGY</p>
                <p class="font-bold text-16 mb-2 laptop:text-h-3 laptop:mb-4">New Technology Make for Dental Operation</p>
                <p class="text-12 opacity-50 laptop:text-h-4">Lorem ipsum is placeholder text commonly used in the graphic,
                    print, and publishing</p>
            </div> -->
        </div>

        <!-- Kegiatan Terbaru -->
        <p class="font-bold text-16 mb-9 text-center laptop:text-h-1">Kegiatan Terbaru Kami</p>
        <div class="grid grid-cols-1 laptop:grid-cols-3 gap-4 w-full mb-6 laptop:mb-40">
            <div @click="detailActivity(id)" v-for="{id, created_at, image_url, title, description, categories} in top_activities" :key="id" class="rounded-2xl bg-white p-6 text-left laptop:px-6 laptop:py-9 hover:cursor-pointer" >
                <div class="relative mb-2">
                    <img :src="image_url" onerror="this.onerror=null;this.src='/src/assets/img/activity.png';" alt=""
                        class="rounded-2xl mb-2 h-[194px] w-full laptop:mb-5 laptop:h-[297px] object-cover">
                    <div class="absolute bg-white rounded-lg p-1 top-2 left-2 w-7 h-7 text-center laptop:w-14 laptop:h-14">
                        <p class="text-10 font-bold laptop:text-h-3">{{getDate(created_at)}}</p>
                        <p class="text-[8px] text-black opacity-60 font-bold laptop:text-h-5">{{getMonth(created_at)}}</p>
                    </div>
                </div>
                <p class="uppercase text-primary text-10 mb-1 laptop:hidden">{{categories[0].category.name}}</p>
                <p class="font-bold text-16 mb-2 laptop:text-h-3 laptop:mb-4">{{title}}</p>
                <p class="text-12 opacity-50 laptop:text-h-4 truncate">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActivityView',
    data() {
        return {
            achievements: [],
            top_activities: [],
        }
    },
    methods: {
        getAchievements() {
            this.axios.get(`achievement`).then((response) => {
                this.achievements = response.data.data
                console.log(this.achievements);
            }).catch((error) => {
                console.log(error)
            })
        },
        getTopActivities() {
            this.axios.get(`top-activity`).then((response) => {
                this.top_activities = response.data.data
                console.log(this.top_activities);
            }).catch((error) => {
                console.log(error)
            })
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
        detailAchievement(achievement_id) {
            this.$router.push({ name: 'achievement-detail', params: { achievement_id } })
        },
        detailActivity(activity_id) {
            this.$router.push({ name: 'activity-detail', params: { activity_id } })
        }
    },
    mounted() {
        this.getAchievements()
        this.getTopActivities()
    }

}
</script>

<style></style>
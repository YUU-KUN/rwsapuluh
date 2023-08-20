<template>
    <div class="owl-carousel banner mb-5">
        <div @click="goToBannerDetail(activities[index])"
            v-for="({ title, description, image_url, id }, index) in activities" :key="id" class="relative w-full">
            <img :src="image_url" alt="" class="object-cover rounded-2xl h-44 w-full laptop:h-[565px]">
            <!-- <img :src="image_url" alt="" class="object-cover rounded-2xl h-44 w-full laptop:h-[565px]"> -->
            <div
                class="absolute laptop:flex laptop:flex-col laptop:justify-end laptop:pb-14 p-5 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-none bg-opacity-60 rounded-2xl text-white laptop:px-24">
                <p class="font-bold text-16 mb-1 laptop:text-h-1 laptop:mb-5">{{ title }}</p>
                <p class="text-12 laptop:text-h-3 laptop:w-1/2 truncate">{{ description }}</p>
            </div>
        </div>
        <div class="relative w-full">
            <img src="/assets/img/banner/banner-2.png" alt="" class="object-cover rounded-2xl h-44 laptop:h-[565px] w-full">
            <div
                class="absolute laptop:flex laptop:flex-col laptop:justify-end laptop:pb-14 p-5 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-none bg-opacity-60 rounded-2xl text-white laptop:px-24">
                <p class="font-bold text-16 laptop:text-h-1 laptop:mb-5">HUT 17 AGUSTUS RW 10</p>
                <p class="text-12 laptop:text-h-3 laptop:w-1/2">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum </p>
            </div>
        </div>
        <div class="relative w-full">
            <img src="/assets/img/banner/banner-3.png" alt="" class="object-cover rounded-2xl h-44 laptop:h-[565px] w-full">
            <div
                class="absolute laptop:flex laptop:flex-col laptop:justify-end laptop:pb-14 p-5 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-none bg-opacity-60 rounded-2xl text-white laptop:px-24">
                <p class="font-bold text-16 laptop:text-h-1 laptop:mb-5">HUT 17 AGUSTUS RW 10</p>
                <p class="text-12 laptop:text-h-3 laptop:w-1/2">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselComponent',
    data() {
        return {
            activities: [],
            options: {
                center: true,
                items: 1.2,
                loop: true,
                margin: 7,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
            }
        }
    },
    methods: {
        async getBanners() {
            await this.axios.get('banner').then(response => {
                this.activities = response.data.data;
                console.log(this.activities);
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                if (window.innerWidth < 768) {
                    this.options.loop = true
                    this.options.items = 1.2;
                } else {
                    this.options.items = 1.3;
                    this.options.margin = 16;
                }
                // eslint-disable-next-line no-undef
                $(".owl-carousel.banner").owlCarousel(this.options);
            })
        },
        goToBannerDetail(banner) {
            banner.label == 'kegiatan' ? this.$router.push({
                name: 'activity-detail',
                params: {
                    activity_id: banner.id
                }
            }) : this.$router.push({
                name: 'achievement-detail',
                params: {
                    achievement_id: banner.id
                }
            })
        }
        // async getActivities() {
        //     await this.axios.get('activity').then(response => {
        //         this.activities = response.data.data;
        //     }).catch(error => {
        //         console.log(error);
        //     }).finally(() => {
        //         if (window.innerWidth < 768) {
        //             this.options.loop = true
        //             this.options.items = 1.2;
        //         } else {
        //             this.options.items = 1.3;
        //             this.options.margin = 16;
        //         }
        //         // eslint-disable-next-line no-undef
        //         $(".owl-carousel.banner").owlCarousel(this.options);
        //     })
        // }
    },
    mounted() {
        // this.getActivities();
        this.getBanners();

    }
}
</script>

<style></style>
<template>
    <div class="bg-primary rounded-2xl p-5 laptop:rounded-[32px] laptop:py-24 laptop:px-16">
        <p class=" text-white font-bold text-16 mb-5 laptop:text-40 laptop:mb-24">
            Apa yang mereka katakan tentang RW 10
        </p>
        <div class="owl-carousel owl-theme testimonial-carousel">
            <div class="relative flex flex-col items-center justify-start bg-white rounded-2xl p-5 laptop:py-10 laptop:px-5 laptop:rounded-[32px]">
            <!-- <img src="/src/assets/img/avatar.png" alt="" -->
                <p class="font-bold text-16 mt-3 laptop:text-24">Adit Bagus</p>
                <p class="text-12 opacity-50 mb-2 laptop:text-20 laptop:mb-6">Marketing Manager</p>
                <p class="text-12 laptop:text-20">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing </p>
            </div>
            <div class="relative flex flex-col items-center justify-start bg-white rounded-2xl p-5 laptop:py-10 laptop:px-5 laptop:rounded-[32px]">
            <!-- <img src="/src/assets/img/avatar.png" alt="" -->
                <p class="font-bold text-16 mt-3 laptop:text-24">Adit Bagus</p>
                <p class="text-12 opacity-50 mb-2 laptop:text-20 laptop:mb-6">Marketing Manager</p>
                <p class="text-12 laptop:text-20">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing </p>
            </div>
            <div class="relative flex flex-col items-center justify-start bg-white rounded-2xl p-5 laptop:py-10 laptop:px-5 laptop:rounded-[32px]">
            <!-- <img src="/src/assets/img/avatar.png" alt="" -->
                <p class="font-bold text-16 mt-3 laptop:text-24">Adit Bagus</p>
                <p class="text-12 opacity-50 mb-2 laptop:text-20 laptop:mb-6">Marketing Manager</p>
                <p class="text-12 laptop:text-20">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestimonyComponent',
    data() {
        return {
            options: {
                center: false,
                items: 2,
                loop: false,
                margin: 13,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
            }
        }
    },
    methods: {
        handleResize() {
            if (window.innerWidth > 1024) {
                this.options.center = true;
                this.options.loop = true;
                this.options.items = 1.3;
            } else if (window.innerWidth < 768) {
                this.options.center = false;
                this.options.loop = false;
                this.options.items = 2
            }
            // eslint-disable-next-line no-undef
            $(".owl-carousel.testimonial-carousel").owlCarousel(this.options);
        }
    },
    mounted() {
        if (window.innerWidth < 768) {
            this.options.items = 2
            this.options.center = false;
            this.options.loop = false;
            this.options.margin = 13;
        } else {
            this.options.center = true;
            this.options.loop = true;
            this.options.items = 3;
            this.options.margin = 19;
        }
        // eslint-disable-next-line no-undef
        $(".owl-carousel.testimonial-carousel").owlCarousel(this.options);

        // add event listener for resize window
        window.addEventListener('resize', () => {
            this.handleResize()
        })



    },
}
</script>

<style scoped>
/* .owl-dots {
    display: inline-block;
    zoom: 1;
} */

.owl-dot {
    display: inline-block;
    width: 13px;
    height: 3px;
    zoom: 1;
    background-color: white;
    margin: 0 5px;
    vertical-align: top;
}
</style>
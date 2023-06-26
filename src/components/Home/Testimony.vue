<template>
    <div class="bg-primary rounded-2xl p-5 laptop:">
        <p class="w-3/4 text-white font-bold text-16 mb-5">Apa yang mereka katakan tentang RW 10</p>
        <div class="owl-carousel testimonial-carousel">
            <div class="relative flex flex-col items-center justify-start bg-white rounded-2xl p-2">
                <!-- <img src="/src/assets/img/avatar.png" alt="" class="absolute -top-4 rounded-full border-4 border-primary"> -->
                <p class="font-bold text-14 mt-3">Adit Bagus</p>
                <p class="text-14 opacity-50">Marketing Manager</p>
                <p class="text-10">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing </p>
            </div>
            <div class="relative flex flex-col items-center justify-start bg-white rounded-2xl p-2">
                <!-- <img src="/src/assets/img/avatar.png" alt="" class="absolute -top-4 rounded-full border-4 border-primary"> -->
                <p class="font-bold text-14 mt-3">Adit Bagus</p>
                <p class="text-14 opacity-50">Marketing Manager</p>
                <p class="text-10">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing </p>
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
                // center: true,
                items: 2,
                // loop: true,
                margin: 13,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
            }
        }
    },
    mounted() {
        // eslint-disable-next-line no-undef
        $(".owl-carousel.testimonial-carousel").owlCarousel(this.options);
    },
}
</script>

<style></style>
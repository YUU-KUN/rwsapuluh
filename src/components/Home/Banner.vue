<template>
    <div class="owl-carousel mb-5">
        <div class="relative w-full">
            <img src="/src/assets/img/banner/banner-1.png" alt=""
                class="object-cover rounded-2xl h-44 laptop:h-[565px] w-auto">
            <div
                class="absolute laptop:flex laptop:flex-col laptop:justify-end laptop:pb-14 p-5 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-none bg-opacity-60 rounded-2xl text-white laptop:px-24">
                <p class="font-bold text-16 laptop:text-h-1 laptop:mb-5">HUT 17 AGUSTUS RW 10</p>
                <p class="text-12 laptop:text-h-3 laptop:w-1/2">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum </p>
            </div>
        </div>
        <div class="relative w-full">
            <img src="/src/assets/img/banner/banner-2.png" alt=""
                class="object-cover rounded-2xl h-44 laptop:h-[565px] w-auto">
            <div
                class="absolute laptop:flex laptop:flex-col laptop:justify-end laptop:pb-14 p-5 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-none bg-opacity-60 rounded-2xl text-white laptop:px-24">
                <p class="font-bold text-16 laptop:text-h-1 laptop:mb-5">HUT 17 AGUSTUS RW 10</p>
                <p class="text-12 laptop:text-h-3 laptop:w-1/2">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum </p>
            </div>
        </div>
        <div class="relative w-full">
            <img src="/src/assets/img/banner/banner-3.png" alt=""
                class="object-cover rounded-2xl h-44 laptop:h-[565px] w-auto">
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
    mounted() {
        if (window.innerWidth < 768) {
            this.options.items = 1.2;
        } else {
            this.options.items = 1.3;
        }
        // eslint-disable-next-line no-undef
        $(".owl-carousel").owlCarousel(this.options);
    },
}
</script>

<style></style>
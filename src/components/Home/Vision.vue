<template>
    <div class="flex flex-col laptop:grid laptop:grid-cols-2 items-center justify-center">
        <div class="relative flex flex-col items-center justify-center bg-primary rounded-[32px] w-[189px] h-[221px] laptop:h-[473px] laptop:w-[404px] mb-8 laptop:mr-40">
            <img src="/src/assets/img/vision-mission.svg" alt=""
                class="absolute w-[212px] h-[167px] laptop:h-[359px] laptop:w-[454px] rounded-[32px] left-8 laptop:left-16">
        </div>
        <div>
            <div class="relative flex items-center justify-start mb-6 laptop:mb-16">
                <p class="uppsercase font-bold text-32 laptop:text-[40px]">Visi</p>
                <p class="absolute uppercase opacity-20 text-7xl laptop:text-[128px] font-bold left-3">Visi</p>
            </div>
            <p class="text-14 laptop:text-24 opacity-90 tracking-wider">Terwujudnya Masyarakat Rukun Warga (RW) 17 Kelurahan Madyopuro yang Kreatif, Mandiri, Berdaya saing dan Bermartabat.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VisionComponent'
}
</script>

<style></style>
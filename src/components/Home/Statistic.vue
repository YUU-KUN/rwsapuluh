<template>
    <div class="flex flex-col items-center justify-center">
        <p class="font-bold text-24 laptop:text-h-1 mb-6 laptop:mb-14">Data RW 10</p>
        <div class="grid grid-cols-6 laptop:grid-cols-5 gap-2 justify-center text-center text-white">
            <div class="flex flex-col items-center justify-evenly bg-primary rounded-2xl h-[118px] laptop:h-full px-3 py-2 laptop:px-6 laptop:py-8 font-bold col-span-2 laptop:col-span-1 ">
                <p class="text-36 laptop:text-[80px] laptop:mb-7">{{rt_total}}</p>
                <p class="text-14 laptop:text-24">Rukun Tetangga</p>
            </div>
            <div class="flex flex-col items-center justify-evenly bg-primary rounded-2xl h-[118px] laptop:h-full px-3 py-2 laptop:px-6 laptop:py-8 font-bold col-span-2 laptop:col-span-1">
                <p class="text-36 laptop:text-[80px] laptop:mb-7">{{ kk_total }}</p>
                <p class="text-14 laptop:text-24">Kepala Keluarga</p>
            </div>
            <div class="flex flex-col items-center justify-evenly bg-primary rounded-2xl h-[118px] laptop:h-full px-3 py-2 laptop:px-6 laptop:py-8 font-bold col-span-2 laptop:col-span-1">
                <p class="text-36 laptop:text-[80px] laptop:mb-7">{{ citizen_total }}</p>
                <p class="text-14 laptop:text-24">Warga</p>
            </div>
            <div class="laptop:hidden"></div>
            <div class="flex flex-col items-center justify-evenly bg-primary rounded-2xl h-[118px] laptop:h-full px-3 py-2 laptop:px-6 laptop:py-8 font-bold col-span-2 laptop:col-span-1">
                <p class="text-36 laptop:text-[80px] laptop:mb-7">{{ female_total }}</p>
                <p class="text-14 laptop:text-24">Perempuan</p>
            </div>
            <div class="flex flex-col items-center justify-evenly  bg-primary rounded-2xl h-[118px] laptop:h-full px-3 py-2 laptop:px-6 laptop:py-8 font-bold col-span-2 laptop:col-span-1">
                <p class="text-36 laptop:text-[80px] laptop:mb-7">{{ male_total }}</p>
                <p class="text-14 laptop:text-24">Laki-laki</p>
            </div>
            <div class="laptop:hidden"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatisticComponent',
    data() {
        return {
            citizen_total: 0,
            female_total: 0,
            male_total: 0,
            kk_total: 0,
            rt_total: 0,
        }
    },
    methods: {
        getStatistic() {
            this.axios.get('citizen-statistic').then(response => {
                const statistic = response.data.data
                this.citizen_total = statistic.citizen_total
                this.female_total = statistic.female_total
                this.male_total = statistic.male_total
                this.kk_total = statistic.kk_total
                this.rt_total = statistic.rt_total


                console.log(
                    response.data.data
                );
            }).catch(error => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.getStatistic()
    }
}
</script>

<style></style>
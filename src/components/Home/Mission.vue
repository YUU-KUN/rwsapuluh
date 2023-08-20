<template>
    <div class="flex flex-col items-start justify-center mb-12">
        <div>
            <div class="relative flex items-center justify-start mb-6 laptop:mb-16">
                <p class="uppsercase font-bold text-32 laptop:text-[40px]">Misi</p>
                <p class="absolute uppercase opacity-20 text-7xl laptop:text-[128px] font-bold left-3">Misi</p>
            </div>
            <div class="grid grid-rows-5 laptop:grid-rows-3 grid-flow-col laptop:gap-6">
                <div v-for="{ mission, id } in missions" :key="id"
                    class="flex items-start justify-start text-sm tracking-wider opacity-90 mb-3">
                    <div class="flex items-start justify-start">
                        <img src="/assets/icons/check-icon.png" alt="check-icon" class="mr-4 h-4 w-4 laptop:h-5 laptop:w-5">
                        <span class="laptop:text-24">{{ mission }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VisionComponent',
    data() {
        return {
            missions: [],
        }
    },
    methods: {
        getMission() {
            this.axios.get('mission').then(response => {
                this.missions = response.data.data;
                console.log(
                    response.data.data
                );
            }).catch(error => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.getMission()
    }
}
</script>

<style></style>
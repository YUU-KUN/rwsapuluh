<!-- eslint-disable vue/return-in-computed-property -->
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
                        class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Kelembagaan</a>
                </li>
                <li>
                    <span class="mx-2 text-neutral-500">/</span>
                </li>
                <li class="text-primary">{{ institution.name }}</li>
            </ol>
        </nav>
        <p class="font-bold text-16 mb-9 text-center laptop:text-40">{{ institution.name }}</p>
        <!-- <hr class="hidden laptop:block mt-7 mb-24 border border-primary w-full"> -->
        <div class="bg-gradient-to-r from-white via-primary to-white h-[1px] hidden laptop:block mt-7 mb-24"></div>
        <div class="grid grid-cols-1 laptop:grid-cols-2 laptop:gap-4 w-full mb-6">
            <img v-for="{ image_url, id } in institution.galleries" :key="id" :src="image_url" alt="institution"
                class="rounded-lg mb-3 w-full">
            <!-- <img src="/src/assets/img/institution.png" alt="institution" class="rounded-lg mb-3 w-full"> -->
        </div>
        <p class="opacity-90 text-16 mb-10 laptop:text-24">
            {{ institution.description }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'InstitutionView',
    data() {
        return {
            institution: '',
            institution_id: this.$route.params.institution_id,
        }
    },
    methods: {
        getInstitution() {
            this.axios.get(`institution/${this.institution_id}`).then((response) => {
                this.institution = response.data.data
            }).catch((error) => {
                console.log(error)
            })
        },
    },
    mounted() {
        this.getInstitution()
        this.$router.afterEach(() => {
            this.institution_id = this.$route.params.institution_id;
            this.getInstitution()
        })
    },

}
</script>

<style></style>
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
                <li>
                    <a href="#"
                        class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Kegiatan</a>
                </li>
                <li>
                    <span class="mx-2 text-neutral-500">/</span>
                </li>
                <li class="text-primary capitalize">{{ activity.title }}</li>
            </ol>
        </nav>

        <div class="w-full my-10">
            <img :src="activity.image_url" onerror="this.onerror=null;this.src='/assets/img/activity-detail.png'" alt=""
                class="object-cover w-full laptop:h-[609px] rounded-xl">
        </div>
        <p class="font-bold text-16 mb-4 laptop:text-40">{{ activity.title }}</p>
        <p class="opacity-80 text-16 text-[#716F6F] mb-7">Dipublikasikan {{ getPublishedDate(activity.created_at) }}</p>
        <p class="text-12 opacity-90 tracking-wide mb-14 laptop:text-24">{{ activity.description }}</p>


    </div>
</template>

<script>
export default {
    name: 'ActivityDetailView',
    data() {
        return {
            activity_id: this.$route.params.activity_id,
            activity: '',
        }
    },
    methods: {
        getActivity() {
            this.axios.get(`activity/${this.activity_id}`).then((response) => {
                this.activity = response.data.data
            }).catch((error) => {
                console.log(error)
            })
        },
        getPublishedDate(date) {
            const publishedDate = new Date(date)
            const month = publishedDate.toLocaleString('default', { month: 'long' })
            const day = publishedDate.getDate()
            const year = publishedDate.getFullYear()
            return `${day} ${month} ${year}`
        }
    },
    mounted() {
        this.getActivity()
    }

}
</script>

<style></style>
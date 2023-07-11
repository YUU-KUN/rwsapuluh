<template>
    <!-- Main navigation container -->
    <nav class="flex-no-wrap relative flex justify-between items-center px-6 py-7 laptop:flex-wrap laptop:justify-start laptop:py-10 laptop:px-36"
        data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <!-- Left elements -->
            <router-link to="/">
                <IconMain />
            </router-link>

            <!-- Right elements -->
            <div class="relative flex items-center">
                <button
                    class="block border-0 bg-transparent px-2 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">

                    <span class="[&>svg]:w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="h-7 w-7">
                            <path fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </div>
            <!-- <div class="!visible hidden flex-grow basis-[100%] items-center laptop:!flex laptop:justify-end laptop:basis-auto" id="navbarSupportedContent1" data-te-collapse-item>
                <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row text-right" data-te-navbar-nav-ref>
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a class="text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90"
                            data-te-nav-link-ref>Beranda</a>
                    </li>
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a class="text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90"
                            data-te-nav-link-ref>Layanan</a>
                    </li>
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a class="text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90"
                            data-te-nav-link-ref>Kelembagaan</a>
                    </li>
                </ul>
            </div> -->
            <div class="relative !visible hidden basis-[100%] items-center laptop:!flex laptop:justify-end laptop:basis-auto"
                id="navbarSupportedContent1" data-te-collapse-item>
                <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row text-right" data-te-navbar-nav-ref>
                    <li class="mb-4 laptop:self-center lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <router-link to="/"
                            class="text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90"
                            data-te-nav-link-ref>Beranda</router-link>
                    </li>
                    <li class="relative mb-4 laptop:self-center lg:mb-0 lg:pr-2" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="hidden-arrow flex items-center justify-end text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90 "
                            id="dropdown-about-us" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                            Tentang Kami
                            <img src="/src/assets/icons/arrow-down.png" alt="arrow-down" class="ml-1">
                        </a>
                        <!-- First dropdown menu -->
                        <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdown-about-us" data-te-dropdown-menu-ref>
                            <li class="bg-white hover:bg-primary">
                                <router-link to="/history"
                                    class="hover:text-white block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent"
                                    data-te-dropdown-item-ref>Sejarah</router-link>
                            </li>
                            <li class="bg-white hover:bg-primary">
                                <router-link to="/organization-structure"
                                    class="hover:text-white block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent"
                                    data-te-dropdown-item-ref>Struktur Organisasi</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="mb-4 laptop:self-center lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <router-link to="/service"
                            class="text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90"
                            data-te-nav-link-ref>Layanan</router-link>
                    </li>
                    <li class="relative mb-4 laptop:self-center lg:mb-0 lg:pr-2" data-te-nav-item-ref data-te-dropdown-ref>
                        <a @click="getInstitutions()"
                            class="hidden-arrow flex items-center justify-end text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90 "
                            id="dropdown-institution" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                            Kelembagaan
                            <img src="/src/assets/icons/arrow-down.png" alt="arrow-down" class="ml-1">
                        </a>
                        <!-- First dropdown menu -->
                        <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdown-institution" data-te-dropdown-menu-ref>
                            <div :class="institutions.length > 5 ? 'grid grid-rows-5 grid-flow-col bg-white' : ''">
                                <!-- First dropdown menu items -->
                                <li v-for="{ id, name } in institutions" :key="id" class="bg-white hover:bg-primary">
                                    <router-link :to="{ name: 'institution', params: { institution_id: id } }"
                                        class="hover:text-white block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                        data-te-dropdown-item-ref>{{ name }}</router-link>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="relative mb-4 laptop:self-center lg:mb-0 lg:pr-2" data-te-nav-item-ref data-te-dropdown-ref>
                        <a class="hidden-arrow flex items-center justify-end text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90 "
                            id="dropdownMenuButton1" role="button" data-te-dropdown-toggle-ref aria-expanded="false">
                            Informasi
                            <img src="/src/assets/icons/arrow-down.png" alt="arrow-down" class="ml-1">
                        </a>
                        <!-- First dropdown menu -->
                        <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>
                            <!-- First dropdown menu items -->
                            <li class="bg-white hover:bg-primary">
                                <router-link to="/achievement"
                                    class="hover:text-white block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent"
                                    data-te-dropdown-item-ref>Prestasi</router-link>
                            </li>
                            <li class="bg-white hover:bg-primary">
                                <router-link to="/activity"
                                    class="hover:text-white block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-black active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent"
                                    data-te-dropdown-item-ref>Kegiatan</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="mb-4 laptop:self-center lg:mb-0 flex justify-end lg:pr-2" data-te-nav-item-ref>
                        <a class="text-black hover:text-primary focus:text-primary lg:px-2 [&.active]:text-black/90"
                            data-te-nav-link-ref>
                            <img src="/src/assets/icons/search-icon.png" alt="search-icon" class="h-6 w-6">
                        </a>
                    </li>
                    <li class="mb-4 laptop:self-center lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <button class=" bg-primary rounded-md text-white px-5 py-2">Kontak Kami</button>
                    </li>
                </ul>

            </div>


        </div>
    </nav>
</template>

<script>
import {
    Collapse,
    Dropdown,
    initTE,
} from "tw-elements";

import IconMain from './icons/IconMain.vue';
export default {
    components: {
        IconMain
    },
    name: "NavBar",
    data() {
        return {
            institutions: []
        }
    },
    methods: {
        getInstitutions() {
            this.axios.get('institution').then(response => {
                this.institutions = response.data.data
                console.log(this.institutions);
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        initTE({ Collapse, Dropdown });
    }
}
</script>

<style></style>
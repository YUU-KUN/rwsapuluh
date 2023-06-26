<template>
  <div class="px-6 laptop:px-40">
    <!-- Breadcrumb -->
    <nav class="w-full rounded-md mb-4 text-10 laptop:text-16">
      <ol class="list-reset flex">
        <li>
          <a href="#"
            class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Beranda</a>
        </li>
        <li>
          <span class="mx-2 text-neutral-500">/</span>
        </li>
        <li class="text-primary">Layanan</li>
      </ol>
    </nav>
    <p class="text-center font-bold text-16 mb-5 laptop:text-40 laptop:mb-12">Layanan</p>

    <div class="flex flex-col items-center justify-center w-full mb-12">
      <div>
        <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="multiCollapseExample2">
          <div
            class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50">
            Some placeholder content for the second collapse component of this
            multi-collapse example. This panel is hidden by default but
            revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>

      <div class="mb-4 w-full">
        <button class="flex items-center justify-between bg-white rounded-md py-4 px-8 w-full laptop:px-8 laptop:py-4"
          type="button" data-te-collapse-init data-te-target="#pindah-masuk" data-te-ripple-init
          data-te-ripple-color="light" aria-expanded="false" aria-controls="pindah-masuk">
          <p class="text-12 laptop:text-h-4">Pindah Masuk</p>
          <img src="/src/assets/icons/arrow-down.png" alt="arrow-down">
        </button>
        <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="pindah-masuk">
          <div
            class="block rounded-lg bg-white p-6 rounded-t-none text-12 laptop:text-h-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.
          </div>
        </div>
      </div>

      <div class="mb-4 w-full">
        <button class="flex items-center justify-between bg-white rounded-md py-4 px-8 w-full laptop:px-8 laptop:py-4"
          type="button" data-te-collapse-init data-te-target="#pindah-keluar" data-te-ripple-init
          data-te-ripple-color="light" aria-expanded="false" aria-controls="pindah-keluar">
          <p class="text-12 laptop:text-h-4">Pindah Keluar</p>
          <img src="/src/assets/icons/arrow-down.png" alt="arrow-down">
        </button>
        <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="pindah-keluar">
          <div
            class="block rounded-lg bg-white p-6 rounded-t-none text-12 laptop:text-h-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.
          </div>
        </div>
      </div>

      <div class="mb-4 w-full">
        <button class="flex items-center justify-between bg-white rounded-md py-4 px-8 w-full laptop:px-8 laptop:py-4"
          type="button" data-te-collapse-init data-te-target="#keterangan-usaha" data-te-ripple-init
          data-te-ripple-color="light" aria-expanded="false" aria-controls="keterangan-usaha">
          <p class="text-12 laptop:text-h-4">Keterangan Usaha</p>
          <img src="/src/assets/icons/arrow-down.png" alt="arrow-down">
        </button>
        <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="keterangan-usaha">
          <div
            class="block rounded-lg bg-white p-6 rounded-t-none text-12 laptop:text-h-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.
          </div>
        </div>
      </div>

      <div class="mb-4 w-full">
        <button class="flex items-center justify-between bg-white rounded-md py-4 px-8 w-full laptop:px-8 laptop:py-4"
          type="button" data-te-collapse-init data-te-target="#perizinan-keramaian" data-te-ripple-init
          data-te-ripple-color="light" aria-expanded="false" aria-controls="perizinan-keramaian">
          <p class="text-12 laptop:text-h-4">Perizinan Keramaian</p>
          <img src="/src/assets/icons/arrow-down.png" alt="arrow-down">
        </button>
        <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="perizinan-keramaian">
          <div
            class="block rounded-lg bg-white p-6 rounded-t-none text-12 laptop:text-h-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.
          </div>
        </div>
      </div>

      <div class="mb-4 w-full">
        <button class="flex items-center justify-between bg-white rounded-md py-4 px-8 w-full laptop:px-8 laptop:py-4"
          type="button" data-te-collapse-init data-te-target="#keterangan-kelahiran" data-te-ripple-init
          data-te-ripple-color="light" aria-expanded="false" aria-controls="keterangan-kelahiran">
          <p class="text-12 laptop:text-h-4">Keterangan Kelahiran</p>
          <img src="/src/assets/icons/arrow-down.png" alt="arrow-down">
        </button>
        <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="keterangan-kelahiran">
          <div
            class="block rounded-lg bg-white p-6 rounded-t-none text-12 laptop:text-h-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.
          </div>
        </div>
      </div>
      

      <div class="mb-4 w-full">
        <button class="flex items-center justify-between bg-white rounded-md py-4 px-8 w-full laptop:px-8 laptop:py-4"
          type="button" data-te-collapse-init data-te-target="#keterangan-kematian" data-te-ripple-init
          data-te-ripple-color="light" aria-expanded="false" aria-controls="keterangan-kematian">
          <p class="text-12 laptop:text-h-4">Keterangan Kematian</p>
          <img src="/src/assets/icons/arrow-down.png" alt="arrow-down">
        </button>
        <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item id="keterangan-kematian">
          <div
            class="block rounded-lg bg-white p-6 rounded-t-none text-12 laptop:text-h-4">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem.
          </div>
        </div>
      </div>
    </div>

    <div class="laptop:grid laptop:grid-cols-2 laptop:mb-32">
      <div class="bg-white rounded-3xl p-4 w-[213px] h-auto mx-auto mb-10 laptop:h-[455px] laptop:w-[455px]">
        <img src="/src/assets/img/qr-code.png" alt="qr-code" class="object-cover h-full w-full">
      </div>

      <div class="mb-12 laptop:self-center">
        <p class="text-16 font-bold mb-3 laptop:text-h-1 laptop:mb-7">Kontak Kami</p>
        <p class="text-12 opacity-60 mb-6 laptop:text-h-4">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum </p>
        <button class="bg-primary rounded-lg px-7 py-3 text-white font-bold text-12">Chat Whatsapp</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceView',
}
</script>

<style></style>
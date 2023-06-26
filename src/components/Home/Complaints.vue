<template>
  <div>
    <div class="text-left mb-6">
      <p class="font-bold text-[30px] mb-7 laptop:text-h-1">Kritik dan Saran</p>
      <p class="opacity-60 mb-6 text-12 laptop:text-h-4 laptop:mb-14">Berikan pendapatmu lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      <div class="laptop:grid laptop:grid-cols-2 laptop:gap-6">
        <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0">
            <label class="font-bold opacity-60 mb-2" for="name">Name <span>*</span></label>
            <input type="text" id="name" class="bg-white py-3 px-4 w-full rounded-lg laptop:px-4 laptop:py-5 laptop:rounded-2xl" placeholder="Enter your name...">
        </div>
        <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0">
            <label class="font-bold opacity-60 mb-2" for="email">Email <span>*</span></label>
            <input type="email" id="email" class="bg-white py-3 px-4 w-full rounded-lg laptop:px-4 laptop:py-5 laptop:rounded-2xl" placeholder="Your email address...">
        </div>
        <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0">
            <label class="font-bold opacity-60 mb-2" for="subject">Subject <span>*</span></label>
            <input type="text" id="subject" class="bg-white py-3 px-4 w-full rounded-lg laptop:px-4 laptop:py-5 laptop:rounded-2xl" placeholder="Enter your subject...">
        </div>
        <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0">
            <label class="font-bold opacity-60 mb-2" for="phone">Phone <span>*</span></label>
            <input type="phone" id="phone" class="bg-white py-3 px-4 w-full rounded-lg laptop:px-4 laptop:py-5 laptop:rounded-2xl" placeholder="Enter yout mobile phone...">
        </div>
        <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0 laptop:col-span-2 laptop:rounded-2xl">
            <label class="font-bold opacity-60 mb-2" for="message">Message <span>*</span></label>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Enter your messages..." class="bg-white py-3 px-4 w-full rounded-lg"></textarea>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <button class="bg-primary rounded-lg py-3 px-9 text-white font-bold text-12 laptop:py-5 px-auto laptop:text-h-3 laptop:rounded-2xl">Kirim Pesan</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ComplaintsComponent'
}
</script>

<style>

</style>
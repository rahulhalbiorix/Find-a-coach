<template>
  <div class="container mx-auto  p-6 rounded-lg shadow-md max-w-lg border-2 border-blue-200  mt-10">
    <div class="mb-6">
      <label for="email" class="block text-lg font-semibold text-gray-800">Your E-mail</label>
      <input id="email" type="email" class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
    </div>

    <div class="mb-6">
      <label for="write-message" class="block text-lg font-semibold text-gray-800">Write a Message</label>
      <textarea id="write-message" class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" rows="6" placeholder="Write your message here..."></textarea>
    </div>

    <div class="text-center">
      <button class="bg-blue-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Send Message
      </button>
    </div>
  </div>
</template>


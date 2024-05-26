<template>
    <div>
        <div class="flex justify-between bg-white shadow-md px-4 w-full h-20">
            <!-- hamburger -->
            <div class="flex">
                <div class="flex justify-center items-center">
                    <button @click="$emit('toggle-sidebar')" class="flex justify-center items-center hover:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-100 rounded-full w-12 h-12">
                        <svg class="w-6 h-6 scale-125 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 6H21" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 18H21" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>    
                <div class="flex items-center gap-2 ml-4 text-xl">
                    <svg class="w-6 h-6 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 2V6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 2V6" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 10H21" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="font-medium text-slate-800">16 April 2023</span>
                </div>
            </div>

            <!-- profile -->
            <div class="flex gap-4">
                <div class="flex flex-col justify-center items-end">
                    <span class="font-medium">My Name</span>
                    <span>Frontend Developer</span>
                </div>
                <div class="flex justify-center items-center">
                    <button class="flex justify-center items-center border-slate-600 bg-slate-50 hover:bg-slate-100 border focus:outline-none focus:ring focus:ring-blue-300 active:bg-slate-100 rounded-full w-10 h-10">
                        <svg class="w-6 h-6 scale-125 stroke-2 stroke-slate-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
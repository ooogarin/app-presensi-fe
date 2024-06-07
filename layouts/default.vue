<template>
    <div class="flex w-screen h-screen">
        <!-- sidebar -->
        <aside :class="{'-translate-x-full': !isSidebarVisible}" class="top-0 left-0 z-10 absolute shadow-md w-64 h-screen transition-all duration-500">
            <Sidebar />
        </aside>
        
        <!-- main -->
        <div :class="isSidebarVisible ? 'ml-64' : 'ml-0'" class="flex flex-col flex-1 bg-slate-50 transition-all duration-500">
            <Header @toggle-sidebar="isSidebarVisible = !isSidebarVisible" />
            <slot />
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    // toggle sidebar
    const isSidebarVisible = ref(true);
</script>
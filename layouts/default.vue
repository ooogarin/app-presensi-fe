<template>
    <div class="relative flex w-screen h-screen">
        <!-- sidebar -->
        <aside :class="{'-translate-x-full': !isSidebarVisible}" class="top-0 left-0 z-10 absolute shadow-md w-64 h-screen transition-all duration-500">
            <Sidebar />
        </aside>
        
        <!-- main -->
        <div :class="{'ml-0': !isSidebarVisible, 'ml-64': isSidebarVisible }" class="flex flex-col flex-1 bg-slate-50 transition-all duration-500">
            <Header @toggle-sidebar="isSidebarVisible = !isSidebarVisible" />
            <slot />
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup() {
            // toggle sidebar
            const isSidebarVisible = ref(true); 

            return {
                isSidebarVisible
            };
        }
    };
</script>
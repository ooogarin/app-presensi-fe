<template>
    <div>
        <!-- header -->
        <header>
            <nav class="bg-green-100">
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Product</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- main -->
        <div>
            <!-- page -->
            <slot />
        </div>
    </div>
</template>

<style scoped>
  .router-link-active {
    text-decoration: none;
    font-weight: bold;
    color: rgb(33, 139, 33);
  }
</style>
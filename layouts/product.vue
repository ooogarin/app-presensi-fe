<template>
    <div>
        <!-- main -->
        <div>
            <!-- page -->
            <slot />
        </div>

        <!-- header -->
        <header>
            <nav class="bg-yellow-100">
                <ul>
                    <li>product layout</li>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Product</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style scoped>
  .router-link-active {
    text-decoration: none;
    font-weight: bold;
    color: rgb(206, 67, 33);
  }
</style>
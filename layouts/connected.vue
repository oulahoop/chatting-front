
<template>
    <div>
        <AppHeader></AppHeader>
        <div class="app-container">
            <ConnectedMenu></ConnectedMenu>
            <slot />
        </div>
        <AppFooter></AppFooter>
    </div>
    
</template>

<style>
    .app-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    

</style>

<script setup>
</script>
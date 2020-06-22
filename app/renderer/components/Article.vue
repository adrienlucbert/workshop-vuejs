<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        title: String,
        description: String
    }
}
</script>

<style scoped>

</style>
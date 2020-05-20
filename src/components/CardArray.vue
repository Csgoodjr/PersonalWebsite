<template>
    <div id="card-array">
    </div>
</template>

<script>
export default {
    name: "CardArray",
    props: {
        experiences: {
            type: Array,
            required: true
        }
    }
}
</script>
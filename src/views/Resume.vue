<template>
    <div class="resume">
        <h1>This is a resume</h1>
        <ResumeSection title="Experience" />
        <ResumeSection title="Education" />
        <ResumeSection title="Skills" />
    </div>
</template>

<script>
import ResumeSection from "@/components/ResumeSection.vue";

export default {
    name: "Resume",
    components: {
        ResumeSection
    }
}
</script>
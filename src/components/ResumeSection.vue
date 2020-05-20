<template>
    <div id="resume-section">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
import { db } from "../main";
export default {
    name: "ResumeSection",
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            experiences: []
        }
    },
    firestore: function() {
        return {
            experiences: db.collection("Experience")
        }
    }
}
</script>
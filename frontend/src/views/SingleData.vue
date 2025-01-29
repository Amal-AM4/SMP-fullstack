<template>
    <div>
        <h2>Profile Data</h2>
        <Profile :profile="student" class="profile" />
    </div>
</template>

<script>
import Profile from '../components/Profile.vue'
import axios from 'axios'

export default {
    components: { Profile },
    data() {
        return {
            student: [],
        }
    },
    methods: {
        async getData() {
            const response = await axios.get(`http://localhost:3000/getData/${this.$route.params.uuid}`)
            this.student = response.data
        }
    },
    mounted(){
        document.title = 'Profile | SMP'
        this.getData()
    }
}
</script>

<style scoped>
.profile {
    max-width: 600px;
    margin: 0 auto;
}
</style>
<template>
    <div>
        <StudentForm 
            btnName="Update Student" 
            :studentData="student"
            @update-student="updateStudent"
            class="StudentForm"
        />
    </div>
</template>

<script>
import StudentForm from '../components/StudentForm.vue'
import axios from 'axios'

export default {
    components: { StudentForm },
    data() {
        return {
            uuid: this.$route.params.uuid,
            student: {},
        }
    },
    methods: {
        async getStudent() {
            const response = await axios.get(`http://localhost:3000/getData/${this.uuid}`)
            this.student = response.data
        },
        async updateStudent(student) {
            const response = await axios.put(`http://localhost:3000/updateStudent/${this.uuid}`, student)

            // ✅ Refresh the student data to reflect changes in UI
            this.getStudent();
        }
    },
    mounted() {
        document.title = 'Edit | SMP'
        this.getStudent()
    }
}
</script>

<style scoped>
.StudentForm {
    margin: 0 auto;
    max-width: 600px;
}
</style>
<template>
    <div>
        <h1>Insert the student details</h1>
        <StudentForm 
            class="studentform"
            @add-student="addStudent"
            btnName="Upload Details"
        />
    </div>
</template>

<script>
import StudentForm from '../components/StudentForm.vue'
import axios from 'axios'

export default {
    components: { StudentForm },
    methods: {
        async addStudent(student) {
            console.log(student);
            // call api to add student
            await axios.post("http://localhost:3000/addStudent", student)

            this.$router.push('/studentList')
        }
    },
    mounted() {
        document.title = 'insert | SMP'
    }
}
</script>

<style>
.studentform {
    margin: 0 auto;
    max-width: 600px;
}
</style>
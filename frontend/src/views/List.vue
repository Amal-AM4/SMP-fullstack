<template>
    <div>
        <StudentList :students="students" class="StudentList" />
    </div>
</template>

<script>
import StudentList from '../components/StudentList.vue'
import axios from 'axios'

export default {
    components: { StudentList },
    data() {
        return {
            students: [],
        }
    },
    methods: {
        async getAllStudent() {
            try {
                const response = await axios.get('http://localhost:3000/allStudents')
                this.students = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        document.title = 'list | SMP',
        this.getAllStudent() // fetch students when component mounts
    }
}
</script>

<style>
.StudentList {
    max-width: 800px;
    margin: 0 auto;
}
</style>
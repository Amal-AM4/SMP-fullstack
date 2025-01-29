<template>
    <div class="wrap">
        
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" v-model="student.name" required placeholder="Enter your FUll NAME">
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" v-model="student.age" required placeholder="Enter your age">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="student.email" required placeholder="example@gmail.com">
            </div>
            <div class="form-group">
                <label for="course">Course</label>
                <input type="text" id="course" v-model="student.course" required placeholder="Enter your course name">
            </div>

            <div class="form-group">
                <button type="submit" class="btn">{{ btnName }}</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ['btnName'],
    data() {
        return {
            student: {
                name: '',
                age: '',
                email: '',
                course: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$emit("add-student", this.student)
        }
    }
}
</script>

<style scoped>
.form-group {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    justify-content: center;
}
.form-group label {
    color: gray;
    margin-right: 6px;
}
.form-group input, 
.form-group .btn {
    padding: 12px 14px;
}
.form-group .btn {
    cursor: pointer;
}
.form-group .btn:active {
    scale: 0.98;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.123);
}
</style>
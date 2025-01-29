<template>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Course</th>
                <th>View</th>
                <th>Edit</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in students" :key="data.id">
                <td>{{ index + 1 }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.age }}</td>
                <td>{{ data.email }}</td>
                <td>{{ data.course }}</td>
                <td><a href="#" @click.prevent="viewStudent(data.stdUUID)" >View</a></td>
                <td><a href="#" @click.prevent="updateStudent(data.stdUUID)" >Edit</a></td>
                <td><a href="" @click.prevent="removeStudent(data.stdUUID)" class="remove" >Remove</a></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'
export default {
    props: ['students'],
    methods: {
        viewStudent(stdUUID) {
            this.$router.push(`/student/${stdUUID}`)
        },
        async removeStudent(stdUUID) {
            // this.$router.push(`/remove/${stdUUID}`)
            const response = await axios.put(`http://localhost:3000/removeStudent/${stdUUID}`)
            console.log(response.data)
            // this.$router.replace({name: 'StudentList'})
            window.location.reload()
        },
    },
}
</script>

<style scoped>
table {
    /* box-sizing: border-box; */
    border-collapse: collapse;
}
table thead {
    background-color: #42b983;
    color: #fff;
}
table tbody {
    background-color: rgb(240, 240, 240);
}
table tbody tr:nth-child(2n) {
    background-color: rgb(255, 255, 255);
}
table thead th:first-child {
    border-top-left-radius: 10px;
}
table thead th:last-child {
    border-top-right-radius: 10px;
}
th,td {
    padding: 10px 20px;
}
tr a {
    text-decoration: none;
    color: #40b17e;
    font-weight: bold;
}
.remove {
    color: #d14141;
}
</style>
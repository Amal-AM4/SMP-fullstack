<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td class="name">{{ profile.name }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ profile.email }}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{{ profile.age }}</td>
                </tr>
                <tr>
                    <th>Course</th>
                    <td>{{ profile.course }}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td><span :class="{ 'status': !profile.isDeleted }">Online</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['profile'],
}
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
    margin: 10px 0;
}
table tr,td,th {
    border: 1px solid black;
    padding: 10px 20px;
}
.status {
    color: green;
    font-size: 18px;
    font-weight: bold;
}
.name {
    text-transform: capitalize;
}
</style>
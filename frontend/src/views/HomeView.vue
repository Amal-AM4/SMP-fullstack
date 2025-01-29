<template>
  <div class="home">
    <h1>Welcome to the Student Management System</h1>
    <p>This system is designed to streamline and simplify the management of student data. Here, you can easily:
    </p>
    <ul>
        <li>Create: Add new student records with all necessary information.</li>
        <li>Delete: Remove student records that are no longer relevant.</li>
        <li>Update: Modify existing student information as needed (e.g., change of address, update grades).</li>
        <li>View: Access and view individual student data, including personal details, academic records, and more.</li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  mounted() {
    document.title = 'Home | SMP'
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 30px;
}

p ul {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
}
</style>

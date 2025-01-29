<template>
  <div class="about">
    <h1>About This Project</h1>

    <p>
      This student management system is a full-stack application built using the following technologies:
    </p>

    <h3>Backend</h3>
    <ul>
      <li><strong>Node.js</strong>: A powerful and versatile JavaScript runtime environment that provides the foundation for the server-side logic.</li>
      <li><strong>Express.js</strong>: A lightweight and flexible Node.js web framework that simplifies the creation of RESTful APIs.</li>
      <li><strong>PostgreSQL</strong>: A robust and scalable open-source relational database system for securely storing and managing student data.</li>
      <li><strong>Prisma</strong>: An Object-Relational Mapper (ORM) that facilitates efficient data interaction with the PostgreSQL database.</li>
    </ul>

    <h3>Frontend</h3>
    <ul>
      <li><strong>Vue.js</strong>: A progressive JavaScript framework for building user interfaces, providing a reactive and component-based architecture for a dynamic and engaging user experience.</li>
    </ul>

    <p>
      This project aims to demonstrate a practical implementation of a full-stack application, showcasing the integration of these technologies to create a functional and efficient student management solution.
    </p>

  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "About | SMP"
  }
}
</script>

<style scoped>
h3 {
  padding: 10px 0;
}
p {
  padding: 10px 0;
}
</style>

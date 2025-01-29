<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'AddStudent' }">Add Student</router-link>
      <router-link :to="{ name: 'StudentList' }">Student List</router-link>

      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: #2c3e50;
  padding: 20px 24px;
  border-radius: 20px;
}

nav a.router-link-exact-active {
  background: #42b983;
  color: #fff;
}
</style>

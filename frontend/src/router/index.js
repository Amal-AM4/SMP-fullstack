import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import AddStudent from '../views/AddStudent.vue'
import StudentList from '../views/List.vue'
import SingleData from '../views/SingleData.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/add-student',
    name: 'AddStudent',
    props: true,
    component: AddStudent,
  },
  {
    path: '/studentList',
    name: 'StudentList',
    component: StudentList
  },
  {
    path: '/student/:uuid',
    name: 'studentdata',
    component: SingleData,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

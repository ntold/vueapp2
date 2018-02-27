<template>
  <div>
        <ul>
            <li><router-link to="/">Users</router-link></li>
            <li><router-link to="/test">Test</router-link></li>
            <li><router-link to="/olek">Olek</router-link></li>
        </ul>
        <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/Test'
import Users from './components/Users'
import Olek from './components/Olek'

export default {
  name: 'App',
  components: {
    Test, Users, Olek
  }
}
</script>

<style>
    /* Allgemeine Sytles*/

</style>

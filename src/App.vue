<template>
  <div>
        <router-view></router-view>
        <ul>
            <li><router-link to="/">Users</router-link></li>
            <li><router-link to="/test">Test</router-link></li>
            <li><router-link to="/Plantes">Plantes</router-link></li>
        </ul>
  </div>
</template>

<script>
import Test from './components/Test'
import Users from './components/Users'
import Plantes from './components/Plantes'

export default {
  name: 'App',
  components: {
    Test, Users, Plantes
  }
}
</script>

<style>
    /* Allgemeine Sytles*/
    *{
        margin: 0;
        padding: 0;
    }


</style>

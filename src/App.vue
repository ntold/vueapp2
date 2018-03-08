<template>
  <div>
    <nav class="nav">
      <ul>
        <li><router-link to="/Kalkulation">Kalkulation</router-link></li>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/Plantes">Plantes</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/Test'
import Users from './components/Users'
import Plantes from './components/Plantes'
import Kalkulation from './components/Kalkulation'

export default {
  name: 'App',
  components: {
    Test, Users, Plantes, Kalkulation
  }
}
</script>

<style>
    /* Allgemeine Sytles*/
    *{
        margin: 0;
        padding: 0;
    }
    nav{
    display:block;
    height:2.5em;
    background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0 !important;
    text-align:center;
    }

    nav ul {
        display:block;
    	margin-top: 0px;
    	margin-bottom: 0px;
    }
    nav ul li {
        display:inline;
    }

    nav ul li a{
        font-family: "Helvetica";
    	font-size:1.125em;
        color: #DCDCDC;
    	line-height:2.5em;
        text-decoration: none;
    	padding: 0.563em 0.938em 0.375em 0.983em;
        transition:background 0.2s;
        -webkit-transition:background 0.2s;
    }

    nav ul li a:hover {
        background:#DBD9D8;
        border-bottom: solid #E7590B;
    	color: #666666	;
    }

    nav ul li a.active {
        border-bottom: 0.188em solid #e7590B;
    }


</style>

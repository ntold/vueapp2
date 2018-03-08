<template>
    <div class="users">
        <h1>Kalkulation</h1>
            <input type="text" placeholder="Kostenstelle">
            <input type="text" placeholder="Operation">
            <input type="text" placeholder="Std / ta">
            <input type="text" placeholder="Std / tr">
            <button v-on:click="addFertigung()">Submit</button>
            {{Kostenstelle.Fertigung}}
      <!--  <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">
                    {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">x</button>
                </span>
            </li>
        </ul> -->
    </div>
</template>

<script>
    import Kostenstellen from '../assets/Fertigung'
    export default {
        name: 'Fertigung',
        data() {
            return {
                newFertigung: {},
                Fertigung: [],

            }
        },
        methods: {
            addFertigung: function(){
              console.log("hi");
                this.Fertigung.push({
                    Fertigung: this.newFertigung.Kostenstelle
                });
            },
            deleteUser: function(user){
                this.users.splice(this.users.indexOf(user), 1);
            }
        },
        created: function(){
            this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(function(response){
                    this.user = response.data;
                })
        }
    }
</script>

<style scoped>
    .contacted{
        text-decoration: line-through;
    },
    #app{
         font-family: 'Avenir', Helvetica, Arial, sans-serif;
         text-align: center;
         color: #2c3e50;
         margin-top: 10px;
    }
</style>

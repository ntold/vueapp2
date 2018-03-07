<template>
    <div class="plantes">
        <div class="background">
            <img src="../assets/planets.jpg" alt="jaa">
            <div class="centerText"> {{message}} &nbsp; {{message2}} {{email}} </div>
            <div class="inputBox">
                <input type="text" v-model="newEmail" v-on:keyup.enter="enterHit" class="inputStyle" placeholder="E-Mail">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Email',
        data() {
            return {
                message: "C O M I N G!",
                message2: "S O O N",
                email: "",
                newEmail: "",
            }
        },
        methods: {
            enterHit: function(){
                this.email = this.newEmail;

        },
        computed: {
            }
        }
    }
</script>

<style>
    .background{
        position: relative;
        text-align: center;
        color: white
    }
    img {
        max-width: 100%;
        height: auto;
        width: auto\9;
    }
    .centerText {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px;
        font-family: Helvetica;
        color: red;
    }
    .inputBox{
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .inputStyle{
        border:3px solid #dcdcdc;
        border-radius:20px;
        height: 22px;
        width: 230px;
    }

</style>

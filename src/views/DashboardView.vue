<template>
  <div class="about">
    <h1>{{ mensagem }}</h1>
    <h2></h2>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  data(){
    return{
      mensagem: 'Estou na tela dashboard'
    }
  }
}
</script>
 
 <style scoped>
  h1{
    color: red;
  }
 </style>
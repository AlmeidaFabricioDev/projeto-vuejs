<template>
  <div class="about">
    <h1>{{ mensagem }}</h1>
    <h2></h2>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "ControleDeProdutosView",
  data(){
    return{
      mensagem: 'Estou na tela de controle de produtos'
    }
  }
}
</script>
 
 <style scoped>
  h1{
    color: red;
  }
 </style>
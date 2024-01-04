<template>
  <div class="box-login">
    <div class="logo">
      <h1>Login</h1>
    </div>
    <Input
    label="E-mail"
    type="email"
    placeHolder="exemplo@gmail.com"
    >
  </Input>

    <Input
    label="Senha"
    type="password"
    placeHolder="123456"
    >
    </Input>
    <Button
    value="Entrar"
    :callback="login">
  </Button>
  </div>
</template>

<script>
import Input from "@/components/input/Input.vue"
import Button from "@/components/button/Button.vue"
export default {
  name:"LoginView",
  components:{
    Input,
    Button
  },
  data(){
    return{

    }
  },
  methods:{
    login(){
     // aqui criamos logica pra acessar sistema
     this.$router.push({path: '/'})
    }
  }
};
</script>

<style scoped>
.box-login{
    width: 300px;
    margin: auto;
    border: 1px solid #ddd;
    margin-top: 70px;
    padding: 30px;
}

.logo{
    text-align: center;
    color: var(--cor-primaria);
    font-size: 22px;
}
</style>
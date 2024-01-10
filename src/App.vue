<template>
  <div>
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Menu v-if="$route.name !== 'Login'"></Menu>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/menu/Menu.vue';
export default {
  components: {
    Menu : Menu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
:root{
 --cor-primaria : #FF3D00;
 --cor-secundaria: #FF6E40;
}

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.container{
  margin-top: 15px;
}

.titulo{
      font-weight: 600;
      color: #363636;
}

hr{
  margin:0;
}

.sub-container{
  margin-top: 10px;
}
</style>

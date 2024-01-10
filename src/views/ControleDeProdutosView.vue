<!-- eslint-disable vue/no-deprecated-filter -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
        <hr>
      </div>
    </div>

    <div class="row sub-container">
      <div class="col-sm-2">
        <Button value="adicionar"></Button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Data de cadastro</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in produtosFormatados" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nome }}</td>
              <td>{{ item.quantidadeEstoque }}</td>
              <td>{{ item.real }}</td>
              <td>{{ item.dataCadastroFormatada }}</td>
              <td>Editar/Excluir</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button/Button.vue';
import produtoService from '@/services/produto-service';
import produto from '@/models/Produto';
import conversorDeData from '../utils/conversor-data';
import conversorMonetario from '../utils/conversor-monetario';

export default {
  name: "ControleDeProdutosView",
  components: {
    Button
  },
  data() {
    return {
      produtos: []
    };
  },
  computed: {
    produtosFormatados() {
      return this.produtos.map(item => ({
        ...item,
        dataCadastroFormatada: conversorDeData.aplicarMascaraDataHoraEmDataIso(item.dataCadastro),
        real: conversorMonetario.aplicarMascaraParaRealComPrefixo(item.valor)
      }));
    },
  },
  methods: {
    obterTodosOsProdutos() {
      produtoService.obterTodos()
        .then(response => {
          this.produtos = response.data.map(p => new produto(p));
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.obterTodosOsProdutos();
  }
};
</script>

 
 <style scoped>
    
 </style>
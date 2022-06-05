<template>
  <div>
    <div class="container">
      <div class="row" id="form">
        <div class="col-m">
          <form id="formulario" method="" action="">
            <!--TITULO DO FORMULÁRIO-->
            <h1>Sobre o profissional</h1>
            <br />
            <!--TITULO DO FORMULÁRIO-->

            <!--SUBTITULO DO FORMULÁRIO-->
            <h3>Dados do profissional</h3>
            <br />
            <!--SUBTITULO DO FORMULÁRIO-->

            <!--INICIO DO FORMULÁRIO-->
            <div class="form-group-nome">
              <label for="disabledSelect">Nome completo*</label>
              <input type="text"  v-model="nome"
                class="form-control"
                id="nome"
                name="nome"
                placeholder="Digite o nome completo"
              />
            </div>
        
            <br />

            <div>
              <label for="">CPF*</label><br />
              <div class="input-group mb-4">
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  class="form-control col-md-5"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Digite um CPF"
                />
              </div>
            </div>

            <div>
              <label for="">Número de celular*</label><br />
              <div class="input-group mb-4">
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  class="form-control col-md-5"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="(00) 0 0000-0000"
                />
              </div>
            </div>

            <div class="row" id="estado">
              <div class="est">
                <label for="inputState">Estado*</label>
                <select id="estado" class="form-control">
                  <option selected>Selecione</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-sm-5">
                <label for="inputState">Cidade*</label>
                <select id="cidade" class="form-control">
                  <option selected>Selecione</option>
                  <option>...</option>
                </select>
              </div>
            </div>

            <br />

            <div class="row" id="estado">
              <div class="page-1">pagina-1</div>
              <div class="col-sm-3" id="page-2">pagina-2</div>
              &nbsp;&nbsp;&nbsp;
              <div class="numero">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 de 2</div>
            </div>
            <br />

            <button onclick="atendimento()" class="botao">PRÓXIMO</button>
          </form>
        </div>
        <!--FIM DO FORMULÁRIO-->

        <!--IMAGEM DA PÁGINA-->
        <div class="col-sm">
          <img src="../assets/desktop-pagina-1.png" alt=" " />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Revisao from './Revisao.vue';

export default {
  data: function () {
    return {
      nome: "",
    };
  },
};
</script>



<style>
body {
  margin: auto;
  background-color: #ffe766;
}

div.row {
  background-color: white;
  margin-top: 5%;
  margin-left: 3%;
  height: 30%;
  border-radius: 25px;
  width: 95%;
}

form {
  margin-top: 5%;
  margin-left: 20%;
  margin-bottom: 7%;
  width: 120%;
}

img {
  width: 102%;
  margin-right: 30%;
  margin-top: 45%;
  height: 50%;
}

h1 {
  font-size: 50px;
  font-family: comfortaa;
  color: #483698;
}

h3 {
  font-size: large 26px;
  font-family: open sans;
}

#valor {
  padding: 1%;
}

.form-check {
  background-color: #f9f9f9;
  box-shadow: 10px 5px 5px #ffffff;
  width: 65%;
  padding: 2%;
  border-radius: 9px;
}

.form-check-label {
  margin-left: 25%;
}

.form-check-input {
  margin-left: 9%;
}

.botao {
  background-color: #483698;
  color: white;
  border-radius: 10px;
  width: 71%;
}

.form-group-2 {
  width: 30%;
}

.form-group-nome {
  width: 69%;
}

.form-group-estado {
  width: 20%;
}

#estado {
  margin-left: 0;
}

.est {
  width: 32%;
}

.page-1 {
  background-color: #483698;
  height: 2%;
  width: 30%;
  color: #483698;
  border-radius: 3px;
}

#page-2 {
  background-color: #f9f9f9;
  height: 2%;
  width: 10%;
  color: white;
}

.numero {
  font-family: Comfortaa;
  color: #483698;
  width: 20%;
}
</style>
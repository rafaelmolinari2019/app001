<template>
     <div>
    <br />
    <a href=""> < </a>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <form method="post" action="">
            <!--TITULO DO FORMULÁRIO-->
            <h1>Sobre o atendimento</h1>
            <br />
            <!--TITULO DO FORMULÁRIO-->

            <!--SUBTITULO DO FORMULÁRIO-->
            <h3>Detalhes do atendimento</h3>
            <br />
            <!--SUBTITULO DO FORMULÁRIO-->

            <!--INICIO DO FORMULÁRIO-->
            <div class="form-group-2">
              <label for="disabledSelect">Especialidade principal*</label>
              <select id="disabledSelect" class="form-control">
                <option>Selecione a especialidade</option>
              </select>
            </div>
            <br /><br />

            <div class="col-m">
              <label for="">Informe o preço da consulta*</label><br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="form-control" id="group-text">R$</span>
                </div>
                <div class="valor">
                  <input
                    type="text"
                    class="form-control"
                    name="valor"
                    placeholder="Valor"
                  />
                </div>
              </div>
            </div>
            <br />

            <div class="form-group">
              <label for="inputAddress2"
                >Formas de pagamento da consulta*</label
              >
              <div class="form-group">
                <br />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="dinheiro"
                    name="dinheiro"
                  />
                  <label class="form-check-label"> Em dinheiro </label>
                </div>
                <br />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="pix"
                    name="pix"
                  />
                  <label class="form-check-label" for="gridCheck"> Pix </label>
                </div>
                <br />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="cartao"
                    name="cartao"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Cartão de crédito
                  </label>
                </div>
              </div>
            </div>
            <div class="row" id="estado">
              <div class="page-1">pagina-1</div>
              &nbsp;&nbsp;&nbsp;
              <div class="numero">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 de 2</div>
            </div>

            <br />
            <button type="submit" class="botao">PRÓXIMO</button>
          </form>
        </div>
        <!--FIM DO FORMULÁRIO-->

        <!--IMAGEM DA PÁGINA-->
        <div class="col-sm">
          <img src="../assets/desktop-pagina-2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>


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
  margin-bottom: 5%;
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
  color: #282828;
}

#valor {
  padding: 1%;
}

.form-check {
  background-color: #f9f9f9;
  box-shadow: 10px 5px 5px #b9b9b9;
  width: 65%;
  padding: 2%;
  border-radius: 9px;
  color: #282828;
}

#group-text {
  background-color: #483698;
  color: #ffffff;
  font-family: Open Sans;
  height: 100%;
}

.valor {
  width: 45%;
  height: 10%;
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
  width: 65%;
}

.form-group-2 {
  width: 65%;
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
  width: 55%;
  color: #483698;
  border-radius: 3px;
}

.numero {
  font-family: Comfortaa;
  color: #483698;
  width: 20%;
}

a {
  font-family: Comfortaa;
  margin-left: 16%;
  color: #483698;
  font-size: 25px;
}
</style>
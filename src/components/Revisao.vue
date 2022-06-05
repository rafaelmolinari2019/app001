<template>
    <div>
    <br>
    <a href=""> < </a>
            <div class="container">
                <div class="row">
                    <div class="col-m">
                        <form method="post" action="">
                            <!--TITULO DO FORMULÁRIO-->
                            <h1>Revisão do cadastro</h1><br>
                            <!--TITULO DO FORMULÁRIO-->

                            <div id="app">
                                <h5>Nome completo</h5><br>
                                <p>{{nome}}</p>
                            </div><br>

                            <div>
                                <h5>CPF</h5><br>

                            </div><br>

                            <div>
                                <h5>Número de celular ou telefone</h5><br>

                            </div><br>

                            <div>
                                <h5>Estado/Cidade</h5><br>

                            </div><br>

                            <div>
                                <h5>Especialidade principal</h5><br>

                            </div><br>

                            <div>
                                <h5>Preço da consulta</h5><br>

                            </div><br>

                            <div>
                                <h5>Formas de pagamento da consulta</h5><br>

                            </div><br><br>



                            <button type="submit" class="botao">CADASTRAR PROFISSIONAL</button>

                            <div><br>
                                <a href="">Editar cadastro</a>
                            </div>
                        </form>
                    </div>
                    <!--FIM DO FORMULÁRIO-->

                    <!--IMAGEM DA PÁGINA-->
                    <div class="col-sm">
                        <img src="../assets/desktop-pagina-3.png" alt="">
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
    import Profissional from '@/components/Profissional.vue';
    
    export default {
        components: {
            Profissional
        },
        data: function(){
            return{
                nome: ""
            }
        }

    };
    
</script>


<style>
body {
        margin: auto;
        background-color: #ffe766
    }
    
    a {
        color: black;
        margin-left: 13%;
        margin-top: 20%;
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
        font-family: open sans bold;
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
    
    .input-group-text {
        background-color: #483698;
        color: #ffffff;
        font-family: Open Sans;
    }
    
    .form-check-label {
        margin-left: 25%;
    }
    
    .form-check-input {
        margin-left: 9%;
    }
    
    .botao {
        background-color: #fbde40;
        color: #483698;
        border-radius: 15px;
        width: 60%;
        padding: 0, 5%;
        font-size: larger;
    }
    
    .form-group-2 {
        width: 65%;
    }
    
    a {
        font-family: Comfortaa;
        margin-left: 16%;
        color: #483698;
        font-size: 25px;
    }
    
    p {
        font-size: larger;
    }
</style>
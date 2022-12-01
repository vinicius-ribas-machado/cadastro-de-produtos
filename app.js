class Produto{

    constructor(){
        this.id = 1;
        this.arryprodutos = []
    }

    salvar(){
        let produto = this.lerDados();
        
        if (this.validaCampos(produto)){ 
            this.adicionar(produto)
        }
        
        this.listaTabela();
        this.cancelar();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arryprodutos.length; i++ ){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_sobrenome = tr.insertCell();
            let td_acoes = tr.insertCell();


            td_id.innerText= this.arryprodutos[i].id;
            td_produto.innerText= this.arryprodutos[i].nomeProduto;
            td_valor.innerText= this.arryprodutos[i].valor;
            td_sobrenome.innerText= this.arryprodutos[i].sobrenome;

            td_id.classList.add('center')

            let imgedit = document.createElement('img');
            imgedit.src = 'img/edit.png';
            
            let imgdelet = document.createElement('img');
            imgdelet.src = 'img/bin.png';
            imgdelet.setAttribute('onclick','produto.deletar('+ this.arryprodutos[i].id+ ')');
            
            td_acoes.appendChild(imgedit);
            td_acoes.appendChild(imgdelet);



        }
    }

    adicionar(produto){
        this.arryprodutos.push(produto);
        this.id++;
    }

    lerDados(){
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;
        produto.sobrenome = document.getElementById('sobrenome').value;
        return produto;

    }

    validaCampos(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += '- informe o nome do produto \n'
        }
        if (produto.valor == '') {
            msg += '- informe qualquer dado \n'
        }
        if (produto.sobrenome == ''){
            msg += '- informe o sobrenome'
        }

        if (msg != ''){
            alert(msg)
            return false
        }
        return true;
    }

    cancelar(){
        document.getElementById('produto').value = '';
        produto.valor = document.getElementById('valor').value = '';
        produto.sobrenome = document.getElementById('sobrenome').value = '';
    }

    deletar(id){
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arryprodutos.length; i++){
            if(this.arryprodutos[i].id == id){
                this.arryprodutos.splice(i,1);
                tbody.deleteRow(i);
            }
        }
        
        
        console.log(this.arryprodutos)
    }

}

var produto = new Produto();


document.addEventListener("DOMContentLoaded", function() {
    
    var quantidadeInputs = document.querySelectorAll('table input[type="number"]');
    var fazerPedidoButton = document.getElementById('fazer-pedido-button');

    
    fazerPedidoButton.addEventListener('click', function() {
        var totalPedidos = 0;

       
        quantidadeInputs.forEach(function(input) {
            
            totalPedidos += parseInt(input.value);
        });

       
        console.log("Total de Pedidos: " + totalPedidos);

        
    });
});
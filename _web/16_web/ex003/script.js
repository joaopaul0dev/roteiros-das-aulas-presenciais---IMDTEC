$(document).ready(function () {
    // 1. Seleciona todos os links dentro da lista FAQ
    $('.faq-list a').click(function (event) {
        // Impede que o link recarregue a página ou suba a tela (preventDefault)

        event.preventDefault();
        
        $(this).next('p').toggle(300);
    });
});

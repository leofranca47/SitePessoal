$(function () {
    var btn = $(".button");
    var effect_time = 300;

    

    btn.on("click",function(e){
        e.preventDefault();

        var img = $("#images");


        // verificando imagens do modal portifolio
        if($(this).attr("verify") === "loginEasy"){
            img.attr({
                src: "img/potifolio/easy_caixa/login.png"
            });
        } else if($(this).attr("verify") === "inicialEasy"){
            img.attr({
                src: "img/potifolio/easy_caixa/inicialG.png"
            });
        }else if($(this).attr("verify") === "vendaEasy"){
            img.attr({
                src: "img/potifolio/easy_caixa/vendaG.png"
            });
        }else if($(this).attr("verify") === "sangriaEasy"){
            img.attr({
                src: "img/potifolio/easy_caixa/sangriaG.png"
            });
        }else if($(this).attr("verify") === "relatorioEasy"){
            img.attr({
                src: "img/potifolio/easy_caixa/relátoriosG.png"
            });
        }else if($(this).attr("verify") === "graficoEasy"){
            img.attr({
                src: "img/potifolio/easy_caixa/graficosG.png"
            });
        }else if($(this).attr("verify") === "usuarioJiu"){
            img.attr({
                src: "img/potifolio/placar-jiujtsu/usuariosG.jpeg"
            });
        }
        else if($(this).attr("verify") === "lutadorJiu"){
            img.attr({
                src: "img/potifolio/placar-jiujtsu/tela-lutadoresG.jpeg"
            });
        }
        else if($(this).attr("verify") === "inicialLj"){
            img.attr({
                src: "img/potifolio/loja-virutal/inicial.png"
            });
        }
        else if($(this).attr("verify") === "produtosLj"){
            img.attr({
                src: "img/potifolio/loja-virutal/produtos.png"
            });
        }
        else if($(this).attr("verify") === "produtoLj"){
            img.attr({
                src: "img/potifolio/loja-virutal/produto.png"
            });
        }
        else if($(this).attr("verify") === "carrinhoLj"){
            img.attr({
                src: "img/potifolio/loja-virutal/carrinho.png"
            });
        }
        else if($(this).attr("verify") === "loginLj"){
            img.attr({
                src: "img/potifolio/loja-virutal/login.png"
            });
        }
        else if($(this).attr("verify") === "entregaLj"){
            img.attr({
                src: "img/potifolio/loja-virutal/entrega.png"
            });
        }
        // fim da verificação da imagens do modal portifolio

        var fade = $(".fade");
        var fade_close = $(".fade_close");

        fade.fadeIn(effect_time, function(){
            fade_close.on("click", function(){
                fade.fadeOut(effect_time);
            });
        }).css("display","flex");

        // fade.find("p").on("click",function(e){
        //     if(e.target === this){
        //         $(this).find("b").stop().fadeToggle(effect_time);
        //     }
        // });

        // fade.find("b").on("click",function(){
        //     if($(this).hasClass("active")){
        //         $(this).fadeTo(effect_time, 0.5, function(){
        //             console.log($(this));
        //             $(this).removeClass("active");
        //         });
        //     } else{
        //         $(this).fadeTo(effect_time, 1, function(){
        //             console.log($(this));
        //             $(this).addClass("active");
        //         });
        //     }
        // });
    });
});

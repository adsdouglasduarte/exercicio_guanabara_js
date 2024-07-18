// Declaração escopo global
var data = new Date()
let horaAtual = data.getHours()
let minuto = data.getMinutes()
let segundo = data.getSeconds()

$(document).ready(function () {

    function mudaImg() {
        if (horaAtual >= 6 && horaAtual < 12) {
            $('#imagemhora img').attr('src', './bomdia.jpg')
            $('h3').text('Bom dia...')
                .fadeOut(1000)
                .fadeIn(1000)
        } else if (horaAtual >= 12 && horaAtual < 18) {
            $('#imagemhora img').attr('src', './boatarde.jpg')
            $('h3').text('Boa tarde...')
                .fadeOut(1000)
                .fadeIn(1000)
        } else if (horaAtual >= 18 && horaAtual <= 23) {
            $('#imagemhora img').attr('src', './boanoite.jpg')
            $('h3').text('Boa noite...')
                .fadeOut(1000)
                .fadeIn(1000)
        } else {
            $('#imagemhora img').attr('src', './boanoite.jpg')
            $('h3').text('Boa noite...')
                .fadeOut(1000)
                .fadeIn(1000)
        }
    }

    function updateHora() {
        data = new Date()
        horaAtual = data.getHours()
        minuto = data.getMinutes()
        segundo = data.getSeconds()

        // Adicionar zero à esquerda se minutos ou segundos tiverem apenas um dígito
        if (minuto < 10) minuto = '0' + minuto
        if (segundo < 10) segundo = '0' + segundo

        var horaFormatada = `São ${horaAtual}:${minuto}:${segundo}`
        $('#hours').text(horaFormatada)
    }

    $('#titleh1, #img-zoom').hover(
        function () {
            $(this).addClass('zoom-efeito')
        },
        function () {
            $(this).removeClass('zoom-efeito')
        }
    )

    // Atualizar a hora a cada segundo
    setInterval(updateHora, 1000)

    // Atualizar a hora imediatamente quando a página carregar
    updateHora()

    mudaImg()
})

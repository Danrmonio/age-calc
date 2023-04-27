function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value == 0 || fAno.value > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = ano - Number(fAno.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = 'Homem'
            if (age >= 0 && age < 10) {
                //Criança
                img.setAttribute('src', 'menino.jpg')
            } else if (age < 21) {
                //Jovem
                img.setAttribute('src', 'rapaz.jpg' )
            } else if (age < 50) {
                //Adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'velho.jpg')
            }
        } else if (fsex[1].checked) {
            gender = 'Mulher'
            if (age >= 0 && age < 10) {
                //Criança
                img.setAttribute('src', 'menina.jpg')
            } else if (age < 21) {
                //Jovem
                img.setAttribute('src', 'moca.jpg')
            } else if (age < 50) {
                //Adulta
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }
}
addEventListener('DOMContentLoaded', function(){
    const name = document.getElementById('nom');
    const nif = document.getElementById('nif');
    const direccio = document.getElementById('direccio');
    const mail = document.getElementById('mail');
    const tel = document.getElementById('telefon');
    const guardar = document.getElementById('guardar');
    const can = document.getElementById('cancelar');


    window.onload = function(){
        var urlParams = new URLSearchParams(window.location.search);
        var id = urlParams.get("id");
        console.log(id);
        let item = sessionStorage.getItem('fitxes2');
        let array = JSON.parse(item);
        console.log(array);
        let trobat = false;
        array.forEach(el => {
            if(el.id == id)
            trobat = true;
            let index = array.findIndex(element => element.id == id);
            nom.value = array[index].name;
            nif.value = array[index].nif;
            direccio.value =array[index].direccio;
            mail.value = array[index].mail;
            tel.value = array[index].tel;
        });

        guardar.onclick = function (){
        console.log('save working');
        if(trobat){
            let item = sessionStorage.getItem('fitxes2');
            let array = JSON.parse(item);
            array.forEach(el => {
                if(el.id == id){
                    let index = array.findIndex(element => element.id == id);
                    array[index] = {
                        id:el.id,
                        name:name.value,
                        nif:nif.value,
                        direccio:direccio.value,
                        mail:mail.value,
                    tel:tel.value
                };
                    sessionStorage.setItem('fitxes2',JSON.stringify(array));
                }
                
            });
        } else{
            console.error('Id '+id+' no trobar');
        };
        }

    }

    
     
})
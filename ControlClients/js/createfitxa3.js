addEventListener('DOMContentLoaded', function(){
    const inputTxt = document.getElementById('fitxaTitol');
    const btnAdd = document.getElementById('btnAdd');
    const table = document.getElementById('table'); 
    var id = 1;
    id = sessionStorage.getItem('lastid3');
    if (id == null){
        id = 1;
    }
    console.log(id);
    let fitxes = [];

    if(fitxes == null){
        fitxes[0] = {}
    }


    btnAdd.onclick = function (){
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        inputTxt.classList.remove('error');
        if(inputTxt.value == ''){
            console.error('El nom no pot estar buit')
            inputTxt.classList.add('error')
            return;
        }
        const fitxa = {
            id:id,
            name:inputTxt.value
        };
        fitxes.push(fitxa);
        // if(sessionStorage.getItem('fitxes') === null){
            sessionStorage.setItem('fitxes3', JSON.stringify(fitxes));
        // } else{
        //     sessionStorage.setItem('fitxes',JSON.stringify(JSON.parse(sessionStorage.getItem('fitxes')).concat(fitxes)));
        // }

       const row = table.insertRow();
       row.innerHTML = `
       <td>${id}</td>
       <td>${inputTxt.value}</td>
       <td>${day}/${month}/${year} - ${h}:${m}</td>
       <td class="buttons">
           <button><i class="fa-regular fa-circle-down"></i></button>
       </td>`;

        const rm = document.createElement('button');
        rm.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
        row.children[3].appendChild(rm);
        row.setAttribute('id', id++);

        rm.onclick = function(){
            document.getElementById(row.getAttribute('id')).remove();
            let array = [];
            let item = sessionStorage.getItem('fitxes3');
            array = JSON.parse(item);
            array.forEach(element => {
                if(element.id == row.getAttribute('id')){
                    const index = array.findIndex(element => element.id == row.getAttribute('id'));
                    array.splice(index,1);
                }
            });
            sessionStorage.setItem('fitxes3', JSON.stringify(array))
        }
        const edit = document.createElement('button');
        edit.innerHTML= `<i class="fa-regular fa-pen-to-square">`;
        row.children[3].appendChild(edit);

        edit.onclick = function(){
            var id = row.getAttribute('id');
            console.log(id);
            
            location.href = 'fitxa.html?id='+id;
        };
        sessionStorage.setItem('lastid3', id);
    }
    


    // -------RENFERING aLL THE ITEMS THATARE STORES IN SESSIONS_STORAGE
    window.onload = function(){
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        // let fitxes = [];
        item = sessionStorage.getItem('fitxes3');
        let fitxes = JSON.parse(item);
        // console.log(fitxes)

        fitxes.forEach(element => {
        const row = table.insertRow();
        row.innerHTML = `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${day}/${month}/${year} - ${h}:${m}</td>
        <td class="buttons">
            <button><i class="fa-regular fa-circle-down"></i></button>
        </td>`;

            const rm = document.createElement('button');
            rm.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
            row.children[3].appendChild(rm);
            row.setAttribute('id', element.id);
            
            rm.onclick = function(){
                document.getElementById(row.getAttribute('id')).remove();
                let array = [];
                let item = sessionStorage.getItem('fitxes3');
                array = JSON.parse(item);
                array.forEach(element => {
                if(element.id == row.getAttribute('id')){
                    const index = array.findIndex(element => element.id == row.getAttribute('id'));
                    array.splice(index,1);
                    // console.log(element);
                    // console.log(row.getAttribute('id'));
                }
            });
            sessionStorage.setItem('fitxes3', JSON.stringify(array))
            }
            const edit = document.createElement('button');
            edit.innerHTML= `<i class="fa-regular fa-pen-to-square">`;
            row.children[3].appendChild(edit);

            edit.onclick = function(){
                var id = row.getAttribute('id');
                console.log(id);
                location.href = "fitxa.html?id=" + id;
            };
        });
    }

})

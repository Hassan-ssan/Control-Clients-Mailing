addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('enviar');
    const receptorInput = document.getElementById('receptor');
    const receptor = receptorInput.value.split(',');
    const mail = document.getElementById('mail');

    btn.onclick = function(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "hassan@mail.com",
            Password : "9D41A3733A4CC6A9A35BDAB6A72372484DBF",
            To : receptor.join(','),
            From : "syed.ulhassan@cirvianum.cat",
            Subject : "MAil enviat desde JS",
            Body : mail.value
            // Port: "2525"            
        }).then(
          message => alert(message)
        );
        console.log(receptor.value);
        console.log(mail.value);
    }
})


document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById('buttonSubmit');
    const signUpInput = document.getElementById('signUpInput');
    const form = document.getElementById('formEmail');

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault()

        // let error = formValidate(form)

        let formData = new FormData(form)

        
        let response = await fetch('sendmaiil.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            // formPreview.innerHTML = '';
            form.reset()
        } else {
            alert('Error');
        }



    }




})
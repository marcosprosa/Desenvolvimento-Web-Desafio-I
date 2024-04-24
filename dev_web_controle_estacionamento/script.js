const form = document.querySelector('#myForm');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const formData = new FormData(form);
    const json = {};

    for (const [key, value] of formData.entries()){
        json[key] = value;
    }

    console.log(json);

    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(function () {
        popup.style.display = 'none';
    }, 5000);

    form.reset();
});
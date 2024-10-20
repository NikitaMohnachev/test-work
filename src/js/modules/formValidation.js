import JustValidate from 'just-validate';

function formValidation () {
    const validate = new JustValidate('#form');
    const form = document.querySelector('.section-form');
    const formBtn = document.querySelector('.form__btn');
    validate.addField('#user-name', [
    {
        rule: 'required',
        errorMessage: 'Поле не заполнено'
    },
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа'
    },
    {
        rule: 'maxLength',
        value: 10,
        errorMessage: 'Поле должно содержать максимум 10 символов'
    },
])
    .addField('#user-phone', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено'
        },
    ])
    .addField('.form__checkbox', [
        {
            rule: 'required',
            errorMessage: 'Поле не заполнено'
        },
    ])
    .onSuccess(async function () {
        formBtn.classList.add('form__btn--active');
        formBtn.addEventListener('click', function(){
            form.classList.remove('open');
        });
        // let data = {
        //     name: document.getElementById("user-name").value,
        //     phone: document.getElementById("user-phone").value
        // }

        // let response = await fetch("mail.php", {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "application/json; charset=UTF-8"
        //     }
        // });

        // let result = await response.text();
        // alert(result);
    });
};

export default formValidation;
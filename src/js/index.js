import '../css/style.scss';

function generateRegistrationCard() {
    const card = document.querySelector('.main__card');
    const registrationWrapper = document.createElement('div');
    const registrationHead = document.createElement('h2');
    const registrationMessage = document.createElement('p');
    const registrationMessageUrl = document.createElement('a');
    const form = document.createElement('form');
    const formName = document.createElement('label');
    const formNameInput = document.createElement('input');
    const formNameText = document.createElement('div');
    const formEmail = document.createElement('label');
    const formEmailInput = document.createElement('input');
    const formEmailText = document.createElement('div');
    const formPass = document.createElement('label');
    const formPassInput = document.createElement('input');
    const formPassText = document.createElement('div');
    const formCheckbox = document.createElement('input');
    const formBox = document.createElement('label');
    const formBoxWrapper = document.createElement('div');
    const formBoxText = document.createElement('p');
    const formLine = document.createElement('hr');
    const formSubmit = document.createElement('input');

    registrationWrapper.classList.add('registration__wrapper');
    form.classList.add('form');
    formNameInput.classList.add('form__input');
    formNameText.classList.add('form__head');
    formEmailInput.classList.add('form__input')
    formEmailText.classList.add('form__head');
    formPassInput.classList.add('form__input');
    formPassText.classList.add('form__head');
    formCheckbox.classList.add('checkbox');
    formBox.classList.add('form__checkbox_wrapper');
    formBoxWrapper.classList.add('form__box');
    formLine.classList.add('form__line');
    formSubmit.classList.add('form__button', 'form__button_auth');

    registrationMessageUrl.setAttribute('href', '#');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'POST');
    formNameInput.setAttribute('type', 'text');
    formNameInput.setAttribute('required', 'true');
    formEmailInput.setAttribute('type', 'text');
    formEmailInput.setAttribute('required', 'true');
    formPassInput.setAttribute('type', 'text');
    formPassInput.setAttribute('required', 'true');
    formCheckbox.setAttribute('type', 'checkbox');
    formCheckbox.setAttribute('id', 'checkbox');
    formBox.setAttribute('for', 'checkbox');
    formSubmit.setAttribute('type', 'submit');
    formSubmit.setAttribute('value', 'Создать учетную запись');

    registrationHead.textContent = 'Создать учетную запись';
    registrationMessage.textContent = 'Уже есть учетная запись? ';
    registrationMessageUrl.textContent = 'Войти';
    formNameText.textContent = 'Имя*';
    formEmailText.textContent = 'E-mail*'
    formPassText.textContent = 'Пароль*';

    formBoxText.innerHTML = 'Я даю согласие на обработку персональных данных, указанных в условиях <a href="#">Пользовательского соглашения</a>';

    formName.append(formNameInput, formNameText);
    formEmail.append(formEmailInput, formEmailText);
    formPass.append(formPassInput, formPassText);
    formBox.append(formBoxWrapper, formBoxText);
    registrationMessage.append(registrationMessageUrl);
    form.append(formName, formEmail, formPass, formCheckbox, formBox, formLine, formSubmit);
    registrationWrapper.append(registrationHead, registrationMessage, form);
    card.append(registrationWrapper);
}

generateRegistrationCard();
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
    formSubmit.classList.add('form__button', 'form__button_registration');
    registrationMessageUrl.classList.add('registration__message');

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

function generateAuthCard() {
    const card = document.querySelector('.main__card');
    const authWrapper = document.createElement('div');
    const authHead = document.createElement('h2');
    const authMessage = document.createElement('p');
    const authMessageUrl = document.createElement('a');
    const form = document.createElement('form');
    const formEmail = document.createElement('label');
    const formEmailInput = document.createElement('input');
    const formEmailText = document.createElement('div');
    const formPass = document.createElement('label');
    const formPassInput = document.createElement('input');
    const formPassText = document.createElement('div');
    const layout2Column = document.createElement('div');
    const forgetPassword = document.createElement('a');
    const formAuth = document.createElement('input');
    const formLine = document.createElement('hr');
    const social = document.createElement('social');
    const socialText = document.createElement('p');
    const socialVk = document.createElement('button');
    const socialFb = document.createElement('button');

    authWrapper.classList.add('auth__wrapper');
    form.classList.add('form');
    formEmailInput.classList.add('form__input')
    formEmailText.classList.add('form__head');
    formPassInput.classList.add('form__input');
    formPassText.classList.add('form__head');
    formLine.classList.add('form__line');
    formAuth.classList.add('form__button', 'form__button_auth');
    social.classList.add('layout__social');
    socialText.classList.add('social__text');
    socialVk.classList.add('social__button', 'social__button_vk');
    socialFb.classList.add('social__button', 'social__button_fb');
    layout2Column.classList.add('layout__2-column');
    authMessageUrl.classList.add('auth__message');

    authMessageUrl.setAttribute('href', '#');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'POST');
    formEmailInput.setAttribute('type', 'text');
    formEmailInput.setAttribute('required', 'true');
    formPassInput.setAttribute('type', 'password');
    formPassInput.setAttribute('required', 'true');
    forgetPassword.setAttribute('href', '#');
    formAuth.setAttribute('type', 'submit');
    formAuth.setAttribute('value', 'Войти');

    authHead.textContent = 'Войти в учетную запись';
    authMessage.textContent = 'Нет учетной записи? ';
    authMessageUrl.textContent = 'Создать учетную запись';
    formEmailText.textContent = 'E-mail*'
    formPassText.textContent = 'Пароль*';
    forgetPassword.textContent = 'Забыли пароль?';
    socialText.textContent = 'или с помощью';
    socialVk.textContent = 'Войти через ВКонтакте';
    socialFb.textContent = 'Войти через Facebook';

    formEmail.append(formEmailInput, formEmailText);
    formPass.append(formPassInput, formPassText);
    authMessage.append(authMessageUrl);
    layout2Column.append(forgetPassword, formAuth); 
    social.append(socialText, socialVk, socialFb);
    form.append(formEmail, formPass, layout2Column, formLine, social);
    authWrapper.append(authHead, authMessage, form);
    card.append(authWrapper);
}

function deleteContent() {
    const card = document.querySelector('.main__card');
    card.innerHTML = '';
}

generateAuthCard();

document.addEventListener('click', (event) => {
    const { target } = event;
    const { classList } = target;
    
    switch (true) {
        case classList.contains('auth__message'):
            deleteContent();
            generateRegistrationCard();
            break;
        case classList.contains('registration__message'):
            deleteContent();
            generateAuthCard();
            break;
        default:
            break;
    }
})
import * as data from "../helpers/default_data.json"


describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    });

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('Верный пароль и верный логин', function () {
        cy.get('#mail').type(data.ger_login);
        cy.get('#pass').type(data.ger_pass);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    });

    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('pitbull@trier.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    });

    it('Верный логин и неверный пароль', function () {
        cy.get('#mail').type(data.ger_login);
        cy.get('#pass').type('ihateskillbox');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    });

    it('Неверный логин и верный пароль', function () {
        cy.get('#mail').type('wabalaba@dabdab.com');
        cy.get('#pass').type(data.ger_pass);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    });

    it('Валидация на наличие @', function () {
        cy.get('#mail').type('wabalabadabdab.com');
        cy.get('#pass').type('iLoveastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    });

    it('Проверка на приведение к строчным буквам в логине:', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type(data.ger_pass);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    });
});
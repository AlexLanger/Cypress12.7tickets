describe('Проверка покупки билетов', function () {                 // название набора тестов
    
    it('Покупка билетов "Путь воды"', function () {   // название теста
         cy.visit('https://tickets.moskvarium.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('[href="/wayofwater"] > .event-card__image').click();
         cy.get('.content > :nth-child(4)').should('be.visible');
         cy.get('[data-month-content="4"] > :nth-child(1) > .schedule__time > .row > .col-12 > .button').click({ scrollBehavior: false });
         cy.get('#popup-item-jurassicocean-adult > .row > .col-auto > .counter > .counter__button_plus').click(); // кнопка + взрослые
         cy.get('#popup-item-jurassicocean-child > .row > .col-auto > .counter > .counter__button_plus').click(); // кнопка + дети
         cy.get('#add-to-cart').click();
         cy.get('#orderAddPopup > .button').click();
         cy.get('.cart-total > .cart-total__countdown > span').contains('Оплатите в течение 10 минут');
         

     });
 });

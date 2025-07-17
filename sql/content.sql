INSERT INTO accounts (
        account_fname,
        account_lname,
        account_email,
        account_password,
        account_type
    )
VALUES (
        'Helamã',
        'Barbour',
        'something@gmail.com',
        'coisa123',
        'Admin'
    );
SELECT *
FROM accounts;
INSERT INTO fruits_for_sale (
        fruit_name,
        fruit_img,
        fruit_price,
        fruit_seller,
        max_orders,
        account_fname,
        account_lname
    )
VALUES 
    ('Banana', '/img/banana.jpeg', '28.80', 'Helamã', '2', 'Helamã', 'Barbour'),
    ('Morango', '/img/strawberry.jpeg', '18.80', 'Helamã', '7', 'Helamã', 'Barbour'),
    ('Manga', '/img/mango.jpeg', '34.80', 'Helamã', '45', 'Helamã', 'Barbour');

SELECT *
FROM fruits_for_sale;

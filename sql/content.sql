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
        'test@gmail.com',
        'test123',
        'Admin'
    );
SELECT *
FROM accounts;
INSERT INTO fruits_for_sale (
        fruit_name,
        fruit_img,
        fruit_price,
        fruit_seller,
        fruit_description,
        account_fname,
        account_lname
    )
VALUES 
    ('Banana', '/img/banana.jpeg', '28.80', 'Helamã', 'Delicious ripe banana', 'Helamã', 'Barbour'),
    ('Morango', '/img/strawberry.jpeg', '18.80', 'Helamã', 'Sweet and juicy strawberries', 'Helamã', 'Barbour'),
    ('Manga', '/img/mango.jpeg', '34.80', 'Helamã', 'Tropical mangoes', 'Helamã', 'Barbour');

SELECT *
FROM fruits_for_sale;

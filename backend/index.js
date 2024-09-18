const express = require('express');
const app = express();
const port = 3001;

// Настройка каталога для статических файлов
app.use('/images', express.static('public/images'));

const cardsData = [ 
  { 
    title: "Деньги пришли", 
    img: "http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание #драма", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Технологии будущего",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "Что нас ждет",  
    hashtags: "#технологии #будущее #инновации",  
    time: "30 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Техно-мир",  
    channel: "789 подписчиков", 
    buttonText: "Слушать" 
  },
  {  
    title: "Готовим вместе",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "Кулинарные рецепты",  
    hashtags: "#кулинария #рецепты #еда",  
    time: "50 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Вкусняшка",  
    channel: "123 подписчика", 
    buttonText: "Слушать" 
  },  
  {  
    title: "Мир музыки",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "Интервью с музыкантами",  
    hashtags: "#музыка #интервью #индустрия",  
    time: "60 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Музыкальный клуб",  
    channel: "654 подписчика", 
    buttonText: "Слушать" 
  },  
  {  
    title: "Здоровый образ жизни",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "Как быть в форме",  
    hashtags: "#здоровье #фитнес #спорт",  
    time: "40 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Спорт и здоровье",  
    channel: "321 подписчик", 
    buttonText: "Слушать" 
  },  
  {  
    title: "Истории великих людей",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "Вдохновляющие биографии",  
    hashtags: "#история #вдохновение #лидерство",  
    time: "35 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Биографии и факты",  
    channel: "432 подписчика", 
    buttonText: "Слушать" 
  },  
  {  
    title: "Экологические проблемы",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "Что мы можем сделать",  
    hashtags: "#экология #природа #сохранение",  
    time: "55 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Зеленая планета",  
    channel: "230 подписчиков", 
    buttonText: "Слушать" 
  },  
  {  
    title: "Психология счастья",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "Как найти радость в жизни",  
    hashtags: "#психология #счастье #жизнь",  
    time: "38 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Психологические аспекты",  
    channel: "190 подписчиков", 
    buttonText: "Слушать" 
  },  
  {  
    title: "Космос и его тайны",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "Исследование Вселенной",  
    hashtags: "#космос #астрономия #исследования",  
    time: "42 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Космические открытия",  
    channel: "750 подписчиков", 
    buttonText: "Слушать" 
  },  
  {  
    title: "Мир чая",  
    img: "http://localhost:3001/images/image 293.jpg",   
    subtitle: "История и культура",  
    hashtags: "#чай #культура #история",  
    time: "29 мин.",  
    ellipse: "http://localhost:3001/images/Ellipse 196.svg", 
    canal: "Чайный клуб",  
    channel: "110 подписчиков", 
    buttonText: "Слушать" 
  }  
];


app.get('/api/cards', (req, res) => {
  res.json(cardsData); // Отправляем данные в формате JSON
});

app.listen(3001, () => {
  console.log('Сервер запущен на порту 3001');
});
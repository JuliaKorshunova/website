const express = require('express');
const app = express();
const port = 3001;

// Настройка каталога для статических файлов
app.use('/images', express.static('public/images'));

const cardsData = [ 
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  },
  { 
    title: "Деньги пришли", 
    img: " http://localhost:3001/images/image 293.jpg",  
    subtitle: "Семейный бюджет", 
    hashtags: "#воспитание #дизайн #воспитание", 
    time: "34 мин.", 
    ellipse: "http://localhost:3001/images/Ellipse 196.svg",
    canal: "Альфа банк", 
    channel: "123 подписчика",
    buttonText: "Слушать"
  }
]; 

app.get('/api/cards', (req, res) => {
  res.json(cardsData); // Отправляем данные в формате JSON
});

app.listen(3001, () => {
  console.log('Сервер запущен на порту 3001');
});
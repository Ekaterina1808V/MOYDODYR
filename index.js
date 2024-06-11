const reviews = [
    {
        text: "Недавно воспользовалась услугами этой клининговой компании, и осталась очень довольна! Мой дом сиял чистотой после их визита. Ребята работают быстро и профессионально. Особенно порадовало, что используют только экологически чистые средства, что очень важно для моей семьи. Спасибо за отличную работу!",
        avatar: "photo/1o.jpg"
    },
    {
        text: "Решил навести порядок в офисе перед важной встречей с партнерами и обратился в эту компанию. Результат превзошел все ожидания! Быстро, качественно и без лишних вопросов. Пыль убрали даже в самых труднодоступных местах. Теперь буду регулярно заказывать их услуги для поддержания чистоты в офисе.",
        avatar: "photo/2o.jpg"
    },
    {
        text: "У нас дома маленький ребенок и кошка, поэтому чистота очень важна. Клининговая компания прекрасно справляется со своей задачей. Убираются аккуратно, быстро и качественно. Всегда прислушиваются к моим пожеланиям. Уже несколько раз обращалась и буду продолжать пользоваться их услугами!",
        avatar: "photo/3o.jpg"
    },
    {
        text: "Очень доволен услугами этой компании. Заказывал генеральную уборку в квартире, и команда справилась на отлично. Пунктуальные, вежливые и действительно профессиональные сотрудники. Полы блестят, ковры чистые, окна прозрачные. Я ценю свое время, а вы его экономите. Всем рекомендую!",
        avatar: "photo/4o.jpg"
    },
    {
        text: "Я уже в возрасте, и мне сложно самой справляться с уборкой. Сын подарил мне услуги этой компании, и я очень рада! Молодые люди приехали вовремя, были очень вежливыми и доброжелательными. Они сделали всё, что я просила, и даже больше. Теперь мой дом снова уютный и чистый. Большое спасибо за помощь!",
        avatar: "photo/5o.jpg",
        
    }
];

let currentReviewIndex = 0;

function showReview(index) {
    const review = reviews[index];
    document.getElementById('otzyvText').innerText = review.text;
    document.getElementById('avatar').src = review.avatar;
}

function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(currentReviewIndex);
}

function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    showReview(currentReviewIndex);
}


document.addEventListener('DOMContentLoaded', () => {
    showReview(currentReviewIndex);
});




document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Спасибо, ваша заявка принята и одобрена. В течение 15 минут мы вам перезвоним!');
    this.reset(); 
});


document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Спасибо за подписку!'); 
    this.reset(); 
});


var accordions = document.querySelectorAll('.accordion-heading');

accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
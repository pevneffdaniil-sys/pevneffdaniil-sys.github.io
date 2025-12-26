const articles = [
    {
        title: "Title 1",
        text: "1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nisi iure at assumenda recusandae ullam?"
    },
    {
        title: "Title 2", 
        text: "2.text text 2 text tex2t text"
    },
    {
        title: "Title 3",
        text: "3.text 3 text 3 text tex3t text text text na na na na "
    }
];

let currentIndex = 0;

const modal = document.getElementById('modal');
const articleTitle = document.getElementById('articleTitle');
const articleText = document.getElementById('articleText');
const nextButton = document.getElementById('nextButton');

function showArticle() {
    articleTitle.textContent = articles[currentIndex].title;
    articleText.textContent = articles[currentIndex].text;
}

function nextArticle() {
    currentIndex = (currentIndex + 1) % articles.length;
    showArticle();
}

showArticle();

nextButton.addEventListener('click', nextArticle);
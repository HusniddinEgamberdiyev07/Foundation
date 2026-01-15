function create_news_item(picture, title, text){
    let news_container = document.getElementById("news_container");
    let article = document.createElement("article");
    article.className = "news_item"

    let img = document.createElement("img");
    img.src = picture;

    let h3 = document.createElement("h3");
    h3.textContent = title;

    let p = document.createElement("p");
    p.textContent = text;

    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);

    news_container.appendChild(article);
}

function addToLimit(num){
    let more = document.getElementById("more");

    if(limit < news_data.length){
        limit += 1;
        create_news(num)
        console.log(limit);
    }else{
        more.disabled = true
    }
}

function create_news(num){
    for(let i =limit-num; i<limit; i++){
        create_news_item(news_data[i].picture, news_data[i].title, news_data[i].text)
    }
}

let limit = 3;

let news_data = [
    {
        picture:"./src/images/card1.png",
        title:"Signs Your Ex Is Spying On You",
        text:"In an ideal world, after a relationship ends both you and your ex will move on. But what if they can’t let go, and start spying on your..."
    },
    {
        picture:"./src/images/card2.png",
        title:"How to Remove a Hacker from Your Samsung Phone",
        text:"Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.19% compared to Apple’s 28.43% as..."
    },
    {
        picture:"./src/images/card3.png",
        title:"Is Your Cell Phone Under Surveillance?",
        text:"In today’s surveillance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV..."
    },
        {
        picture:"./src/images/card1.png",
        title:"Signs Your Ex Is Spying On You",
        text:"In an ideal world, after a relationship ends both you and your ex will move on. But what if they can’t let go, and start spying on your..."
    },
    {
        picture:"./src/images/card2.png",
        title:"How to Remove a Hacker from Your Samsung Phone",
        text:"Samsung is the second most popular manufacturer of smartphones in the world, with a market share of 28.19% compared to Apple’s 28.43% as..."
    },
    {
        picture:"./src/images/card3.png",
        title:"Is Your Cell Phone Under Surveillance?",
        text:"In today’s surveillance state, it can feel like your every move is being watched. Although your mind may be conjuring up images of CCTV..."
    },
];

create_news(3);
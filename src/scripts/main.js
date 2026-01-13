let index = 0;

function change_active(){
    let btns = document.getElementsByClassName("circle");

    for(let btn of btns){
        btn.className = "circle"
    }

    btns[index].className = "circle active_circle"

}

function move_right(){
    console.log(index);
    
    if(index === carusel_data.length-1){
        index = 0;
    }else{
        index += 1; 
    }
    console.log(index);
    
    create_item(carusel_data[index].text, carusel_data[index].name, carusel_data[index].job, carusel_data[index].logo);
    change_active()
}




function move_left(){
    console.log(index);
    if(index === 0){
        index = carusel_data.length-1;
    }else{
        index -= 1; 
    }
    console.log(index);
    

    create_item(carusel_data[index].text, carusel_data[index].name, carusel_data[index].job, carusel_data[index].logo);
    change_active()
}

function create_item(text, name, job, logo){
    let articles = document.getElementById("articles");

    let article = document.createElement("article");
    article.className = "carusel_item"

    let p1 = document.createElement("p");
    p1.textContent = text;
    
    let h3 = document.createElement("h3");
    h3.textContent = name;  

    let div1 = document.createElement("div");
    div1.className = "who"

    let p2 = document.createElement("p");
    p2.textContent = job;

    let img = document.createElement("img");
    img.src = logo;
    img.alt = "this is company's logo";

    div1.appendChild(p2);
    div1.appendChild(img);

    article.appendChild(p1);
    article.appendChild(h3);
    article.appendChild(div1);

    articles.innerHTML = "";
    articles.appendChild(article);
}

let carusel_data = [
    {
        text:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.s",
        name:"Atthakrit Chimplapibul",
        job:"Co-founder & CEO of Bitkub",
        logo:"./src/icons/bitkub-logo.png"
    }, 
    {
        text:"Bye die go left leave something hehhee",
        name:"Monkey Donkey",
        job:"Co-founder & CEO of Bitkub",
        logo:"./src/icons/bitkub-logo.png"
    }, 
        {
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, iste?",
        name:"One wing Bird",
        job:"Co-founder & CEO of Bitkub",
        logo:"./src/icons/bitkub-logo.png"
    }, 
]

create_item(carusel_data[0].text, carusel_data[0].name, carusel_data[0].job, carusel_data[0].logo);
function createCard(thumbnail, title, cName, cViews, vDate){
    let container = document.getElementById('container');
    //Create Card
    let card = document.createElement('div');
    card.classList.add('card');
    //Create Card Image
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    let image = document.createElement('img');
    image.src = thumbnail;
    image.alt = "Thumbnail";
    imageContainer.appendChild(image);
    //Create Card Content
    let content = document.createElement('div');
    content.classList.add('cardinfo');
    let cTitle = document.createElement('h1');
    cTitle.innerText = title;
    content.appendChild(cTitle);

    let contentList = document.createElement('ul');
    contentList.classList.add('cardinfoitems')
    let cNameItem = document.createElement('li');
    cNameItem.innerText = cName;
    let cViewsItem = document.createElement('li');
    cViews = cViews > 9999999 ? (cViews / 10000000).toFixed(2) + 'B' : cViews > 999999 ? (cViews / 1000000).toFixed(2) + 'M' : cViews > 9999 ? (cViews / 1000).toFixed() + 'K' : cViews;
    cViewsItem.innerText = cViews;
    let vDateItem = document.createElement('li');
    vDateItem.innerText = vDate;
    contentList.appendChild(cNameItem);
    contentList.appendChild(cViewsItem);
    contentList.appendChild(vDateItem);
    content.appendChild(contentList);

    container.appendChild(card);
    card.appendChild(imageContainer);
    card.appendChild(content);
}
document.getElementById('add').addEventListener('click', function(){
    createCard("imageurl","Video Title", "Channel", 1234557, "2 Months Ago");
});

let colorList = document.querySelector('.colors');

let requestColor = new XMLHttpRequest();
requestColor.open('GET', 'https://raw.githubusercontent.com/corysimmons/colors.json/master/colors.json',true);
requestColor.onreadystatechange = function() {
    if(requestColor.readyState != 4 || requestColor.status !=200)return
        let data = JSON.parse(requestColor.responseText);
        looper(data);
        coloring(data);
};
requestColor.send();

function looper(data) {
    let listItem = '';
    for(let key in data) {
        if(data.hasOwnProperty(key)) {
           listItem += `<li>${key}</li>`;
        }
    }
    colorList.insertAdjacentHTML('beforeend', listItem);
}
function coloring(list) {
    console.log(colorList.childElementCount);
    let count = 0;
    let color = '';
    for(let item in list) {
        if(list.hasOwnProperty(item)) {
            color = item;
        }   
    for(let i = 0; i < colorList.childElementCount; i++) {
        let item = colorList.childNodes[count]
        item.style.background = color;
    }
    count++;
    }
}
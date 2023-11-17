const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {

    displayList(chapter);
});

button.addEventListener('click', () => {

    if (input.value != ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }

})

displayList = item => {

    {
        const li = document.createElement('li');
        const delete_button = document.createElement('button');
    
        li.textContent = item;
        delete_button.textContent = "❌";
        delete_button.classList.add('delete');
        li.append(delete_button);
        list.append(li);
        
        delete_button.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus;
        });
        input.focus();
        input.value = '';
    }
}

function setChapterList() {
    localStorage.setItem('favBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse.apply(localStorage.getItem('favBomList')); 
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
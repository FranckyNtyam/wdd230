const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '')
    {
        const li = document.createElement('li');
        const delete_button = document.createElement('button');
    
        li.textContent = input.value;
        delete_button.textContent = "❌";
        li.append(delete_button);
        list.append(li);
        
        delete_button.addEventListener('click', () => {
            list.removeChild(li);
            input.focus;
        });
        input.focus();
        input.value = '';
    }
    else
    {
        alert('Enter book and chapter please!');
        return input.focus();
    }
});

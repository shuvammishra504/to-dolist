var contentDiv = document.querySelector('.content');
var bubble = document.querySelector('.bubble');
var input = document.querySelector('.input')
var button = document.querySelector('.add-button')

contentDiv.addEventListener('click', toggle);
button.addEventListener('click', addElement)


function toggle(e){
    const item = e.target;
    var itemParent = item.parentElement;
    itemParent.classList.toggle('activated-blur-div');
}

function addElement(event){
    var bubbleDiv = document.createElement('div');
    bubbleDiv.classList.add('bubble')
    contentDiv.appendChild(bubbleDiv);

    var b1Con = document.createElement('div');
    b1Con.classList.add('b1-con');
    bubbleDiv.appendChild(b1Con);

    var blurDiv = document.createElement('div');
    b1Con.appendChild(blurDiv);

    var header = document.createElement('h3');
    header.classList.add('nonDefH3')
    header.innerText = input.value;
    b1Con.appendChild(header);

    var line = document.createElement('hr');
    b1Con.appendChild(line);

    var descInputDiv = document.createElement('div');
    descInputDiv.classList.add('desc-input-div')
    b1Con.appendChild(descInputDiv);

    var desInput = document.createElement('input');
    desInput.classList.add('des-input');
    descInputDiv.appendChild(desInput);

    var desBtn = document.createElement('button');
    desBtn.classList.add('desInputBtn');
    desBtn.innerHTML = "<i class='fa fa-plus' aria-hidden='true'></i>";
    descInputDiv.appendChild(desBtn);

    desBtn.addEventListener('click', desPara);

    function desPara() {
        var desParagraph = document.createElement('p');
        desParagraph.innerText = desInput.value;
        b1Con.appendChild(desParagraph);

        this.parentElement.remove();

        blurDiv.innerHTML = '<i class="fas fa-check-circle"></i>'
        blurDiv.classList.add('blur-div')
    }
}
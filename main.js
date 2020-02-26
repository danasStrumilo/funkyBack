
const funkyBack = () => {

    const btn = document.querySelector('button');
    const chubby = document.querySelector('body');
    const color = ['#1abc9c', '#f39c12', '#2ecc71', '#34495e', '#ecf0f1', '#3498db','#7f8c8d', '#8e44ad'];
    btn.addEventListener('click', () => {

        const randomInt = Math.floor(Math.random() * color.length)
        chubby.style.background = color[randomInt]
        
    })

};

funkyBack();
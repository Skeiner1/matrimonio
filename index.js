    const yesBtn = document.querySelector('#yesBtn');

    yesBtn.addEventListener('click',function () {
        alert ('Algunos jactan del matrimonio como una sentencia pero a mi no me importaria ser condenado a una vida a tu lado <33')
    });

    const noBtn = document.querySelector('#noBtn');

    noBtn.addEventListener('mouseover', function (){
        const randomX = parseInt(Math.random()*100);
        const randomY = parseInt(Math.random()*100);
        noBtn.style.setProperty('top',randomY+'%');
        noBtn.style.setProperty('left',randomX+'%');
        noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
    })
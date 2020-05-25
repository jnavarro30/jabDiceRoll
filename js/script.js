
const DiceRoll = (() => {

    const init = () => {
        listeners();
    }

    const listeners = () => {

        //Variables
        const mainBtn = document.querySelector('.main__button'),
              mainImage = document.querySelector('.main__image'),
              soundEffect = new Audio('/mp3/woosh.mp3');

              mainBtn.addEventListener('click', () => {
                  let randomNum = 1 + Math.floor((Math.random() * 6));
                  mainImage.src = `images/dice${randomNum}.png`;
                  soundEffect.play();
                  mainImage.classList.toggle('rotate');
                  setTimeout(() => {
                    mainImage.classList.toggle('rotate');
                  }, 1000);  
              })
    }

    return {
        init
    }
})();

DiceRoll.init();
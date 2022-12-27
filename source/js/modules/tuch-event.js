const buttons = document.querySelectorAll('.coaches__button-cover');
const itemsContent = document.querySelectorAll('.coaches__item-content');

const showCard = () => {
  for (let i = 0; i <= (buttons.length - 1); i++) {
    let indexButton = i;
    let button = buttons[i];
    button.addEventListener('click', () => {
      for (let j = 0; j <= itemsContent.length; j++) {
        let indexContent = j;
        let itemContent = itemsContent[j];
        if (indexButton === indexContent) {
          itemContent.classList.add('coaches__item-content--max-index');
        } else {
          itemContent.classList.remove('coaches__item-content--max-index');
        }
      }
    }, {passive: true});
  }
};

export {showCard};

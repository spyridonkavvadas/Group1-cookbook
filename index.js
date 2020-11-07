const dessertButton = document.querySelector('.dessert-button');
const lunchButton = document.querySelector('.lunch-button');
const allButton = document.querySelector('.all-button');
const breakfastButton = document.querySelector('.breakfast-button');
const dinnerButton = document.querySelector('.dinner-button');

const breakfastRecipes = document.querySelectorAll('.breakfast');
const lunchRecipes = document.querySelectorAll('.lunch');
const dessertRecipes = document.querySelectorAll('.dessert');
const allCards = document.querySelectorAll('.card');

const newButtonFunction = (category) => {
  const visibleCards = [...allCards].filter((card) =>
    card.classList.contains(category)
  );
  const invisibleCards = [...allCards].filter(
    (card) => !card.classList.contains(category)
  );
  visibleCards.forEach((card) => {
    //initial
    const initial = card.getBoundingClientRect(); //0 0
    console.log('initial', initial);
    //final
    card.style.display = 'block'; // 180 180
    invisibleCards.forEach((each) => {
      each.style.display = 'none';
    });
    const final = card.getBoundingClientRect();
    invisibleCards.forEach((each) => (each.style.display = 'block'));
    card.style.display = 'none';
    console.log('final', final);
    //invert
    const translateX = initial.left - final.left;
    const translateY = initial.top - final.top;
    const scaleX = initial.width / final.width;
    const scaleY = initial.height / final.height;
    card.style.transition = 'none';
    card.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
    console.log('diff', translateX, translateY);
  });
  invisibleCards.forEach((each) => (each.style.display = 'none'));
  visibleCards.forEach((card) => {
    card.style.display = 'block';
    requestAnimationFrame(() => {
      card.style.transform = 'none';
      card.style.transition = 'transform 0.5s';
    });
  });
};

allButton.addEventListener('click', () => newButtonFunction('card'));
breakfastButton.addEventListener('click', () => newButtonFunction('breakfast'));
lunchButton.addEventListener('click', () => newButtonFunction('lunch'));
dinnerButton.addEventListener('click', () => newButtonFunction('dinner'));
dessertButton.addEventListener('click', () => newButtonFunction('dessert'));

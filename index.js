const dessertButton = document.querySelector('.dessert-button');
const lunchButton = document.querySelector('.lunch-button');
const allButton = document.querySelector('.all-button');
const breakfastButton = document.querySelector('.breakfast-button');
const dinnerButton = document.querySelector('.dinner-button');
const buttons = document.querySelectorAll('.toggle');

const breakfastRecipes = document.querySelectorAll('.breakfast');
const lunchRecipes = document.querySelectorAll('.lunch');
const dessertRecipes = document.querySelectorAll('.dessert');
const allCards = document.querySelectorAll('.card');

const newButtonFunction = (event, category) => {
  buttons.forEach((each) => each.classList.remove('clicked'));
  event.target.classList.add('clicked');

  const visibleCards = [...allCards].filter((card) =>
    card.classList.contains(category)
  );
  const invisibleCards = [...allCards].filter(
    (card) => !card.classList.contains(category)
  );
  visibleCards.forEach((card) => {
    //initial
    const initial = card.parentNode.getBoundingClientRect(); //0 0
    //final
    card.parentNode.style.display = 'block'; // 180 180
    invisibleCards.forEach((each) => {
      each.parentNode.style.display = 'none';
    });
    const final = card.parentNode.getBoundingClientRect();
    invisibleCards.forEach((each) => (each.parentNode.style.display = 'block'));
    card.parentNode.style.display = 'none';
    //invert
    const translateX = initial.left - final.left;
    const translateY = initial.top - final.top;
    const scaleX = initial.width / final.width;
    const scaleY = initial.height / final.height;
    card.parentNode.style.transition = 'none';
    card.parentNode.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
  });
  invisibleCards.forEach((each) => (each.parentNode.style.display = 'none'));
  visibleCards.forEach((card) => {
    card.parentNode.style.display = 'block';
    requestAnimationFrame(() => {
      card.parentNode.style.transform = 'none';
      card.parentNode.style.transition = 'transform 0.5s';
    });
  });
};

allButton.addEventListener('click', () => newButtonFunction(event, 'card'));
breakfastButton.addEventListener('click', () =>
  newButtonFunction(event, 'breakfast')
);
lunchButton.addEventListener('click', () => newButtonFunction(event, 'lunch'));
dinnerButton.addEventListener('click', () =>
  newButtonFunction(event, 'dinner')
);
dessertButton.addEventListener('click', () =>
  newButtonFunction(event, 'dessert')
);

const disableStylesNojs = () => {
  const coachesList = document.querySelector('.coaches__list');
  coachesList.classList.remove('coaches__list--nojs');

  const coachesButtonPref = document.querySelector('.coaches__item-button-prev');
  coachesButtonPref.classList.remove('coaches__item-button-prev--nojs');
  const coachesButtonNext = document.querySelector('.coaches__item-button-next');
  coachesButtonNext.classList.remove('coaches__item-button-next--nojs');

  const reviewsList = document.querySelector('.reviews__list');
  reviewsList.classList.remove('reviews__list--nojs');

  const reviewsButtonPref = document.querySelector('.reviews__button-prev');
  reviewsButtonPref.classList.remove('reviews__button-prev--nojs');
  const reviewsButtonNext = document.querySelector('.reviews__button-next');
  reviewsButtonNext.classList.remove('reviews__button-next--nojs');
};

export {disableStylesNojs};

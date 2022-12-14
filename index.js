new Swiper('.slider', {
  effect: "cards",
  grabCursor: true,
});


const showMore = document.querySelector('.read--more')
const showLess = document.querySelector('.read--less')
const text = document.querySelector('.review__card--text')
const card = document.querySelector('.review__card--middle')

showMore.addEventListener("click", function () {
  text.classList.add('text--on')
  card.classList.add('text--on')
  showLess.classList.add('btn--show')
  showMore.classList.add('btn--hide')
})

showLess.addEventListener("click", function () {
  text.classList.remove('text--on')
  card.classList.remove('text--on')
  showLess.classList.remove('btn--show')
  showMore.classList.remove('btn--hide')
})
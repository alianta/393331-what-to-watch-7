import React from 'react'

function Film() {
 return (
  <section class="film-card film-card--full">
  <div class="film-card__hero">
    <div class="film-card__bg">
      <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
    </div>

    <h1 class="visually-hidden">WTW</h1>

    <header class="page-header film-card__head">
      <div class="logo">
        <a href="main.html" class="logo__link">
          <span class="logo__letter logo__letter--1">W</span>
          <span class="logo__letter logo__letter--2">T</span>
          <span class="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <ul class="user-block">
        <li class="user-block__item">
          <div class="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li class="user-block__item">
          <a class="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>

    <div class="film-card__wrap">
      <div class="film-card__desc">
        <h2 class="film-card__title">The Grand Budapest Hotel</h2>
        <p class="film-card__meta">
          <span class="film-card__genre">Drama</span>
          <span class="film-card__year">2014</span>
        </p>

        <div class="film-card__buttons">
          <button class="btn btn--play film-card__button" type="button">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlink:href="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <button class="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlink:href="#add"></use>
            </svg>
            <span>My list</span>
          </button>
          <a href="add-review.html" class="btn film-card__button">Add review</a>
        </div>
      </div>
    </div>
  </div>

  <div class="film-card__wrap film-card__translate-top">
    <div class="film-card__info">
      <div class="film-card__poster film-card__poster--big">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>

      <div class="film-card__desc">
        <nav class="film-nav film-card__nav">
          <ul class="film-nav__list">
            <li class="film-nav__item film-nav__item--active">
              <a href="#" class="film-nav__link">Overview</a>
            </li>
            <li class="film-nav__item">
              <a href="#" class="film-nav__link">Details</a>
            </li>
            <li class="film-nav__item">
              <a href="#" class="film-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>

        <div class="film-rating">
          <div class="film-rating__score">8,9</div>
          <p class="film-rating__meta">
            <span class="film-rating__level">Very good</span>
            <span class="film-rating__count">240 ratings</span>
          </p>
        </div>

        <div class="film-card__text">
          <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

          <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

          <p class="film-card__director"><strong>Director: Wes Andreson</strong></p>

          <p class="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
        </div>
      </div>
    </div>
  </div>
</section>
 );
}

export default Film;

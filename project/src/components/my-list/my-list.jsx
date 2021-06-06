import React from 'react'

function MyList() {
  return (
    <div class="user-page">
      <header class="page-header user-page__head">
        <div class="logo">
          <a href="main.html" class="logo__link">
            <span class="logo__letter logo__letter--1">W</span>
            <span class="logo__letter logo__letter--2">T</span>
            <span class="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 class="page-title user-page__title">My list</h1>

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

      <section class="catalog">
        <h2 class="catalog__title visually-hidden">Catalog</h2>

        <div class="catalog__films-list">
          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
            </h3>
          </article>

          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
            </h3>
          </article>

          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">Macbeth</a>
            </h3>
          </article>

          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">Aviator</a>
            </h3>
          </article>


          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">We need to talk about Kevin</a>
            </h3>
          </article>

          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">What We Do in the Shadows</a>
            </h3>
          </article>

          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/revenant.jpg" alt="Revenant" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">Revenant</a>
            </h3>
          </article>

          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/johnny-english.jpg" alt="Johnny English" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">Johnny English</a>
            </h3>
          </article>


          <article class="small-film-card catalog__films-card">
            <div class="small-film-card__image">
              <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175" />
            </div>
            <h3 class="small-film-card__title">
              <a class="small-film-card__link" href="film-page.html">Shutter Island</a>
            </h3>
          </article>
        </div>
      </section>

      <footer class="page-footer">
        <div class="logo">
          <a href="main.html" class="logo__link logo__link--light">
            <span class="logo__letter logo__letter--1">W</span>
            <span class="logo__letter logo__letter--2">T</span>
            <span class="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div class="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;

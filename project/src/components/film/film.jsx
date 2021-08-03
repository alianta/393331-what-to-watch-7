import React, {useState, useEffect} from 'react';
import { Link, useParams, generatePath } from 'react-router-dom';
import Footer from '../footer/footer';
import Logo from '../logo/logo';
import FilmList from '../film-list/film-list';
import Tabs from '../tabs/tabs';
import {useHistory} from 'react-router-dom';
import { TabNames, SIMILAR_FILM_COUNT, AuthorizationStatus} from '../../const';
import {fetchFlmInfo, fetchSimilarFilms, fetchComments, changeFilmFavoriteStatus} from '../../store/api-actions';
import {useSelector, useDispatch} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import UserBlock from '../user-block/user-block';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getCurrentFilm, getFilmLoadedStatus, getSimilarFilms as getSimilarFilmsData, getSimilarFilmLoadedStatus} from '../../store/film-data/selectors';
import {getCommentsLoadedStatus, getComments as getCommentsData} from '../../store/review-data/selectors';
import Error from '../error/error';
import {getServerErrorStatus} from '../../store/server/selectors';

function Film() {
  const {id} = useParams();
  const filmData = useSelector(getCurrentFilm);
  const isFilmDataLoaded = useSelector(getFilmLoadedStatus);
  const similarFilms = useSelector(getSimilarFilmsData);
  const isSimilarFilmsLoaded = useSelector(getSimilarFilmLoadedStatus);
  const isCommentsLoaded = useSelector(getCommentsLoadedStatus);
  const comments = useSelector(getCommentsData);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isServerError = useSelector(getServerErrorStatus);

  const handleFavoriteChange = () => {
    dispatch(changeFilmFavoriteStatus(id, filmData.isFavorite? 0:1));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const getFilmInfo = (filmId) => {
      dispatch(fetchFlmInfo(filmId));
    };
    const getSimilarFilms = (filmId) => {
      dispatch(fetchSimilarFilms(filmId));
    };
    const getComments = (filmId) => {
      dispatch(fetchComments(filmId));
    };
    getFilmInfo(id);
    getSimilarFilms(id);
    getComments(id);
  }, [id, dispatch]);
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(TabNames.OVERVIEW);

  if (!isFilmDataLoaded || !isSimilarFilmsLoaded || !isCommentsLoaded){
    return (
      <LoadingScreen/>
    );
  }

  return (
    <React.Fragment>
      <div className="visually-hidden">
        {isServerError?<Error />:''}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <symbol id="play-s" viewBox="0 0 19 19">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5" />
            </symbol>
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol>
        </svg>
      </div>
      <section className="film-card film-card--full" style={{'backgroundColor':filmData.background}} >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmData.bigImage} alt={filmData.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmData.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData.genre}</span>
                <span className="film-card__year">{filmData.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(`/player/${filmData.id}`,filmData)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteChange}>
                  {filmData.isFavorite
                    ? (
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                    )
                    : (
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                    )}
                  <span>My list</span>
                </button>
                {(authorizationStatus === AuthorizationStatus.AUTH)?
                  <Link to={generatePath('/film/:id/review', {id: id})} className="btn film-card__button">Add review</Link>:''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmData.poster} alt={filmData.title} width="218" height="327" />
            </div>

            <Tabs film={filmData} filmReviews={comments} activeTab={activeTab} changeActiveTab={(value)=>setActiveTab(value)}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms.filter((film) => filmData.genre===film.genre).slice(0,SIMILAR_FILM_COUNT)}></FilmList>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Film;

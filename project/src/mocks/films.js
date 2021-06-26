const films = [
  {
    id: 1,
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    year: 2014,
    poster: 'img/the-grand-budapest-hotel-poster.jpg',
    bigImage: 'img/bg-the-grand-budapest-hotel.jpg',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    ratingScore: 8.9,
    ratingDescription: 'Very good',
    ratingCount: 240,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.cGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    time: 99,
    isFavorite: false,
    isFilmOfDay: true,
  },
  {
    id: 2,
    title: 'Aviator',
    genre: 'Comedy',
    year: 2021,
    poster: 'img/aviator.jpg',
    bigImage: 'http://picsum.photos/248/152?r=2',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Citizen_Kane_Trailer_%281940%29.webm',
    ratingScore: 4.5,
    ratingDescription: 'Good',
    ratingCount: 140,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.cGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    time: 120,
    isFavorite: false,
    isFilmOfDay: false,
  },
  {
    id: 3,
    title: 'Bohemian rhapsody',
    genre: 'Fantasy',
    year: 2013,
    poster: 'img/bohemian-rhapsody.jpg',
    bigImage: 'http://picsum.photos/248/152?r=3',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Matches_animation_of_chain_reaction_with_slow_elements.webm',
    ratingScore: 6.5,
    ratingDescription: 'Bad',
    ratingCount: 600,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.cGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Jude Law',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    time: 102,
    isFavorite: false,
    isFilmOfDay: false,
  },
  {
    id: 4,
    title: 'Dardjeeling limited',
    genre: 'Fantasy',
    year: 2014,
    poster: 'img/dardjeeling-limited.jpg',
    bigImage: 'http://picsum.photos/248/152?r=3',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wall-E_and_Eve%27s_Christmas%21.webm',
    ratingScore: 6.5,
    ratingDescription: 'Normal',
    ratingCount: 647,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.cGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Villy',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    time: 102,
    isFavorite: false,
    isFilmOfDay: false,
  },
  {
    id: 5,
    title: 'Fantastic beasts the crimes of Grindelwald',
    genre: 'Comedy',
    year: 2015,
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    bigImage: 'http://picsum.photos/248/152?r=3',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    ratingScore: 6.5,
    ratingDescription: 'Awesome',
    ratingCount: 851,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.cGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Bill Murray',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    time: 102,
    isFavorite: false,
    isFilmOfDay: false,
  },
  {
    id: 6,
    title: 'Johnny english',
    genre: 'Fantasy',
    year: 2016,
    poster: 'img/johnny-english.jpg',
    bigImage: 'http://picsum.photos/248/152?r=3',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    ratingScore: 6.5,
    ratingDescription: 'Very good',
    ratingCount: 86,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.cGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    time: 102,
    isFavorite: false,
    isFilmOfDay: false,
  },
  {
    id: 7,
    title: 'Snatch',
    genre: 'Fantasy',
    year: 2017,
    poster: 'img/snatch.jpg',
    bigImage: 'http://picsum.photos/248/152?r=3',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    ratingScore: 6.5,
    ratingDescription: 'Good',
    ratingCount: 55,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.cGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Jude Law',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    time: 102,
    isFavorite: false,
    isFilmOfDay: false,
  },
  {
    id: 8,
    title: 'Pulp fiction',
    genre: 'Fantasy',
    year: 2018,
    poster: 'img/pulp-fiction.jpg',
    bigImage: 'http://picsum.photos/248/152?r=3',
    video: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideo: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    ratingScore: 6.5,
    ratingDescription: 'Normal',
    ratingCount: 1400,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.cGustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    director: 'Willem Dafoe',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    time: 333,
    isFavorite: true,
    isFilmOfDay: false,
  },
];

export default films;

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const movie_list = [
  {
    Id: '157336',
    Title: 'Interstellar',
    Year: '2014',
    Duration: '169 dk',
    Rating: '8.6',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  },
  {
    Id: '155',
    Title: 'The Dark Knight',
    Year: '2008',
    Duration: '152 dk',
    Rating: '9.0',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
  },
  {
    Id: '27205',
    Title: 'Inception',
    Year: '2010',
    Duration: '148 dk',
    Rating: '8.8',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
  },
  {
    Id: '603',
    Title: 'The Matrix',
    Year: '1999',
    Duration: '136 dk',
    Rating: '8.7',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
  },
  {
    Id: '299534',
    Title: 'Avengers: Endgame',
    Year: '2019',
    Duration: '181 dk',
    Rating: '8.4',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'
  },
  {
    Id: '120',
    Title: 'Lord of the Rings',
    Year: '2001',
    Duration: '178 dk',
    Rating: '8.8',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
  },
  {
    Id: '680',
    Title: 'Pulp Fiction',
    Year: '1994',
    Duration: '154 dk',
    Rating: '8.9',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  },
  {
    Id: '13',
    Title: 'Forrest Gump',
    Year: '1994',
    Duration: '142 dk',
    Rating: '8.8',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
  },
  {
    Id: '769',
    Title: 'GoodFellas',
    Year: '1990',
    Duration: '146 dk',
    Rating: '8.7',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  },
  {
    Id: '424',
    Title: "Schindler's List",
    Year: '1993',
    Duration: '195 dk',
    Rating: '9.0',
    Poster:
      'https://upload.wikimedia.org/wikipedia/tr/3/38/Schindler%27s_List_movie.jpg'
  },
  {
    Id: '550',
    Title: 'Fight Club',
    Year: '1999',
    Duration: '139 dk',
    Rating: '8.8',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  },
  {
    Id: '238',
    Title: 'The Godfather',
    Year: '1972',
    Duration: '175 dk',
    Rating: '9.2',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  }
]

function App () {
  const [movies, setmovies] = useState(movie_list)
  const [selectedMovie, setSelectedmovies] = useState(movie_list)
  const [isOpen1, setIsopen1] = useState(true)
  const [isOpen2, setIsopen2] = useState(true)

  return (
    <>
      <nav className='bg-primary text-white p-2'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-4'>Movie App</div>
            <div className='col-4'>
              <input
                type='text'
                className='form-control'
                placeholder='Yazınız...'
              />
            </div>
            <div className='col-4 text-end'>
              <strong>6</strong> kayıt bulundu.
            </div>
          </div>
        </div>
      </nav>

      <main className='container'>
        <div className='row mt-2'>
          <div className='col-md-9'>
            <div className='movie-list'>
              <button className='btn btn-sm btn-outline-primary mb-2' onClick={() => setIsopen1(val => !val)}>
                {isOpen1 ? (
                  <i className='bi bi-chevron-up'></i>
                  ) : (
                  <i className='bi bi-chevron-down'></i>
                )}
            </button>
            {isOpen1 && (
              <div className='row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4'>
                {movies.map(movie => (
                  <div className='col mb-2' key={movie.Id}>
                    <div className='card h-100'>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className='card-img-top'
                      />
                      <div className='card-body'>
                        <h6 className='card-title'>{movie.Title}</h6>
                      </div>
                      <i className='bi bi-calendar-date me-1'>
                        <span>{movie.Year}</span>
                      </i>
                      <p className='card-text small text-muted mb-'>
                        <i className='bi bi-star-fill text-warning me-4'></i>
                        {movie.Rating}
                        <i className='bi bi-alarm text-warning me-4'></i>
                        {movie.Duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </div>
          </div>

          <div className='col-md-3'>
            <h5 className='mb-3'>Seçilenler</h5> {/* Başlık ekledim */}
            <div className='movie-list'>
              <button className='btn btn-sm btn-outline-primary mb-2' onClick={() => setIsopen2(val => !val)}>
                {isOpen2 ? (
                  <i className='bi bi-chevron-up'></i>
                  ) : (
                  <i className='bi bi-chevron-down'></i>
                )}
                </button>
                {isOpen2 && selectedMovie.map(movie => (
                <div
                  className='card mb-3 shadow-sm border-0'
                  key={movie.Id}
                  style={{ overflow: 'hidden' }}
                >
                  <div className='row g-0 align-items-center'>
                    <div className='col-4'>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className='img-fluid rounded-start'
                        style={{
                          height: '80px',
                          width: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div className='col-8'>
                      <div className='card-body p-2'>
                        <h6
                          className='card-title text-truncate small fw-bold mb-1'
                          title={movie.Title}
                        >
                          {movie.Title}
                        </h6>
                        <p className='card-text small text-muted mb-0'>
                          <i className='bi bi-star-fill text-warning me-1'></i>
                          {movie.Rating}
                        </p>

                        <p className='card-text small text-muted mb-0'>
                          <i className='bi bi-alarm text-warning me-1'></i>
                          {movie.Duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

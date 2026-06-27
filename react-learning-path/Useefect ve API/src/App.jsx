import { useState ,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Loader from './components/loading'
import StarRating from './components/StarRating'

function ErrorMessage ({message}) {
  return (
    <div className="card-body p-2" role="alert">
      <i className="bi bi-exclamation-triangle-fill me-2 fs-4"></i>
      <div>{message}</div>
    </div>
  )
}

function Search ({query, setQuery}) { 
  return (
    <input
      type='text'
      className='form-control'
      placeholder='Film ara...'
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  )
}

function App () {
  const [query, setQuery] = useState("")
  const [movies, setmovies] = useState([])
  const [selectedMovie, setSelectedmovies] = useState([])
  const [isOpen1, setIsopen1] = useState(true)
  const [isOpen2, setIsopen2] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState("")
  const [selectedmovie , setSelectedmovie] = useState(null)
  const [expandedMovies, setExpandedMovies] = useState([]) // Genişletilmiş filmlerin ID'leri

  const [currentPage, setcurrentPage ] =useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const api_key = "a82e7b7c3cfd83d07f646bf42c6c40e8"

  function nextPage () {
    setcurrentPage(currentPage + 1);
  }

  function PreviousPage () {
    setcurrentPage(currentPage - 1);
  }

  function handleSelectMovie(movie) {
    // Aynı film zaten seçili mi kontrol et
    const isAlreadySelected = selectedMovie.some(m => m.id === movie.id)
    
    if (!isAlreadySelected) {
      setSelectedmovies([...selectedMovie, movie])
      // Yeni eklenen filmi genişletilmiş duruma getir
      setExpandedMovies([...expandedMovies, movie.id])
    }
  }

  function handleRemoveMovie(movieId) {
    setSelectedmovies(selectedMovie.filter(m => m.id !== movieId))
    // Genişletilmiş listesinden de kaldır
    setExpandedMovies(expandedMovies.filter(id => id !== movieId))
  }

  function handleAddToList(movieId) {
    // Listeye ekle butonuna tıklandığında kartı küçült
    setExpandedMovies(expandedMovies.filter(id => id !== movieId))
  }
  
  useEffect (function () {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getMovies () {
      try {
        setError("")
        setLoading(true)
        
        // Query 3+ karakter ise arama yap, değilse popüler filmleri göster
        const url = query.length >= 1
          ? `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
          
          : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc`
        
        const res = await fetch(url, {signal})
        
        if(!res.ok){
          throw new Error("Bilinmeyen bir hata oluştu");
        }
        const data = await res.json();
        if(data.total_results === 0) {
          throw new Error("Film bulunamadı")
        }
        setmovies(data.results)
        setLoading(false)
      } catch (err) {
        if(err.name === "AbortError"){
          console.log("Fetch iptal edildi")
        }else{
          setError(err.message)
          setLoading(false)
        }
      }
    }
    getMovies(); 
    
    return () => {
      controller.abort();
    };
  },[query])


  return (
    <>
      <nav className='bg-primary text-white p-2'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-4'>Movie App</div>
            <div className='col-4'>
              <Search query={query} setQuery={setQuery} />
            </div>
            <div className='col-4 text-end'>
              <strong>{movies.length}</strong> kayıt bulundu.
            </div>
          </div>
        </div>
      </nav>

      

      <main className='container'>
        
        <div className='row mt-2'>
          <div className='col-md-9'>
            {loading && <Loader />}
            {!loading && error && <ErrorMessage message={error} onSelectMovie={handleSelectMovie} />}
            {!loading && !error && (
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
                      <div className='col mb-2' key={movie.id}>
                        <div 
                          className='card h-100' 
                          onClick={() => handleSelectMovie(movie)}
                          style={{ cursor: 'pointer' }}
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className='card-img-top'
                          />
                          <div className='card-body'>
                            <h6 className='card-title'>{movie.title}</h6>
                          </div>
                          <i className='bi bi-calendar-date me-1'>
                            <span>{movie.release_date}</span>
                          </i>
                          <p className='card-text small text-muted mb-'>
                            <i className='bi bi-star-fill text-warning me-4'></i>
                            {movie.vote_average}
                            <i className='bi bi-alarm text-warning me-4'></i>
                            {movie.release_date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>


          <div className='col-md-3'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h5 className='mb-0'>Seçilenler</h5>
              {selectedMovie.length > 0 && (
                <span className='badge bg-primary rounded-pill'>
                  {selectedMovie.length} film
                </span>
              )}
            </div>
            <div className='movie-list'>
              <button className='btn btn-sm btn-outline-primary mb-2' onClick={() => setIsopen2(val => !val)}>
                {isOpen2 ? (
                  <i className='bi bi-chevron-up'></i>
                  ) : (
                  <i className='bi bi-chevron-down'></i>
                )}
                </button>
                {isOpen2 && selectedMovie.length === 0 && (
                  <div className='text-center text-muted py-4'>
                    <i className='bi bi-film fs-1 d-block mb-2'></i>
                    <small>Henüz film seçilmedi</small>
                  </div>
                )}
                {isOpen2 && selectedMovie.map(movie => {
                  const isExpanded = expandedMovies.includes(movie.id)
                  
                  return isExpanded ? (
                    // Genişletilmiş (Detaylı) Kart
                    <div
                      className='card mb-3 shadow-sm border'
                      key={movie.id}
                    >
                      <div className='card-body p-2'>
                        
                        {/* Bölüm 1: Resim ve Üst Bilgiler */}
                        <div className='d-flex mb-3'>
                          <div className='flex-shrink-0' style={{ width: '100px' }}>
                            <img
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              alt={movie.title}
                              className='img-fluid rounded'
                              style={{
                                objectFit: 'cover',
                                height: '150px',
                                width: '100%'
                              }}
                            />
                          </div>
                          
                          <div className='flex-grow-1 ms-3'>
                            <h6 className='card-title fw-bold mb-2'>
                              {movie.title}
                            </h6>
                            
                            <div className='mb-2'>
                              <i className='bi bi-calendar-date me-1'></i>
                              <small className='text-muted'>{movie.release_date}</small>
                            </div>

                            <div className='mb-2'>
                              <i className='bi bi-star-fill text-warning me-1'></i>
                              <span className='fw-bold'>{movie.vote_average.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bölüm 2: Açıklama ve Alt Aksiyonlar */}
                        <div>
                          <p className='card-text small text-muted mb-3' style={{
                             display: '-webkit-box',
                             WebkitLineClamp: 5,
                             WebkitBoxOrient: 'vertical',
                             overflow: 'hidden',
                             lineHeight: '1.5'
                           }}>
                             {movie.overview || 'Açıklama bulunmuyor.'}
                           </p>

                           <div className='mb-3'>
                             <span className='badge bg-primary me-1'>Drama</span>
                             <span className='badge bg-primary'>TV Movie</span>
                           </div>

                           <div className="mb-3">
                             <StarRating maxRating={10} size={24} />
                           </div>

                           <div className='d-flex gap-2'>
                             <button 
                               className='btn btn-primary btn-sm flex-grow-1'
                               onClick={() => handleAddToList(movie.id)}
                             >
                               Listeye Ekle
                             </button>
                             <button 
                               className='btn btn-danger btn-sm flex-grow-1'
                               onClick={() => handleRemoveMovie(movie.id)}
                             >
                               Kapat
                             </button>
                           </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Küçültülmüş (Kompakt) Kart
                    <div
                      className='card mb-3 shadow-sm border-0 position-relative'
                      key={movie.id}
                      style={{ overflow: 'hidden' }}
                    >
                      <button
                        className='btn btn-danger btn-sm position-absolute top-0 end-0 m-1'
                        onClick={() => handleRemoveMovie(movie.id)}
                        style={{ zIndex: 10 }}
                      >
                        <i className='bi bi-trash'></i>
                      </button>
                      <div className='row g-0 align-items-center'>
                        <div className='col-4'>
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className='img-fluid rounded-start'
                            style={{
                              height: '120px',
                              width: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className='col-8'>
                          <div className='card-body p-2'>
                            <h6
                              className='card-title text-truncate small fw-bold mb-1'
                              title={movie.title}
                            >
                              {movie.title}
                            </h6>
                            <p className='card-text small text-muted mb-0'>
                              <i className='bi bi-star-fill text-warning me-1'></i>
                              {movie.vote_average.toFixed(1)}
                            </p>

                            <p className='card-text small text-muted mb-0'>
                              <i className='bi bi-calendar-date text-primary me-1'></i>
                              {movie.release_date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
function pagination() {
  return (
    <nav aria-label="Sayfalama">
      <ul className='pagination d-flex justify-content-between list-unstyled'>
        {/* Geri Butonu ayrı bir li içinde */}
        <li className='page-item'>
          <a className='page-link' href="#">
            Geri
          </a>
        </li>

        {/* İleri Butonu ayrı bir li içinde */}
        <li className='page-item'>
          <a className='page-link' href="#">
            İleri
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App

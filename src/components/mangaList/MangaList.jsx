import MangaCard from '../mangaCard/MangaCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMangaList } from '../../store/mangaListSlice'
import loader from '../../assets/images/loader.gif'

const MangaList = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useSelector(state => state.manga)

  useEffect(() => {
    dispatch(fetchMangaList())
  }, [])

  return (
    <div className='bg-custom-header-gray min-h-screen z-0 relative pt-8'>
      <div className='container m-auto'>
        {isLoading ? (
          <img className="m-auto pt-20" src={loader} alt="loader" />
        ) : isError ? (
          <h1 className="text-red-700 text-4xl text-center">
            Error loading manga list.
          </h1>
        ) : (
          <div className="flex flex-wrap justify-between gap-5">
            {data.results &&
              data.results.map(item => (
                <MangaCard
                  key={item.id}
                  bg={item.image}
                  name={item.ru_name}
                  year={item.issue_year}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MangaList

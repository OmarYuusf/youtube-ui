import { useEffect ,useState} from 'react';
import Layout from '../components/layout/layout'
import { useSelector } from 'react-redux'
import { AppState } from '../app/rootReducer'
import VideosResult from '../components/home/videosResult/videosResult'
import FilterResult from '../components/home/filter/filterResult'
import Loading from '../components/loading/loading'
import EmptyResult from '../components/emptyResult/emptyResult'
import MobileFilterResult from '../components/home/filter/mobileFilterResult'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { fetchYoutubeVideos } from '../features/search/searchSlice';

const Home = () => {
  const { searchResult, searchResultIsLoading } = useSelector(
    (state: AppState) => state.search,
  )
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const dispatch: AppDispatch = useDispatch()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    // handle if search Query has a value
    let searchQuery = searchParams.get('query')

    if (searchQuery && !isFetched) {
      setIsFetched(true)
      console.count('counter : ')
      dispatch(fetchYoutubeVideos(searchQuery))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleResult = () => {
    return searchResult &&
      searchResult?.items?.length > 0 &&
      !searchResultIsLoading ? (
      <>
        <MobileFilterResult />
        <FilterResult pageInfo={searchResult.pageInfo} />
        <VideosResult items={searchResult.items} />
      </>
    ) : null
  }

  const handleEmptyResult = () => {
    return !searchResultIsLoading &&
      searchResult &&
      searchResult?.items?.length === 0 ? (
      <EmptyResult />
    ) : null
  }

  const handleLoadingResult = () => {
    return searchResultIsLoading ? <Loading /> : null
  }

  return (
    <Layout>
      <div className="container-home">
        {handleResult()}
        {handleLoadingResult()}
        {handleEmptyResult()}
      </div>
    </Layout>
  )
}

export default Home

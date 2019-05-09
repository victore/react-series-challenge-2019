export const QUERY_TRENDING = 'QUERY_TRENDING';
export const QUERY_TRENDING_SUCCESS = 'QUERY_TRENDING_SUCCESS';
export const QUERY_TRENDING_ERROR = 'QUERY_TRENDING_ERROR';
export const LOAD_FAVORITES_R = 'LOAD_FAVORITES_R'

export function queryTrending(param) {
  return {
    type: QUERY_TRENDING,
    param
  };
}

export function queryTrendingSuccess(data) {
  return {
    type: QUERY_TRENDING_SUCCESS,
    data
  };
}

export function queryTrendingError(error) {
  return {
    type: QUERY_TRENDING_ERROR,
    error
  };
}

export default function loadFavoritesR(data) {
  return {
    type: LOAD_FAVORITES_R,
    data
  }
}
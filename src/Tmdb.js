const API_KEY = '4ced03bab997ff2b27c776c1a8fc77fb'
const API_BASE = 'https://api.themoviedb.org/3'

/*
* Originais da Netflix
* Recomendados
* Em alta
* Ação 
* Comédia
* Terror
* Romance
* Documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie/?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie/?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie/?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie/?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie/?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getBannerInfo: async (id, type) => {
        let info = {}

        if(id) {
            switch(type){

                case 'movie':
                    info = await basicFetch(`/movie/${id}?language=pt-BR&api_key=${API_KEY}`)
                break

                case 'tv':
                    info = await basicFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`)
                break

                default:
                    info = null
                break
            }
        }

        return info
    }
}
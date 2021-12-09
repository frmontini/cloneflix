import axios from 'axios'

const API_BASE = 'https://cafecomsite.com.br/vercel/cloneflix/?params='

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
    endpoint = encodeURIComponent(endpoint)
    const json = await axios.get(`${API_BASE}${endpoint}`)
    return JSON.parse(json)
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie/?with_genres=28&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie/?with_genres=35&language=pt-BR`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie/?with_genres=27&language=pt-BR`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie/?with_genres=10749&language=pt-BR`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie/?with_genres=99&language=pt-BR`)
            },
        ]
    },
    getBannerInfo: async (id, type) => {
        let info = {}

        if(id) {
            switch(type){

                case 'movie':
                    info = await basicFetch(`/movie/${id}?language=pt-BR`)
                break

                case 'tv':
                    info = await basicFetch(`/tv/${id}?language=pt-BR`)
                break

                default:
                    info = null
                break
            }
        }

        return info
    }
}
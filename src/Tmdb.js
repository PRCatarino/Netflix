

const API_KEY = '647be16dca52ab02d74ec8bac77df131';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFeth = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    // Duvida
    const json = await req.json();
    return json; 
}

export default {
    getHomeList: async() =>{
        return [
            { 
                // Duvida nas {}
                slug: 'originals',
                title: 'Originais Do Netflix',
                items: await basicFeth(`/discover/tv?with_network=213languge=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trendig',
                title: 'Recomendados para Você',
                items: await basicFeth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
        
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFeth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFeth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
        
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFeth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
        
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFeth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

            },  
        
            {
                slug: 'romace',
                title: 'Romance',
                items: await basicFeth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFeth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

            },
        ];
    },
    getMovieInfo: async(movieId, type)=>{
        let info = {};
        
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFeth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFeth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;  
                default:
                    info = null;
            }
        }

        return info
   }
}
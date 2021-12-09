import React from 'react'
import './Banner.css'

export default ({item}) => {

    let first_air_date = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview
    if(description.length > 200)
        description = description.substring(0, 200) + '...'

    return (
        <section className="banner" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="banner-vertical">
                <div className="banner-horizontal">
                    <div className="banner-name">{item.original_name}</div>
                    <div className="banner-info">
                        <div className="banner-points">{item.vote_average} pontos</div>
                        <div className="banner-year">{first_air_date.getFullYear()}</div>
                        <div className="banner-seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>
                    <div className="banner-description">{description}</div>
                    <div className="banner-buttons">
                        <a href="/" className="banner-watch-button">▶ Assistir</a>
                        <a href="/" className="banner-list-button">+ Minha Lista</a>
                    </div>
                    <div className="banner-genres">
                        <strong>Gêneros: {genres.join(', ')}</strong>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'

const News = () => {
    const latestNews = [
        {
            title: 'Título da Última Notícia 1',
            date: '15 de fevereiro de 2024',
            description: 'Breve descrição da notícia 1. Algumas informações interessantes.',
            imageUrl: 'http://placeholder.co/300',
            fullArticleUrl: '#',
        },
        {
            title: 'Título da Última Notícia 2',
            date: '14 de fevereiro de 2024',
            description: 'Breve descrição da notícia 2. Algumas informações interessantes.',
            imageUrl: 'http://placeholder.co/300',
            fullArticleUrl: '#',
        },
    ]

    const breakingNewsLinks = [
        { title: 'Link do Plantão 1', url: '#' },
        { title: 'Link do Plantão 2', url: '#' },
    ]

    return (
        <div className="News">
            <div className="News__latest">
                <div className="News__latest-title">Últimas Notícias</div>
                <div className="News__latest-list">
                    {latestNews.map((news, index) => (
                        <div key={index} className="News__latest-card">
                            <div className="News__latest-card-left">
                                <div className="News__latest-card-title">{news.title}</div>
                                <div className="News__latest-card-date">{news.date}</div>
                                <div className="News__latest-card-description">{news.description}</div>
                                <a href={news.fullArticleUrl} className="News__latest-card-button">
                                    Conferir a Notícia Completa
                                </a>
                            </div>
                            <div className="News__latest-card-right">
                                <img src={news.imageUrl} alt={`Notícia ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="News__breaking">
                <div className="News__breaking-title">Plantão</div>
                <div className="News__breaking-links">
                    {breakingNewsLinks.map((link, index) => (
                        <a key={index} href={link.url} className="News__breaking-link">
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News

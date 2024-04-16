import React, { useState } from 'react'

const Highlight = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const images = [
        'http://placeholder.co/400',
        'http://placeholder.co/400',
        'http://placeholder.co/400',
    ]

    const imageTexts = [
        'Texto da imagem 1',
        'Texto da imagem 2',
        'Texto da imagem 3',
    ];

    const handleImageClick = (index) => {
        setSelectedImage(index)
    }

    const handleSubscribe = () => {
        console.log(`Nome: ${name}, E-mail: ${email}`)
    }

    return (
        <div className="Highlight">
            <div className="Highlight__left">
                <div className="Highlight__image-card">
                    <img src={images[selectedImage]} alt={`Highlight ${selectedImage + 1}`} />
                    <div className="Highlight__image-text">{imageTexts[selectedImage]}</div>
                </div>
                <div className="Highlight__thumbnail-cards">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`Highlight__thumbnail-card ${selectedImage === index ? 'selected' : ''}`}
                            onClick={() => handleImageClick(index)}
                        >
                            <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="Highlight__right">
                <div className="Highlight__newsletter-card">
                    <p>Receba nossas novidades:</p>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleSubscribe}>Enviar</button>
                </div>
                <div className="Highlight__ads">
                </div>
            </div>
        </div>
    )
}

export default Highlight

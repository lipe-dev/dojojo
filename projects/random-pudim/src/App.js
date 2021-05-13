import React from 'react'

const imagensDePudim = [
    'https://catracalivre.com.br/wp-content/uploads/2020/12/pudim-leite-em-po.jpg',
    'https://cdn.guiadacozinha.com.br/wp-content/uploads/2019/10/pudim-classico-33311.jpg'
]

function App() {
    const [indexAtual, setIndex] = React.useState(0)

    const mudarImagem = () => {
        if (indexAtual < (imagensDePudim.length-1)) {
            setIndex(indexAtual + 1)
        } else {
            setIndex(0)
        }
    }

    return (
        <img data-testid={'pudim'} src={imagensDePudim[indexAtual]} onClick={mudarImagem} alt="pudim"/>
    );
}

export default App;

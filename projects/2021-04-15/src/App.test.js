import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const imagensDePudim = [
    'https://catracalivre.com.br/wp-content/uploads/2020/12/pudim-leite-em-po.jpg',
    'https://cdn.guiadacozinha.com.br/wp-content/uploads/2019/10/pudim-classico-33311.jpg'
    ]


describe('O pudim', () => {
    it('se irá abrir a página', () => {
        render(<App></App>)
    })
    it('se renderiza imagem', () => {
        render(<App></App>)
        screen.getByTestId("pudim")
        }
    )
    it('é mesmo uma imagem de pudim dentre as que tenho no meu arranjo', ()=>{
        render(<App></App>)

        const imagem = screen.getByTestId('pudim')

        expect(imagensDePudim.includes(imagem.src)).toBe(true)
    })
    it('se ao clicar chama a próxima imagem do arranjo', () => {
        render(<App></App>)
        const imagem = screen.getByTestId("pudim")
        fireEvent.click(imagem)
        expect(imagem.src).toBe(imagensDePudim[1])
    })

    it('nao estoura alem do limite de imagens', () => {
        render(<App />)

        const imagem = screen.getByTestId('pudim')

        for (let i = 0; i < imagensDePudim.length * 2; i++) {
            expect(imagem.src).toBe(imagensDePudim[(i % imagensDePudim.length)])
            fireEvent.click(imagem)

            expect(imagensDePudim.includes(imagem.src)).toBe(true)
        }
    })
})
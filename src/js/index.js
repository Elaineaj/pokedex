/*
quando clicar no pokémon da listagem temos que esconder o cartao do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1- listagem
2-cartão pokémon

precisamos criar duas variáveis no JS pra trabalhar com os elementos na tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
- remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado.
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector ('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

       const idPokemonSelecionado = pokemon.attributes.id.value

      const cartaoPokemonParaAbrir = document.getElementById('cartao-'+ idPokemonSelecionado)
      cartaoPokemonParaAbrir.classList.add('aberto')

      const pokemonAtivoNaListagem = document.querySelector('.ativo') //primeiro coloca com. pra puxar a classe
      pokemonAtivoNaListagem.classList.remove('ativo') //segundo coloca sem ponto

      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')
    })
}) 


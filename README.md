# Monomoji

A web app that creates card decks for games that are similar to "Dobble" or "Spot it!".

## How does it work?

The code in [`src/generate_cards.js`](https://github.com/StoopidSam/monomoji/blob/main/src/generate_cards.js) can be confusing at first, but once a few key terms have been defined, the codebase becomes more accessible.

I would recommend watching Matt Parker's video on ["How does Dobble (Spot It) work?"](https://youtu.be/VTDKqW_GLkw?end=). This will de-mystify the logic behind Dobble, Spot it!, and now, Monomoji.

### Key terms

#### Points

Each card in Monomoji is represented by a "point". Every point lies on a plane called a "projective plane".

#### Projective plane

The projective plane is effectively a grid. Its size lengths are defined by its "order".

#### Order

The order ( $n$ ) is a number which defines many parameters of the projective plane. The order...

- Must be a prime number
- Defines the size of the grid
- Defines the maximum amount of points (cards): $n^2 + n + 1$
- Defines the maximum amount of "lines" (symbols):  $n^2 + n + 1$
- Defines the amount of "lines" (symbols) per card: $n + 1$
- Defines how many times a "line" (symbol) will appear throughout the projective plane: $n + 1$

#### Lines
A line represents a symbol. Every time a line passes through a point, the point (card) gains that symbol.
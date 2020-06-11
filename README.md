# PokemonDeck

This is a simple but complete app that access [Pokemon Api](https://docs.pokemontcg.io/#api_v1cards_list) made in Angular.

## Development server

Run `npm install` then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test --code-coverage` to execute the unit tests.

The Statements coverage now is: 87.23%

It is easy to increase this number by using the same techniques already applied
to this project.

## Architecture details

It has the following Angular modules:

- **About**
- **core**: Where all things shared for all modules should go to. Now it is empty.
- **decks**: This is a feature module. Check Angular docs for more details.
- **shared**: Only imported by feature modules, where things like Material imports and also my Angular Components are kept.

About the **package** structure I decided to follow "by Feature Package" strategy. So you will
not see directories like **services** where all Angular services go or like **model** where all models go.

I also like to mix "by Feature Package" + Type Package so we could have something like:

- decks/detail/service
- card/detail/service

But I did not follow this approach here.

I tried to avoid repeating feature's name when creating components like:

- **decks/list/list.component** instead of **decks/list-deck/list-deck.component**

I like to follow this approach mainly when the component will not be exported to another module.

In case of any question reach me out!

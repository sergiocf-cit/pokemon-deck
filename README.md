# PokemonDeck

This is a simple but complete app that access [Pokemon](https://docs.pokemontcg.io/#api_v1cards_list) api made in Angular

## Development server

Run `npm install` then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test --code-coverage` to execute the unit tests.

The Statements coverage now is: 87.23%

It is easy to increase this number only using same techniques already applied
in this project.

## Architecture details

It has the following Angular modules:

- **About**
- **core**: where should go all things shared for all modules. Now it is empty.
- **decks**: That is a feature module. Check Angular docs for more details.
- **shared**: Only imported by feature modules, here goes things like Material imports and also Angular Components that will be used across all app.

About the **package** structure I decided to follow by Feature Package. So you will
not see directories like **services** where go all Angular services or like **model** where go all models.

I also like to mix Feature Package + Type Package so we could have something like:

- decks/detail/service
- card/detail/service

But I did not follow this approuch here.

I tried to not repete my self when creating components name so we have:

- **decks/list/list.component** instead of **decks/list/list-deck.component**

I like to follow this approuch mainly when the component will not be exported to another module.

In case of any question reach me out!

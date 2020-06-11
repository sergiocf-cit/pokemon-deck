import { Injectable } from "@angular/core";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Card } from "../card/card.model";
import { SuperType } from "../card/super-type.enum";

@Injectable({
  providedIn: "root",
})
export class DeckService {
  constructor() {}

  public findAll(): Observable<Card[]> {
    return from(PokemonTCG.Card.all()).pipe(map(this.mapToCard));
  }

  public findByName(name: string): Observable<Card[]> {
    const params: PokemonTCG.IQuery[] = [{ name: "name", value: name }];

    return from(PokemonTCG.Card.where(params)).pipe(map(this.mapToCard));
  }

  private mapToCard(pokemonCards: PokemonTCG.Card[]): Card[] {
    return pokemonCards.map((v) => {
      return {
        id: v.id,
        name: v.name,
        imageUrl: v.imageUrl,
        amount: 1,
        supertype: SuperType[v.supertype],
        types: v.types,
      };
    });
  }
}

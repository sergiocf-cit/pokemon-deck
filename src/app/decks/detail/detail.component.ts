import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Deck } from "../shared/deck/deck.model";
import { DeckDatabaseService } from "../shared/deck/deck-database.service";
import { SuperType } from "../shared/card/super-type.enum";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  public deck: Deck;

  public numberOfPokemons = 0;
  public numberOfTrainers = 0;
  public numberOfEnergys = 0;
  public numberOfTypes = 0;

  constructor(
    private route: ActivatedRoute,
    private deckDatabaseService: DeckDatabaseService
  ) {}

  public ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.deck = this.deckDatabaseService.findByName(params.name);

      this.numberOfPokemons = this.summarizeSuperType(SuperType.Pokémon);
      this.numberOfTrainers = this.summarizeSuperType(SuperType.Trainer);
      this.numberOfEnergys = this.summarizeSuperType(SuperType.Energy);
      this.numberOfTypes = this.getUniqueTypes();
    });
  }

  private summarizeSuperType(superType: SuperType): number {
    return this.deck.cards.filter((v) => v.supertype === superType).length;
  }

  private getUniqueTypes(): number {
    return [...new Set(this.deck.cards.flatMap((v) => v.types))].length;
  }
}

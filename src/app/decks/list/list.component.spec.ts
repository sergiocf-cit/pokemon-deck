import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListComponent } from "./list.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { DeckDatabaseService } from "../shared/deck/deck-database.service";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let deckDatabaseService: DeckDatabaseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    deckDatabaseService = TestBed.get(DeckDatabaseService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should remove deck", () => {
    deckDatabaseService.add({ name: "a", cards: [] });

    component.ngOnInit();

    expect(component.decks.length).toEqual(1);

    component.deleteItem({ name: "a", cards: [] });

    expect(component.decks.length).toEqual(0);
  });

  it("should save with success", () => {
    const routerSpy = spyOn(component["router"], "navigate");

    component.goToLink();

    expect(routerSpy).toHaveBeenCalledWith(["decks/insert"]);
  });
});

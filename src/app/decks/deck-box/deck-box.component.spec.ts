import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DeckBoxComponent } from "./deck-box.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

describe("DeckBoxComponent", () => {
  let component: DeckBoxComponent;
  let fixture: ComponentFixture<DeckBoxComponent>;

  const deck = { name: "Deck Test", cards: [] };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DeckBoxComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckBoxComponent);
    component = fixture.componentInstance;
    component.deck = deck;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call route", () => {
    const routerSpy = spyOn(component["router"], "navigate");
    component.detail();

    expect(routerSpy).toHaveBeenCalledWith(
      ["decks/detail"],
      Object({ queryParams: Object({ name: deck.name }) })
    );
  });
});

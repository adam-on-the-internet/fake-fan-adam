import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MuppetFormComponent} from "./muppet-form.component";
import {FormsModule} from "@angular/forms";
import {CardComponent} from "../simple/card/card.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {StringInputComponent} from "../simple/form/string-input/string-input.component";
import {NumberInputComponent} from "../simple/form/number-input/number-input.component";
import {StringListInputComponent} from "../simple/form/string-list-input/string-list-input.component";
import {OnOffSwitchComponent} from "../simple/form/on-off-switch/on-off-switch.component";
import {SelectInputComponent} from "../select-input/select-input.component";

describe("MuppetFormComponent", () => {
  let component: MuppetFormComponent;
  let fixture: ComponentFixture<MuppetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MuppetFormComponent, CardComponent, BodyComponent, LoadingComponent,
        StringInputComponent, NumberInputComponent, StringListInputComponent, OnOffSwitchComponent,
        SelectInputComponent,
      ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

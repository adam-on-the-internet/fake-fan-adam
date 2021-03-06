import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MuppetDisplayComponent} from "./muppet-display.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {StringListDisplayComponent} from "../simple/string-list-display/string-list-display.component";
import {MuppetInfoComponent} from "../muppet-info/muppet-info.component";

describe("MuppetDisplayComponent", () => {
  let component: MuppetDisplayComponent;
  let fixture: ComponentFixture<MuppetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuppetDisplayComponent, LoadingComponent, StringListDisplayComponent, MuppetInfoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

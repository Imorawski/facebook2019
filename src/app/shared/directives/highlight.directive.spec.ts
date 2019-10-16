import { HighlightDirective } from './highlight.directive';
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fake',
  template: `
    <div appHighLight> </div>
  `
}

class FakeComponent {}

describe('HighlightDirective', () => {
  let fixture = null;
  let elementWithDirective = null;
  let xxx = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations [
          FakeComponent,
          HighlightDirective, 
        ]
      }).compileComponents();
    fixture = TestBed.createComponent( FakeComponent );
    $elementWithDirective = elementWithDirective.nativeElement;
  });
  
  it('should create an instance', () => {
    const directive = new HighlightDirective();
    expect(directive).toBeTruthy();
  });
});

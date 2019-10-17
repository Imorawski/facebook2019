import { HighlightDirective } from './highlight.directive';
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';



@Component({

    selector: 'app-fake',
    template: `
        <div appHighlight></div>
    `

})

class FakeComponent {}



describe('HighlightDirective', () => {

    let fixture = null;
    let elementWithDirective = null;
    let $elementWithDirective = null;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [
                FakeComponent,
                HighlightDirective
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(FakeComponent);
        elementWithDirective = fixture.debugElement.query(
            By.directive(HighlightDirective)
        );
        $elementWithDirective = elementWithDirective.nativeElement;
    });



    it('should add class after mouseover', () => {
        $elementWithDirective.classList.remove('border-primary');
        elementWithDirective.triggerEventHandler('mouseover');
        fixture.detectChanges();
        expect(
            $elementWithDirective.classList.contains('border-primary')
        ).toBeTruthy();

    });

});
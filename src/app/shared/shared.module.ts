import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
    declarations: [
        HighlightDirective,
        MyDatePipe,
        LoadingComponent,
        ErrorMessageComponent,
    ],
    exports: [
        HighlightDirective,
        MyDatePipe,
        LoadingComponent,
        ErrorMessageComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }

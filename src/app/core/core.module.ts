import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PostsModule } from '../posts/posts.module';
import { SharedModule } from '../shared/shared.module';
import { CacheInterceptor } from '../shared/interceptors/cache.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomePageComponent,
        NotFoundPageComponent
    ],
    imports: [
        BrowserModule,
        CoreRoutingModule,
        PostsModule,
        SharedModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CacheInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class CoreModule { }

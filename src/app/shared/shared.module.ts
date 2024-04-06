import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetsModule} from './widgets/widgets.module';


@NgModule({
  declarations: [],
  imports: [
    WidgetsModule,
    BrowserModule 
  ],
  exports: [
    WidgetsModule
  ],
  providers: [],
})
export class SharedModule { }

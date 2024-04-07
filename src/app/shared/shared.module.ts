import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetsModule} from './widgets/widgets.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    WidgetsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  exports: [
    WidgetsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
})
export class SharedModule { }

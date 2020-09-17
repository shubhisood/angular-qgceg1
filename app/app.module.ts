import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { KanbanAllModule } from '@syncfusion/ej2-angular-kanban';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ CommonModule, HttpModule, KanbanAllModule, DialogModule,   CheckBoxAllModule, DropDownListAllModule, NumericTextBoxAllModule, TextBoxAllModule, ReactiveFormsModule, FormsModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }

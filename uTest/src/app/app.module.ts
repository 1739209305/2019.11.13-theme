import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {MatExpansionModule, MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatRippleModule} from '@angular/material';
import {MatDividerModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatTreeModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SidenavLeftComponent } from './sidenav-left/sidenav-left.component';
import { SidenavRightComponent } from './sidenav-right/sidenav-right.component';
import { ContentComponent } from './content/content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoComponent } from './demo/demo.component';
import { RemoveDemoComponent } from './remove-demo/remove-demo.component';
import { PdfmodeComponent } from './pdfmode/pdfmode.component';

/*import {
  DialogAddressFormComponent,
  DialogFruitComponent,
  DialogNeptuneComponent,
  DialogNeptuneIFrameComponent,
  DialogWelcomeComponent,
} from './dialog/dialog.component';*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavLeftComponent,
    SidenavRightComponent,
    ContentComponent,
    DemoComponent,
    RemoveDemoComponent,
    PdfmodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule,
    MatTreeModule,
    MatProgressBarModule,
    MatTableModule,
    MatTooltipModule,
    FlexLayoutModule


    



  ],
  entryComponents:  [
 /* DialogAddressFormComponent,
  DialogFruitComponent,
  DialogNeptuneComponent,
  DialogNeptuneIFrameComponent,
  DialogWelcomeComponent,*/
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

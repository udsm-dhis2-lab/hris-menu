import { NgModule } from '@angular/core';
import { HrisMenuComponent } from './containers/hris-menu/hris-menu.component';
import { HrisMenuService } from './services/hris-menu.service';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { AppListComponent } from './components/app-list/app-list.component';
@NgModule({
  declarations: [
    HrisMenuComponent,
    UserProfileComponent,
    ClickOutsideDirective,
    AppListComponent
  ],
  imports: [CommonModule, MatIconModule, MatRippleModule, MatCardModule],
  exports: [HrisMenuComponent],
  providers: [HrisMenuService]
})
export class HrisMenuModule {}

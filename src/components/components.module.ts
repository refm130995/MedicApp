import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar';
import { MenuComponent } from './menu/menu';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ToolbarComponent,
    MenuComponent],
	imports: [IonicModule],
	exports: [ToolbarComponent,
    MenuComponent]
})
export class ComponentsModule {}

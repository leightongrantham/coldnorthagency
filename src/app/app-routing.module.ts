import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: 'home', component: AppComponent
	},
	{
		path: 'music', component: AppComponent, children: [
			{
				path: 'joey-stella', component: AppComponent
			}
		]
	},
	{
		path: 'about', component: AppComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

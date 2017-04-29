import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { Home1Component } from "./home1/home1.component";


export const APP_ROUTES =[
{
    path: '',
    component: HomeComponent
},
{
    //path: 'directory/:ninja',
    path: 'directory',
    component:DirectoryComponent
},
{
    path: 'home1',
    component:Home1Component
}
]

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NinjaChartConfig, WordChartConfig } from './types';
import { ChartsModule } from 'ng2-charts/ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [{provide:NinjaChartConfig,useValue:{
                title:'Names for pet turtles after 1984',
                labels:['Leonardo','Raphael','Michelangelo','Others','Donatello'],
                data:[245,245,245,20,245]}
              },
              {provide:WordChartConfig,useValue:{
                title:'Moving a picture in Microsoft Word',
                labels:['It does what you want','You mess up the whole document'],
                data:[20,980]
              }
            }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component , Inject} from '@angular/core';
import { NinjaChartConfig, WordChartConfig } from './types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(@Inject(NinjaChartConfig) public ninjaChart:any,
            @Inject(WordChartConfig) public wordChart:any){}
}

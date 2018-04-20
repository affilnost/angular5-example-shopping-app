import {Component, Inject} from '@angular/core';
import {ProgressBarService} from '../progress-bar.service';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title: string;
  currentDate: number = Date.now();
  appConfig: any;
  menuItems: any[];
  progressBarMode: string;

  constructor(@Inject('state') private state, @Inject(APP_CONFIG) appConfig,
              private progressBarService: ProgressBarService,
              private translateService: TranslateService) {

    this.loadTitle();
    this.appConfig = appConfig;
    this.loadMenus();
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });
  }

  private loadTitle(): void {
    this.state.title.subscribe((res: string) => {
      this.title = res;
    });
  }

  changeLanguage(language: string): void {
    this.translateService.use(language).subscribe(() => {
      this.loadMenus();
    });
  }

  private loadMenus(): void {
    this.translateService.get(['Pages.Dashboard.Title', 'Pages.Shopping.Title'], {}).subscribe((texts: any) => {
      this.menuItems = [
        {link: '/', name: texts['Pages.Dashboard.Title']},
        {link: '/' + AppConfig.routes.shopping, name: texts['Pages.Shopping.Title']}
      ];
    });
  }

}

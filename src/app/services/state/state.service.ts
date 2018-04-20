import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {filter, map, flatMap, merge} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {of} from 'rxjs/observable/of';


@Injectable()
export class StateService {

  title: Observable<string>;

  constructor(private router: Router, private translate: TranslateService) {
    const routerEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd));
    const langChangeEvents = translate.onLangChange;

    this.title = routerEvents.pipe(merge(langChangeEvents))
      .pipe(
        map(() => {
          return this.getDeepestTitle(router.routerState.snapshot.root);
        })
      ).pipe(
        flatMap(title => {
          return title ? translate.get('Pages.' + title + '.Title') : of([]) ;

        })
      );
  }

  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

}

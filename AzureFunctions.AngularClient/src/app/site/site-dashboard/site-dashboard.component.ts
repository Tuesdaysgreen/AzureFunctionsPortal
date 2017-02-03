import { SiteSummaryComponent } from './../site-summary/site-summary.component';
import {Component, OnInit, EventEmitter, Input, ViewChild} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs/Rx';
// import {TabsComponent} from '../../tabs/tabs.component';
import {TabComponent} from '../../tab/tab.component';
import {SiteTabNames} from '../../shared/models/constants';
import {CacheService} from '../../shared/services/cache.service';
import {GlobalStateService} from '../../shared/services/global-state.service';
import {TreeViewInfo} from '../../tree-view/models/tree-view-info';
import {DashboardType} from '../../tree-view/models/dashboard-type';
import {Descriptor, SiteDescriptor} from '../../shared/resourceDescriptors';
import {ArmObj} from '../../shared/models/arm/arm-obj';
import {Site} from '../../shared/models/arm/site';

@Component({
  selector: 'site-dashboard',
  template: `
  <h2>Hello {{name}}</h2>
  <my-tabs [tabDatas]="tabDatas"></my-tabs>
`
})
export class SiteDashboardComponent {
  // The list of components to create tabs from
  // types = [SiteSummaryComponent];

  tabDatas = [];


    constructor(){
      let numStream = new ReplaySubject<number>(1);
      this.tabDatas = [{
        component: SiteSummaryComponent,
        inputs: {
          showNumStream: numStream
        }
      }]

      numStream.next(90);

    }

  // tabDatas = [{
  //   component : SiteSummaryComponent,
  //   inputs : {
  //     foo : "bar"
  //   }
  // }]
}

// @Component({
//     selector: 'site-dashboard',
//     templateUrl: './site-dashboard.component.html',
//     styleUrls: ['./site-dashboard.component.scss'],
//     inputs: ['viewInfoInput']
// })

// export class SiteDashboardComponent {
//     public selectedTabTitle: string = SiteTabNames.summary;
//     public site : ArmObj<Site>;
//     private _viewInfo : Subject<TreeViewInfo>;
//     @ViewChild(TabsComponent) tabs : TabsComponent;

//     public TabNames = SiteTabNames;

//     public activeTab = "";

//     constructor(
//         private _cacheService : CacheService,
//         private _globalStateService : GlobalStateService
//      ) {
//         this._viewInfo = new Subject<TreeViewInfo>();
//         this._viewInfo
//             .distinctUntilChanged()
//             .switchMap(viewInfo =>{
//                 this._globalStateService.setBusyState();
//                 return this._cacheService.getArmResource(viewInfo.resourceId);
//             })
//             .subscribe((site : ArmObj<Site>) =>{
//                 this._globalStateService.clearBusyState();
//                 this.site = site;
//             })
//     }

//     set viewInfoInput(viewInfo : TreeViewInfo){
//         this._viewInfo.next(viewInfo);
//     }

//     onTabSelected(selectedTab: TabComponent) {
//         this.selectedTabTitle = selectedTab.title;
//     }

//     onTabClosed(closedTab: TabComponent){
//         // For now only support a single dynamic tab
//         this.activeTab = "";
//     }

//     openTab(component : string){
//         this.activeTab = component;
        
//         setTimeout(() =>{
//             let tabs = this.tabs.tabs.toArray();
//             this.tabs.selectTab(tabs[tabs.length-1]);
//         }, 100);
//     }
// }
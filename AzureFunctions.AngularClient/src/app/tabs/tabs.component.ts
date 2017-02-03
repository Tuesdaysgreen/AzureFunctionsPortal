import { Component, ContentChildren, QueryList, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { PortalService } from '../shared/services/portal.service';

// Use dcl-wrapper component
@Component({
  selector: 'my-tabs',
  template: `
  <h2>Tabs</h2>
  <div *ngFor="let tabData of tabDatas">
    <dynamic-component [componentData]="tabData"></dynamic-component>
  </div>`
})
export class TabsComponent {
  @Input() tabDatas;
}

// @Component({
//     selector: 'tabs',
//     styleUrls: ['./tabs.component.css'],
//     templateUrl: './tabs.component.html'
// })
// export class TabsComponent implements AfterContentInit {

//     @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
//     @Output() tabSelected = new EventEmitter<TabComponent>();
//     @Output() tabClosed = new EventEmitter<TabComponent>();

//     constructor(private _portalService: PortalService) {
//     }

//     ngAfterContentInit() {
//         let activeTabs = this.tabs.filter((tab) => tab.active);

//         if (activeTabs.length === 0) {
//             this.selectTabHelper(this.tabs.first, false);
//         }
//     }

//     selectTab(tab: TabComponent) {
//         this.selectTabHelper(tab, true);
//     }

//     closeTab(tab: TabComponent) {
//         this.tabClosed.emit(tab);
//         this.selectTabHelper(this.tabs.toArray()[0], false);
//     }

//     selectTabHelper(tab: TabComponent, logClick: boolean) {
//         if (logClick) {
//             this._portalService.logAction("tabs", "click develop", null);
//         }

//         this.tabs.toArray().forEach(tab => tab.active = false);
//         tab.active = true;
//         this.tabSelected.emit(tab);

//     }
// }
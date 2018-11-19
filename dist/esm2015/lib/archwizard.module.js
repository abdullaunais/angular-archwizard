/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WizardComponent } from './components/wizard.component';
import { WizardNavigationBarComponent } from './components/wizard-navigation-bar.component';
import { WizardStepComponent } from './components/wizard-step.component';
import { WizardCompletionStepComponent } from './components/wizard-completion-step.component';
import { NextStepDirective } from './directives/next-step.directive';
import { PreviousStepDirective } from './directives/previous-step.directive';
import { OptionalStepDirective } from './directives/optional-step.directive';
import { GoToStepDirective } from './directives/go-to-step.directive';
import { WizardStepSymbolDirective } from './directives/wizard-step-symbol.directive';
import { WizardStepTitleDirective } from './directives/wizard-step-title.directive';
import { EnableBackLinksDirective } from './directives/enable-back-links.directive';
import { WizardStepDirective } from './directives/wizard-step.directive';
import { WizardCompletionStepDirective } from './directives/wizard-completion-step.directive';
import { SelectedStepDirective } from './directives/selected-step.directive';
import { ResetWizardDirective } from './directives/reset-wizard.directive';
/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
export class ArchwizardModule {
    /* istanbul ignore next */
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ArchwizardModule, providers: [] };
    }
}
ArchwizardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    WizardComponent,
                    WizardStepComponent,
                    WizardNavigationBarComponent,
                    WizardCompletionStepComponent,
                    GoToStepDirective,
                    NextStepDirective,
                    PreviousStepDirective,
                    OptionalStepDirective,
                    WizardStepSymbolDirective,
                    WizardStepTitleDirective,
                    EnableBackLinksDirective,
                    WizardStepDirective,
                    WizardCompletionStepDirective,
                    SelectedStepDirective,
                    ResetWizardDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaHdpemFyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvYXJjaHdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7Ozs7OztBQThDekUsTUFBTTs7Ozs7SUFFSixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ3JELENBQUM7OztZQTNDRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQiw0QkFBNEI7b0JBQzVCLDZCQUE2QjtvQkFDN0IsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQix5QkFBeUI7b0JBQ3pCLHdCQUF3QjtvQkFDeEIsd0JBQXdCO29CQUN4QixtQkFBbUI7b0JBQ25CLDZCQUE2QjtvQkFDN0IscUJBQXFCO29CQUNyQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsNEJBQTRCO29CQUM1Qiw2QkFBNkI7b0JBQzdCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIseUJBQXlCO29CQUN6Qix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiw2QkFBNkI7b0JBQzdCLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge05leHRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmV4dC1zdGVwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7UHJldmlvdXNTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcHJldmlvdXMtc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge09wdGlvbmFsU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL29wdGlvbmFsLXN0ZXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtHb1RvU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2dvLXRvLXN0ZXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtFbmFibGVCYWNrTGlua3NEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9lbmFibGUtYmFjay1saW5rcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1NlbGVjdGVkU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdGVkLXN0ZXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtSZXNldFdpemFyZERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtb2R1bGUgZGVmaW5pbmcgYWxsIHRoZSBjb250ZW50IGluc2lkZSBgYW5ndWxhci1hcmNod2l6YXJkYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBXaXphcmRDb21wb25lbnQsXHJcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxyXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcclxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxyXG4gICAgR29Ub1N0ZXBEaXJlY3RpdmUsXHJcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcclxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcclxuICAgIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXHJcbiAgICBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxyXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXHJcbiAgICBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUsXHJcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBXaXphcmRDb21wb25lbnQsXHJcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxyXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcclxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxyXG4gICAgR29Ub1N0ZXBEaXJlY3RpdmUsXHJcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcclxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcclxuICAgIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXHJcbiAgICBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxyXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXHJcbiAgICBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUsXHJcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFyY2h3aXphcmRNb2R1bGUge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge25nTW9kdWxlOiBBcmNod2l6YXJkTW9kdWxlLCBwcm92aWRlcnM6IFtdfTtcclxuICB9XHJcbn1cclxuIl19
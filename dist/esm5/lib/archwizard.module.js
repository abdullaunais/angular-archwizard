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
var ArchwizardModule = /** @class */ (function () {
    /**
     * The module defining all the content inside `angular-archwizard`
     *
     * @author Marc Arndt
     */
    function ArchwizardModule() {
    }
    /* istanbul ignore next */
    /* istanbul ignore next */
    /**
     * @return {?}
     */
    ArchwizardModule.forRoot = /* istanbul ignore next */
    /**
     * @return {?}
     */
    function () {
        return { ngModule: ArchwizardModule, providers: [] };
    };
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
    return ArchwizardModule;
}());
export { ArchwizardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaHdpemFyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvYXJjaHdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFNUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7Ozs7OztBQU96RTtJQUxBOzs7O09BSUc7SUFDSDtJQTRDQSxDQUFDO0lBSkMsMEJBQTBCOzs7OztJQUNuQix3QkFBTzs7OztJQUFkO1FBQ0UsT0FBTyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBM0NGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLDRCQUE0Qjt3QkFDNUIsNkJBQTZCO3dCQUM3QixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsNkJBQTZCO3dCQUM3QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQiw0QkFBNEI7d0JBQzVCLDZCQUE2Qjt3QkFDN0IsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQix5QkFBeUI7d0JBQ3pCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLDZCQUE2Qjt3QkFDN0IscUJBQXFCO3dCQUNyQixvQkFBb0I7cUJBQ3JCO2lCQUNGOztJQU1ELHVCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0FMWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1dpemFyZENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1dpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtXaXphcmRTdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7TmV4dFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZXh0LXN0ZXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtQcmV2aW91c1N0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7T3B0aW9uYWxTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvb3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0dvVG9TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC1zeW1ib2wuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0VuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2VuYWJsZS1iYWNrLWxpbmtzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtY29tcGxldGlvbi1zdGVwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7U2VsZWN0ZWRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1Jlc2V0V2l6YXJkRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVzZXQtd2l6YXJkLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogVGhlIG1vZHVsZSBkZWZpbmluZyBhbGwgdGhlIGNvbnRlbnQgaW5zaWRlIGBhbmd1bGFyLWFyY2h3aXphcmRgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFdpemFyZENvbXBvbmVudCxcclxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXHJcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQsXHJcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcclxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxyXG4gICAgUHJldmlvdXNTdGVwRGlyZWN0aXZlLFxyXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxyXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSxcclxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSxcclxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcclxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFdpemFyZENvbXBvbmVudCxcclxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXHJcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQsXHJcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcclxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxyXG4gICAgUHJldmlvdXNTdGVwRGlyZWN0aXZlLFxyXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxyXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSxcclxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSxcclxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcclxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJjaHdpemFyZE1vZHVsZSB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7bmdNb2R1bGU6IEFyY2h3aXphcmRNb2R1bGUsIHByb3ZpZGVyczogW119O1xyXG4gIH1cclxufVxyXG4iXX0=
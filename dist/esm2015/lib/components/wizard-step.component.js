/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `aw-wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
export class WizardStepComponent extends WizardStep {
}
WizardStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'aw-wizard-step',
                template: "<ng-content></ng-content>\r\n",
                encapsulation: ViewEncapsulation.None,
                providers: [
                    { provide: WizardStep, useExisting: forwardRef(() => WizardStepComponent) }
                ],
                styles: ["aw-wizard-step{height:auto;width:100%}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvd2l6YXJkLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRXpELE1BQU0sMEJBQTJCLFNBQVEsVUFBVTs7O1lBVGxELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQix5Q0FBeUM7Z0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBQztpQkFDMUU7O2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgZm9yd2FyZFJlZiwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3LXdpemFyZC1zdGVwYCBjb21wb25lbnQgaXMgdXNlZCB0byBkZWZpbmUgYSBub3JtYWwgc3RlcCBpbnNpZGUgYSB3aXphcmQuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogV2l0aCBgc3RlcFRpdGxlYCBhbmQgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0czpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXAgW3N0ZXBUaXRsZV09XCJzdGVwIHRpdGxlXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICdzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxyXG4gKiAgICBbY2FuRXhpdF09XCJkZWNpZGluZyBmdW5jdGlvblwiIChzdGVwRW50ZXIpPVwiZW50ZXIgZnVuY3Rpb25cIiAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxyXG4gKiAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXBcIlxyXG4gKiAgICBbY2FuRXhpdF09XCJkZWNpZGluZyBmdW5jdGlvblwiIChzdGVwRW50ZXIpPVwiZW50ZXIgZnVuY3Rpb25cIiAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxyXG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XHJcbiAqICAgICAgICBzdGVwIHRpdGxlXHJcbiAqICAgIDwvbmctdGVtcGxhdGU+XHJcbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XHJcbiAqICAgICAgICBzeW1ib2xcclxuICogICAgPC9uZy10ZW1wbGF0ZT5cclxuICogICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJBZGRyZXNzIGluZm9ybWF0aW9uXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcmI3hmMWJhOycsIGZvbnRGYW1pbHk6ICdGb250QXdlc29tZScgfVwiPlxyXG4gKiAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXA+XHJcbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cclxuICogICAgICAgIEFkZHJlc3MgaW5mb3JtYXRpb25cclxuICogICAgPC9uZy10ZW1wbGF0ZT5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cclxuICogICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGF4aVwiPjwvaT5cclxuICogICAgPC9uZy10ZW1wbGF0ZT5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQtc3RlcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtc3RlcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC1zdGVwLmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge3Byb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZFN0ZXBDb21wb25lbnQpfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBDb21wb25lbnQgZXh0ZW5kcyBXaXphcmRTdGVwIHtcclxufVxyXG4iXX0=
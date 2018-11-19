/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awWizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepDirective = /** @class */ (function (_super) {
    tslib_1.__extends(WizardStepDirective, _super);
    /**
     * The `awWizardStep` directive can be used to define a normal step inside a wizard.
     *
     * ### Syntax
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    ...
     * </div>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    <ng-template awWizardStepTitle>
     *        step title
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        symbol
     *    </ng-template>
     *    ...
     * </div>
     * ```
     *
     * ### Example
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </div>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <div awWizardStep>
     *    <ng-template awWizardStepTitle>
     *        Address information
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        <i class="fa fa-taxi"></i>
     *    </ng-template>
     * </div>
     * ```
     *
     * @author Marc Arndt
     */
    function WizardStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awWizardStep]',
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepDirective; }) }
                    ]
                },] }
    ];
    return WizardStepDirective;
}(WizardStep));
export { WizardStepDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RHpEO0lBTXlDLCtDQUFVO0lBM0RuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9ERztJQUNIOztJQU9BLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDLEVBQUU7cUJBQzVFO2lCQUNGOztJQUVELDBCQUFDO0NBQUEsQUFQRCxDQU15QyxVQUFVLEdBQ2xEO1NBRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3V2l6YXJkU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIG5vcm1hbCBzdGVwIGluc2lkZSBhIHdpemFyZC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRTdGVwIFtzdGVwVGl0bGVdPVwic3RlcCB0aXRsZVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnc3ltYm9sJywgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyB9XCJcclxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cclxuICogICAgLi4uXHJcbiAqIDwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRTdGVwIFtjYW5FeGl0XT1cImRlY2lkaW5nIGZ1bmN0aW9uXCIgKHN0ZXBFbnRlcik9XCJlbnRlciBmdW5jdGlvblwiIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XHJcbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cclxuICogICAgICAgIHN0ZXAgdGl0bGVcclxuICogICAgPC9uZy10ZW1wbGF0ZT5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cclxuICogICAgICAgIHN5bWJvbFxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAgICAuLi5cclxuICogPC9kaXY+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRTdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8ZGl2IGF3V2l6YXJkU3RlcD5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxyXG4gKiAgICAgICAgQWRkcmVzcyBpbmZvcm1hdGlvblxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxyXG4gKiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10YXhpXCI+PC9pPlxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdXaXphcmRTdGVwXScsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZFN0ZXBEaXJlY3RpdmUpIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkU3RlcCB7XHJcbn1cclxuIl19
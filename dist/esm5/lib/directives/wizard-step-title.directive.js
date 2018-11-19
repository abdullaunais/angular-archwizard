/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Created by marc on 01.06.17.
 */
import { Directive, TemplateRef } from '@angular/core';
/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepTitleDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    function WizardStepTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
                },] }
    ];
    WizardStepTitleDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return WizardStepTitleDirective;
}());
export { WizardStepTitleDirective };
if (false) {
    /** @type {?} */
    WizardStepTitleDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCckQ7SUFJRTs7OztPQUlHO0lBQ0gsa0NBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFJLENBQUM7O2dCQVR0RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBEQUEwRDtpQkFDckU7OztnQkFuQmtCLFdBQVc7O0lBMkI5QiwrQkFBQztDQUFBLEFBVkQsSUFVQztTQVBZLHdCQUF3Qjs7O0lBTXZCLCtDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1hcmMgb24gMDEuMDYuMTcuXHJcbiAqL1xyXG5pbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdXaXphcmRTdGVwVGl0bGVgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYHN0ZXBUaXRsZWAgaW5wdXQgb2YgYSBbW1dpemFyZFN0ZXBdXVxyXG4gKiB0byBkZWZpbmUgdGhlIGNvbnRlbnQgb2YgYSBzdGVwIHRpdGxlIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXHJcbiAqIFRoaXMgc3RlcCB0aXRsZSBjYW4gYmUgZnJlZWx5IGNyZWF0ZWQgYW5kIGNhbiBjb250YWluIG1vcmUgdGhhbiBvbmx5IHBsYWluIHRleHRcclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cclxuICogICAgIC4uLlxyXG4gKiA8L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F3U3RlcFRpdGxlXSwgbmctdGVtcGxhdGVbYXdXaXphcmRTdGVwVGl0bGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IG9mIHRoZSBgbmctdGVtcGxhdGVgIHRoYXQgY29udGFpbnMgdGhpcyBbW1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZV1dXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG4iXX0=
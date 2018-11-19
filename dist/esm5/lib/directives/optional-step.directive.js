/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Host } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var OptionalStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    function OptionalStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    OptionalStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.wizardStep.optional = true;
    };
    OptionalStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awOptionalStep]'
                },] }
    ];
    OptionalStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: Host }] }
    ]; };
    return OptionalStepDirective;
}());
export { OptionalStepDirective };
if (false) {
    /** @type {?} */
    OptionalStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vcHRpb25hbC1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCekQ7SUFJRTs7OztPQUlHO0lBQ0gsK0JBQTRCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO0lBRXZEOztPQUVHOzs7OztJQUNILHdDQUFROzs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7O2dCQTFCTyxVQUFVLHVCQWlDSCxJQUFJOztJQVFuQiw0QkFBQztDQUFBLEFBakJELElBaUJDO1NBZFkscUJBQXFCOzs7SUFNcEIsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdPcHRpb25hbFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYW4gb3B0aW9uYWwgYHdpemFyZC1zdGVwYC5cclxuICogQW4gb3B0aW9uYWwgd2l6YXJkIHN0ZXAgaXMgYSBbW1dpemFyZFN0ZXBdXSB0aGF0IGRvZXNuJ3QgbmVlZCB0byBiZSBjb21wbGV0ZWQgdG8gdHJhbnNpdGlvbiB0byBsYXRlciB3aXphcmQgc3RlcHMuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXAgYXdPcHRpb25hbFN0ZXA+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIlNlY29uZCBzdGVwXCIgYXdPcHRpb25hbFN0ZXA+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdPcHRpb25hbFN0ZXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxTdGVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBjb250YWlucyB0aGlzIFtbT3B0aW9uYWxTdGVwRGlyZWN0aXZlXV1cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcclxuICAgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2l6YXJkU3RlcC5vcHRpb25hbCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==
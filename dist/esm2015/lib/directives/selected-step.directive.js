/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Host } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
export class SelectedStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardStep The wizard step, which should be selected by default
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngOnInit() {
        this.wizardStep.defaultSelected = true;
    }
}
SelectedStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awSelectedStep]'
            },] }
];
SelectedStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: Host }] }
];
if (false) {
    /** @type {?} */
    SelectedStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWtCekQsTUFBTTs7Ozs7O0lBTUosWUFBNEIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUNsRCxDQUFDOzs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDekMsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7WUFqQk8sVUFBVSx1QkF3QkgsSUFBSTs7OztJQUFMLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3U2VsZWN0ZWRTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgb24gYSBbW1dpemFyZFN0ZXBdXSB0byBzZXQgaXQgYXMgc2VsZWN0ZWQgYWZ0ZXIgdGhlIHdpemFyZCBpbml0aWFsaXNhdGlvbiBvciBhIHJlc2V0LlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgdGl0bGVcIiBhd1NlbGVjdGVkU3RlcD5cclxuICogICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd1NlbGVjdGVkU3RlcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcclxuICAgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2l6YXJkU3RlcC5kZWZhdWx0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=
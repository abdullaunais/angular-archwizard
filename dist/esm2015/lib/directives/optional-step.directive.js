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
export class OptionalStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    constructor(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     * @return {?}
     */
    ngOnInit() {
        this.wizardStep.optional = true;
    }
}
OptionalStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awOptionalStep]'
            },] }
];
OptionalStepDirective.ctorParameters = () => [
    { type: WizardStep, decorators: [{ type: Host }] }
];
if (false) {
    /** @type {?} */
    OptionalStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9vcHRpb25hbC1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCekQsTUFBTTs7Ozs7O0lBTUosWUFBNEIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7Ozs7O0lBS3ZELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7WUExQk8sVUFBVSx1QkFpQ0gsSUFBSTs7OztJQUFMLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3T3B0aW9uYWxTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGFuIG9wdGlvbmFsIGB3aXphcmQtc3RlcGAuXHJcbiAqIEFuIG9wdGlvbmFsIHdpemFyZCBzdGVwIGlzIGEgW1tXaXphcmRTdGVwXV0gdGhhdCBkb2Vzbid0IG5lZWQgdG8gYmUgY29tcGxldGVkIHRvIHRyYW5zaXRpb24gdG8gbGF0ZXIgd2l6YXJkIHN0ZXBzLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIGF3T3B0aW9uYWxTdGVwPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJTZWNvbmQgc3RlcFwiIGF3T3B0aW9uYWxTdGVwPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3T3B0aW9uYWxTdGVwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggY29udGFpbnMgdGhpcyBbW09wdGlvbmFsU3RlcERpcmVjdGl2ZV1dXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXHJcbiAgICovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndpemFyZFN0ZXAub3B0aW9uYWwgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=
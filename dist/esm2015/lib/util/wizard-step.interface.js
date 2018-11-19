/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { WizardStepTitleDirective } from '../directives/wizard-step-title.directive';
import { ContentChild, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { WizardStepSymbolDirective } from '../directives/wizard-step-symbol.directive';
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
export class WizardStep {
    /**
     * Basic functionality every type of wizard step needs to provide
     *
     * @author Marc Arndt
     */
    constructor() {
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = { symbol: '' };
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new EventEmitter();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    /**
     * Returns if this wizard step should be visible to the user.
     * If the step should be visible to the user false is returned, otherwise true
     * @return {?}
     */
    get hidden() {
        return !this.selected;
    }
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    static canTransitionStep(condition, direction) {
        if (typeof (condition) === typeof (true)) {
            return Promise.resolve((/** @type {?} */ (condition)));
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error(`Input value '${condition}' is neither a boolean nor a function`));
        }
    }
    /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    enter(direction) {
        this.stepEnter.emit(direction);
    }
    /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    exit(direction) {
        this.stepExit.emit(direction);
    }
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    canEnterStep(direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    }
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    canExitStep(direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    }
}
WizardStep.propDecorators = {
    stepTitleTemplate: [{ type: ContentChild, args: [WizardStepTitleDirective,] }],
    stepSymbolTemplate: [{ type: ContentChild, args: [WizardStepSymbolDirective,] }],
    stepId: [{ type: Input }],
    stepTitle: [{ type: Input }],
    navigationSymbol: [{ type: Input }],
    canEnter: [{ type: Input }],
    canExit: [{ type: Input }],
    stepEnter: [{ type: Output }],
    stepExit: [{ type: Output }],
    hidden: [{ type: HostBinding, args: ['hidden',] }]
};
if (false) {
    /**
     * A step title property, which contains the visible header title of the step.
     * This title is then shown inside the navigation bar.
     * Compared to `stepTitle` this property can contain any html content and not only plain text
     * @type {?}
     */
    WizardStep.prototype.stepTitleTemplate;
    /**
     * A step symbol property that, if defined, overrides `navigationSymbol`.
     * Allows to display arbitrary content as a step symbol instead of plain text.
     * @type {?}
     */
    WizardStep.prototype.stepSymbolTemplate;
    /**
     * A step id, unique to the step
     * @type {?}
     */
    WizardStep.prototype.stepId;
    /**
     * A step title property, which contains the visible header title of the step.
     * This title is only shown inside the navigation bar, if `stepTitleTemplate` is not defined or null.
     * @type {?}
     */
    WizardStep.prototype.stepTitle;
    /**
     * A symbol property, which contains an optional symbol for the step inside the navigation bar.
     * Takes effect when `stepSymbolTemplate` is not defined or null.
     * @type {?}
     */
    WizardStep.prototype.navigationSymbol;
    /**
     * A boolean describing if the wizard step has been completed
     * @type {?}
     */
    WizardStep.prototype.completed;
    /**
     * A boolean describing if the wizard step is currently selected
     * @type {?}
     */
    WizardStep.prototype.selected;
    /**
     * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
     * @type {?}
     */
    WizardStep.prototype.defaultSelected;
    /**
     * A boolean describing if the wizard step is an optional step
     * @type {?}
     */
    WizardStep.prototype.optional;
    /**
     * A function or boolean deciding, if this step can be entered
     * @type {?}
     */
    WizardStep.prototype.canEnter;
    /**
     * A function or boolean deciding, if this step can be exited
     * @type {?}
     */
    WizardStep.prototype.canExit;
    /**
     * This [[EventEmitter]] is called when the step is entered.
     * The bound method should be used to do initialization work.
     * @type {?}
     */
    WizardStep.prototype.stepEnter;
    /**
     * This [[EventEmitter]] is called when the step is exited.
     * The bound method can be used to do cleanup work.
     * @type {?}
     */
    WizardStep.prototype.stepExit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVyRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7OztBQU9yRixNQUFNO0lBTE47Ozs7T0FJRztJQUNIO1FBNkJFOzs7V0FHRztRQUVJLHFCQUFnQixHQUFxQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUUzRDs7V0FFRztRQUNJLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFekI7O1dBRUc7UUFDSSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXhCOztXQUVHO1FBQ0ksb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFL0I7O1dBRUc7UUFDSSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXhCOztXQUVHO1FBRUksYUFBUSxHQUE2RyxJQUFJLENBQUM7UUFFakk7O1dBRUc7UUFFSSxZQUFPLEdBQTZHLElBQUksQ0FBQztRQUVoSTs7O1dBR0c7UUFFSSxjQUFTLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRXRGOzs7V0FHRztRQUVJLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUE0RXZGLENBQUM7Ozs7OztJQXRFQyxJQUNXLE1BQU07UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4QixDQUFDOzs7Ozs7Ozs7O0lBV08sTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBRVMsRUFDVCxTQUEwQjtRQUN6RCxJQUFJLE9BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxPQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLG1CQUFBLFNBQVMsRUFBVyxDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFJLFNBQVMsWUFBWSxRQUFRLEVBQUU7WUFDeEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLFNBQVMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1NBQ3BHO0lBQ0gsQ0FBQzs7Ozs7OztJQU9NLEtBQUssQ0FBQyxTQUEwQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBT00sSUFBSSxDQUFDLFNBQTBCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7Ozs7SUFXTSxZQUFZLENBQUMsU0FBMEI7UUFDNUMsT0FBTyxVQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7Ozs7O0lBV00sV0FBVyxDQUFDLFNBQTBCO1FBQzNDLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7O2dDQXJKQSxZQUFZLFNBQUMsd0JBQXdCO2lDQU9yQyxZQUFZLFNBQUMseUJBQXlCO3FCQU10QyxLQUFLO3dCQU9MLEtBQUs7K0JBT0wsS0FBSzt1QkEwQkwsS0FBSztzQkFNTCxLQUFLO3dCQU9MLE1BQU07dUJBT04sTUFBTTtxQkFPTixXQUFXLFNBQUMsUUFBUTs7Ozs7Ozs7O0lBaEZyQix1Q0FDbUQ7Ozs7OztJQU1uRCx3Q0FDcUQ7Ozs7O0lBS3JELDRCQUNzQjs7Ozs7O0lBTXRCLCtCQUN5Qjs7Ozs7O0lBTXpCLHNDQUMyRDs7Ozs7SUFLM0QsK0JBQXlCOzs7OztJQUt6Qiw4QkFBd0I7Ozs7O0lBS3hCLHFDQUErQjs7Ozs7SUFLL0IsOEJBQXdCOzs7OztJQUt4Qiw4QkFDaUk7Ozs7O0lBS2pJLDZCQUNnSTs7Ozs7O0lBTWhJLCtCQUNzRjs7Ozs7O0lBTXRGLDhCQUNxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXRpdGxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7Q29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uU3ltYm9sfSBmcm9tICcuL25hdmlnYXRpb24tc3ltYm9sLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZX0gZnJvbSAnLi4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC1zeW1ib2wuZGlyZWN0aXZlJztcclxuXHJcbi8qKlxyXG4gKiBCYXNpYyBmdW5jdGlvbmFsaXR5IGV2ZXJ5IHR5cGUgb2Ygd2l6YXJkIHN0ZXAgbmVlZHMgdG8gcHJvdmlkZVxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaXphcmRTdGVwIHtcclxuICAvKipcclxuICAgKiBBIHN0ZXAgdGl0bGUgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIHRoZSB2aXNpYmxlIGhlYWRlciB0aXRsZSBvZiB0aGUgc3RlcC5cclxuICAgKiBUaGlzIHRpdGxlIGlzIHRoZW4gc2hvd24gaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cclxuICAgKiBDb21wYXJlZCB0byBgc3RlcFRpdGxlYCB0aGlzIHByb3BlcnR5IGNhbiBjb250YWluIGFueSBodG1sIGNvbnRlbnQgYW5kIG5vdCBvbmx5IHBsYWluIHRleHRcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSlcclxuICBwdWJsaWMgc3RlcFRpdGxlVGVtcGxhdGU6IFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdGVwIHN5bWJvbCBwcm9wZXJ0eSB0aGF0LCBpZiBkZWZpbmVkLCBvdmVycmlkZXMgYG5hdmlnYXRpb25TeW1ib2xgLlxyXG4gICAqIEFsbG93cyB0byBkaXNwbGF5IGFyYml0cmFyeSBjb250ZW50IGFzIGEgc3RlcCBzeW1ib2wgaW5zdGVhZCBvZiBwbGFpbiB0ZXh0LlxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGQoV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSlcclxuICBwdWJsaWMgc3RlcFN5bWJvbFRlbXBsYXRlOiBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlO1xyXG5cclxuICAvKipcclxuICAgKiBBIHN0ZXAgaWQsIHVuaXF1ZSB0byB0aGUgc3RlcFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHN0ZXBJZDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHN0ZXAgdGl0bGUgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIHRoZSB2aXNpYmxlIGhlYWRlciB0aXRsZSBvZiB0aGUgc3RlcC5cclxuICAgKiBUaGlzIHRpdGxlIGlzIG9ubHkgc2hvd24gaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciwgaWYgYHN0ZXBUaXRsZVRlbXBsYXRlYCBpcyBub3QgZGVmaW5lZCBvciBudWxsLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHN0ZXBUaXRsZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHN5bWJvbCBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgYW4gb3B0aW9uYWwgc3ltYm9sIGZvciB0aGUgc3RlcCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxyXG4gICAqIFRha2VzIGVmZmVjdCB3aGVuIGBzdGVwU3ltYm9sVGVtcGxhdGVgIGlzIG5vdCBkZWZpbmVkIG9yIG51bGwuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmF2aWdhdGlvblN5bWJvbDogTmF2aWdhdGlvblN5bWJvbCA9IHsgc3ltYm9sOiAnJyB9O1xyXG5cclxuICAvKipcclxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaGFzIGJlZW4gY29tcGxldGVkXHJcbiAgICovXHJcbiAgcHVibGljIGNvbXBsZXRlZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgY3VycmVudGx5IHNlbGVjdGVkXHJcbiAgICovXHJcbiAgcHVibGljIHNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nLCBpZiB0aGUgd2l6YXJkIHN0ZXAgc2hvdWxkIGJlIHNlbGVjdGVkIGJ5IGRlZmF1bHQsIGkuZS4gYWZ0ZXIgdGhlIHdpemFyZCBoYXMgYmVlbiBpbml0aWFsaXplZCBhcyB0aGUgaW5pdGlhbCBzdGVwXHJcbiAgICovXHJcbiAgcHVibGljIGRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgYW4gb3B0aW9uYWwgc3RlcFxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcHRpb25hbCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIG9yIGJvb2xlYW4gZGVjaWRpbmcsIGlmIHRoaXMgc3RlcCBjYW4gYmUgZW50ZXJlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNhbkVudGVyOiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHwgYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gb3IgYm9vbGVhbiBkZWNpZGluZywgaWYgdGhpcyBzdGVwIGNhbiBiZSBleGl0ZWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjYW5FeGl0OiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHwgYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBlbnRlcmVkLlxyXG4gICAqIFRoZSBib3VuZCBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgdG8gZG8gaW5pdGlhbGl6YXRpb24gd29yay5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3RlcEVudGVyOiBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkLlxyXG4gICAqIFRoZSBib3VuZCBtZXRob2QgY2FuIGJlIHVzZWQgdG8gZG8gY2xlYW51cCB3b3JrLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzdGVwRXhpdDogRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBpZiB0aGlzIHdpemFyZCBzdGVwIHNob3VsZCBiZSB2aXNpYmxlIHRvIHRoZSB1c2VyLlxyXG4gICAqIElmIHRoZSBzdGVwIHNob3VsZCBiZSB2aXNpYmxlIHRvIHRoZSB1c2VyIGZhbHNlIGlzIHJldHVybmVkLCBvdGhlcndpc2UgdHJ1ZVxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnaGlkZGVuJylcclxuICBwdWJsaWMgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5zZWxlY3RlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgdHJhbnNpdGlvbmVkIHdpdGggYSBnaXZlbiBkaXJlY3Rpb24uXHJcbiAgICogVHJhbnNpdGlvbmVkIGluIHRoaXMgY2FzZSBtZWFucyBlaXRoZXIgZW50ZXJlZCBvciBleGl0ZWQsIGRlcGVuZGluZyBvbiB0aGUgZ2l2ZW4gYGNvbmRpdGlvbmAgcGFyYW1ldGVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiB2YXJpYWJsZSwgZGVjaWRpbmcgaWYgdGhlIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZFxyXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIHRyYW5zaXRpb25lZFxyXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoaXMgc3RlcCBjYW4gdHJhbnNpdGlvbmVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cclxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duIGlmIGBjb25kaXRpb25gIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY2FuVHJhbnNpdGlvblN0ZXAoY29uZGl0aW9uOiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBQcm9taXNlPGJvb2xlYW4+KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBpZiAodHlwZW9mKGNvbmRpdGlvbikgPT09IHR5cGVvZih0cnVlKSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbmRpdGlvbiBhcyBib29sZWFuKTtcclxuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25kaXRpb24oZGlyZWN0aW9uKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBJbnB1dCB2YWx1ZSAnJHtjb25kaXRpb259JyBpcyBuZWl0aGVyIGEgYm9vbGVhbiBub3IgYSBmdW5jdGlvbmApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZW50ZXJlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwIGlzIGVudGVyZWRcclxuICAgKi9cclxuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuc3RlcEVudGVyLmVtaXQoZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXAgaXMgZXhpdGVkXHJcbiAgICovXHJcbiAgcHVibGljIGV4aXQoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pIHtcclxuICAgIHRoaXMuc3RlcEV4aXQuZW1pdChkaXJlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0cnVlLCBpZiB0aGlzIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkIGZyb20gdGhlIGdpdmVuIGRpcmVjdGlvbi5cclxuICAgKiBCZWNhdXNlIHRoaXMgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHZhbHVlIGBjYW5FbnRlcmAsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGBjYW5FbnRlcmAgaXMgbmVpdGhlciBhIGJvb2xlYW5cclxuICAgKiBub3IgYSBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIGVudGVyZWRcclxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGUgc3RlcCBjYW4gYmUgZW50ZXJlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLCBmYWxzZSBvdGhlcndpc2VcclxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duIGlmIGBhbkVudGVyYCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYW5FbnRlclN0ZXAoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBXaXphcmRTdGVwLmNhblRyYW5zaXRpb25TdGVwKHRoaXMuY2FuRW50ZXIsIGRpcmVjdGlvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIGV4aXRlZCBpbnRvIGdpdmVuIGRpcmVjdGlvbi5cclxuICAgKiBCZWNhdXNlIHRoaXMgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHZhbHVlIGBjYW5FeGl0YCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgYGNhbkV4aXRgIGlzIG5laXRoZXIgYSBib29sZWFuXHJcbiAgICogbm9yIGEgZnVuY3Rpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhpcyBzdGVwIHNob3VsZCBiZSBsZWZ0XHJcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLCBmYWxzZSBvdGhlcndpc2VcclxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duIGlmIGBjYW5FeGl0YCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxyXG4gICAqL1xyXG4gIHB1YmxpYyBjYW5FeGl0U3RlcChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIFdpemFyZFN0ZXAuY2FuVHJhbnNpdGlvblN0ZXAodGhpcy5jYW5FeGl0LCBkaXJlY3Rpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=
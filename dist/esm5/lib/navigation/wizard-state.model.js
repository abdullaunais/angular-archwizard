/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MovingDirection } from '../util/moving-direction.enum';
import { navigationModeFactory } from './navigation-mode.provider';
/**
 * The internal model/state of a wizard.
 * This model contains:
 * - an array with all steps the wizard contains
 * - the index of the step the wizard currently resides inside
 * - information about the completeness of the wizard
 * - some additional helper methods
 *
 * @author Marc Arndt
 */
var WizardState = /** @class */ (function () {
    /**
     * Constructor
     */
    function WizardState() {
        /**
         * The initial step index, as taken from the [[WizardComponent]]
         */
        this._defaultStepIndex = 0;
        /**
         * An array representation of all wizard steps belonging to this model
         */
        this.wizardSteps = [];
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         */
        this.currentStepIndex = -1;
    }
    Object.defineProperty(WizardState.prototype, "defaultStepIndex", {
        /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         */
        get: /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         * @return {?}
         */
        function () {
            /** @type {?} */
            var foundDefaultStep = this.wizardSteps.find(function (step) { return step.defaultSelected; });
            if (foundDefaultStep) {
                return this.getIndexOfStep(foundDefaultStep);
            }
            else {
                return this._defaultStepIndex;
            }
        },
        /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param defaultStepIndex The new default wizard step index
         */
        set: /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param {?} defaultStepIndex The new default wizard step index
         * @return {?}
         */
        function (defaultStepIndex) {
            this._defaultStepIndex = defaultStepIndex;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WizardState.prototype, "currentStep", {
        /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         */
        get: /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         * @return {?}
         */
        function () {
            if (this.hasStep(this.currentStepIndex)) {
                return this.wizardSteps[this.currentStepIndex];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardState.prototype, "completed", {
        /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         */
        get: /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         * @return {?}
         */
        function () {
            return this.wizardSteps.every(function (step) { return step.completed || step.optional; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param updatedNavigationMode The name of the new navigation mode
     */
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    WizardState.prototype.updateNavigationMode = /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    function (updatedNavigationMode) {
        this.navigationMode = navigationModeFactory(updatedNavigationMode, this);
    };
    /**
     * Updates the wizard steps to the new array
     *
     * @param updatedWizardSteps The updated wizard steps
     */
    /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    WizardState.prototype.updateWizardSteps = /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    function (updatedWizardSteps) {
        // the wizard is currently not in the initialization phase
        if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = updatedWizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
        }
        this.wizardSteps = updatedWizardSteps;
    };
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    WizardState.prototype.hasStep = /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    function (stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    };
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns True if this wizard has a previous step before the current step
     */
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    WizardState.prototype.hasPreviousStep = /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    function () {
        return this.hasStep(this.currentStepIndex - 1);
    };
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns True if this wizard has a next step after the current step
     */
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    WizardState.prototype.hasNextStep = /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    function () {
        return this.hasStep(this.currentStepIndex + 1);
    };
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns True if the wizard is currently inside its last step
     */
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    WizardState.prototype.isLastStep = /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    function () {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    };
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    WizardState.prototype.getStepAtIndex = /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    function (stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error("Expected a known step, but got stepIndex: " + stepIndex + ".");
        }
        return this.wizardSteps[stepIndex];
    };
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param stepId The given step id
     * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    WizardState.prototype.getIndexOfStepWithId = /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    function (stepId) {
        return this.wizardSteps.findIndex(function (step) { return step.stepId === stepId; });
    };
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns The found index of `step` or `-1` if the step is not included in the wizard
     */
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    WizardState.prototype.getIndexOfStep = /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    function (step) {
        return this.wizardSteps.indexOf(step);
    };
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns The calculated [[MovingDirection]]
     */
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    WizardState.prototype.getMovingDirection = /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    function (destinationStep) {
        /** @type {?} */
        var movingDirection;
        if (destinationStep > this.currentStepIndex) {
            movingDirection = MovingDirection.Forwards;
        }
        else if (destinationStep < this.currentStepIndex) {
            movingDirection = MovingDirection.Backwards;
        }
        else {
            movingDirection = MovingDirection.Stay;
        }
        return movingDirection;
    };
    WizardState.decorators = [
        { type: Injectable }
    ];
    WizardState.ctorParameters = function () { return []; };
    return WizardState;
}());
export { WizardState };
if (false) {
    /**
     * The initial step index, as taken from the [[WizardComponent]]
     * @type {?}
     */
    WizardState.prototype._defaultStepIndex;
    /**
     * An array representation of all wizard steps belonging to this model
     * @type {?}
     */
    WizardState.prototype.wizardSteps;
    /**
     * The index of the currently visible and selected step inside the wizardSteps QueryList.
     * If this wizard contains no steps, currentStepIndex is -1
     * @type {?}
     */
    WizardState.prototype.currentStepIndex;
    /**
     * The navigation mode used to navigate inside the wizard
     * @type {?}
     */
    WizardState.prototype.navigationMode;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     * @type {?}
     */
    WizardState.prototype.disableNavigationBar;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0YXRlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFZakU7SUE4RUU7O09BRUc7SUFDSDtRQS9FQTs7V0FFRztRQUNLLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUU5Qjs7V0FFRztRQUNJLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQTRCM0M7OztXQUdHO1FBQ0kscUJBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUF3QzdCLENBQUM7SUFoRUQsc0JBQVcseUNBQWdCO1FBSTNCOzs7OztXQUtHOzs7Ozs7OztRQUNIOztnQkFDUSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxlQUFlLEVBQXBCLENBQW9CLENBQUM7WUFFNUUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDL0I7UUFDSCxDQUFDO1FBeEJEOzs7OztXQUtHOzs7Ozs7OztRQUNILFVBQTRCLGdCQUFnQjtZQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFnQkEsQ0FBQztJQTBCRixzQkFBVyxvQ0FBVztRQVJ0Qjs7Ozs7OztXQU9HOzs7Ozs7Ozs7O1FBQ0g7WUFD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ZSxJQUFnQjtRQUM3QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7OztJQUNILHdDQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLGVBQXVCOztZQUNwQyxlQUFnQztRQUVwQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDM0MsZUFBZSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7U0FDNUM7YUFBTSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsZUFBZSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7U0FDN0M7YUFBTTtZQUNMLGVBQWUsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7Z0JBeE1GLFVBQVU7OztJQXlNWCxrQkFBQztDQUFBLEFBek1ELElBeU1DO1NBeE1ZLFdBQVc7Ozs7OztJQUl0Qix3Q0FBOEI7Ozs7O0lBSzlCLGtDQUEyQzs7Ozs7O0lBZ0MzQyx1Q0FBNkI7Ozs7O0lBSzdCLHFDQUFzQzs7Ozs7SUFLdEMsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7bmF2aWdhdGlvbk1vZGVGYWN0b3J5fSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5wcm92aWRlcic7XHJcblxyXG4vKipcclxuICogVGhlIGludGVybmFsIG1vZGVsL3N0YXRlIG9mIGEgd2l6YXJkLlxyXG4gKiBUaGlzIG1vZGVsIGNvbnRhaW5zOlxyXG4gKiAtIGFuIGFycmF5IHdpdGggYWxsIHN0ZXBzIHRoZSB3aXphcmQgY29udGFpbnNcclxuICogLSB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgdGhlIHdpemFyZCBjdXJyZW50bHkgcmVzaWRlcyBpbnNpZGVcclxuICogLSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY29tcGxldGVuZXNzIG9mIHRoZSB3aXphcmRcclxuICogLSBzb21lIGFkZGl0aW9uYWwgaGVscGVyIG1ldGhvZHNcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgc3RlcCBpbmRleCwgYXMgdGFrZW4gZnJvbSB0aGUgW1tXaXphcmRDb21wb25lbnRdXVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RlZmF1bHRTdGVwSW5kZXggPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiBhbGwgd2l6YXJkIHN0ZXBzIGJlbG9uZ2luZyB0byB0aGlzIG1vZGVsXHJcbiAgICovXHJcbiAgcHVibGljIHdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBpbml0aWFsIGRlZmF1bHQgc3RlcC5cclxuICAgKiBCZXdhcmU6IFRoaXMgaW5pdGlhbCBkZWZhdWx0IGlzIG9ubHkgdXNlZCBpZiBubyB3aXphcmQgc3RlcCBoYXMgYmVlbiBlbmhhbmNlZCB3aXRoIHRoZSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlZmF1bHRTdGVwSW5kZXggVGhlIG5ldyBkZWZhdWx0IHdpemFyZCBzdGVwIGluZGV4XHJcbiAgICovXHJcbiAgcHVibGljIHNldCBkZWZhdWx0U3RlcEluZGV4KGRlZmF1bHRTdGVwSW5kZXgpIHtcclxuICAgIHRoaXMuX2RlZmF1bHRTdGVwSW5kZXggPSBkZWZhdWx0U3RlcEluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgc3RlcCBpbmRleC5cclxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBlaXRoZXI6XHJcbiAgICogLSB0aGUgaW5kZXggb2YgYSB3aXphcmQgc3RlcCB3aXRoIGEgYHNlbGVjdGVkYCBkaXJlY3RpdmUsIG9yXHJcbiAgICogLSB0aGUgZGVmYXVsdCBzdGVwIGluZGV4LCBzZXQgaW4gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGRlZmF1bHRTdGVwSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGZvdW5kRGVmYXVsdFN0ZXAgPSB0aGlzLndpemFyZFN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmRlZmF1bHRTZWxlY3RlZCk7XHJcblxyXG4gICAgaWYgKGZvdW5kRGVmYXVsdFN0ZXApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXhPZlN0ZXAoZm91bmREZWZhdWx0U3RlcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFN0ZXBJbmRleDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSB2aXNpYmxlIGFuZCBzZWxlY3RlZCBzdGVwIGluc2lkZSB0aGUgd2l6YXJkU3RlcHMgUXVlcnlMaXN0LlxyXG4gICAqIElmIHRoaXMgd2l6YXJkIGNvbnRhaW5zIG5vIHN0ZXBzLCBjdXJyZW50U3RlcEluZGV4IGlzIC0xXHJcbiAgICovXHJcbiAgcHVibGljIGN1cnJlbnRTdGVwSW5kZXggPSAtMTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIHRvIG5hdmlnYXRlIGluc2lkZSB0aGUgd2l6YXJkXHJcbiAgICovXHJcbiAgcHVibGljIG5hdmlnYXRpb25Nb2RlOiBOYXZpZ2F0aW9uTW9kZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXHJcbiAgICovXHJcbiAgcHVibGljIGRpc2FibGVOYXZpZ2F0aW9uQmFyOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgV2l6YXJkU3RlcCBvYmplY3QgYmVsb25naW5nIHRvIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBhbmQgc2VsZWN0ZWQgc3RlcC5cclxuICAgKiBUaGUgY3VycmVudFN0ZXAgaXMgYWx3YXlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgd2l6YXJkIHN0ZXAuXHJcbiAgICogVGhlIGN1cnJlbnRTdGVwIGNhbiBiZSBlaXRoZXIgY29tcGxldGVkLCBpZiBpdCB3YXMgdmlzaXRlZCBlYXJsaWVyLFxyXG4gICAqIG9yIG5vdCBjb21wbGV0ZWQsIGlmIGl0IGlzIHZpc2l0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lIG9yIGl0cyBzdGF0ZSBpcyBjdXJyZW50bHkgb3V0IG9mIGRhdGUuXHJcbiAgICpcclxuICAgKiBJZiB0aGlzIHdpemFyZCBjb250YWlucyBubyBzdGVwcywgY3VycmVudFN0ZXAgaXMgbnVsbFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgY3VycmVudFN0ZXAoKTogV2l6YXJkU3RlcCB7XHJcbiAgICBpZiAodGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbXBsZXRlbmVzcyBvZiB0aGUgd2l6YXJkLlxyXG4gICAqIElmIHRoZSB3aXphcmQgaGFzIGJlZW4gY29tcGxldGVkLCBpLmUuIGFsbCBzdGVwcyBhcmUgZWl0aGVyIGNvbXBsZXRlZCBvciBvcHRpb25hbCwgdGhpcyB2YWx1ZSBpcyB0cnVlLCBvdGhlcndpc2UgaXQgaXMgZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgbmF2aWdhdGlvbiBtb2RlIHRvIHRoZSBuYXZpZ2F0aW9uIG1vZGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVwZGF0ZWROYXZpZ2F0aW9uTW9kZSBUaGUgbmFtZSBvZiB0aGUgbmV3IG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIHVwZGF0ZU5hdmlnYXRpb25Nb2RlKHVwZGF0ZWROYXZpZ2F0aW9uTW9kZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlID0gbmF2aWdhdGlvbk1vZGVGYWN0b3J5KHVwZGF0ZWROYXZpZ2F0aW9uTW9kZSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSB3aXphcmQgc3RlcHMgdG8gdGhlIG5ldyBhcnJheVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVwZGF0ZWRXaXphcmRTdGVwcyBUaGUgdXBkYXRlZCB3aXphcmQgc3RlcHNcclxuICAgKi9cclxuICB1cGRhdGVXaXphcmRTdGVwcyh1cGRhdGVkV2l6YXJkU3RlcHM6IEFycmF5PFdpemFyZFN0ZXA+KTogdm9pZCB7XHJcbiAgICAvLyB0aGUgd2l6YXJkIGlzIGN1cnJlbnRseSBub3QgaW4gdGhlIGluaXRpYWxpemF0aW9uIHBoYXNlXHJcbiAgICBpZiAodGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IHVwZGF0ZWRXaXphcmRTdGVwcy5pbmRleE9mKHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aXphcmRTdGVwcyA9IHVwZGF0ZWRXaXphcmRTdGVwcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIGdpdmVuIGluZGV4IGBzdGVwSW5kZXhgIGlzIGluc2lkZSB0aGUgcmFuZ2Ugb2YgcG9zc2libGUgd2l6YXJkIHN0ZXBzIGluc2lkZSB0aGlzIHdpemFyZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgdG8gYmUgY2hlY2tlZCBpbmRleCBvZiBhIHN0ZXAgaW5zaWRlIHRoaXMgd2l6YXJkXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gYHN0ZXBJbmRleGAgaXMgY29udGFpbmVkIGluc2lkZSB0aGlzIHdpemFyZCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgaGFzU3RlcChzdGVwSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoID4gMCAmJiAwIDw9IHN0ZXBJbmRleCAmJiBzdGVwSW5kZXggPCB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIGhhcyBhIHByZXZpb3VzIHN0ZXAgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgKi9cclxuICBoYXNQcmV2aW91c1N0ZXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGhhcyBhIG5leHQgc3RlcCwgY29tcGFyZWQgdG8gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCBoYXMgYSBuZXh0IHN0ZXAgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAqL1xyXG4gIGhhc05leHRTdGVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBpcyBjdXJyZW50bHkgaW5zaWRlIGl0cyBsYXN0IHN0ZXBcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHdpemFyZCBpcyBjdXJyZW50bHkgaW5zaWRlIGl0cyBsYXN0IHN0ZXBcclxuICAgKi9cclxuICBpc0xhc3RTdGVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoID4gMCAmJiB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPT09IHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoIC0gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIHRoZSBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAuXHJcbiAgICogSWYgbm8gW1tXaXphcmRTdGVwXV0gZXhpc3RzIGF0IHRoZSBnaXZlbiBpbmRleCBhbiBFcnJvciBpcyB0aHJvd25cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIGdpdmVuIGluZGV4XHJcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIFtbV2l6YXJkU3RlcF1dIGF0IHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YFxyXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24sIGlmIHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YCBkb2Vzbid0IGV4aXN0XHJcbiAgICovXHJcbiAgZ2V0U3RlcEF0SW5kZXgoc3RlcEluZGV4OiBudW1iZXIpOiBXaXphcmRTdGVwIHtcclxuICAgIGlmICghdGhpcy5oYXNTdGVwKHN0ZXBJbmRleCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhIGtub3duIHN0ZXAsIGJ1dCBnb3Qgc3RlcEluZGV4OiAke3N0ZXBJbmRleH0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbc3RlcEluZGV4XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYC5cclxuICAgKiBJZiBubyBzdGVwIHdpdGggdGhlIGdpdmVuIGBzdGVwSWRgIGV4aXN0cywgYC0xYCBpcyByZXR1cm5lZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0ZXBJZCBUaGUgZ2l2ZW4gc3RlcCBpZFxyXG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBpbmRleCBvZiBhIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gc3RlcCBpZCwgb3IgYC0xYCBpZiBubyBzdGVwIHdpdGggdGhlIGdpdmVuIGlkIGlzIGluY2x1ZGVkIGluIHRoZSB3aXphcmRcclxuICAgKi9cclxuICBnZXRJbmRleE9mU3RlcFdpdGhJZChzdGVwSWQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5maW5kSW5kZXgoc3RlcCA9PiBzdGVwLnN0ZXBJZCA9PT0gc3RlcElkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gYHN0ZXBgLlxyXG4gICAqIElmIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBpcyBub3QgY29udGFpbmVkIGluc2lkZSB0aGlzIHdpemFyZCwgYC0xYCBpcyByZXR1cm5lZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0ZXAgVGhlIGdpdmVuIFtbV2l6YXJkU3RlcF1dXHJcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGBzdGVwYCBvciBgLTFgIGlmIHRoZSBzdGVwIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXHJcbiAgICovXHJcbiAgZ2V0SW5kZXhPZlN0ZXAoc3RlcDogV2l6YXJkU3RlcCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5pbmRleE9mKHN0ZXApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlcyB0aGUgY29ycmVjdCBbW01vdmluZ0RpcmVjdGlvbl1dIHZhbHVlIGZvciBhIGdpdmVuIGBkZXN0aW5hdGlvblN0ZXBgIGNvbXBhcmVkIHRvIHRoZSBgY3VycmVudFN0ZXBJbmRleGAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25TdGVwIFRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgW1tNb3ZpbmdEaXJlY3Rpb25dXVxyXG4gICAqL1xyXG4gIGdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvblN0ZXA6IG51bWJlcik6IE1vdmluZ0RpcmVjdGlvbiB7XHJcbiAgICBsZXQgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb247XHJcblxyXG4gICAgaWYgKGRlc3RpbmF0aW9uU3RlcCA+IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xyXG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHM7XHJcbiAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uU3RlcCA8IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xyXG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uQmFja3dhcmRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLlN0YXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vdmluZ0RpcmVjdGlvbjtcclxuICB9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NavigationMode } from './navigation-mode.interface';
import { MovingDirection } from '../util/moving-direction.enum';
/**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
var /**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
StrictNavigationMode = /** @class */ (function (_super) {
    tslib_1.__extends(StrictNavigationMode, _super);
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard, that is configured with this navigation mode
     */
    function StrictNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param destinationIndex The index of the destination wizard step
     * @returns True if the destination wizard step can be entered, false otherwise
     */
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    StrictNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    function (destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        };
        /** @type {?} */
        var canEnterDestinationStep = function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        };
        /** @type {?} */
        var allPreviousStepsComplete = function (previous) {
            if (previous) {
                return Promise.resolve(_this.wizardState.wizardSteps
                    .filter(function (step, index) { return index < destinationIndex && index !== _this.wizardState.currentStepIndex; })
                    .every(function (step) { return step.completed || step.optional; }));
            }
            else {
                return Promise.resolve(false);
            }
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(allPreviousStepsComplete);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    StrictNavigationMode.prototype.goToStep = /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
            if (navigationAllowed) {
                /** @type {?} */
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                // set all steps after the destination step to incomplete
                _this.wizardState.wizardSteps
                    .filter(function (step, index) { return _this.wizardState.currentStepIndex > destinationIndex && index > destinationIndex; })
                    .forEach(function (step) { return step.completed = false; });
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        });
    };
    /**
     * @param {?} destinationIndex
     * @return {?}
     */
    StrictNavigationMode.prototype.isNavigable = /**
     * @param {?} destinationIndex
     * @return {?}
     */
    function (destinationIndex) {
        // a wizard step can be navigated to through the navigation bar, iff it's located before the current wizard step
        return destinationIndex < this.wizardState.currentStepIndex;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    StrictNavigationMode.prototype.reset = /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    function () {
        var _this = this;
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // at least one step is before the default step, that is not optional
        /** @type {?} */
        var illegalDefaultStep = this.wizardState.wizardSteps
            .filter(function (step, index) { return index < _this.wizardState.defaultStepIndex; })
            .some(function (step) { return !step.optional; });
        if (illegalDefaultStep) {
            throw new Error("The default step index " + this.wizardState.defaultStepIndex + " is located after a non optional step");
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach(function (step) {
            step.completed = false;
            step.selected = false;
        });
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return StrictNavigationMode;
}(NavigationMode));
/**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
export { StrictNavigationMode };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaWN0LW5hdmlnYXRpb24tbW9kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0aW9uL3N0cmljdC1uYXZpZ2F0aW9uLW1vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7QUFZOUQ7Ozs7Ozs7OztJQUEwQyxnREFBYztJQUN0RDs7OztPQUlHO0lBQ0gsOEJBQVksV0FBd0I7ZUFDbEMsa0JBQU0sV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7O0lBQ0gsMENBQVc7Ozs7Ozs7Ozs7SUFBWCxVQUFZLGdCQUF3QjtRQUFwQyxpQkE0QkM7O1lBM0JPLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7WUFFcEQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7O1lBRXZFLGtCQUFrQixHQUFHLFVBQUMsUUFBaUI7WUFDM0MsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RyxDQUFDOztZQUVLLHVCQUF1QixHQUFHLFVBQUMsUUFBaUI7WUFDaEQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFD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QkFBZ0IsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTdJRCxDQUEwQyxjQUFjLEdBNkl2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEEgW1tOYXZpZ2F0aW9uTW9kZV1dLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgd2l0aCBzdHJpY3QgbGltaXRhdGlvbnMuXHJcbiAqIFRoZSB1c2VyIGNhbiBvbmx5IG5hdmlnYXRpb24gdG8gYSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLCBpZjpcclxuICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gKiAtIGFsbCBwcmV2aW91cyBzdGVwcyB0byB0aGUgZGVzdGluYXRpb24gc3RlcCBoYXZlIGJlZW4gY29tcGxldGVkIG9yIGFyZSBvcHRpb25hbFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdHJpY3ROYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgd2l6YXJkLCB0aGF0IGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGlzIG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xyXG4gICAgc3VwZXIod2l6YXJkU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHdpemFyZCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLlxyXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XHJcbiAgICogLSBpdCBleGlzdHNcclxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICogLSBhbGwgcHJldmlvdXMgc3RlcHMgdG8gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaGF2ZSBiZWVuIGNvbXBsZXRlZCBvciBhcmUgb3B0aW9uYWxcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGNhbkV4aXRDdXJyZW50U3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNhbkV4aXRTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWxsUHJldmlvdXNTdGVwc0NvbXBsZXRlID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChwcmV2aW91cykge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwc1xyXG4gICAgICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IGluZGV4IDwgZGVzdGluYXRpb25JbmRleCAmJiBpbmRleCAhPT0gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4KVxyXG4gICAgICAgICAgLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbClcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzU3RlcClcclxuICAgICAgLnRoZW4oY2FuRXhpdEN1cnJlbnRTdGVwKVxyXG4gICAgICAudGhlbihjYW5FbnRlckRlc3RpbmF0aW9uU3RlcClcclxuICAgICAgLnRoZW4oYWxsUHJldmlvdXNTdGVwc0NvbXBsZXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgKiBXaGVuIGVudGVyaW5nIHRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgY29tcGxldGVkXHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkXHJcbiAgICogLSBhbGwgc3RlcHMgYmV0d2VlbiB0aGUgb2xkIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgYXJlIG1hcmtlZCBhcyBpbmNvbXBsZXRlXHJcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBzZXQgYXMgc2VsZWN0ZWRcclxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGVudGVyZWRcclxuICAgKlxyXG4gICAqIFdoZW4gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY291bGRuJ3QgYmUgZW50ZXJlZCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxyXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgYW5kIGVudGVyZWQgaW4gdGhlIGRpcmVjdGlvbiBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgZW50ZXJlZFxyXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxyXG4gICAqIEBwYXJhbSBwb3N0RmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxyXG4gICAqL1xyXG4gIGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xyXG4gICAgdGhpcy5jYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4KS50aGVuKG5hdmlnYXRpb25BbGxvd2VkID0+IHtcclxuICAgICAgaWYgKG5hdmlnYXRpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHByZUZpbmFsaXplKSB7XHJcbiAgICAgICAgICBwcmVGaW5hbGl6ZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZWF2ZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBzZXQgYWxsIHN0ZXBzIGFmdGVyIHRoZSBkZXN0aW5hdGlvbiBzdGVwIHRvIGluY29tcGxldGVcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXHJcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID4gZGVzdGluYXRpb25JbmRleCAmJiBpbmRleCA+IGRlc3RpbmF0aW9uSW5kZXgpXHJcbiAgICAgICAgICAuZm9yRWFjaChzdGVwID0+IHN0ZXAuY29tcGxldGVkID0gZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xyXG5cclxuICAgICAgICAvLyBnbyB0byBuZXh0IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChwb3N0RmluYWxpemUpIHtcclxuICAgICAgICAgIHBvc3RGaW5hbGl6ZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0ZXAgY2FuJ3QgYmUgbGVmdCwgcmVlbnRlciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIC8vIGEgd2l6YXJkIHN0ZXAgY2FuIGJlIG5hdmlnYXRlZCB0byB0aHJvdWdoIHRoZSBuYXZpZ2F0aW9uIGJhciwgaWZmIGl0J3MgbG9jYXRlZCBiZWZvcmUgdGhlIGN1cnJlbnQgd2l6YXJkIHN0ZXBcclxuICAgIHJldHVybiBkZXN0aW5hdGlvbkluZGV4IDwgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cclxuICAgKiBBIHJlc2V0IHRyYW5zaXRpb25zIHRoZSB3aXphcmQgYXV0b21hdGljYWxseSB0byB0aGUgZmlyc3Qgc3RlcCBhbmQgc2V0cyBhbGwgc3RlcHMgYXMgaW5jb21wbGV0ZS5cclxuICAgKiBJbiBhZGRpdGlvbiB0aGUgd2hvbGUgd2l6YXJkIGlzIHNldCBhcyBpbmNvbXBsZXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCB0aGUgZGVmYXVsdCBzdGVwIGluZGV4XHJcbiAgICBpZiAoIXRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcCh0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXQgbGVhc3Qgb25lIHN0ZXAgaXMgYmVmb3JlIHRoZSBkZWZhdWx0IHN0ZXAsIHRoYXQgaXMgbm90IG9wdGlvbmFsXHJcbiAgICBjb25zdCBpbGxlZ2FsRGVmYXVsdFN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXHJcbiAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleClcclxuICAgICAgLnNvbWUoc3RlcCA9PiAhc3RlcC5vcHRpb25hbCk7XHJcblxyXG4gICAgaWYgKGlsbGVnYWxEZWZhdWx0U3RlcCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IHN0ZXAgaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9IGlzIGxvY2F0ZWQgYWZ0ZXIgYSBub24gb3B0aW9uYWwgc3RlcGApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlc2V0IHRoZSBzdGVwIGludGVybmFsIHN0YXRlXHJcbiAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgIHN0ZXAuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNldCB0aGUgZmlyc3Qgc3RlcCBhcyB0aGUgY3VycmVudCBzdGVwXHJcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXg7XHJcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzKTtcclxuICB9XHJcbn1cclxuIl19
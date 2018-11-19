/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NavigationMode } from './navigation-mode.interface';
import { MovingDirection } from '../util/moving-direction.enum';
/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
export class FreeNavigationMode extends NavigationMode {
    /**
     * Constructor
     *
     * @param {?} wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    constructor(wizardState) {
        super(wizardState);
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    canGoToStep(destinationIndex) {
        /** @type {?} */
        const hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        const movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        const canExitCurrentStep = (previous) => {
            return previous ? this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        };
        /** @type {?} */
        const canEnterDestinationStep = (previous) => {
            return previous ? this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    }
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
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
    goToStep(destinationIndex, preFinalize, postFinalize) {
        this.canGoToStep(destinationIndex).then(navigationAllowed => {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                /** @type {?} */
                const movingDirection = this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                this.wizardState.currentStep.completed = true;
                this.wizardState.currentStep.exit(movingDirection);
                this.wizardState.currentStep.selected = false;
                this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                this.wizardState.currentStep.enter(movingDirection);
                this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                this.wizardState.currentStep.exit(MovingDirection.Stay);
                this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        });
    }
    /**
     * @param {?} destinationIndex
     * @return {?}
     */
    isNavigable(destinationIndex) {
        return true;
    }
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    reset() {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error(`The wizard doesn't contain a step with index ${this.wizardState.defaultStepIndex}`);
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach(step => {
            step.completed = false;
            step.selected = false;
        });
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZS1uYXZpZ2F0aW9uLW1vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvbmF2aWdhdGlvbi9mcmVlLW5hdmlnYXRpb24tbW9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztBQVU5RCxNQUFNLHlCQUEwQixTQUFRLGNBQWM7Ozs7OztJQU1wRCxZQUFZLFdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7Ozs7Ozs7O0lBV0QsV0FBVyxDQUFDLGdCQUF3Qjs7Y0FDNUIsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDOztjQUVwRCxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7Y0FFdkUsa0JBQWtCLEdBQUcsQ0FBQyxRQUFpQixFQUFFLEVBQUU7WUFDL0MsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RyxDQUFDOztjQUVLLHVCQUF1QixHQUFHLENBQUMsUUFBaUIsRUFBRSxFQUFFO1lBQ3BELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3SCxDQUFDO1FBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDeEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JELFFBQVEsQ0FBQyxnQkFBd0IsRUFBRSxXQUFnQyxFQUFFLFlBQWlDO1FBQ3BHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUMxRCxJQUFJLGlCQUFpQixFQUFFOzs7c0JBRWYsZUFBZSxHQUFvQixJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO2dCQUU5Rix3QkFBd0I7Z0JBQ3hCLElBQUksV0FBVyxFQUFFO29CQUNmLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDcEI7Z0JBRUQscUJBQXFCO2dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBRTlDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7Z0JBRXJELGtCQUFrQjtnQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUU3Qyx3QkFBd0I7Z0JBQ3hCLElBQUksWUFBWSxFQUFFO29CQUNoQixZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JCO2FBQ0Y7aUJBQU07Z0JBQ0wsOERBQThEO2dCQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxnQkFBd0I7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBT0QsS0FBSztRQUNILGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ2hFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ3RHO1FBRUQsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILHlDQUF5QztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEEgW1tOYXZpZ2F0aW9uTW9kZV1dLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgd2l0aG91dCBhbnkgbGltaXRhdGlvbnMsXHJcbiAqIGFzIGxvbmcgYXMgdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnJlZU5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIG1vZGVsL3N0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XHJcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXHJcbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcclxuICAgKiAtIGl0IGV4aXN0c1xyXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGNhbkV4aXRDdXJyZW50U3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNhbkV4aXRTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxyXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXHJcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgKiBXaGVuIGVudGVyaW5nIHRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgY29tcGxldGVkXHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkXHJcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBzZXQgYXMgc2VsZWN0ZWRcclxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGVudGVyZWRcclxuICAgKlxyXG4gICAqIFdoZW4gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY291bGRuJ3QgYmUgZW50ZXJlZCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxyXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgYW5kIGVudGVyZWQgaW4gdGhlIGRpcmVjdGlvbiBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgZW50ZXJlZFxyXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxyXG4gICAqIEBwYXJhbSBwb3N0RmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxyXG4gICAqL1xyXG4gIGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xyXG4gICAgdGhpcy5jYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4KS50aGVuKG5hdmlnYXRpb25BbGxvd2VkID0+IHtcclxuICAgICAgaWYgKG5hdmlnYXRpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cclxuICAgICAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcclxuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQobW92aW5nRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IGRlc3RpbmF0aW9uSW5kZXg7XHJcblxyXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIobW92aW5nRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xyXG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxyXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxyXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcclxuICAgKi9cclxuICByZXNldCgpOiB2b2lkIHtcclxuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcclxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXNldCB0aGUgc3RlcCBpbnRlcm5hbCBzdGF0ZVxyXG4gICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGZpcnN0IHN0ZXAgYXMgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4O1xyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
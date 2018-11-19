/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class StrictNavigationMode extends NavigationMode {
    /**
     * Constructor
     *
     * @param {?} wizardState The state of the wizard, that is configured with this navigation mode
     */
    constructor(wizardState) {
        super(wizardState);
    }
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
        /** @type {?} */
        const allPreviousStepsComplete = (previous) => {
            if (previous) {
                return Promise.resolve(this.wizardState.wizardSteps
                    .filter((step, index) => index < destinationIndex && index !== this.wizardState.currentStepIndex)
                    .every(step => step.completed || step.optional));
            }
            else {
                return Promise.resolve(false);
            }
        };
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(allPreviousStepsComplete);
    }
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
    goToStep(destinationIndex, preFinalize, postFinalize) {
        this.canGoToStep(destinationIndex).then(navigationAllowed => {
            if (navigationAllowed) {
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
                // set all steps after the destination step to incomplete
                this.wizardState.wizardSteps
                    .filter((step, index) => this.wizardState.currentStepIndex > destinationIndex && index > destinationIndex)
                    .forEach(step => step.completed = false);
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
        // a wizard step can be navigated to through the navigation bar, iff it's located before the current wizard step
        return destinationIndex < this.wizardState.currentStepIndex;
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
        // at least one step is before the default step, that is not optional
        /** @type {?} */
        const illegalDefaultStep = this.wizardState.wizardSteps
            .filter((step, index) => index < this.wizardState.defaultStepIndex)
            .some(step => !step.optional);
        if (illegalDefaultStep) {
            throw new Error(`The default step index ${this.wizardState.defaultStepIndex} is located after a non optional step`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaWN0LW5hdmlnYXRpb24tbW9kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0aW9uL3N0cmljdC1uYXZpZ2F0aW9uLW1vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7OztBQVk5RCxNQUFNLDJCQUE0QixTQUFRLGNBQWM7Ozs7OztJQU10RCxZQUFZLFdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7Ozs7Ozs7OztJQVlELFdBQVcsQ0FBQyxnQkFBd0I7O2NBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7Y0FFcEQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7O2NBRXZFLGtCQUFrQixHQUFHLENBQUMsUUFBaUIsRUFBRSxFQUFFO1lBQy9DLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkcsQ0FBQzs7Y0FFSyx1QkFBdUIsR0FBRyxDQUFDLFFBQWlCLEVBQUUsRUFBRTtZQUNwRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0gsQ0FBQzs7Y0FFSyx3QkFBd0Is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c0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRoIHN0cmljdCBsaW1pdGF0aW9ucy5cclxuICogVGhlIHVzZXIgY2FuIG9ubHkgbmF2aWdhdGlvbiB0byBhIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAsIGlmOlxyXG4gKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAqIC0gYWxsIHByZXZpb3VzIHN0ZXBzIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGhhdmUgYmVlbiBjb21wbGV0ZWQgb3IgYXJlIG9wdGlvbmFsXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmljdE5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XHJcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXHJcbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcclxuICAgKiAtIGl0IGV4aXN0c1xyXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKiAtIGFsbCBwcmV2aW91cyBzdGVwcyB0byB0aGUgZGVzdGluYXRpb24gc3RlcCBoYXZlIGJlZW4gY29tcGxldGVkIG9yIGFyZSBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkLCBmYWxzZSBvdGhlcndpc2VcclxuICAgKi9cclxuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGhhc1N0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAoZGVzdGluYXRpb25JbmRleCk7XHJcblxyXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XHJcblxyXG4gICAgY29uc3QgY2FuRXhpdEN1cnJlbnRTdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkuY2FuRW50ZXJTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhbGxQcmV2aW91c1N0ZXBzQ29tcGxldGUgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHByZXZpb3VzKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXHJcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4ICYmIGluZGV4ICE9PSB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXgpXHJcbiAgICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxyXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXHJcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKVxyXG4gICAgICAudGhlbihhbGxQcmV2aW91c1N0ZXBzQ29tcGxldGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZXMgdG8gZW50ZXIgdGhlIHdpemFyZCBzdGVwIHdpdGggdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAqIFdoZW4gZW50ZXJpbmcgdGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyB1bnNlbGVjdGVkXHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWRcclxuICAgKiAtIGFsbCBzdGVwcyBiZXR3ZWVuIHRoZSBvbGQgY3VycmVudCBzdGVwIGFuZCB0aGUgZGVzdGluYXRpb24gc3RlcCBhcmUgbWFya2VkIGFzIGluY29tcGxldGVcclxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIHNldCBhcyBzZWxlY3RlZFxyXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgZW50ZXJlZFxyXG4gICAqXHJcbiAgICogV2hlbiB0aGUgZGVzdGluYXRpb24gc3RlcCBjb3VsZG4ndCBiZSBlbnRlcmVkLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XHJcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBhbmQgZW50ZXJlZCBpbiB0aGUgZGlyZWN0aW9uIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXHJcbiAgICogQHBhcmFtIHByZUZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXHJcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXHJcbiAgICovXHJcbiAgZ29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyLCBwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXgpLnRoZW4obmF2aWdhdGlvbkFsbG93ZWQgPT4ge1xyXG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcclxuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQobW92aW5nRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHNldCBhbGwgc3RlcHMgYWZ0ZXIgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgdG8gaW5jb21wbGV0ZVxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcclxuICAgICAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPiBkZXN0aW5hdGlvbkluZGV4ICYmIGluZGV4ID4gZGVzdGluYXRpb25JbmRleClcclxuICAgICAgICAgIC5mb3JFYWNoKHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgPSBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IGRlc3RpbmF0aW9uSW5kZXg7XHJcblxyXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIobW92aW5nRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xyXG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgLy8gYSB3aXphcmQgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvIHRocm91Z2ggdGhlIG5hdmlnYXRpb24gYmFyLCBpZmYgaXQncyBsb2NhdGVkIGJlZm9yZSB0aGUgY3VycmVudCB3aXphcmQgc3RlcFxyXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uSW5kZXggPCB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxyXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxyXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcclxuICAgKi9cclxuICByZXNldCgpOiB2b2lkIHtcclxuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcclxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdCBsZWFzdCBvbmUgc3RlcCBpcyBiZWZvcmUgdGhlIGRlZmF1bHQgc3RlcCwgdGhhdCBpcyBub3Qgb3B0aW9uYWxcclxuICAgIGNvbnN0IGlsbGVnYWxEZWZhdWx0U3RlcCA9IHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcclxuICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IGluZGV4IDwgdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KVxyXG4gICAgICAuc29tZShzdGVwID0+ICFzdGVwLm9wdGlvbmFsKTtcclxuXHJcbiAgICBpZiAoaWxsZWdhbERlZmF1bHRTdGVwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgc3RlcCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH0gaXMgbG9jYXRlZCBhZnRlciBhIG5vbiBvcHRpb25hbCBzdGVwYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcclxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgc3RlcC5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xyXG4gIH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Created by marc on 09.01.17.
 */
import { Directive, EventEmitter, HostListener, Input, Optional, Output } from '@angular/core';
import { isStepOffset } from '../util/step-offset.interface';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
import { isStepId } from '../util/step-id.interface';
import { isStepIndex } from '../util/step-index.interface';
/**
 * The `awGoToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
 * ```
 *
 * With unique step id:
 *
 * ```html
 * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step:
 *
 * ```html
 * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
export class GoToStepDirective {
    /**
     * Constructor
     *
     * @param {?} wizardState The wizard state
     * @param {?} wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    constructor(wizardState, wizardStep) {
        this.wizardState = wizardState;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    /**
     * A convenience name for `preFinalize`
     *
     * @param {?} emitter The [[EventEmitter]] to be set
     * @return {?}
     */
    set finalize(emitter) {
        /* istanbul ignore next */
        this.preFinalize = emitter;
    }
    /**
     * A convenience field for `preFinalize`
     * @return {?}
     */
    get finalize() {
        return this.preFinalize;
    }
    /**
     * The navigation mode
     * @return {?}
     */
    get navigationMode() {
        return this.wizardState.navigationMode;
    }
    /**
     * Returns the destination step of this directive as an absolute step index inside the wizard
     *
     * @throws If `targetStep` is of an unknown type an `Error` is thrown
     * @return {?} The index of the destination step
     */
    get destinationStep() {
        /** @type {?} */
        let destinationStep;
        if (isStepIndex(this.targetStep)) {
            destinationStep = this.targetStep.stepIndex;
        }
        else if (isStepId(this.targetStep)) {
            destinationStep = this.wizardState.getIndexOfStepWithId(this.targetStep.stepId);
        }
        else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
            destinationStep = this.wizardState.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
        }
        else if (this.targetStep instanceof WizardStep) {
            destinationStep = this.wizardState.getIndexOfStep(this.targetStep);
        }
        else {
            throw new Error(`Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId`);
        }
        return destinationStep;
    }
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    }
}
GoToStepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awGoToStep]'
            },] }
];
GoToStepDirective.ctorParameters = () => [
    { type: WizardState },
    { type: WizardStep, decorators: [{ type: Optional }] }
];
GoToStepDirective.propDecorators = {
    preFinalize: [{ type: Output }],
    postFinalize: [{ type: Output }],
    finalize: [{ type: Output }],
    targetStep: [{ type: Input, args: ['awGoToStep',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    GoToStepDirective.prototype.preFinalize;
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    GoToStepDirective.prototype.postFinalize;
    /**
     * The destination step, to which the wizard should navigate, after the component, having this directive has been activated.
     * This destination step can be given either as a [[WizardStep]] containing the step directly,
     * a [[StepOffset]] between the current step and the `wizardStep`, in which this directive has been used,
     * or a step index as a number or string
     * @type {?}
     */
    GoToStepDirective.prototype.targetStep;
    /** @type {?} */
    GoToStepDirective.prototype.wizardState;
    /** @type {?} */
    GoToStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdG8tc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxZQUFZLEVBQWEsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRTdELE9BQU8sRUFBQyxRQUFRLEVBQVMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDcEUsTUFBTTs7Ozs7OztJQXNESixZQUFvQixXQUF3QixFQUFzQixVQUFzQjtRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFzQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBckR4Rjs7V0FFRztRQUVJLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUQ7O1dBRUc7UUFFSSxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBNEM3RCxDQUFDOzs7Ozs7O0lBckNELElBQ1csUUFBUSxDQUFDLE9BQTJCO1FBQzdDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7OztJQUtELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFlRCxJQUFZLGNBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7O0lBaUJELElBQUksZUFBZTs7WUFDYixlQUF1QjtRQUUzQixJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDaEMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1NBQzdDO2FBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3BDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakY7YUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDcEUsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztTQUNqRzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsWUFBWSxVQUFVLEVBQUU7WUFDaEQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO1NBQ2hHO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQzs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7O1lBdkNPLFdBQVc7WUFEWCxVQUFVLHVCQStGK0IsUUFBUTs7OzBCQWxEdEQsTUFBTTsyQkFNTixNQUFNO3VCQVFOLE1BQU07eUJBb0JOLEtBQUssU0FBQyxZQUFZO3NCQStDbEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQWpGakMsd0NBQzREOzs7OztJQUs1RCx5Q0FDNkQ7Ozs7Ozs7O0lBMkI3RCx1Q0FDZ0U7O0lBZXBELHdDQUFnQzs7SUFBRSx1Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBtYXJjIG9uIDA5LjAxLjE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2lzU3RlcE9mZnNldCwgU3RlcE9mZnNldH0gZnJvbSAnLi4vdXRpbC9zdGVwLW9mZnNldC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge2lzU3RlcElkLCBTdGVwSWR9IGZyb20gJy4uL3V0aWwvc3RlcC1pZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge2lzU3RlcEluZGV4LCBTdGVwSW5kZXh9IGZyb20gJy4uL3V0aWwvc3RlcC1pbmRleC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdHb1RvU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIGEgZ2l2ZW4gc3RlcC5cclxuICogVGhpcyBzdGVwIGNhbiBiZSBkZWZpbmVkIGluIG9uZSBvZiBtdWx0aXBsZSBmb3JtYXRzXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogV2l0aCBhYnNvbHV0ZSBzdGVwIGluZGV4OlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwSW5kZXg6IGFic29sdXRlIHN0ZXAgaW5kZXggfVwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggdW5pcXVlIHN0ZXAgaWQ6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBJZDogJ3N0ZXAgaWQgb2YgZGVzdGluYXRpb24gc3RlcCcgfVwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYSB3aXphcmQgc3RlcCBvYmplY3Q6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ3aXphcmQgc3RlcCBvYmplY3RcIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGFuIG9mZnNldCB0byB0aGUgZGVmaW5pbmcgc3RlcDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcE9mZnNldDogb2Zmc2V0IH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3R29Ub1N0ZXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR29Ub1N0ZXBEaXJlY3RpdmUge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwcmVGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwb3N0RmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb252ZW5pZW5jZSBuYW1lIGZvciBgcHJlRmluYWxpemVgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRvIHdoaWNoIHRoZSB3aXphcmQgc2hvdWxkIG5hdmlnYXRlLCBhZnRlciB0aGUgY29tcG9uZW50LCBoYXZpbmcgdGhpcyBkaXJlY3RpdmUgaGFzIGJlZW4gYWN0aXZhdGVkLlxyXG4gICAqIFRoaXMgZGVzdGluYXRpb24gc3RlcCBjYW4gYmUgZ2l2ZW4gZWl0aGVyIGFzIGEgW1tXaXphcmRTdGVwXV0gY29udGFpbmluZyB0aGUgc3RlcCBkaXJlY3RseSxcclxuICAgKiBhIFtbU3RlcE9mZnNldF1dIGJldHdlZW4gdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGB3aXphcmRTdGVwYCwgaW4gd2hpY2ggdGhpcyBkaXJlY3RpdmUgaGFzIGJlZW4gdXNlZCxcclxuICAgKiBvciBhIHN0ZXAgaW5kZXggYXMgYSBudW1iZXIgb3Igc3RyaW5nXHJcbiAgICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcbiAgQElucHV0KCdhd0dvVG9TdGVwJylcclxuICBwdWJsaWMgdGFyZ2V0U3RlcDogV2l6YXJkU3RlcCB8IFN0ZXBPZmZzZXQgfCBTdGVwSW5kZXggfCBTdGVwSWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcclxuICAgKi9cclxuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZVxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggY29udGFpbnMgdGhpcyBbW0dvVG9TdGVwRGlyZWN0aXZlXV1cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSwgQE9wdGlvbmFsKCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBkZXN0aW5hdGlvbiBzdGVwIG9mIHRoaXMgZGlyZWN0aXZlIGFzIGFuIGFic29sdXRlIHN0ZXAgaW5kZXggaW5zaWRlIHRoZSB3aXphcmRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gICAqIEB0aHJvd3MgSWYgYHRhcmdldFN0ZXBgIGlzIG9mIGFuIHVua25vd24gdHlwZSBhbiBgRXJyb3JgIGlzIHRocm93blxyXG4gICAqL1xyXG4gIGdldCBkZXN0aW5hdGlvblN0ZXAoKTogbnVtYmVyIHtcclxuICAgIGxldCBkZXN0aW5hdGlvblN0ZXA6IG51bWJlcjtcclxuXHJcbiAgICBpZiAoaXNTdGVwSW5kZXgodGhpcy50YXJnZXRTdGVwKSkge1xyXG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLnRhcmdldFN0ZXAuc3RlcEluZGV4O1xyXG4gICAgfSBlbHNlIGlmIChpc1N0ZXBJZCh0aGlzLnRhcmdldFN0ZXApKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0SW5kZXhPZlN0ZXBXaXRoSWQodGhpcy50YXJnZXRTdGVwLnN0ZXBJZCk7XHJcbiAgICB9IGVsc2UgaWYgKGlzU3RlcE9mZnNldCh0aGlzLnRhcmdldFN0ZXApICYmIHRoaXMud2l6YXJkU3RlcCAhPT0gbnVsbCkge1xyXG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHRoaXMud2l6YXJkU3RlcCkgKyB0aGlzLnRhcmdldFN0ZXAuc3RlcE9mZnNldDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXRTdGVwIGluc3RhbmNlb2YgV2l6YXJkU3RlcCkge1xyXG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHRoaXMudGFyZ2V0U3RlcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElucHV0ICd0YXJnZXRTdGVwJyBpcyBuZWl0aGVyIGEgV2l6YXJkU3RlcCwgU3RlcE9mZnNldCwgU3RlcEluZGV4IG9yIFN0ZXBJZGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXN0aW5hdGlvblN0ZXA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0ZW5lciBtZXRob2QgZm9yIGBjbGlja2AgZXZlbnRzIG9uIHRoZSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhlIHdpemFyZCB3aWxsIHRyeSB0byB0cmFuc2l0aW9uIHRvIHRoZSBgZGVzdGluYXRpb25TdGVwYFxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5nb1RvU3RlcCh0aGlzLmRlc3RpbmF0aW9uU3RlcCwgdGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xyXG4gIH1cclxufVxyXG4iXX0=
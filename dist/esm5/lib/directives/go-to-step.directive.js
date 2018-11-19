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
var GoToStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    function GoToStepDirective(wizardState, wizardStep) {
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
    Object.defineProperty(GoToStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: /**
         * A convenience field for `preFinalize`
         * @return {?}
         */
        function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience name for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "destinationStep", {
        /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @returns The index of the destination step
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         */
        get: /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         * @return {?} The index of the destination step
         */
        function () {
            /** @type {?} */
            var destinationStep;
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
                throw new Error("Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId");
            }
            return destinationStep;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    GoToStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    };
    GoToStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awGoToStep]'
                },] }
    ];
    GoToStepDirective.ctorParameters = function () { return [
        { type: WizardState },
        { type: WizardStep, decorators: [{ type: Optional }] }
    ]; };
    GoToStepDirective.propDecorators = {
        preFinalize: [{ type: Output }],
        postFinalize: [{ type: Output }],
        finalize: [{ type: Output }],
        targetStep: [{ type: Input, args: ['awGoToStep',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return GoToStepDirective;
}());
export { GoToStepDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdG8tc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBQyxZQUFZLEVBQWEsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRTdELE9BQU8sRUFBQyxRQUFRLEVBQVMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDcEU7SUFtREU7Ozs7O09BS0c7SUFDSCwyQkFBb0IsV0FBd0IsRUFBc0IsVUFBc0I7UUFBcEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXJEeEY7O1dBRUc7UUFFSSxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVEOztXQUVHO1FBRUksaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTRDN0QsQ0FBQztJQXJDRCxzQkFDVyx1Q0FBUTtRQUtuQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO1FBaEJEOzs7O1dBSUc7Ozs7Ozs7UUFDSCxVQUNvQixPQUEyQjtZQUM3QywwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFzQkQsc0JBQVksNkNBQWM7UUFIMUI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBaUJELHNCQUFJLDhDQUFlO1FBTm5COzs7OztXQUtHOzs7Ozs7O1FBQ0g7O2dCQUNNLGVBQXVCO1lBRTNCLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDaEMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO2FBQzdDO2lCQUFNLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDcEMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqRjtpQkFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BFLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7YUFDakc7aUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxZQUFZLFVBQVUsRUFBRTtnQkFDaEQsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUM7YUFDaEc7WUFFRCxPQUFPLGVBQWUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRzs7Ozs7OztJQUVILG1DQUFPOzs7Ozs7SUFEUCxVQUNRLEtBQVk7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRixDQUFDOztnQkEzRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7O2dCQXZDTyxXQUFXO2dCQURYLFVBQVUsdUJBK0YrQixRQUFROzs7OEJBbER0RCxNQUFNOytCQU1OLE1BQU07MkJBUU4sTUFBTTs2QkFvQk4sS0FBSyxTQUFDLFlBQVk7MEJBK0NsQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQUluQyx3QkFBQztDQUFBLEFBNUZELElBNEZDO1NBekZZLGlCQUFpQjs7Ozs7O0lBSTVCLHdDQUM0RDs7Ozs7SUFLNUQseUNBQzZEOzs7Ozs7OztJQTJCN0QsdUNBQ2dFOztJQWVwRCx3Q0FBZ0M7O0lBQUUsdUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbWFyYyBvbiAwOS4wMS4xNy5cclxuICovXHJcblxyXG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtpc1N0ZXBPZmZzZXQsIFN0ZXBPZmZzZXR9IGZyb20gJy4uL3V0aWwvc3RlcC1vZmZzZXQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtpc1N0ZXBJZCwgU3RlcElkfSBmcm9tICcuLi91dGlsL3N0ZXAtaWQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtpc1N0ZXBJbmRleCwgU3RlcEluZGV4fSBmcm9tICcuLi91dGlsL3N0ZXAtaW5kZXguaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3R29Ub1N0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byBhIGdpdmVuIHN0ZXAuXHJcbiAqIFRoaXMgc3RlcCBjYW4gYmUgZGVmaW5lZCBpbiBvbmUgb2YgbXVsdGlwbGUgZm9ybWF0c1xyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIFdpdGggYWJzb2x1dGUgc3RlcCBpbmRleDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcEluZGV4OiBhYnNvbHV0ZSBzdGVwIGluZGV4IH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIHVuaXF1ZSBzdGVwIGlkOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwSWQ6ICdzdGVwIGlkIG9mIGRlc3RpbmF0aW9uIHN0ZXAnIH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGEgd2l6YXJkIHN0ZXAgb2JqZWN0OlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwid2l6YXJkIHN0ZXAgb2JqZWN0XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBhbiBvZmZzZXQgdG8gdGhlIGRlZmluaW5nIHN0ZXA6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBPZmZzZXQ6IG9mZnNldCB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd0dvVG9TdGVwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdvVG9TdGVwRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcHJlRmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBhZnRlciB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcG9zdEZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udmVuaWVuY2UgbmFtZSBmb3IgYHByZUZpbmFsaXplYFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICB0aGlzLnByZUZpbmFsaXplID0gZW1pdHRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGZpbmFsaXplKCk6IEV2ZW50RW1pdHRlcjx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0byB3aGljaCB0aGUgd2l6YXJkIHNob3VsZCBuYXZpZ2F0ZSwgYWZ0ZXIgdGhlIGNvbXBvbmVudCwgaGF2aW5nIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIGFjdGl2YXRlZC5cclxuICAgKiBUaGlzIGRlc3RpbmF0aW9uIHN0ZXAgY2FuIGJlIGdpdmVuIGVpdGhlciBhcyBhIFtbV2l6YXJkU3RlcF1dIGNvbnRhaW5pbmcgdGhlIHN0ZXAgZGlyZWN0bHksXHJcbiAgICogYSBbW1N0ZXBPZmZzZXRdXSBiZXR3ZWVuIHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBgd2l6YXJkU3RlcGAsIGluIHdoaWNoIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIHVzZWQsXHJcbiAgICogb3IgYSBzdGVwIGluZGV4IGFzIGEgbnVtYmVyIG9yIHN0cmluZ1xyXG4gICAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnYXdHb1RvU3RlcCcpXHJcbiAgcHVibGljIHRhcmdldFN0ZXA6IFdpemFyZFN0ZXAgfCBTdGVwT2Zmc2V0IHwgU3RlcEluZGV4IHwgU3RlcElkO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGVcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIGNvbnRhaW5zIHRoaXMgW1tHb1RvU3RlcERpcmVjdGl2ZV1dXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUsIEBPcHRpb25hbCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZGVzdGluYXRpb24gc3RlcCBvZiB0aGlzIGRpcmVjdGl2ZSBhcyBhbiBhYnNvbHV0ZSBzdGVwIGluZGV4IGluc2lkZSB0aGUgd2l6YXJkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKiBAdGhyb3dzIElmIGB0YXJnZXRTdGVwYCBpcyBvZiBhbiB1bmtub3duIHR5cGUgYW4gYEVycm9yYCBpcyB0aHJvd25cclxuICAgKi9cclxuICBnZXQgZGVzdGluYXRpb25TdGVwKCk6IG51bWJlciB7XHJcbiAgICBsZXQgZGVzdGluYXRpb25TdGVwOiBudW1iZXI7XHJcblxyXG4gICAgaWYgKGlzU3RlcEluZGV4KHRoaXMudGFyZ2V0U3RlcCkpIHtcclxuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy50YXJnZXRTdGVwLnN0ZXBJbmRleDtcclxuICAgIH0gZWxzZSBpZiAoaXNTdGVwSWQodGhpcy50YXJnZXRTdGVwKSkge1xyXG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwV2l0aElkKHRoaXMudGFyZ2V0U3RlcC5zdGVwSWQpO1xyXG4gICAgfSBlbHNlIGlmIChpc1N0ZXBPZmZzZXQodGhpcy50YXJnZXRTdGVwKSAmJiB0aGlzLndpemFyZFN0ZXAgIT09IG51bGwpIHtcclxuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLndpemFyZFN0ZXApICsgdGhpcy50YXJnZXRTdGVwLnN0ZXBPZmZzZXQ7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0U3RlcCBpbnN0YW5jZW9mIFdpemFyZFN0ZXApIHtcclxuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLnRhcmdldFN0ZXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnB1dCAndGFyZ2V0U3RlcCcgaXMgbmVpdGhlciBhIFdpemFyZFN0ZXAsIFN0ZXBPZmZzZXQsIFN0ZXBJbmRleCBvciBTdGVwSWRgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVzdGluYXRpb25TdGVwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICogQWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRoZSB3aXphcmQgd2lsbCB0cnkgdG8gdHJhbnNpdGlvbiB0byB0aGUgYGRlc3RpbmF0aW9uU3RlcGBcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuZ29Ub1N0ZXAodGhpcy5kZXN0aW5hdGlvblN0ZXAsIHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcclxuICB9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var NextStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function NextStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    Object.defineProperty(NextStepDirective.prototype, "finalize", {
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
    Object.defineProperty(NextStepDirective.prototype, "navigationMode", {
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
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    NextStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToNextStep(this.preFinalize, this.postFinalize);
    };
    NextStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awNextStep]'
                },] }
    ];
    NextStepDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    NextStepDirective.propDecorators = {
        preFinalize: [{ type: Output }],
        postFinalize: [{ type: Output }],
        finalize: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NextStepDirective;
}());
export { NextStepDirective };
if (false) {
    /**
     * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    NextStepDirective.prototype.preFinalize;
    /**
     * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
     * @type {?}
     */
    NextStepDirective.prototype.postFinalize;
    /** @type {?} */
    NextStepDirective.prototype.wizardState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV4dC1zdGVwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7QUFhN0Q7SUF5Q0U7Ozs7T0FJRztJQUNILDJCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTFDNUM7O1dBRUc7UUFFSSxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTVEOztXQUVHO1FBRUksaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWdDYixDQUFDO0lBekJqRCxzQkFDVyx1Q0FBUTtRQUtuQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO1FBaEJEOzs7O1dBSUc7Ozs7Ozs7UUFDSCxVQUNvQixPQUEyQjtZQUM3QywwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFZRCxzQkFBWSw2Q0FBYztRQUgxQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFTRDs7O09BR0c7Ozs7Ozs7SUFDZ0MsbUNBQU87Ozs7OztJQUExQyxVQUEyQyxLQUFZO1FBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7Z0JBZk8sV0FBVzs7OzhCQW9CaEIsTUFBTTsrQkFNTixNQUFNOzJCQVFOLE1BQU07MEJBK0JOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBR25DLHdCQUFDO0NBQUEsQUF2REQsSUF1REM7U0FwRFksaUJBQWlCOzs7Ozs7SUFJNUIsd0NBQzREOzs7OztJQUs1RCx5Q0FDNkQ7O0lBZ0NqRCx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3TmV4dFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgbmV4dCBzdGVwLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGJ1dHRvbiBhd05leHRTdGVwIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdOZXh0U3RlcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXh0U3RlcERpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnZlbmllbmNlIG5hbWUgZm9yIGBwcmVGaW5hbGl6ZWBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbWl0dGVyIFRoZSBbW0V2ZW50RW1pdHRlcl1dIHRvIGJlIHNldFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzZXQgZmluYWxpemUoZW1pdHRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+KSB7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnZlbmllbmNlIGZpZWxkIGZvciBgcHJlRmluYWxpemVgXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJlRmluYWxpemU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgd2l6YXJkXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0ZW5lciBtZXRob2QgZm9yIGBjbGlja2AgZXZlbnRzIG9uIHRoZSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhlIHdpemFyZCB3aWxsIHRyeSB0byB0cmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0ZXBcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLmdvVG9OZXh0U3RlcCh0aGlzLnByZUZpbmFsaXplLCB0aGlzLnBvc3RGaW5hbGl6ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
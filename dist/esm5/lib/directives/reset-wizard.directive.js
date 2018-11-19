/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var ResetWizardDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     */
    function ResetWizardDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new EventEmitter();
    }
    Object.defineProperty(ResetWizardDirective.prototype, "navigationMode", {
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
     * Resets the wizard
     */
    /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    ResetWizardDirective.prototype.onClick = /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.navigationMode.reset();
    };
    ResetWizardDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awResetWizard]'
                },] }
    ];
    ResetWizardDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    ResetWizardDirective.propDecorators = {
        finalize: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ResetWizardDirective;
}());
export { ResetWizardDirective };
if (false) {
    /**
     * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
     * @type {?}
     */
    ResetWizardDirective.prototype.finalize;
    /** @type {?} */
    ResetWizardDirective.prototype.wizardState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtd2l6YXJkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBZTdEO0lBaUJFOzs7O09BSUc7SUFDSCw4QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFsQjVDOztXQUVHO1FBRUksYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBY1QsQ0FBQztJQVRqRCxzQkFBWSxnREFBYztRQUgxQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFTRDs7T0FFRzs7Ozs7O0lBQ2dDLHNDQUFPOzs7OztJQUExQyxVQUEyQyxLQUFZO1FBQ3JELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7OztnQkFqQk8sV0FBVzs7OzJCQXNCaEIsTUFBTTswQkFvQk4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFNbkMsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTlCWSxvQkFBb0I7Ozs7OztJQUkvQix3Q0FDeUQ7O0lBYzdDLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdSZXNldFdpemFyZGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGUuXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGFjY2VwdHMgYW4gb3V0cHV0LCB3aGljaCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHNvbWUgY3VzdG9tIGNsZWFudXAgd29yayBkdXJpbmcgdGhlIHJlc2V0IHByb2Nlc3MuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIGF3UmVzZXRXaXphcmQgKGZpbmFsaXplKT1cImN1c3RvbSByZXNldCB0YXNrXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3UmVzZXRXaXphcmRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXRXaXphcmREaXJlY3RpdmUge1xyXG4gIC8qKlxyXG4gICAqIEFuIFtbRXZlbnRFbWl0dGVyXV0gY29udGFpbmluZyBzb21lIHRhc2tzIHRvIGJlIGRvbmUsIGRpcmVjdGx5IGJlZm9yZSB0aGUgd2l6YXJkIGlzIGJlaW5nIHJlc2V0XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcclxuICAgKi9cclxuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSB3aXphcmRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBkbyBzb21lIG9wdGlvbmFsIGNsZWFudXAgd29ya1xyXG4gICAgdGhpcy5maW5hbGl6ZS5lbWl0KCk7XHJcbiAgICAvLyByZXNldCB0aGUgd2l6YXJkIHRvIGl0cyBpbml0aWFsIHN0YXRlXHJcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
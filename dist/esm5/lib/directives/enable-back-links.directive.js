/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Host, Output } from '@angular/core';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var EnableBackLinksDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    function EnableBackLinksDirective(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    EnableBackLinksDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    };
    EnableBackLinksDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awEnableBackLinks]'
                },] }
    ];
    EnableBackLinksDirective.ctorParameters = function () { return [
        { type: WizardCompletionStep, decorators: [{ type: Host }] }
    ]; };
    EnableBackLinksDirective.propDecorators = {
        stepExit: [{ type: Output }]
    };
    return EnableBackLinksDirective;
}());
export { EnableBackLinksDirective };
if (false) {
    /**
     * This EventEmitter is called when the step is exited.
     * The bound method can be used to do cleanup work.
     * @type {?}
     */
    EnableBackLinksDirective.prototype.stepExit;
    /** @type {?} */
    EnableBackLinksDirective.prototype.completionStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvZW5hYmxlLWJhY2stbGlua3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUI5RTtJQVdFOzs7O09BSUc7SUFDSCxrQ0FBNEIsY0FBb0M7UUFBcEMsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBWmhFOzs7V0FHRztRQUVJLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQU9jLENBQUM7SUFFckU7O09BRUc7Ozs7O0lBQ0gsMkNBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9DLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7OztnQkF6Qk8sb0JBQW9CLHVCQXVDYixJQUFJOzs7MkJBUmhCLE1BQU07O0lBaUJULCtCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F0Qlksd0JBQXdCOzs7Ozs7O0lBS25DLDRDQUNzRDs7SUFPMUMsa0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3RW5hYmxlQmFja0xpbmtzYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gYWxsb3cgdGhlIHVzZXIgdG8gbGVhdmUgYSBbW1dpemFyZENvbXBsZXRpb25TdGVwXV0gYWZ0ZXIgaXMgaGFzIGJlZW4gZW50ZXJlZC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIGF3RW5hYmxlQmFja0xpbmtzIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJGaW5hbCBzdGVwXCIgYXdFbmFibGVCYWNrTGlua3M+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd0VuYWJsZUJhY2tMaW5rc10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgRXZlbnRFbWl0dGVyIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cclxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3RlcEV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wbGV0aW9uU3RlcCBUaGUgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGV4aXRhYmxlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGNvbXBsZXRpb25TdGVwOiBXaXphcmRDb21wbGV0aW9uU3RlcCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcclxuICAgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29tcGxldGlvblN0ZXAuY2FuRXhpdCA9IHRydWU7XHJcbiAgICB0aGlzLmNvbXBsZXRpb25TdGVwLnN0ZXBFeGl0ID0gdGhpcy5zdGVwRXhpdDtcclxuICB9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Host } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var SelectedStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which should be selected by default
     */
    function SelectedStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    SelectedStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.wizardStep.defaultSelected = true;
    };
    SelectedStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awSelectedStep]'
                },] }
    ];
    SelectedStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: Host }] }
    ]; };
    return SelectedStepDirective;
}());
export { SelectedStepDirective };
if (false) {
    /** @type {?} */
    SelectedStepDirective.prototype.wizardStep;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWV6RDtJQUlFOzs7O09BSUc7SUFDSCwrQkFBNEIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUNsRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsd0NBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN6QyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7Z0JBakJPLFVBQVUsdUJBd0JILElBQUk7O0lBU25CLDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FmWSxxQkFBcUI7OztJQU1wQiwyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd1NlbGVjdGVkU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIG9uIGEgW1tXaXphcmRTdGVwXV0gdG8gc2V0IGl0IGFzIHNlbGVjdGVkIGFmdGVyIHRoZSB3aXphcmQgaW5pdGlhbGlzYXRpb24gb3IgYSByZXNldC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJTdGVwIHRpdGxlXCIgYXdTZWxlY3RlZFN0ZXA+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdTZWxlY3RlZFN0ZXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgc2VsZWN0ZWQgYnkgZGVmYXVsdFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXHJcbiAgICovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLndpemFyZFN0ZXAuZGVmYXVsdFNlbGVjdGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19
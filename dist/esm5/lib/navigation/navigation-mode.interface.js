/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
var /**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
NavigationMode = /** @class */ (function () {
    function NavigationMode(wizardState) {
        this.wizardState = wizardState;
    }
    /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     */
    /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    NavigationMode.prototype.goToPreviousStep = /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    function (preFinalize, postFinalize) {
        if (this.wizardState.hasPreviousStep()) {
            this.goToStep(this.wizardState.currentStepIndex - 1, preFinalize, postFinalize);
        }
    };
    /**
     * Tries to transition the wizard to the next step from the `currentStep`
     */
    /**
     * Tries to transition the wizard to the next step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    NavigationMode.prototype.goToNextStep = /**
     * Tries to transition the wizard to the next step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    function (preFinalize, postFinalize) {
        if (this.wizardState.hasNextStep()) {
            this.goToStep(this.wizardState.currentStepIndex + 1, preFinalize, postFinalize);
        }
    };
    return NavigationMode;
}());
/**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
export { NavigationMode };
if (false) {
    /** @type {?} */
    NavigationMode.prototype.wizardState;
    /**
     * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
     *
     * @abstract
     * @param {?} destinationIndex The index of the destination step
     * @return {?} A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
     */
    NavigationMode.prototype.canGoToStep = function (destinationIndex) { };
    /**
     * Tries to transition to the wizard step, as denoted by the given destination index.
     * If this is not possible, the current wizard step should be exited and then reentered with `MovingDirection.Stay`
     *
     * @abstract
     * @param {?} destinationIndex The index of the destination step
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    NavigationMode.prototype.goToStep = function (destinationIndex, preFinalize, postFinalize) { };
    /**
     * Checks, whether the wizard step, located at the given index, is can be navigated to
     *
     * @abstract
     * @param {?} destinationIndex The index of the destination step
     * @return {?} True if the step can be navigated to, false otherwise
     */
    NavigationMode.prototype.isNavigable = function (destinationIndex) { };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @abstract
     * @return {?}
     */
    NavigationMode.prototype.reset = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7SUFDRSx3QkFBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDOUMsQ0FBQztJQW1DRDs7T0FFRzs7Ozs7OztJQUNILHlDQUFnQjs7Ozs7O0lBQWhCLFVBQWlCLFdBQWdDLEVBQUUsWUFBaUM7UUFDbEYsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gscUNBQVk7Ozs7OztJQUFaLFVBQWEsV0FBZ0MsRUFBRSxZQUFpQztRQUM5RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLENBQUMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakY7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDOzs7Ozs7Ozs7OztJQXJEYSxxQ0FBa0M7Ozs7Ozs7O0lBUzlDLHVFQUFpRTs7Ozs7Ozs7Ozs7SUFVakUsK0ZBQXVIOzs7Ozs7OztJQVF2SCx1RUFBd0Q7Ozs7Ozs7O0lBT3hELGlEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVyZmFjZSBkZXNjcmliaW5nIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXR5LCB3aGljaCBtdXN0IGJlIHByb3ZpZGVkIGJ5IGEgbmF2aWdhdGlvbiBtb2RlLlxyXG4gKiBBIG5hdmlnYXRpb24gbW9kZSBtYW5hZ2VzIHRoZSBuYXZpZ2F0aW9uIGJldHdlZW4gZGlmZmVyZW50IHdpemFyZCBzdGVwcywgdGhpcyBjb250YWlucyB0aGUgdmFsaWRhdGlvbiwgaWYgYSBzdGVwIHRyYW5zaXRpb24gY2FuIGJlIGRvbmVcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmF2aWdhdGlvbk1vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcywgd2hldGhlciBhIHdpemFyZCBzdGVwLCBhcyBkZWZpbmVkIGJ5IHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleCwgY2FuIGJlIHRyYW5zaXRpb25lZCB0by5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gYW5kIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdG8gdGhlIHdpemFyZCBzdGVwLCBhcyBkZW5vdGVkIGJ5IHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgKiBJZiB0aGlzIGlzIG5vdCBwb3NzaWJsZSwgdGhlIGN1cnJlbnQgd2l6YXJkIHN0ZXAgc2hvdWxkIGJlIGV4aXRlZCBhbmQgdGhlbiByZWVudGVyZWQgd2l0aCBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKi9cclxuICBhYnN0cmFjdCBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MsIHdoZXRoZXIgdGhlIHdpemFyZCBzdGVwLCBsb2NhdGVkIGF0IHRoZSBnaXZlbiBpbmRleCwgaXMgY2FuIGJlIG5hdmlnYXRlZCB0b1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvLCBmYWxzZSBvdGhlcndpc2VcclxuICAgKi9cclxuICBhYnN0cmFjdCBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxyXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxyXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcclxuICAgKi9cclxuICBhYnN0cmFjdCByZXNldCgpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBUcmllcyB0byB0cmFuc2l0aW9uIHRoZSB3aXphcmQgdG8gdGhlIHByZXZpb3VzIHN0ZXAgZnJvbSB0aGUgYGN1cnJlbnRTdGVwYFxyXG4gICAqL1xyXG4gIGdvVG9QcmV2aW91c1N0ZXAocHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMud2l6YXJkU3RhdGUuaGFzUHJldmlvdXNTdGVwKCkpIHtcclxuICAgICAgdGhpcy5nb1RvU3RlcCh0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggLSAxLCBwcmVGaW5hbGl6ZSwgcG9zdEZpbmFsaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdGhlIHdpemFyZCB0byB0aGUgbmV4dCBzdGVwIGZyb20gdGhlIGBjdXJyZW50U3RlcGBcclxuICAgKi9cclxuICBnb1RvTmV4dFN0ZXAocHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMud2l6YXJkU3RhdGUuaGFzTmV4dFN0ZXAoKSkge1xyXG4gICAgICB0aGlzLmdvVG9TdGVwKHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCArIDEsIHByZUZpbmFsaXplLCBwb3N0RmluYWxpemUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
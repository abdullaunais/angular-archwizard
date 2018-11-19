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
export class ResetWizardDirective {
    /**
     * Constructor
     *
     * @param {?} wizardState The wizard state
     */
    constructor(wizardState) {
        this.wizardState = wizardState;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new EventEmitter();
    }
    /**
     * The navigation mode
     * @return {?}
     */
    get navigationMode() {
        return this.wizardState.navigationMode;
    }
    /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.navigationMode.reset();
    }
}
ResetWizardDirective.decorators = [
    { type: Directive, args: [{
                selector: '[awResetWizard]'
            },] }
];
ResetWizardDirective.ctorParameters = () => [
    { type: WizardState }
];
ResetWizardDirective.propDecorators = {
    finalize: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
     * @type {?}
     */
    ResetWizardDirective.prototype.finalize;
    /** @type {?} */
    ResetWizardDirective.prototype.wizardState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtd2l6YXJkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBa0I3RCxNQUFNOzs7Ozs7SUFtQkosWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFsQjVDOztXQUVHO1FBRUksYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBY1QsQ0FBQzs7Ozs7SUFUakQsSUFBWSxjQUFjO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBWWtDLE9BQU8sQ0FBQyxLQUFZO1FBQ3JELGdDQUFnQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7O1lBakJPLFdBQVc7Ozt1QkFzQmhCLE1BQU07c0JBb0JOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFwQmpDLHdDQUN5RDs7SUFjN0MsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd1Jlc2V0V2l6YXJkYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gcmVzZXQgdGhlIHdpemFyZCB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cclxuICogVGhpcyBkaXJlY3RpdmUgYWNjZXB0cyBhbiBvdXRwdXQsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgc29tZSBjdXN0b20gY2xlYW51cCB3b3JrIGR1cmluZyB0aGUgcmVzZXQgcHJvY2Vzcy5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gYXdSZXNldFdpemFyZCAoZmluYWxpemUpPVwiY3VzdG9tIHJlc2V0IHRhc2tcIj4uLi48L2J1dHRvbj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdSZXNldFdpemFyZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFdpemFyZERpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogQW4gW1tFdmVudEVtaXR0ZXJdXSBjb250YWluaW5nIHNvbWUgdGFza3MgdG8gYmUgZG9uZSwgZGlyZWN0bHkgYmVmb3JlIHRoZSB3aXphcmQgaXMgYmVpbmcgcmVzZXRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgd2l6YXJkIHN0YXRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHdpemFyZFxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIGRvIHNvbWUgb3B0aW9uYWwgY2xlYW51cCB3b3JrXHJcbiAgICB0aGlzLmZpbmFsaXplLmVtaXQoKTtcclxuICAgIC8vIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGVcclxuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIl19
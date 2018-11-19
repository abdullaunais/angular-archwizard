/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Created by marc on 20.05.17.
 */
import { Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepComponent = /** @class */ (function (_super) {
    tslib_1.__extends(WizardCompletionStepComponent, _super);
    /**
     * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
     * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
     * leaving it again to a previous step.
     * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
     * as completed.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
     *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
     *    (stepEnter)="event emitter to be called when the wizard step is entered"
     *    (stepExit)="event emitter to be called when the wizard step is exited">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * ### Example
     *
     * ```html
     * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * With a navigation symbol from the `font-awesome` font:
     *
     * ```html
     * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * @author Marc Arndt
     */
    function WizardCompletionStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-wizard-completion-step',
                    template: "<ng-content></ng-content>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardCompletionStepComponent; }) },
                        { provide: WizardCompletionStep, useExisting: forwardRef(function () { return WizardCompletionStepComponent; }) }
                    ],
                    styles: ["aw-wizard-completion-step{height:auto;width:100%}"]
                }] }
    ];
    return WizardCompletionStepComponent;
}(WizardCompletionStep));
export { WizardCompletionStepComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDOUU7SUFVbUQseURBQW9CO0lBOUN2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQ0c7SUFDSDs7SUFXQSxDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMseUNBQW9EO29CQUVwRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBNkIsRUFBN0IsQ0FBNkIsQ0FBQyxFQUFDO3dCQUNuRixFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBNkIsRUFBN0IsQ0FBNkIsQ0FBQyxFQUFDO3FCQUM5Rjs7aUJBQ0Y7O0lBRUQsb0NBQUM7Q0FBQSxBQVhELENBVW1ELG9CQUFvQixHQUN0RTtTQURZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1hcmMgb24gMjAuMDUuMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgY29tcG9uZW50IGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIGNvbXBsZXRpb24vc3VjY2VzcyBzdGVwIGF0IHRoZSBlbmQgb2YgeW91ciB3aXphcmRcclxuICogQWZ0ZXIgYSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgaGFzIGJlZW4gZW50ZXJlZCwgaXQgaGFzIHRoZSBjaGFyYWN0ZXJpc3RpYyB0aGF0IHRoZSB1c2VyIGlzIGJsb2NrZWQgZnJvbVxyXG4gKiBsZWF2aW5nIGl0IGFnYWluIHRvIGEgcHJldmlvdXMgc3RlcC5cclxuICogSW4gYWRkaXRpb24gZW50ZXJpbmcgYSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgYXV0b21hdGljYWxseSBzZXRzIHRoZSBgYXctd2l6YXJkYCBhbmQgYWxsIHN0ZXBzIGluc2lkZSB0aGUgYGF3LXdpemFyZGBcclxuICogYXMgY29tcGxldGVkLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgW3N0ZXBUaXRsZV09XCJ0aXRsZSBvZiB0aGUgd2l6YXJkIHN0ZXBcIlxyXG4gKiAgICBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ25hdmlnYXRpb24gc3ltYm9sJywgZm9udEZhbWlseTogJ25hdmlnYXRpb24gc3ltYm9sIGZvbnQgZmFtaWx5JyB9XCJcclxuICogICAgKHN0ZXBFbnRlcik9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBlbnRlcmVkXCJcclxuICogICAgKHN0ZXBFeGl0KT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGV4aXRlZFwiPlxyXG4gKiAgICAuLi5cclxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJzEnIH1cIj5cclxuICogICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cclxuICogICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQtY29tcGxldGlvbi1zdGVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd3aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge3Byb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50KX0sXHJcbiAgICB7cHJvdmlkZTogV2l6YXJkQ29tcGxldGlvblN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50KX1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCBleHRlbmRzIFdpemFyZENvbXBsZXRpb25TdGVwIHtcclxufVxyXG4iXX0=
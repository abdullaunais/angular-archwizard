/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardCompletionStep } from '../util/wizard-completion-step.interface';
/**
 * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepDirective = /** @class */ (function (_super) {
    tslib_1.__extends(WizardCompletionStepDirective, _super);
    /**
     * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
     * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
     * leaving it again to a previous step.
     * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
     * as completed.
     *
     * ### Syntax
     *
     * ```html
     * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
     *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
     *    (stepEnter)="event emitter to be called when the wizard step is entered"
     *    (stepExit)="event emitter to be called when the wizard step is exited">
     *    ...
     * </div>
     * ```
     *
     * ### Example
     *
     * ```html
     * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
     *    ...
     * </div>
     * ```
     *
     * With a navigation symbol from the `font-awesome` font:
     *
     * ```html
     * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </div>
     * ```
     *
     * @author Marc Arndt
     */
    function WizardCompletionStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[awWizardCompletionStep]',
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardCompletionStepDirective; }) },
                        { provide: WizardCompletionStep, useExisting: forwardRef(function () { return WizardCompletionStepDirective; }) }
                    ]
                },] }
    ];
    return WizardCompletionStepDirective;
}(WizardCompletionStep));
export { WizardCompletionStepDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy93aXphcmQtY29tcGxldGlvbi1zdGVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDOUU7SUFPbUQseURBQW9CO0lBM0N2RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQ0c7SUFDSDs7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBNkIsRUFBN0IsQ0FBNkIsQ0FBQyxFQUFFO3dCQUNyRixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBNkIsRUFBN0IsQ0FBNkIsQ0FBQyxFQUFFO3FCQUNoRztpQkFDRjs7SUFFRCxvQ0FBQztDQUFBLEFBUkQsQ0FPbUQsb0JBQW9CLEdBQ3RFO1NBRFksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd1dpemFyZENvbXBsZXRpb25TdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgY29tcGxldGlvbi9zdWNjZXNzIHN0ZXAgYXQgdGhlIGVuZCBvZiB5b3VyIHdpemFyZFxyXG4gKiBBZnRlciBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBoYXMgYmVlbiBlbnRlcmVkLCBpdCBoYXMgdGhlIGNoYXJhY3RlcmlzdGljIHRoYXQgdGhlIHVzZXIgaXMgYmxvY2tlZCBmcm9tXHJcbiAqIGxlYXZpbmcgaXQgYWdhaW4gdG8gYSBwcmV2aW91cyBzdGVwLlxyXG4gKiBJbiBhZGRpdGlvbiBlbnRlcmluZyBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBhdXRvbWF0aWNhbGx5IHNldHMgdGhlIGB3aXphcmRgLCBhbmQgYWxsIHN0ZXBzIGluc2lkZSB0aGUgYHdpemFyZGAsXHJcbiAqIGFzIGNvbXBsZXRlZC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBbc3RlcFRpdGxlXT1cInRpdGxlIG9mIHRoZSB3aXphcmQgc3RlcFwiXHJcbiAqICAgIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnbmF2aWdhdGlvbiBzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxyXG4gKiAgICAoc3RlcEVudGVyKT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGVudGVyZWRcIlxyXG4gKiAgICAoc3RlcEV4aXQpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZXhpdGVkXCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnMScgfVwiPlxyXG4gKiAgICAuLi5cclxuICogPC9kaXY+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGEgbmF2aWdhdGlvbiBzeW1ib2wgZnJvbSB0aGUgYGZvbnQtYXdlc29tZWAgZm9udDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcmI3hmMWJhOycsIGZvbnRGYW1pbHk6ICdGb250QXdlc29tZScgfVwiPlxyXG4gKiAgICAuLi5cclxuICogPC9kaXY+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3V2l6YXJkQ29tcGxldGlvblN0ZXBdJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUpIH0sXHJcbiAgICB7IHByb3ZpZGU6IFdpemFyZENvbXBsZXRpb25TdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSkgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkQ29tcGxldGlvblN0ZXAge1xyXG59XHJcbiJdfQ==
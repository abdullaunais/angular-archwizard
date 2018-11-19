/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, HostBinding, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardState } from '../navigation/wizard-state.model';
/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
var WizardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param model The model for this wizard component
     */
    function WizardComponent(model) {
        this.model = model;
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         */
        this.navBarDirection = 'left-to-right';
        /**
         * The navigation mode used for transitioning between different steps.
         * The navigation mode can be either `strict`, `semi-strict` or `free`
         */
        this.navigationMode = 'strict';
        /**
         * The initially selected step, represented by its index
         */
        this.defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         */
        this.disableNavigationBar = false;
    }
    Object.defineProperty(WizardComponent.prototype, "horizontalOrientation", {
        /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @returns True if this wizard uses a horizontal orientation
         */
        get: /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @return {?} True if this wizard uses a horizontal orientation
         */
        function () {
            return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "verticalOrientation", {
        /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @returns True if this wizard uses a vertical orientation
         */
        get: /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @return {?} True if this wizard uses a vertical orientation
         */
        function () {
            return this.navBarLocation === 'left' || this.navBarLocation === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "navigation", {
        /**
         * The navigation mode for this wizard
         */
        get: /**
         * The navigation mode for this wizard
         * @return {?}
         */
        function () {
            return this.model.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the model after certain input values have changed
     *
     * @param changes The detected changes
     */
    /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
    WizardComponent.prototype.ngOnChanges = /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
    function (changes) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                /** @type {?} */
                var change = changes[propName];
                if (!change.firstChange) {
                    switch (propName) {
                        case 'defaultStepIndex':
                            this.model.defaultStepIndex = parseInt(change.currentValue, 10);
                            break;
                        case 'disableNavigationBar':
                            this.model.disableNavigationBar = change.currentValue;
                            break;
                        case 'navigationMode':
                            this.model.updateNavigationMode(change.currentValue);
                            break;
                        /* istanbul ignore next */
                        default:
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    WizardComponent.prototype.ngAfterContentInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        var _this = this;
        // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
        this.wizardSteps.changes.subscribe(function (changedWizardSteps) {
            _this.model.updateWizardSteps(changedWizardSteps.toArray());
        });
        // initialize the model
        this.model.disableNavigationBar = this.disableNavigationBar;
        this.model.defaultStepIndex = this.defaultStepIndex;
        this.model.updateWizardSteps(this.wizardSteps.toArray());
        this.model.updateNavigationMode(this.navigationMode);
        // finally reset the whole wizard state
        this.navigation.reset();
    };
    WizardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aw-wizard',
                    template: "<aw-wizard-navigation-bar\r\n  [direction]=\"navBarDirection\"\r\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\r\n  [ngClass]=\"{\r\n    vertical: navBarLocation == 'left',\r\n    horizontal: navBarLocation == 'top',\r\n    small: navBarLayout == 'small',\r\n    'large-filled': navBarLayout == 'large-filled',\r\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\r\n    'large-empty': navBarLayout == 'large-empty',\r\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\r\n  }\">\r\n</aw-wizard-navigation-bar>\r\n\r\n<div [ngClass]=\"{\r\n  'wizard-steps': true,\r\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\r\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\r\n}\">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n<aw-wizard-navigation-bar\r\n  [direction]=\"navBarDirection\"\r\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\r\n  [ngClass]=\"{\r\n    vertical: navBarLocation == 'right',\r\n    horizontal: navBarLocation == 'bottom',\r\n    small: navBarLayout == 'small',\r\n    'large-filled': navBarLayout == 'large-filled',\r\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\r\n    'large-empty': navBarLayout == 'large-empty',\r\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\r\n  }\">\r\n</aw-wizard-navigation-bar>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [WizardState],
                    styles: ["aw-wizard{display:flex;justify-content:flex-start}aw-wizard.vertical{flex-direction:row}aw-wizard.horizontal{flex-direction:column}aw-wizard .wizard-steps{top:0;display:flex}aw-wizard .wizard-steps.vertical{min-width:calc(100% - 280px);width:80%;height:100%;flex-direction:column}aw-wizard .wizard-steps.horizontal{width:100%;flex-direction:row}"]
                }] }
    ];
    WizardComponent.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    WizardComponent.propDecorators = {
        wizardSteps: [{ type: ContentChildren, args: [WizardStep,] }],
        navBarLocation: [{ type: Input }],
        navBarLayout: [{ type: Input }],
        navBarDirection: [{ type: Input }],
        navigationMode: [{ type: Input }],
        defaultStepIndex: [{ type: Input }],
        disableNavigationBar: [{ type: Input }],
        horizontalOrientation: [{ type: HostBinding, args: ['class.horizontal',] }],
        verticalOrientation: [{ type: HostBinding, args: ['class.vertical',] }]
    };
    return WizardComponent;
}());
export { WizardComponent };
if (false) {
    /**
     * A QueryList containing all [[WizardStep]]s inside this wizard
     * @type {?}
     */
    WizardComponent.prototype.wizardSteps;
    /**
     * The location of the navigation bar inside the wizard.
     * This location can be either top, bottom, left or right
     * @type {?}
     */
    WizardComponent.prototype.navBarLocation;
    /**
     * The layout of the navigation bar inside the wizard.
     * The layout can be either small, large-filled, large-empty or large-symbols
     * @type {?}
     */
    WizardComponent.prototype.navBarLayout;
    /**
     * The direction in which the steps inside the navigation bar should be shown.
     * The direction can be either `left-to-right` or `right-to-left`
     * @type {?}
     */
    WizardComponent.prototype.navBarDirection;
    /**
     * The navigation mode used for transitioning between different steps.
     * The navigation mode can be either `strict`, `semi-strict` or `free`
     * @type {?}
     */
    WizardComponent.prototype.navigationMode;
    /**
     * The initially selected step, represented by its index
     * @type {?}
     */
    WizardComponent.prototype.defaultStepIndex;
    /**
     * True, if the navigation bar shouldn't be used for navigating
     * @type {?}
     */
    WizardComponent.prototype.disableNavigationBar;
    /** @type {?} */
    WizardComponent.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixXQUFXLEVBQ1gsS0FBSyxFQUVMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0M3RDtJQW1GRTs7OztPQUlHO0lBQ0gseUJBQW1CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7UUExRXJDOzs7V0FHRztRQUVJLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRTlCOzs7V0FHRztRQUVJLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBRTlCOzs7V0FHRztRQUVJLG9CQUFlLEdBQUcsZUFBZSxDQUFDO1FBRXpDOzs7V0FHRztRQUVJLG1CQUFjLEdBQUcsUUFBUSxDQUFDO1FBRWpDOztXQUVHO1FBRUkscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTVCOztXQUVHO1FBRUkseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0lBcUNwQyxDQUFDO0lBN0JELHNCQUNXLGtEQUFxQjtRQVBoQzs7Ozs7V0FLRzs7Ozs7OztRQUNIO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsQ0FBQztRQUMzRSxDQUFDOzs7T0FBQTtJQVFELHNCQUNXLGdEQUFtQjtRQVA5Qjs7Ozs7V0FLRzs7Ozs7OztRQUNIO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sSUFB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dGVudEluaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3LXdpemFyZGAgY29tcG9uZW50IGRlZmluZXMgdGhlIHJvb3QgY29tcG9uZW50IG9mIGEgd2l6YXJkLlxyXG4gKiBUaHJvdWdoIHRoZSBzZXR0aW5nIG9mIGlucHV0IHBhcmFtZXRlcnMgZm9yIHRoZSBgYXctd2l6YXJkYCBjb21wb25lbnQgaXQncyBwb3NzaWJsZSB0byBjaGFuZ2UgdGhlIGxvY2F0aW9uIGFuZCBzaXplXHJcbiAqIG9mIGl0cyBuYXZpZ2F0aW9uIGJhci5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQgW25hdkJhckxvY2F0aW9uXT1cImxvY2F0aW9uIG9mIG5hdmlnYXRpb24gYmFyXCIgW25hdkJhckxheW91dF09XCJsYXlvdXQgb2YgbmF2aWdhdGlvbiBiYXJcIj5cclxuICogICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZD5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIFdpdGhvdXQgY29tcGxldGlvbiBzdGVwOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQgbmF2QmFyTG9jYXRpb249XCJ0b3BcIiBuYXZCYXJMYXlvdXQ9XCJzbWFsbFwiPlxyXG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqICAgICA8YXctd2l6YXJkLXN0ZXA+Li4uPC9hdy13aXphcmQtc3RlcD5cclxuICogPC9hdy13aXphcmQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGNvbXBsZXRpb24gc3RlcDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkIG5hdkJhckxvY2F0aW9uPVwidG9wXCIgbmF2QmFyTGF5b3V0PVwic21hbGxcIj5cclxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxyXG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqICAgICA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD4uLi48L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XHJcbiAqIDwvYXctd2l6YXJkPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F3LXdpemFyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd3aXphcmQuY29tcG9uZW50Lmxlc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1dpemFyZFN0YXRlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAvKipcclxuICAgKiBBIFF1ZXJ5TGlzdCBjb250YWluaW5nIGFsbCBbW1dpemFyZFN0ZXBdXXMgaW5zaWRlIHRoaXMgd2l6YXJkXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZHJlbihXaXphcmRTdGVwKVxyXG4gIHB1YmxpYyB3aXphcmRTdGVwczogUXVlcnlMaXN0PFdpemFyZFN0ZXA+O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbG9jYXRpb24gb2YgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSB0aGUgd2l6YXJkLlxyXG4gICAqIFRoaXMgbG9jYXRpb24gY2FuIGJlIGVpdGhlciB0b3AsIGJvdHRvbSwgbGVmdCBvciByaWdodFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG5hdkJhckxvY2F0aW9uID0gJ3RvcCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXlvdXQgb2YgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSB0aGUgd2l6YXJkLlxyXG4gICAqIFRoZSBsYXlvdXQgY2FuIGJlIGVpdGhlciBzbWFsbCwgbGFyZ2UtZmlsbGVkLCBsYXJnZS1lbXB0eSBvciBsYXJnZS1zeW1ib2xzXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmF2QmFyTGF5b3V0ID0gJ3NtYWxsJztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgc3RlcHMgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciBzaG91bGQgYmUgc2hvd24uXHJcbiAgICogVGhlIGRpcmVjdGlvbiBjYW4gYmUgZWl0aGVyIGBsZWZ0LXRvLXJpZ2h0YCBvciBgcmlnaHQtdG8tbGVmdGBcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBuYXZCYXJEaXJlY3Rpb24gPSAnbGVmdC10by1yaWdodCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgdXNlZCBmb3IgdHJhbnNpdGlvbmluZyBiZXR3ZWVuIGRpZmZlcmVudCBzdGVwcy5cclxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIGNhbiBiZSBlaXRoZXIgYHN0cmljdGAsIGBzZW1pLXN0cmljdGAgb3IgYGZyZWVgXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmF2aWdhdGlvbk1vZGUgPSAnc3RyaWN0JztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWxseSBzZWxlY3RlZCBzdGVwLCByZXByZXNlbnRlZCBieSBpdHMgaW5kZXhcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkZWZhdWx0U3RlcEluZGV4ID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLlxyXG4gICAqIFRoZSB3aXphcmQgdXNlcyBhIGhvcml6b250YWwgb3JpZW50YXRpb24sIGlmZiB0aGUgbmF2aWdhdGlvbiBiYXIgaXMgc2hvd24gYXQgdGhlIHRvcCBvciBib3R0b20gb2YgdGhpcyB3aXphcmRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIGhvcml6b250YWwgb3JpZW50YXRpb25cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvcml6b250YWwnKVxyXG4gIHB1YmxpYyBnZXQgaG9yaXpvbnRhbE9yaWVudGF0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICd0b3AnIHx8IHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdib3R0b20nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbi5cclxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbiwgaWZmIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBzaG93biBhdCB0aGUgbGVmdCBvciByaWdodCBvZiB0aGlzIHdpemFyZFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCB1c2VzIGEgdmVydGljYWwgb3JpZW50YXRpb25cclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnZlcnRpY2FsJylcclxuICBwdWJsaWMgZ2V0IHZlcnRpY2FsT3JpZW50YXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdyaWdodCc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIGZvciB0aGlzIHdpemFyZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgbmF2aWdhdGlvbigpOiBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5uYXZpZ2F0aW9uTW9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbW9kZWwgVGhlIG1vZGVsIGZvciB0aGlzIHdpemFyZCBjb21wb25lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZWw6IFdpemFyZFN0YXRlKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBtb2RlbCBhZnRlciBjZXJ0YWluIGlucHV0IHZhbHVlcyBoYXZlIGNoYW5nZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjaGFuZ2VzIFRoZSBkZXRlY3RlZCBjaGFuZ2VzXHJcbiAgICovXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VzKSkge1xyXG4gICAgICBsZXQgY2hhbmdlID0gY2hhbmdlc1twcm9wTmFtZV07XHJcblxyXG4gICAgICBpZiAoIWNoYW5nZS5maXJzdENoYW5nZSkge1xyXG4gICAgICAgIHN3aXRjaCAocHJvcE5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgJ2RlZmF1bHRTdGVwSW5kZXgnOlxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRlZmF1bHRTdGVwSW5kZXggPSBwYXJzZUludChjaGFuZ2UuY3VycmVudFZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGlzYWJsZU5hdmlnYXRpb25CYXInOlxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmRpc2FibGVOYXZpZ2F0aW9uQmFyID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICduYXZpZ2F0aW9uTW9kZSc6XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudXBkYXRlTmF2aWdhdGlvbk1vZGUoY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXHJcbiAgICovXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gYWRkIGEgc3Vic2NyaWJlciB0byB0aGUgd2l6YXJkIHN0ZXBzIFF1ZXJ5TGlzdCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgRE9NXHJcbiAgICB0aGlzLndpemFyZFN0ZXBzLmNoYW5nZXMuc3Vic2NyaWJlKGNoYW5nZWRXaXphcmRTdGVwcyA9PiB7XHJcbiAgICAgIHRoaXMubW9kZWwudXBkYXRlV2l6YXJkU3RlcHMoY2hhbmdlZFdpemFyZFN0ZXBzLnRvQXJyYXkoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIHRoZSBtb2RlbFxyXG4gICAgdGhpcy5tb2RlbC5kaXNhYmxlTmF2aWdhdGlvbkJhciA9IHRoaXMuZGlzYWJsZU5hdmlnYXRpb25CYXI7XHJcbiAgICB0aGlzLm1vZGVsLmRlZmF1bHRTdGVwSW5kZXggPSB0aGlzLmRlZmF1bHRTdGVwSW5kZXg7XHJcbiAgICB0aGlzLm1vZGVsLnVwZGF0ZVdpemFyZFN0ZXBzKHRoaXMud2l6YXJkU3RlcHMudG9BcnJheSgpKTtcclxuICAgIHRoaXMubW9kZWwudXBkYXRlTmF2aWdhdGlvbk1vZGUodGhpcy5uYXZpZ2F0aW9uTW9kZSk7XHJcblxyXG4gICAgLy8gZmluYWxseSByZXNldCB0aGUgd2hvbGUgd2l6YXJkIHN0YXRlXHJcbiAgICB0aGlzLm5hdmlnYXRpb24ucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIl19
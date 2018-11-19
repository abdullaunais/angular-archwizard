(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-archwizard', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['angular-archwizard'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
     * to define the content of a step title inside the navigation bar.
     * This step title can be freely created and can contain more than only plain text
     *
     * ### Syntax
     *
     * ```html
     * <ng-template awWizardStepTitle>
     *     ...
     * </ng-template>
     * ```
     *
     * @author Marc Arndt
     */
    var WizardStepTitleDirective = /** @class */ (function () {
        /**
         * Constructor
         *
         * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
         */
        function WizardStepTitleDirective(templateRef) {
            this.templateRef = templateRef;
        }
        WizardStepTitleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
                    },] }
        ];
        WizardStepTitleDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return WizardStepTitleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
     * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
     *
     * ### Syntax
     *
     * ```html
     * <ng-template awWizardStepSymbol>
     *     ...
     * </ng-template>
     * ```
     */
    var WizardStepSymbolDirective = /** @class */ (function () {
        /**
         * Constructor
         *
         * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
         */
        function WizardStepSymbolDirective(templateRef) {
            this.templateRef = templateRef;
        }
        WizardStepSymbolDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
                    },] }
        ];
        WizardStepSymbolDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return WizardStepSymbolDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Basic functionality every type of wizard step needs to provide
     *
     * @author Marc Arndt
     * @abstract
     */
    var WizardStep = /** @class */ (function () {
        /**
         * Basic functionality every type of wizard step needs to provide
         *
         * @author Marc Arndt
         */
        function WizardStep() {
            /**
             * A symbol property, which contains an optional symbol for the step inside the navigation bar.
             * Takes effect when `stepSymbolTemplate` is not defined or null.
             */
            this.navigationSymbol = { symbol: '' };
            /**
             * A boolean describing if the wizard step has been completed
             */
            this.completed = false;
            /**
             * A boolean describing if the wizard step is currently selected
             */
            this.selected = false;
            /**
             * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
             */
            this.defaultSelected = false;
            /**
             * A boolean describing if the wizard step is an optional step
             */
            this.optional = false;
            /**
             * A function or boolean deciding, if this step can be entered
             */
            this.canEnter = true;
            /**
             * A function or boolean deciding, if this step can be exited
             */
            this.canExit = true;
            /**
             * This [[EventEmitter]] is called when the step is entered.
             * The bound method should be used to do initialization work.
             */
            this.stepEnter = new core.EventEmitter();
            /**
             * This [[EventEmitter]] is called when the step is exited.
             * The bound method can be used to do cleanup work.
             */
            this.stepExit = new core.EventEmitter();
        }
        Object.defineProperty(WizardStep.prototype, "hidden", {
            /**
             * Returns if this wizard step should be visible to the user.
             * If the step should be visible to the user false is returned, otherwise true
             */
            get: /**
             * Returns if this wizard step should be visible to the user.
             * If the step should be visible to the user false is returned, otherwise true
             * @return {?}
             */ function () {
                return !this.selected;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * This method returns true, if this wizard step can be transitioned with a given direction.
         * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
         *
         * @param condition A condition variable, deciding if the step can be transitioned
         * @param direction The direction in which this step should be transitioned
         * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
         * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
         */
        /**
         * This method returns true, if this wizard step can be transitioned with a given direction.
         * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
         *
         * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
         * @param {?} condition A condition variable, deciding if the step can be transitioned
         * @param {?} direction The direction in which this step should be transitioned
         * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
         */
        WizardStep.canTransitionStep = /**
         * This method returns true, if this wizard step can be transitioned with a given direction.
         * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
         *
         * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
         * @param {?} condition A condition variable, deciding if the step can be transitioned
         * @param {?} direction The direction in which this step should be transitioned
         * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
         */
            function (condition, direction) {
                if (typeof (condition) === typeof (true)) {
                    return Promise.resolve(( /** @type {?} */(condition)));
                }
                else if (condition instanceof Function) {
                    return Promise.resolve(condition(direction));
                }
                else {
                    return Promise.reject(new Error("Input value '" + condition + "' is neither a boolean nor a function"));
                }
            };
        /**
         * A function called when the step is entered
         *
         * @param direction The direction in which the step is entered
         */
        /**
         * A function called when the step is entered
         *
         * @param {?} direction The direction in which the step is entered
         * @return {?}
         */
        WizardStep.prototype.enter = /**
         * A function called when the step is entered
         *
         * @param {?} direction The direction in which the step is entered
         * @return {?}
         */
            function (direction) {
                this.stepEnter.emit(direction);
            };
        /**
         * A function called when the step is exited
         *
         * @param direction The direction in which the step is exited
         */
        /**
         * A function called when the step is exited
         *
         * @param {?} direction The direction in which the step is exited
         * @return {?}
         */
        WizardStep.prototype.exit = /**
         * A function called when the step is exited
         *
         * @param {?} direction The direction in which the step is exited
         * @return {?}
         */
            function (direction) {
                this.stepExit.emit(direction);
            };
        /**
         * This method returns true, if this wizard step can be entered from the given direction.
         * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
         * nor a function.
         *
         * @param direction The direction in which this step should be entered
         * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
         * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
         */
        /**
         * This method returns true, if this wizard step can be entered from the given direction.
         * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
         * nor a function.
         *
         * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
         * @param {?} direction The direction in which this step should be entered
         * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
         */
        WizardStep.prototype.canEnterStep = /**
         * This method returns true, if this wizard step can be entered from the given direction.
         * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
         * nor a function.
         *
         * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
         * @param {?} direction The direction in which this step should be entered
         * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
         */
            function (direction) {
                return WizardStep.canTransitionStep(this.canEnter, direction);
            };
        /**
         * This method returns true, if this wizard step can be exited into given direction.
         * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
         * nor a function.
         *
         * @param direction The direction in which this step should be left
         * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
         * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
         */
        /**
         * This method returns true, if this wizard step can be exited into given direction.
         * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
         * nor a function.
         *
         * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
         * @param {?} direction The direction in which this step should be left
         * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
         */
        WizardStep.prototype.canExitStep = /**
         * This method returns true, if this wizard step can be exited into given direction.
         * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
         * nor a function.
         *
         * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
         * @param {?} direction The direction in which this step should be left
         * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
         */
            function (direction) {
                return WizardStep.canTransitionStep(this.canExit, direction);
            };
        WizardStep.propDecorators = {
            stepTitleTemplate: [{ type: core.ContentChild, args: [WizardStepTitleDirective,] }],
            stepSymbolTemplate: [{ type: core.ContentChild, args: [WizardStepSymbolDirective,] }],
            stepId: [{ type: core.Input }],
            stepTitle: [{ type: core.Input }],
            navigationSymbol: [{ type: core.Input }],
            canEnter: [{ type: core.Input }],
            canExit: [{ type: core.Input }],
            stepEnter: [{ type: core.Output }],
            stepExit: [{ type: core.Output }],
            hidden: [{ type: core.HostBinding, args: ['hidden',] }]
        };
        return WizardStep;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The direction in which a step transition was made
     *
     * @author Marc Arndt
     */
    /** @enum {number} */
    var MovingDirection = {
        /**
         * A forward step transition
         */
        Forwards: 0,
        /**
         * A backward step transition
         */
        Backwards: 1,
        /**
         * No step transition was done
         */
        Stay: 2,
    };
    MovingDirection[MovingDirection.Forwards] = 'Forwards';
    MovingDirection[MovingDirection.Backwards] = 'Backwards';
    MovingDirection[MovingDirection.Stay] = 'Stay';

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
     */ NavigationMode = /** @class */ (function () {
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A [[NavigationMode]], which allows the user to navigate without any limitations,
     * as long as the current step can be exited in the given direction
     *
     * @author Marc Arndt
     */
    var /**
     * A [[NavigationMode]], which allows the user to navigate without any limitations,
     * as long as the current step can be exited in the given direction
     *
     * @author Marc Arndt
     */ FreeNavigationMode = /** @class */ (function (_super) {
        __extends(FreeNavigationMode, _super);
        /**
         * Constructor
         *
         * @param wizardState The model/state of the wizard, that is configured with this navigation mode
         */
        function FreeNavigationMode(wizardState) {
            return _super.call(this, wizardState) || this;
        }
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         *
         * @param destinationIndex The index of the destination wizard step
         * @returns True if the destination wizard step can be entered, false otherwise
         */
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         *
         * @param {?} destinationIndex The index of the destination wizard step
         * @return {?} True if the destination wizard step can be entered, false otherwise
         */
        FreeNavigationMode.prototype.canGoToStep = /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         *
         * @param {?} destinationIndex The index of the destination wizard step
         * @return {?} True if the destination wizard step can be entered, false otherwise
         */
            function (destinationIndex) {
                var _this = this;
                /** @type {?} */
                var hasStep = this.wizardState.hasStep(destinationIndex);
                /** @type {?} */
                var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
                /** @type {?} */
                var canExitCurrentStep = function (previous) {
                    return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
                };
                /** @type {?} */
                var canEnterDestinationStep = function (previous) {
                    return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
                };
                return Promise.resolve(hasStep)
                    .then(canExitCurrentStep)
                    .then(canEnterDestinationStep);
            };
        /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param destinationIndex The index of the destination wizard step, which should be entered
         * @param preFinalize An event emitter, to be called before the step has been transitioned
         * @param postFinalize An event emitter, to be called after the step has been transitioned
         */
        /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param {?} destinationIndex The index of the destination wizard step, which should be entered
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */
        FreeNavigationMode.prototype.goToStep = /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param {?} destinationIndex The index of the destination wizard step, which should be entered
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */
            function (destinationIndex, preFinalize, postFinalize) {
                var _this = this;
                this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
                    if (navigationAllowed) {
                        // the current step can be exited in the given direction
                        /** @type {?} */
                        var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                        /* istanbul ignore if */
                        if (preFinalize) {
                            preFinalize.emit();
                        }
                        // leave current step
                        _this.wizardState.currentStep.completed = true;
                        _this.wizardState.currentStep.exit(movingDirection);
                        _this.wizardState.currentStep.selected = false;
                        _this.wizardState.currentStepIndex = destinationIndex;
                        // go to next step
                        _this.wizardState.currentStep.enter(movingDirection);
                        _this.wizardState.currentStep.selected = true;
                        /* istanbul ignore if */
                        if (postFinalize) {
                            postFinalize.emit();
                        }
                    }
                    else {
                        // if the current step can't be left, reenter the current step
                        _this.wizardState.currentStep.exit(MovingDirection.Stay);
                        _this.wizardState.currentStep.enter(MovingDirection.Stay);
                    }
                });
            };
        /**
         * @param {?} destinationIndex
         * @return {?}
         */
        FreeNavigationMode.prototype.isNavigable = /**
         * @param {?} destinationIndex
         * @return {?}
         */
            function (destinationIndex) {
                return true;
            };
        /**
         * Resets the state of this wizard.
         * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
         * In addition the whole wizard is set as incomplete
         */
        /**
         * Resets the state of this wizard.
         * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
         * In addition the whole wizard is set as incomplete
         * @return {?}
         */
        FreeNavigationMode.prototype.reset = /**
         * Resets the state of this wizard.
         * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
         * In addition the whole wizard is set as incomplete
         * @return {?}
         */
            function () {
                // the wizard doesn't contain a step with the default step index
                if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
                    throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
                }
                // reset the step internal state
                this.wizardState.wizardSteps.forEach(function (step) {
                    step.completed = false;
                    step.selected = false;
                });
                // set the first step as the current step
                this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
                this.wizardState.currentStep.selected = true;
                this.wizardState.currentStep.enter(MovingDirection.Forwards);
            };
        return FreeNavigationMode;
    }(NavigationMode));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Basic functionality every wizard completion step needs to provide
     *
     * @author Marc Arndt
     * @abstract
     */
    var /**
     * Basic functionality every wizard completion step needs to provide
     *
     * @author Marc Arndt
     * @abstract
     */ WizardCompletionStep = /** @class */ (function (_super) {
        __extends(WizardCompletionStep, _super);
        /**
         * Basic functionality every wizard completion step needs to provide
         *
         * @author Marc Arndt
         */
        function WizardCompletionStep() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * @inheritDoc
             */
            _this.stepExit = new core.EventEmitter();
            /**
             * @inheritDoc
             */
            _this.canExit = false;
            return _this;
        }
        /**
         * @inheritDoc
         */
        /**
         * @inheritDoc
         * @param {?} direction
         * @return {?}
         */
        WizardCompletionStep.prototype.enter = /**
         * @inheritDoc
         * @param {?} direction
         * @return {?}
         */
            function (direction) {
                this.completed = true;
                this.stepEnter.emit(direction);
            };
        /**
         * @inheritDoc
         */
        /**
         * @inheritDoc
         * @param {?} direction
         * @return {?}
         */
        WizardCompletionStep.prototype.exit = /**
         * @inheritDoc
         * @param {?} direction
         * @return {?}
         */
            function (direction) {
                // set this completion step as incomplete
                this.completed = false;
                this.stepExit.emit(direction);
            };
        return WizardCompletionStep;
    }(WizardStep));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A [[NavigationMode]], which allows the user to navigate with some limitations.
     * The user can only navigation to a given destination step, if:
     * - the current step can be exited in the direction of the destination step
     * - a completion step can only be entered, if all "normal" wizard steps have been completed
     *
     * @author Marc Arndt
     */
    var /**
     * A [[NavigationMode]], which allows the user to navigate with some limitations.
     * The user can only navigation to a given destination step, if:
     * - the current step can be exited in the direction of the destination step
     * - a completion step can only be entered, if all "normal" wizard steps have been completed
     *
     * @author Marc Arndt
     */ SemiStrictNavigationMode = /** @class */ (function (_super) {
        __extends(SemiStrictNavigationMode, _super);
        /**
         * Constructor
         *
         * @param wizardState The model/state of the wizard, that is configured with this navigation mode
         */
        function SemiStrictNavigationMode(wizardState) {
            return _super.call(this, wizardState) || this;
        }
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
         *
         * @param destinationIndex The index of the destination wizard step
         * @returns True if the destination wizard step can be entered, false otherwise
         */
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
         *
         * @param {?} destinationIndex The index of the destination wizard step
         * @return {?} True if the destination wizard step can be entered, false otherwise
         */
        SemiStrictNavigationMode.prototype.canGoToStep = /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
         *
         * @param {?} destinationIndex The index of the destination wizard step
         * @return {?} True if the destination wizard step can be entered, false otherwise
         */
            function (destinationIndex) {
                var _this = this;
                /** @type {?} */
                var hasStep = this.wizardState.hasStep(destinationIndex);
                /** @type {?} */
                var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
                /** @type {?} */
                var canExitCurrentStep = function (previous) {
                    return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
                };
                /** @type {?} */
                var canEnterDestinationStep = function (previous) {
                    return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
                };
                // provide the destination step as a lambda in case the index doesn't exist (i.e. hasStep === false)
                /** @type {?} */
                var destinationStep = function (previous) {
                    if (previous) {
                        /** @type {?} */
                        var allNormalStepsCompleted = _this.wizardState.wizardSteps
                            .filter(function (step, index) { return index < destinationIndex; })
                            .every(function (step) { return step.completed || step.optional || step.selected; });
                        return Promise.resolve(!(_this.wizardState.getStepAtIndex(destinationIndex) instanceof WizardCompletionStep) || allNormalStepsCompleted);
                    }
                    else {
                        return Promise.resolve(false);
                    }
                };
                return Promise.resolve(hasStep)
                    .then(canExitCurrentStep)
                    .then(canEnterDestinationStep)
                    .then(destinationStep);
            };
        /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param destinationIndex The index of the destination wizard step, which should be entered
         * @param preFinalize An event emitter, to be called before the step has been transitioned
         * @param postFinalize An event emitter, to be called after the step has been transitioned
         */
        /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param {?} destinationIndex The index of the destination wizard step, which should be entered
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */
        SemiStrictNavigationMode.prototype.goToStep = /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param {?} destinationIndex The index of the destination wizard step, which should be entered
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */
            function (destinationIndex, preFinalize, postFinalize) {
                var _this = this;
                this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
                    if (navigationAllowed) {
                        // the current step can be exited in the given direction
                        /** @type {?} */
                        var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                        /* istanbul ignore if */
                        if (preFinalize) {
                            preFinalize.emit();
                        }
                        // leave current step
                        _this.wizardState.currentStep.completed = true;
                        _this.wizardState.currentStep.exit(movingDirection);
                        _this.wizardState.currentStep.selected = false;
                        _this.wizardState.currentStepIndex = destinationIndex;
                        // go to next step
                        _this.wizardState.currentStep.enter(movingDirection);
                        _this.wizardState.currentStep.selected = true;
                        /* istanbul ignore if */
                        if (postFinalize) {
                            postFinalize.emit();
                        }
                    }
                    else {
                        // if the current step can't be left, reenter the current step
                        _this.wizardState.currentStep.exit(MovingDirection.Stay);
                        _this.wizardState.currentStep.enter(MovingDirection.Stay);
                    }
                });
            };
        /**
         * @inheritDoc
         */
        /**
         * @inheritDoc
         * @param {?} destinationIndex
         * @return {?}
         */
        SemiStrictNavigationMode.prototype.isNavigable = /**
         * @inheritDoc
         * @param {?} destinationIndex
         * @return {?}
         */
            function (destinationIndex) {
                if (this.wizardState.getStepAtIndex(destinationIndex) instanceof WizardCompletionStep) {
                    // a completion step can only be entered, if all previous steps have been completed, are optional, or selected
                    return this.wizardState.wizardSteps.filter(function (step, index) { return index < destinationIndex; })
                        .every(function (step) { return step.completed || step.optional || step.selected; });
                }
                else {
                    // a "normal" step can always be entered
                    return true;
                }
            };
        /**
         * @inheritDoc
         */
        /**
         * @inheritDoc
         * @return {?}
         */
        SemiStrictNavigationMode.prototype.reset = /**
         * @inheritDoc
         * @return {?}
         */
            function () {
                // the wizard doesn't contain a step with the default step index
                if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
                    throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
                }
                // the default step is a completion step and the wizard contains more than one step
                /** @type {?} */
                var defaultCompletionStep = this.wizardState.getStepAtIndex(this.wizardState.defaultStepIndex) instanceof WizardCompletionStep &&
                    this.wizardState.wizardSteps.length !== 1;
                if (defaultCompletionStep) {
                    throw new Error("The default step index " + this.wizardState.defaultStepIndex + " references a completion step");
                }
                // reset the step internal state
                this.wizardState.wizardSteps.forEach(function (step) {
                    step.completed = false;
                    step.selected = false;
                });
                // set the first step as the current step
                this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
                this.wizardState.currentStep.selected = true;
                this.wizardState.currentStep.enter(MovingDirection.Forwards);
            };
        return SemiStrictNavigationMode;
    }(NavigationMode));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A [[NavigationMode]], which allows the user to navigate with strict limitations.
     * The user can only navigation to a given destination step, if:
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @author Marc Arndt
     */
    var /**
     * A [[NavigationMode]], which allows the user to navigate with strict limitations.
     * The user can only navigation to a given destination step, if:
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @author Marc Arndt
     */ StrictNavigationMode = /** @class */ (function (_super) {
        __extends(StrictNavigationMode, _super);
        /**
         * Constructor
         *
         * @param wizardState The state of the wizard, that is configured with this navigation mode
         */
        function StrictNavigationMode(wizardState) {
            return _super.call(this, wizardState) || this;
        }
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all previous steps to the destination step have been completed or are optional
         *
         * @param destinationIndex The index of the destination wizard step
         * @returns True if the destination wizard step can be entered, false otherwise
         */
        /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all previous steps to the destination step have been completed or are optional
         *
         * @param {?} destinationIndex The index of the destination wizard step
         * @return {?} True if the destination wizard step can be entered, false otherwise
         */
        StrictNavigationMode.prototype.canGoToStep = /**
         * Checks whether the wizard can be transitioned to the given destination step.
         * A destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - all previous steps to the destination step have been completed or are optional
         *
         * @param {?} destinationIndex The index of the destination wizard step
         * @return {?} True if the destination wizard step can be entered, false otherwise
         */
            function (destinationIndex) {
                var _this = this;
                /** @type {?} */
                var hasStep = this.wizardState.hasStep(destinationIndex);
                /** @type {?} */
                var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
                /** @type {?} */
                var canExitCurrentStep = function (previous) {
                    return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
                };
                /** @type {?} */
                var canEnterDestinationStep = function (previous) {
                    return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
                };
                /** @type {?} */
                var allPreviousStepsComplete = function (previous) {
                    if (previous) {
                        return Promise.resolve(_this.wizardState.wizardSteps
                            .filter(function (step, index) { return index < destinationIndex && index !== _this.wizardState.currentStepIndex; })
                            .every(function (step) { return step.completed || step.optional; }));
                    }
                    else {
                        return Promise.resolve(false);
                    }
                };
                return Promise.resolve(hasStep)
                    .then(canExitCurrentStep)
                    .then(canEnterDestinationStep)
                    .then(allPreviousStepsComplete);
            };
        /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - all steps between the old current step and the destination step are marked as incomplete
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param destinationIndex The index of the destination wizard step, which should be entered
         * @param preFinalize An event emitter, to be called before the step has been transitioned
         * @param postFinalize An event emitter, to be called after the step has been transitioned
         */
        /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - all steps between the old current step and the destination step are marked as incomplete
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param {?} destinationIndex The index of the destination wizard step, which should be entered
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */
        StrictNavigationMode.prototype.goToStep = /**
         * Tries to enter the wizard step with the given destination index.
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - all steps between the old current step and the destination step are marked as incomplete
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param {?} destinationIndex The index of the destination wizard step, which should be entered
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */
            function (destinationIndex, preFinalize, postFinalize) {
                var _this = this;
                this.canGoToStep(destinationIndex).then(function (navigationAllowed) {
                    if (navigationAllowed) {
                        /** @type {?} */
                        var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                        /* istanbul ignore if */
                        if (preFinalize) {
                            preFinalize.emit();
                        }
                        // leave current step
                        _this.wizardState.currentStep.completed = true;
                        _this.wizardState.currentStep.exit(movingDirection);
                        _this.wizardState.currentStep.selected = false;
                        // set all steps after the destination step to incomplete
                        _this.wizardState.wizardSteps
                            .filter(function (step, index) { return _this.wizardState.currentStepIndex > destinationIndex && index > destinationIndex; })
                            .forEach(function (step) { return step.completed = false; });
                        _this.wizardState.currentStepIndex = destinationIndex;
                        // go to next step
                        _this.wizardState.currentStep.enter(movingDirection);
                        _this.wizardState.currentStep.selected = true;
                        /* istanbul ignore if */
                        if (postFinalize) {
                            postFinalize.emit();
                        }
                    }
                    else {
                        // if the current step can't be left, reenter the current step
                        _this.wizardState.currentStep.exit(MovingDirection.Stay);
                        _this.wizardState.currentStep.enter(MovingDirection.Stay);
                    }
                });
            };
        /**
         * @param {?} destinationIndex
         * @return {?}
         */
        StrictNavigationMode.prototype.isNavigable = /**
         * @param {?} destinationIndex
         * @return {?}
         */
            function (destinationIndex) {
                // a wizard step can be navigated to through the navigation bar, iff it's located before the current wizard step
                return destinationIndex < this.wizardState.currentStepIndex;
            };
        /**
         * Resets the state of this wizard.
         * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
         * In addition the whole wizard is set as incomplete
         */
        /**
         * Resets the state of this wizard.
         * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
         * In addition the whole wizard is set as incomplete
         * @return {?}
         */
        StrictNavigationMode.prototype.reset = /**
         * Resets the state of this wizard.
         * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
         * In addition the whole wizard is set as incomplete
         * @return {?}
         */
            function () {
                var _this = this;
                // the wizard doesn't contain a step with the default step index
                if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
                    throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
                }
                // at least one step is before the default step, that is not optional
                /** @type {?} */
                var illegalDefaultStep = this.wizardState.wizardSteps
                    .filter(function (step, index) { return index < _this.wizardState.defaultStepIndex; })
                    .some(function (step) { return !step.optional; });
                if (illegalDefaultStep) {
                    throw new Error("The default step index " + this.wizardState.defaultStepIndex + " is located after a non optional step");
                }
                // reset the step internal state
                this.wizardState.wizardSteps.forEach(function (step) {
                    step.completed = false;
                    step.selected = false;
                });
                // set the first step as the current step
                this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
                this.wizardState.currentStep.selected = true;
                this.wizardState.currentStep.enter(MovingDirection.Forwards);
            };
        return StrictNavigationMode;
    }(NavigationMode));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A factory method used to create [[NavigationMode]] instances
     *
     * @param {?} navigationMode The name of the to be used navigation mode
     * @param {?} wizardState The wizard state of the wizard
     * @return {?} The created [[NavigationMode]]
     */
    function navigationModeFactory(navigationMode, wizardState) {
        switch (navigationMode) {
            case 'free':
                return new FreeNavigationMode(wizardState);
            case 'semi-strict':
                return new SemiStrictNavigationMode(wizardState);
            case 'strict':
            default:
                return new StrictNavigationMode(wizardState);
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The internal model/state of a wizard.
     * This model contains:
     * - an array with all steps the wizard contains
     * - the index of the step the wizard currently resides inside
     * - information about the completeness of the wizard
     * - some additional helper methods
     *
     * @author Marc Arndt
     */
    var WizardState = /** @class */ (function () {
        /**
         * Constructor
         */
        function WizardState() {
            /**
             * The initial step index, as taken from the [[WizardComponent]]
             */
            this._defaultStepIndex = 0;
            /**
             * An array representation of all wizard steps belonging to this model
             */
            this.wizardSteps = [];
            /**
             * The index of the currently visible and selected step inside the wizardSteps QueryList.
             * If this wizard contains no steps, currentStepIndex is -1
             */
            this.currentStepIndex = -1;
        }
        Object.defineProperty(WizardState.prototype, "defaultStepIndex", {
            /**
             * The initial step index.
             * This value can be either:
             * - the index of a wizard step with a `selected` directive, or
             * - the default step index, set in the [[WizardComponent]]
             */
            get: /**
             * The initial step index.
             * This value can be either:
             * - the index of a wizard step with a `selected` directive, or
             * - the default step index, set in the [[WizardComponent]]
             * @return {?}
             */ function () {
                /** @type {?} */
                var foundDefaultStep = this.wizardSteps.find(function (step) { return step.defaultSelected; });
                if (foundDefaultStep) {
                    return this.getIndexOfStep(foundDefaultStep);
                }
                else {
                    return this._defaultStepIndex;
                }
            },
            /**
             * Sets the initial default step.
             * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
             *
             * @param defaultStepIndex The new default wizard step index
             */
            set: /**
             * Sets the initial default step.
             * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
             *
             * @param {?} defaultStepIndex The new default wizard step index
             * @return {?}
             */ function (defaultStepIndex) {
                this._defaultStepIndex = defaultStepIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WizardState.prototype, "currentStep", {
            /**
             * The WizardStep object belonging to the currently visible and selected step.
             * The currentStep is always the currently selected wizard step.
             * The currentStep can be either completed, if it was visited earlier,
             * or not completed, if it is visited for the first time or its state is currently out of date.
             *
             * If this wizard contains no steps, currentStep is null
             */
            get: /**
             * The WizardStep object belonging to the currently visible and selected step.
             * The currentStep is always the currently selected wizard step.
             * The currentStep can be either completed, if it was visited earlier,
             * or not completed, if it is visited for the first time or its state is currently out of date.
             *
             * If this wizard contains no steps, currentStep is null
             * @return {?}
             */ function () {
                if (this.hasStep(this.currentStepIndex)) {
                    return this.wizardSteps[this.currentStepIndex];
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WizardState.prototype, "completed", {
            /**
             * The completeness of the wizard.
             * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
             */
            get: /**
             * The completeness of the wizard.
             * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
             * @return {?}
             */ function () {
                return this.wizardSteps.every(function (step) { return step.completed || step.optional; });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Updates the navigation mode to the navigation mode with the given name
         *
         * @param updatedNavigationMode The name of the new navigation mode
         */
        /**
         * Updates the navigation mode to the navigation mode with the given name
         *
         * @param {?} updatedNavigationMode The name of the new navigation mode
         * @return {?}
         */
        WizardState.prototype.updateNavigationMode = /**
         * Updates the navigation mode to the navigation mode with the given name
         *
         * @param {?} updatedNavigationMode The name of the new navigation mode
         * @return {?}
         */
            function (updatedNavigationMode) {
                this.navigationMode = navigationModeFactory(updatedNavigationMode, this);
            };
        /**
         * Updates the wizard steps to the new array
         *
         * @param updatedWizardSteps The updated wizard steps
         */
        /**
         * Updates the wizard steps to the new array
         *
         * @param {?} updatedWizardSteps The updated wizard steps
         * @return {?}
         */
        WizardState.prototype.updateWizardSteps = /**
         * Updates the wizard steps to the new array
         *
         * @param {?} updatedWizardSteps The updated wizard steps
         * @return {?}
         */
            function (updatedWizardSteps) {
                // the wizard is currently not in the initialization phase
                if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
                    this.currentStepIndex = updatedWizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
                }
                this.wizardSteps = updatedWizardSteps;
            };
        /**
         * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
         *
         * @param stepIndex The to be checked index of a step inside this wizard
         * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
         */
        /**
         * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
         *
         * @param {?} stepIndex The to be checked index of a step inside this wizard
         * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
         */
        WizardState.prototype.hasStep = /**
         * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
         *
         * @param {?} stepIndex The to be checked index of a step inside this wizard
         * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
         */
            function (stepIndex) {
                return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
            };
        /**
         * Checks if this wizard has a previous step, compared to the current step
         *
         * @returns True if this wizard has a previous step before the current step
         */
        /**
         * Checks if this wizard has a previous step, compared to the current step
         *
         * @return {?} True if this wizard has a previous step before the current step
         */
        WizardState.prototype.hasPreviousStep = /**
         * Checks if this wizard has a previous step, compared to the current step
         *
         * @return {?} True if this wizard has a previous step before the current step
         */
            function () {
                return this.hasStep(this.currentStepIndex - 1);
            };
        /**
         * Checks if this wizard has a next step, compared to the current step
         *
         * @returns True if this wizard has a next step after the current step
         */
        /**
         * Checks if this wizard has a next step, compared to the current step
         *
         * @return {?} True if this wizard has a next step after the current step
         */
        WizardState.prototype.hasNextStep = /**
         * Checks if this wizard has a next step, compared to the current step
         *
         * @return {?} True if this wizard has a next step after the current step
         */
            function () {
                return this.hasStep(this.currentStepIndex + 1);
            };
        /**
         * Checks if this wizard is currently inside its last step
         *
         * @returns True if the wizard is currently inside its last step
         */
        /**
         * Checks if this wizard is currently inside its last step
         *
         * @return {?} True if the wizard is currently inside its last step
         */
        WizardState.prototype.isLastStep = /**
         * Checks if this wizard is currently inside its last step
         *
         * @return {?} True if the wizard is currently inside its last step
         */
            function () {
                return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
            };
        /**
         * Finds the [[WizardStep]] at the given index `stepIndex`.
         * If no [[WizardStep]] exists at the given index an Error is thrown
         *
         * @param stepIndex The given index
         * @returns The found [[WizardStep]] at the given index `stepIndex`
         * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
         */
        /**
         * Finds the [[WizardStep]] at the given index `stepIndex`.
         * If no [[WizardStep]] exists at the given index an Error is thrown
         *
         * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
         * @param {?} stepIndex The given index
         * @return {?} The found [[WizardStep]] at the given index `stepIndex`
         */
        WizardState.prototype.getStepAtIndex = /**
         * Finds the [[WizardStep]] at the given index `stepIndex`.
         * If no [[WizardStep]] exists at the given index an Error is thrown
         *
         * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
         * @param {?} stepIndex The given index
         * @return {?} The found [[WizardStep]] at the given index `stepIndex`
         */
            function (stepIndex) {
                if (!this.hasStep(stepIndex)) {
                    throw new Error("Expected a known step, but got stepIndex: " + stepIndex + ".");
                }
                return this.wizardSteps[stepIndex];
            };
        /**
         * Finds the index of the step with the given `stepId`.
         * If no step with the given `stepId` exists, `-1` is returned
         *
         * @param stepId The given step id
         * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
         */
        /**
         * Finds the index of the step with the given `stepId`.
         * If no step with the given `stepId` exists, `-1` is returned
         *
         * @param {?} stepId The given step id
         * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
         */
        WizardState.prototype.getIndexOfStepWithId = /**
         * Finds the index of the step with the given `stepId`.
         * If no step with the given `stepId` exists, `-1` is returned
         *
         * @param {?} stepId The given step id
         * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
         */
            function (stepId) {
                return this.wizardSteps.findIndex(function (step) { return step.stepId === stepId; });
            };
        /**
         * Finds the index of the given [[WizardStep]] `step`.
         * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
         *
         * @param step The given [[WizardStep]]
         * @returns The found index of `step` or `-1` if the step is not included in the wizard
         */
        /**
         * Finds the index of the given [[WizardStep]] `step`.
         * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
         *
         * @param {?} step The given [[WizardStep]]
         * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
         */
        WizardState.prototype.getIndexOfStep = /**
         * Finds the index of the given [[WizardStep]] `step`.
         * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
         *
         * @param {?} step The given [[WizardStep]]
         * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
         */
            function (step) {
                return this.wizardSteps.indexOf(step);
            };
        /**
         * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
         *
         * @param destinationStep The given destination step
         * @returns The calculated [[MovingDirection]]
         */
        /**
         * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
         *
         * @param {?} destinationStep The given destination step
         * @return {?} The calculated [[MovingDirection]]
         */
        WizardState.prototype.getMovingDirection = /**
         * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
         *
         * @param {?} destinationStep The given destination step
         * @return {?} The calculated [[MovingDirection]]
         */
            function (destinationStep) {
                /** @type {?} */
                var movingDirection;
                if (destinationStep > this.currentStepIndex) {
                    movingDirection = MovingDirection.Forwards;
                }
                else if (destinationStep < this.currentStepIndex) {
                    movingDirection = MovingDirection.Backwards;
                }
                else {
                    movingDirection = MovingDirection.Stay;
                }
                return movingDirection;
            };
        WizardState.decorators = [
            { type: core.Injectable }
        ];
        WizardState.ctorParameters = function () { return []; };
        return WizardState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
                    for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
            { type: core.Component, args: [{
                        selector: 'aw-wizard',
                        template: "<aw-wizard-navigation-bar\r\n  [direction]=\"navBarDirection\"\r\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\r\n  [ngClass]=\"{\r\n    vertical: navBarLocation == 'left',\r\n    horizontal: navBarLocation == 'top',\r\n    small: navBarLayout == 'small',\r\n    'large-filled': navBarLayout == 'large-filled',\r\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\r\n    'large-empty': navBarLayout == 'large-empty',\r\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\r\n  }\">\r\n</aw-wizard-navigation-bar>\r\n\r\n<div [ngClass]=\"{\r\n  'wizard-steps': true,\r\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\r\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\r\n}\">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n<aw-wizard-navigation-bar\r\n  [direction]=\"navBarDirection\"\r\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\r\n  [ngClass]=\"{\r\n    vertical: navBarLocation == 'right',\r\n    horizontal: navBarLocation == 'bottom',\r\n    small: navBarLayout == 'small',\r\n    'large-filled': navBarLayout == 'large-filled',\r\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\r\n    'large-empty': navBarLayout == 'large-empty',\r\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\r\n  }\">\r\n</aw-wizard-navigation-bar>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [WizardState],
                        styles: ["aw-wizard{display:flex;justify-content:flex-start}aw-wizard.vertical{flex-direction:row}aw-wizard.horizontal{flex-direction:column}aw-wizard .wizard-steps{top:0;display:flex}aw-wizard .wizard-steps.vertical{min-width:calc(100% - 280px);width:80%;height:100%;flex-direction:column}aw-wizard .wizard-steps.horizontal{width:100%;flex-direction:row}"]
                    }] }
        ];
        WizardComponent.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        WizardComponent.propDecorators = {
            wizardSteps: [{ type: core.ContentChildren, args: [WizardStep,] }],
            navBarLocation: [{ type: core.Input }],
            navBarLayout: [{ type: core.Input }],
            navBarDirection: [{ type: core.Input }],
            navigationMode: [{ type: core.Input }],
            defaultStepIndex: [{ type: core.Input }],
            disableNavigationBar: [{ type: core.Input }],
            horizontalOrientation: [{ type: core.HostBinding, args: ['class.horizontal',] }],
            verticalOrientation: [{ type: core.HostBinding, args: ['class.vertical',] }]
        };
        return WizardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
        __extends(WizardCompletionStepComponent, _super);
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
            { type: core.Component, args: [{
                        selector: 'aw-wizard-completion-step',
                        template: "<ng-content></ng-content>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [
                            { provide: WizardStep, useExisting: core.forwardRef(function () { return WizardCompletionStepComponent; }) },
                            { provide: WizardCompletionStep, useExisting: core.forwardRef(function () { return WizardCompletionStepComponent; }) }
                        ],
                        styles: ["aw-wizard-completion-step{height:auto;width:100%}"]
                    }] }
        ];
        return WizardCompletionStepComponent;
    }(WizardCompletionStep));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
     * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
     * otherwise it will look like a normal `ul` component.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
     * ```
     *
     * @author Marc Arndt
     */
    var WizardNavigationBarComponent = /** @class */ (function () {
        /**
         * Constructor
         *
         * @param wizardState The state the wizard currently resides in
         */
        function WizardNavigationBarComponent(wizardState) {
            this.wizardState = wizardState;
            /**
             * The direction in which the wizard steps should be shown in the navigation bar.
             * This value can be either `left-to-right` or `right-to-left`
             */
            this.direction = 'left-to-right';
        }
        Object.defineProperty(WizardNavigationBarComponent.prototype, "navigationMode", {
            /**
             * The navigation mode
             */
            get: /**
             * The navigation mode
             * @return {?}
             */ function () {
                return this.wizardState.navigationMode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WizardNavigationBarComponent.prototype, "wizardSteps", {
            /**
             * Returns all [[WizardStep]]s contained in the wizard
             *
             * @returns An array containing all [[WizardStep]]s
             */
            get: /**
             * Returns all [[WizardStep]]s contained in the wizard
             *
             * @return {?} An array containing all [[WizardStep]]s
             */ function () {
                switch (this.direction) {
                    case 'right-to-left':
                        return this.wizardState.wizardSteps.slice().reverse();
                    case 'left-to-right':
                    default:
                        return this.wizardState.wizardSteps;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WizardNavigationBarComponent.prototype, "numberOfWizardSteps", {
            /**
             * Returns the number of wizard steps, that need to be displaced in the navigation bar
             *
             * @returns The number of wizard steps to be displayed
             */
            get: /**
             * Returns the number of wizard steps, that need to be displaced in the navigation bar
             *
             * @return {?} The number of wizard steps to be displayed
             */ function () {
                return this.wizardState.wizardSteps.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
         *
         * @param wizardStep The wizard step to be checked
         * @returns True if the step can be marked as current
         */
        /**
         * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as current
         */
        WizardNavigationBarComponent.prototype.isCurrent = /**
         * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as current
         */
            function (wizardStep) {
                return wizardStep.selected && !wizardStep.completed && !this.wizardState.completed;
            };
        /**
         * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
         *
         * @param wizardStep The wizard step to be checked
         * @returns True if the step can be marked as done
         */
        /**
         * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as done
         */
        WizardNavigationBarComponent.prototype.isDone = /**
         * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as done
         */
            function (wizardStep) {
                return (wizardStep.completed && !wizardStep.selected) || this.wizardState.completed;
            };
        /**
         * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
         *
         * @param wizardStep The wizard step to be checked
         * @returns True if the step can be marked as default
         */
        /**
         * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as default
         */
        WizardNavigationBarComponent.prototype.isDefault = /**
         * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as default
         */
            function (wizardStep) {
                return !wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
            };
        /**
         * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
         *
         * @param wizardStep The wizard step to be checked
         * @returns True if the step can be marked as editing
         */
        /**
         * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as editing
         */
        WizardNavigationBarComponent.prototype.isEditing = /**
         * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as editing
         */
            function (wizardStep) {
                return wizardStep.selected && wizardStep.completed && !this.wizardState.completed;
            };
        /**
         * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
         *
         * @param wizardStep The wizard step to be checked
         * @returns True if the step can be marked as optional
         */
        /**
         * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as optional
         */
        WizardNavigationBarComponent.prototype.isOptional = /**
         * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as optional
         */
            function (wizardStep) {
                return wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
            };
        /**
         * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
         * A wizard step can be navigated to if:
         * - the step is currently not selected
         * - the navigation bar isn't disabled
         * - the navigation mode allows navigation to the step
         *
         * @param wizardStep The wizard step to be checked
         * @returns True if the step can be marked as navigable
         */
        /**
         * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
         * A wizard step can be navigated to if:
         * - the step is currently not selected
         * - the navigation bar isn't disabled
         * - the navigation mode allows navigation to the step
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as navigable
         */
        WizardNavigationBarComponent.prototype.isNavigable = /**
         * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
         * A wizard step can be navigated to if:
         * - the step is currently not selected
         * - the navigation bar isn't disabled
         * - the navigation mode allows navigation to the step
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as navigable
         */
            function (wizardStep) {
                return !wizardStep.selected && !this.wizardState.disableNavigationBar &&
                    this.navigationMode.isNavigable(this.wizardState.getIndexOfStep(wizardStep));
            };
        WizardNavigationBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aw-wizard-navigation-bar',
                        template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\r\n  <li *ngFor=\"let step of wizardSteps\"\r\n      [ngClass]=\"{\r\n        default: isDefault(step),\r\n        current: isCurrent(step),\r\n        done: isDone(step),\r\n        editing: isEditing(step),\r\n        optional: isOptional(step),\r\n        navigable: isNavigable(step)\r\n  }\">\r\n    <a [awGoToStep]=\"step\">\r\n      <div class=\"label\">\r\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\r\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\r\n      </div>\r\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\r\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\r\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\r\n      </div>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["aw-wizard-navigation-bar.horizontal.small ul.steps-indicator{padding:24px 0 10px}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 14px);top:-7px;left:calc(50% + 14px / 2)}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li .step-indicator{position:absolute;top:-14px;left:calc(50% - 14px / 2);width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done .step-indicator{border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid red}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:grey}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:grey;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done .step-indicator{background-color:#393;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:red;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:grey;border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done .step-indicator{color:#393;border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:red;border:2px solid red}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767;color:#676767}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326;color:#267326}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212;color:#12e212}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00;color:#c00}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:grey;color:grey}aw-wizard-navigation-bar.horizontal ul.steps-indicator{display:flex;flex-direction:row;justify-content:center;margin:0;width:100%;list-style:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:before{left:25%;right:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li{width:50%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:before{left:16.66666667%;right:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li{width:33.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:before{left:12.5%;right:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li{width:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:before{left:10%;right:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li{width:20%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:before{left:8.33333333%;right:8.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li{width:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:before{left:7.14285714%;right:7.14285714%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li{width:14.28571429%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:before{left:6.25%;right:6.25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li{width:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:before{left:5.55555556%;right:5.55555556%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li{width:11.11111111%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:before{left:5%;right:5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li{width:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.horizontal ul.steps-indicator li{position:relative;margin:0;padding:0;pointer-events:none;text-align:center}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a .label{display:inline-block;padding-top:10px;color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:center;font-weight:700;transition:.25s}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a:hover .label{color:#4d4d4d}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a .label{color:grey}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.navigable{pointer-events:auto}", "aw-wizard-navigation-bar.vertical{max-width:280px;width:20%;height:100%;position:-webkit-sticky;position:sticky;top:0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator{padding:5px 5px 5px 19px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-7px;top:14px;height:calc(100% - 14px);width:1px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a{min-height:14px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-14px;width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done .step-indicator{border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid red}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:grey}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:grey;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done .step-indicator{background-color:#393;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:red;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:grey;border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done .step-indicator{color:#393;border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:red;border:2px solid red}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767;color:#676767}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326;color:#267326}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212;color:#12e212}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00;color:#c00}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:grey;color:grey}aw-wizard-navigation-bar.vertical ul.steps-indicator{display:flex;flex-direction:column;justify-content:center;list-style:none;margin:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.vertical ul.steps-indicator li{position:relative;pointer-events:none}aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child){margin-bottom:0;padding-bottom:10px}aw-wizard-navigation-bar.vertical ul.steps-indicator li a{display:flex;flex-direction:row;align-items:center;cursor:pointer}aw-wizard-navigation-bar.vertical ul.steps-indicator li a .label{margin-left:15px;color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:left;font-weight:700;transition:.25s}aw-wizard-navigation-bar.vertical ul.steps-indicator li a:hover .label{color:#4d4d4d}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a .label{color:grey}aw-wizard-navigation-bar.vertical ul.steps-indicator li.navigable{pointer-events:auto}"]
                    }] }
        ];
        WizardNavigationBarComponent.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        WizardNavigationBarComponent.propDecorators = {
            direction: [{ type: core.Input }]
        };
        return WizardNavigationBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The `aw-wizard-step` component is used to define a normal step inside a wizard.
     *
     * ### Syntax
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <aw-wizard-step"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    <ng-template awWizardStepTitle>
     *        step title
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        symbol
     *    </ng-template>
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * ### Example
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <aw-wizard-step>
     *    <ng-template awWizardStepTitle>
     *        Address information
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        <i class="fa fa-taxi"></i>
     *    </ng-template>
     * </aw-wizard-step>
     * ```
     *
     * @author Marc Arndt
     */
    var WizardStepComponent = /** @class */ (function (_super) {
        __extends(WizardStepComponent, _super);
        /**
         * The `aw-wizard-step` component is used to define a normal step inside a wizard.
         *
         * ### Syntax
         *
         * With `stepTitle` and `navigationSymbol` inputs:
         *
         * ```html
         * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
         *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
         *    ...
         * </aw-wizard-step>
         * ```
         *
         * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
         *
         * ```html
         * <aw-wizard-step"
         *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
         *    <ng-template awWizardStepTitle>
         *        step title
         *    </ng-template>
         *    <ng-template awWizardStepSymbol>
         *        symbol
         *    </ng-template>
         *    ...
         * </aw-wizard-step>
         * ```
         *
         * ### Example
         *
         * With `stepTitle` and `navigationSymbol` inputs:
         *
         * ```html
         * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
         *    ...
         * </aw-wizard-step>
         * ```
         *
         * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
         *
         * ```html
         * <aw-wizard-step>
         *    <ng-template awWizardStepTitle>
         *        Address information
         *    </ng-template>
         *    <ng-template awWizardStepSymbol>
         *        <i class="fa fa-taxi"></i>
         *    </ng-template>
         * </aw-wizard-step>
         * ```
         *
         * @author Marc Arndt
         */
        function WizardStepComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WizardStepComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aw-wizard-step',
                        template: "<ng-content></ng-content>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [
                            { provide: WizardStep, useExisting: core.forwardRef(function () { return WizardStepComponent; }) }
                        ],
                        styles: ["aw-wizard-step{height:auto;width:100%}"]
                    }] }
        ];
        return WizardStepComponent;
    }(WizardStep));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            this.stepExit = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        selector: '[awEnableBackLinks]'
                    },] }
        ];
        EnableBackLinksDirective.ctorParameters = function () {
            return [
                { type: WizardCompletionStep, decorators: [{ type: core.Host }] }
            ];
        };
        EnableBackLinksDirective.propDecorators = {
            stepExit: [{ type: core.Output }]
        };
        return EnableBackLinksDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Checks whether the given `value` implements the interface [[StepOffset]].
     *
     * @param {?} value The value to be checked
     * @return {?} True if the given value implements [[StepOffset]] and false otherwise
     */
    function isStepOffset(value) {
        return value.hasOwnProperty('stepOffset');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Checks whether the given `value` implements the interface [[StepId]].
     *
     * @param {?} value The value to be checked
     * @return {?} True if the given value implements [[StepId]] and false otherwise
     */
    function isStepId(value) {
        return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Checks whether the given `value` implements the interface [[StepIndex]].
     *
     * @param {?} value The value to be checked
     * @return {?} True if the given value implements [[StepIndex]] and false otherwise
     */
    function isStepIndex(value) {
        return value.hasOwnProperty('stepIndex');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            this.preFinalize = new core.EventEmitter();
            /**
             * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
             */
            this.postFinalize = new core.EventEmitter();
        }
        Object.defineProperty(GoToStepDirective.prototype, "finalize", {
            /**
             * A convenience field for `preFinalize`
             */
            get: /**
             * A convenience field for `preFinalize`
             * @return {?}
             */ function () {
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
             */ function (emitter) {
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
             */ function () {
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
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[awGoToStep]'
                    },] }
        ];
        GoToStepDirective.ctorParameters = function () {
            return [
                { type: WizardState },
                { type: WizardStep, decorators: [{ type: core.Optional }] }
            ];
        };
        GoToStepDirective.propDecorators = {
            preFinalize: [{ type: core.Output }],
            postFinalize: [{ type: core.Output }],
            finalize: [{ type: core.Output }],
            targetStep: [{ type: core.Input, args: ['awGoToStep',] }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return GoToStepDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            this.preFinalize = new core.EventEmitter();
            /**
             * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
             */
            this.postFinalize = new core.EventEmitter();
        }
        Object.defineProperty(NextStepDirective.prototype, "finalize", {
            /**
             * A convenience field for `preFinalize`
             */
            get: /**
             * A convenience field for `preFinalize`
             * @return {?}
             */ function () {
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
             */ function (emitter) {
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
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[awNextStep]'
                    },] }
        ];
        NextStepDirective.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        NextStepDirective.propDecorators = {
            preFinalize: [{ type: core.Output }],
            postFinalize: [{ type: core.Output }],
            finalize: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return NextStepDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
     * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-step awOptionalStep>
     *     ...
     * </aw-wizard-step>
     * ```
     *
     * ### Example
     *
     * ```html
     * <aw-wizard-step stepTitle="Second step" awOptionalStep>
     *     ...
     * </aw-wizard-step>
     * ```
     *
     * @author Marc Arndt
     */
    var OptionalStepDirective = /** @class */ (function () {
        /**
         * Constructor
         *
         * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
         */
        function OptionalStepDirective(wizardStep) {
            this.wizardStep = wizardStep;
        }
        /**
         * Initialization work
         */
        /**
         * Initialization work
         * @return {?}
         */
        OptionalStepDirective.prototype.ngOnInit = /**
         * Initialization work
         * @return {?}
         */
            function () {
                this.wizardStep.optional = true;
            };
        OptionalStepDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[awOptionalStep]'
                    },] }
        ];
        OptionalStepDirective.ctorParameters = function () {
            return [
                { type: WizardStep, decorators: [{ type: core.Host }] }
            ];
        };
        return OptionalStepDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The `awPreviousStep` directive can be used to navigate to the previous step.
     * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
     *
     * ### Syntax
     *
     * ```html
     * <button awPreviousStep>...</button>
     * ```
     *
     * @author Marc Arndt
     */
    var PreviousStepDirective = /** @class */ (function () {
        /**
         * Constructor
         *
         * @param wizardState The state of the wizard
         */
        function PreviousStepDirective(wizardState) {
            this.wizardState = wizardState;
            /**
             * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
             */
            this.preFinalize = new core.EventEmitter();
            /**
             * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
             */
            this.postFinalize = new core.EventEmitter();
        }
        Object.defineProperty(PreviousStepDirective.prototype, "finalize", {
            /**
             * A convenience field for `preFinalize`
             */
            get: /**
             * A convenience field for `preFinalize`
             * @return {?}
             */ function () {
                return this.preFinalize;
            },
            /**
             * A convenience field for `preFinalize`
             *
             * @param emitter The [[EventEmitter]] to be set
             */
            set: /**
             * A convenience field for `preFinalize`
             *
             * @param {?} emitter The [[EventEmitter]] to be set
             * @return {?}
             */ function (emitter) {
                /* istanbul ignore next */
                this.preFinalize = emitter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PreviousStepDirective.prototype, "navigationMode", {
            /**
             * The navigation mode
             */
            get: /**
             * The navigation mode
             * @return {?}
             */ function () {
                return this.wizardState.navigationMode;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listener method for `click` events on the component with this directive.
         * After this method is called the wizard will try to transition to the previous step
         */
        /**
         * Listener method for `click` events on the component with this directive.
         * After this method is called the wizard will try to transition to the previous step
         * @param {?} event
         * @return {?}
         */
        PreviousStepDirective.prototype.onClick = /**
         * Listener method for `click` events on the component with this directive.
         * After this method is called the wizard will try to transition to the previous step
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.navigationMode.goToPreviousStep(this.preFinalize, this.postFinalize);
            };
        PreviousStepDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[awPreviousStep]'
                    },] }
        ];
        PreviousStepDirective.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        PreviousStepDirective.propDecorators = {
            preFinalize: [{ type: core.Output }],
            postFinalize: [{ type: core.Output }],
            finalize: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return PreviousStepDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            this.finalize = new core.EventEmitter();
        }
        Object.defineProperty(ResetWizardDirective.prototype, "navigationMode", {
            /**
             * The navigation mode
             */
            get: /**
             * The navigation mode
             * @return {?}
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[awResetWizard]'
                    },] }
        ];
        ResetWizardDirective.ctorParameters = function () {
            return [
                { type: WizardState }
            ];
        };
        ResetWizardDirective.propDecorators = {
            finalize: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return ResetWizardDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            { type: core.Directive, args: [{
                        selector: '[awSelectedStep]'
                    },] }
        ];
        SelectedStepDirective.ctorParameters = function () {
            return [
                { type: WizardStep, decorators: [{ type: core.Host }] }
            ];
        };
        return SelectedStepDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
        __extends(WizardCompletionStepDirective, _super);
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
            { type: core.Directive, args: [{
                        selector: '[awWizardCompletionStep]',
                        providers: [
                            { provide: WizardStep, useExisting: core.forwardRef(function () { return WizardCompletionStepDirective; }) },
                            { provide: WizardCompletionStep, useExisting: core.forwardRef(function () { return WizardCompletionStepDirective; }) }
                        ]
                    },] }
        ];
        return WizardCompletionStepDirective;
    }(WizardCompletionStep));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The `awWizardStep` directive can be used to define a normal step inside a wizard.
     *
     * ### Syntax
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    ...
     * </div>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    <ng-template awWizardStepTitle>
     *        step title
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        symbol
     *    </ng-template>
     *    ...
     * </div>
     * ```
     *
     * ### Example
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </div>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <div awWizardStep>
     *    <ng-template awWizardStepTitle>
     *        Address information
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        <i class="fa fa-taxi"></i>
     *    </ng-template>
     * </div>
     * ```
     *
     * @author Marc Arndt
     */
    var WizardStepDirective = /** @class */ (function (_super) {
        __extends(WizardStepDirective, _super);
        /**
         * The `awWizardStep` directive can be used to define a normal step inside a wizard.
         *
         * ### Syntax
         *
         * With `stepTitle` and `navigationSymbol` inputs:
         *
         * ```html
         * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
         *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
         *    ...
         * </div>
         * ```
         *
         * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
         *
         * ```html
         * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
         *    <ng-template awWizardStepTitle>
         *        step title
         *    </ng-template>
         *    <ng-template awWizardStepSymbol>
         *        symbol
         *    </ng-template>
         *    ...
         * </div>
         * ```
         *
         * ### Example
         *
         * With `stepTitle` and `navigationSymbol` inputs:
         *
         * ```html
         * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
         *    ...
         * </div>
         * ```
         *
         * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
         *
         * ```html
         * <div awWizardStep>
         *    <ng-template awWizardStepTitle>
         *        Address information
         *    </ng-template>
         *    <ng-template awWizardStepSymbol>
         *        <i class="fa fa-taxi"></i>
         *    </ng-template>
         * </div>
         * ```
         *
         * @author Marc Arndt
         */
        function WizardStepDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WizardStepDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[awWizardStep]',
                        providers: [
                            { provide: WizardStep, useExisting: core.forwardRef(function () { return WizardStepDirective; }) }
                        ]
                    },] }
        ];
        return WizardStepDirective;
    }(WizardStep));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The module defining all the content inside `angular-archwizard`
     *
     * @author Marc Arndt
     */
    var ArchwizardModule = /** @class */ (function () {
        /**
         * The module defining all the content inside `angular-archwizard`
         *
         * @author Marc Arndt
         */
        function ArchwizardModule() {
        }
        /* istanbul ignore next */
        /* istanbul ignore next */
        /**
         * @return {?}
         */
        ArchwizardModule.forRoot = /* istanbul ignore next */
            /**
             * @return {?}
             */
            function () {
                return { ngModule: ArchwizardModule, providers: [] };
            };
        ArchwizardModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            WizardComponent,
                            WizardStepComponent,
                            WizardNavigationBarComponent,
                            WizardCompletionStepComponent,
                            GoToStepDirective,
                            NextStepDirective,
                            PreviousStepDirective,
                            OptionalStepDirective,
                            WizardStepSymbolDirective,
                            WizardStepTitleDirective,
                            EnableBackLinksDirective,
                            WizardStepDirective,
                            WizardCompletionStepDirective,
                            SelectedStepDirective,
                            ResetWizardDirective
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            WizardComponent,
                            WizardStepComponent,
                            WizardNavigationBarComponent,
                            WizardCompletionStepComponent,
                            GoToStepDirective,
                            NextStepDirective,
                            PreviousStepDirective,
                            OptionalStepDirective,
                            WizardStepSymbolDirective,
                            WizardStepTitleDirective,
                            EnableBackLinksDirective,
                            WizardStepDirective,
                            WizardCompletionStepDirective,
                            SelectedStepDirective,
                            ResetWizardDirective
                        ]
                    },] }
        ];
        return ArchwizardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ArchwizardModule = ArchwizardModule;
    exports.WizardComponent = WizardComponent;
    exports.WizardCompletionStepComponent = WizardCompletionStepComponent;
    exports.WizardNavigationBarComponent = WizardNavigationBarComponent;
    exports.WizardStepComponent = WizardStepComponent;
    exports.EnableBackLinksDirective = EnableBackLinksDirective;
    exports.GoToStepDirective = GoToStepDirective;
    exports.NextStepDirective = NextStepDirective;
    exports.OptionalStepDirective = OptionalStepDirective;
    exports.PreviousStepDirective = PreviousStepDirective;
    exports.ResetWizardDirective = ResetWizardDirective;
    exports.SelectedStepDirective = SelectedStepDirective;
    exports.WizardCompletionStepDirective = WizardCompletionStepDirective;
    exports.WizardStepDirective = WizardStepDirective;
    exports.WizardStepTitleDirective = WizardStepTitleDirective;
    exports.FreeNavigationMode = FreeNavigationMode;
    exports.NavigationMode = NavigationMode;
    exports.SemiStrictNavigationMode = SemiStrictNavigationMode;
    exports.StrictNavigationMode = StrictNavigationMode;
    exports.WizardState = WizardState;
    exports.navigationModeFactory = navigationModeFactory;
    exports.MovingDirection = MovingDirection;
    exports.WizardCompletionStep = WizardCompletionStep;
    exports.WizardStep = WizardStep;
    exports.isStepId = isStepId;
    exports.isStepIndex = isStepIndex;
    exports.isStepOffset = isStepOffset;
    exports.ɵh = WizardCompletionStepComponent;
    exports.ɵg = WizardNavigationBarComponent;
    exports.ɵf = WizardStepComponent;
    exports.ɵa = WizardComponent;
    exports.ɵn = EnableBackLinksDirective;
    exports.ɵj = GoToStepDirective;
    exports.ɵk = NextStepDirective;
    exports.ɵm = OptionalStepDirective;
    exports.ɵl = PreviousStepDirective;
    exports.ɵr = ResetWizardDirective;
    exports.ɵq = SelectedStepDirective;
    exports.ɵp = WizardCompletionStepDirective;
    exports.ɵe = WizardStepSymbolDirective;
    exports.ɵd = WizardStepTitleDirective;
    exports.ɵo = WizardStepDirective;
    exports.ɵb = WizardState;
    exports.ɵi = WizardCompletionStep;
    exports.ɵc = WizardStep;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hcmNod2l6YXJkLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy93aXphcmQtc3RlcC1zeW1ib2wuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9uYXZpZ2F0aW9uL2ZyZWUtbmF2aWdhdGlvbi1tb2RlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9zZW1pLXN0cmljdC1uYXZpZ2F0aW9uLW1vZGUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9zdHJpY3QtbmF2aWdhdGlvbi1tb2RlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL2VuYWJsZS1iYWNrLWxpbmtzLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3N0ZXAtb2Zmc2V0LmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3N0ZXAtaWQuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvc3RlcC1pbmRleC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9nby10by1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9vcHRpb25hbC1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3ByZXZpb3VzLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvcmVzZXQtd2l6YXJkLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3NlbGVjdGVkLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy93aXphcmQtc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvYXJjaHdpemFyZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBtYXJjIG9uIDAxLjA2LjE3LlxyXG4gKi9cclxuaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3V2l6YXJkU3RlcFRpdGxlYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gdGhlIGBzdGVwVGl0bGVgIGlucHV0IG9mIGEgW1tXaXphcmRTdGVwXV1cclxuICogdG8gZGVmaW5lIHRoZSBjb250ZW50IG9mIGEgc3RlcCB0aXRsZSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxyXG4gKiBUaGlzIHN0ZXAgdGl0bGUgY2FuIGJlIGZyZWVseSBjcmVhdGVkIGFuZCBjYW4gY29udGFpbiBtb3JlIHRoYW4gb25seSBwbGFpbiB0ZXh0XHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XHJcbiAqICAgICAuLi5cclxuICogPC9uZy10ZW1wbGF0ZT5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthd1N0ZXBUaXRsZV0sIG5nLXRlbXBsYXRlW2F3V2l6YXJkU3RlcFRpdGxlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVJlZiBBIHJlZmVyZW5jZSB0byB0aGUgY29udGVudCBvZiB0aGUgYG5nLXRlbXBsYXRlYCB0aGF0IGNvbnRhaW5zIHRoaXMgW1tXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmVdXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIGFzIGFuIGFsdGVybmF0aXZlIHRvIHRoZSBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXQgb2YgYSBbW1dpemFyZFN0ZXBdXVxyXG4gKiB0byBkZWZpbmUgdGhlIHN0ZXAgc3ltYm9sIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuICBUaGlzIHdheSBzdGVwIHN5bWJvbCBtYXkgY29udGFpbiBhcmJpdHJhcnkgY29udGVudC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XHJcbiAqICAgICAuLi5cclxuICogPC9uZy10ZW1wbGF0ZT5cclxuICogYGBgXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F3U3RlcFN5bWJvbF0sIG5nLXRlbXBsYXRlW2F3V2l6YXJkU3RlcFN5bWJvbF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IG9mIHRoZSBgbmctdGVtcGxhdGVgIHRoYXQgY29udGFpbnMgdGhpcyBbW1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmVdXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PikgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4vbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcclxuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05hdmlnYXRpb25TeW1ib2x9IGZyb20gJy4vbmF2aWdhdGlvbi1zeW1ib2wuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIEJhc2ljIGZ1bmN0aW9uYWxpdHkgZXZlcnkgdHlwZSBvZiB3aXphcmQgc3RlcCBuZWVkcyB0byBwcm92aWRlXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZFN0ZXAge1xyXG4gIC8qKlxyXG4gICAqIEEgc3RlcCB0aXRsZSBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgdGhlIHZpc2libGUgaGVhZGVyIHRpdGxlIG9mIHRoZSBzdGVwLlxyXG4gICAqIFRoaXMgdGl0bGUgaXMgdGhlbiBzaG93biBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxyXG4gICAqIENvbXBhcmVkIHRvIGBzdGVwVGl0bGVgIHRoaXMgcHJvcGVydHkgY2FuIGNvbnRhaW4gYW55IGh0bWwgY29udGVudCBhbmQgbm90IG9ubHkgcGxhaW4gdGV4dFxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGQoV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlKVxyXG4gIHB1YmxpYyBzdGVwVGl0bGVUZW1wbGF0ZTogV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlO1xyXG5cclxuICAvKipcclxuICAgKiBBIHN0ZXAgc3ltYm9sIHByb3BlcnR5IHRoYXQsIGlmIGRlZmluZWQsIG92ZXJyaWRlcyBgbmF2aWdhdGlvblN5bWJvbGAuXHJcbiAgICogQWxsb3dzIHRvIGRpc3BsYXkgYXJiaXRyYXJ5IGNvbnRlbnQgYXMgYSBzdGVwIHN5bWJvbCBpbnN0ZWFkIG9mIHBsYWluIHRleHQuXHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlKVxyXG4gIHB1YmxpYyBzdGVwU3ltYm9sVGVtcGxhdGU6IFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc3RlcCBpZCwgdW5pcXVlIHRvIHRoZSBzdGVwXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3RlcElkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc3RlcCB0aXRsZSBwcm9wZXJ0eSwgd2hpY2ggY29udGFpbnMgdGhlIHZpc2libGUgaGVhZGVyIHRpdGxlIG9mIHRoZSBzdGVwLlxyXG4gICAqIFRoaXMgdGl0bGUgaXMgb25seSBzaG93biBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLCBpZiBgc3RlcFRpdGxlVGVtcGxhdGVgIGlzIG5vdCBkZWZpbmVkIG9yIG51bGwuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3RlcFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc3ltYm9sIHByb3BlcnR5LCB3aGljaCBjb250YWlucyBhbiBvcHRpb25hbCBzeW1ib2wgZm9yIHRoZSBzdGVwIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXHJcbiAgICogVGFrZXMgZWZmZWN0IHdoZW4gYHN0ZXBTeW1ib2xUZW1wbGF0ZWAgaXMgbm90IGRlZmluZWQgb3IgbnVsbC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBuYXZpZ2F0aW9uU3ltYm9sOiBOYXZpZ2F0aW9uU3ltYm9sID0geyBzeW1ib2w6ICcnIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBoYXMgYmVlbiBjb21wbGV0ZWRcclxuICAgKi9cclxuICBwdWJsaWMgY29tcGxldGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcclxuICAgKi9cclxuICBwdWJsaWMgc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcsIGlmIHRoZSB3aXphcmQgc3RlcCBzaG91bGQgYmUgc2VsZWN0ZWQgYnkgZGVmYXVsdCwgaS5lLiBhZnRlciB0aGUgd2l6YXJkIGhhcyBiZWVuIGluaXRpYWxpemVkIGFzIHRoZSBpbml0aWFsIHN0ZXBcclxuICAgKi9cclxuICBwdWJsaWMgZGVmYXVsdFNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBhbiBvcHRpb25hbCBzdGVwXHJcbiAgICovXHJcbiAgcHVibGljIG9wdGlvbmFsID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gb3IgYm9vbGVhbiBkZWNpZGluZywgaWYgdGhpcyBzdGVwIGNhbiBiZSBlbnRlcmVkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY2FuRW50ZXI6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiBvciBib29sZWFuIGRlY2lkaW5nLCBpZiB0aGlzIHN0ZXAgY2FuIGJlIGV4aXRlZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNhbkV4aXQ6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWQuXHJcbiAgICogVGhlIGJvdW5kIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB0byBkbyBpbml0aWFsaXphdGlvbiB3b3JrLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzdGVwRW50ZXI6IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBleGl0ZWQuXHJcbiAgICogVGhlIGJvdW5kIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBkbyBjbGVhbnVwIHdvcmsuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHN0ZXBFeGl0OiBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGlmIHRoaXMgd2l6YXJkIHN0ZXAgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXIuXHJcbiAgICogSWYgdGhlIHN0ZXAgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXIgZmFsc2UgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSB0cnVlXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKVxyXG4gIHB1YmxpYyBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0cnVlLCBpZiB0aGlzIHdpemFyZCBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWQgd2l0aCBhIGdpdmVuIGRpcmVjdGlvbi5cclxuICAgKiBUcmFuc2l0aW9uZWQgaW4gdGhpcyBjYXNlIG1lYW5zIGVpdGhlciBlbnRlcmVkIG9yIGV4aXRlZCwgZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiBgY29uZGl0aW9uYCBwYXJhbWV0ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29uZGl0aW9uIEEgY29uZGl0aW9uIHZhcmlhYmxlLCBkZWNpZGluZyBpZiB0aGUgc3RlcCBjYW4gYmUgdHJhbnNpdGlvbmVkXHJcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgdHJhbnNpdGlvbmVkXHJcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhpcyBzdGVwIGNhbiB0cmFuc2l0aW9uZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvblxyXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGNvbmRpdGlvbmAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBjYW5UcmFuc2l0aW9uU3RlcChjb25kaXRpb246ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IFByb21pc2U8Ym9vbGVhbj4pIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmICh0eXBlb2YoY29uZGl0aW9uKSA9PT0gdHlwZW9mKHRydWUpKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZGl0aW9uIGFzIGJvb2xlYW4pO1xyXG4gICAgfSBlbHNlIGlmIChjb25kaXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbmRpdGlvbihkaXJlY3Rpb24pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYElucHV0IHZhbHVlICcke2NvbmRpdGlvbn0nIGlzIG5laXRoZXIgYSBib29sZWFuIG5vciBhIGZ1bmN0aW9uYCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBlbnRlcmVkXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXAgaXMgZW50ZXJlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBlbnRlcihkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5zdGVwRW50ZXIuZW1pdChkaXJlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBleGl0ZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgc3RlcCBpcyBleGl0ZWRcclxuICAgKi9cclxuICBwdWJsaWMgZXhpdChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikge1xyXG4gICAgdGhpcy5zdGVwRXhpdC5lbWl0KGRpcmVjdGlvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgZnJvbSB0aGUgZ2l2ZW4gZGlyZWN0aW9uLlxyXG4gICAqIEJlY2F1c2UgdGhpcyBtZXRob2QgZGVwZW5kcyBvbiB0aGUgdmFsdWUgYGNhbkVudGVyYCwgaXQgd2lsbCB0aHJvdyBhbiBlcnJvciwgaWYgYGNhbkVudGVyYCBpcyBuZWl0aGVyIGEgYm9vbGVhblxyXG4gICAqIG5vciBhIGZ1bmN0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgZW50ZXJlZFxyXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBzdGVwIGNhbiBiZSBlbnRlcmVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGFuRW50ZXJgIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXHJcbiAgICovXHJcbiAgcHVibGljIGNhbkVudGVyU3RlcChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIFdpemFyZFN0ZXAuY2FuVHJhbnNpdGlvblN0ZXAodGhpcy5jYW5FbnRlciwgZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgZXhpdGVkIGludG8gZ2l2ZW4gZGlyZWN0aW9uLlxyXG4gICAqIEJlY2F1c2UgdGhpcyBtZXRob2QgZGVwZW5kcyBvbiB0aGUgdmFsdWUgYGNhbkV4aXRgLCBpdCB3aWxsIHRocm93IGFuIGVycm9yLCBpZiBgY2FuRXhpdGAgaXMgbmVpdGhlciBhIGJvb2xlYW5cclxuICAgKiBub3IgYSBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIGxlZnRcclxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGUgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGNhbkV4aXRgIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXHJcbiAgICovXHJcbiAgcHVibGljIGNhbkV4aXRTdGVwKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gV2l6YXJkU3RlcC5jYW5UcmFuc2l0aW9uU3RlcCh0aGlzLmNhbkV4aXQsIGRpcmVjdGlvbik7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIGEgc3RlcCB0cmFuc2l0aW9uIHdhcyBtYWRlXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGVudW0gY29udGFpbnMgdGhlIGRpZmZlcmVudCBwb3NzaWJsZSBtb3ZpbmcgZGlyZWN0aW9ucyBpbiB3aGljaCBhIHdpemFyZCBjYW4gYmUgdHJhdmVyc2VkXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGVudW0gTW92aW5nRGlyZWN0aW9uIHtcclxuICAvKipcclxuICAgKiBBIGZvcndhcmQgc3RlcCB0cmFuc2l0aW9uXHJcbiAgICovXHJcbiAgRm9yd2FyZHMsXHJcbiAgLyoqXHJcbiAgICogQSBiYWNrd2FyZCBzdGVwIHRyYW5zaXRpb25cclxuICAgKi9cclxuICBCYWNrd2FyZHMsXHJcbiAgLyoqXHJcbiAgICogTm8gc3RlcCB0cmFuc2l0aW9uIHdhcyBkb25lXHJcbiAgICovXHJcbiAgU3RheVxyXG59XHJcbiIsImltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEFuIGludGVyZmFjZSBkZXNjcmliaW5nIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXR5LCB3aGljaCBtdXN0IGJlIHByb3ZpZGVkIGJ5IGEgbmF2aWdhdGlvbiBtb2RlLlxyXG4gKiBBIG5hdmlnYXRpb24gbW9kZSBtYW5hZ2VzIHRoZSBuYXZpZ2F0aW9uIGJldHdlZW4gZGlmZmVyZW50IHdpemFyZCBzdGVwcywgdGhpcyBjb250YWlucyB0aGUgdmFsaWRhdGlvbiwgaWYgYSBzdGVwIHRyYW5zaXRpb24gY2FuIGJlIGRvbmVcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmF2aWdhdGlvbk1vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcywgd2hldGhlciBhIHdpemFyZCBzdGVwLCBhcyBkZWZpbmVkIGJ5IHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleCwgY2FuIGJlIHRyYW5zaXRpb25lZCB0by5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gYW5kIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdG8gdGhlIHdpemFyZCBzdGVwLCBhcyBkZW5vdGVkIGJ5IHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgKiBJZiB0aGlzIGlzIG5vdCBwb3NzaWJsZSwgdGhlIGN1cnJlbnQgd2l6YXJkIHN0ZXAgc2hvdWxkIGJlIGV4aXRlZCBhbmQgdGhlbiByZWVudGVyZWQgd2l0aCBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKi9cclxuICBhYnN0cmFjdCBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MsIHdoZXRoZXIgdGhlIHdpemFyZCBzdGVwLCBsb2NhdGVkIGF0IHRoZSBnaXZlbiBpbmRleCwgaXMgY2FuIGJlIG5hdmlnYXRlZCB0b1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvLCBmYWxzZSBvdGhlcndpc2VcclxuICAgKi9cclxuICBhYnN0cmFjdCBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxyXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxyXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcclxuICAgKi9cclxuICBhYnN0cmFjdCByZXNldCgpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBUcmllcyB0byB0cmFuc2l0aW9uIHRoZSB3aXphcmQgdG8gdGhlIHByZXZpb3VzIHN0ZXAgZnJvbSB0aGUgYGN1cnJlbnRTdGVwYFxyXG4gICAqL1xyXG4gIGdvVG9QcmV2aW91c1N0ZXAocHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMud2l6YXJkU3RhdGUuaGFzUHJldmlvdXNTdGVwKCkpIHtcclxuICAgICAgdGhpcy5nb1RvU3RlcCh0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggLSAxLCBwcmVGaW5hbGl6ZSwgcG9zdEZpbmFsaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdGhlIHdpemFyZCB0byB0aGUgbmV4dCBzdGVwIGZyb20gdGhlIGBjdXJyZW50U3RlcGBcclxuICAgKi9cclxuICBnb1RvTmV4dFN0ZXAocHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMud2l6YXJkU3RhdGUuaGFzTmV4dFN0ZXAoKSkge1xyXG4gICAgICB0aGlzLmdvVG9TdGVwKHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCArIDEsIHByZUZpbmFsaXplLCBwb3N0RmluYWxpemUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBBIFtbTmF2aWdhdGlvbk1vZGVdXSwgd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIHdpdGhvdXQgYW55IGxpbWl0YXRpb25zLFxyXG4gKiBhcyBsb25nIGFzIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZyZWVOYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBtb2RlbC9zdGF0ZSBvZiB0aGUgd2l6YXJkLCB0aGF0IGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGlzIG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xyXG4gICAgc3VwZXIod2l6YXJkU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHdpemFyZCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLlxyXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XHJcbiAgICogLSBpdCBleGlzdHNcclxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgaGFzU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jYW5FeGl0U3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KS5jYW5FbnRlclN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzU3RlcClcclxuICAgICAgLnRoZW4oY2FuRXhpdEN1cnJlbnRTdGVwKVxyXG4gICAgICAudGhlbihjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmllcyB0byBlbnRlciB0aGUgd2l6YXJkIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIGNvbXBsZXRlZFxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIHVuc2VsZWN0ZWRcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxyXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgc2V0IGFzIHNlbGVjdGVkXHJcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBlbnRlcmVkXHJcbiAgICpcclxuICAgKiBXaGVuIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNvdWxkbid0IGJlIGVudGVyZWQsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcclxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGFuZCBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gYE1vdmluZ0RpcmVjdGlvbi5TdGF5YFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGVudGVyZWRcclxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKi9cclxuICBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XHJcbiAgICAgIGlmIChuYXZpZ2F0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXHJcbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHByZUZpbmFsaXplKSB7XHJcbiAgICAgICAgICBwcmVGaW5hbGl6ZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZWF2ZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xyXG5cclxuICAgICAgICAvLyBnbyB0byBuZXh0IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChwb3N0RmluYWxpemUpIHtcclxuICAgICAgICAgIHBvc3RGaW5hbGl6ZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0ZXAgY2FuJ3QgYmUgbGVmdCwgcmVlbnRlciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cclxuICAgKiBBIHJlc2V0IHRyYW5zaXRpb25zIHRoZSB3aXphcmQgYXV0b21hdGljYWxseSB0byB0aGUgZmlyc3Qgc3RlcCBhbmQgc2V0cyBhbGwgc3RlcHMgYXMgaW5jb21wbGV0ZS5cclxuICAgKiBJbiBhZGRpdGlvbiB0aGUgd2hvbGUgd2l6YXJkIGlzIHNldCBhcyBpbmNvbXBsZXRlXHJcbiAgICovXHJcbiAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCB0aGUgZGVmYXVsdCBzdGVwIGluZGV4XHJcbiAgICBpZiAoIXRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcCh0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcclxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgc3RlcC5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4vbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEJhc2ljIGZ1bmN0aW9uYWxpdHkgZXZlcnkgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCBuZWVkcyB0byBwcm92aWRlXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwIGV4dGVuZHMgV2l6YXJkU3RlcCB7XHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwdWJsaWMgc3RlcEV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwdWJsaWMgY2FuRXhpdDogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcHVibGljIGVudGVyKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICB0aGlzLnN0ZXBFbnRlci5lbWl0KGRpcmVjdGlvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHB1YmxpYyBleGl0KGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAvLyBzZXQgdGhpcyBjb21wbGV0aW9uIHN0ZXAgYXMgaW5jb21wbGV0ZVxyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc3RlcEV4aXQuZW1pdChkaXJlY3Rpb24pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRoIHNvbWUgbGltaXRhdGlvbnMuXHJcbiAqIFRoZSB1c2VyIGNhbiBvbmx5IG5hdmlnYXRpb24gdG8gYSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLCBpZjpcclxuICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gKiAtIGEgY29tcGxldGlvbiBzdGVwIGNhbiBvbmx5IGJlIGVudGVyZWQsIGlmIGFsbCBcIm5vcm1hbFwiIHdpemFyZCBzdGVwcyBoYXZlIGJlZW4gY29tcGxldGVkXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlbWlTdHJpY3ROYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBtb2RlbC9zdGF0ZSBvZiB0aGUgd2l6YXJkLCB0aGF0IGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGlzIG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xyXG4gICAgc3VwZXIod2l6YXJkU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHdpemFyZCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLlxyXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XHJcbiAgICogLSBpdCBleGlzdHNcclxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICogLSBhbGwgXCJub3JtYWxcIiB3aXphcmQgc3RlcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZCwgYXJlIG9wdGlvbmFsIG9yIHNlbGVjdGVkLCBvciB0aGUgZGVzdGluYXRpb24gc3RlcCBpc24ndCBhIGNvbXBsZXRpb24gc3RlcFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkLCBmYWxzZSBvdGhlcndpc2VcclxuICAgKi9cclxuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGhhc1N0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAoZGVzdGluYXRpb25JbmRleCk7XHJcblxyXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XHJcblxyXG4gICAgY29uc3QgY2FuRXhpdEN1cnJlbnRTdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkuY2FuRW50ZXJTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwcm92aWRlIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGFzIGEgbGFtYmRhIGluIGNhc2UgdGhlIGluZGV4IGRvZXNuJ3QgZXhpc3QgKGkuZS4gaGFzU3RlcCA9PT0gZmFsc2UpXHJcbiAgICBjb25zdCBkZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHByZXZpb3VzKSB7XHJcbiAgICAgICAgY29uc3QgYWxsTm9ybWFsU3RlcHNDb21wbGV0ZWQgPSB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXHJcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4KVxyXG4gICAgICAgICAgLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCB8fCBzdGVwLnNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcclxuICAgICAgICAgICEodGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KSBpbnN0YW5jZW9mIFdpemFyZENvbXBsZXRpb25TdGVwKSB8fCBhbGxOb3JtYWxTdGVwc0NvbXBsZXRlZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxyXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXHJcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKVxyXG4gICAgICAudGhlbihkZXN0aW5hdGlvblN0ZXApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZXMgdG8gZW50ZXIgdGhlIHdpemFyZCBzdGVwIHdpdGggdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAqIFdoZW4gZW50ZXJpbmcgdGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyB1bnNlbGVjdGVkXHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWRcclxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIHNldCBhcyBzZWxlY3RlZFxyXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgZW50ZXJlZFxyXG4gICAqXHJcbiAgICogV2hlbiB0aGUgZGVzdGluYXRpb24gc3RlcCBjb3VsZG4ndCBiZSBlbnRlcmVkLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XHJcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBhbmQgZW50ZXJlZCBpbiB0aGUgZGlyZWN0aW9uIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXHJcbiAgICogQHBhcmFtIHByZUZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXHJcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXHJcbiAgICovXHJcbiAgZ29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyLCBwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXgpLnRoZW4obmF2aWdhdGlvbkFsbG93ZWQgPT4ge1xyXG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICAvLyB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvblxyXG4gICAgICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChwcmVGaW5hbGl6ZSkge1xyXG4gICAgICAgICAgcHJlRmluYWxpemUuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGVhdmUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChtb3ZpbmdEaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gZGVzdGluYXRpb25JbmRleDtcclxuXHJcbiAgICAgICAgLy8gZ28gdG8gbmV4dCBzdGVwXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihtb3ZpbmdEaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAocG9zdEZpbmFsaXplKSB7XHJcbiAgICAgICAgICBwb3N0RmluYWxpemUuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGVwIGNhbid0IGJlIGxlZnQsIHJlZW50ZXIgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpIGluc3RhbmNlb2YgV2l6YXJkQ29tcGxldGlvblN0ZXApIHtcclxuICAgICAgLy8gYSBjb21wbGV0aW9uIHN0ZXAgY2FuIG9ubHkgYmUgZW50ZXJlZCwgaWYgYWxsIHByZXZpb3VzIHN0ZXBzIGhhdmUgYmVlbiBjb21wbGV0ZWQsIGFyZSBvcHRpb25hbCwgb3Igc2VsZWN0ZWRcclxuICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4KVxyXG4gICAgICAgIC5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwgfHwgc3RlcC5zZWxlY3RlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBhIFwibm9ybWFsXCIgc3RlcCBjYW4gYWx3YXlzIGJlIGVudGVyZWRcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggdGhlIGRlZmF1bHQgc3RlcCBpbmRleFxyXG4gICAgaWYgKCF0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAodGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSBkZWZhdWx0IHN0ZXAgaXMgYSBjb21wbGV0aW9uIHN0ZXAgYW5kIHRoZSB3aXphcmQgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBzdGVwXHJcbiAgICBjb25zdCBkZWZhdWx0Q29tcGxldGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkgaW5zdGFuY2VvZiBXaXphcmRDb21wbGV0aW9uU3RlcCAmJlxyXG4gICAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmxlbmd0aCAhPT0gMTtcclxuXHJcbiAgICBpZiAoZGVmYXVsdENvbXBsZXRpb25TdGVwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgc3RlcCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH0gcmVmZXJlbmNlcyBhIGNvbXBsZXRpb24gc3RlcGApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlc2V0IHRoZSBzdGVwIGludGVybmFsIHN0YXRlXHJcbiAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgIHN0ZXAuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNldCB0aGUgZmlyc3Qgc3RlcCBhcyB0aGUgY3VycmVudCBzdGVwXHJcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXg7XHJcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRoIHN0cmljdCBsaW1pdGF0aW9ucy5cclxuICogVGhlIHVzZXIgY2FuIG9ubHkgbmF2aWdhdGlvbiB0byBhIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAsIGlmOlxyXG4gKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAqIC0gYWxsIHByZXZpb3VzIHN0ZXBzIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGhhdmUgYmVlbiBjb21wbGV0ZWQgb3IgYXJlIG9wdGlvbmFsXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmljdE5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XHJcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXHJcbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcclxuICAgKiAtIGl0IGV4aXN0c1xyXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKiAtIGFsbCBwcmV2aW91cyBzdGVwcyB0byB0aGUgZGVzdGluYXRpb24gc3RlcCBoYXZlIGJlZW4gY29tcGxldGVkIG9yIGFyZSBvcHRpb25hbFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkLCBmYWxzZSBvdGhlcndpc2VcclxuICAgKi9cclxuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGhhc1N0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAoZGVzdGluYXRpb25JbmRleCk7XHJcblxyXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XHJcblxyXG4gICAgY29uc3QgY2FuRXhpdEN1cnJlbnRTdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkuY2FuRW50ZXJTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhbGxQcmV2aW91c1N0ZXBzQ29tcGxldGUgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKHByZXZpb3VzKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXHJcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4ICYmIGluZGV4ICE9PSB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXgpXHJcbiAgICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxyXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXHJcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKVxyXG4gICAgICAudGhlbihhbGxQcmV2aW91c1N0ZXBzQ29tcGxldGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZXMgdG8gZW50ZXIgdGhlIHdpemFyZCBzdGVwIHdpdGggdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAqIFdoZW4gZW50ZXJpbmcgdGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyB1bnNlbGVjdGVkXHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWRcclxuICAgKiAtIGFsbCBzdGVwcyBiZXR3ZWVuIHRoZSBvbGQgY3VycmVudCBzdGVwIGFuZCB0aGUgZGVzdGluYXRpb24gc3RlcCBhcmUgbWFya2VkIGFzIGluY29tcGxldGVcclxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIHNldCBhcyBzZWxlY3RlZFxyXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgZW50ZXJlZFxyXG4gICAqXHJcbiAgICogV2hlbiB0aGUgZGVzdGluYXRpb24gc3RlcCBjb3VsZG4ndCBiZSBlbnRlcmVkLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XHJcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBhbmQgZW50ZXJlZCBpbiB0aGUgZGlyZWN0aW9uIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXHJcbiAgICogQHBhcmFtIHByZUZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXHJcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXHJcbiAgICovXHJcbiAgZ29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyLCBwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXgpLnRoZW4obmF2aWdhdGlvbkFsbG93ZWQgPT4ge1xyXG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcclxuICAgICAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcclxuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQobW92aW5nRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHNldCBhbGwgc3RlcHMgYWZ0ZXIgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgdG8gaW5jb21wbGV0ZVxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcclxuICAgICAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPiBkZXN0aW5hdGlvbkluZGV4ICYmIGluZGV4ID4gZGVzdGluYXRpb25JbmRleClcclxuICAgICAgICAgIC5mb3JFYWNoKHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgPSBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IGRlc3RpbmF0aW9uSW5kZXg7XHJcblxyXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIobW92aW5nRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xyXG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgLy8gYSB3aXphcmQgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvIHRocm91Z2ggdGhlIG5hdmlnYXRpb24gYmFyLCBpZmYgaXQncyBsb2NhdGVkIGJlZm9yZSB0aGUgY3VycmVudCB3aXphcmQgc3RlcFxyXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uSW5kZXggPCB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxyXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxyXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcclxuICAgKi9cclxuICByZXNldCgpOiB2b2lkIHtcclxuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcclxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdCBsZWFzdCBvbmUgc3RlcCBpcyBiZWZvcmUgdGhlIGRlZmF1bHQgc3RlcCwgdGhhdCBpcyBub3Qgb3B0aW9uYWxcclxuICAgIGNvbnN0IGlsbGVnYWxEZWZhdWx0U3RlcCA9IHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcclxuICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IGluZGV4IDwgdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KVxyXG4gICAgICAuc29tZShzdGVwID0+ICFzdGVwLm9wdGlvbmFsKTtcclxuXHJcbiAgICBpZiAoaWxsZWdhbERlZmF1bHRTdGVwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgc3RlcCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH0gaXMgbG9jYXRlZCBhZnRlciBhIG5vbiBvcHRpb25hbCBzdGVwYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcclxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgc3RlcC5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0ZyZWVOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9mcmVlLW5hdmlnYXRpb24tbW9kZSc7XHJcbmltcG9ydCB7U2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlfSBmcm9tICcuL3NlbWktc3RyaWN0LW5hdmlnYXRpb24tbW9kZSc7XHJcbmltcG9ydCB7U3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc3RyaWN0LW5hdmlnYXRpb24tbW9kZSc7XHJcblxyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcblxyXG4vKipcclxuICogQSBmYWN0b3J5IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBbW05hdmlnYXRpb25Nb2RlXV0gaW5zdGFuY2VzXHJcbiAqXHJcbiAqIEBwYXJhbSBuYXZpZ2F0aW9uTW9kZSBUaGUgbmFtZSBvZiB0aGUgdG8gYmUgdXNlZCBuYXZpZ2F0aW9uIG1vZGVcclxuICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGUgb2YgdGhlIHdpemFyZFxyXG4gKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBbW05hdmlnYXRpb25Nb2RlXV1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uTW9kZUZhY3RvcnkobmF2aWdhdGlvbk1vZGU6IHN0cmluZywgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKTogTmF2aWdhdGlvbk1vZGUge1xyXG4gIHN3aXRjaCAobmF2aWdhdGlvbk1vZGUpIHtcclxuICAgIGNhc2UgJ2ZyZWUnOlxyXG4gICAgICByZXR1cm4gbmV3IEZyZWVOYXZpZ2F0aW9uTW9kZSh3aXphcmRTdGF0ZSk7XHJcbiAgICBjYXNlICdzZW1pLXN0cmljdCc6XHJcbiAgICAgIHJldHVybiBuZXcgU2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlKHdpemFyZFN0YXRlKTtcclxuICAgIGNhc2UgJ3N0cmljdCc6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbmV3IFN0cmljdE5hdmlnYXRpb25Nb2RlKHdpemFyZFN0YXRlKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge25hdmlnYXRpb25Nb2RlRmFjdG9yeX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUucHJvdmlkZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpbnRlcm5hbCBtb2RlbC9zdGF0ZSBvZiBhIHdpemFyZC5cclxuICogVGhpcyBtb2RlbCBjb250YWluczpcclxuICogLSBhbiBhcnJheSB3aXRoIGFsbCBzdGVwcyB0aGUgd2l6YXJkIGNvbnRhaW5zXHJcbiAqIC0gdGhlIGluZGV4IG9mIHRoZSBzdGVwIHRoZSB3aXphcmQgY3VycmVudGx5IHJlc2lkZXMgaW5zaWRlXHJcbiAqIC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbXBsZXRlbmVzcyBvZiB0aGUgd2l6YXJkXHJcbiAqIC0gc29tZSBhZGRpdGlvbmFsIGhlbHBlciBtZXRob2RzXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RhdGUge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIHN0ZXAgaW5kZXgsIGFzIHRha2VuIGZyb20gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cclxuICAgKi9cclxuICBwcml2YXRlIF9kZWZhdWx0U3RlcEluZGV4ID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgYWxsIHdpemFyZCBzdGVwcyBiZWxvbmdpbmcgdG8gdGhpcyBtb2RlbFxyXG4gICAqL1xyXG4gIHB1YmxpYyB3aXphcmRTdGVwczogQXJyYXk8V2l6YXJkU3RlcD4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgaW5pdGlhbCBkZWZhdWx0IHN0ZXAuXHJcbiAgICogQmV3YXJlOiBUaGlzIGluaXRpYWwgZGVmYXVsdCBpcyBvbmx5IHVzZWQgaWYgbm8gd2l6YXJkIHN0ZXAgaGFzIGJlZW4gZW5oYW5jZWQgd2l0aCB0aGUgYHNlbGVjdGVkYCBkaXJlY3RpdmVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZWZhdWx0U3RlcEluZGV4IFRoZSBuZXcgZGVmYXVsdCB3aXphcmQgc3RlcCBpbmRleFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN0ZXBJbmRleChkZWZhdWx0U3RlcEluZGV4KSB7XHJcbiAgICB0aGlzLl9kZWZhdWx0U3RlcEluZGV4ID0gZGVmYXVsdFN0ZXBJbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIHN0ZXAgaW5kZXguXHJcbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgZWl0aGVyOlxyXG4gICAqIC0gdGhlIGluZGV4IG9mIGEgd2l6YXJkIHN0ZXAgd2l0aCBhIGBzZWxlY3RlZGAgZGlyZWN0aXZlLCBvclxyXG4gICAqIC0gdGhlIGRlZmF1bHQgc3RlcCBpbmRleCwgc2V0IGluIHRoZSBbW1dpemFyZENvbXBvbmVudF1dXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBkZWZhdWx0U3RlcEluZGV4KCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBmb3VuZERlZmF1bHRTdGVwID0gdGhpcy53aXphcmRTdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5kZWZhdWx0U2VsZWN0ZWQpO1xyXG5cclxuICAgIGlmIChmb3VuZERlZmF1bHRTdGVwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEluZGV4T2ZTdGVwKGZvdW5kRGVmYXVsdFN0ZXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTdGVwSW5kZXg7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBhbmQgc2VsZWN0ZWQgc3RlcCBpbnNpZGUgdGhlIHdpemFyZFN0ZXBzIFF1ZXJ5TGlzdC5cclxuICAgKiBJZiB0aGlzIHdpemFyZCBjb250YWlucyBubyBzdGVwcywgY3VycmVudFN0ZXBJbmRleCBpcyAtMVxyXG4gICAqL1xyXG4gIHB1YmxpYyBjdXJyZW50U3RlcEluZGV4ID0gLTE7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgdXNlZCB0byBuYXZpZ2F0ZSBpbnNpZGUgdGhlIHdpemFyZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBuYXZpZ2F0aW9uTW9kZTogTmF2aWdhdGlvbk1vZGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRydWUsIGlmIHRoZSBuYXZpZ2F0aW9uIGJhciBzaG91bGRuJ3QgYmUgdXNlZCBmb3IgbmF2aWdhdGluZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyBkaXNhYmxlTmF2aWdhdGlvbkJhcjogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIFdpemFyZFN0ZXAgb2JqZWN0IGJlbG9uZ2luZyB0byB0aGUgY3VycmVudGx5IHZpc2libGUgYW5kIHNlbGVjdGVkIHN0ZXAuXHJcbiAgICogVGhlIGN1cnJlbnRTdGVwIGlzIGFsd2F5cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHdpemFyZCBzdGVwLlxyXG4gICAqIFRoZSBjdXJyZW50U3RlcCBjYW4gYmUgZWl0aGVyIGNvbXBsZXRlZCwgaWYgaXQgd2FzIHZpc2l0ZWQgZWFybGllcixcclxuICAgKiBvciBub3QgY29tcGxldGVkLCBpZiBpdCBpcyB2aXNpdGVkIGZvciB0aGUgZmlyc3QgdGltZSBvciBpdHMgc3RhdGUgaXMgY3VycmVudGx5IG91dCBvZiBkYXRlLlxyXG4gICAqXHJcbiAgICogSWYgdGhpcyB3aXphcmQgY29udGFpbnMgbm8gc3RlcHMsIGN1cnJlbnRTdGVwIGlzIG51bGxcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGN1cnJlbnRTdGVwKCk6IFdpemFyZFN0ZXAge1xyXG4gICAgaWYgKHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzW3RoaXMuY3VycmVudFN0ZXBJbmRleF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb21wbGV0ZW5lc3Mgb2YgdGhlIHdpemFyZC5cclxuICAgKiBJZiB0aGUgd2l6YXJkIGhhcyBiZWVuIGNvbXBsZXRlZCwgaS5lLiBhbGwgc3RlcHMgYXJlIGVpdGhlciBjb21wbGV0ZWQgb3Igb3B0aW9uYWwsIHRoaXMgdmFsdWUgaXMgdHJ1ZSwgb3RoZXJ3aXNlIGl0IGlzIGZhbHNlXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBjb21wbGV0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIG5hdmlnYXRpb24gbW9kZSB0byB0aGUgbmF2aWdhdGlvbiBtb2RlIHdpdGggdGhlIGdpdmVuIG5hbWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1cGRhdGVkTmF2aWdhdGlvbk1vZGUgVGhlIG5hbWUgb2YgdGhlIG5ldyBuYXZpZ2F0aW9uIG1vZGVcclxuICAgKi9cclxuICB1cGRhdGVOYXZpZ2F0aW9uTW9kZSh1cGRhdGVkTmF2aWdhdGlvbk1vZGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZSA9IG5hdmlnYXRpb25Nb2RlRmFjdG9yeSh1cGRhdGVkTmF2aWdhdGlvbk1vZGUsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgd2l6YXJkIHN0ZXBzIHRvIHRoZSBuZXcgYXJyYXlcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1cGRhdGVkV2l6YXJkU3RlcHMgVGhlIHVwZGF0ZWQgd2l6YXJkIHN0ZXBzXHJcbiAgICovXHJcbiAgdXBkYXRlV2l6YXJkU3RlcHModXBkYXRlZFdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPik6IHZvaWQge1xyXG4gICAgLy8gdGhlIHdpemFyZCBpcyBjdXJyZW50bHkgbm90IGluIHRoZSBpbml0aWFsaXphdGlvbiBwaGFzZVxyXG4gICAgaWYgKHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoID4gMCAmJiB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPSB1cGRhdGVkV2l6YXJkU3RlcHMuaW5kZXhPZih0aGlzLndpemFyZFN0ZXBzW3RoaXMuY3VycmVudFN0ZXBJbmRleF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2l6YXJkU3RlcHMgPSB1cGRhdGVkV2l6YXJkU3RlcHM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YCBpcyBpbnNpZGUgdGhlIHJhbmdlIG9mIHBvc3NpYmxlIHdpemFyZCBzdGVwcyBpbnNpZGUgdGhpcyB3aXphcmRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIHRvIGJlIGNoZWNrZWQgaW5kZXggb2YgYSBzdGVwIGluc2lkZSB0aGlzIHdpemFyZFxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIGBzdGVwSW5kZXhgIGlzIGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGhhc1N0ZXAoc3RlcEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgMCA8PSBzdGVwSW5kZXggJiYgc3RlcEluZGV4IDwgdGhpcy53aXphcmRTdGVwcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyB3aXphcmQgaGFzIGEgcHJldmlvdXMgc3RlcCwgY29tcGFyZWQgdG8gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwIGJlZm9yZSB0aGUgY3VycmVudCBzdGVwXHJcbiAgICovXHJcbiAgaGFzUHJldmlvdXNTdGVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBoYXMgYSBuZXh0IHN0ZXAsIGNvbXBhcmVkIHRvIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgaGFzIGEgbmV4dCBzdGVwIGFmdGVyIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgKi9cclxuICBoYXNOZXh0U3RlcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyB3aXphcmQgaXMgY3VycmVudGx5IGluc2lkZSBpdHMgbGFzdCBzdGVwXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IGluc2lkZSBpdHMgbGFzdCBzdGVwXHJcbiAgICovXHJcbiAgaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCA+IDAgJiYgdGhpcy5jdXJyZW50U3RlcEluZGV4ID09PSB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aCAtIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kcyB0aGUgW1tXaXphcmRTdGVwXV0gYXQgdGhlIGdpdmVuIGluZGV4IGBzdGVwSW5kZXhgLlxyXG4gICAqIElmIG5vIFtbV2l6YXJkU3RlcF1dIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gaW5kZXggYW4gRXJyb3IgaXMgdGhyb3duXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RlcEluZGV4IFRoZSBnaXZlbiBpbmRleFxyXG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGBcclxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duLCBpZiB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAgZG9lc24ndCBleGlzdFxyXG4gICAqL1xyXG4gIGdldFN0ZXBBdEluZGV4KHN0ZXBJbmRleDogbnVtYmVyKTogV2l6YXJkU3RlcCB7XHJcbiAgICBpZiAoIXRoaXMuaGFzU3RlcChzdGVwSW5kZXgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYSBrbm93biBzdGVwLCBidXQgZ290IHN0ZXBJbmRleDogJHtzdGVwSW5kZXh9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzW3N0ZXBJbmRleF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gYHN0ZXBJZGAuXHJcbiAgICogSWYgbm8gc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYCBleGlzdHMsIGAtMWAgaXMgcmV0dXJuZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGVwSWQgVGhlIGdpdmVuIHN0ZXAgaWRcclxuICAgKiBAcmV0dXJucyBUaGUgZm91bmQgaW5kZXggb2YgYSBzdGVwIHdpdGggdGhlIGdpdmVuIHN0ZXAgaWQsIG9yIGAtMWAgaWYgbm8gc3RlcCB3aXRoIHRoZSBnaXZlbiBpZCBpcyBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXHJcbiAgICovXHJcbiAgZ2V0SW5kZXhPZlN0ZXBXaXRoSWQoc3RlcElkOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuZmluZEluZGV4KHN0ZXAgPT4gc3RlcC5zdGVwSWQgPT09IHN0ZXBJZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIGdpdmVuIFtbV2l6YXJkU3RlcF1dIGBzdGVwYC5cclxuICAgKiBJZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gaXMgbm90IGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGAtMWAgaXMgcmV0dXJuZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGVwIFRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXVxyXG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBpbmRleCBvZiBgc3RlcGAgb3IgYC0xYCBpZiB0aGUgc3RlcCBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIHdpemFyZFxyXG4gICAqL1xyXG4gIGdldEluZGV4T2ZTdGVwKHN0ZXA6IFdpemFyZFN0ZXApOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuaW5kZXhPZihzdGVwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZXMgdGhlIGNvcnJlY3QgW1tNb3ZpbmdEaXJlY3Rpb25dXSB2YWx1ZSBmb3IgYSBnaXZlbiBgZGVzdGluYXRpb25TdGVwYCBjb21wYXJlZCB0byB0aGUgYGN1cnJlbnRTdGVwSW5kZXhgLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uU3RlcCBUaGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcFxyXG4gICAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIFtbTW92aW5nRGlyZWN0aW9uXV1cclxuICAgKi9cclxuICBnZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25TdGVwOiBudW1iZXIpOiBNb3ZpbmdEaXJlY3Rpb24ge1xyXG4gICAgbGV0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uO1xyXG5cclxuICAgIGlmIChkZXN0aW5hdGlvblN0ZXAgPiB0aGlzLmN1cnJlbnRTdGVwSW5kZXgpIHtcclxuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLkZvcndhcmRzO1xyXG4gICAgfSBlbHNlIGlmIChkZXN0aW5hdGlvblN0ZXAgPCB0aGlzLmN1cnJlbnRTdGVwSW5kZXgpIHtcclxuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLkJhY2t3YXJkcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vdmluZ0RpcmVjdGlvbiA9IE1vdmluZ0RpcmVjdGlvbi5TdGF5O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtb3ZpbmdEaXJlY3Rpb247XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXctd2l6YXJkYCBjb21wb25lbnQgZGVmaW5lcyB0aGUgcm9vdCBjb21wb25lbnQgb2YgYSB3aXphcmQuXHJcbiAqIFRocm91Z2ggdGhlIHNldHRpbmcgb2YgaW5wdXQgcGFyYW1ldGVycyBmb3IgdGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBpdCdzIHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24gYW5kIHNpemVcclxuICogb2YgaXRzIG5hdmlnYXRpb24gYmFyLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZCBbbmF2QmFyTG9jYXRpb25dPVwibG9jYXRpb24gb2YgbmF2aWdhdGlvbiBiYXJcIiBbbmF2QmFyTGF5b3V0XT1cImxheW91dCBvZiBuYXZpZ2F0aW9uIGJhclwiPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogV2l0aG91dCBjb21wbGV0aW9uIHN0ZXA6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZCBuYXZCYXJMb2NhdGlvbj1cInRvcFwiIG5hdkJhckxheW91dD1cInNtYWxsXCI+XHJcbiAqICAgICA8YXctd2l6YXJkLXN0ZXA+Li4uPC9hdy13aXphcmQtc3RlcD5cclxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxyXG4gKiA8L2F3LXdpemFyZD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggY29tcGxldGlvbiBzdGVwOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQgbmF2QmFyTG9jYXRpb249XCJ0b3BcIiBuYXZCYXJMYXlvdXQ9XCJzbWFsbFwiPlxyXG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqICAgICA8YXctd2l6YXJkLXN0ZXA+Li4uPC9hdy13aXphcmQtc3RlcD5cclxuICogICAgIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwPi4uLjwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cclxuICogPC9hdy13aXphcmQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctd2l6YXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC5jb21wb25lbnQubGVzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbV2l6YXJkU3RhdGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQge1xyXG4gIC8qKlxyXG4gICAqIEEgUXVlcnlMaXN0IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dcyBpbnNpZGUgdGhpcyB3aXphcmRcclxuICAgKi9cclxuICBAQ29udGVudENoaWxkcmVuKFdpemFyZFN0ZXApXHJcbiAgcHVibGljIHdpemFyZFN0ZXBzOiBRdWVyeUxpc3Q8V2l6YXJkU3RlcD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2NhdGlvbiBvZiB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIHRoZSB3aXphcmQuXHJcbiAgICogVGhpcyBsb2NhdGlvbiBjYW4gYmUgZWl0aGVyIHRvcCwgYm90dG9tLCBsZWZ0IG9yIHJpZ2h0XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmF2QmFyTG9jYXRpb24gPSAndG9wJztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxheW91dCBvZiB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIHRoZSB3aXphcmQuXHJcbiAgICogVGhlIGxheW91dCBjYW4gYmUgZWl0aGVyIHNtYWxsLCBsYXJnZS1maWxsZWQsIGxhcmdlLWVtcHR5IG9yIGxhcmdlLXN5bWJvbHNcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBuYXZCYXJMYXlvdXQgPSAnc21hbGwnO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZCBiZSBzaG93bi5cclxuICAgKiBUaGUgZGlyZWN0aW9uIGNhbiBiZSBlaXRoZXIgYGxlZnQtdG8tcmlnaHRgIG9yIGByaWdodC10by1sZWZ0YFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG5hdkJhckRpcmVjdGlvbiA9ICdsZWZ0LXRvLXJpZ2h0JztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIGZvciB0cmFuc2l0aW9uaW5nIGJldHdlZW4gZGlmZmVyZW50IHN0ZXBzLlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgY2FuIGJlIGVpdGhlciBgc3RyaWN0YCwgYHNlbWktc3RyaWN0YCBvciBgZnJlZWBcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBuYXZpZ2F0aW9uTW9kZSA9ICdzdHJpY3QnO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5pdGlhbGx5IHNlbGVjdGVkIHN0ZXAsIHJlcHJlc2VudGVkIGJ5IGl0cyBpbmRleFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRlZmF1bHRTdGVwSW5kZXggPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUcnVlLCBpZiB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkbid0IGJlIHVzZWQgZm9yIG5hdmlnYXRpbmdcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkaXNhYmxlTmF2aWdhdGlvbkJhciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIGhvcml6b250YWwgb3JpZW50YXRpb24uXHJcbiAgICogVGhlIHdpemFyZCB1c2VzIGEgaG9yaXpvbnRhbCBvcmllbnRhdGlvbiwgaWZmIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBzaG93biBhdCB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGlzIHdpemFyZFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCB1c2VzIGEgaG9yaXpvbnRhbCBvcmllbnRhdGlvblxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG9yaXpvbnRhbCcpXHJcbiAgcHVibGljIGdldCBob3Jpem9udGFsT3JpZW50YXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ3RvcCcgfHwgdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ2JvdHRvbSc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIHZlcnRpY2FsIG9yaWVudGF0aW9uLlxyXG4gICAqIFRoZSB3aXphcmQgdXNlcyBhIHZlcnRpY2FsIG9yaWVudGF0aW9uLCBpZmYgdGhlIG5hdmlnYXRpb24gYmFyIGlzIHNob3duIGF0IHRoZSBsZWZ0IG9yIHJpZ2h0IG9mIHRoaXMgd2l6YXJkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvblxyXG4gICAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudmVydGljYWwnKVxyXG4gIHB1YmxpYyBnZXQgdmVydGljYWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ3JpZ2h0JztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGUgZm9yIHRoaXMgd2l6YXJkXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBuYXZpZ2F0aW9uKCk6IE5hdmlnYXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGVsLm5hdmlnYXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSBtb2RlbCBUaGUgbW9kZWwgZm9yIHRoaXMgd2l6YXJkIGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlbDogV2l6YXJkU3RhdGUpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgdGhlIG1vZGVsIGFmdGVyIGNlcnRhaW4gaW5wdXQgdmFsdWVzIGhhdmUgY2hhbmdlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNoYW5nZXMgVGhlIGRldGVjdGVkIGNoYW5nZXNcclxuICAgKi9cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIG9mIE9iamVjdC5rZXlzKGNoYW5nZXMpKSB7XHJcbiAgICAgIGxldCBjaGFuZ2UgPSBjaGFuZ2VzW3Byb3BOYW1lXTtcclxuXHJcbiAgICAgIGlmICghY2hhbmdlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgICAgc3dpdGNoIChwcm9wTmFtZSkge1xyXG4gICAgICAgICAgY2FzZSAnZGVmYXVsdFN0ZXBJbmRleCc6XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGVmYXVsdFN0ZXBJbmRleCA9IHBhcnNlSW50KGNoYW5nZS5jdXJyZW50VmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkaXNhYmxlTmF2aWdhdGlvbkJhcic6XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ25hdmlnYXRpb25Nb2RlJzpcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC51cGRhdGVOYXZpZ2F0aW9uTW9kZShjaGFuZ2UuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcclxuICAgKi9cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBhZGQgYSBzdWJzY3JpYmVyIHRvIHRoZSB3aXphcmQgc3RlcHMgUXVlcnlMaXN0IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSBET01cclxuICAgIHRoaXMud2l6YXJkU3RlcHMuY2hhbmdlcy5zdWJzY3JpYmUoY2hhbmdlZFdpemFyZFN0ZXBzID0+IHtcclxuICAgICAgdGhpcy5tb2RlbC51cGRhdGVXaXphcmRTdGVwcyhjaGFuZ2VkV2l6YXJkU3RlcHMudG9BcnJheSgpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGluaXRpYWxpemUgdGhlIG1vZGVsXHJcbiAgICB0aGlzLm1vZGVsLmRpc2FibGVOYXZpZ2F0aW9uQmFyID0gdGhpcy5kaXNhYmxlTmF2aWdhdGlvbkJhcjtcclxuICAgIHRoaXMubW9kZWwuZGVmYXVsdFN0ZXBJbmRleCA9IHRoaXMuZGVmYXVsdFN0ZXBJbmRleDtcclxuICAgIHRoaXMubW9kZWwudXBkYXRlV2l6YXJkU3RlcHModGhpcy53aXphcmRTdGVwcy50b0FycmF5KCkpO1xyXG4gICAgdGhpcy5tb2RlbC51cGRhdGVOYXZpZ2F0aW9uTW9kZSh0aGlzLm5hdmlnYXRpb25Nb2RlKTtcclxuXHJcbiAgICAvLyBmaW5hbGx5IHJlc2V0IHRoZSB3aG9sZSB3aXphcmQgc3RhdGVcclxuICAgIHRoaXMubmF2aWdhdGlvbi5yZXNldCgpO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBtYXJjIG9uIDIwLjA1LjE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXBgIGNvbXBvbmVudCBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSBjb21wbGV0aW9uL3N1Y2Nlc3Mgc3RlcCBhdCB0aGUgZW5kIG9mIHlvdXIgd2l6YXJkXHJcbiAqIEFmdGVyIGEgYGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXBgIGhhcyBiZWVuIGVudGVyZWQsIGl0IGhhcyB0aGUgY2hhcmFjdGVyaXN0aWMgdGhhdCB0aGUgdXNlciBpcyBibG9ja2VkIGZyb21cclxuICogbGVhdmluZyBpdCBhZ2FpbiB0byBhIHByZXZpb3VzIHN0ZXAuXHJcbiAqIEluIGFkZGl0aW9uIGVudGVyaW5nIGEgYGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXBgIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGUgYGF3LXdpemFyZGAgYW5kIGFsbCBzdGVwcyBpbnNpZGUgdGhlIGBhdy13aXphcmRgXHJcbiAqIGFzIGNvbXBsZXRlZC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIFtzdGVwVGl0bGVdPVwidGl0bGUgb2YgdGhlIHdpemFyZCBzdGVwXCJcclxuICogICAgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICduYXZpZ2F0aW9uIHN5bWJvbCcsIGZvbnRGYW1pbHk6ICduYXZpZ2F0aW9uIHN5bWJvbCBmb250IGZhbWlseScgfVwiXHJcbiAqICAgIChzdGVwRW50ZXIpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZW50ZXJlZFwiXHJcbiAqICAgIChzdGVwRXhpdCk9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBleGl0ZWRcIj5cclxuICogICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcxJyB9XCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGEgbmF2aWdhdGlvbiBzeW1ib2wgZnJvbSB0aGUgYGZvbnQtYXdlc29tZWAgZm9udDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCl9LFxyXG4gICAge3Byb3ZpZGU6IFdpemFyZENvbXBsZXRpb25TdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCl9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQgZXh0ZW5kcyBXaXphcmRDb21wbGV0aW9uU3RlcCB7XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXJgIGNvbXBvbmVudCBjb250YWlucyB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIGEgW1tXaXphcmRDb21wb25lbnRdXS5cclxuICogVG8gY29ycmVjdGx5IGRpc3BsYXkgdGhlIG5hdmlnYXRpb24gYmFyLCBpdCdzIHJlcXVpcmVkIHRvIHNldCB0aGUgcmlnaHQgY3NzIGNsYXNzZXMgZm9yIHRoZSBuYXZpZ2F0aW9uIGJhcixcclxuICogb3RoZXJ3aXNlIGl0IHdpbGwgbG9vayBsaWtlIGEgbm9ybWFsIGB1bGAgY29tcG9uZW50LlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcj48L2F3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQtbmF2aWdhdGlvbi1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5ob3Jpem9udGFsLmxlc3MnLCAnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC52ZXJ0aWNhbC5sZXNzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHdpemFyZCBzdGVwcyBzaG91bGQgYmUgc2hvd24gaW4gdGhlIG5hdmlnYXRpb24gYmFyLlxyXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIGVpdGhlciBgbGVmdC10by1yaWdodGAgb3IgYHJpZ2h0LXRvLWxlZnRgXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGlyZWN0aW9uID0gJ2xlZnQtdG8tcmlnaHQnO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIHRoZSB3aXphcmQgY3VycmVudGx5IHJlc2lkZXMgaW5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFsbCBbW1dpemFyZFN0ZXBdXXMgY29udGFpbmVkIGluIHRoZSB3aXphcmRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dc1xyXG4gICAqL1xyXG4gIGdldCB3aXphcmRTdGVwcygpOiBBcnJheTxXaXphcmRTdGVwPiB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0LXRvLWxlZnQnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgICBjYXNlICdsZWZ0LXRvLXJpZ2h0JzpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3aXphcmQgc3RlcHMsIHRoYXQgbmVlZCB0byBiZSBkaXNwbGFjZWQgaW4gdGhlIG5hdmlnYXRpb24gYmFyXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIHdpemFyZCBzdGVwcyB0byBiZSBkaXNwbGF5ZWRcclxuICAgKi9cclxuICBnZXQgbnVtYmVyT2ZXaXphcmRTdGVwcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgY3VycmVudGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBjdXJyZW50XHJcbiAgICovXHJcbiAgcHVibGljIGlzQ3VycmVudCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZG9uZWAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBkb25lXHJcbiAgICovXHJcbiAgcHVibGljIGlzRG9uZSh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHdpemFyZFN0ZXAuY29tcGxldGVkICYmICF3aXphcmRTdGVwLnNlbGVjdGVkKSB8fCB0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGRlZmF1bHRgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgZGVmYXVsdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0RlZmF1bHQod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF3aXphcmRTdGVwLm9wdGlvbmFsICYmICF3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBlZGl0aW5nYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGVkaXRpbmdcclxuICAgKi9cclxuICBwdWJsaWMgaXNFZGl0aW5nKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcclxuICAgIHJldHVybiB3aXphcmRTdGVwLnNlbGVjdGVkICYmIHdpemFyZFN0ZXAuY29tcGxldGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYG9wdGlvbmFsYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIG9wdGlvbmFsXHJcbiAgICovXHJcbiAgcHVibGljIGlzT3B0aW9uYWwod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHdpemFyZFN0ZXAub3B0aW9uYWwgJiYgIXdpemFyZFN0ZXAuY29tcGxldGVkICYmICF3aXphcmRTdGVwLnNlbGVjdGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgbmF2aWdhYmxlYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXHJcbiAgICogQSB3aXphcmQgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvIGlmOlxyXG4gICAqIC0gdGhlIHN0ZXAgaXMgY3VycmVudGx5IG5vdCBzZWxlY3RlZFxyXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gYmFyIGlzbid0IGRpc2FibGVkXHJcbiAgICogLSB0aGUgbmF2aWdhdGlvbiBtb2RlIGFsbG93cyBuYXZpZ2F0aW9uIHRvIHRoZSBzdGVwXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBuYXZpZ2FibGVcclxuICAgKi9cclxuICBwdWJsaWMgaXNOYXZpZ2FibGUod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF3aXphcmRTdGVwLnNlbGVjdGVkICYmICF0aGlzLndpemFyZFN0YXRlLmRpc2FibGVOYXZpZ2F0aW9uQmFyICYmXHJcbiAgICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuaXNOYXZpZ2FibGUodGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh3aXphcmRTdGVwKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXctd2l6YXJkLXN0ZXBgIGNvbXBvbmVudCBpcyB1c2VkIHRvIGRlZmluZSBhIG5vcm1hbCBzdGVwIGluc2lkZSBhIHdpemFyZC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcCBbc3RlcFRpdGxlXT1cInN0ZXAgdGl0bGVcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ3N5bWJvbCcsIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScgfVwiXHJcbiAqICAgIFtjYW5FeGl0XT1cImRlY2lkaW5nIGZ1bmN0aW9uXCIgKHN0ZXBFbnRlcik9XCJlbnRlciBmdW5jdGlvblwiIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcFwiXHJcbiAqICAgIFtjYW5FeGl0XT1cImRlY2lkaW5nIGZ1bmN0aW9uXCIgKHN0ZXBFbnRlcik9XCJlbnRlciBmdW5jdGlvblwiIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XHJcbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cclxuICogICAgICAgIHN0ZXAgdGl0bGVcclxuICogICAgPC9uZy10ZW1wbGF0ZT5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cclxuICogICAgICAgIHN5bWJvbFxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcD5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxyXG4gKiAgICAgICAgQWRkcmVzcyBpbmZvcm1hdGlvblxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxyXG4gKiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10YXhpXCI+PC9pPlxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1zdGVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1zdGVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnd2l6YXJkLXN0ZXAuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7cHJvdmlkZTogV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkU3RlcENvbXBvbmVudCl9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RlcENvbXBvbmVudCBleHRlbmRzIFdpemFyZFN0ZXAge1xyXG59XHJcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3QsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcclxuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd0VuYWJsZUJhY2tMaW5rc2AgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGFsbG93IHRoZSB1c2VyIHRvIGxlYXZlIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGFmdGVyIGlzIGhhcyBiZWVuIGVudGVyZWQuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBhd0VuYWJsZUJhY2tMaW5rcyAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgc3RlcFRpdGxlPVwiRmluYWwgc3RlcFwiIGF3RW5hYmxlQmFja0xpbmtzPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdFbmFibGVCYWNrTGlua3NdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBUaGlzIEV2ZW50RW1pdHRlciBpcyBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBleGl0ZWQuXHJcbiAgICogVGhlIGJvdW5kIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBkbyBjbGVhbnVwIHdvcmsuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29tcGxldGlvblN0ZXAgVGhlIHdpemFyZCBjb21wbGV0aW9uIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBleGl0YWJsZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBjb21wbGV0aW9uU3RlcDogV2l6YXJkQ29tcGxldGlvblN0ZXApIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXHJcbiAgICovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbXBsZXRpb25TdGVwLmNhbkV4aXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jb21wbGV0aW9uU3RlcC5zdGVwRXhpdCA9IHRoaXMuc3RlcEV4aXQ7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBBbiBvZmZzZXQgYmV0d2VlbiB0d28gc3RlcHMuXHJcbiAqIFRoaXMgb2Zmc2V0IGNhbiBiZSBlaXRoZXIgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXHJcbiAqIEEgcG9zaXRpdmUgb2Zmc2V0IG1lYW5zLCB0aGF0IHRoZSBvZmZzZXQgc3RlcCBpcyBhZnRlciB0aGUgb3RoZXIgc3RlcCwgd2hpbGUgYSBuZWdhdGl2ZSBvZmZzZXQgbWVhbnMsXHJcbiAqIHRoYXQgdGhlIG9mZnNldCBzdGVwIGlzIGFoZWFkIG9mIHRoZSBvdGhlciBzdGVwLlxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RlcE9mZnNldCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9mZnNldCB0byB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gICAqL1xyXG4gIHN0ZXBPZmZzZXQ6IG51bWJlclxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcE9mZnNldF1dLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBPZmZzZXRdXSBhbmQgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdGVwT2Zmc2V0KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdGVwT2Zmc2V0IHtcclxuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBPZmZzZXQnKTtcclxufVxyXG4iLCJpbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBBbiB1bmlxdWUgaWRlbnRpZmllciBvZiBhIHdpemFyZCBzdGVwXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdGVwSWQge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpZCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gICAqL1xyXG4gIHN0ZXBJZDogc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gYHZhbHVlYCBpbXBsZW1lbnRzIHRoZSBpbnRlcmZhY2UgW1tTdGVwSWRdXS5cclxuICpcclxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGltcGxlbWVudHMgW1tTdGVwSWRdXSBhbmQgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTdGVwSWQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBJZCB7XHJcbiAgcmV0dXJuIHZhbHVlLmhhc093blByb3BlcnR5KCdzdGVwSWQnKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgV2l6YXJkU3RlcCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEFuIGluZGV4IG9mIGEgd2l6YXJkIHN0ZXAuXHJcbiAqIFRoaXMgaW5kZXggaXMgdGhlIGluZGV4IG9mIHRoZSBzdGVwIGluc2lkZSB0aGUgd2l6YXJkLlxyXG4gKiBUaGUgaW5kZXggaXMgYWx3YXlzIHplcm8gYmFzZWQsIGkuZS4gdGhlIHN0ZXAgd2l0aCBpbmRleCAwIGlzIHRoZSBmaXJzdCBzdGVwIG9mIHRoZSB3aXphcmRcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBJbmRleCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICovXHJcbiAgc3RlcEluZGV4OiBudW1iZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBgdmFsdWVgIGltcGxlbWVudHMgdGhlIGludGVyZmFjZSBbW1N0ZXBJbmRleF1dLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBJbmRleF1dIGFuZCBmYWxzZSBvdGhlcndpc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0ZXBJbmRleCh2YWx1ZTogYW55KTogdmFsdWUgaXMgU3RlcEluZGV4IHtcclxuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBJbmRleCcpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1hcmMgb24gMDkuMDEuMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7aXNTdGVwT2Zmc2V0LCBTdGVwT2Zmc2V0fSBmcm9tICcuLi91dGlsL3N0ZXAtb2Zmc2V0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7aXNTdGVwSWQsIFN0ZXBJZH0gZnJvbSAnLi4vdXRpbC9zdGVwLWlkLmludGVyZmFjZSc7XHJcbmltcG9ydCB7aXNTdGVwSW5kZXgsIFN0ZXBJbmRleH0gZnJvbSAnLi4vdXRpbC9zdGVwLWluZGV4LmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd0dvVG9TdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgdG8gYSBnaXZlbiBzdGVwLlxyXG4gKiBUaGlzIHN0ZXAgY2FuIGJlIGRlZmluZWQgaW4gb25lIG9mIG11bHRpcGxlIGZvcm1hdHNcclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBXaXRoIGFic29sdXRlIHN0ZXAgaW5kZXg6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBJbmRleDogYWJzb2x1dGUgc3RlcCBpbmRleCB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCB1bmlxdWUgc3RlcCBpZDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcElkOiAnc3RlcCBpZCBvZiBkZXN0aW5hdGlvbiBzdGVwJyB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBhIHdpemFyZCBzdGVwIG9iamVjdDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cIndpemFyZCBzdGVwIG9iamVjdFwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYW4gb2Zmc2V0IHRvIHRoZSBkZWZpbmluZyBzdGVwOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwT2Zmc2V0OiBvZmZzZXQgfVwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdHb1RvU3RlcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHb1RvU3RlcERpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnZlbmllbmNlIG5hbWUgZm9yIGBwcmVGaW5hbGl6ZWBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbWl0dGVyIFRoZSBbW0V2ZW50RW1pdHRlcl1dIHRvIGJlIHNldFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzZXQgZmluYWxpemUoZW1pdHRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+KSB7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnZlbmllbmNlIGZpZWxkIGZvciBgcHJlRmluYWxpemVgXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJlRmluYWxpemU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGVzdGluYXRpb24gc3RlcCwgdG8gd2hpY2ggdGhlIHdpemFyZCBzaG91bGQgbmF2aWdhdGUsIGFmdGVyIHRoZSBjb21wb25lbnQsIGhhdmluZyB0aGlzIGRpcmVjdGl2ZSBoYXMgYmVlbiBhY3RpdmF0ZWQuXHJcbiAgICogVGhpcyBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSBnaXZlbiBlaXRoZXIgYXMgYSBbW1dpemFyZFN0ZXBdXSBjb250YWluaW5nIHRoZSBzdGVwIGRpcmVjdGx5LFxyXG4gICAqIGEgW1tTdGVwT2Zmc2V0XV0gYmV0d2VlbiB0aGUgY3VycmVudCBzdGVwIGFuZCB0aGUgYHdpemFyZFN0ZXBgLCBpbiB3aGljaCB0aGlzIGRpcmVjdGl2ZSBoYXMgYmVlbiB1c2VkLFxyXG4gICAqIG9yIGEgc3RlcCBpbmRleCBhcyBhIG51bWJlciBvciBzdHJpbmdcclxuICAgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ2F3R29Ub1N0ZXAnKVxyXG4gIHB1YmxpYyB0YXJnZXRTdGVwOiBXaXphcmRTdGVwIHwgU3RlcE9mZnNldCB8IFN0ZXBJbmRleCB8IFN0ZXBJZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgd2l6YXJkIHN0YXRlXHJcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBjb250YWlucyB0aGlzIFtbR29Ub1N0ZXBEaXJlY3RpdmVdXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlLCBAT3B0aW9uYWwoKSBwcml2YXRlIHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgb2YgdGhpcyBkaXJlY3RpdmUgYXMgYW4gYWJzb2x1dGUgc3RlcCBpbmRleCBpbnNpZGUgdGhlIHdpemFyZFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICogQHRocm93cyBJZiBgdGFyZ2V0U3RlcGAgaXMgb2YgYW4gdW5rbm93biB0eXBlIGFuIGBFcnJvcmAgaXMgdGhyb3duXHJcbiAgICovXHJcbiAgZ2V0IGRlc3RpbmF0aW9uU3RlcCgpOiBudW1iZXIge1xyXG4gICAgbGV0IGRlc3RpbmF0aW9uU3RlcDogbnVtYmVyO1xyXG5cclxuICAgIGlmIChpc1N0ZXBJbmRleCh0aGlzLnRhcmdldFN0ZXApKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMudGFyZ2V0U3RlcC5zdGVwSW5kZXg7XHJcbiAgICB9IGVsc2UgaWYgKGlzU3RlcElkKHRoaXMudGFyZ2V0U3RlcCkpIHtcclxuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcFdpdGhJZCh0aGlzLnRhcmdldFN0ZXAuc3RlcElkKTtcclxuICAgIH0gZWxzZSBpZiAoaXNTdGVwT2Zmc2V0KHRoaXMudGFyZ2V0U3RlcCkgJiYgdGhpcy53aXphcmRTdGVwICE9PSBudWxsKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0SW5kZXhPZlN0ZXAodGhpcy53aXphcmRTdGVwKSArIHRoaXMudGFyZ2V0U3RlcC5zdGVwT2Zmc2V0O1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldFN0ZXAgaW5zdGFuY2VvZiBXaXphcmRTdGVwKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0SW5kZXhPZlN0ZXAodGhpcy50YXJnZXRTdGVwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgJ3RhcmdldFN0ZXAnIGlzIG5laXRoZXIgYSBXaXphcmRTdGVwLCBTdGVwT2Zmc2V0LCBTdGVwSW5kZXggb3IgU3RlcElkYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uU3RlcDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3RlbmVyIG1ldGhvZCBmb3IgYGNsaWNrYCBldmVudHMgb24gdGhlIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxyXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIGBkZXN0aW5hdGlvblN0ZXBgXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLmdvVG9TdGVwKHRoaXMuZGVzdGluYXRpb25TdGVwLCB0aGlzLnByZUZpbmFsaXplLCB0aGlzLnBvc3RGaW5hbGl6ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdOZXh0U3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIHRoZSBuZXh0IHN0ZXAuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIGF3TmV4dFN0ZXAgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd05leHRTdGVwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5leHRTdGVwRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcHJlRmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBhZnRlciB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcG9zdEZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udmVuaWVuY2UgbmFtZSBmb3IgYHByZUZpbmFsaXplYFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICB0aGlzLnByZUZpbmFsaXplID0gZW1pdHRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGZpbmFsaXplKCk6IEV2ZW50RW1pdHRlcjx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcclxuICAgKi9cclxuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmRcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3RlbmVyIG1ldGhvZCBmb3IgYGNsaWNrYCBldmVudHMgb24gdGhlIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxyXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RlcFxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuZ29Ub05leHRTdGVwKHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdPcHRpb25hbFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYW4gb3B0aW9uYWwgYHdpemFyZC1zdGVwYC5cclxuICogQW4gb3B0aW9uYWwgd2l6YXJkIHN0ZXAgaXMgYSBbW1dpemFyZFN0ZXBdXSB0aGF0IGRvZXNuJ3QgbmVlZCB0byBiZSBjb21wbGV0ZWQgdG8gdHJhbnNpdGlvbiB0byBsYXRlciB3aXphcmQgc3RlcHMuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXAgYXdPcHRpb25hbFN0ZXA+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIlNlY29uZCBzdGVwXCIgYXdPcHRpb25hbFN0ZXA+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdPcHRpb25hbFN0ZXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxTdGVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBjb250YWlucyB0aGlzIFtbT3B0aW9uYWxTdGVwRGlyZWN0aXZlXV1cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcclxuICAgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2l6YXJkU3RlcC5vcHRpb25hbCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdQcmV2aW91c1N0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgcHJldmlvdXMgc3RlcC5cclxuICogQ29tcGFyZWQgdG8gdGhlIFtbTmV4dFN0ZXBEaXJlY3RpdmVdXSBpdCdzIGltcG9ydGFudCB0byBub3RlLCB0aGF0IHRoaXMgZGlyZWN0aXZlIGRvZXNuJ3QgY29udGFpbiBhIGBmaW5hbGl6ZWAgb3V0cHV0IG1ldGhvZC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gYXdQcmV2aW91c1N0ZXA+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3UHJldmlvdXNTdGVwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByZXZpb3VzU3RlcERpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnZlbmllbmNlIGZpZWxkIGZvciBgcHJlRmluYWxpemVgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgc3RhdGUgb2YgdGhlIHdpemFyZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICogQWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRoZSB3aXphcmQgd2lsbCB0cnkgdG8gdHJhbnNpdGlvbiB0byB0aGUgcHJldmlvdXMgc3RlcFxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuZ29Ub1ByZXZpb3VzU3RlcCh0aGlzLnByZUZpbmFsaXplLCB0aGlzLnBvc3RGaW5hbGl6ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdSZXNldFdpemFyZGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGUuXHJcbiAqIFRoaXMgZGlyZWN0aXZlIGFjY2VwdHMgYW4gb3V0cHV0LCB3aGljaCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHNvbWUgY3VzdG9tIGNsZWFudXAgd29yayBkdXJpbmcgdGhlIHJlc2V0IHByb2Nlc3MuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIGF3UmVzZXRXaXphcmQgKGZpbmFsaXplKT1cImN1c3RvbSByZXNldCB0YXNrXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3UmVzZXRXaXphcmRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXRXaXphcmREaXJlY3RpdmUge1xyXG4gIC8qKlxyXG4gICAqIEFuIFtbRXZlbnRFbWl0dGVyXV0gY29udGFpbmluZyBzb21lIHRhc2tzIHRvIGJlIGRvbmUsIGRpcmVjdGx5IGJlZm9yZSB0aGUgd2l6YXJkIGlzIGJlaW5nIHJlc2V0XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcclxuICAgKi9cclxuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSB3aXphcmRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBkbyBzb21lIG9wdGlvbmFsIGNsZWFudXAgd29ya1xyXG4gICAgdGhpcy5maW5hbGl6ZS5lbWl0KCk7XHJcbiAgICAvLyByZXNldCB0aGUgd2l6YXJkIHRvIGl0cyBpbml0aWFsIHN0YXRlXHJcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3U2VsZWN0ZWRTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgb24gYSBbW1dpemFyZFN0ZXBdXSB0byBzZXQgaXQgYXMgc2VsZWN0ZWQgYWZ0ZXIgdGhlIHdpemFyZCBpbml0aWFsaXNhdGlvbiBvciBhIHJlc2V0LlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgdGl0bGVcIiBhd1NlbGVjdGVkU3RlcD5cclxuICogICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd1NlbGVjdGVkU3RlcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcclxuICAgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMud2l6YXJkU3RlcC5kZWZhdWx0U2VsZWN0ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3V2l6YXJkQ29tcGxldGlvblN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSBjb21wbGV0aW9uL3N1Y2Nlc3Mgc3RlcCBhdCB0aGUgZW5kIG9mIHlvdXIgd2l6YXJkXHJcbiAqIEFmdGVyIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGhhcyBiZWVuIGVudGVyZWQsIGl0IGhhcyB0aGUgY2hhcmFjdGVyaXN0aWMgdGhhdCB0aGUgdXNlciBpcyBibG9ja2VkIGZyb21cclxuICogbGVhdmluZyBpdCBhZ2FpbiB0byBhIHByZXZpb3VzIHN0ZXAuXHJcbiAqIEluIGFkZGl0aW9uIGVudGVyaW5nIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGF1dG9tYXRpY2FsbHkgc2V0cyB0aGUgYHdpemFyZGAsIGFuZCBhbGwgc3RlcHMgaW5zaWRlIHRoZSBgd2l6YXJkYCxcclxuICogYXMgY29tcGxldGVkLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIFtzdGVwVGl0bGVdPVwidGl0bGUgb2YgdGhlIHdpemFyZCBzdGVwXCJcclxuICogICAgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICduYXZpZ2F0aW9uIHN5bWJvbCcsIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScgfVwiXHJcbiAqICAgIChzdGVwRW50ZXIpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZW50ZXJlZFwiXHJcbiAqICAgIChzdGVwRXhpdCk9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBleGl0ZWRcIj5cclxuICogICAgLi4uXHJcbiAqIDwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcxJyB9XCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdXaXphcmRDb21wbGV0aW9uU3RlcF0nLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSkgfSxcclxuICAgIHsgcHJvdmlkZTogV2l6YXJkQ29tcGxldGlvblN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlKSB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUgZXh0ZW5kcyBXaXphcmRDb21wbGV0aW9uU3RlcCB7XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3V2l6YXJkU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIG5vcm1hbCBzdGVwIGluc2lkZSBhIHdpemFyZC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRTdGVwIFtzdGVwVGl0bGVdPVwic3RlcCB0aXRsZVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnc3ltYm9sJywgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyB9XCJcclxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cclxuICogICAgLi4uXHJcbiAqIDwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRTdGVwIFtjYW5FeGl0XT1cImRlY2lkaW5nIGZ1bmN0aW9uXCIgKHN0ZXBFbnRlcik9XCJlbnRlciBmdW5jdGlvblwiIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XHJcbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cclxuICogICAgICAgIHN0ZXAgdGl0bGVcclxuICogICAgPC9uZy10ZW1wbGF0ZT5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cclxuICogICAgICAgIHN5bWJvbFxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAgICAuLi5cclxuICogPC9kaXY+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRTdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8ZGl2IGF3V2l6YXJkU3RlcD5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxyXG4gKiAgICAgICAgQWRkcmVzcyBpbmZvcm1hdGlvblxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxyXG4gKiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10YXhpXCI+PC9pPlxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdXaXphcmRTdGVwXScsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZFN0ZXBEaXJlY3RpdmUpIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkU3RlcCB7XHJcbn1cclxuIiwiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge05leHRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmV4dC1zdGVwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7UHJldmlvdXNTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcHJldmlvdXMtc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge09wdGlvbmFsU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL29wdGlvbmFsLXN0ZXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtHb1RvU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2dvLXRvLXN0ZXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtFbmFibGVCYWNrTGlua3NEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9lbmFibGUtYmFjay1saW5rcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1NlbGVjdGVkU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdGVkLXN0ZXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtSZXNldFdpemFyZERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtb2R1bGUgZGVmaW5pbmcgYWxsIHRoZSBjb250ZW50IGluc2lkZSBgYW5ndWxhci1hcmNod2l6YXJkYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBXaXphcmRDb21wb25lbnQsXHJcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxyXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcclxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxyXG4gICAgR29Ub1N0ZXBEaXJlY3RpdmUsXHJcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcclxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcclxuICAgIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXHJcbiAgICBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxyXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXHJcbiAgICBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUsXHJcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBXaXphcmRDb21wb25lbnQsXHJcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50LFxyXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcclxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxyXG4gICAgR29Ub1N0ZXBEaXJlY3RpdmUsXHJcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcclxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcclxuICAgIE9wdGlvbmFsU3RlcERpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXHJcbiAgICBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxyXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXHJcbiAgICBTZWxlY3RlZFN0ZXBEaXJlY3RpdmUsXHJcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFyY2h3aXphcmRNb2R1bGUge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge25nTW9kdWxlOiBBcmNod2l6YXJkTW9kdWxlLCBwcm92aWRlcnM6IFtdfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiRXZlbnRFbWl0dGVyIiwiQ29udGVudENoaWxkIiwiSW5wdXQiLCJPdXRwdXQiLCJIb3N0QmluZGluZyIsInRzbGliXzEuX19leHRlbmRzIiwiSW5qZWN0YWJsZSIsInRzbGliXzEuX192YWx1ZXMiLCJDb21wb25lbnQiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkNvbnRlbnRDaGlsZHJlbiIsImZvcndhcmRSZWYiLCJIb3N0IiwiT3B0aW9uYWwiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFD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
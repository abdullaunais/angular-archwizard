import { Directive, TemplateRef, ContentChild, EventEmitter, HostBinding, Input, Output, Injectable, Component, ContentChildren, ViewEncapsulation, forwardRef, Host, HostListener, Optional, NgModule } from '@angular/core';
import { __extends, __values } from 'tslib';
import { CommonModule } from '@angular/common';

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
        { type: Directive, args: [{
                    selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
                },] }
    ];
    WizardStepTitleDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
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
        { type: Directive, args: [{
                    selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
                },] }
    ];
    WizardStepSymbolDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
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
        this.stepEnter = new EventEmitter();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new EventEmitter();
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
         */
        function () {
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
            return Promise.resolve((/** @type {?} */ (condition)));
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
        stepTitleTemplate: [{ type: ContentChild, args: [WizardStepTitleDirective,] }],
        stepSymbolTemplate: [{ type: ContentChild, args: [WizardStepSymbolDirective,] }],
        stepId: [{ type: Input }],
        stepTitle: [{ type: Input }],
        navigationSymbol: [{ type: Input }],
        canEnter: [{ type: Input }],
        canExit: [{ type: Input }],
        stepEnter: [{ type: Output }],
        stepExit: [{ type: Output }],
        hidden: [{ type: HostBinding, args: ['hidden',] }]
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
var  /**
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
FreeNavigationMode = /** @class */ (function (_super) {
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
var  /**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
WizardCompletionStep = /** @class */ (function (_super) {
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
        _this.stepExit = new EventEmitter();
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
var  /**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
SemiStrictNavigationMode = /** @class */ (function (_super) {
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
var  /**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
StrictNavigationMode = /** @class */ (function (_super) {
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
         */
        function () {
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
         */
        function (defaultStepIndex) {
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
         */
        function () {
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
         */
        function () {
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
        { type: Injectable }
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'aw-wizard-navigation-bar',
                    template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\r\n  <li *ngFor=\"let step of wizardSteps\"\r\n      [ngClass]=\"{\r\n        default: isDefault(step),\r\n        current: isCurrent(step),\r\n        done: isDone(step),\r\n        editing: isEditing(step),\r\n        optional: isOptional(step),\r\n        navigable: isNavigable(step)\r\n  }\">\r\n    <a [awGoToStep]=\"step\">\r\n      <div class=\"label\">\r\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\r\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\r\n      </div>\r\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\r\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\r\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\r\n      </div>\r\n    </a>\r\n  </li>\r\n</ul>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["aw-wizard-navigation-bar.horizontal.small ul.steps-indicator{padding:24px 0 10px}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 14px);top:-7px;left:calc(50% + 14px / 2)}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li .step-indicator{position:absolute;top:-14px;left:calc(50% - 14px / 2);width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done .step-indicator{border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid red}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:grey}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:grey;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done .step-indicator{background-color:#393;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:red;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:grey;border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done .step-indicator{color:#393;border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:red;border:2px solid red}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767;color:#676767}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326;color:#267326}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212;color:#12e212}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00;color:#c00}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:grey;color:grey}aw-wizard-navigation-bar.horizontal ul.steps-indicator{display:flex;flex-direction:row;justify-content:center;margin:0;width:100%;list-style:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:before{left:25%;right:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li{width:50%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:before{left:16.66666667%;right:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li{width:33.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:before{left:12.5%;right:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li{width:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:before{left:10%;right:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li{width:20%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:before{left:8.33333333%;right:8.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li{width:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:before{left:7.14285714%;right:7.14285714%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li{width:14.28571429%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:before{left:6.25%;right:6.25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li{width:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:before{left:5.55555556%;right:5.55555556%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li{width:11.11111111%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:before{left:5%;right:5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li{width:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.horizontal ul.steps-indicator li{position:relative;margin:0;padding:0;pointer-events:none;text-align:center}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a .label{display:inline-block;padding-top:10px;color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:center;font-weight:700;transition:.25s}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a:hover .label{color:#4d4d4d}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a .label{color:grey}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.navigable{pointer-events:auto}", "aw-wizard-navigation-bar.vertical{max-width:280px;width:20%;height:100%;position:-webkit-sticky;position:sticky;top:0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator{padding:5px 5px 5px 19px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-7px;top:14px;height:calc(100% - 14px);width:1px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a{min-height:14px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-14px;width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done .step-indicator{border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid red}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:grey}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:grey;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done .step-indicator{background-color:#393;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:red;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:grey;border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done .step-indicator{color:#393;border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:red;border:2px solid red}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767;color:#676767}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326;color:#267326}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212;color:#12e212}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00;color:#c00}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:grey;color:grey}aw-wizard-navigation-bar.vertical ul.steps-indicator{display:flex;flex-direction:column;justify-content:center;list-style:none;margin:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.vertical ul.steps-indicator li{position:relative;pointer-events:none}aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child){margin-bottom:0;padding-bottom:10px}aw-wizard-navigation-bar.vertical ul.steps-indicator li a{display:flex;flex-direction:row;align-items:center;cursor:pointer}aw-wizard-navigation-bar.vertical ul.steps-indicator li a .label{margin-left:15px;color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:left;font-weight:700;transition:.25s}aw-wizard-navigation-bar.vertical ul.steps-indicator li a:hover .label{color:#4d4d4d}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a .label{color:grey}aw-wizard-navigation-bar.vertical ul.steps-indicator li.navigable{pointer-events:auto}"]
                }] }
    ];
    WizardNavigationBarComponent.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    WizardNavigationBarComponent.propDecorators = {
        direction: [{ type: Input }]
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
        { type: Component, args: [{
                    selector: 'aw-wizard-step',
                    template: "<ng-content></ng-content>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepComponent; }) }
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
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    Object.defineProperty(GoToStepDirective.prototype, "finalize", {
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
    Object.defineProperty(GoToStepDirective.prototype, "navigationMode", {
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
         */
        function () {
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
        { type: Directive, args: [{
                    selector: '[awGoToStep]'
                },] }
    ];
    GoToStepDirective.ctorParameters = function () { return [
        { type: WizardState },
        { type: WizardStep, decorators: [{ type: Optional }] }
    ]; };
    GoToStepDirective.propDecorators = {
        preFinalize: [{ type: Output }],
        postFinalize: [{ type: Output }],
        finalize: [{ type: Output }],
        targetStep: [{ type: Input, args: ['awGoToStep',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
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
        { type: Directive, args: [{
                    selector: '[awOptionalStep]'
                },] }
    ];
    OptionalStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: Host }] }
    ]; };
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
        this.preFinalize = new EventEmitter();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new EventEmitter();
    }
    Object.defineProperty(PreviousStepDirective.prototype, "finalize", {
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
         * A convenience field for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience field for `preFinalize`
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
    Object.defineProperty(PreviousStepDirective.prototype, "navigationMode", {
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
        { type: Directive, args: [{
                    selector: '[awPreviousStep]'
                },] }
    ];
    PreviousStepDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    PreviousStepDirective.propDecorators = {
        preFinalize: [{ type: Output }],
        postFinalize: [{ type: Output }],
        finalize: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
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
        { type: Directive, args: [{
                    selector: '[awSelectedStep]'
                },] }
    ];
    SelectedStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: Host }] }
    ]; };
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
        { type: Directive, args: [{
                    selector: '[awWizardStep]',
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepDirective; }) }
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
        { type: NgModule, args: [{
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
                        CommonModule
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

export { ArchwizardModule, WizardComponent, WizardCompletionStepComponent, WizardNavigationBarComponent, WizardStepComponent, EnableBackLinksDirective, GoToStepDirective, NextStepDirective, OptionalStepDirective, PreviousStepDirective, ResetWizardDirective, SelectedStepDirective, WizardCompletionStepDirective, WizardStepDirective, WizardStepTitleDirective, FreeNavigationMode, NavigationMode, SemiStrictNavigationMode, StrictNavigationMode, WizardState, navigationModeFactory, MovingDirection, WizardCompletionStep, WizardStep, isStepId, isStepIndex, isStepOffset, WizardCompletionStepComponent as ɵh, WizardNavigationBarComponent as ɵg, WizardStepComponent as ɵf, WizardComponent as ɵa, EnableBackLinksDirective as ɵn, GoToStepDirective as ɵj, NextStepDirective as ɵk, OptionalStepDirective as ɵm, PreviousStepDirective as ɵl, ResetWizardDirective as ɵr, SelectedStepDirective as ɵq, WizardCompletionStepDirective as ɵp, WizardStepSymbolDirective as ɵe, WizardStepTitleDirective as ɵd, WizardStepDirective as ɵo, WizardState as ɵb, WizardCompletionStep as ɵi, WizardStep as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hcmNod2l6YXJkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9mcmVlLW5hdmlnYXRpb24tbW9kZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vc2VtaS1zdHJpY3QtbmF2aWdhdGlvbi1tb2RlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vc3RyaWN0LW5hdmlnYXRpb24tbW9kZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5wcm92aWRlci50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvY29tcG9uZW50cy93aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvY29tcG9uZW50cy93aXphcmQtc3RlcC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9lbmFibGUtYmFjay1saW5rcy5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvdXRpbC9zdGVwLW9mZnNldC5pbnRlcmZhY2UudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvdXRpbC9zdGVwLWlkLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3N0ZXAtaW5kZXguaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9uZXh0LXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvb3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2FyY2h3aXphcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1hcmMgb24gMDEuMDYuMTcuXHJcbiAqL1xyXG5pbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdXaXphcmRTdGVwVGl0bGVgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYHN0ZXBUaXRsZWAgaW5wdXQgb2YgYSBbW1dpemFyZFN0ZXBdXVxyXG4gKiB0byBkZWZpbmUgdGhlIGNvbnRlbnQgb2YgYSBzdGVwIHRpdGxlIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXHJcbiAqIFRoaXMgc3RlcCB0aXRsZSBjYW4gYmUgZnJlZWx5IGNyZWF0ZWQgYW5kIGNhbiBjb250YWluIG1vcmUgdGhhbiBvbmx5IHBsYWluIHRleHRcclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cclxuICogICAgIC4uLlxyXG4gKiA8L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F3U3RlcFRpdGxlXSwgbmctdGVtcGxhdGVbYXdXaXphcmRTdGVwVGl0bGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IG9mIHRoZSBgbmctdGVtcGxhdGVgIHRoYXQgY29udGFpbnMgdGhpcyBbW1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZV1dXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gdGhlIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dCBvZiBhIFtbV2l6YXJkU3RlcF1dXHJcbiAqIHRvIGRlZmluZSB0aGUgc3RlcCBzeW1ib2wgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci4gIFRoaXMgd2F5IHN0ZXAgc3ltYm9sIG1heSBjb250YWluIGFyYml0cmFyeSBjb250ZW50LlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cclxuICogICAgIC4uLlxyXG4gKiA8L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXdTdGVwU3ltYm9sXSwgbmctdGVtcGxhdGVbYXdXaXphcmRTdGVwU3ltYm9sXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGVtcGxhdGVSZWYgQSByZWZlcmVuY2UgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGBuZy10ZW1wbGF0ZWAgdGhhdCBjb250YWlucyB0aGlzIFtbV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZV1dXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cclxufVxyXG4iLCJpbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZX0gZnJvbSAnLi4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0NvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmF2aWdhdGlvblN5bWJvbH0gZnJvbSAnLi9uYXZpZ2F0aW9uLXN5bWJvbC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB0eXBlIG9mIHdpemFyZCBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2l6YXJkU3RlcCB7XHJcbiAgLyoqXHJcbiAgICogQSBzdGVwIHRpdGxlIHByb3BlcnR5LCB3aGljaCBjb250YWlucyB0aGUgdmlzaWJsZSBoZWFkZXIgdGl0bGUgb2YgdGhlIHN0ZXAuXHJcbiAgICogVGhpcyB0aXRsZSBpcyB0aGVuIHNob3duIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXHJcbiAgICogQ29tcGFyZWQgdG8gYHN0ZXBUaXRsZWAgdGhpcyBwcm9wZXJ0eSBjYW4gY29udGFpbiBhbnkgaHRtbCBjb250ZW50IGFuZCBub3Qgb25seSBwbGFpbiB0ZXh0XHJcbiAgICovXHJcbiAgQENvbnRlbnRDaGlsZChXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUpXHJcbiAgcHVibGljIHN0ZXBUaXRsZVRlbXBsYXRlOiBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc3RlcCBzeW1ib2wgcHJvcGVydHkgdGhhdCwgaWYgZGVmaW5lZCwgb3ZlcnJpZGVzIGBuYXZpZ2F0aW9uU3ltYm9sYC5cclxuICAgKiBBbGxvd3MgdG8gZGlzcGxheSBhcmJpdHJhcnkgY29udGVudCBhcyBhIHN0ZXAgc3ltYm9sIGluc3RlYWQgb2YgcGxhaW4gdGV4dC5cclxuICAgKi9cclxuICBAQ29udGVudENoaWxkKFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUpXHJcbiAgcHVibGljIHN0ZXBTeW1ib2xUZW1wbGF0ZTogV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdGVwIGlkLCB1bmlxdWUgdG8gdGhlIHN0ZXBcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzdGVwSWQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdGVwIHRpdGxlIHByb3BlcnR5LCB3aGljaCBjb250YWlucyB0aGUgdmlzaWJsZSBoZWFkZXIgdGl0bGUgb2YgdGhlIHN0ZXAuXHJcbiAgICogVGhpcyB0aXRsZSBpcyBvbmx5IHNob3duIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIsIGlmIGBzdGVwVGl0bGVUZW1wbGF0ZWAgaXMgbm90IGRlZmluZWQgb3IgbnVsbC5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzdGVwVGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzeW1ib2wgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIGFuIG9wdGlvbmFsIHN5bWJvbCBmb3IgdGhlIHN0ZXAgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cclxuICAgKiBUYWtlcyBlZmZlY3Qgd2hlbiBgc3RlcFN5bWJvbFRlbXBsYXRlYCBpcyBub3QgZGVmaW5lZCBvciBudWxsLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG5hdmlnYXRpb25TeW1ib2w6IE5hdmlnYXRpb25TeW1ib2wgPSB7IHN5bWJvbDogJycgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGhhcyBiZWVuIGNvbXBsZXRlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb21wbGV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGlzIGN1cnJlbnRseSBzZWxlY3RlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZywgaWYgdGhlIHdpemFyZCBzdGVwIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0LCBpLmUuIGFmdGVyIHRoZSB3aXphcmQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYXMgdGhlIGluaXRpYWwgc3RlcFxyXG4gICAqL1xyXG4gIHB1YmxpYyBkZWZhdWx0U2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBib29sZWFuIGRlc2NyaWJpbmcgaWYgdGhlIHdpemFyZCBzdGVwIGlzIGFuIG9wdGlvbmFsIHN0ZXBcclxuICAgKi9cclxuICBwdWJsaWMgb3B0aW9uYWwgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiBvciBib29sZWFuIGRlY2lkaW5nLCBpZiB0aGlzIHN0ZXAgY2FuIGJlIGVudGVyZWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjYW5FbnRlcjogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBQcm9taXNlPGJvb2xlYW4+KSB8IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIG9yIGJvb2xlYW4gZGVjaWRpbmcsIGlmIHRoaXMgc3RlcCBjYW4gYmUgZXhpdGVkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY2FuRXhpdDogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBQcm9taXNlPGJvb2xlYW4+KSB8IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZW50ZXJlZC5cclxuICAgKiBUaGUgYm91bmQgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHRvIGRvIGluaXRpYWxpemF0aW9uIHdvcmsuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHN0ZXBFbnRlcjogRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cclxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3RlcEV4aXQ6IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaWYgdGhpcyB3aXphcmQgc3RlcCBzaG91bGQgYmUgdmlzaWJsZSB0byB0aGUgdXNlci5cclxuICAgKiBJZiB0aGUgc3RlcCBzaG91bGQgYmUgdmlzaWJsZSB0byB0aGUgdXNlciBmYWxzZSBpcyByZXR1cm5lZCwgb3RoZXJ3aXNlIHRydWVcclxuICAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpXHJcbiAgcHVibGljIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB3aXRoIGEgZ2l2ZW4gZGlyZWN0aW9uLlxyXG4gICAqIFRyYW5zaXRpb25lZCBpbiB0aGlzIGNhc2UgbWVhbnMgZWl0aGVyIGVudGVyZWQgb3IgZXhpdGVkLCBkZXBlbmRpbmcgb24gdGhlIGdpdmVuIGBjb25kaXRpb25gIHBhcmFtZXRlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSBjb25kaXRpb24gdmFyaWFibGUsIGRlY2lkaW5nIGlmIHRoZSBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWRcclxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhpcyBzdGVwIHNob3VsZCBiZSB0cmFuc2l0aW9uZWRcclxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGlzIHN0ZXAgY2FuIHRyYW5zaXRpb25lZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXHJcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgY29uZGl0aW9uYCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGNhblRyYW5zaXRpb25TdGVwKGNvbmRpdGlvbjogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vbGVhbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKHR5cGVvZihjb25kaXRpb24pID09PSB0eXBlb2YodHJ1ZSkpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25kaXRpb24gYXMgYm9vbGVhbik7XHJcbiAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZGl0aW9uKGRpcmVjdGlvbikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgSW5wdXQgdmFsdWUgJyR7Y29uZGl0aW9ufScgaXMgbmVpdGhlciBhIGJvb2xlYW4gbm9yIGEgZnVuY3Rpb25gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgc3RlcCBpcyBlbnRlcmVkXHJcbiAgICovXHJcbiAgcHVibGljIGVudGVyKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0ZXBFbnRlci5lbWl0KGRpcmVjdGlvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwIGlzIGV4aXRlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBleGl0KGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLnN0ZXBFeGl0LmVtaXQoZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgaWYgdGhpcyB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBmcm9tIHRoZSBnaXZlbiBkaXJlY3Rpb24uXHJcbiAgICogQmVjYXVzZSB0aGlzIG1ldGhvZCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSBgY2FuRW50ZXJgLCBpdCB3aWxsIHRocm93IGFuIGVycm9yLCBpZiBgY2FuRW50ZXJgIGlzIG5laXRoZXIgYSBib29sZWFuXHJcbiAgICogbm9yIGEgZnVuY3Rpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhpcyBzdGVwIHNob3VsZCBiZSBlbnRlcmVkXHJcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIHN0ZXAgY2FuIGJlIGVudGVyZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgYW5FbnRlcmAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cclxuICAgKi9cclxuICBwdWJsaWMgY2FuRW50ZXJTdGVwKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gV2l6YXJkU3RlcC5jYW5UcmFuc2l0aW9uU3RlcCh0aGlzLmNhbkVudGVyLCBkaXJlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyB0cnVlLCBpZiB0aGlzIHdpemFyZCBzdGVwIGNhbiBiZSBleGl0ZWQgaW50byBnaXZlbiBkaXJlY3Rpb24uXHJcbiAgICogQmVjYXVzZSB0aGlzIG1ldGhvZCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSBgY2FuRXhpdGAsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGBjYW5FeGl0YCBpcyBuZWl0aGVyIGEgYm9vbGVhblxyXG4gICAqIG5vciBhIGZ1bmN0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgbGVmdFxyXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoZSBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgY2FuRXhpdGAgaXMgbmVpdGhlciBhIGZ1bmN0aW9uIG5vciBhIGJvb2xlYW5cclxuICAgKi9cclxuICBwdWJsaWMgY2FuRXhpdFN0ZXAoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBXaXphcmRTdGVwLmNhblRyYW5zaXRpb25TdGVwKHRoaXMuY2FuRXhpdCwgZGlyZWN0aW9uKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggYSBzdGVwIHRyYW5zaXRpb24gd2FzIG1hZGVcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZW51bSBjb250YWlucyB0aGUgZGlmZmVyZW50IHBvc3NpYmxlIG1vdmluZyBkaXJlY3Rpb25zIGluIHdoaWNoIGEgd2l6YXJkIGNhbiBiZSB0cmF2ZXJzZWRcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgZW51bSBNb3ZpbmdEaXJlY3Rpb24ge1xyXG4gIC8qKlxyXG4gICAqIEEgZm9yd2FyZCBzdGVwIHRyYW5zaXRpb25cclxuICAgKi9cclxuICBGb3J3YXJkcyxcclxuICAvKipcclxuICAgKiBBIGJhY2t3YXJkIHN0ZXAgdHJhbnNpdGlvblxyXG4gICAqL1xyXG4gIEJhY2t3YXJkcyxcclxuICAvKipcclxuICAgKiBObyBzdGVwIHRyYW5zaXRpb24gd2FzIGRvbmVcclxuICAgKi9cclxuICBTdGF5XHJcbn1cclxuIiwiaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQW4gaW50ZXJmYWNlIGRlc2NyaWJpbmcgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdHksIHdoaWNoIG11c3QgYmUgcHJvdmlkZWQgYnkgYSBuYXZpZ2F0aW9uIG1vZGUuXHJcbiAqIEEgbmF2aWdhdGlvbiBtb2RlIG1hbmFnZXMgdGhlIG5hdmlnYXRpb24gYmV0d2VlbiBkaWZmZXJlbnQgd2l6YXJkIHN0ZXBzLCB0aGlzIGNvbnRhaW5zIHRoZSB2YWxpZGF0aW9uLCBpZiBhIHN0ZXAgdHJhbnNpdGlvbiBjYW4gYmUgZG9uZVxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgd2l6YXJkIHN0ZXAsIGFzIGRlZmluZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB0byBhbmQgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPjtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZXMgdG8gdHJhbnNpdGlvbiB0byB0aGUgd2l6YXJkIHN0ZXAsIGFzIGRlbm90ZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LlxyXG4gICAqIElmIHRoaXMgaXMgbm90IHBvc3NpYmxlLCB0aGUgY3VycmVudCB3aXphcmQgc3RlcCBzaG91bGQgYmUgZXhpdGVkIGFuZCB0aGVuIHJlZW50ZXJlZCB3aXRoIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxyXG4gICAqIEBwYXJhbSBwb3N0RmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcywgd2hldGhlciB0aGUgd2l6YXJkIHN0ZXAsIGxvY2F0ZWQgYXQgdGhlIGdpdmVuIGluZGV4LCBpcyBjYW4gYmUgbmF2aWdhdGVkIHRvXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8sIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgc3RhdGUgb2YgdGhpcyB3aXphcmQuXHJcbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXHJcbiAgICogSW4gYWRkaXRpb24gdGhlIHdob2xlIHdpemFyZCBpcyBzZXQgYXMgaW5jb21wbGV0ZVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHJlc2V0KCk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdGhlIHdpemFyZCB0byB0aGUgcHJldmlvdXMgc3RlcCBmcm9tIHRoZSBgY3VycmVudFN0ZXBgXHJcbiAgICovXHJcbiAgZ29Ub1ByZXZpb3VzU3RlcChwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5oYXNQcmV2aW91c1N0ZXAoKSkge1xyXG4gICAgICB0aGlzLmdvVG9TdGVwKHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCAtIDEsIHByZUZpbmFsaXplLCBwb3N0RmluYWxpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZXMgdG8gdHJhbnNpdGlvbiB0aGUgd2l6YXJkIHRvIHRoZSBuZXh0IHN0ZXAgZnJvbSB0aGUgYGN1cnJlbnRTdGVwYFxyXG4gICAqL1xyXG4gIGdvVG9OZXh0U3RlcChwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5oYXNOZXh0U3RlcCgpKSB7XHJcbiAgICAgIHRoaXMuZ29Ub1N0ZXAodGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ICsgMSwgcHJlRmluYWxpemUsIHBvc3RGaW5hbGl6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEEgW1tOYXZpZ2F0aW9uTW9kZV1dLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgd2l0aG91dCBhbnkgbGltaXRhdGlvbnMsXHJcbiAqIGFzIGxvbmcgYXMgdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnJlZU5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIG1vZGVsL3N0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XHJcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXHJcbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcclxuICAgKiAtIGl0IGV4aXN0c1xyXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGNhbkV4aXRDdXJyZW50U3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNhbkV4aXRTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxyXG4gICAgICAudGhlbihjYW5FeGl0Q3VycmVudFN0ZXApXHJcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cclxuICAgKiBXaGVuIGVudGVyaW5nIHRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgY29tcGxldGVkXHJcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkXHJcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBzZXQgYXMgc2VsZWN0ZWRcclxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGVudGVyZWRcclxuICAgKlxyXG4gICAqIFdoZW4gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY291bGRuJ3QgYmUgZW50ZXJlZCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxyXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgYW5kIGVudGVyZWQgaW4gdGhlIGRpcmVjdGlvbiBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgZW50ZXJlZFxyXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxyXG4gICAqIEBwYXJhbSBwb3N0RmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxyXG4gICAqL1xyXG4gIGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xyXG4gICAgdGhpcy5jYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4KS50aGVuKG5hdmlnYXRpb25BbGxvd2VkID0+IHtcclxuICAgICAgaWYgKG5hdmlnYXRpb25BbGxvd2VkKSB7XHJcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cclxuICAgICAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcclxuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQobW92aW5nRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IGRlc3RpbmF0aW9uSW5kZXg7XHJcblxyXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIobW92aW5nRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xyXG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxyXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxyXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcclxuICAgKi9cclxuICByZXNldCgpOiB2b2lkIHtcclxuICAgIC8vIHRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXhcclxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXNldCB0aGUgc3RlcCBpbnRlcm5hbCBzdGF0ZVxyXG4gICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGZpcnN0IHN0ZXAgYXMgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4O1xyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB3aXphcmQgY29tcGxldGlvbiBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2l6YXJkQ29tcGxldGlvblN0ZXAgZXh0ZW5kcyBXaXphcmRTdGVwIHtcclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGVwRXhpdCA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjYW5FeGl0OiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RlcEVudGVyLmVtaXQoZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcHVibGljIGV4aXQoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIC8vIHNldCB0aGlzIGNvbXBsZXRpb24gc3RlcCBhcyBpbmNvbXBsZXRlXHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zdGVwRXhpdC5lbWl0KGRpcmVjdGlvbik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XHJcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBBIFtbTmF2aWdhdGlvbk1vZGVdXSwgd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIHdpdGggc29tZSBsaW1pdGF0aW9ucy5cclxuICogVGhlIHVzZXIgY2FuIG9ubHkgbmF2aWdhdGlvbiB0byBhIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAsIGlmOlxyXG4gKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAqIC0gYSBjb21wbGV0aW9uIHN0ZXAgY2FuIG9ubHkgYmUgZW50ZXJlZCwgaWYgYWxsIFwibm9ybWFsXCIgd2l6YXJkIHN0ZXBzIGhhdmUgYmVlbiBjb21wbGV0ZWRcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIG1vZGVsL3N0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XHJcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXHJcbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcclxuICAgKiAtIGl0IGV4aXN0c1xyXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKiAtIGFsbCBcIm5vcm1hbFwiIHdpemFyZCBzdGVwcyBoYXZlIGJlZW4gY29tcGxldGVkLCBhcmUgb3B0aW9uYWwgb3Igc2VsZWN0ZWQsIG9yIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzbid0IGEgY29tcGxldGlvbiBzdGVwXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgaGFzU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jYW5FeGl0U3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KS5jYW5FbnRlclN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHByb3ZpZGUgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgYXMgYSBsYW1iZGEgaW4gY2FzZSB0aGUgaW5kZXggZG9lc24ndCBleGlzdCAoaS5lLiBoYXNTdGVwID09PSBmYWxzZSlcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocHJldmlvdXMpIHtcclxuICAgICAgICBjb25zdCBhbGxOb3JtYWxTdGVwc0NvbXBsZXRlZCA9IHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcclxuICAgICAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IGRlc3RpbmF0aW9uSW5kZXgpXHJcbiAgICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsIHx8IHN0ZXAuc2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxyXG4gICAgICAgICAgISh0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpIGluc3RhbmNlb2YgV2l6YXJkQ29tcGxldGlvblN0ZXApIHx8IGFsbE5vcm1hbFN0ZXBzQ29tcGxldGVkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGhhc1N0ZXApXHJcbiAgICAgIC50aGVuKGNhbkV4aXRDdXJyZW50U3RlcClcclxuICAgICAgLnRoZW4oY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXApXHJcbiAgICAgIC50aGVuKGRlc3RpbmF0aW9uU3RlcCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmllcyB0byBlbnRlciB0aGUgd2l6YXJkIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIGNvbXBsZXRlZFxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIHVuc2VsZWN0ZWRcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxyXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgc2V0IGFzIHNlbGVjdGVkXHJcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBlbnRlcmVkXHJcbiAgICpcclxuICAgKiBXaGVuIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNvdWxkbid0IGJlIGVudGVyZWQsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcclxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGFuZCBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gYE1vdmluZ0RpcmVjdGlvbi5TdGF5YFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGVudGVyZWRcclxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKi9cclxuICBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XHJcbiAgICAgIGlmIChuYXZpZ2F0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXHJcbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgaWYgKHByZUZpbmFsaXplKSB7XHJcbiAgICAgICAgICBwcmVGaW5hbGl6ZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZWF2ZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xyXG5cclxuICAgICAgICAvLyBnbyB0byBuZXh0IHN0ZXBcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChwb3N0RmluYWxpemUpIHtcclxuICAgICAgICAgIHBvc3RGaW5hbGl6ZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0ZXAgY2FuJ3QgYmUgbGVmdCwgcmVlbnRlciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcclxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIGlzTmF2aWdhYmxlKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkgaW5zdGFuY2VvZiBXaXphcmRDb21wbGV0aW9uU3RlcCkge1xyXG4gICAgICAvLyBhIGNvbXBsZXRpb24gc3RlcCBjYW4gb25seSBiZSBlbnRlcmVkLCBpZiBhbGwgcHJldmlvdXMgc3RlcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZCwgYXJlIG9wdGlvbmFsLCBvciBzZWxlY3RlZFxyXG4gICAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IGRlc3RpbmF0aW9uSW5kZXgpXHJcbiAgICAgICAgLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCB8fCBzdGVwLnNlbGVjdGVkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGEgXCJub3JtYWxcIiBzdGVwIGNhbiBhbHdheXMgYmUgZW50ZXJlZFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCB0aGUgZGVmYXVsdCBzdGVwIGluZGV4XHJcbiAgICBpZiAoIXRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcCh0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIGRlZmF1bHQgc3RlcCBpcyBhIGNvbXBsZXRpb24gc3RlcCBhbmQgdGhlIHdpemFyZCBjb250YWlucyBtb3JlIHRoYW4gb25lIHN0ZXBcclxuICAgIGNvbnN0IGRlZmF1bHRDb21wbGV0aW9uU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgodGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KSBpbnN0YW5jZW9mIFdpemFyZENvbXBsZXRpb25TdGVwICYmXHJcbiAgICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMubGVuZ3RoICE9PSAxO1xyXG5cclxuICAgIGlmIChkZWZhdWx0Q29tcGxldGlvblN0ZXApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBzdGVwIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fSByZWZlcmVuY2VzIGEgY29tcGxldGlvbiBzdGVwYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcclxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgc3RlcC5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcclxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBBIFtbTmF2aWdhdGlvbk1vZGVdXSwgd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIG5hdmlnYXRlIHdpdGggc3RyaWN0IGxpbWl0YXRpb25zLlxyXG4gKiBUaGUgdXNlciBjYW4gb25seSBuYXZpZ2F0aW9uIHRvIGEgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcCwgaWY6XHJcbiAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICogLSBhbGwgcHJldmlvdXMgc3RlcHMgdG8gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaGF2ZSBiZWVuIGNvbXBsZXRlZCBvciBhcmUgb3B0aW9uYWxcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaWN0TmF2aWdhdGlvbk1vZGUgZXh0ZW5kcyBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgc3RhdGUgb2YgdGhlIHdpemFyZCwgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggdGhpcyBuYXZpZ2F0aW9uIG1vZGVcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcclxuICAgIHN1cGVyKHdpemFyZFN0YXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB3aXphcmQgY2FuIGJlIHRyYW5zaXRpb25lZCB0byB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcC5cclxuICAgKiBBIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkIGlmOlxyXG4gICAqIC0gaXQgZXhpc3RzXHJcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxyXG4gICAqIC0gYWxsIHByZXZpb3VzIHN0ZXBzIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGhhdmUgYmVlbiBjb21wbGV0ZWQgb3IgYXJlIG9wdGlvbmFsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQsIGZhbHNlIG90aGVyd2lzZVxyXG4gICAqL1xyXG4gIGNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgaGFzU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcclxuXHJcbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jYW5FeGl0U3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcclxuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KS5jYW5FbnRlclN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFsbFByZXZpb3VzU3RlcHNDb21wbGV0ZSA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAocHJldmlvdXMpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcclxuICAgICAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IGRlc3RpbmF0aW9uSW5kZXggJiYgaW5kZXggIT09IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleClcclxuICAgICAgICAgIC5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGhhc1N0ZXApXHJcbiAgICAgIC50aGVuKGNhbkV4aXRDdXJyZW50U3RlcClcclxuICAgICAgLnRoZW4oY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXApXHJcbiAgICAgIC50aGVuKGFsbFByZXZpb3VzU3RlcHNDb21wbGV0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmllcyB0byBlbnRlciB0aGUgd2l6YXJkIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXHJcbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIGNvbXBsZXRlZFxyXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIHVuc2VsZWN0ZWRcclxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxyXG4gICAqIC0gYWxsIHN0ZXBzIGJldHdlZW4gdGhlIG9sZCBjdXJyZW50IHN0ZXAgYW5kIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGFyZSBtYXJrZWQgYXMgaW5jb21wbGV0ZVxyXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgc2V0IGFzIHNlbGVjdGVkXHJcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBlbnRlcmVkXHJcbiAgICpcclxuICAgKiBXaGVuIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNvdWxkbid0IGJlIGVudGVyZWQsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcclxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGFuZCBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gYE1vdmluZ0RpcmVjdGlvbi5TdGF5YFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGVudGVyZWRcclxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcclxuICAgKi9cclxuICBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XHJcbiAgICAgIGlmIChuYXZpZ2F0aW9uQWxsb3dlZCkge1xyXG4gICAgICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XHJcblxyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIGlmIChwcmVGaW5hbGl6ZSkge1xyXG4gICAgICAgICAgcHJlRmluYWxpemUuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGVhdmUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChtb3ZpbmdEaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGFsbCBzdGVwcyBhZnRlciB0aGUgZGVzdGluYXRpb24gc3RlcCB0byBpbmNvbXBsZXRlXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwc1xyXG4gICAgICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA+IGRlc3RpbmF0aW9uSW5kZXggJiYgaW5kZXggPiBkZXN0aW5hdGlvbkluZGV4KVxyXG4gICAgICAgICAgLmZvckVhY2goc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gZGVzdGluYXRpb25JbmRleDtcclxuXHJcbiAgICAgICAgLy8gZ28gdG8gbmV4dCBzdGVwXHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihtb3ZpbmdEaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cclxuICAgICAgICBpZiAocG9zdEZpbmFsaXplKSB7XHJcbiAgICAgICAgICBwb3N0RmluYWxpemUuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGVwIGNhbid0IGJlIGxlZnQsIHJlZW50ZXIgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XHJcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAvLyBhIHdpemFyZCBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8gdGhyb3VnaCB0aGUgbmF2aWdhdGlvbiBiYXIsIGlmZiBpdCdzIGxvY2F0ZWQgYmVmb3JlIHRoZSBjdXJyZW50IHdpemFyZCBzdGVwXHJcbiAgICByZXR1cm4gZGVzdGluYXRpb25JbmRleCA8IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgc3RhdGUgb2YgdGhpcyB3aXphcmQuXHJcbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXHJcbiAgICogSW4gYWRkaXRpb24gdGhlIHdob2xlIHdpemFyZCBpcyBzZXQgYXMgaW5jb21wbGV0ZVxyXG4gICAqL1xyXG4gIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgLy8gdGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggdGhlIGRlZmF1bHQgc3RlcCBpbmRleFxyXG4gICAgaWYgKCF0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAodGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB3aXphcmQgZG9lc24ndCBjb250YWluIGEgc3RlcCB3aXRoIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF0IGxlYXN0IG9uZSBzdGVwIGlzIGJlZm9yZSB0aGUgZGVmYXVsdCBzdGVwLCB0aGF0IGlzIG5vdCBvcHRpb25hbFxyXG4gICAgY29uc3QgaWxsZWdhbERlZmF1bHRTdGVwID0gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwc1xyXG4gICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpXHJcbiAgICAgIC5zb21lKHN0ZXAgPT4gIXN0ZXAub3B0aW9uYWwpO1xyXG5cclxuICAgIGlmIChpbGxlZ2FsRGVmYXVsdFN0ZXApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBzdGVwIGluZGV4ICR7dGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4fSBpcyBsb2NhdGVkIGFmdGVyIGEgbm9uIG9wdGlvbmFsIHN0ZXBgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXNldCB0aGUgc3RlcCBpbnRlcm5hbCBzdGF0ZVxyXG4gICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGZpcnN0IHN0ZXAgYXMgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gdGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4O1xyXG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RnJlZU5hdmlnYXRpb25Nb2RlfSBmcm9tICcuL2ZyZWUtbmF2aWdhdGlvbi1tb2RlJztcclxuaW1wb3J0IHtTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc2VtaS1zdHJpY3QtbmF2aWdhdGlvbi1tb2RlJztcclxuaW1wb3J0IHtTdHJpY3ROYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9zdHJpY3QtbmF2aWdhdGlvbi1tb2RlJztcclxuXHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiBBIGZhY3RvcnkgbWV0aG9kIHVzZWQgdG8gY3JlYXRlIFtbTmF2aWdhdGlvbk1vZGVdXSBpbnN0YW5jZXNcclxuICpcclxuICogQHBhcmFtIG5hdmlnYXRpb25Nb2RlIFRoZSBuYW1lIG9mIHRoZSB0byBiZSB1c2VkIG5hdmlnYXRpb24gbW9kZVxyXG4gKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZSBvZiB0aGUgd2l6YXJkXHJcbiAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIFtbTmF2aWdhdGlvbk1vZGVdXVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpb25Nb2RlRmFjdG9yeShuYXZpZ2F0aW9uTW9kZTogc3RyaW5nLCB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpOiBOYXZpZ2F0aW9uTW9kZSB7XHJcbiAgc3dpdGNoIChuYXZpZ2F0aW9uTW9kZSkge1xyXG4gICAgY2FzZSAnZnJlZSc6XHJcbiAgICAgIHJldHVybiBuZXcgRnJlZU5hdmlnYXRpb25Nb2RlKHdpemFyZFN0YXRlKTtcclxuICAgIGNhc2UgJ3NlbWktc3RyaWN0JzpcclxuICAgICAgcmV0dXJuIG5ldyBTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xyXG4gICAgY2FzZSAnc3RyaWN0JzpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBuZXcgU3RyaWN0TmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7bmF2aWdhdGlvbk1vZGVGYWN0b3J5fSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5wcm92aWRlcic7XHJcblxyXG4vKipcclxuICogVGhlIGludGVybmFsIG1vZGVsL3N0YXRlIG9mIGEgd2l6YXJkLlxyXG4gKiBUaGlzIG1vZGVsIGNvbnRhaW5zOlxyXG4gKiAtIGFuIGFycmF5IHdpdGggYWxsIHN0ZXBzIHRoZSB3aXphcmQgY29udGFpbnNcclxuICogLSB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgdGhlIHdpemFyZCBjdXJyZW50bHkgcmVzaWRlcyBpbnNpZGVcclxuICogLSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY29tcGxldGVuZXNzIG9mIHRoZSB3aXphcmRcclxuICogLSBzb21lIGFkZGl0aW9uYWwgaGVscGVyIG1ldGhvZHNcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGF0ZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgc3RlcCBpbmRleCwgYXMgdGFrZW4gZnJvbSB0aGUgW1tXaXphcmRDb21wb25lbnRdXVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2RlZmF1bHRTdGVwSW5kZXggPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBhcnJheSByZXByZXNlbnRhdGlvbiBvZiBhbGwgd2l6YXJkIHN0ZXBzIGJlbG9uZ2luZyB0byB0aGlzIG1vZGVsXHJcbiAgICovXHJcbiAgcHVibGljIHdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBpbml0aWFsIGRlZmF1bHQgc3RlcC5cclxuICAgKiBCZXdhcmU6IFRoaXMgaW5pdGlhbCBkZWZhdWx0IGlzIG9ubHkgdXNlZCBpZiBubyB3aXphcmQgc3RlcCBoYXMgYmVlbiBlbmhhbmNlZCB3aXRoIHRoZSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlZmF1bHRTdGVwSW5kZXggVGhlIG5ldyBkZWZhdWx0IHdpemFyZCBzdGVwIGluZGV4XHJcbiAgICovXHJcbiAgcHVibGljIHNldCBkZWZhdWx0U3RlcEluZGV4KGRlZmF1bHRTdGVwSW5kZXgpIHtcclxuICAgIHRoaXMuX2RlZmF1bHRTdGVwSW5kZXggPSBkZWZhdWx0U3RlcEluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYWwgc3RlcCBpbmRleC5cclxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBlaXRoZXI6XHJcbiAgICogLSB0aGUgaW5kZXggb2YgYSB3aXphcmQgc3RlcCB3aXRoIGEgYHNlbGVjdGVkYCBkaXJlY3RpdmUsIG9yXHJcbiAgICogLSB0aGUgZGVmYXVsdCBzdGVwIGluZGV4LCBzZXQgaW4gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGRlZmF1bHRTdGVwSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGZvdW5kRGVmYXVsdFN0ZXAgPSB0aGlzLndpemFyZFN0ZXBzLmZpbmQoc3RlcCA9PiBzdGVwLmRlZmF1bHRTZWxlY3RlZCk7XHJcblxyXG4gICAgaWYgKGZvdW5kRGVmYXVsdFN0ZXApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5kZXhPZlN0ZXAoZm91bmREZWZhdWx0U3RlcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFN0ZXBJbmRleDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSB2aXNpYmxlIGFuZCBzZWxlY3RlZCBzdGVwIGluc2lkZSB0aGUgd2l6YXJkU3RlcHMgUXVlcnlMaXN0LlxyXG4gICAqIElmIHRoaXMgd2l6YXJkIGNvbnRhaW5zIG5vIHN0ZXBzLCBjdXJyZW50U3RlcEluZGV4IGlzIC0xXHJcbiAgICovXHJcbiAgcHVibGljIGN1cnJlbnRTdGVwSW5kZXggPSAtMTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIHRvIG5hdmlnYXRlIGluc2lkZSB0aGUgd2l6YXJkXHJcbiAgICovXHJcbiAgcHVibGljIG5hdmlnYXRpb25Nb2RlOiBOYXZpZ2F0aW9uTW9kZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXHJcbiAgICovXHJcbiAgcHVibGljIGRpc2FibGVOYXZpZ2F0aW9uQmFyOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgV2l6YXJkU3RlcCBvYmplY3QgYmVsb25naW5nIHRvIHRoZSBjdXJyZW50bHkgdmlzaWJsZSBhbmQgc2VsZWN0ZWQgc3RlcC5cclxuICAgKiBUaGUgY3VycmVudFN0ZXAgaXMgYWx3YXlzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgd2l6YXJkIHN0ZXAuXHJcbiAgICogVGhlIGN1cnJlbnRTdGVwIGNhbiBiZSBlaXRoZXIgY29tcGxldGVkLCBpZiBpdCB3YXMgdmlzaXRlZCBlYXJsaWVyLFxyXG4gICAqIG9yIG5vdCBjb21wbGV0ZWQsIGlmIGl0IGlzIHZpc2l0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lIG9yIGl0cyBzdGF0ZSBpcyBjdXJyZW50bHkgb3V0IG9mIGRhdGUuXHJcbiAgICpcclxuICAgKiBJZiB0aGlzIHdpemFyZCBjb250YWlucyBubyBzdGVwcywgY3VycmVudFN0ZXAgaXMgbnVsbFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgY3VycmVudFN0ZXAoKTogV2l6YXJkU3RlcCB7XHJcbiAgICBpZiAodGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbXBsZXRlbmVzcyBvZiB0aGUgd2l6YXJkLlxyXG4gICAqIElmIHRoZSB3aXphcmQgaGFzIGJlZW4gY29tcGxldGVkLCBpLmUuIGFsbCBzdGVwcyBhcmUgZWl0aGVyIGNvbXBsZXRlZCBvciBvcHRpb25hbCwgdGhpcyB2YWx1ZSBpcyB0cnVlLCBvdGhlcndpc2UgaXQgaXMgZmFsc2VcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGNvbXBsZXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgbmF2aWdhdGlvbiBtb2RlIHRvIHRoZSBuYXZpZ2F0aW9uIG1vZGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVwZGF0ZWROYXZpZ2F0aW9uTW9kZSBUaGUgbmFtZSBvZiB0aGUgbmV3IG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIHVwZGF0ZU5hdmlnYXRpb25Nb2RlKHVwZGF0ZWROYXZpZ2F0aW9uTW9kZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlID0gbmF2aWdhdGlvbk1vZGVGYWN0b3J5KHVwZGF0ZWROYXZpZ2F0aW9uTW9kZSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSB3aXphcmQgc3RlcHMgdG8gdGhlIG5ldyBhcnJheVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVwZGF0ZWRXaXphcmRTdGVwcyBUaGUgdXBkYXRlZCB3aXphcmQgc3RlcHNcclxuICAgKi9cclxuICB1cGRhdGVXaXphcmRTdGVwcyh1cGRhdGVkV2l6YXJkU3RlcHM6IEFycmF5PFdpemFyZFN0ZXA+KTogdm9pZCB7XHJcbiAgICAvLyB0aGUgd2l6YXJkIGlzIGN1cnJlbnRseSBub3QgaW4gdGhlIGluaXRpYWxpemF0aW9uIHBoYXNlXHJcbiAgICBpZiAodGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IHVwZGF0ZWRXaXphcmRTdGVwcy5pbmRleE9mKHRoaXMud2l6YXJkU3RlcHNbdGhpcy5jdXJyZW50U3RlcEluZGV4XSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aXphcmRTdGVwcyA9IHVwZGF0ZWRXaXphcmRTdGVwcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIGdpdmVuIGluZGV4IGBzdGVwSW5kZXhgIGlzIGluc2lkZSB0aGUgcmFuZ2Ugb2YgcG9zc2libGUgd2l6YXJkIHN0ZXBzIGluc2lkZSB0aGlzIHdpemFyZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0ZXBJbmRleCBUaGUgdG8gYmUgY2hlY2tlZCBpbmRleCBvZiBhIHN0ZXAgaW5zaWRlIHRoaXMgd2l6YXJkXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gYHN0ZXBJbmRleGAgaXMgY29udGFpbmVkIGluc2lkZSB0aGlzIHdpemFyZCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICovXHJcbiAgaGFzU3RlcChzdGVwSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoID4gMCAmJiAwIDw9IHN0ZXBJbmRleCAmJiBzdGVwSW5kZXggPCB0aGlzLndpemFyZFN0ZXBzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIGhhcyBhIHByZXZpb3VzIHN0ZXAgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgKi9cclxuICBoYXNQcmV2aW91c1N0ZXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGhhcyBhIG5leHQgc3RlcCwgY29tcGFyZWQgdG8gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIHdpemFyZCBoYXMgYSBuZXh0IHN0ZXAgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAqL1xyXG4gIGhhc05leHRTdGVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzU3RlcCh0aGlzLmN1cnJlbnRTdGVwSW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBpcyBjdXJyZW50bHkgaW5zaWRlIGl0cyBsYXN0IHN0ZXBcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHdpemFyZCBpcyBjdXJyZW50bHkgaW5zaWRlIGl0cyBsYXN0IHN0ZXBcclxuICAgKi9cclxuICBpc0xhc3RTdGVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoID4gMCAmJiB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPT09IHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoIC0gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIHRoZSBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAuXHJcbiAgICogSWYgbm8gW1tXaXphcmRTdGVwXV0gZXhpc3RzIGF0IHRoZSBnaXZlbiBpbmRleCBhbiBFcnJvciBpcyB0aHJvd25cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIGdpdmVuIGluZGV4XHJcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIFtbV2l6YXJkU3RlcF1dIGF0IHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YFxyXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24sIGlmIHRoZSBnaXZlbiBpbmRleCBgc3RlcEluZGV4YCBkb2Vzbid0IGV4aXN0XHJcbiAgICovXHJcbiAgZ2V0U3RlcEF0SW5kZXgoc3RlcEluZGV4OiBudW1iZXIpOiBXaXphcmRTdGVwIHtcclxuICAgIGlmICghdGhpcy5oYXNTdGVwKHN0ZXBJbmRleCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhIGtub3duIHN0ZXAsIGJ1dCBnb3Qgc3RlcEluZGV4OiAke3N0ZXBJbmRleH0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbc3RlcEluZGV4XTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgc3RlcCB3aXRoIHRoZSBnaXZlbiBgc3RlcElkYC5cclxuICAgKiBJZiBubyBzdGVwIHdpdGggdGhlIGdpdmVuIGBzdGVwSWRgIGV4aXN0cywgYC0xYCBpcyByZXR1cm5lZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0ZXBJZCBUaGUgZ2l2ZW4gc3RlcCBpZFxyXG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBpbmRleCBvZiBhIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gc3RlcCBpZCwgb3IgYC0xYCBpZiBubyBzdGVwIHdpdGggdGhlIGdpdmVuIGlkIGlzIGluY2x1ZGVkIGluIHRoZSB3aXphcmRcclxuICAgKi9cclxuICBnZXRJbmRleE9mU3RlcFdpdGhJZChzdGVwSWQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5maW5kSW5kZXgoc3RlcCA9PiBzdGVwLnN0ZXBJZCA9PT0gc3RlcElkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gYHN0ZXBgLlxyXG4gICAqIElmIHRoZSBnaXZlbiBbW1dpemFyZFN0ZXBdXSBpcyBub3QgY29udGFpbmVkIGluc2lkZSB0aGlzIHdpemFyZCwgYC0xYCBpcyByZXR1cm5lZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0ZXAgVGhlIGdpdmVuIFtbV2l6YXJkU3RlcF1dXHJcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGBzdGVwYCBvciBgLTFgIGlmIHRoZSBzdGVwIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgd2l6YXJkXHJcbiAgICovXHJcbiAgZ2V0SW5kZXhPZlN0ZXAoc3RlcDogV2l6YXJkU3RlcCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5pbmRleE9mKHN0ZXApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlcyB0aGUgY29ycmVjdCBbW01vdmluZ0RpcmVjdGlvbl1dIHZhbHVlIGZvciBhIGdpdmVuIGBkZXN0aW5hdGlvblN0ZXBgIGNvbXBhcmVkIHRvIHRoZSBgY3VycmVudFN0ZXBJbmRleGAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25TdGVwIFRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgW1tNb3ZpbmdEaXJlY3Rpb25dXVxyXG4gICAqL1xyXG4gIGdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvblN0ZXA6IG51bWJlcik6IE1vdmluZ0RpcmVjdGlvbiB7XHJcbiAgICBsZXQgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb247XHJcblxyXG4gICAgaWYgKGRlc3RpbmF0aW9uU3RlcCA+IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xyXG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHM7XHJcbiAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uU3RlcCA8IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xyXG4gICAgICBtb3ZpbmdEaXJlY3Rpb24gPSBNb3ZpbmdEaXJlY3Rpb24uQmFja3dhcmRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLlN0YXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vdmluZ0RpcmVjdGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBkZWZpbmVzIHRoZSByb290IGNvbXBvbmVudCBvZiBhIHdpemFyZC5cclxuICogVGhyb3VnaCB0aGUgc2V0dGluZyBvZiBpbnB1dCBwYXJhbWV0ZXJzIGZvciB0aGUgYGF3LXdpemFyZGAgY29tcG9uZW50IGl0J3MgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBsb2NhdGlvbiBhbmQgc2l6ZVxyXG4gKiBvZiBpdHMgbmF2aWdhdGlvbiBiYXIuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkIFtuYXZCYXJMb2NhdGlvbl09XCJsb2NhdGlvbiBvZiBuYXZpZ2F0aW9uIGJhclwiIFtuYXZCYXJMYXlvdXRdPVwibGF5b3V0IG9mIG5hdmlnYXRpb24gYmFyXCI+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQ+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBXaXRob3V0IGNvbXBsZXRpb24gc3RlcDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkIG5hdkJhckxvY2F0aW9uPVwidG9wXCIgbmF2QmFyTGF5b3V0PVwic21hbGxcIj5cclxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxyXG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIDwvYXctd2l6YXJkPlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBjb21wbGV0aW9uIHN0ZXA6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZCBuYXZCYXJMb2NhdGlvbj1cInRvcFwiIG5hdkJhckxheW91dD1cInNtYWxsXCI+XHJcbiAqICAgICA8YXctd2l6YXJkLXN0ZXA+Li4uPC9hdy13aXphcmQtc3RlcD5cclxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxyXG4gKiAgICAgPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+Li4uPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxyXG4gKiA8L2F3LXdpemFyZD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnd2l6YXJkLmNvbXBvbmVudC5sZXNzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtXaXphcmRTdGF0ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQSBRdWVyeUxpc3QgY29udGFpbmluZyBhbGwgW1tXaXphcmRTdGVwXV1zIGluc2lkZSB0aGlzIHdpemFyZFxyXG4gICAqL1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oV2l6YXJkU3RlcClcclxuICBwdWJsaWMgd2l6YXJkU3RlcHM6IFF1ZXJ5TGlzdDxXaXphcmRTdGVwPjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxvY2F0aW9uIG9mIHRoZSBuYXZpZ2F0aW9uIGJhciBpbnNpZGUgdGhlIHdpemFyZC5cclxuICAgKiBUaGlzIGxvY2F0aW9uIGNhbiBiZSBlaXRoZXIgdG9wLCBib3R0b20sIGxlZnQgb3IgcmlnaHRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBuYXZCYXJMb2NhdGlvbiA9ICd0b3AnO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGF5b3V0IG9mIHRoZSBuYXZpZ2F0aW9uIGJhciBpbnNpZGUgdGhlIHdpemFyZC5cclxuICAgKiBUaGUgbGF5b3V0IGNhbiBiZSBlaXRoZXIgc21hbGwsIGxhcmdlLWZpbGxlZCwgbGFyZ2UtZW1wdHkgb3IgbGFyZ2Utc3ltYm9sc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG5hdkJhckxheW91dCA9ICdzbWFsbCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXBzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIHNob3duLlxyXG4gICAqIFRoZSBkaXJlY3Rpb24gY2FuIGJlIGVpdGhlciBgbGVmdC10by1yaWdodGAgb3IgYHJpZ2h0LXRvLWxlZnRgXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmF2QmFyRGlyZWN0aW9uID0gJ2xlZnQtdG8tcmlnaHQnO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIHVzZWQgZm9yIHRyYW5zaXRpb25pbmcgYmV0d2VlbiBkaWZmZXJlbnQgc3RlcHMuXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSBjYW4gYmUgZWl0aGVyIGBzdHJpY3RgLCBgc2VtaS1zdHJpY3RgIG9yIGBmcmVlYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG5hdmlnYXRpb25Nb2RlID0gJ3N0cmljdCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsbHkgc2VsZWN0ZWQgc3RlcCwgcmVwcmVzZW50ZWQgYnkgaXRzIGluZGV4XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGVmYXVsdFN0ZXBJbmRleCA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRydWUsIGlmIHRoZSBuYXZpZ2F0aW9uIGJhciBzaG91bGRuJ3QgYmUgdXNlZCBmb3IgbmF2aWdhdGluZ1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRpc2FibGVOYXZpZ2F0aW9uQmFyID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHdpemFyZCB1c2VzIGEgaG9yaXpvbnRhbCBvcmllbnRhdGlvbi5cclxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLCBpZmYgdGhlIG5hdmlnYXRpb24gYmFyIGlzIHNob3duIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoaXMgd2l6YXJkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ob3Jpem9udGFsJylcclxuICBwdWJsaWMgZ2V0IGhvcml6b250YWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAndG9wJyB8fCB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAnYm90dG9tJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIHdpemFyZCB1c2VzIGEgdmVydGljYWwgb3JpZW50YXRpb24uXHJcbiAgICogVGhlIHdpemFyZCB1c2VzIGEgdmVydGljYWwgb3JpZW50YXRpb24sIGlmZiB0aGUgbmF2aWdhdGlvbiBiYXIgaXMgc2hvd24gYXQgdGhlIGxlZnQgb3IgcmlnaHQgb2YgdGhpcyB3aXphcmRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIHZlcnRpY2FsIG9yaWVudGF0aW9uXHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52ZXJ0aWNhbCcpXHJcbiAgcHVibGljIGdldCB2ZXJ0aWNhbE9yaWVudGF0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdsZWZ0JyB8fCB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAncmlnaHQnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSBmb3IgdGhpcyB3aXphcmRcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IG5hdmlnYXRpb24oKTogTmF2aWdhdGlvbk1vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwubmF2aWdhdGlvbk1vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1vZGVsIFRoZSBtb2RlbCBmb3IgdGhpcyB3aXphcmQgY29tcG9uZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIG1vZGVsOiBXaXphcmRTdGF0ZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyB0aGUgbW9kZWwgYWZ0ZXIgY2VydGFpbiBpbnB1dCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2hhbmdlcyBUaGUgZGV0ZWN0ZWQgY2hhbmdlc1xyXG4gICAqL1xyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlcykpIHtcclxuICAgICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNbcHJvcE5hbWVdO1xyXG5cclxuICAgICAgaWYgKCFjaGFuZ2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgICBzd2l0Y2ggKHByb3BOYW1lKSB7XHJcbiAgICAgICAgICBjYXNlICdkZWZhdWx0U3RlcEluZGV4JzpcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5kZWZhdWx0U3RlcEluZGV4ID0gcGFyc2VJbnQoY2hhbmdlLmN1cnJlbnRWYWx1ZSwgMTApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2Rpc2FibGVOYXZpZ2F0aW9uQmFyJzpcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC5kaXNhYmxlTmF2aWdhdGlvbkJhciA9IGNoYW5nZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbmF2aWdhdGlvbk1vZGUnOlxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnVwZGF0ZU5hdmlnYXRpb25Nb2RlKGNoYW5nZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xyXG4gICAqL1xyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGFkZCBhIHN1YnNjcmliZXIgdG8gdGhlIHdpemFyZCBzdGVwcyBRdWVyeUxpc3QgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIERPTVxyXG4gICAgdGhpcy53aXphcmRTdGVwcy5jaGFuZ2VzLnN1YnNjcmliZShjaGFuZ2VkV2l6YXJkU3RlcHMgPT4ge1xyXG4gICAgICB0aGlzLm1vZGVsLnVwZGF0ZVdpemFyZFN0ZXBzKGNoYW5nZWRXaXphcmRTdGVwcy50b0FycmF5KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgbW9kZWxcclxuICAgIHRoaXMubW9kZWwuZGlzYWJsZU5hdmlnYXRpb25CYXIgPSB0aGlzLmRpc2FibGVOYXZpZ2F0aW9uQmFyO1xyXG4gICAgdGhpcy5tb2RlbC5kZWZhdWx0U3RlcEluZGV4ID0gdGhpcy5kZWZhdWx0U3RlcEluZGV4O1xyXG4gICAgdGhpcy5tb2RlbC51cGRhdGVXaXphcmRTdGVwcyh0aGlzLndpemFyZFN0ZXBzLnRvQXJyYXkoKSk7XHJcbiAgICB0aGlzLm1vZGVsLnVwZGF0ZU5hdmlnYXRpb25Nb2RlKHRoaXMubmF2aWdhdGlvbk1vZGUpO1xyXG5cclxuICAgIC8vIGZpbmFsbHkgcmVzZXQgdGhlIHdob2xlIHdpemFyZCBzdGF0ZVxyXG4gICAgdGhpcy5uYXZpZ2F0aW9uLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1hcmMgb24gMjAuMDUuMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgY29tcG9uZW50IGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIGNvbXBsZXRpb24vc3VjY2VzcyBzdGVwIGF0IHRoZSBlbmQgb2YgeW91ciB3aXphcmRcclxuICogQWZ0ZXIgYSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgaGFzIGJlZW4gZW50ZXJlZCwgaXQgaGFzIHRoZSBjaGFyYWN0ZXJpc3RpYyB0aGF0IHRoZSB1c2VyIGlzIGJsb2NrZWQgZnJvbVxyXG4gKiBsZWF2aW5nIGl0IGFnYWluIHRvIGEgcHJldmlvdXMgc3RlcC5cclxuICogSW4gYWRkaXRpb24gZW50ZXJpbmcgYSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgYXV0b21hdGljYWxseSBzZXRzIHRoZSBgYXctd2l6YXJkYCBhbmQgYWxsIHN0ZXBzIGluc2lkZSB0aGUgYGF3LXdpemFyZGBcclxuICogYXMgY29tcGxldGVkLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgW3N0ZXBUaXRsZV09XCJ0aXRsZSBvZiB0aGUgd2l6YXJkIHN0ZXBcIlxyXG4gKiAgICBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ25hdmlnYXRpb24gc3ltYm9sJywgZm9udEZhbWlseTogJ25hdmlnYXRpb24gc3ltYm9sIGZvbnQgZmFtaWx5JyB9XCJcclxuICogICAgKHN0ZXBFbnRlcik9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBlbnRlcmVkXCJcclxuICogICAgKHN0ZXBFeGl0KT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGV4aXRlZFwiPlxyXG4gKiAgICAuLi5cclxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJzEnIH1cIj5cclxuICogICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cclxuICogICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdy13aXphcmQtY29tcGxldGlvbi1zdGVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd3aXphcmQtY29tcGxldGlvbi1zdGVwLmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge3Byb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50KX0sXHJcbiAgICB7cHJvdmlkZTogV2l6YXJkQ29tcGxldGlvblN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50KX1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCBleHRlbmRzIFdpemFyZENvbXBsZXRpb25TdGVwIHtcclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcmAgY29tcG9uZW50IGNvbnRhaW5zIHRoZSBuYXZpZ2F0aW9uIGJhciBpbnNpZGUgYSBbW1dpemFyZENvbXBvbmVudF1dLlxyXG4gKiBUbyBjb3JyZWN0bHkgZGlzcGxheSB0aGUgbmF2aWdhdGlvbiBiYXIsIGl0J3MgcmVxdWlyZWQgdG8gc2V0IHRoZSByaWdodCBjc3MgY2xhc3NlcyBmb3IgdGhlIG5hdmlnYXRpb24gYmFyLFxyXG4gKiBvdGhlcndpc2UgaXQgd2lsbCBsb29rIGxpa2UgYSBub3JtYWwgYHVsYCBjb21wb25lbnQuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLW5hdmlnYXRpb24tYmFyPjwvYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1uYXZpZ2F0aW9uLWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd3aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50Lmhvcml6b250YWwubGVzcycsICd3aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnZlcnRpY2FsLmxlc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgd2l6YXJkIHN0ZXBzIHNob3VsZCBiZSBzaG93biBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXHJcbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgZWl0aGVyIGBsZWZ0LXRvLXJpZ2h0YCBvciBgcmlnaHQtdG8tbGVmdGBcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkaXJlY3Rpb24gPSAnbGVmdC10by1yaWdodCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgc3RhdGUgdGhlIHdpemFyZCBjdXJyZW50bHkgcmVzaWRlcyBpblxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYWxsIFtbV2l6YXJkU3RlcF1dcyBjb250YWluZWQgaW4gdGhlIHdpemFyZFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgQW4gYXJyYXkgY29udGFpbmluZyBhbGwgW1tXaXphcmRTdGVwXV1zXHJcbiAgICovXHJcbiAgZ2V0IHdpemFyZFN0ZXBzKCk6IEFycmF5PFdpemFyZFN0ZXA+IHtcclxuICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSAncmlnaHQtdG8tbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICAgIGNhc2UgJ2xlZnQtdG8tcmlnaHQnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHdpemFyZCBzdGVwcywgdGhhdCBuZWVkIHRvIGJlIGRpc3BsYWNlZCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygd2l6YXJkIHN0ZXBzIHRvIGJlIGRpc3BsYXllZFxyXG4gICAqL1xyXG4gIGdldCBudW1iZXJPZldpemFyZFN0ZXBzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBjdXJyZW50YCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGN1cnJlbnRcclxuICAgKi9cclxuICBwdWJsaWMgaXNDdXJyZW50KHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcclxuICAgIHJldHVybiB3aXphcmRTdGVwLnNlbGVjdGVkICYmICF3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBkb25lYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGRvbmVcclxuICAgKi9cclxuICBwdWJsaWMgaXNEb25lKHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcclxuICAgIHJldHVybiAod2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXdpemFyZFN0ZXAuc2VsZWN0ZWQpIHx8IHRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZGVmYXVsdGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBkZWZhdWx0XHJcbiAgICovXHJcbiAgcHVibGljIGlzRGVmYXVsdCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXdpemFyZFN0ZXAub3B0aW9uYWwgJiYgIXdpemFyZFN0ZXAuY29tcGxldGVkICYmICF3aXphcmRTdGVwLnNlbGVjdGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGVkaXRpbmdgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgZWRpdGluZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyBpc0VkaXRpbmcod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgb3B0aW9uYWxgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgb3B0aW9uYWxcclxuICAgKi9cclxuICBwdWJsaWMgaXNPcHRpb25hbCh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5vcHRpb25hbCAmJiAhd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBuYXZpZ2FibGVgIGluIHRoZSBuYXZpZ2F0aW9uIGJhci5cclxuICAgKiBBIHdpemFyZCBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8gaWY6XHJcbiAgICogLSB0aGUgc3RlcCBpcyBjdXJyZW50bHkgbm90IHNlbGVjdGVkXHJcbiAgICogLSB0aGUgbmF2aWdhdGlvbiBiYXIgaXNuJ3QgZGlzYWJsZWRcclxuICAgKiAtIHRoZSBuYXZpZ2F0aW9uIG1vZGUgYWxsb3dzIG5hdmlnYXRpb24gdG8gdGhlIHN0ZXBcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIG5hdmlnYWJsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBpc05hdmlnYWJsZSh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXdpemFyZFN0ZXAuc2VsZWN0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuZGlzYWJsZU5hdmlnYXRpb25CYXIgJiZcclxuICAgICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5pc05hdmlnYWJsZSh0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHdpemFyZFN0ZXApKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhdy13aXphcmQtc3RlcGAgY29tcG9uZW50IGlzIHVzZWQgdG8gZGVmaW5lIGEgbm9ybWFsIHN0ZXAgaW5zaWRlIGEgd2l6YXJkLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwIFtzdGVwVGl0bGVdPVwic3RlcCB0aXRsZVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnc3ltYm9sJywgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyB9XCJcclxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cclxuICogICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwXCJcclxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxyXG4gKiAgICAgICAgc3RlcCB0aXRsZVxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxyXG4gKiAgICAgICAgc3ltYm9sXHJcbiAqICAgIDwvbmctdGVtcGxhdGU+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogV2l0aCBgc3RlcFRpdGxlYCBhbmQgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0czpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXAgc3RlcFRpdGxlPVwiQWRkcmVzcyBpbmZvcm1hdGlvblwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cclxuICogICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGF3LXdpemFyZC1zdGVwPlxyXG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XHJcbiAqICAgICAgICBBZGRyZXNzIGluZm9ybWF0aW9uXHJcbiAqICAgIDwvbmctdGVtcGxhdGU+XHJcbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XHJcbiAqICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRheGlcIj48L2k+XHJcbiAqICAgIDwvbmctdGVtcGxhdGU+XHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXctd2l6YXJkLXN0ZXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd3aXphcmQtc3RlcC5jb21wb25lbnQuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRTdGVwQ29tcG9uZW50KX1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwQ29tcG9uZW50IGV4dGVuZHMgV2l6YXJkU3RlcCB7XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3RW5hYmxlQmFja0xpbmtzYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gYWxsb3cgdGhlIHVzZXIgdG8gbGVhdmUgYSBbW1dpemFyZENvbXBsZXRpb25TdGVwXV0gYWZ0ZXIgaXMgaGFzIGJlZW4gZW50ZXJlZC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIGF3RW5hYmxlQmFja0xpbmtzIChzdGVwRXhpdCk9XCJleGl0IGZ1bmN0aW9uXCI+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJGaW5hbCBzdGVwXCIgYXdFbmFibGVCYWNrTGlua3M+XHJcbiAqICAgICAuLi5cclxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd0VuYWJsZUJhY2tMaW5rc10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbmFibGVCYWNrTGlua3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgRXZlbnRFbWl0dGVyIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cclxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3RlcEV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wbGV0aW9uU3RlcCBUaGUgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGV4aXRhYmxlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGNvbXBsZXRpb25TdGVwOiBXaXphcmRDb21wbGV0aW9uU3RlcCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcclxuICAgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29tcGxldGlvblN0ZXAuY2FuRXhpdCA9IHRydWU7XHJcbiAgICB0aGlzLmNvbXBsZXRpb25TdGVwLnN0ZXBFeGl0ID0gdGhpcy5zdGVwRXhpdDtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEFuIG9mZnNldCBiZXR3ZWVuIHR3byBzdGVwcy5cclxuICogVGhpcyBvZmZzZXQgY2FuIGJlIGVpdGhlciBwb3NpdGl2ZSBvciBuZWdhdGl2ZS5cclxuICogQSBwb3NpdGl2ZSBvZmZzZXQgbWVhbnMsIHRoYXQgdGhlIG9mZnNldCBzdGVwIGlzIGFmdGVyIHRoZSBvdGhlciBzdGVwLCB3aGlsZSBhIG5lZ2F0aXZlIG9mZnNldCBtZWFucyxcclxuICogdGhhdCB0aGUgb2Zmc2V0IHN0ZXAgaXMgYWhlYWQgb2YgdGhlIG90aGVyIHN0ZXAuXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdGVwT2Zmc2V0IHtcclxuICAvKipcclxuICAgKiBUaGUgb2Zmc2V0IHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICovXHJcbiAgc3RlcE9mZnNldDogbnVtYmVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gYHZhbHVlYCBpbXBsZW1lbnRzIHRoZSBpbnRlcmZhY2UgW1tTdGVwT2Zmc2V0XV0uXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpbXBsZW1lbnRzIFtbU3RlcE9mZnNldF1dIGFuZCBmYWxzZSBvdGhlcndpc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0ZXBPZmZzZXQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBPZmZzZXQge1xyXG4gIHJldHVybiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RlcE9mZnNldCcpO1xyXG59XHJcbiIsImltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIEFuIHVuaXF1ZSBpZGVudGlmaWVyIG9mIGEgd2l6YXJkIHN0ZXBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBJZCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGlkIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXHJcbiAgICovXHJcbiAgc3RlcElkOiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBgdmFsdWVgIGltcGxlbWVudHMgdGhlIGludGVyZmFjZSBbW1N0ZXBJZF1dLlxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBJZF1dIGFuZCBmYWxzZSBvdGhlcndpc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0ZXBJZCh2YWx1ZTogYW55KTogdmFsdWUgaXMgU3RlcElkIHtcclxuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBJZCcpICYmICEodmFsdWUgaW5zdGFuY2VvZiBXaXphcmRTdGVwKTtcclxufVxyXG4iLCIvKipcclxuICogQW4gaW5kZXggb2YgYSB3aXphcmQgc3RlcC5cclxuICogVGhpcyBpbmRleCBpcyB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgaW5zaWRlIHRoZSB3aXphcmQuXHJcbiAqIFRoZSBpbmRleCBpcyBhbHdheXMgemVybyBiYXNlZCwgaS5lLiB0aGUgc3RlcCB3aXRoIGluZGV4IDAgaXMgdGhlIGZpcnN0IHN0ZXAgb2YgdGhlIHdpemFyZFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RlcEluZGV4IHtcclxuICAvKipcclxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKi9cclxuICBzdGVwSW5kZXg6IG51bWJlclxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcEluZGV4XV0uXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpbXBsZW1lbnRzIFtbU3RlcEluZGV4XV0gYW5kIGZhbHNlIG90aGVyd2lzZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RlcEluZGV4KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdGVwSW5kZXgge1xyXG4gIHJldHVybiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RlcEluZGV4Jyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbWFyYyBvbiAwOS4wMS4xNy5cclxuICovXHJcblxyXG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtpc1N0ZXBPZmZzZXQsIFN0ZXBPZmZzZXR9IGZyb20gJy4uL3V0aWwvc3RlcC1vZmZzZXQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtpc1N0ZXBJZCwgU3RlcElkfSBmcm9tICcuLi91dGlsL3N0ZXAtaWQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtpc1N0ZXBJbmRleCwgU3RlcEluZGV4fSBmcm9tICcuLi91dGlsL3N0ZXAtaW5kZXguaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYGF3R29Ub1N0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byBhIGdpdmVuIHN0ZXAuXHJcbiAqIFRoaXMgc3RlcCBjYW4gYmUgZGVmaW5lZCBpbiBvbmUgb2YgbXVsdGlwbGUgZm9ybWF0c1xyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIFdpdGggYWJzb2x1dGUgc3RlcCBpbmRleDpcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcEluZGV4OiBhYnNvbHV0ZSBzdGVwIGluZGV4IH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIHVuaXF1ZSBzdGVwIGlkOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwSWQ6ICdzdGVwIGlkIG9mIGRlc3RpbmF0aW9uIHN0ZXAnIH1cIiAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGEgd2l6YXJkIHN0ZXAgb2JqZWN0OlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwid2l6YXJkIHN0ZXAgb2JqZWN0XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBhbiBvZmZzZXQgdG8gdGhlIGRlZmluaW5nIHN0ZXA6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBPZmZzZXQ6IG9mZnNldCB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd0dvVG9TdGVwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdvVG9TdGVwRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcHJlRmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBhZnRlciB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcG9zdEZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udmVuaWVuY2UgbmFtZSBmb3IgYHByZUZpbmFsaXplYFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICB0aGlzLnByZUZpbmFsaXplID0gZW1pdHRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGZpbmFsaXplKCk6IEV2ZW50RW1pdHRlcjx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0byB3aGljaCB0aGUgd2l6YXJkIHNob3VsZCBuYXZpZ2F0ZSwgYWZ0ZXIgdGhlIGNvbXBvbmVudCwgaGF2aW5nIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIGFjdGl2YXRlZC5cclxuICAgKiBUaGlzIGRlc3RpbmF0aW9uIHN0ZXAgY2FuIGJlIGdpdmVuIGVpdGhlciBhcyBhIFtbV2l6YXJkU3RlcF1dIGNvbnRhaW5pbmcgdGhlIHN0ZXAgZGlyZWN0bHksXHJcbiAgICogYSBbW1N0ZXBPZmZzZXRdXSBiZXR3ZWVuIHRoZSBjdXJyZW50IHN0ZXAgYW5kIHRoZSBgd2l6YXJkU3RlcGAsIGluIHdoaWNoIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIHVzZWQsXHJcbiAgICogb3IgYSBzdGVwIGluZGV4IGFzIGEgbnVtYmVyIG9yIHN0cmluZ1xyXG4gICAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnYXdHb1RvU3RlcCcpXHJcbiAgcHVibGljIHRhcmdldFN0ZXA6IFdpemFyZFN0ZXAgfCBTdGVwT2Zmc2V0IHwgU3RlcEluZGV4IHwgU3RlcElkO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGVcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIGNvbnRhaW5zIHRoaXMgW1tHb1RvU3RlcERpcmVjdGl2ZV1dXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUsIEBPcHRpb25hbCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgZGVzdGluYXRpb24gc3RlcCBvZiB0aGlzIGRpcmVjdGl2ZSBhcyBhbiBhYnNvbHV0ZSBzdGVwIGluZGV4IGluc2lkZSB0aGUgd2l6YXJkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcclxuICAgKiBAdGhyb3dzIElmIGB0YXJnZXRTdGVwYCBpcyBvZiBhbiB1bmtub3duIHR5cGUgYW4gYEVycm9yYCBpcyB0aHJvd25cclxuICAgKi9cclxuICBnZXQgZGVzdGluYXRpb25TdGVwKCk6IG51bWJlciB7XHJcbiAgICBsZXQgZGVzdGluYXRpb25TdGVwOiBudW1iZXI7XHJcblxyXG4gICAgaWYgKGlzU3RlcEluZGV4KHRoaXMudGFyZ2V0U3RlcCkpIHtcclxuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy50YXJnZXRTdGVwLnN0ZXBJbmRleDtcclxuICAgIH0gZWxzZSBpZiAoaXNTdGVwSWQodGhpcy50YXJnZXRTdGVwKSkge1xyXG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwV2l0aElkKHRoaXMudGFyZ2V0U3RlcC5zdGVwSWQpO1xyXG4gICAgfSBlbHNlIGlmIChpc1N0ZXBPZmZzZXQodGhpcy50YXJnZXRTdGVwKSAmJiB0aGlzLndpemFyZFN0ZXAgIT09IG51bGwpIHtcclxuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLndpemFyZFN0ZXApICsgdGhpcy50YXJnZXRTdGVwLnN0ZXBPZmZzZXQ7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0U3RlcCBpbnN0YW5jZW9mIFdpemFyZFN0ZXApIHtcclxuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLnRhcmdldFN0ZXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnB1dCAndGFyZ2V0U3RlcCcgaXMgbmVpdGhlciBhIFdpemFyZFN0ZXAsIFN0ZXBPZmZzZXQsIFN0ZXBJbmRleCBvciBTdGVwSWRgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVzdGluYXRpb25TdGVwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICogQWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRoZSB3aXphcmQgd2lsbCB0cnkgdG8gdHJhbnNpdGlvbiB0byB0aGUgYGRlc3RpbmF0aW9uU3RlcGBcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuZ29Ub1N0ZXAodGhpcy5kZXN0aW5hdGlvblN0ZXAsIHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd05leHRTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgc3RlcC5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gYXdOZXh0U3RlcCAoZmluYWxpemUpPVwiZmluYWxpemUgbWV0aG9kXCI+Li4uPC9idXR0b24+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3TmV4dFN0ZXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV4dFN0ZXBEaXJlY3RpdmUge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwcmVGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwb3N0RmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb252ZW5pZW5jZSBuYW1lIGZvciBgcHJlRmluYWxpemVgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgc3RhdGUgb2YgdGhlIHdpemFyZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXHJcbiAgICogQWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRoZSB3aXphcmQgd2lsbCB0cnkgdG8gdHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGVwXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5nb1RvTmV4dFN0ZXAodGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd09wdGlvbmFsU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhbiBvcHRpb25hbCBgd2l6YXJkLXN0ZXBgLlxyXG4gKiBBbiBvcHRpb25hbCB3aXphcmQgc3RlcCBpcyBhIFtbV2l6YXJkU3RlcF1dIHRoYXQgZG9lc24ndCBuZWVkIHRvIGJlIGNvbXBsZXRlZCB0byB0cmFuc2l0aW9uIHRvIGxhdGVyIHdpemFyZCBzdGVwcy5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxhdy13aXphcmQtc3RlcCBhd09wdGlvbmFsU3RlcD5cclxuICogICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXAgc3RlcFRpdGxlPVwiU2Vjb25kIHN0ZXBcIiBhd09wdGlvbmFsU3RlcD5cclxuICogICAgIC4uLlxyXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd09wdGlvbmFsU3RlcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25hbFN0ZXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIGNvbnRhaW5zIHRoaXMgW1tPcHRpb25hbFN0ZXBEaXJlY3RpdmVdXVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSB3aXphcmRTdGVwOiBXaXphcmRTdGVwKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xyXG4gICAqL1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy53aXphcmRTdGVwLm9wdGlvbmFsID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd1ByZXZpb3VzU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBzdGVwLlxyXG4gKiBDb21wYXJlZCB0byB0aGUgW1tOZXh0U3RlcERpcmVjdGl2ZV1dIGl0J3MgaW1wb3J0YW50IHRvIG5vdGUsIHRoYXQgdGhpcyBkaXJlY3RpdmUgZG9lc24ndCBjb250YWluIGEgYGZpbmFsaXplYCBvdXRwdXQgbWV0aG9kLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGJ1dHRvbiBhd1ByZXZpb3VzU3RlcD4uLi48L2J1dHRvbj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdQcmV2aW91c1N0ZXBdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJldmlvdXNTdGVwRGlyZWN0aXZlIHtcclxuICAvKipcclxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGJlZm9yZSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcHJlRmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBhZnRlciB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBkdXJpbmcgYSB0cmFuc2l0aW9uIHRocm91Z2ggYSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcG9zdEZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbWl0dGVyIFRoZSBbW0V2ZW50RW1pdHRlcl1dIHRvIGJlIHNldFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzZXQgZmluYWxpemUoZW1pdHRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+KSB7XHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xyXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnZlbmllbmNlIGZpZWxkIGZvciBgcHJlRmluYWxpemVgXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJlRmluYWxpemU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgd2l6YXJkXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0ZW5lciBtZXRob2QgZm9yIGBjbGlja2AgZXZlbnRzIG9uIHRoZSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cclxuICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhlIHdpemFyZCB3aWxsIHRyeSB0byB0cmFuc2l0aW9uIHRvIHRoZSBwcmV2aW91cyBzdGVwXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5nb1RvUHJldmlvdXNTdGVwKHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICogVGhlIGBhd1Jlc2V0V2l6YXJkYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gcmVzZXQgdGhlIHdpemFyZCB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cclxuICogVGhpcyBkaXJlY3RpdmUgYWNjZXB0cyBhbiBvdXRwdXQsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgc29tZSBjdXN0b20gY2xlYW51cCB3b3JrIGR1cmluZyB0aGUgcmVzZXQgcHJvY2Vzcy5cclxuICpcclxuICogIyMjIFN5bnRheFxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxidXR0b24gYXdSZXNldFdpemFyZCAoZmluYWxpemUpPVwiY3VzdG9tIHJlc2V0IHRhc2tcIj4uLi48L2J1dHRvbj5cclxuICogYGBgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXdSZXNldFdpemFyZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFdpemFyZERpcmVjdGl2ZSB7XHJcbiAgLyoqXHJcbiAgICogQW4gW1tFdmVudEVtaXR0ZXJdXSBjb250YWluaW5nIHNvbWUgdGFza3MgdG8gYmUgZG9uZSwgZGlyZWN0bHkgYmVmb3JlIHRoZSB3aXphcmQgaXMgYmVpbmcgcmVzZXRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcclxuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgd2l6YXJkIHN0YXRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIHdpemFyZFxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIGRvIHNvbWUgb3B0aW9uYWwgY2xlYW51cCB3b3JrXHJcbiAgICB0aGlzLmZpbmFsaXplLmVtaXQoKTtcclxuICAgIC8vIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGVcclxuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3QsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdTZWxlY3RlZFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBvbiBhIFtbV2l6YXJkU3RlcF1dIHRvIHNldCBpdCBhcyBzZWxlY3RlZCBhZnRlciB0aGUgd2l6YXJkIGluaXRpYWxpc2F0aW9uIG9yIGEgcmVzZXQuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8YXctd2l6YXJkLXN0ZXAgc3RlcFRpdGxlPVwiU3RlcCB0aXRsZVwiIGF3U2VsZWN0ZWRTdGVwPlxyXG4gKiAgICAgLi4uXHJcbiAqIDwvYXctd2l6YXJkLXN0ZXA+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2F3U2VsZWN0ZWRTdGVwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIHNlbGVjdGVkIGJ5IGRlZmF1bHRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xyXG4gICAqL1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy53aXphcmRTdGVwLmRlZmF1bHRTZWxlY3RlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlyZWN0aXZlLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdXaXphcmRDb21wbGV0aW9uU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIGNvbXBsZXRpb24vc3VjY2VzcyBzdGVwIGF0IHRoZSBlbmQgb2YgeW91ciB3aXphcmRcclxuICogQWZ0ZXIgYSBbW1dpemFyZENvbXBsZXRpb25TdGVwXV0gaGFzIGJlZW4gZW50ZXJlZCwgaXQgaGFzIHRoZSBjaGFyYWN0ZXJpc3RpYyB0aGF0IHRoZSB1c2VyIGlzIGJsb2NrZWQgZnJvbVxyXG4gKiBsZWF2aW5nIGl0IGFnYWluIHRvIGEgcHJldmlvdXMgc3RlcC5cclxuICogSW4gYWRkaXRpb24gZW50ZXJpbmcgYSBbW1dpemFyZENvbXBsZXRpb25TdGVwXV0gYXV0b21hdGljYWxseSBzZXRzIHRoZSBgd2l6YXJkYCwgYW5kIGFsbCBzdGVwcyBpbnNpZGUgdGhlIGB3aXphcmRgLFxyXG4gKiBhcyBjb21wbGV0ZWQuXHJcbiAqXHJcbiAqICMjIyBTeW50YXhcclxuICpcclxuICogYGBgaHRtbFxyXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgW3N0ZXBUaXRsZV09XCJ0aXRsZSBvZiB0aGUgd2l6YXJkIHN0ZXBcIlxyXG4gKiAgICBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ25hdmlnYXRpb24gc3ltYm9sJywgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyB9XCJcclxuICogICAgKHN0ZXBFbnRlcik9XCJldmVudCBlbWl0dGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSB3aXphcmQgc3RlcCBpcyBlbnRlcmVkXCJcclxuICogICAgKHN0ZXBFeGl0KT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGV4aXRlZFwiPlxyXG4gKiAgICAuLi5cclxuICogPC9kaXY+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJzEnIH1cIj5cclxuICogICAgLi4uXHJcbiAqIDwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBhIG5hdmlnYXRpb24gc3ltYm9sIGZyb20gdGhlIGBmb250LWF3ZXNvbWVgIGZvbnQ6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cclxuICogICAgLi4uXHJcbiAqIDwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd1dpemFyZENvbXBsZXRpb25TdGVwXScsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IFdpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlKSB9LFxyXG4gICAgeyBwcm92aWRlOiBXaXphcmRDb21wbGV0aW9uU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUpIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSBleHRlbmRzIFdpemFyZENvbXBsZXRpb25TdGVwIHtcclxufVxyXG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBgYXdXaXphcmRTdGVwYCBkaXJlY3RpdmUgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgbm9ybWFsIHN0ZXAgaW5zaWRlIGEgd2l6YXJkLlxyXG4gKlxyXG4gKiAjIyMgU3ludGF4XHJcbiAqXHJcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGRpdiBhd1dpemFyZFN0ZXAgW3N0ZXBUaXRsZV09XCJzdGVwIHRpdGxlXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICdzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxyXG4gKiAgICBbY2FuRXhpdF09XCJkZWNpZGluZyBmdW5jdGlvblwiIChzdGVwRW50ZXIpPVwiZW50ZXIgZnVuY3Rpb25cIiAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxyXG4gKiAgICAuLi5cclxuICogPC9kaXY+XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGRpdiBhd1dpemFyZFN0ZXAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cclxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxyXG4gKiAgICAgICAgc3RlcCB0aXRsZVxyXG4gKiAgICA8L25nLXRlbXBsYXRlPlxyXG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxyXG4gKiAgICAgICAgc3ltYm9sXHJcbiAqICAgIDwvbmctdGVtcGxhdGU+XHJcbiAqICAgIC4uLlxyXG4gKiA8L2Rpdj5cclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGRpdiBhd1dpemFyZFN0ZXAgc3RlcFRpdGxlPVwiQWRkcmVzcyBpbmZvcm1hdGlvblwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cclxuICogICAgLi4uXHJcbiAqIDwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxyXG4gKlxyXG4gKiBgYGBodG1sXHJcbiAqIDxkaXYgYXdXaXphcmRTdGVwPlxyXG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XHJcbiAqICAgICAgICBBZGRyZXNzIGluZm9ybWF0aW9uXHJcbiAqICAgIDwvbmctdGVtcGxhdGU+XHJcbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBTeW1ib2w+XHJcbiAqICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRheGlcIj48L2k+XHJcbiAqICAgIDwvbmctdGVtcGxhdGU+XHJcbiAqIDwvZGl2PlxyXG4gKiBgYGBcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thd1dpemFyZFN0ZXBdJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogV2l6YXJkU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkU3RlcERpcmVjdGl2ZSkgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBEaXJlY3RpdmUgZXh0ZW5kcyBXaXphcmRTdGVwIHtcclxufVxyXG4iLCJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1dpemFyZENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1dpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy93aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtXaXphcmRTdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7TmV4dFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZXh0LXN0ZXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtQcmV2aW91c1N0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7T3B0aW9uYWxTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvb3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0dvVG9TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1dpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC1zeW1ib2wuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0VuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2VuYWJsZS1iYWNrLWxpbmtzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7V2l6YXJkU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtY29tcGxldGlvbi1zdGVwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7U2VsZWN0ZWRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1Jlc2V0V2l6YXJkRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVzZXQtd2l6YXJkLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogVGhlIG1vZHVsZSBkZWZpbmluZyBhbGwgdGhlIGNvbnRlbnQgaW5zaWRlIGBhbmd1bGFyLWFyY2h3aXphcmRgXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFdpemFyZENvbXBvbmVudCxcclxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXHJcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQsXHJcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcclxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxyXG4gICAgUHJldmlvdXNTdGVwRGlyZWN0aXZlLFxyXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxyXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSxcclxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSxcclxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcclxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFdpemFyZENvbXBvbmVudCxcclxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXHJcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQsXHJcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcclxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxyXG4gICAgUHJldmlvdXNTdGVwRGlyZWN0aXZlLFxyXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxyXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZSxcclxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcclxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXHJcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSxcclxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcclxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJjaHdpemFyZE1vZHVsZSB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7bmdNb2R1bGU6IEFyY2h3aXphcmRNb2R1bGUsIHByb3ZpZGVyczogW119O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7O0lBU0Usa0NBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtLQUFLOztnQkFUdEQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwREFBMEQ7aUJBQ3JFOzs7Z0JBbkJrQixXQUFXOztJQTJCOUIsK0JBQUM7Q0FWRDs7Ozs7O0FDcEJBOzs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7O0lBU0UsbUNBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtLQUFLOztnQkFUdEQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0REFBNEQ7aUJBQ3ZFOzs7Z0JBaEJrQixXQUFXOztJQXdCOUIsZ0NBQUM7Q0FWRDs7Ozs7O0FDYkE7Ozs7OztBQVVBOzs7Ozs7SUFBQTs7Ozs7UUFrQ1MscUJBQWdCLEdBQXFCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzs7O1FBS3BELGNBQVMsR0FBRyxLQUFLLENBQUM7Ozs7UUFLbEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQUtqQixvQkFBZSxHQUFHLEtBQUssQ0FBQzs7OztRQUt4QixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBTWpC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
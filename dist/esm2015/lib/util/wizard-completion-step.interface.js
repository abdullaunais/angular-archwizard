/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { WizardStep } from './wizard-step.interface';
import { EventEmitter } from '@angular/core';
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
export class WizardCompletionStep extends WizardStep {
    /**
     * Basic functionality every wizard completion step needs to provide
     *
     * @author Marc Arndt
     */
    constructor() {
        super(...arguments);
        /**
         * @inheritDoc
         */
        this.stepExit = new EventEmitter();
        /**
         * @inheritDoc
         */
        this.canExit = false;
    }
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    enter(direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    }
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    exit(direction) {
        // set this completion step as incomplete
        this.completed = false;
        this.stepExit.emit(direction);
    }
}
if (false) {
    /**
     * @inheritDoc
     * @type {?}
     */
    WizardCompletionStep.prototype.stepExit;
    /**
     * @inheritDoc
     * @type {?}
     */
    WizardCompletionStep.prototype.canExit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFPM0MsTUFBTSwyQkFBcUMsU0FBUSxVQUFVO0lBTDdEOzs7O09BSUc7SUFDSDs7UUFDRTs7V0FFRztRQUNJLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUV0RDs7V0FFRztRQUNJLFlBQU8sR0FBd0QsS0FBSyxDQUFDO0lBa0I5RSxDQUFDOzs7Ozs7SUFiUSxLQUFLLENBQUMsU0FBMEI7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBS00sSUFBSSxDQUFDLFNBQTBCO1FBQ3BDLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7Ozs7OztJQXZCQyx3Q0FBc0Q7Ozs7O0lBS3RELHVDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB3aXphcmQgY29tcGxldGlvbiBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcclxuICpcclxuICogQGF1dGhvciBNYXJjIEFybmR0XHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2l6YXJkQ29tcGxldGlvblN0ZXAgZXh0ZW5kcyBXaXphcmRTdGVwIHtcclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGVwRXhpdCA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjYW5FeGl0OiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RlcEVudGVyLmVtaXQoZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcHVibGljIGV4aXQoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIC8vIHNldCB0aGlzIGNvbXBsZXRpb24gc3RlcCBhcyBpbmNvbXBsZXRlXHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zdGVwRXhpdC5lbWl0KGRpcmVjdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { WizardStep } from './wizard-step.interface';
import { EventEmitter } from '@angular/core';
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
 */
WizardCompletionStep = /** @class */ (function (_super) {
    tslib_1.__extends(WizardCompletionStep, _super);
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
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
export { WizardCompletionStep };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvIiwic291cmNlcyI6WyJsaWIvdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBTzNDOzs7Ozs7O0lBQW1ELGdEQUFVO0lBTDdEOzs7O09BSUc7SUFDSDtRQUFBLHFFQTJCQztRQTFCQzs7V0FFRztRQUNJLGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUV0RDs7V0FFRztRQUNJLGFBQU8sR0FBd0QsS0FBSyxDQUFDOztJQWtCOUUsQ0FBQztJQWhCQzs7T0FFRzs7Ozs7O0lBQ0ksb0NBQUs7Ozs7O0lBQVosVUFBYSxTQUEwQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLG1DQUFJOzs7OztJQUFYLFVBQVksU0FBMEI7UUFDcEMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUEzQkQsQ0FBbUQsVUFBVSxHQTJCNUQ7Ozs7Ozs7Ozs7Ozs7SUF2QkMsd0NBQXNEOzs7OztJQUt0RCx1Q0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4vbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEJhc2ljIGZ1bmN0aW9uYWxpdHkgZXZlcnkgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCBuZWVkcyB0byBwcm92aWRlXHJcbiAqXHJcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwIGV4dGVuZHMgV2l6YXJkU3RlcCB7XHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwdWJsaWMgc3RlcEV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmluZ0RpcmVjdGlvbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGluaGVyaXREb2NcclxuICAgKi9cclxuICBwdWJsaWMgY2FuRXhpdDogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbmhlcml0RG9jXHJcbiAgICovXHJcbiAgcHVibGljIGVudGVyKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICB0aGlzLnN0ZXBFbnRlci5lbWl0KGRpcmVjdGlvbik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaW5oZXJpdERvY1xyXG4gICAqL1xyXG4gIHB1YmxpYyBleGl0KGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAvLyBzZXQgdGhpcyBjb21wbGV0aW9uIHN0ZXAgYXMgaW5jb21wbGV0ZVxyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc3RlcEV4aXQuZW1pdChkaXJlY3Rpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=
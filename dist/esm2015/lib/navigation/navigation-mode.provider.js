/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { FreeNavigationMode } from './free-navigation-mode';
import { SemiStrictNavigationMode } from './semi-strict-navigation-mode';
import { StrictNavigationMode } from './strict-navigation-mode';
/**
 * A factory method used to create [[NavigationMode]] instances
 *
 * @param {?} navigationMode The name of the to be used navigation mode
 * @param {?} wizardState The wizard state of the wizard
 * @return {?} The created [[NavigationMode]]
 */
export function navigationModeFactory(navigationMode, wizardState) {
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
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tb2RlLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hcmNod2l6YXJkLyIsInNvdXJjZXMiOlsibGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7QUFZOUQsTUFBTSxnQ0FBZ0MsY0FBc0IsRUFBRSxXQUF3QjtJQUNwRixRQUFRLGNBQWMsRUFBRTtRQUN0QixLQUFLLE1BQU07WUFDVCxPQUFPLElBQUksa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsS0FBSyxhQUFhO1lBQ2hCLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRCxLQUFLLFFBQVEsQ0FBQztRQUNkO1lBQ0UsT0FBTyxJQUFJLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2hEO0FBQ0gsQ0FBQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZyZWVOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9mcmVlLW5hdmlnYXRpb24tbW9kZSc7XHJcbmltcG9ydCB7U2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlfSBmcm9tICcuL3NlbWktc3RyaWN0LW5hdmlnYXRpb24tbW9kZSc7XHJcbmltcG9ydCB7U3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc3RyaWN0LW5hdmlnYXRpb24tbW9kZSc7XHJcblxyXG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XHJcblxyXG4vKipcclxuICogQSBmYWN0b3J5IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBbW05hdmlnYXRpb25Nb2RlXV0gaW5zdGFuY2VzXHJcbiAqXHJcbiAqIEBwYXJhbSBuYXZpZ2F0aW9uTW9kZSBUaGUgbmFtZSBvZiB0aGUgdG8gYmUgdXNlZCBuYXZpZ2F0aW9uIG1vZGVcclxuICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGUgb2YgdGhlIHdpemFyZFxyXG4gKiBAcmV0dXJucyBUaGUgY3JlYXRlZCBbW05hdmlnYXRpb25Nb2RlXV1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uTW9kZUZhY3RvcnkobmF2aWdhdGlvbk1vZGU6IHN0cmluZywgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKTogTmF2aWdhdGlvbk1vZGUge1xyXG4gIHN3aXRjaCAobmF2aWdhdGlvbk1vZGUpIHtcclxuICAgIGNhc2UgJ2ZyZWUnOlxyXG4gICAgICByZXR1cm4gbmV3IEZyZWVOYXZpZ2F0aW9uTW9kZSh3aXphcmRTdGF0ZSk7XHJcbiAgICBjYXNlICdzZW1pLXN0cmljdCc6XHJcbiAgICAgIHJldHVybiBuZXcgU2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlKHdpemFyZFN0YXRlKTtcclxuICAgIGNhc2UgJ3N0cmljdCc6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gbmV3IFN0cmljdE5hdmlnYXRpb25Nb2RlKHdpemFyZFN0YXRlKTtcclxuICB9XHJcbn07XHJcbiJdfQ==
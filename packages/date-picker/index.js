var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var DatePickerOriginal = /** @class */ (function (_super) {
    __extends(DatePickerOriginal, _super);
    function DatePickerOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @hidden
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5,
        };
        return _this;
    }
    DatePickerOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    DatePickerOriginal.pluginName = "DatePicker";
    DatePickerOriginal.plugin = "cordova-plugin-datepicker";
    DatePickerOriginal.pluginRef = "datePicker";
    DatePickerOriginal.repo = "https://github.com/VitaliiBlagodir/cordova-plugin-datepicker";
    DatePickerOriginal.platforms = ["Android", "iOS", "Windows"];
    return DatePickerOriginal;
}(IonicNativePlugin));
var DatePicker = new DatePickerOriginal();
export { DatePicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RhdGUtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTBKeEMsOEJBQWlCOzs7UUFDL0M7O1dBRUc7UUFDSCxvQkFBYyxHQUFHO1lBQ2YsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixlQUFlLEVBQUUsQ0FBQztZQUNsQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHlCQUF5QixFQUFFLENBQUM7WUFDNUIsMEJBQTBCLEVBQUUsQ0FBQztTQUM5QixDQUFDOzs7SUFRRix5QkFBSSxhQUFDLE9BQTBCOzs7Ozs7cUJBN0tqQztFQTJKZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRlUGlja2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbW9kZSBvZiB0aGUgZGF0ZSBwaWNrZXJcbiAgICogVmFsdWVzOiBkYXRlIHwgdGltZSB8IGRhdGV0aW1lXG4gICAqL1xuICBtb2RlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlbGVjdGVkIGRhdGVcbiAgICovXG4gIGRhdGU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gZGF0ZVxuICAgKiBEZWZhdWx0OiBlbXB0eSBTdHJpbmdcbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIGRhdGVcbiAgICogRGVmYXVsdDogZW1wdHkgU3RyaW5nXG4gICAqL1xuICBtYXhEYXRlPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogTGFiZWwgZm9yIHRoZSBkaWFsb2cgdGl0bGUuIElmIGVtcHR5LCB1c2VzIGFuZHJvaWQgZGVmYXVsdCAoU2V0IGRhdGUvU2V0IHRpbWUpLlxuICAgKiBEZWZhdWx0OiBlbXB0eSBTdHJpbmdcbiAgICovXG4gIHRpdGxlVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTGFiZWwgb2YgQlVUVE9OX1BPU0lUSVZFIChkb25lIGJ1dHRvbikgb24gQW5kcm9pZFxuICAgKi9cbiAgb2tUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBvZiBCVVRUT05fTkVHQVRJVkUgKGNhbmNlbCBidXR0b24pLiBJZiBlbXB0eSwgdXNlcyBhbmRyb2lkLlIuc3RyaW5nLmNhbmNlbC5cbiAgICovXG4gIGNhbmNlbFRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIHRvZGF5IGJ1dHRvbi4gSWYgZW1wdHksIGRvZXNuJ3Qgc2hvdyB0aGUgb3B0aW9uIHRvIHNlbGVjdCBjdXJyZW50IGRhdGUuXG4gICAqL1xuICB0b2RheVRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIG5vdyBidXR0b24uIElmIGVtcHR5LCBkb2Vzbid0IHNob3cgdGhlIG9wdGlvbiB0byBzZWxlY3QgY3VycmVudCB0aW1lLlxuICAgKi9cbiAgbm93VGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogU2hvd3MgdGltZSBkaWFsb2cgaW4gMjQgaG91cnMgZm9ybWF0LlxuICAgKi9cbiAgaXMyNEhvdXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIEFuZHJvaWQgdGhlbWUgZm9yIHRoZSBwaWNrZXIuIFlvdSBjYW4gdXNlIHRoZSBEYXRlUGlja2VyLkFORFJPSURfVEhFTUVTIHByb3BlcnR5LlxuICAgKiBWYWx1ZXM6IDE6IFRIRU1FX1RSQURJVElPTkFMIHwgMjogVEhFTUVfSE9MT19EQVJLIHwgMzogVEhFTUVfSE9MT19MSUdIVCB8IDQ6IFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUksgfCA1OiBUSEVNRV9ERVZJQ0VfREVGQVVMVF9MSUdIVFxuICAgKi9cbiAgYW5kcm9pZFRoZW1lPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTaG93cyBvciBoaWRlIGRhdGVzIGVhcmxpZXIgdGhlbiBzZWxlY3RlZCBkYXRlLlxuICAgKi9cbiAgYWxsb3dPbGREYXRlcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3dzIG9yIGhpZGUgZGF0ZXMgYWZ0ZXIgc2VsZWN0ZWQgZGF0ZS5cbiAgICovXG4gIGFsbG93RnV0dXJlRGF0ZXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBvZiBkb25lIGJ1dHRvbi5cbiAgICovXG4gIGRvbmVCdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogSGV4IGNvbG9yIG9mIGRvbmUgYnV0dG9uLlxuICAgKi9cbiAgZG9uZUJ1dHRvbkNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBvZiBjYW5jZWwgYnV0dG9uLlxuICAgKi9cbiAgY2FuY2VsQnV0dG9uTGFiZWw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhleCBjb2xvciBvZiBjYW5jZWwgYnV0dG9uLlxuICAgKi9cbiAgY2FuY2VsQnV0dG9uQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFggcG9zaXRpb24gb2YgZGF0ZSBwaWNrZXIuIFRoZSBwb3NpdGlvbiBpcyBhYnNvbHV0ZSB0byB0aGUgcm9vdCB2aWV3IG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICovXG4gIHg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFkgcG9zaXRpb24gb2YgZGF0ZSBwaWNrZXIuIFRoZSBwb3NpdGlvbiBpcyBhYnNvbHV0ZSB0byB0aGUgcm9vdCB2aWV3IG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICovXG4gIHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEludGVydmFsIGJldHdlZW4gb3B0aW9ucyBpbiB0aGUgbWludXRlIHNlY3Rpb24gb2YgdGhlIGRhdGUgcGlja2VyLlxuICAgKi9cbiAgbWludXRlSW50ZXJ2YWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEZvcmNlIHRoZSBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBlbnVtLiBUaGUgdmFsdWUgYW55IHdpbGwgcmV2ZXJ0IHRvIGRlZmF1bHQgVUlQb3BvdmVyQXJyb3dEaXJlY3Rpb25BbnkgYW5kIGxldCB0aGUgYXBwIGNob29zZSB0aGUgcHJvcGVyIGRpcmVjdGlvbiBpdHNlbGYuXG4gICAqL1xuICBwb3BvdmVyQXJyb3dEaXJlY3Rpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZvcmNlIGxvY2FsZSBmb3IgZGF0ZVBpY2tlci5cbiAgICovXG4gIGxvY2FsZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBEYXRlIFBpY2tlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgRGF0ZVBpY2tlciBwbHVnaW4gYWxsb3dzIHRoZSB1c2VyIHRvIGZldGNoIGRhdGUgb3IgdGltZSB1c2luZyBuYXRpdmUgZGlhbG9ncy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RhdGUtcGlja2VyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlUGlja2VyOiBEYXRlUGlja2VyKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuZGF0ZVBpY2tlci5zaG93KHtcbiAqICAgZGF0ZTogbmV3IERhdGUoKSxcbiAqICAgbW9kZTogJ2RhdGUnLFxuICogICBhbmRyb2lkVGhlbWU6IHRoaXMuZGF0ZVBpY2tlci5BTkRST0lEX1RIRU1FUy5USEVNRV9IT0xPX0RBUktcbiAqIH0pLnRoZW4oXG4gKiAgIGRhdGUgPT4gY29uc29sZS5sb2coJ0dvdCBkYXRlOiAnLCBkYXRlKSxcbiAqICAgZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBvY2N1cnJlZCB3aGlsZSBnZXR0aW5nIGRhdGU6ICcsIGVycilcbiAqICk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBEYXRlUGlja2VyT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RhdGVQaWNrZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kYXRlcGlja2VyJyxcbiAgcGx1Z2luUmVmOiAnZGF0ZVBpY2tlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVml0YWxpaUJsYWdvZGlyL2NvcmRvdmEtcGx1Z2luLWRhdGVwaWNrZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQU5EUk9JRF9USEVNRVMgPSB7XG4gICAgVEhFTUVfVFJBRElUSU9OQUw6IDEsXG4gICAgVEhFTUVfSE9MT19EQVJLOiAyLFxuICAgIFRIRU1FX0hPTE9fTElHSFQ6IDMsXG4gICAgVEhFTUVfREVWSUNFX0RFRkFVTFRfREFSSzogNCxcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9MSUdIVDogNSxcbiAgfTtcblxuICAvKipcbiAgICogU2hvd3MgdGhlIGRhdGUgYW5kL29yIHRpbWUgcGlja2VyIGRpYWxvZyhzKVxuICAgKiBAcGFyYW0ge0RhdGVQaWNrZXJPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHRoZSBkYXRlIHBpY2tlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8RGF0ZT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcGlja2VkIGRhdGUgYW5kL29yIHRpbWUsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdyhvcHRpb25zOiBEYXRlUGlja2VyT3B0aW9ucyk6IFByb21pc2U8RGF0ZT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19
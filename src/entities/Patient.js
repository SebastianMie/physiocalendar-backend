"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Appointment_1 = require("./Appointment");
var AppointmentSeries_1 = require("./AppointmentSeries");
var Cancellation_1 = require("./Cancellation");
var Patient = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _firstName_decorators;
    var _firstName_initializers = [];
    var _firstName_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _activeSince_decorators;
    var _activeSince_initializers = [];
    var _activeSince_extraInitializers = [];
    var _activeUntil_decorators;
    var _activeUntil_initializers = [];
    var _activeUntil_extraInitializers = [];
    var _isBWO_decorators;
    var _isBWO_initializers = [];
    var _isBWO_extraInitializers = [];
    var _appointments_decorators;
    var _appointments_initializers = [];
    var _appointments_extraInitializers = [];
    var _appointmentSeries_decorators;
    var _appointmentSeries_initializers = [];
    var _appointmentSeries_extraInitializers = [];
    var _cancellations_decorators;
    var _cancellations_initializers = [];
    var _cancellations_extraInitializers = [];
    var Patient = _classThis = /** @class */ (function () {
        function Patient_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.firstName = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _firstName_initializers, void 0));
            this.name = (__runInitializers(this, _firstName_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.activeSince = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _activeSince_initializers, void 0));
            this.activeUntil = (__runInitializers(this, _activeSince_extraInitializers), __runInitializers(this, _activeUntil_initializers, void 0));
            this.isBWO = (__runInitializers(this, _activeUntil_extraInitializers), __runInitializers(this, _isBWO_initializers, void 0));
            this.appointments = (__runInitializers(this, _isBWO_extraInitializers), __runInitializers(this, _appointments_initializers, void 0));
            this.appointmentSeries = (__runInitializers(this, _appointments_extraInitializers), __runInitializers(this, _appointmentSeries_initializers, void 0));
            this.cancellations = (__runInitializers(this, _appointmentSeries_extraInitializers), __runInitializers(this, _cancellations_initializers, void 0));
            __runInitializers(this, _cancellations_extraInitializers);
        }
        return Patient_1;
    }());
    __setFunctionName(_classThis, "Patient");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _firstName_decorators = [(0, typeorm_1.Column)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _activeSince_decorators = [(0, typeorm_1.Column)({ type: 'date' })];
        _activeUntil_decorators = [(0, typeorm_1.Column)({ type: 'date' })];
        _isBWO_decorators = [(0, typeorm_1.Column)()];
        _appointments_decorators = [(0, typeorm_1.OneToMany)(function () { return Appointment_1.default; }, function (appointment) { return appointment.patient; })];
        _appointmentSeries_decorators = [(0, typeorm_1.OneToMany)(function () { return AppointmentSeries_1.default; }, function (appointmentSeries) { return appointmentSeries.patient; })];
        _cancellations_decorators = [(0, typeorm_1.OneToMany)(function () { return Cancellation_1.default; }, function (cancellation) { return cancellation.patient; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: function (obj) { return "firstName" in obj; }, get: function (obj) { return obj.firstName; }, set: function (obj, value) { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _activeSince_decorators, { kind: "field", name: "activeSince", static: false, private: false, access: { has: function (obj) { return "activeSince" in obj; }, get: function (obj) { return obj.activeSince; }, set: function (obj, value) { obj.activeSince = value; } }, metadata: _metadata }, _activeSince_initializers, _activeSince_extraInitializers);
        __esDecorate(null, null, _activeUntil_decorators, { kind: "field", name: "activeUntil", static: false, private: false, access: { has: function (obj) { return "activeUntil" in obj; }, get: function (obj) { return obj.activeUntil; }, set: function (obj, value) { obj.activeUntil = value; } }, metadata: _metadata }, _activeUntil_initializers, _activeUntil_extraInitializers);
        __esDecorate(null, null, _isBWO_decorators, { kind: "field", name: "isBWO", static: false, private: false, access: { has: function (obj) { return "isBWO" in obj; }, get: function (obj) { return obj.isBWO; }, set: function (obj, value) { obj.isBWO = value; } }, metadata: _metadata }, _isBWO_initializers, _isBWO_extraInitializers);
        __esDecorate(null, null, _appointments_decorators, { kind: "field", name: "appointments", static: false, private: false, access: { has: function (obj) { return "appointments" in obj; }, get: function (obj) { return obj.appointments; }, set: function (obj, value) { obj.appointments = value; } }, metadata: _metadata }, _appointments_initializers, _appointments_extraInitializers);
        __esDecorate(null, null, _appointmentSeries_decorators, { kind: "field", name: "appointmentSeries", static: false, private: false, access: { has: function (obj) { return "appointmentSeries" in obj; }, get: function (obj) { return obj.appointmentSeries; }, set: function (obj, value) { obj.appointmentSeries = value; } }, metadata: _metadata }, _appointmentSeries_initializers, _appointmentSeries_extraInitializers);
        __esDecorate(null, null, _cancellations_decorators, { kind: "field", name: "cancellations", static: false, private: false, access: { has: function (obj) { return "cancellations" in obj; }, get: function (obj) { return obj.cancellations; }, set: function (obj, value) { obj.cancellations = value; } }, metadata: _metadata }, _cancellations_initializers, _cancellations_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Patient = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Patient = _classThis;
}();
exports.default = Patient;

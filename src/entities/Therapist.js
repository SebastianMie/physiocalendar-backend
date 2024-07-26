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
var Absence_1 = require("./Absence");
var Exception_1 = require("./Exception");
var Appointment_1 = require("./Appointment");
var AppointmentSeries_1 = require("./AppointmentSeries");
var Therapist = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _activeSince_decorators;
    var _activeSince_initializers = [];
    var _activeSince_extraInitializers = [];
    var _activeUntil_decorators;
    var _activeUntil_initializers = [];
    var _activeUntil_extraInitializers = [];
    var _absences_decorators;
    var _absences_initializers = [];
    var _absences_extraInitializers = [];
    var _exceptions_decorators;
    var _exceptions_initializers = [];
    var _exceptions_extraInitializers = [];
    var _appointments_decorators;
    var _appointments_initializers = [];
    var _appointments_extraInitializers = [];
    var _appointmentSeries_decorators;
    var _appointmentSeries_initializers = [];
    var _appointmentSeries_extraInitializers = [];
    var Therapist = _classThis = /** @class */ (function () {
        function Therapist_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.activeSince = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _activeSince_initializers, void 0));
            this.activeUntil = (__runInitializers(this, _activeSince_extraInitializers), __runInitializers(this, _activeUntil_initializers, void 0));
            this.absences = (__runInitializers(this, _activeUntil_extraInitializers), __runInitializers(this, _absences_initializers, void 0));
            this.exceptions = (__runInitializers(this, _absences_extraInitializers), __runInitializers(this, _exceptions_initializers, void 0));
            this.appointments = (__runInitializers(this, _exceptions_extraInitializers), __runInitializers(this, _appointments_initializers, void 0));
            this.appointmentSeries = (__runInitializers(this, _appointments_extraInitializers), __runInitializers(this, _appointmentSeries_initializers, void 0));
            __runInitializers(this, _appointmentSeries_extraInitializers);
        }
        return Therapist_1;
    }());
    __setFunctionName(_classThis, "Therapist");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _activeSince_decorators = [(0, typeorm_1.Column)({ type: 'date' })];
        _activeUntil_decorators = [(0, typeorm_1.Column)({ type: 'date' })];
        _absences_decorators = [(0, typeorm_1.OneToMany)(function () { return Absence_1.default; }, function (absence) { return absence.therapist; })];
        _exceptions_decorators = [(0, typeorm_1.OneToMany)(function () { return Exception_1.default; }, function (exception) { return exception.therapist; })];
        _appointments_decorators = [(0, typeorm_1.OneToMany)(function () { return Appointment_1.default; }, function (appointment) { return appointment.therapist; })];
        _appointmentSeries_decorators = [(0, typeorm_1.OneToMany)(function () { return AppointmentSeries_1.default; }, function (appointmentSeries) { return appointmentSeries.therapist; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _activeSince_decorators, { kind: "field", name: "activeSince", static: false, private: false, access: { has: function (obj) { return "activeSince" in obj; }, get: function (obj) { return obj.activeSince; }, set: function (obj, value) { obj.activeSince = value; } }, metadata: _metadata }, _activeSince_initializers, _activeSince_extraInitializers);
        __esDecorate(null, null, _activeUntil_decorators, { kind: "field", name: "activeUntil", static: false, private: false, access: { has: function (obj) { return "activeUntil" in obj; }, get: function (obj) { return obj.activeUntil; }, set: function (obj, value) { obj.activeUntil = value; } }, metadata: _metadata }, _activeUntil_initializers, _activeUntil_extraInitializers);
        __esDecorate(null, null, _absences_decorators, { kind: "field", name: "absences", static: false, private: false, access: { has: function (obj) { return "absences" in obj; }, get: function (obj) { return obj.absences; }, set: function (obj, value) { obj.absences = value; } }, metadata: _metadata }, _absences_initializers, _absences_extraInitializers);
        __esDecorate(null, null, _exceptions_decorators, { kind: "field", name: "exceptions", static: false, private: false, access: { has: function (obj) { return "exceptions" in obj; }, get: function (obj) { return obj.exceptions; }, set: function (obj, value) { obj.exceptions = value; } }, metadata: _metadata }, _exceptions_initializers, _exceptions_extraInitializers);
        __esDecorate(null, null, _appointments_decorators, { kind: "field", name: "appointments", static: false, private: false, access: { has: function (obj) { return "appointments" in obj; }, get: function (obj) { return obj.appointments; }, set: function (obj, value) { obj.appointments = value; } }, metadata: _metadata }, _appointments_initializers, _appointments_extraInitializers);
        __esDecorate(null, null, _appointmentSeries_decorators, { kind: "field", name: "appointmentSeries", static: false, private: false, access: { has: function (obj) { return "appointmentSeries" in obj; }, get: function (obj) { return obj.appointmentSeries; }, set: function (obj, value) { obj.appointmentSeries = value; } }, metadata: _metadata }, _appointmentSeries_initializers, _appointmentSeries_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Therapist = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Therapist = _classThis;
}();
exports.default = Therapist;

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
var AppointmentSeries_1 = require("./AppointmentSeries");
var Patient_1 = require("./Patient");
var Cancellation = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _appointmentSeries_decorators;
    var _appointmentSeries_initializers = [];
    var _appointmentSeries_extraInitializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _patient_decorators;
    var _patient_initializers = [];
    var _patient_extraInitializers = [];
    var Cancellation = _classThis = /** @class */ (function () {
        function Cancellation_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.appointmentSeries = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _appointmentSeries_initializers, void 0));
            this.date = (__runInitializers(this, _appointmentSeries_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.patient = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _patient_initializers, void 0));
            __runInitializers(this, _patient_extraInitializers);
        }
        return Cancellation_1;
    }());
    __setFunctionName(_classThis, "Cancellation");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _appointmentSeries_decorators = [(0, typeorm_1.ManyToOne)(function () { return AppointmentSeries_1.default; }, function (appointmentSeries) { return appointmentSeries.cancellations; })];
        _date_decorators = [(0, typeorm_1.Column)({ type: 'date' })];
        _patient_decorators = [(0, typeorm_1.ManyToOne)(function () { return Patient_1.default; }, function (patient) { return patient.cancellations; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _appointmentSeries_decorators, { kind: "field", name: "appointmentSeries", static: false, private: false, access: { has: function (obj) { return "appointmentSeries" in obj; }, get: function (obj) { return obj.appointmentSeries; }, set: function (obj, value) { obj.appointmentSeries = value; } }, metadata: _metadata }, _appointmentSeries_initializers, _appointmentSeries_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _patient_decorators, { kind: "field", name: "patient", static: false, private: false, access: { has: function (obj) { return "patient" in obj; }, get: function (obj) { return obj.patient; }, set: function (obj, value) { obj.patient = value; } }, metadata: _metadata }, _patient_initializers, _patient_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Cancellation = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Cancellation = _classThis;
}();
exports.default = Cancellation;

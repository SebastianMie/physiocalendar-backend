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
var Therapist_1 = require("./Therapist");
var Patient_1 = require("./Patient");
var Appointment = function () {
    var _classDecorators = [(0, typeorm_1.Entity)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _therapist_decorators;
    var _therapist_initializers = [];
    var _therapist_extraInitializers = [];
    var _patient_decorators;
    var _patient_initializers = [];
    var _patient_extraInitializers = [];
    var _startTime_decorators;
    var _startTime_initializers = [];
    var _startTime_extraInitializers = [];
    var _endTime_decorators;
    var _endTime_initializers = [];
    var _endTime_extraInitializers = [];
    var _comment_decorators;
    var _comment_initializers = [];
    var _comment_extraInitializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _weekday_decorators;
    var _weekday_initializers = [];
    var _weekday_extraInitializers = [];
    var _isHotair_decorators;
    var _isHotair_initializers = [];
    var _isHotair_extraInitializers = [];
    var _isUltrasonic_decorators;
    var _isUltrasonic_initializers = [];
    var _isUltrasonic_extraInitializers = [];
    var _isElectric_decorators;
    var _isElectric_initializers = [];
    var _isElectric_extraInitializers = [];
    var Appointment = _classThis = /** @class */ (function () {
        function Appointment_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.therapist = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _therapist_initializers, void 0));
            this.patient = (__runInitializers(this, _therapist_extraInitializers), __runInitializers(this, _patient_initializers, void 0));
            this.startTime = (__runInitializers(this, _patient_extraInitializers), __runInitializers(this, _startTime_initializers, void 0));
            this.endTime = (__runInitializers(this, _startTime_extraInitializers), __runInitializers(this, _endTime_initializers, void 0));
            this.comment = (__runInitializers(this, _endTime_extraInitializers), __runInitializers(this, _comment_initializers, void 0));
            this.date = (__runInitializers(this, _comment_extraInitializers), __runInitializers(this, _date_initializers, void 0));
            this.weekday = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _weekday_initializers, void 0));
            this.isHotair = (__runInitializers(this, _weekday_extraInitializers), __runInitializers(this, _isHotair_initializers, void 0));
            this.isUltrasonic = (__runInitializers(this, _isHotair_extraInitializers), __runInitializers(this, _isUltrasonic_initializers, void 0));
            this.isElectric = (__runInitializers(this, _isUltrasonic_extraInitializers), __runInitializers(this, _isElectric_initializers, void 0));
            __runInitializers(this, _isElectric_extraInitializers);
        }
        return Appointment_1;
    }());
    __setFunctionName(_classThis, "Appointment");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _therapist_decorators = [(0, typeorm_1.ManyToOne)(function () { return Therapist_1.default; }, function (therapist) { return therapist.appointments; })];
        _patient_decorators = [(0, typeorm_1.ManyToOne)(function () { return Patient_1.default; }, function (patient) { return patient.appointments; })];
        _startTime_decorators = [(0, typeorm_1.Column)({ type: 'time' })];
        _endTime_decorators = [(0, typeorm_1.Column)({ type: 'time' })];
        _comment_decorators = [(0, typeorm_1.Column)()];
        _date_decorators = [(0, typeorm_1.Column)({ type: 'date' })];
        _weekday_decorators = [(0, typeorm_1.Column)()];
        _isHotair_decorators = [(0, typeorm_1.Column)()];
        _isUltrasonic_decorators = [(0, typeorm_1.Column)()];
        _isElectric_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _therapist_decorators, { kind: "field", name: "therapist", static: false, private: false, access: { has: function (obj) { return "therapist" in obj; }, get: function (obj) { return obj.therapist; }, set: function (obj, value) { obj.therapist = value; } }, metadata: _metadata }, _therapist_initializers, _therapist_extraInitializers);
        __esDecorate(null, null, _patient_decorators, { kind: "field", name: "patient", static: false, private: false, access: { has: function (obj) { return "patient" in obj; }, get: function (obj) { return obj.patient; }, set: function (obj, value) { obj.patient = value; } }, metadata: _metadata }, _patient_initializers, _patient_extraInitializers);
        __esDecorate(null, null, _startTime_decorators, { kind: "field", name: "startTime", static: false, private: false, access: { has: function (obj) { return "startTime" in obj; }, get: function (obj) { return obj.startTime; }, set: function (obj, value) { obj.startTime = value; } }, metadata: _metadata }, _startTime_initializers, _startTime_extraInitializers);
        __esDecorate(null, null, _endTime_decorators, { kind: "field", name: "endTime", static: false, private: false, access: { has: function (obj) { return "endTime" in obj; }, get: function (obj) { return obj.endTime; }, set: function (obj, value) { obj.endTime = value; } }, metadata: _metadata }, _endTime_initializers, _endTime_extraInitializers);
        __esDecorate(null, null, _comment_decorators, { kind: "field", name: "comment", static: false, private: false, access: { has: function (obj) { return "comment" in obj; }, get: function (obj) { return obj.comment; }, set: function (obj, value) { obj.comment = value; } }, metadata: _metadata }, _comment_initializers, _comment_extraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
        __esDecorate(null, null, _weekday_decorators, { kind: "field", name: "weekday", static: false, private: false, access: { has: function (obj) { return "weekday" in obj; }, get: function (obj) { return obj.weekday; }, set: function (obj, value) { obj.weekday = value; } }, metadata: _metadata }, _weekday_initializers, _weekday_extraInitializers);
        __esDecorate(null, null, _isHotair_decorators, { kind: "field", name: "isHotair", static: false, private: false, access: { has: function (obj) { return "isHotair" in obj; }, get: function (obj) { return obj.isHotair; }, set: function (obj, value) { obj.isHotair = value; } }, metadata: _metadata }, _isHotair_initializers, _isHotair_extraInitializers);
        __esDecorate(null, null, _isUltrasonic_decorators, { kind: "field", name: "isUltrasonic", static: false, private: false, access: { has: function (obj) { return "isUltrasonic" in obj; }, get: function (obj) { return obj.isUltrasonic; }, set: function (obj, value) { obj.isUltrasonic = value; } }, metadata: _metadata }, _isUltrasonic_initializers, _isUltrasonic_extraInitializers);
        __esDecorate(null, null, _isElectric_decorators, { kind: "field", name: "isElectric", static: false, private: false, access: { has: function (obj) { return "isElectric" in obj; }, get: function (obj) { return obj.isElectric; }, set: function (obj, value) { obj.isElectric = value; } }, metadata: _metadata }, _isElectric_initializers, _isElectric_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Appointment = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Appointment = _classThis;
}();
exports.default = Appointment;

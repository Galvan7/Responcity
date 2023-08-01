const mongoose = require("mongoose")
const FirSchema = new mongoose.Schema(
    {
        State: {
            type: String,
            required: true
        },
        District: {
            type: String,
            required: true
        },
        PoliceStation: {
            type: String,
            required: true
        },
        FIRno: {
            type: String,
            required: true,
            unique: true,
        },
        Date: {
            type: String,
            required: true
        },
        Acts: {
            type: String,
            required: true
        },
        OccurenceDay: {
            type: String,
            required: true
        },
        OccurenceDate: {
            type: String,
            required: true
        },
        OccurenceTime: {
            type: String,
            required: true
        },
        InformationReceivedDate: {
            type: String,
            required: true
        },
        InformationReceivedDay: {
            type: String,
            required: true
        },
        InformationReceivedTime: {
            type: String,
            required: true
        },
        DiaryReferenceEntryNo: {
            type: String,
            required: true,
            unique: true
        },
        DiaryReferenceTime:{
            type: String,
            required: true,
        },
        DirectionAndDistancefromPS:{
            type: String,
            required: true,
        },
        BeatNo: {
            type: String,
            required: true,
        },
        Address: {
            type: String,
            required: true,
        },

        ComplainantName: {
            type: String,
            required: true,
        },
        ComplainantFatherorHusbandName: {
            type: String,
            required: true,
        },
        ComplainantDateOfBirth: {
            type: String,
            required: true,
        },
        ComplainantNationality: {
            type: String,
            required: true,
        },
        ComplainantOccupation: {
            type: String,
            required: true,
        },
        ComplainantPassportNo: {
            type: String,
            // required: true,
        },
        ComplainantDateofIssue: {
            type: String,
            required: true,
        },
        ComplainantPlaceOfIssue: {
            type: String,
            required: true,
        },
        ComplainantAddress: {
            type: String,
            required: true,
        },

        DetailsOfSuspected: {
            type: String,
            required: true,
        },
        cadre: {
            type: String,
            required: true
        },
        ReasonsforDelay: {
            type: String,
            // required: true,
        },
        ParticularsOfPropertiesStolenInvolved: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)
const Fir = mongoose.model("Fir", FirSchema)
module.exports = Fir
const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const path = require('path');


exports._get = async (filter) => {
  try {
    let facilityBooking = await model.facility_booking.findAll({
      where: filter
    });
  
    if(!facilityBooking){
      return {
        status: 400,
        message: `Facility booking doesn't exists!`,
      };
    }
  
  
    return {
      status: 200,
      message: facilityBooking,
    };
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };
  }
};

exports._getSchedule = async (filter) => {
  try {
    const schedule = await model.facility_schedules.findOne({
      where: filter
    })

    return {
      status: 200,
      result: schedule
    }

  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err.message,
    };
  }
}

exports._bookingFacility = async (params) => {
  try { 
    
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };
  }
}
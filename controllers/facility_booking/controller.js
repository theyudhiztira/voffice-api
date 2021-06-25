const model = require("../../models");
const {Op} = require("sequelize");
const moment = require("moment");
const path = require('path');
const md5 = require("md5")
const fs = require("fs");
const { param } = require("express-validator");

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
      where: {
        date: {
          [Op.gte] : filter.date
        },
        facility_id: filter.facility_id
      }
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


exports._getBookings = async (filter) => {
  try {
    const bookings = await model.facility_booking.findAll({
      where: filter,
      include: [{
         model: model.facilities,
         include:{ model: model.locations }
      },{
        model: model.companies
      }]
    })
    
    return {
      status: 200,
      result: bookings
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

    let message = `${params.company_id}-${params.facility_id}-${params.booking_date}-${params.booked_slot}-${new Date()}`

    const facilityBooking = await model.facility_booking.create({
      facility_id: params.facility_id,
      booking_date: params.booking_date,
      company_id: params.company_id,
      plan_id: params.plan_id,
      booked_slot: params.booked_slot,
      number_of_attendees: params.pax,
      unique_code: md5(message),
      booking_source: params.booking_source,
      created_by: params.created_by,
      notes: params.notes
    })

    const creditCost = await local.handleCreditCost({
      facility_id: params.facility_id,
      booked_slot: params.booked_slot,
      credit_type: params.credit_type,
      plan_dt: params.plan_dt
    })


    if(creditCost.status === 500) return creditCost
    
    const handleSchedule = await local.handleFacilitySchedule({ 
      date: params.booking_date, 
      booked_slot: params.booked_slot, 
      facilityBookingId: facilityBooking.id, 
      facility_id: params.facility_id
    })

    if(handleSchedule.status === 500) return handleSchedule
    
    return {
      status: 200,
      message: "Facility booked"
    };
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };
  }
}

const local = exports = {
  handleFacilitySchedule: async (params) => {
    try {

      const bookedTime = {}

      params.booked_slot.split(",").forEach(el => {
        bookedTime[el] = params.facilityBookingId
      });
      
      const facility_schedule = await model.facility_schedules.findOne({ 
        where: { 
          date:  { 
            [Op.gte] : params.date
          }
        }
      })
      

      if(facility_schedule) {
        const updateSchedule = await model.facility_schedules.update(bookedTime, {
          where: {
            date: {
              [Op.gte] : params.date
            }
          }
        })
      } else {
        const createSchedule = await model.facility_schedules.create({
          ...bookedTime,
          facility_id: params.facility_id,
          date: params.date
        })
      }

      return true
    } catch (err) {
      return {
        status: 500,
        message: err.message,
      };
    }
  },

  handleCreditCost : async (params) => {
    try {
      const facility = await model.facilities.findOne({
        where: {
          id: params.facility_id
        }
      })

      let obj = {}
      let totalCost = 0
  
      params.booked_slot.split(",").forEach(el => {
        totalCost +=  facility.credit_cost
      })
  
      if(params.credit_type === "free" && params.plan_dt.free_credit  >= totalCost) {
        obj = {
          free_credit : params.plan_dt.free_credit  - totalCost
        }
      } else if(params.credit_type === "paid"  && params.plan_dt.paid_credit  >= totalCost) {
        obj = {
          paid_credit : params.plan_dt.paid_credit  - totalCost
        }
      } else {
        return {
            status: 500,
            message: `your credit is not sufficient to book this facility`
          }
      }
      
      const updatePLanDt = await model.plan_dt.update(obj, {
        where: {
          id: params.facility_id
        }
      })

      return true
    } catch (err) {
      return {
        status: 500,
        message: err.message,
      };
    }
  }

}
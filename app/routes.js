var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router


// ************************
// GLOBAL VARIABLES
// ************************

var applicantMaster = require('./applicant.js');
var applicant = applicantMaster.createApplicant();

applicant.partner = null;

// ************************
// PRE-APPLY
// ************************

router.get(/applyonline-handler/, function (req, res) {
  if (req.query.applyonline == 'yes') {
    res.redirect('/apply/what-you-will-need');
  } else if (req.query.applyonline == 'no') {
    res.redirect('/kickouts/apply-offline');
  }
});

// ************************
// BEFORE YOU START
// ************************

router.get(/partner-handler/, function (req, res) {
  if (req.query.partner == 'yes') {
    applicant.partner = true;
    res.redirect('/beforeyoustart/money-from-these-partner');
  } else if (req.query.partner == 'no') {
    applicant.partner = false;
    res.redirect('/beforeyoustart/money-from-these-single');
  }
});

router.get(/whatispartnersincome-handler/, function (req, res) {
  if (req.query.incomepartner == 'earned-income') {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomepartner == 'benefits-income') {
    res.redirect('/beforeyoustart/money-from-these-single');
  } else if (req.query.incomepartner == 'pension-income') {
    res.redirect('/beforeyoustart/money-from-these-single');
  } else if (req.query.incomepartner == 'maintenance-income') {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomepartner == 'nil-income') {
    res.redirect('../kickouts/developed');
  } 
});

router.get(/whatissingleincome-handler/, function (req, res) {
  if (req.query.incomesingle == 'earned-income') {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle == 'benefits-income') {
    res.redirect('/beforeyoustart/answers');
  } else if (req.query.incomesingle == 'pension-income') {
    res.redirect('/beforeyoustart/answers');
  } else if (req.query.incomesingle == 'maintenance-income') {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle == 'nil-income') {
    res.redirect('../kickouts/developed');
  }
});

/*
router.get(/incomepartner-handler/, function (req, res) {
  if (req.query.partnerincometype.includes('earned-income')) {
    res.redirect('/kickouts/developed');
  } else if (req.query.partnerincometype.includes('benefits-income')) {
    res.redirect('/kickouts/developed');
  } else if (req.query.partnerincometype.includes('pension-income')) {
    res.redirect('/kickouts/developed');
  } else if (req.query.partnerincometype.includes('maintenance-income')) {
    res.redirect('/kickouts/developed');
  } else if (req.query.partnerincometype.includes('nil-income')) {
    res.redirect('/kickouts/developed');
  }
});
*/


// ************************
// PAYE
// ************************

/* 
router.get(/incometype-handler/, function (req, res) {
  if (req.query.incometype == 'earned-income') {
    res.redirect('../income/paye/job-title');
  } else if (req.query.incometype == 'benefits-income') {
    res.redirect('../benefits/do-you-get-universal-credit');
  } else if (req.query.incometype == 'pension-income') {
    res.redirect('../pension/pension_statepension');
  } else if (req.query.incometype == 'maintenance-income') {
    res.redirect('../earnings/maintenance-how-often');
  } else if (req.query.incometype == 'nil-income') {
    res.redirect('../earnings/what-money');
  }
});
*/

router.get(/jobtitle-handler/, function (req, res) {
  res.redirect('../paye/job-recent');
});

router.get(/jobrecent-handler/, function (req, res) {
  if (req.query.jobrecent == 'yes') {
    res.redirect('../paye/job-start-date');
  } else if (req.query.jobrecent == 'no') {
    res.redirect('../paye/job-hours');
  }
});

router.get(/jobstartdate-handler/, function (req, res) {
  if (req.query.jobstartdateday && req.query.jobstartdatemonth && req.query.jobstartdateyear) {
    res.redirect('../paye/job-hours');
  } else {
    res.redirect('../paye/job-start-date');
  }
});

router.get(/jobhours-handler/, function (req, res) {
  res.redirect('../paye/job-how-often');
});

router.get(/joboften-handler/, function (req, res) {
  if (req.query.joboften == 'every week' || req.query.joboften == 'every 2 weeks' || req.query.joboften == 'every 4 weeks' || req.query.joboften == 'every calendar month') {
    res.redirect('../paye/job-fit-notes');
  } else if (req.query.joboften == 'it varies') {
    res.redirect('../paye/job-date-last-worked');
  } else {
    res.redirect('../paye/job-how-often');
  }
});

router.get(/jobdatelastworked-handler/, function (req, res) {
  if (req.query.jobdatelastworkedday && req.query.jobdatelastworkedmonth && req.query.jobdatelastworkedyear) {
    res.redirect('../paye/job-fit-notes');
  } else {
    res.redirect('../paye/job-date-last-worked');
  }
});

router.get(/jobfitnote-handler/, function (req, res) {
  if (req.query.jobfitnote == 'yes') {
    res.redirect('../paye/job-date-fit-notes');
  } else if (req.query.jobfitnote == 'no') {
    res.redirect('../paye/job-another');
  }
});

router.get(/jobdatefitnote-handler/, function (req, res) {
  if (req.query.jobdatefitnoteday && req.query.jobdatefitnotemonth && req.query.jobdatefitnoteyear) {
    res.redirect('../paye/job-another');
  } else {
    res.redirect('../paye/job-date-fit-notes');
  }
});


router.get(/jobanother-handler/, function (req, res) {
  if (req.query.jobanother == 'yes') {
    res.redirect('../paye/job-title');
  } else if (req.query.jobanother == 'no') {
    res.redirect('../paye/pension/personal-pension');
  }
});

router.get(/jobpersonalpension-handler/, function (req, res) {
  if (req.query.jobpersonalpension == 'yes') {
    res.redirect('../../paye/pension/personal-pension-name');
  } else if (req.query.jobpersonalpension == 'no') {
    res.redirect('../../answers');
  }
});

router.get(/jobpensiontitle-handler/, function (req, res) {
  res.redirect('../pension/personal-pension-how-often');
});

router.get(/jobpersonalpensionhowoften-handler/, function (req, res) {
  if (req.query.jobpersonalpensionhowoften == 'every week' || req.query.jobpersonalpensionhowoften == 'every 2 weeks' || req.query.jobpersonalpensionhowoften == 'every 4 weeks' || req.query.jobpersonalpensionhowoften == 'every calendar month' || req.query.jobpersonalpensionhowoften == 'every 13 weeks (quarterly)' || req.query.jobpersonalpensionhowoften == 'once a year') {
    res.redirect('../../paye/pension/personal-pension-how-much');
  } else {
    res.redirect('personal-pension-how-often');
  }
});

router.get(/jobpersonalpensionhowmuch-handler/, function (req, res) {
  res.redirect('personal-pension-another');
});

router.get(/jobpersonalpensionanother-handler/, function (req, res) {
  if (req.query.jobpersonalpensionanother == 'yes') {
    res.redirect('../../paye/pension/personal-pension-how-often');
  } else if (req.query.jobpersonalpensionanother == 'no') {
    res.redirect('../../answers');
  }
});

// ************************
// PENSIONS
// ************************

router.get(/pensiontitle-handler/, function (req, res) {
  res.redirect('../pension/pension-how-often');
});

router.get(/pensionhowoften-handler/, function (req, res) {
  if (req.query.pensionhowoften == 'every week' || req.query.pensionhowoften == 'every 2 weeks' || req.query.pensionhowoften == 'every 4 weeks' || req.query.pensionhowoften == 'every calendar month' || req.query.pensionhowoften == 'every 13 weeks (quarterly)' || req.query.pensionhowoften == 'once a year') {
    res.redirect('pension-how-much');
  } else {
    res.redirect('pension-how-often');
  }
});

router.get(/personalpensionhowmuch-handler/, function (req, res) {
  res.redirect('pension-another');
});

router.get(/personalpensionanother-handler/, function (req, res) {
  if (req.query.personalpensionanother == 'yes') {
    res.redirect('pension-name');
  } else if (req.query.personalpensionanother == 'no') {
    res.redirect('answers');
  }
});

// ************************
// BENEFITS
// ************************

router.get(/universalcredit-handler/, function (req, res) {
  if (req.query.universalcredit == 'yes') {
    res.redirect('../benefits/tax-credits');
  } if (req.query.universalcredit == 'no') {
    res.redirect('../benefits/tax-credits');
  } else if (req.query.universalcredit == 'not-yet') {
    res.redirect('../benefits/tax-credits');
  }
});

router.get(/taxcredits-handler/, function (req, res) {
  if (req.query.taxcredits == 'yes') {
    res.redirect('../benefits/tax-credits-type');
  } else if (req.query.taxcredits == 'no') {
    res.redirect('../benefits/other-benefits');
  }
});

router.get(/taxcredittype-handler/, function (req, res) {
  if (req.query.taxcredittype == 'WTCCTC') {
    res.redirect('../benefits/other-benefits');
  } if (req.query.taxcredittype == 'WTCDisability') {
    res.redirect('../benefits/other-benefits');
  } if (req.query.taxcredittype == 'WTC') {
    res.redirect('../benefits/other-benefits');
  } else if (req.query.taxcredittype == 'CTC') {
    res.redirect('../benefits/other-benefits');
  }
});

router.get(/otherbenefits-handler/, function (req, res) {
  res.redirect('../benefits/answers');
});
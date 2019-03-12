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
applicant.maintenancefor = null;

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
    res.redirect('/beforeyoustart/asylum/claimed-asylum-partner');
  } else if (req.query.partner == 'no') {
    applicant.partner = false;
    res.redirect('/beforeyoustart/asylum/claimed-asylum-single');
  }
});

router.get(/whatispartnersincome-handler/, function (req, res) {
  if (req.query.incomepartner.includes('earned-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomepartner.includes('maintenance-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomepartner.includes('maternitypaternity-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomepartner.includes('apprenticeship-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomepartner.includes('trustfunds-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomepartner.includes('selfemployed-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomepartner == 'benefits-income') {
    res.redirect('/beforeyoustart/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,pension-income') {
    res.redirect('/beforeyoustart/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,pension-income,nil-income') {
    res.redirect('/beforeyoustart/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,nil-income') {
    res.redirect('/beforeyoustart/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'pension-income,nil-income') {
    res.redirect('/beforeyoustart/money-coming-in-single');
  } else if (req.query.incomepartner == 'pension-income') {
    res.redirect('/beforeyoustart/money-coming-in-single');
  } else if (req.query.incomepartner == 'nil-income') {
    res.redirect('/beforeyoustart/money-coming-in-single');
  } 
});

router.get(/whatissingleincome-handler/, function (req, res) {
  if (req.query.incomesingle.includes('earned-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle.includes('maintenance-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle.includes('maternitypaternity-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle.includes('apprenticeship-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle.includes('trustfunds-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle.includes('selfemployed-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle == 'benefits-income') {
    res.redirect('/beforeyoustart/answers');
  } else if (req.query.incomesingle.toString() == 'benefits-income,pension-income') {
    res.redirect('/beforeyoustart/answers');
  } else if (req.query.incomesingle.toString() == 'benefits-income,pension-income,nil-income') {
    res.redirect('/beforeyoustart/answers');
  } else if (req.query.incomesingle.toString() == 'benefits-income,nil-income') {
    res.redirect('/beforeyoustart/answers');
  } else if (req.query.incomesingle.toString() == 'pension-income,nil-income') {
    res.redirect('/beforeyoustart/answers');
  } else if (req.query.incomesingle == 'pension-income') {
    res.redirect('/beforeyoustart/answers');
  } else if (req.query.incomesingle == 'nil-income') {
    res.redirect('/beforeyoustart/answers');
  } 
});

router.get(/asylumsingle-handler/, function (req, res) {
  if (req.query.asylumsingle == 'yes') {
    res.redirect('/beforeyoustart/asylum/asylum-decision');
  } else if (req.query.asylumsingle == 'no') {
    res.redirect('../../beforeyoustart/money-coming-in-single');
  }
});

router.get(/asylumPartner-handler/, function (req, res) {
  if (req.query.asylumPartner == 'yes') {
    res.redirect('../../kickouts/developed');
  } else if (req.query.asylumPartner == 'no') {
    res.redirect('../../beforeyoustart/money-coming-in-partner');
  }
});

router.get(/asylumdecision-handler/, function (req, res) {
  if (req.query.asylumdecision == 'still-waiting') {
    res.redirect('/beforeyoustart/asylum/who-is-supporting-you');
  } else if (req.query.asylumdecision == 'given-permission') {
    res.redirect('../../beforeyoustart/money-coming-in-single');
  } else if (req.query.asylumdecision == 'refused-permission') {
    res.redirect('/beforeyoustart/asylum/who-is-supporting-you');
  }
});

router.get(/whoissupporting-handler/, function (req, res) {
  if (req.query.whoissupporting.includes('uk-visas')) {
    res.redirect('/beforeyoustart/asylum/passport');
  } else if (req.query.whoissupporting == 'local-authority') {
    res.redirect('/beforeyoustart/asylum/what-type-of-support');
  } else if (req.query.whoissupporting == 'a-charity') {
    res.redirect('/beforeyoustart/asylum/what-type-of-support');
  } else if (req.query.whoissupporting.toString() == 'local-authority,a-charity') {
    res.redirect('/beforeyoustart/asylum/what-type-of-support');
  } else if (req.query.whoissupporting == 'none') {
    res.redirect('/beforeyoustart/asylum/tell-us-supporting-you');
  } 
});

router.get(/telluswhoissupportingyou-handler/, function (req, res) {
  res.redirect('/beforeyoustart/asylum/what-type-of-support');
});

router.get(/whatsupport-handler/, function (req, res) {
  if (req.query.whatsupport.includes('cash')) {
    res.redirect('/beforeyoustart/asylum/how-often-receive');
  } else if (req.query.whatsupport.includes('vouchers')) {
    res.redirect('../../beforeyoustart/money-coming-in-single');
  } else if (req.query.whatsupport.includes('prepaid-card')) {
    res.redirect('../../beforeyoustart/money-coming-in-single');
  } else if (req.query.whatsupport.includes('food-meals')) {
    res.redirect('../../beforeyoustart/money-coming-in-single');
  }
});

router.get(/asylumhowoften-handler/, function (req, res) {
  if (req.query.asylumhowoften == 'every week' || req.query.asylumhowoften == 'every 2 weeks' || req.query.asylumhowoften == 'every 4 weeks' || req.query.asylumhowoften == 'every calendar month') {
    res.redirect('/beforeyoustart/asylum/how-much-you-receive');
  } else {
    res.redirect('/beforeyoustart/asylum/how-often-receive');
  }
});

router.get(/asylumhowmuch-handler/, function (req, res) {
  res.redirect('/beforeyoustart/answers-asylum');
});


// ************************
// PAYE
// ************************

router.get(/jobtitle-handler/, function (req, res) {
  res.redirect('../paye/job-recent1');
});

router.get(/jobrecent-handler/, function (req, res) {
  if (req.query.jobrecent == 'yes') {
    res.redirect('../paye/job-start-date1');
  } else if (req.query.jobrecent == 'no') {
    res.redirect('../paye/job-zero-hour1');
  }
});

router.get(/jobstartdate-handler/, function (req, res) {
  if (req.query.jobstartdateday && req.query.jobstartdatemonth && req.query.jobstartdateyear) {
    res.redirect('../paye/job-zero-hour1');
  } else {
    res.redirect('../paye/job-start-date1');
  }
});
router.get(/zerohour-handler/, function (req, res) {
  if (req.query.zerohour == 'yes') {
    res.redirect('../paye/job-how-often1');
  } else if (req.query.zerohour == 'no') {
    res.redirect('../paye/job-hours1');
  }
});

router.get(/jobhours-handler/, function (req, res) {
  if (req.query.jobhours && req.query.jobminutes) {
    res.redirect('../paye/job-how-often1');
  } else {
    res.redirect('../paye/job-hours1');
  }
});



router.get(/joboften-handler/, function (req, res) {
  if (req.query.joboften == 'every week' || req.query.joboften == 'every 2 weeks' || req.query.joboften == 'every 4 weeks' || req.query.joboften == 'every calendar month') {
    res.redirect('../paye/job-fit-notes1');
  } else if (req.query.joboften == 'it varies') {
    res.redirect('../paye/job-date-last-worked1');
  } else {
    res.redirect('../paye/job-how-often1');
  }
});

router.get(/jobdatelastworked-handler/, function (req, res) {
  if (req.query.jobdatelastworkedday && req.query.jobdatelastworkedmonth && req.query.jobdatelastworkedyear) {
    res.redirect('../paye/job-fit-notes1');
  } else {
    res.redirect('../paye/job-date-last-worked1');
  }
});

router.get(/jobfitnote-handler/, function (req, res) {
  if (req.query.jobfitnote == 'yes') {
    res.redirect('../paye/job-date-fit-notes1');
  } else if (req.query.jobfitnote == 'no') {
    res.redirect('../paye/job-another1');
  }
});

router.get(/jobdatefitnote-handler/, function (req, res) {
  if (req.query.jobdatefitnoteday && req.query.jobdatefitnotemonth && req.query.jobdatefitnoteyear) {
    res.redirect('../paye/job-another1');
  } else {
    res.redirect('../paye/job-date-fit-notes1');
  }
});


router.get(/jobanother-handler/, function (req, res) {
  if (req.query.jobanother == 'yes') {
    res.redirect('../paye/job-title2');
  } else if (req.query.jobanother == 'no') {
    res.redirect('../paye/pension/personal-pension1');
  }
});

// *******

// Job (Loop)

router.get(/jobtitle-loop-handler/, function (req, res) {
  res.redirect('../paye/job-recent2');
});

router.get(/jobrecent-loop-handler/, function (req, res) {
  if (req.query.jobrecentloop == 'yes') {
    res.redirect('../paye/job-start-date2');
  } else if (req.query.jobrecentloop == 'no') {
    res.redirect('../paye/job-zero-hour2');
  }
});

router.get(/jobstartdate-loop-handler/, function (req, res) {
  if (req.query.jobstartdatedayloop && req.query.jobstartdatemonthloop && req.query.jobstartdateyearloop) {
    res.redirect('../paye/job-zero-hour2');
  } else {
    res.redirect('../paye/job-start-date2');
  }
});

router.get(/zerohour-loop-handler/, function (req, res) {
  if (req.query.zerohourloop == 'yes') {
    res.redirect('../paye/job-how-often2');
  } else if (req.query.zerohourloop == 'no') {
    res.redirect('../paye/job-hours2');
  }
});

router.get(/jobhours-loop-handler/, function (req, res) {
  if (req.query.jobhoursloop && req.query.jobminutesloop) {
    res.redirect('../paye/job-how-often2');
  } else {
    res.redirect('../paye/job-hours2');
  }
});

router.get(/joboften-loop-handler/, function (req, res) {
  if (req.query.joboftenloop == 'every week' || req.query.joboftenloop == 'every 2 weeks' || req.query.joboftenloop == 'every 4 weeks' || req.query.joboftenloop == 'every calendar month') {
    res.redirect('../paye/job-fit-notes2');
  } else if (req.query.joboftenloop == 'it varies') {
    res.redirect('../paye/job-date-last-worked2');
  } else {
    res.redirect('../paye/job-how-often2');
  }
});

router.get(/jobdatelastworked-loop-handler/, function (req, res) {
  if (req.query.jobdatelastworkeddayloop && req.query.jobdatelastworkedmonthloop && req.query.jobdatelastworkedyearloop) {
    res.redirect('../paye/job-fit-notes2');
  } else {
    res.redirect('../paye/job-date-last-worked2');
  }
});

router.get(/jobfitnote-loop-handler/, function (req, res) {
  if (req.query.jobfitnoteloop == 'yes') {
    res.redirect('../paye/job-date-fit-notes2');
  } else if (req.query.jobfitnoteloop == 'no') {
    res.redirect('../paye/job-another2');
  }
});

router.get(/jobdatefitnote-loop-handler/, function (req, res) {
  if (req.query.jobdatefitnotedayloop && req.query.jobdatefitnotemonthloop && req.query.jobdatefitnoteyearloop) {
    res.redirect('../paye/job-another2');
  } else {
    res.redirect('../paye/job-date-fit-notes2');
  }
});


router.get(/jobanother-loop-handler/, function (req, res) {
  if (req.query.jobanotherloop == 'yes') {
    res.redirect('../paye/job-title2');
  } else if (req.query.jobanotherloop == 'no') {
    res.redirect('../paye/pension/personal-pension1');
  }
});


// *******

router.get(/jobpersonalpension-handler/, function (req, res) {
  if (req.query.jobpersonalpension == 'yes') {
    res.redirect('../../paye/pension/personal-pension-name1');
  } else if (req.query.jobpersonalpension == 'no') {
    res.redirect('../../answers');
  }
});

router.get(/jobpensiontitle-handler/, function (req, res) {
  res.redirect('../pension/personal-pension-how-often1');
});

router.get(/jobpersonalpensionhowoften-handler/, function (req, res) {
  if (req.query.jobpersonalpensionhowoften == 'every week' || req.query.jobpersonalpensionhowoften == 'every 2 weeks' || req.query.jobpersonalpensionhowoften == 'every 4 weeks' || req.query.jobpersonalpensionhowoften == 'every calendar month' || req.query.jobpersonalpensionhowoften == 'every 13 weeks (quarterly)' || req.query.jobpersonalpensionhowoften == 'once a year') {
    res.redirect('../../paye/pension/personal-pension-how-much1');
  } else {
    res.redirect('personal-pension-how-often1');
  }
});

router.get(/jobpersonalpensionhowmuch-handler/, function (req, res) {
  res.redirect('personal-pension-another1');
});

router.get(/jobpersonalpensionanother-handler/, function (req, res) {
  if (req.query.jobpersonalpensionanother == 'yes') {
    res.redirect('../../paye/pension/personal-pension-name2');
  } else if (req.query.jobpersonalpensionanother == 'no') {
    res.redirect('../../answers');
  }
});

// *******

// Personal Pension (Loop)

router.get(/jobpersonalpension-loop-handler/, function (req, res) {
  if (req.query.jobpersonalpensionloop == 'yes') {
    res.redirect('../../paye/pension/personal-pension-name2');
  } else if (req.query.jobpersonalpensionloop == 'no') {
    res.redirect('../../answers');
  }
});

router.get(/jobpensiontitle-loop-handler/, function (req, res) {
  res.redirect('../pension/personal-pension-how-often2');
});

router.get(/jobpersonalpensionhowoften-loop-handler/, function (req, res) {
  if (req.query.jobpersonalpensionhowoftenloop == 'every week' || req.query.jobpersonalpensionhowoftenloop == 'every 2 weeks' || req.query.jobpersonalpensionhowoftenloop == 'every 4 weeks' || req.query.jobpersonalpensionhowoftenloop == 'every calendar month' || req.query.jobpersonalpensionhowoftenloop == 'every 13 weeks (quarterly)' || req.query.jobpersonalpensionhowoftenloop == 'once a year') {
    res.redirect('../../paye/pension/personal-pension-how-much2');
  } else {
    res.redirect('personal-pension-how-often2');
  }
});

router.get(/jobpersonalpensionhowmuch-loop-handler/, function (req, res) {
  res.redirect('personal-pension-another2');
});

router.get(/jobpersonalpensionanother-loop-handler/, function (req, res) {
  if (req.query.jobpersonalpensionanotherloop == 'yes') {
    res.redirect('../../paye/pension/personal-pension-name2');
  } else if (req.query.jobpersonalpensionanotherloop == 'no') {
    res.redirect('../../answers');
  }
});

// ************************
// PENSIONS
// ************************

router.get(/statepension-handler/, function (req, res) {
  if (req.query.statepension== 'yes') {
    res.redirect('../pension/state-pension-how-often');
  } else if (req.query.statepension == 'no') {
    res.redirect('../pension/pension-name');
  }
});

router.get(/statepensionhowoften-handler/, function (req, res) {
  if (req.query.statepensionhowoften == 'every week' || req.query.statepensionhowoften == 'every 2 weeks' || req.query.statepensionhowoften == 'every 4 weeks' || req.query.statepensionhowoften == 'every 13 weeks (quarterly)' || req.query.statepensionhowoften == 'once a year') {
    res.redirect('../pension/state-pension-how-much');
  } else {
    res.redirect('../pension/state-pension-how-often');
  }
});

router.get(/statepensionhowmuch-handler/, function (req, res) {
  res.redirect('../pension/pension-another-1');
});

router.get(/statepensionanother-handler/, function (req, res) {
  if (req.query.statepensionanother == 'yes') {
    res.redirect('../pension/pension-name');
  } else if (req.query.statepensionanother == 'no') {
    res.redirect('answers');
  }
});

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
  res.redirect('pension-another-2');
});

router.get(/personalpensionanother-handler/, function (req, res) {
  if (req.query.personalpensionanother == 'yes') {
    res.redirect('pension-name');
  } else if (req.query.personalpensionanother == 'no') {
    res.redirect('answers');
  }
});

// ************************
// MAINTENANCE PAYMENTS
// ************************

router.get(/maintenancefor-handler/, function (req, res) {
  if (req.query.maintenancefor == 'for you') {
    applicant.maintenancefor = 'for you';
    res.redirect('../maintenance/maintenance-how-often');
  } if (req.query.maintenancefor == 'for your children') {
    applicant.maintenancefor = 'for your children';
    res.redirect('../maintenance/answers');
  } else if (req.query.maintenancefor == 'both of the above') {
    applicant.maintenancefor = 'both of the above';
    res.redirect('../maintenance/maintenance-how-often');
  }
});

router.get(/maintenancehowoften-handler/, function (req, res) {
  if (applicant.maintenancefor == 'for you') {
    res.redirect('../maintenance/maintenance-how-much-you');
  } else if (applicant.maintenancefor == 'both of the above') {
    res.redirect('../maintenance/maintenance-how-much-you-only');
  } 
});

router.get(/maintenanceyouhowmuch-handler/, function (req, res) {
  res.redirect('../maintenance/answers');
});

router.get(/maintenanceyouonlyhowmuch-handler/, function (req, res) {
  res.redirect('../maintenance/answers');
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

// ******************************
// MONEY FROM OTHER SOURCES - MVP
// ******************************

router.get(/howpaying-handler/, function (req, res) {
  if (req.query.howpaying == 'money from friends or family') {
    res.redirect('../mvp/none-how-much');
  } else if (req.query.howpaying == 'savings') {
    res.redirect('../mvp/none-how-much');
  } else if (req.query.howpaying == 'donations') {
    res.redirect('../mvp/none-how-much');
  } else if (req.query.howpaying == 'none of these') {
    res.redirect('../mvp/none-how-supporting');
  }
});

router.get(/nonehowsupporting-handler/, function (req, res) {
  res.redirect('../mvp/none-how-much');
});

router.get(/nonehowmuch-handler/, function (req, res) {
  res.redirect('../mvp/answers');
});

// **************************************
// MONEY FROM OTHER SOURCES - ITERATION 1
// **************************************

router.get(/howpayingiteration1-handler/, function (req, res) {
  if (req.query.howpaying == 'money from friends or family') {   
    res.redirect('../iteration-1/none-how-much-friends');
  } else if (req.query.howpaying == 'savings') {
    res.redirect('../iteration-1/none-how-much-savings');
  } else if (req.query.howpaying == 'donations') {
    res.redirect('../iteration-1/none-how-much-donations');
  } else if (req.query.howpaying.toString() == 'money from friends or family,savings,donations') {
    res.redirect('../iteration-1/none-how-much-friends');
  } else if (req.query.howpaying.toString() == 'money from friends or family,savings') {
    res.redirect('../iteration-1/none-how-much-friends');
  } else if (req.query.howpaying.toString() == 'money from friends or family,donations') {
    res.redirect('../iteration-1/none-how-much-friends');
  } else if (req.query.howpaying.toString() == 'savings,donations') {
    res.redirect('../iteration-1/none-how-much-savings');
  } else if (req.query.howpaying == 'none of these') {
    res.redirect('../iteration-1/none-how-supporting');
  }
});

router.get(/nonehowsupporting1-handler/, function (req, res) {
  res.redirect('../iteration-1/answers');
});

router.get(/nonehowmuch1-handler/, function (req, res) {
  res.redirect('../iteration-1/answers');
});

// ************************
// SUBMIT APPLICATION
// ************************

router.get(/evidencebyemailmvp-handler/, function (req, res) {
  res.redirect('../mvp/declaration');
});

router.get(/evidencebyemailiteration1-handler/, function (req, res) {
  res.redirect('../iteration-1/declaration');
});

// ************************
// SAVE & RESTORE (MVP)
// ************************

router.get(/resumeapplication-handler/, function (req, res) {
  if (req.query.memorableword == '' && req.query.reference == '' && req.query.day == '' && req.query.month == '' && req.query.year == '') {
    res.redirect('/apply/save-restore/mvp/return-application-error4');
  } else if (req.query.memorableword == '' && req.query.reference && req.query.day && req.query.month && req.query.year) {
    res.redirect('/apply/save-restore/mvp/return-application-error1');
  } else if (req.query.memorableword && req.query.reference == '' && req.query.day && req.query.month && req.query.year) {
      res.redirect('/apply/save-restore/mvp/return-application-error2');
  } else if (req.query.memorableword && req.query.reference && req.query.day == '' && req.query.month && req.query.year) {
      res.redirect('/apply/save-restore/mvp/return-application-error3');
  } else if (req.query.memorableword && req.query.reference && req.query.day && req.query.month == '' && req.query.year) {
      res.redirect('/apply/save-restore/mvp/return-application-error3');
  } else if (req.query.memorableword && req.query.reference && req.query.day && req.query.month && req.query.year == '') {
      res.redirect('/apply/save-restore/mvp/return-application-error3');
  } else if (req.query.memorableword && req.query.reference && req.query.day && req.query.month && req.query.year) {
    res.redirect('/apply/save-restore/mvp/task-list-in-progress');
  } else {
    res.redirect('/apply/save-restore/mvp/start-again');
  }
});

router.get(/partnerSaveRestore-handler/, function (req, res) {
  if (req.query.partner == 'yes' ) {
    applicant.partner = true;
    res.redirect('/apply/save-restore/mvp/asylum/claimed-asylum-partner');
  } else if (req.query.partner == 'no') {
    applicant.partner = false;
    res.redirect('/apply/save-restore/mvp/asylum/claimed-asylum-single');
  }
});

router.get(/whatispartnersincomeSaveRestore-handler/, function (req, res) {
  if (req.query.incomepartner.includes('earned-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('UCWTC-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('maintenance-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('maternitypaternity-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('apprenticeship-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('trustfunds-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('selfemployed-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner == 'benefits-income') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,pension-income') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,pension-income,nil-income') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,nil-income') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'pension-income,nil-income') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.incomepartner == 'pension-income') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.incomepartner == 'nil-income') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } 
});

router.get(/whatissingleincomeSaveRestore-handler/, function (req, res) {
  if (req.query.incomesingle.includes('earned-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('UCWTC-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('maintenance-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('maternitypaternity-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('apprenticeship-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('trustfunds-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('selfemployed-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle == 'benefits-income') {
    res.redirect('/apply/save-restore/mvp/save-application');
  } else if (req.query.incomesingle.toString() == 'benefits-income,pension-income') {
    res.redirect('/apply/save-restore/mvp/save-application');
  } else if (req.query.incomesingle.toString() == 'benefits-income,pension-income,nil-income') {
    res.redirect('/apply/save-restore/mvp/save-application');
  } else if (req.query.incomesingle.toString() == 'benefits-income,nil-income') {
    res.redirect('/apply/save-restore/mvp/save-application');
  } else if (req.query.incomesingle.toString() == 'pension-income,nil-income') {
    res.redirect('/apply/save-restore/mvp/save-application');
  } else if (req.query.incomesingle == 'pension-income') {
    res.redirect('/apply/save-restore/mvp/save-application');
  } else if (req.query.incomesingle == 'nil-income') {
    res.redirect('/apply/save-restore/mvp/save-application');
  } 
});

router.get(/asylumsingleSaveRestore-handler/, function (req, res) {
  if (req.query.asylumsingle == 'yes') {
    res.redirect('/apply/save-restore/mvp/asylum/asylum-decision');
  } else if (req.query.asylumsingle == 'no') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  }
});

router.get(/asylumPartnerSaveRestore-handler/, function (req, res) {
  if (req.query.asylumPartner == 'yes') {
    res.redirect('../../kickouts/developed');
  } else if (req.query.asylumPartner == 'no') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-partner');
  }
});

router.get(/asylumdecisionSaveRestore-handler/, function (req, res) {
  if (req.query.asylumdecision == 'still-waiting') {
    res.redirect('/apply/save-restore/mvp/asylum/who-is-supporting-you');
  } else if (req.query.asylumdecision == 'given-permission') {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.asylumdecision == 'refused-permission') {
    res.redirect('/apply/save-restore/mvp/asylum/who-is-supporting-you');
  }
});

router.get(/whoissupportingSaveRestore-handler/, function (req, res) {
  if (req.query.whoissupporting.includes('uk-visas')) {
    res.redirect('/apply/save-restore/mvp/asylum/passport');
  } else if (req.query.whoissupporting == 'local-authority') {
    res.redirect('/apply/save-restore/mvp/asylum/what-type-of-support');
  } else if (req.query.whoissupporting == 'a-charity') {
    res.redirect('/apply/save-restore/mvp/asylum/what-type-of-support');
  } else if (req.query.whoissupporting.toString() == 'local-authority,a-charity') {
    res.redirect('/apply/save-restore/mvp/asylum/what-type-of-support');
  } else if (req.query.whoissupporting == 'none') {
    res.redirect('/apply/save-restore/mvp/asylum/tell-us-supporting-you');
  } 
});

router.get(/telluswhoissupportingyouSaveRestore-handler/, function (req, res) {
  res.redirect('/apply/save-restore/mvp/asylum/what-type-of-support');
});

router.get(/whatsupportSaveRestore-handler/, function (req, res) {
  if (req.query.whatsupport.includes('cash')) {
    res.redirect('/apply/save-restore/mvp/asylum/how-often-receive');
  } else if (req.query.whatsupport.includes('vouchers')) {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.whatsupport.includes('prepaid-card')) {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  } else if (req.query.whatsupport.includes('food-meals')) {
    res.redirect('/apply/save-restore/mvp/money-coming-in-single');
  }
});

router.get(/asylumhowoftenSaveRestore-handler/, function (req, res) {
  if (req.query.asylumhowoften == 'every week' || req.query.asylumhowoften == 'every 2 weeks' || req.query.asylumhowoften == 'every 4 weeks' || req.query.asylumhowoften == 'every calendar month') {
    res.redirect('/apply/save-restore/mvp/asylum/how-much-you-receive');
  } else {
    res.redirect('/apply/save-restore/mvp/asylum/how-often-receive');
  }
});

router.get(/asylumhowmuchSaveRestore-handler/, function (req, res) {
  res.redirect('/apply/save-restore/mvp/answers-asylum');
});

router.get(/saveapplicationSaveRestore-handler/, function (req, res) {
  if (req.query.saveapplication == 'yes') {
    res.redirect('/apply/save-restore/mvp/memorable-word');
  } else if (req.query.saveapplication == 'no') {
    res.redirect('/apply/save-restore/mvp/answers');
  }
});

// ************************
// SAVE & RESTORE (Iteration 1)
// ************************

router.get(/saveforlaterSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.saveforlater == 'yes' ) {
    res.redirect('/apply/save-restore/iteration-1/text-or-email-bys');
  } else if (req.query.saveforlater == 'no') {
    res.redirect('/apply/save-restore/iteration-1/answers');
  }
});

router.get(/carehomeSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.carehome == 'yes' ) {
    res.redirect('/apply/save-restore/iteration-1/partner');
  } else if (req.query.carehome == 'no') {
    res.redirect('/apply/save-restore/iteration-1/partner');
  }
});

router.get(/capitalsavingsSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.capitalsavings == 'yes' ) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.capitalsavings == 'no') {
    res.redirect('/apply/save-restore/iteration-1/education');
  }
});

router.get(/educationSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.education == 'yes' ) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.education == 'no') {
    res.redirect('/apply/save-restore/iteration-1/save-for-later');
  }
});

router.get(/resumeapplicationtextiteration1-handler/, function (req, res) {
  if (req.query.code == '') {
    res.redirect('/apply/save-restore/iteration-1/enter-text-code');
  } else if (req.query.code) {
    res.redirect('/apply/save-restore/iteration-1/further-check');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});

router.get(/resumeapplicationemailiteration1-handler/, function (req, res) {
  if (req.query.code == '') {
    res.redirect('/apply/save-restore/iteration-1/enter-email-code');
  } else if (req.query.code) {
    res.redirect('/apply/save-restore/iteration-1/further-check');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});

router.get(/saveapplicationtextiteration1-handler/, function (req, res) {
  if (req.query.code == '') {
    res.redirect('/apply/save-restore/iteration-1/enter-text-code-verify');
  } else if (req.query.code) {
    res.redirect('/apply/save-restore/iteration-1/memorable-word-text');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});

router.get(/saveapplicationemailiteration1-handler/, function (req, res) {
  if (req.query.code == '') {
    res.redirect('/apply/save-restore/iteration-1/enter-email-code-verify');
  } else if (req.query.code) {
    res.redirect('/apply/save-restore/iteration-1/memorable-word-email');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});

router.get(/saveapplicationtextBYSiteration1-handler/, function (req, res) {
  if (req.query.code == '') {
    res.redirect('/apply/save-restore/iteration-1/enter-text-code-verify');
  } else if (req.query.code) {
    res.redirect('/apply/save-restore/iteration-1/memorable-word-text-bys');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});

router.get(/saveapplicationemailBYSiteration1-handler/, function (req, res) {
  if (req.query.code == '') {
    res.redirect('/apply/save-restore/iteration-1/enter-email-code-verify');
  } else if (req.query.code) {
    res.redirect('/apply/save-restore/iteration-1/memorable-word-email-bys');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});

router.get(/memorablewordtextiteration1-handler/, function (req, res) {
  if (req.query.memorableword == '') {
    res.redirect('/apply/save-restore/iteration-1/memorable-word-text-bys');
  } else if (req.query.memorableword) {
    res.redirect('/apply/save-restore/iteration-1/saved-textmessage-bys');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});

router.get(/memorablewordemailiteration1-handler/, function (req, res) {
  if (req.query.memorableword == '') {
    res.redirect('/apply/save-restore/iteration-1/memorable-word-email-bys');
  } else if (req.query.memorableword) {
    res.redirect('/apply/save-restore/iteration-1/saved-email-bys');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});


router.get(/furthercheckiteration1-handler/, function (req, res) {
  if (req.query.memorablewordenter == '') {
    res.redirect('/apply/save-restore/iteration-1/further-check-error');
  } else if (req.query.memorablewordenter) {
    res.redirect('/apply/save-restore/iteration-1/task-list-in-progress');    
  } else {
    res.redirect('/apply/save-restore/iteration-1/start-again');
  }
});

router.get(/partnerSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.partner == 'yes' ) {
    applicant.partner = true;
    res.redirect('/apply/save-restore/iteration-1/asylum/claimed-asylum-partner');
  } else if (req.query.partner == 'no') {
    applicant.partner = false;
    res.redirect('/apply/save-restore/iteration-1/asylum/claimed-asylum-single');
  }
});

router.get(/whatispartnersincomeSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.incomepartner.includes('earned-income')) {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.incomepartner.includes('maintenance-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('maternitypaternity-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('apprenticeship-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('trustfunds-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner.includes('selfemployed-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomepartner == 'benefits-income') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,pension-income') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,pension-income,nil-income') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,nil-income') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.incomepartner.toString() == 'pension-income,nil-income') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.incomepartner == 'pension-income') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.incomepartner == 'nil-income') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } 
});

router.get(/whatissingleincomeSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.incomesingle.includes('earned-income')) {
    res.redirect('/apply/save-restore/iteration-1/capital-savings');
  } else if (req.query.incomesingle.includes('maintenance-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('maternitypaternity-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('apprenticeship-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('trustfunds-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle.includes('selfemployed-income')) {
    res.redirect('../../../kickouts/developed');
  } else if (req.query.incomesingle == 'benefits-income') {
    res.redirect('/apply/save-restore/iteration-1/capital-savings');
  } else if (req.query.incomesingle.toString() == 'benefits-income,pension-income') {
    res.redirect('/apply/save-restore/iteration-1/capital-savings');
  } else if (req.query.incomesingle.toString() == 'benefits-income,pension-income,nil-income') {
    res.redirect('/apply/save-restore/iteration-1/capital-savings');
  } else if (req.query.incomesingle.toString() == 'benefits-income,nil-income') {
    res.redirect('/apply/save-restore/iteration-1/capital-savings');
  } else if (req.query.incomesingle.toString() == 'pension-income,nil-income') {
    res.redirect('/apply/save-restore/iteration-1/capital-savings');
  } else if (req.query.incomesingle == 'pension-income') {
    res.redirect('/apply/save-restore/iteration-1/capital-savings');
  } else if (req.query.incomesingle == 'nil-income') {
    res.redirect('/apply/save-restore/iteration-1/capital-savings');
  } 
});

router.get(/asylumsingleSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.asylumsingle == 'yes') {
    res.redirect('/apply/save-restore/iteration-1/asylum/asylum-decision');
  } else if (req.query.asylumsingle == 'no') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  }
});

router.get(/asylumPartnerSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.asylumPartner == 'yes') {
    res.redirect('../../kickouts/developed');
  } else if (req.query.asylumPartner == 'no') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-partner');
  }
});

router.get(/asylumdecisionSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.asylumdecision == 'still-waiting') {
    res.redirect('/apply/save-restore/iteration-1/asylum/who-is-supporting-you');
  } else if (req.query.asylumdecision == 'given-permission') {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.asylumdecision == 'refused-permission') {
    res.redirect('/apply/save-restore/iteration-1/asylum/who-is-supporting-you');
  }
});

router.get(/whoissupportingSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.whoissupporting.includes('uk-visas')) {
    res.redirect('/apply/save-restore/iteration-1/asylum/passport');
  } else if (req.query.whoissupporting == 'local-authority') {
    res.redirect('/apply/save-restore/iteration-1/asylum/what-type-of-support');
  } else if (req.query.whoissupporting == 'a-charity') {
    res.redirect('/apply/save-restore/iteration-1/asylum/what-type-of-support');
  } else if (req.query.whoissupporting.toString() == 'local-authority,a-charity') {
    res.redirect('/apply/save-restore/iteration-1/asylum/what-type-of-support');
  } else if (req.query.whoissupporting == 'none') {
    res.redirect('/apply/save-restore/iteration-1/asylum/tell-us-supporting-you');
  } 
});

router.get(/telluswhoissupportingyouSaveRestoreiteration1-handler/, function (req, res) {
  res.redirect('/apply/save-restore/iteration-1/asylum/what-type-of-support');
});

router.get(/whatsupportSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.whatsupport.includes('cash')) {
    res.redirect('/apply/save-restore/iteration-1/asylum/how-often-receive');
  } else if (req.query.whatsupport.includes('vouchers')) {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.whatsupport.includes('prepaid-card')) {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  } else if (req.query.whatsupport.includes('food-meals')) {
    res.redirect('/apply/save-restore/iteration-1/money-coming-in-single');
  }
});

router.get(/asylumhowoftenSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.asylumhowoften == 'every week' || req.query.asylumhowoften == 'every 2 weeks' || req.query.asylumhowoften == 'every 4 weeks' || req.query.asylumhowoften == 'every calendar month') {
    res.redirect('/apply/save-restore/iteration-1/asylum/how-much-you-receive');
  } else {
    res.redirect('/apply/save-restore/iteration-1/asylum/how-often-receive');
  }
});

router.get(/asylumhowmuchSaveRestoreiteration1-handler/, function (req, res) {
  res.redirect('/apply/save-restore/iteration-1/answers-asylum');
});

router.get(/saveapplicationSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.saveapplication == 'yes') {
    res.redirect('/apply/save-restore/iteration-1/memorable-word');
  } else if (req.query.saveapplication == 'no') {
    res.redirect('/apply/save-restore/iteration-1/answers');
  }
});

router.get(/textemailSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.textemail == 'email' ) {
    res.redirect('/apply/save-restore/iteration-1/email');
  } else if (req.query.textemail == 'textmessage') {
    res.redirect('/apply/save-restore/iteration-1/textmessage');
  }
});

router.get(/textemailmethodSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.textemail == 'email' ) {
    res.redirect('/apply/save-restore/iteration-1/email-verify');
  } else if (req.query.textemail == 'textmessage') {
    res.redirect('/apply/save-restore/iteration-1/textmessage-verify');
  }
});

router.get(/textemailmethodBYSSaveRestoreiteration1-handler/, function (req, res) {
  if (req.query.textemail == 'email' ) {
    res.redirect('/apply/save-restore/iteration-1/email-verify-bys');
  } else if (req.query.textemail == 'textmessage') {
    res.redirect('/apply/save-restore/iteration-1/textmessage-verify-bys');
  }
});
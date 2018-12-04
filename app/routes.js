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
  } else if (req.query.incomepartner.includes('UCWTC-income')) {
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
    res.redirect('/beforeyoustart/money-from-these-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,pension-income') {
    res.redirect('/beforeyoustart/money-from-these-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,pension-income,nil-income') {
    res.redirect('/beforeyoustart/money-from-these-single');
  } else if (req.query.incomepartner.toString() == 'benefits-income,nil-income') {
    res.redirect('/beforeyoustart/money-from-these-single');
  } else if (req.query.incomepartner.toString() == 'pension-income,nil-income') {
    res.redirect('/beforeyoustart/money-from-these-single');
  } else if (req.query.incomepartner == 'pension-income') {
    res.redirect('/beforeyoustart/money-from-these-single');
  } else if (req.query.incomepartner == 'nil-income') {
    res.redirect('/beforeyoustart/money-from-these-single');
  } 
});

router.get(/whatissingleincome-handler/, function (req, res) {
  if (req.query.incomesingle.includes('earned-income')) {
    res.redirect('../kickouts/developed');
  } else if (req.query.incomesingle.includes('UCWTC-income')) {
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
    res.redirect('../../beforeyoustart/money-from-these-single');
  }
});

router.get(/asylumPartner-handler/, function (req, res) {
  if (req.query.asylumPartner == 'yes') {
    res.redirect('../../kickouts/developed');
  } else if (req.query.asylumPartner == 'no') {
    res.redirect('../../beforeyoustart/money-from-these-partner');
  }
});

router.get(/asylumdecision-handler/, function (req, res) {
  if (req.query.asylumdecision == 'still-waiting') {
    res.redirect('/beforeyoustart/asylum/who-is-supporting-you');
  } else if (req.query.asylumdecision == 'given-permission') {
    res.redirect('../../beforeyoustart/money-from-these-single');
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
    res.redirect('../../beforeyoustart/money-from-these-single');
  } else if (req.query.whatsupport.includes('prepaid-card')) {
    res.redirect('../../beforeyoustart/money-from-these-single');
  } else if (req.query.whatsupport.includes('food-meals')) {
    res.redirect('../../beforeyoustart/money-from-these-single');
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
  res.redirect('personal-pension-another-2');
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

// ************************
// MONEY FROM OTHER SOURCES
// ************************

router.get(/howpaying-handler/, function (req, res) {
  if (req.query.howpaying == 'money from friends or family') {
    res.redirect('../none/none-how-much');
  } else if (req.query.howpaying == 'savings') {
    res.redirect('../none/none-how-much');
  } else if (req.query.howpaying == 'donations') {
    res.redirect('../none/none-how-much');
  } else if (req.query.howpaying == 'none of these') {
    res.redirect('../none/none-how-supporting');
  }
});

router.get(/nonehowsupporting-handler/, function (req, res) {
  res.redirect('../none/none-how-much');
});

router.get(/nonehowmuch-handler/, function (req, res) {
  res.redirect('../none/answers');
});

// ************************
// SUBMIT APPLICATION
// ************************

router.get(/evidencebyemail-handler/, function (req, res) {
  res.redirect('../submit/declaration');
});
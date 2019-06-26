// ************************
// DATE OF BIRTH (CHECKS IF OVER A CERTAIN AGE AND SENDS THEM DOWN A DIFFERENT ROUTE)
// ************************

router.post('/version-8/gender', function (req, res) {

  var day = req.body['dob_day'],
      month = req.body['dob_month'],
      year = req.body['dob_year'];

  if ( !_isNumeric(day) && !_isNumeric(month) && !_isNumeric(year)){
    console.log('Date not provided');
    res.redirect('/version-8/date-of-birth');
  }
  else {
    var dob = new Date(year, month -1, day),
        age = _calculateAge(dob);
    res.locals.date_of_birth = _get_string_date(dob);
    console.log(res.locals.date_of_birth);
    if (age > 17){
      res.redirect('/version-8/gender');
    }
    else {
      res.redirect('/version-8/ineligible');
    }
  }
});
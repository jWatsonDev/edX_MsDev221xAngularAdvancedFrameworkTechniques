app.controller('DateController', [dateController]);

function dateController() {
  var vm = this;

  vm.selectedDate = new Date();
  vm.dateOptions = {
      showWeeks: false,
      minDate: new Date()
  };
}
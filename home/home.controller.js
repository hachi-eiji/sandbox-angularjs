class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = "";
  }

  onClickButton = function (event) {
    console.log('onClickButton on', event.detail);
    this.name = event.detail;
  }
  onClickButtonForAngularJS = function(str){
    this.name = str;
  }
}

export default HomeCtrl;
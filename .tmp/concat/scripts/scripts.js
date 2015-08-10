'use strict';
angular.module('hoh', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap.transition',
  'hoh.filters',
  'hoh.services',
  'hoh.directives'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/:lang/:page/:subPage', {
      templateUrl: 'views/pixel.html',
      controller: 'PixelCtrl'
    });
    $routeProvider.otherwise({ redirectTo: '/en/home/h' });  // >>>>>>> 24c64ddf38ce0bd044a780bb58153e05bba8baa8
  }
]);
'use strict';
/* Controllers */
var hoh = angular.module('hoh.controllers', []);
hoh.controller('Main', [
  '$scope',
  '$location',
  '$routeParams',
  'langService',
  function ($scope, $location, $routeParams, langService) {
    langService.setDict($routeParams.lang);
    langService.setPage($location.path().split('/')[2]);
    $scope.path = langService.getPage;
    // $scope.lang = langService.getDict();
    // $scope.langDict = langService.getLangDict();
    // $scope.href = function(lang, page){
    // $scope.page = $routeParams.page;
    $scope.lang = langService.getDict();
    $scope.langDict = langService.getLangDict();
    $scope.tab = $routeParams.tab;
    $scope.href = function (lang, page) {
      console.log('HREF:', lang, page);
      var url = '/' + lang + page;
      $location.path(url);
      $location.hash('top');
      $anchorScroll();
    };
    // $scope.getClass = function(page){
    $scope.activeIf = function (page) {
      var status = '';
      if (page === $scope.path()) {
        status = 'active';
      }
      return status;
    };
  }
]);
'use strict';
/* Directives */
/* angular seed app demo version directive */
angular.module('hoh.directives', []).directive('appVersion', [
  'version',
  function (version) {
    return function (scope, elm, attrs) {
      elm.text(version);
    };
  }
]);
'use strict';
/* Filters */
angular.module('hoh.filters', []).filter('interpolate', [
  'version',
  function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/gm, version);
    };
  }
]);
'use strict';
angular.module('hoh.services', []).service('langService', function () {
  console.log('Service is ok');
  var langDict = {
      'en': {},
      'fr': {}
    };
  langDict.en.next = 'fr';
  langDict.fr.next = 'en';
  langDict.en.nextLabel = 'Fran\xe7ais';
  langDict.fr.nextLabel = 'English';
  langDict.en.lang = 'en';
  langDict.fr.lang = 'fr';
  langDict.en.french = 'French';
  langDict.fr.french = 'Fran\xe7ais';
  langDict.en.english = 'English';
  langDict.fr.english = 'Anglais';
  langDict.en.more = 'more';
  langDict.fr.more = 'plus';
  langDict.en.name = 'Haven Of Hope';
  langDict.fr.name = 'Havre d\'Esp\xe9rance';
  langDict.en.subtitle = 'Counselling And Rehabilitation Of Teenage Mothers';
  langDict.fr.subtitle = 'Relation d\'Aide et R\xe9int\xe9gration de Jeunes-filles-m\xe8res';
  langDict.en.welcome = 'Welcome';
  langDict.fr.welcome = 'Bienvenue';
  langDict.en.introduction = 'We are an independent, nonprofit, nonpartisan and nonsectarian charity foundation in Cameroon, created by a group of benevolent friends whose aim is to contribute in a tangible manner, to improve the living conditions of teenage mothers, who may have lost interest in active life due to unexpected motherhood.';
  langDict.fr.introduction = 'Havre d\'Esp\xe9rance est une fondation caritative, ind\xe9pendente, \xe0 but non lucratif, non partisan et non confessionnel avec le si\xe8ge administratif au Cameroun, cr\xe9e par un groupe d\'amis bienveillants dont le but est de contribuer de mani\xe8re tangible, \xe0 am\xe9liorer les conditions de vie des jeunes-filles-m\xe9res adolescentes, qui peuvent avoir perdu tout int\xe9r\xeat dans la vie active en raison d\'une maternit\xe9 pr\xe9coce ou inattendue.  ';
  langDict.en.viewdetails = 'Learn More';
  langDict.fr.viewdetails = 'En d\xe9tail';
  langDict.en.callus = 'Please call or email us at:';
  langDict.fr.callus = 'S\'il vous pla\xeet appelez ou \xe9crivez-nous \xe0:';
  langDict.en.eventlabel = 'Events';
  langDict.fr.eventlabel = '\xc9V\xc9NEMENTS';
  langDict.en.bulletinlabel = 'Monthly Newsletters';
  langDict.fr.bulletinlabel = 'Bulletins d\'Information';
  langDict.en.meettheteam = 'Meet The Team';
  langDict.fr.meettheteam = langDict.en.meettheteam;
  langDict.en.teenmothers = 'Teen Mothers';
  langDict.fr.teenmothers = langDict.en.teenmothers;
  langDict.en.moneytransfer = 'Money Transfer';
  langDict.fr.moneytransfer = 'Transfert d\'argent';
  langDict.en.bank = 'Bank';
  langDict.fr.bank = 'Banque';
  langDict.en.headquarter = 'Headquarter';
  langDict.fr.headquarter = 'Si\xe8ge sociale';
  langDict.en.office = 'Branch Office';
  langDict.fr.office = 'Agence de';
  langDict.en.bankcode = 'Bank Code';
  langDict.fr.bankcode = 'Code Banque';
  langDict.en.bankbranchcode = 'Branch Code';
  langDict.fr.bankbranchcode = 'Code Guichet';
  langDict.en.bankaccountnumber = 'Account Number';
  langDict.fr.bankaccountnumber = 'Num\xe9ro de Compte';
  langDict.en.bankkey = 'Key';
  langDict.fr.bankkey = 'Cl\xe9';
  langDict.en.bankswiftcode = 'Swift Code';
  langDict.fr.bankswiftcode = 'Code Swift';
  langDict.en.beneficiary = 'Beneficiary';
  langDict.fr.beneficiary = 'B\xe9n\xe9ficiaire';
  langDict.en.july2013 = {
    'label': 'Bulletin July 2013',
    'url': 'media/PDF%20English/BULLETIN%2007-2013.pdf'
  };
  langDict.fr.july2013 = {
    'label': 'Bulletin Julliet 2013',
    'url': 'media/PDF%20French/BULLETIN%2007-2013.pdf'
  };
  langDict.en.nov2013 = {
    'label': 'Presentation To Charismagex Nov 2013',
    'url': 'media/PDF English/REPORT 12-2013 EN.pdf'
  };
  langDict.fr.nov2013 = {
    'label': 'Pr\xe9sentation \xc0 Charismagex Nov 2013',
    'url': 'media/PDF French/REPORT 12-2013 FR.pdf'
  };
  langDict.en.dec2013 = {
    'label': 'Bulletin December 2013',
    'url': 'media/PDF English/BULLETIN 12-2013 EN.pdf'
  };
  langDict.fr.dec2013 = {
    'label': 'Bulletin Decembre 2013',
    'url': 'media/PDF French/BULLETIN 12-2013 FR.pdf'
  };
  // PARTIALS
  // well: donate
  langDict.en.donatemessage = 'Your donation directly helps teen mothers in need and it keeps our charity alive. Donate now to help teen mothers gain the tools to become financially secure.';
  langDict.fr.donatemessage = 'Votre don est destin\xe9 \xe0 aider les m\xe8res adolescentes qui sont dans le besoin, et assure la p\xe9rennit\xe9 de notre  \u0153uvre caritative. Faites un don maintenant et aider une m\xe8re adolescente \xe0 obtenir les outils n\xe9cessaires pour assurer son autonomie financi\xe8re.';
  // well: joinus
  langDict.en.joinusmessage = 'If you are a teen mother and you\'re ready to build your future, come join us! We will help you gain the skills, tools, and confidence you need to succeed.';
  langDict.fr.joinusmessage = 'Etes-vous une m\xe8re adolescente\xa0? D\xe9sirez vous construire votre avenir\xa0? Rejoignez nous donc\xa0! Nous vous aiderons \xe0 acqu\xe9rir les connaissances techniques et la confiance n\xe9cessaire pour r\xe9ussir.';
  langDict.en.joinus = 'Join Us';
  langDict.fr.joinus = 'Rejoignez-nous';
  // well: volunteer
  langDict.en.volunteermessage = 'We are always looking for volunteers to help teach classes and grow our charity. If you want to make a real difference in young womens lives, volunteer today!';
  langDict.fr.volunteermessage = 'Nous recherchons des volontaires pour donner des cours, et aider \xe0 d\xe9velopper nos  actions caritatives. D\xe9sirez-vous faire la diff\xe9rence dans la vie d\'une jeune-fille-m\xe8re? Prenez contacte avec nous d\xe8s suite.  Appelez ou \xe9crivez nous \xe0:\xa0admin@havenofhopetm.org';
  langDict.en.volunteer = 'Volunteer';
  langDict.fr.volunteer = 'Volontaire';
  // Events
  langDict.en.mbo = {
    'label': 'National days manifestations',
    'url': 'media/PDF English/20May15-Mbororo.pdf'
  };
  langDict.fr.mbo = {
    'label': 'National days manifestations',
    'url': 'media/PDF English/20May15-Mbororo.pdf'
  };
  // langDict.en.events2={"label":"20May15-Mbororo","url":"media/PDF English/20May15-Mbororo.pdf"};
  // langDict.fr.events2={"label":"20May15-Mbororo","url":"media/PDF English/20May15-Mbororo.pdf"};
  langDict.en.labourday = {
    'label': 'Labour day 2015',
    'url': 'media/PDF English/Labour day2015.pdf'
  };
  langDict.fr.labourday = {
    'label': 'Labour day2015',
    'url': 'media/PDF English/Labour day2015.pdf'
  };
  langDict.en.specialassistance = {
    'label': 'NGO Partnership',
    'url': 'media/PDF English/Special assistance.pdf'
  };
  langDict.fr.specialassistance = {
    'label': 'NGO Partnership',
    'url': 'media/PDF English/Special assistance.pdf'
  };
  // PAGES
  // page: Donate
  langDict.en.donate = 'Donate';
  langDict.fr.donate = 'Faites un Don';
  langDict.en.donatemessagelong = 'Your donation directly helps teen mothers in need. We thank you for making a difference in young womens lives. To donate, please email us at:';
  langDict.fr.donatemessagelong = 'Votre don sert uniquement \xe0 aider les jeunes-filles-m\xe8res dans le besoin. Nous vous remercions de faire la diff\xe9rence dans la vie des m\xe8res adolescentes. Pour faire un don, contactez-nous:';
  // page: Publications
  langDict.en.annual2014 = {
    'label': 'Annual Report-2014',
    'url': 'media/PDF English/annualreport-2014.pdf'
  };
  langDict.fr.annual2014 = {
    'label': 'RAPPORT-ANNUEL-2014.pdf',
    'url': 'media/PDF French/RAPPORT-ANNUEL-2014.pdf'
  };
  langDict.en.annual2013 = {
    'label': 'Annual Report 2013',
    'url': 'media/PDF English/ANNUAL 2013 v2 EN.pdf'
  };
  langDict.fr.annual2013 = {
    'label': 'Rapport Annuel 2013',
    'url': 'media/PDF French/ANNUAL 2013 v2 FR.pdf'
  };
  langDict.en.march2013 = {
    'label': 'Bulletin March 2013',
    'url': 'media/PDF%20English/BULLETIN%2003-2013.pdf'
  };
  langDict.fr.march2013 = {
    'label': 'Bulletin Mars 2013',
    'url': 'media/PDF%20French/BULLETIN%2003-2013.pdf'
  };
  // page: About
  langDict.en.objectivelabel = 'Objectives';
  langDict.fr.objectivelabel = 'LES OBJECTIFS';
  langDict.en.objectivesummary = 'In order to achieve our goals, the following objectives have been set';
  langDict.fr.objectivesummary = 'Les objectifs de HAVEN OF HOPE (HOH) (Havre d\'Esp\xe9rance) sont les suivants:';
  langDict.en.objective1 = {
    label: 'Self Confidence',
    text: 'To help single teenage mothers who are finding it difficult to cope with life as a result of unprepared motherhood to regain self confidence and self esteem through counselling sessions'
  };
  langDict.fr.objective1 = {
    label: 'Estime de Soi',
    text: 'Aider les jeunes-filles-m\xe8res c\xe9libataires qui ont du mal \xe0 faire face \xe0 la vie en raison d\'une maternit\xe9 pr\xe9coce et non pr\xe9par\xe9e \xe0 reprendre confiance en elles et de l\'estime de soi gr\xe2ce \xe0 des s\xe9ances d\'\xe9coutes et de conseils.'
  };
  langDict.en.objective2 = {
    label: 'Financial Security',
    text: 'To motivate young teenage mothers who are facing financial difficulties as a result of unprepared motherhood to learn a trade which will enable them to become self-sufficient'
  };
  langDict.fr.objective2 = {
    label: 'Autonomie Financi\xe8re',
    text: 'Motiver les m\xe8res adolescentes qui sont confront\xe9es \xe0 des difficult\xe9s financi\xe8res en raison de leur maternit\xe9 pr\xe9coce \xe0 apprendre un m\xe9tier qui leur permettra de devenir autonomes.'
  };
  langDict.en.objective3 = {
    label: 'Vocational Training',
    text: 'To assess their potential skills and assist them to gain vocational training in view of becoming self reliant'
  };
  langDict.fr.objective3 = {
    label: 'Formation Professionnelle',
    text: '\xc9valuer leurs comp\xe9tences potentielles et les aider \xe0 acqu\xe9rir une formation professionnelle en vue de devenir autonomes.'
  };
  langDict.en.objective4 = {
    label: 'Entrepreneurship',
    text: 'To help those who have received training set up their own businesses in view of their reintegration into community life'
  };
  langDict.fr.objective4 = {
    label: 'Esprit D\'Entreprise',
    text: 'Aider celles qui ont re\xe7u une formation \xe0 d\xe9marrer leurs propres affaires en vue de leur r\xe9insertion dans la vie de la communaut\xe9.'
  };
  langDict.en.objective5 = {
    label: 'Hope',
    text: 'To counsel teenage pregnant girls who are in a state of dispair due to unexpected or unwanted pregnancy to enable them come to terms with their condition'
  };
  langDict.fr.objective5 = {
    label: 'S\'Accepter',
    text: 'Conseiller les adolescentes enceintes qui sont dans un \xe9tat de d\xe9sespoir en raison de la grossesse inattendue et non-d\xe9sir\xe9e pour leur permettre \xe0 se r\xe9concilier avec leur \xe9tat.'
  };
  var lang = { dict: langDict['en'] };
  var page = 'home';
  var version = 'app.css';
  return {
    getLangDict: function () {
      return langDict;
    },
    getDict: function () {
      return lang;
    },
    setDict: function (l) {
      lang.dict = langDict[l];
    },
    getPage: function () {
      return page;
    },
    setPage: function (p) {
      page = p;
    }
  };
});
'use strict';
angular.module('hoh').controller('MainCtrl', [
  '$scope',
  '$location',
  '$routeParams',
  'langService',
  'Pixel',
  function ($scope, $location, $routeParams, langService, Pixel) {
    console.log('RouteParams', $routeParams);
    $scope.data = Pixel.data;
    langService.setDict($scope.language);
    // langService.setPage($scope.page);
    $scope.lang = langService.getDict();
    $scope.langDict = langService.getLangDict();  // $scope.open = function(params){
                                                  //  angular.forEach(params, function(page, pageType){
                                                  //  	$scope[pageType] = page;
                                                  //  });
                                                  //  if(params.language){
                                                  // 		langService.setDict(params.language);
                                                  //  }
                                                  // };
  }
]);
'use strict';
angular.module('hoh').controller('PixelCtrl', [
  '$scope',
  '$location',
  '$anchorScroll',
  '$routeParams',
  'Pixel',
  'langService',
  function ($scope, $location, $anchorScroll, $routeParams, Pixel, langService) {
    console.log('PIXEL: routeParams', $routeParams);
    Pixel.data.page = $routeParams.page;
    Pixel.data.subPage = $routeParams.subPage;
    Pixel.data.lang = $routeParams.lang;
    langService.setDict($routeParams.lang);
    // $location.hash('top');
    $anchorScroll();
  }
]);
'use strict';
angular.module('hoh').service('Pixel', function Pixel() {
  var self = { data: {} };
  self.data.date = new Date();
  self.data.page = '';
  self.data.subPage = '';
  self.data.lang = '';
  return self;
});
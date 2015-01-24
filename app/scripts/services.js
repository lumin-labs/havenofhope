'use strict';

angular.module('hoh.services', []).service('langService', function(){

  var langDict = {};
      langDict.en = {
        'next':'fr',
        'nextLabel': 'Français',
        'lang':'en',
        'french':'French',
        'english':'English',
        // 'donate':'Donate',
        'headquarter':'headquarter',
        'office':'Branch Office',
        'more':'more',
        'name':'Haven Of Hope',
        'subtitle':"Counselling And Rehabilitation Of Teenage Mothers",
        'welcome':'Welcome',
        "introduction":"We are an independent, nonprofit, nonpartisan and nonsectarian charity foundation in Cameroon, created by a group of benevolent friends whose aim is to contribute in a tangible manner, to improve the living conditions of teenage mothers, who may have lost interest in active life due to unexpected motherhood.",
        "viewdetails":"Learn More",
        "callus":"Please call or email us at:",
        "volunteermessage":"We are always looking for volunteers to help teach classes and grow our charity. If you want to make a real difference in young women's lives, volunteer today!",
        "joinusmessage":"If you are a teen mother and you're ready to build your future, come join us! We will help you gain the skills, tools, and confidence you need to succeed.",
        "donatemessage":"Your donation directly helps teen mothers in need and it keeps our charity alive. Donate now to help teen mothers gain the tools to become financially secure.",
        "donatemessagelong":"Your donation directly helps teen mothers in need. We thank you for making a difference in young womens lives. To donate, please email us at:",
        "objectivelabel":"OBJECTIVES",
        "objectivesummary":"In order to achieve our goals, the following objectives have been set",
        "objective1":"To help single teenage mothers who are finding it difficult to cope with life as a result of unprepared motherhood to regain self confidence and self esteem through counselling sessions",
        "objective2":"To motivate young teenage mothers who are facing financial difficulties as a result of unprepared motherhood to learn a trade which will enable them to become self-sufficient",
        "objective3":"To assess their potential skills and assist them to gain vocational training in view of becoming self reliant",
        "objective4":"To help those who have received training set up their own businesses in view of their reintegration into community life",
        "objective5":"To counsel teenage pregnant girls who are in a state of dispair due to unexpected or unwanted pregnancy to enable them come to terms with their condition",
        "bulletinlabel":"Monthly Newsletters",
        "meettheteam":"Meet The Team",
        "donate":"Donate",
        "volunteer":"Volunteer",
        "joinus":"Join Us",
        "teenmothers":"Teen Mothers",  
        "moneytransfer":"Money Transfer",
        "bank":"Bank",
        "bankcode":"Bank Code",
        "bankbranchcode":"Branch Code",
        "bankaccountnumber":"Account Number",
        "bankkey":"Key",
        "bankswiftcode":"Swift Code",
        "beneficiary":"Beneficiary",
        "march2013":{"label":"Bulletin March 2013",
                     "url":"media/PDF%20English/BULLETIN%2003-2013.pdf"},
        "july2013":{"label":"Bulletin July 2013",
                    "url":"media/PDF%20English/BULLETIN%2007-2013.pdf"},
        "nov2013":{"label":"Presentation To Charismagex Nov 2013",
                   "url":"media/PDF English/REPORT 12-2013 EN.pdf"},
        "dec2013":{"label":"Bulletin December 2013",
                   "url":"media/PDF English/BULLETIN 12-2013 EN.pdf"},
        "annual2013":{"label":"Annual Report 2013",
                   "url":"media/PDF English/ANNUAL 2013 v2 EN.pdf"},
        "annual2014":{"label":"Annual Report 2014",
                   "url":"media/PDF English/annualreport-2014.pdf"}           

      }

      langDict.fr = {
        'next':'en',
        'nextLabel': 'English',
        'lang':'fr',
        'french':'Français',
        'english':'Anglais',

        'headquarter':'Siège sociale',
        'office':'Agence de',
        'more':'plus',
        'name':"Havre d'Espérance",
        'subtitle':"Relation d'Aide et Réintégration de Jeunes-filles-mères",
        'welcome':'Bienvenue',
        "introduction":"Havre d'Espérance est une fondation caritative, indépendente, à but non lucratif, non partisan et non confessionnel avec le siège administratif au Cameroun, crée par un groupe d'amis bienveillants dont le but est de contribuer de manière tangible, à améliorer les conditions de vie des jeunes-filles-méres adolescentes, qui peuvent avoir perdu tout intérêt dans la vie active en raison d'une maternité précoce ou inattendue.  ",
        "viewdetails":"En détail",
        "callus":"Etes-vous une mère adolescente ? Désirez vous construire votre avenir ? Rejoignez nous donc ! Nous vous aiderons à acquérir les connaissances techniques et la confiance nécessaire pour réussir. S'il vous plaît appelez ou écrivez-nous à:",
        // "donate":"Faites un Don",
        "volunteermessage":"Nous sommes toujours à la recherche de bénévoles pour aider les classes d'enseignants et développer notre charité. Si vous voulez faire une réelle différence dans les jeunes femmes vit, bénévole aujourd'hui!",
        //"volunteermessage":langDict.en.volunteermessage,
        "joinusmessage":"Si vous êtes une mère adolescente et vous êtes prête à construire votre avenir, venez nous rejoindre! Nous allons vous aider à acquérir les compétences, les outils et la confiance dont vous avez besoin pour réussir.",
        // "joinusmessage":langDict.en.joinusmessage,
        "donatemessage":"Votre don permet à notre organisme de bienfaisance en vie. Faire un don pour aider les mères adolescentes à acquérir les outils nécessaires pour devenir financièrement sécurisé.",
        // "donatemessage":langDict.en.donatemessage,
        "donatemessagelong":"Votre don contribue directement mères adolescentes dans le besoin. Nous vous remercions de faire une différence dans la vie des jeunes de la femme. Pour faire un don, contactez-nous :",
        // "donatemessagelong":langDict.en.donatemessagelong,
        
        "objectivelabel":"LES OBJECTIFS",
        "objectivesummary":"Les objectifs de HAVEN OF HOPE (HOH) (Havre d'Espérance) sont les suivants:",
        "objective1":"Aider les jeunes-filles-mères célibataires qui ont du mal à faire face à la vie en raison d'une maternité précoce et non préparée à reprendre confiance en elles et de l'estime de soi grâce à des séances d'écoutes et de conseils",
        "objective2":"Motiver les mères adolescentes qui sont confrontées à des difficultés financières en raison de leur maternité précoce à apprendre un métier qui leur permettra de devenir autonomes",
        "objective3":"Évaluer leurs compétences potentielles et les aider à acquérir une formation professionnelle en vue de devenir autonomes",
        "objective4":"Aider celles qui ont reçu une formation à démarrer leurs propres affaires en vue de leur réinsertion dans la vie de la communauté",
        "objective5":"Conseiller les adolescentes enceintes qui sont dans un état de désespoir en raison de la grossesse inattendue et non-désirée pour leur permettre à se réconcilier avec leur état",
        "bulletinlabel":"Bulletins d'Information",
        "meettheteam":"Rencontrez l'équipe",
        // "meettheteam":langDict.en.meettheteam,
        
        "donate":"Faites un Don",
        //"donate":langDict.en.donate,
        "volunteer":"Volontaire",
        //"volunteer":langDict.en.volunteer,
        "joinus":"Rejoignez-nous",
        //"joinus":langDict.en.joinus,

        "teenmothers":"Les mères adolescentes",
        // "teenmothers":langDict.en.teenmothers,
        "moneytransfer":"Transfert d'argent",
        "bank":"Banque",
        "bankcode":"Code Banque",
        "bankbranchcode":"Code Guichet",
        "bankaccountnumber":"Numéro de Compte",
        "bankkey":"Clé",
        "bankswiftcode":"Code Swift",
        "beneficiary":"Bénéficiaire",
        "march2013":{"label":"Bulletin Mars 2013",
                     "url":"media/PDF%20French/BULLETIN%2003-2013.pdf"},
        "july2013":{"label":"Bulletin Julliet 2013",
                    "url":"media/PDF%20French/BULLETIN%2007-2013.pdf"},
        "nov2013":{"label":"Présentation À Charismagex Nov 2013",
                    "url":"media/PDF French/REPORT 12-2013 FR.pdf"},
        "dec2013":{"label":"Bulletin Decembre 2013",
                    "url":"media/PDF French/BULLETIN 12-2013 FR.pdf"},
        "annual2013":{"label":"Rapport Annuel 2013",
                      "url":"media/PDF English/ANNUAL 2013 v2 EN.pdf"},
        "annual2014":{"label":"Rapport Annuel 2014",
                      "url":"media/PDF French/RAPPORT-ANNUEL-2014.pdf"}              
      
      }

  var lang = {dict:langDict['en']};

  var page = 'home';

  var version = "app.css";

  return {
      getLangDict: function(){return langDict},
      getDict: function(){return lang},
      setDict: function(l){lang.dict = langDict[l]},
      getPage: function(){return page},
      setPage: function(p){page = p}
  };
}); 

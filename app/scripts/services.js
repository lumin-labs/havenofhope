'use strict';


angular.module('hoh.services', []).service('langService', function(){

  console.log("Service is ok");

  var langDict = {'en':{}, 'fr':{}};
      
  langDict.en.next = 'fr';
  langDict.fr.next = 'en';

  langDict.en.nextLabel = 'Français';
  langDict.fr.nextLabel= 'English';

  langDict.en.lang  = 'en';
  langDict.fr.lang='fr';

  langDict.en.french='French';
  langDict.fr.french='Français';
  langDict.en.english='English';
  langDict.fr.english='Anglais';
  langDict.en.more='more';
  langDict.fr.more='plus';
  
  langDict.en.name= 'Haven Of Hope';
  langDict.fr.name="Havre d'Espérance";

  langDict.en.subtitle="Counselling And Rehabilitation Of Teenage Mothers";
  langDict.fr.subtitle="Relation d'Aide et Réintégration de Jeunes-filles-mères";
  langDict.en.welcome='Welcome';
  langDict.fr.welcome='Bienvenue';
  langDict.en.introduction="We are an independent, nonprofit, nonpartisan and nonsectarian charity foundation in Cameroon, created by a group of benevolent friends whose aim is to contribute in a tangible manner, to improve the living conditions of teenage mothers, who may have lost interest in active life due to unexpected motherhood.";
  langDict.fr.introduction="Havre d'Espérance est une fondation caritative, indépendente, à but non lucratif, non partisan et non confessionnel avec le siège administratif au Cameroun, crée par un groupe d'amis bienveillants dont le but est de contribuer de manière tangible, à améliorer les conditions de vie des jeunes-filles-méres adolescentes, qui peuvent avoir perdu tout intérêt dans la vie active en raison d'une maternité précoce ou inattendue.  ";
  langDict.en.viewdetails="Learn More";
  langDict.fr.viewdetails="En détail";
  langDict.en.callus="Please call or email us at:";
  langDict.fr.callus="S'il vous plaît appelez ou écrivez-nous à:";
  langDict.en.bulletinlabel="Monthly Newsletters";
  langDict.fr.bulletinlabel="Bulletins d'Information";
  langDict.en.meettheteam="Meet The Team";
  langDict.fr.meettheteam=langDict.en.meettheteam;
  langDict.en.teenmothers="Teen Mothers";  
  langDict.fr.teenmothers=langDict.en.teenmothers;
  langDict.en.moneytransfer="Money Transfer";
  langDict.fr.moneytransfer="Transfert d'argent";
  langDict.en.bank="Bank";
  langDict.fr.bank="Banque";
  langDict.en.headquarter="Headquarter";
  langDict.fr.headquarter="Siège sociale";
  langDict.en.office="Branch Office";
  langDict.fr.office="Agence de";
  langDict.en.bankcode="Bank Code";
  langDict.fr.bankcode="Code Banque";
  langDict.en.bankbranchcode="Branch Code";
  langDict.fr.bankbranchcode="Code Guichet";
  langDict.en.bankaccountnumber="Account Number";
  langDict.fr.bankaccountnumber="Numéro de Compte";
  langDict.en.bankkey="Key";
  langDict.fr.bankkey="Clé";
  langDict.en.bankswiftcode="Swift Code";
  langDict.fr.bankswiftcode="Code Swift";
  langDict.en.beneficiary="Beneficiary";
  langDict.fr.beneficiary="Bénéficiaire";
  langDict.en.july2013={"label":"Bulletin July 2013","url":"media/PDF%20English/BULLETIN%2007-2013.pdf"};
  langDict.fr.july2013={"label":"Bulletin Julliet 2013","url":"media/PDF%20French/BULLETIN%2007-2013.pdf"};
  langDict.en.nov2013={"label":"Presentation To Charismagex Nov 2013", "url":"media/PDF English/REPORT 12-2013 EN.pdf"};
  langDict.fr.nov2013={"label":"Présentation À Charismagex Nov 2013","url":"media/PDF French/REPORT 12-2013 FR.pdf"};
  langDict.en.dec2013 ={"label":"Bulletin December 2013", "url":"media/PDF English/BULLETIN 12-2013 EN.pdf"};
  langDict.fr.dec2013={"label":"Bulletin Decembre 2013","url":"media/PDF French/BULLETIN 12-2013 FR.pdf"};
        
     
// PARTIALS

  // well: donate
  langDict.en.donatemessage="Your donation directly helps teen mothers in need and it keeps our charity alive. Donate now to help teen mothers gain the tools to become financially secure.";
  langDict.fr.donatemessage="Votre don est destiné à aider les mères adolescentes qui sont dans le besoin, et assure la pérennité de notre  œuvre caritative. Faites un don maintenant et aider une mère adolescente à obtenir les outils nécessaires pour assurer son autonomie financière.";
  
  // well: joinus
  langDict.en.joinusmessage="If you are a teen mother and you're ready to build your future, come join us! We will help you gain the skills, tools, and confidence you need to succeed.";
  langDict.fr.joinusmessage='Etes-vous une mère adolescente ? Désirez vous construire votre avenir ? Rejoignez nous donc ! Nous vous aiderons à acquérir les connaissances techniques et la confiance nécessaire pour réussir.' ;
  langDict.en.joinus="Join Us";
  langDict.fr.joinus='Rejoignez-nous';

  // well: volunteer
  langDict.en.volunteermessage="We are always looking for volunteers to help teach classes and grow our charity. If you want to make a real difference in young womens lives, volunteer today!";
  langDict.fr.volunteermessage="Nous recherchons des volontaires pour donner des cours, et aider à développer nos  actions caritatives. Désirez-vous faire la différence dans la vie d'une jeune-fille-mère? Prenez contacte avec nous dès suite.  Appelez ou écrivez nous à: admin@havenofhopetm.org";
  langDict.en.volunteer="Volunteer";
  langDict.fr.volunteer='Volontaire' ;

// PAGES

  // page: Donate
  langDict.en.donate="Donate";
  langDict.fr.donate="Faites un Don";

  langDict.en.donatemessagelong="Your donation directly helps teen mothers in need. We thank you for making a difference in young womens lives. To donate, please email us at:";
  langDict.fr.donatemessagelong="Votre don sert uniquement à aider les jeunes-filles-mères dans le besoin. Nous vous remercions de faire la différence dans la vie des mères adolescentes. Pour faire un don, contactez-nous:";

  // page: Publications
  langDict.en.annual2014={"label":"annualreport-2014","url":"media/PDF English/annualreport-2014.pdf"};
  langDict.fr.annual2014={"label":"RAPPORT-ANNUEL-2014.pdf","url":"media/PDF French/RAPPORT-ANNUEL-2014.pdf"};
  langDict.en.annual2013={"label":"Annual Report 2013","url":"media/PDF English/ANNUAL 2013 v2 EN.pdf"};
  langDict.fr.annual2013={"label":"Rapport Annuel 2013","url":"media/PDF French/ANNUAL 2013 v2 FR.pdf"};
  langDict.en.march2013 = {"label":"Bulletin March 2013", "url":"media/PDF%20English/BULLETIN%2003-2013.pdf"};
  langDict.fr.march2013 = {"label":"Bulletin Mars 2013",  "url":"media/PDF%20French/BULLETIN%2003-2013.pdf"};

  // page: About 
  langDict.en.objectivelabel="Objectives";
  langDict.fr.objectivelabel="LES OBJECTIFS";
  langDict.en.objectivesummary="In order to achieve our goals, the following objectives have been set";
  langDict.fr.objectivesummary="Les objectifs de HAVEN OF HOPE (HOH) (Havre d'Espérance) sont les suivants:";
  langDict.en.objective1={
    label:"Self Confidence",
    text:"To help single teenage mothers who are finding it difficult to cope with life as a result of unprepared motherhood to regain self confidence and self esteem through counselling sessions"};
  langDict.fr.objective1={
    label:'Estime de Soi',
    text:"Aider les jeunes-filles-mères célibataires qui ont du mal à faire face à la vie en raison d'une maternité précoce et non préparée à reprendre confiance en elles et de l'estime de soi grâce à des séances d'écoutes et de conseils."};
  langDict.en.objective2={
    label:"Financial Security",
    text:"To motivate young teenage mothers who are facing financial difficulties as a result of unprepared motherhood to learn a trade which will enable them to become self-sufficient"};
  langDict.fr.objective2={
  label:'Autonomie Financière',
  text:"Motiver les mères adolescentes qui sont confrontées à des difficultés financières en raison de leur maternité précoce à apprendre un métier qui leur permettra de devenir autonomes."};
  langDict.en.objective3={
  label:'Vocational Training',
  text:"To assess their potential skills and assist them to gain vocational training in view of becoming self reliant"};
  langDict.fr.objective3={
  label:'Formation Professionnelle',
  text:"Évaluer leurs compétences potentielles et les aider à acquérir une formation professionnelle en vue de devenir autonomes."};
  langDict.en.objective4={
  label:'Entrepreneurship',
  text:"To help those who have received training set up their own businesses in view of their reintegration into community life"};
  langDict.fr.objective4={
  label:"Esprit D'Entreprise",
  text:"Aider celles qui ont reçu une formation à démarrer leurs propres affaires en vue de leur réinsertion dans la vie de la communauté."};
  langDict.en.objective5={
  label:'Hope',
  text:"To counsel teenage pregnant girls who are in a state of dispair due to unexpected or unwanted pregnancy to enable them come to terms with their condition"};
  langDict.fr.objective5={
  label:"S'Accepter",
  text:"Conseiller les adolescentes enceintes qui sont dans un état de désespoir en raison de la grossesse inattendue et non-désirée pour leur permettre à se réconcilier avec leur état."};
  

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

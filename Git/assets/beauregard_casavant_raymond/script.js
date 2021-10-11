let stevenDead = false;
let chaptersObj = {
  reveil: {
    subtitle: "Réveil",
    text: `Lors de votre réveil, vous remarquez être dans une clairière verdoyante. Tout d'un coup, un homme sort du couvert des bois, un couteau à la main et l'air menaçant.`,
    img: "images/steven_reveil.png",
    options: [
      {
        text: "flirter",
        action: "gotochapter(`slave`)",
      },
      {
        text: "faire connaissance",
        action: "gotochapter(`discuter`)",
      },
      {
        text: "insulter",
        action: "gotochapter(`insulte`)",
      },
    ],
  },

  slave: {
    subtitle: "Réduit/e en esclavage!",
    text: `Totalement immunisé contre votre charme, Steven vous attrape par la gorge et vous fait perdre connaissance. Vous vous réveillez dans une cage, menottes aux poignets et aux pieds, en route vers un marché d'esclaves.`,
    img: "images/slave_ending.png",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  insulte: {
    subtitle: "Sauvé par l'audace",
    text: `Face à votre audace, Steven vous enrôle pour assassiner un prince d'une région avoisinante. En souriant, il vous pointe la voie à suivre du bout de son couteau.`,
    img: "images/steven_2.jpg",
    options: [
      {
        text: "continuer",
        action: "gotochapter(`meurtre`)",
      },
    ],
  },

  discuter: {
    subtitle: "La prudence est de mise...",
    text: `Vous demandez qui il est. Steven soupire et répond avec un sourire en coin :
      - Tu es bien prudente, mais nous ferons connaissance bientôt...
      et disparaît aussi soudainement qu'il est arrivé.`,
    img: "images/steven_prudence.png",
    options: [
      {
        text: "continuer",
        action: "gotochapter(`stevenAttack`)",
      },
    ],
  },

  meurtre: {
    subtitle: "Rencontre forcée",
    text: `Après plusieurs heures de marche, vous arrivez près d'un terrain d'entraînement. Steven vous pointe un homme au loin et vous remet un couteau. Vous allez à la rencontre de l'homme, qui vous accueuille chaleureusement.`,
    img: "images/geordo_meet.jpg",
    options: [
      {
        text: "flirter",
        action: "gotochapter(`fauxflirt`)",
      },
      {
        text: "assassiner",
        action: "gotochapter(`poignarde`)",
      },
    ],
  },

  poignarde: {
    subtitle: "À en perdre la tête!",
    text: `Vous tentez d'assassiner Geordo, mais à la seconde où vous sortez votre couteau, le sourire du prince disparaît et vous voyez soudainement le monde tourner. Votre tête touche le sol avant que vous vous rendiez compte de votre mort.`,
    img: "images/geordo_murder.jpg",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  fauxflirt: {
    subtitle: "Une décision déchirante",
    text: `Quelques mois plus tard, après tombé sous le charme l'un de l'autre, vous croisez Steven qui vous rapelle votre travail. Un peu plus tard, vous vous dirigez vous la demeure de Geordo le coeur lourd.`,
    img: "images/fake_flirt.jpg",
    options: [
      {
        text: "continuer",
        action: "gotochapter(`opportunite`)",
      },
    ],
  },

  opportunite: {
    subtitle: "Une opportunité se présente",
    text: `Aussitôt arrivé chez Geordo, il vous accueuille en vous enlaçant et vous déclare son amour. Vous sentez un poids vous envahir alors que vous sentez le couteau contre votre cuisse, à portée de main.`,
    img: "images/opportunity.jpg",
    options: [
      {
        text: "poignarder",
        action: "gotochapter(`geordeath1`)",
      },
      {
        text: "le rejeter",
        action: "gotochapter(`cruelRefuse`)",
      },
      {
        text: "aimer en retour",
        action: "gotochapter(`jalousie`)",
      },
    ],
  },

  jalousie: {
    subtitle: "Suivre son coeur jusqu'au bout",
    text: `Vous acceptez son amour et passez une superbe soirée romantique. Alors que vous dormez à la belle étoile, enlacés, Steven sort de l'ombre. Avec un sourire machiavélique, ils vous poignarde tout les deux et disparaît dans la nuit en riant.`,
    img: "images/jealousy.jpg",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  geordeath1: {
    subtitle: "Méfait accompli!",
    text: `Les larmes aux yeux mais d'un mouvement fluide, vous prenez le couteau et transpercez la gorge du prince. Il s'écroule, serrant votre main et son regard laisse une étincelle de désespoir avant de s'éteindre à jamais.`,
    img: "images/stab.png",
    options: [
      {
        text: "continuer",
        action: "gotochapter(`keith`)",
      },
    ],
  },

  cruelRefuse: {
    subtitle: "Un coeur déchiré",
    text: `Vous le repoussez et lui répondez que vous ne l'avez jamais aimé. Sous le choc, Geordo se retourne en silence et marche lentement vers la cuisine. Vous entendez un bruit sourd de corps qui tombe. Avec un sourire en coin et une larme à l'oeil, vous sortez rejoindre Steven qui vous attend plus loin.`,
    img: "images/geordo_suicide.png",
    options: [
      {
        text: "continuer",
        action: "gotochapter(`loveSteven`)",
      },
    ],
  },

  loveSteven: {
    subtitle: "une étrange déclaration",
    text: `Vous marchez avec Steven pendant un moment. Vous arrivez dans une clairière qui a un air familier. Steven vous félicite, admiratif de votre cruauté envers Geordo, et vous demande de passer le restant de votre vie à ses côtés.`,
    img: "images/wierd_love.jpg",
    options: [
      {
        text: "rejeter",
        action: "gotochapter(`arracher`)",
      },
      {
        txt: "aimer en retour",
        action: "gotochapter(`finSteven`)",
      },
    ],
  },

  finSteven: {
    subtitle: "une vie de folie!",
    text: `Vous prenez Steven dans vos bras et vous l'enlacez. Vous vous sauvez ensemble dans la nuit. Pour le reste de votre vie, vous et Steven parcourez le monde à la recherche de cibles à manipuler et assassiner.`,
    img: "images/ending_steven.jpg",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  arracher: {
    subtitle: "une peine déchirante!",
    text: `Vous repoussez Steven. D'un mouvement fluide, il vous transperce la poitrine et retire votre coeur, pleurant à chaudes larmes, pour vous exprimer sa souffrance.`,
    img: "images/steven_sadness",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  keith: {
    subtitle: "Un nouvel ami",
    text: `Steven vous ayant aidé à faire disparaitre les traces, vous ne vous faite pas prendre pour le meurtre et il vous a enfin laissé tranquille. Entretemps, vous changez de région pour vous faire oublier et vous vous liez d'amitié avec un ami de Geordo, Keith.`,
    img: "images/new_friend.png",
    options: [
      {
        text: "continuer",
        action: "gotochapter(`keithLove`)",
      },
    ],
  },

  keithLove: {
    subtitle: "En amour de nouveau",
    text: `Après quelques temps, vous et Keith tombez en amour et vous invite à un banquet dans la région que vous venez de quitter. Vous hésitez, mais acceptez l'invitation avec un sourire forcé.`,
    img: "images/keith_love.png",
    options: [
      {
        text: "continuer",
        action: "gotochapter(`truthLie`)",
      },
    ],
  },

  truthLie: {
    subtitle: "Face à un dilemme",
    text: `Au banquet, ce que vous craignez arrive: Keith vous prend soudainement à part. Il vous révèle que son ami d'enfance, Geordo, a été assassiné. Sachant que vous venez de cette région, il vous demande votre aide pour résoudre ce crime.`,
    img: "images/dilemma.jpg",
    options: [
      {
        text: "avouer",
        action: "gotochapter(`truth`)",
      },
      {
        text: "mentir",
        action: "gotochapter(`lie`)",
      },
    ],
  },

  truth: {
    subtitle: "La parole est d'argent, mais le silence est d'or",
    text: `Vous dites la vérité. Keith, écoutant vos aveux, tire lentement son épée de son fourreau et vous écoute jusqu'à la fin. Finalement, avec un soupir sanglotant de rage, il vous exécute brutalement sans procès.`,
    img: "images/brutal_death.jpg",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  lie: {
    subtitle: "Vivre dans le mensonge",
    text: `Vous dites que vous ne savez rien à ce sujet. Pendant plusieurs années, Keith tente de retrouver le responsable de la mort de son ami, mais en vain. Il se résigne à espérer et profite de quelques années supplémentaires à vos côtés jusqu'à ce qu'il parte visiter un pays lointain.`,
    img: "images/bad_keith_ending.jpg",
    options: [
      {
        text: "continuer",
        action: "deadOrAlive2()",
      },
    ],
  },

  stevenAlive: {
    subtitle: "Trop beau pour être vrai",
    text: `Alors que Keith est parti, vous prenez soin de sa demeure et vaquez à vos occupations. À un moment, vous préparez votre souper et votre four explose soudainement, vous tuant sur le coup. Étrangement, votre corps n'est jamais retrouvé.`,
    img: "images/house_burning.jpg",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  stevenAttack: {
    subtitle: "Attaque surprise!",
    text: `Vous poursuivez votre chemin dans la forêt. Vous arrivez éventuellement à un terrain d'entraînement où un homme vous accueuille chaleureusement. L'homme se prénomme Geordo et est le prince de la région. Après avoir discuté un moment, vous remarquez des mouvements dans le boisé proche. Tout à coup, Steven sort de la forêt et attaque Geordo.`,
    img: "images/geordo_fight.jpg",
    options: [
      {
        text: "le défendre",
        action: "gotochapter(`defend`)",
      },
      {
        text: "chercher de l'aide",
        action: "gotochapter(`seekHelp`)",
      },
      {
        text: "le laisser mourir",
        action: "gotochapter(`sacrifice`)",
      },
    ],
  },

  defend: {
    subtitle: "Sacrifice",
    text: `Vous vous portez au secours de Geordo, vous mettant entre ce dernier et Steven. Il vous poignarde rapidement à plusieurs reprises et vous vous écroulez au sol. Vous voyez le prince profiter de l'ouverture pour vaincre l'agresseur avant de laisser s'échapper un dernier soupir.`,
    img: "images/human_shield.jpg",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  geordeath2: {
    subtitle: "Inaction",
    text: `Vous ne bougez pas d'un pouce, guettant la suite. Steven prend rapidement l'avantage et transperce le coeur de Geordo. Il tombe à genoux, vous fixe d'un regard suppliant et s'effondre sur le sol, sans vie. Steven vous remercie de votre coopération et emporte le corps dans la fôret. Vous fuyez la scène paniqué/e.`,
    img: "images/run_away.jpg",
    options: [
      {
        text: "continuer",
        action: "gotochapter(`keith`)",
      },
    ],
  },

  seekHelp: {
    subtitle: "À l'aide!",
    text: `Vous courez vers la forêt en appelant à l'aide. Après peu de temps, un homme vient à votre secours. Vous le guidez jusqu'au terrain d'entraînement, où Geordo semble en difficulté face à Steven. L'inconnu fonce vers l'agresseur, l'épée à la main, en hurlant de rage. Le combat se termine rapidement avec l'aide que vous avez apporté. Steven tombe au sol, couvert de blessures et lâche un dernier cri de désespoir avant de rendre l'âme.`,
    img: "images/got_help.jpg",
    options: [
      {
        text: "continuer",
        action: "gotochapter(thanks)",
      },
    ],
  },

  thanks: {
    subtitle: "Un ami d'enfance",
    text: `L'inconnu s'approche de vous et se présente. Il s'apelle Keith et est un ami d'enfance de Geordo ainsi qu'un prince de la région voisine. Après s'être présenté, ce dernier vous offre ses remerciements. Vous discutez pendant de longues heures.`,
    img: "images/thankful.jpg",
    options: [
      {
        text: "flirter",
        action: "deadOrAlive2()",
      },
      {
        text: "devenir son ami",
        action: "gotochapter(`friendzone`)",
      },
    ],
  },

  friendzone: {
    subtitle: "Un amour princier",
    text: `Pendant les mois qui suivent, vous et Geordo tombez amoureux. Vous vous mariez avec le prince et passez le restant de vos jours à apprécier votre nouvelle vie de couple royal.`,
    img: "images/geordo_ending.jpg",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },

  ending: {
    subtitle: "D'une pierre deux coups!",
    text: `Vous tombez amoureux tous les trois et formez une alliance entre les deux régions, devenant le premier trouple royal. Vous vivez heureux jusqu'à la fin de vos jours.
    Merci d'avoir joué à mon jeu! :)`,
    img: "images/keith_geordo.png",
    options: [
      {
        text: "recommencer",
        action: "gotochapter(`reveil`)",
      },
    ],
  },
  deadOrAlive1: function () {
    stevenDead = true;
  },
  deadOrAlive2: function () {
    if ((stevenDead = true)) {
      gotochapter("ending");
    } else {
      gotochapter("stevenAlive");
    }
  },
};

function gotochapter(chapterName) {
  let chapter = document.querySelector(".chapter");
  let text = document.querySelector(".txt");
  let image = document.querySelector(".img");
  let buttons1 = document.querySelector(".buttons1");
  chapter.innerText = chaptersObj[chapterName].subtitle;
  text.innerText = chaptersObj[chapterName].text;
  image.innerHTML = `<img src="${chaptersObj[chapterName].img}" alt="chapter_img" />`;
  buttons1.innerHTML = `<button type="button" onclick="click1()">${chaptersObj[chapterName].options[0].text}</button>`;
  function click1() {
    for (
      let index = 0;
      index < chaptersObj[chapterName].options.length;
      index++
    ) {
      const choice = chaptersObj[chapterName].options[index].action;
      console.log(choice);
      //gotochapter(choice);
    }
  }
  buttons1.onclick = click1();
}
gotochapter("reveil");

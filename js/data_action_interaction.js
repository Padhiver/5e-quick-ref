data_action_interaction = [
    {
        title: "Chercher",
        icon: "run",
        subtitle: "A",
        reference: "LDB, pg. 471.",
        bullets: [
            "Vous scrutez une zone à la recherche de créatures ou d’objets. Si vous utilisez Chercher pour découvrir des objets, vous examinez une case de 3 m de côté maximum qui se trouve dans un emplacement adjacent.",
            "<b>Succès critique.</b> Si vous tentiez de repérer des créatures, toute créature non détectée ou cachée contre laquelle vous avez obtenu un succès critique devient observée face à vous. Si vous cherchiez un objet, vous découvrez son emplacement.",
            "<b>Succès.</b> Si vous tentiez de repérer des créatures, toute créature non détectée contre laquelle vous avez obtenu un succès devient cachée au lieu de non détectée et toute créature cachée devient observée. Si vous cherchiez un objet, vous découvrez son emplacement ou un indice vous aidant à trouver celui-ci, en fonction de ce que préfère le MJ."
        ]
    },
	{
        title: "Deviner les intentions",
        icon: "walking-boot",
        subtitle: "A",
        reference: "LDB, pg. 470.",
        bullets: [
            "Vous tentez de déterminer si le comportement d’une créature est anormal. Vous tentez de repérer des signes étranges, de la nervosité ou d’autres indicateurs qui peuvent laisser penser qu’elle tente de tromper quelqu’un.",
            "<b>Succès critique.</b> Vous devinez les véritables intentions de la créature et déterminez le type de magie mental qui l’affecte éventuellement.",
            "<b>Succès.</b> Vous êtes capable de dire si la créature se comporte normalement ou non. ",
            "<b>Échec.</b> Vous détectez seulement ce qu’une créature trompeuse cherche à vous faire croire.",
            "<b>Échec critique.</b> Votre impression concernant les intentions de la créature est erronée."
        ]
    },
	 {
        title: "Interagir",
        icon: "sprint",
        subtitle: "A",
        reference: "LDB, pg. 470.",
        bullets: [
            "Vous utilisez une main ou plus pour manipuler un objet ou un élément de votre environnement. Vous devrez probablement faire un test de compétences afin de déterminer le succès de votre interaction."
        ]
    },
	    {
        title: "Détourner le regard",
        icon: "crawl",
        subtitle: "A",
        reference: "LDB, pg. 471.",
        bullets: [
            "Vous détournez le regard d’un danger. Vous gagnez un bonus de circonstances de +2 à vos jets de sauvegarde contre les pouvoirs visuels qui nécessitent que vous regardiez une créature ou un objet, comme le regard pétrifiant d’une méduse. Votre regard reste détourné jusqu’au début de votre prochain tour."
        ]
    },
	 {
        title: "Relâcher",
        icon: "crawl",
        subtitle: "F",
        reference: "LDB, pg. 472.",
        bullets: [
            "Vous Relâchez quelque chose que vous tenez dans une main ou dans vos deux mains. À la différence des autres actions de manipulation, Relâcher ne déclenche pas de réactions qui peuvent être déclenchées par les actions possédant le trait manipulation. Si vous voulez vous tenir prêt à Relâcher quelque chose hors de votre tour, utilisez l’activité Préparer."
        ]
    },
	    {
        title: "Signaler",
        icon: "crawl",
        subtitle: "A",
        description: "Conditions. Une créature est non détectée par un ou plusieurs de vos alliés, mais pas par vous.",
        reference: "LDB, pg. 472.",
        bullets: [
			"Vous désignez une créature que vous pouvez voir à un ou plusieurs de vos alliés, en la montrant du doigt et en indiquant verbalement à quelle distance elle se trouve. La créature se trouve alors cachée par rapport à vos alliés plutôt que non détectée. Cela ne fonctionne que si vos alliés peuvent vous voir et qu’ils se trouvent à un endroit d’où ils pourraient potentiellement détecter la cible. Si vos alliés ne peuvent pas vous entendre ou vous comprendre, ils doivent alors réussir un test de Perception contre le DD de Discrétion de la créature. Sur un échec, ils vous comprennent mal et croient que la cible se trouve à un autre endroit que celui que vous désignez."
        ]
    },
	 {
        title: "Préparer",
        icon: "stone-pile",
        subtitle: "D",
        reference: "LDB, pg. 470.",
        bullets: [
            "Vous vous préparez à utiliser une action qui se déroulera hors de votre tour. Choisissez une action unique ou une action gratuite que vous pouvez utiliser et précisez un déclencheur. Votre tour prend alors fin. Si le déclencheur que vous avez indiqué se déroule avant le début de votre prochain tour, vous pouvez utiliser l’action choisie comme une réaction (dans la mesure où vous répondez à toutes les conditions d’utilisation). Vous ne pouvez pas Préparer une action gratuite qui a déjà un déclencheur.",
            "Si vous êtes soumis à un malus d’attaques multiples et que votre action préparée est une action d’attaque, votre attaque préparée est soumise au malus d’attaques multiples que vous aviez quand vous l’avez Préparée. Il s’agit d’une des rares occasions où le malus d’attaques multiples est appliqué hors de votre tour."
        ]
    },
    {
        title: "Retarder",
        icon: "horse-head",
        subtitle: "F",
        description: "Déclencheur. Votre tour commence.",
        reference: "LDB, pg. 472.",
        bullets: [
            "Vous attendez le bon moment pour agir. Vous pouvez reprendre une place dans l’ordre d’initiative par une action gratuite déclenchée par la fin du tour d’une créature. Cette nouvelle place devient votre place permanente dans l’ordre d’initiative. Vous ne pouvez pas utiliser de réaction avant de reprendre une place dans l’ordre d’initative.",
            "Quand vous Retardez, tous les dégâts persistants et les autres effets négatifs qui se produisent normalement au début de votre tour sont appliqués immédiatement quand vous utilisez l’action Retarder.",
            "Tous les effets bénéfiques qui devraient normalement prendre fin à n’importe quel moment de votre tour se terminent également."
        ]
    },
	{
        title: "Aider",
        icon: "angel-wings",
        subtitle: "R",
        description: "Conditions. L’allié est disposé à accepter votre aide et vous vous êtes préparer à l’aider.",
        reference: "LDB, pg. 472.",
        bullets: [
            "Vous tentez d’apporter votre aide à un allié confronté à une tâche particulière. Pour utiliser cette réaction, vous devez préalablement vous être préparé à l’aider. Quand vous utilisez la réaction Aider, faites un test de compétence ou un jet d’attaque en lien avec l’action de votre allié.",
            "<b>Succès critique.</b> Vous permettez à votre allié de bénéficier d’un bonus de circonstances de +2 au test déclencheur. Si vous possédez le rang de maîtrise de maître dans le test que vous faites, ce bonus est de +3 et, si votre rang est légendaire, il est de +4.",
            "<b>Succès.</b> Vous permettez à votre allié de bénéficier d’un bonus de +1 au test déclencheur.",
            "<b>Échec critique.</b> Votre allié subit un malus de -1 au test déclencheur"
        ]
    }
]

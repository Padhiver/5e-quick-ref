data_action_etats = [
    {
        title: "A terre",
        icon: "crawl",
        description: "Vous êtes étendu au sol.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Vous êtes pris au dépourvu et subissez un malus de circonstances de −2 à vos jets d’attaque.",
            "Les seules actions de déplacement que vous pouvez entreprendre quand vous êtes à terre sont Ramper ou Vous relever.",
            "Quand vous êtes à terre, vous pouvez vous Mettre à l’abri pour vous accroupir et bénéficier d’un abri contre les attaques à distances, même si vous ne vous abritez pas derrière un objet.",
            "Vous gagnez alors un bonus de circonstances de +4 à votre CA contre les attaques à distance (mais restez dans l’état pris au dépourvu).",
            "Si vous tombez à terre alors que vous étiez en train d’Escalader ou de Voler, vous chutez."
        ]
    },
    {
        title: "Accéléré",
        icon: "crawl",
        description: "Vous gagnez une action supplémentaire au début de votre tour à chaque round.",
        reference: "LDB, pg. 471.",
        bullets: [
            "De nombreux effets qui vous accélèrent précisent le type d’actions que vous pouvez entreprendre avec cette action supplémentaire. Si plusieurs sources vous accélèrent, vous pouvez utiliser l’action supplémentaire que vous gagnez pour entreprendre n’importe quelle action permise par l’une de ces sources.",
            "Dans la mesure où l’état accéléré produit son effet au début de votre tour, vous ne gagnez pas immédiatement des actions si vous gagnez cet état lors de votre tour."
        ]
    },
    {
        title: "Affaibli",
        icon: "crawl",
        description: "Vous êtes physiquement affaibli.",
        reference: "LDB, pg. 471.",
        bullets: [
            "L’état affaibli est toujours accompagné d’une intensité.",
            "Quand vous êtes affaibli, vous subissez un malus de statut égal à l’intensité de votre état qui s’applique à vos jets et vos DD basés sur la Force, dont les jets d’attaque basés sur la Force, les jets de dégâts basés sur la Force et les tests d’Athlétisme."
        ]
    },
    {
        title: "Amical",
        icon: "crawl",
        description: "Cet état reflète l’attitude d’une créature envers un personnage donné et seul un effet surnaturel (comme un sort) peut imposer cet état à un personnage joueur.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Une créature dont l’attitude est amicale envers un personnage l’apprécie. Le personnage peut tenter de Solliciter l’aide d’une créature amicale et celle-ci répondra probablement favorablement à une requête simple et dénuée de risque qui ne lui coûte pas trop.",
            "Si le personnage ou l’un de ses alliés entreprend une action hostile contre la créature, l’attitude de cette dernière se dégrade proportionnellement à l’hostilité de l’action."
        ]
    },
    {
        title: "Aveugle",
        icon: "crawl",
        description: "Vous ne pouvez pas voir.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Tous les terrains normaux sont pour vous des terrains difficiles.",
            "Vous ne pouvez rien détecter à l’aide de votre vue.",
            "Vous échouez automatiquement aux tests de Perception qui nécessitent que vous puissiez voir et, si votre vision est votre seul sens précis, vous subissez un malus de statut de −4 à vos tests de Perception.",
            "Vous êtes immunisé contre les effets visuels.",
            "L’état aveugle est prépondérant sur l’état ébloui."
        ]
    },
    {
        title: "Blessé",
        icon: "crawl",
        description: "Vous avez été gravement blessé.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Si vous perdez l’état mourant et que vous n’êtes pas encore dans l’état blessé, vous devenez blessé 1.",
            "Si vous êtes déjà dans l’état blessé quand vous perdez l’état mourant, l’intensité de votre état blessé augmente de 1.",
            "Si vous gagnez l’état mourant alors que vous êtes blessé, vous ajoutez alors à l’intensité de votre état mourant celle de votre état blessé.",
            "L’état blessé prend fin si quelqu’un réussit à vous rendre des points de vie grâce à Soigner les blessures, ou si vous regagnez l’ensemble de vos points de vie et vous reposez pendant 10 min."
        ]
    },
    {
        title: "Brisé",
        icon: "crawl",
        description: "Brisé est un état affectant les objets.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Un objet est brisé quand des dégâts ont réduit ses points de vie au niveau de son Seuil de rupture ou moins.",
            "On ne peut plus utiliser normalement un objet brisé, pas plus qu’il n’accorde de bonus, à l’exception d’une armure.",
            "Une armure brisée accorde toujours son bonus d’objet à la CA, mais inflige en même temps un malus de statut à la CA en fonction de sa catégorie : −1 pour une armure légère brisée, −2 pour une armure intermédiaire brisée ou −3 pour une armure lourde brisée.",
            "Un objet brisé continue d’imposer les malus et les limitations normalement encourus lorsqu’on le transporte, le tient ou le porte. Par exemple, une armure brisée imposera toujours son bonus de Dextérité maximal, son malus aux tests, etc.",
            "Si un effet fait se briser un objet automatiquement et que celui-ci a plus de points de vie que son Seuil de rupture, cet effet réduit également les points de vie actuels de l’objet à son Seuil de rupture."
        ]
    },
    {
        title: "Caché",
        icon: "crawl",
        description: "Quand vous êtes caché d’une créature, celle-ci sait dans quel espace vous vous trouvez, mais elle ne peut pas dire précisément où vous vous trouvez.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Vous devenez généralement caché après avoir utilisé Discrétion pour Vous cacher.",
            "Quand vous Cherchez une créature en utilisant seulement des sens imprécis, celle-ci se trouve dans l’état caché plutôt qu’observé.",
            "Une créature par rapport à laquelle vous êtes caché est prise au dépourvu face à vous. Elle doit réussir un test nu DD 11 quand elle vous cible avec une attaque, un sort ou un autre effet pour avoir une chance de vous affecter. Les zones d’effet ne sont pas sujettes à ce test nu.",
            "Une créature peut tenter de faire appel à l’action Chercher pour tenter de changer votre état en observé."
        ]
    },
    {
        title: "Condamné",
        icon: "crawl",
        description: "Votre âme se trouve sous le joug d’une puissante force qui vous pousse toujours plus près de la mort.",
        reference: "LDB, pg. 471.",
        bullets: [
            "L’état condamné est toujours accompagné d’une intensité. L’intensité maximale de l’état mourant à partir de laquelle vous mourez est diminuée de l’intensité de votre état condamné.",
            "Si votre intensité maximale d’état mourant est réduite à 0, vous mourez instantanément.",
            "Si vous mourez, vous perdez l’état condamné. Votre intensité d’état condamné est diminuée de 1 à chaque fois que vous vous reposez pendant une nuit complète."
        ]
    },
    {
        title: "Confus",
        icon: "crawl",
        description: "Vous êtes déconcerté et vous attaquez à l’aveuglette.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Vous êtes pris au dépourvu et ne considérez plus personne comme votre allié et vous ne pouvez pas utiliser les actions Retarder et Préparer ni utiliser de réactions.",
            "Vous utilisez toutes vos actions pour Frapper ou lancer des tours de magie offensifs. Le MJ peut cependant vous permettre de faire d’autres actions vous permettant d’attaquer plus facilement, comme dégainer une arme, vous rapprocher d’une cible pour qu’elle soit à portée, et ainsi de suite. Le MJ détermine vos cibles aléatoirement.",
            "Si vous n’avez pas d’autre cible valide, vous vous prenez vous-même pour cible. Vous réussissez alors automatiquement vos coups, mais ne portez pas de coup critique.",
            "Si vous êtes dans l’impossibilité d’attaquer ou de lancer des sorts, vous marmonnez des choses incohérentes et perdez vos actions.",
            "À chaque fois que vous subissez des dégâts provenant d’une attaque ou d’un sort, vous pouvez faire un test nu DD 11 afin de vous remettre de votre confusion et mettre un terme à cet état."
        ]
    },
    {
        title: "Contrôlé",
        icon: "crawl",
        description: "Quelqu’un prend des décisions à votre place, en exerçant généralement un contrôle sur vous par le biais d’une injonction ou d’une domination magique. ",
        reference: "LDB, pg. 471.",
        bullets: [
            "La créature qui vous contrôle décide de vos actions et peut vous faire utiliser n’importe quelle action, y compris des attaques, des réactions et même l’action Retarder.",
            "En outre, cette créature n’a généralement pas besoin de dépenser elle-même d’action pour vous contrôler."
        ]
    },
    {
        title: "Dégâts persistants",
        icon: "crawl",
        description: "Les dégâts persistants sont causés par des effets comme l’acide, le feu ou de nombreuses autres choses.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Ils se présentent sous la forme « X dégâts persistants de [type] », où « X » représente la quantité de dégâts infligés et le « [type] » correspond au type de dégâts.",
            "Au lieu de recevoir immédiatement les dégâts persistants, vous les recevez à la fin de chacun de vos tours tant que vous vous trouvez dans cet état et vous devez à chaque fois relancer les dés de dégâts.",
            "Après avoir subi des dégâts persistants, faites un test nu DD 15 afin de déterminer si ceux-ci prennent fin. Sur un <b>succès</b>, vous mettez un terme à l’état."
        ]
    },
    {
        title: "Drainé",
        icon: "crawl",
        description: "Vous vous affaiblissez quand une créature réussit à drainer votre sang ou votre force vitale.",
        reference: "LDB, pg. 471.",
        bullets: [
            "L’état drainé est toujours accompagné d’une intensité. Vous subissez un malus de statut égal à l’intensité de votre état drainé et qui s’applique à vos tests basés sur la Constitution, comme les jets de Vigueur.",
            "Vous perdez également une quantité de points de vie égale à votre niveau (avec un minimum de 1) multiplié par l’intensité de votre état drainé, et votre maximum de points de vie est réduit de ce montant. Par exemple, si vous subissez un effet qui vous inflige drainé 3 et que vous êtes un personnage de niveau 3, vous perdez 9 points de vie et réduisez votre maximum de points de vie de 9. Perdre de ces points de vie n’est pas considéré comme subir des dégâts.",
            "À chaque fois que vous vous reposez une nuit complète, l’intensité de votre état drainé décroît de 1. Votre maximum de points de vie remonte alors, mais vous ne regagnez pas immédiatement les points de vie que vous avez perdus."
        ]
    },
    {
        title: "Ébloui",
        icon: "crawl",
        description: "Vos yeux ont été soumis à un excès de stimuli.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Si la vue est votre seul sens précis, toutes les créatures et les objets vous sont masqués."
        ]
    },
    {
        title: "Effrayé",
        icon: "crawl",
        description: "Vous êtes paralysé par la peur et vous luttez pour ne pas céder à la panique.",
        reference: "LDB, pg. 471.",
        bullets: [
            "L’état effrayé est toujours accompagné d’une intensité. Vous subissez un malus de statut égal à cette valeur pour tous vos tests et DD.",
            "Sauf indication contraire, l’intensité de votre état effrayé décroît de 1 à la fin de chacun de vos tours."
        ]
    },
    {
        title: "Empoigné",
        icon: "crawl",
        description: "Vous êtes maintenu en place par une autre créature, ce qui vous confère les états pris au dépourvu et immobilisé.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Si vous entreprenez une action de manipulation pendant que vous êtes empoigné, vous devez réussir un test nu DD 5 ou perdre cette action. Vous faites le test après avoir dépensé l’action et avant que ses effets s’appliquent."
        ]
    },
    {
        title: "En fuite",
        icon: "crawl",
        description: "La peur ou une autre forme de compulsion vous contraint à prendre la fuite.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Lors de votre tour, vous devez utiliser toutes vos actions pour tenter de vous éloigner de la source de votre état de fuite aussi rapidement que possible (en utilisant des actions de déplacement pour fuir ou ouvrir des portes qui vous barrent le chemin, par exemple).",
            "Cette source est généralement l’effet ou l’incantateur qui vous a imposé cet état. Cependant, certains effets peuvent désigner quelque chose d’autre comme source.",
            "Vous ne pouvez pas utiliser les actions Retarder ou Préparer en fuyant."
        ]
    },
    {
        title: "Entravé",
        icon: "crawl",
        description: "Vous êtes attaché et ne pouvez pas bouger, ou une créature vous a saisi et immobilisé.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Vous vous trouvez dans les états pris au dépourvu et immobilisé, et vous ne pouvez entreprendre aucune action dotée des traits attaque ou manipulation, sauf si vous tentez ainsi de Vous échapper ou d’Ouvrir vos liens de force.",
            "L’état entravé est prépondérant sur l’état empoigné."
        ]
    },
    {
        title: "Étourdi",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Fasciné",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Fatigué",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Hostile",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Immobilisé",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Inamical",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Inaperçu",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Inconscient",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Indifférent",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Invisible",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Malade",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Maladroit",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Masqué",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Mourant",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Non detécté",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Observé",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Paralysé",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Pétrifié",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Pris au dépourvu",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Ralenti",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Serviable",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Sourd",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Stupéfié",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    },
    {
        title: "Surchargé",
        icon: "crawl",
        description: "",
        reference: "LDB, pg. 471.",
        bullets: [
            ""
        ]
    }
]

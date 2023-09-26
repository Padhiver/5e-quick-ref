data_action_etats = [
    {
        title: "A terre",
        icon: "crawl",
        description: "Vous êtes étendu au sol.",
        reference: "LDB, pg. 618.",
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
        icon: "beams-aura",
        description: "Vous gagnez une action supplémentaire au début de votre tour à chaque round.",
        reference: "LDB, pg. 618.",
        bullets: [
            "De nombreux effets qui vous accélèrent précisent le type d’actions que vous pouvez entreprendre avec cette action supplémentaire. Si plusieurs sources vous accélèrent, vous pouvez utiliser l’action supplémentaire que vous gagnez pour entreprendre n’importe quelle action permise par l’une de ces sources.",
            "Dans la mesure où l’état accéléré produit son effet au début de votre tour, vous ne gagnez pas immédiatement des actions si vous gagnez cet état lors de votre tour."
        ]
    },
    {
        title: "Affaibli",
        icon: "death-juice",
        description: "Vous êtes physiquement affaibli.",
        reference: "LDB, pg. 618.",
        bullets: [
            "L’état affaibli est toujours accompagné d’une intensité.",
            "Quand vous êtes affaibli, vous subissez un malus de statut égal à l’intensité de votre état qui s’applique à vos jets et vos DD basés sur la Force, dont les jets d’attaque basés sur la Force, les jets de dégâts basés sur la Force et les tests d’Athlétisme."
        ]
    },
    {
        title: "Amical",
        icon: "three-friends",
        description: "Cet état reflète l’attitude d’une créature envers un personnage donné et seul un effet surnaturel (comme un sort) peut imposer cet état à un personnage joueur.",
        reference: "LDB, pg. 618.",
        bullets: [
            "Une créature dont l’attitude est amicale envers un personnage l’apprécie. Le personnage peut tenter de Solliciter l’aide d’une créature amicale et celle-ci répondra probablement favorablement à une requête simple et dénuée de risque qui ne lui coûte pas trop.",
            "Si le personnage ou l’un de ses alliés entreprend une action hostile contre la créature, l’attitude de cette dernière se dégrade proportionnellement à l’hostilité de l’action."
        ]
    },
    {
        title: "Aveugle",
        icon: "blindfold",
        description: "Vous ne pouvez pas voir.",
        reference: "LDB, pg. 618.",
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
        icon: "ragged-wound",
        description: "Vous avez été gravement blessé.",
        reference: "LDB, pg. 618.",
        bullets: [
            "Si vous perdez l’état mourant et que vous n’êtes pas encore dans l’état blessé, vous devenez blessé 1.",
            "Si vous êtes déjà dans l’état blessé quand vous perdez l’état mourant, l’intensité de votre état blessé augmente de 1.",
            "Si vous gagnez l’état mourant alors que vous êtes blessé, vous ajoutez alors à l’intensité de votre état mourant celle de votre état blessé.",
            "L’état blessé prend fin si quelqu’un réussit à vous rendre des points de vie grâce à Soigner les blessures, ou si vous regagnez l’ensemble de vos points de vie et vous reposez pendant 10 min."
        ]
    },
    {
        title: "Brisé",
        icon: "broken-skull",
        description: "Brisé est un état affectant les objets.",
        reference: "LDB, pg. 618.",
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
        icon: "hidden",
        description: "Quand vous êtes caché d’une créature, celle-ci sait dans quel espace vous vous trouvez, mais elle ne peut pas dire précisément où vous vous trouvez.",
        reference: "LDB, pg. 619.",
        bullets: [
            "Vous devenez généralement caché après avoir utilisé Discrétion pour Vous cacher.",
            "Quand vous Cherchez une créature en utilisant seulement des sens imprécis, celle-ci se trouve dans l’état caché plutôt qu’observé.",
            "Une créature par rapport à laquelle vous êtes caché est prise au dépourvu face à vous. Elle doit réussir un test nu DD 11 quand elle vous cible avec une attaque, un sort ou un autre effet pour avoir une chance de vous affecter. Les zones d’effet ne sont pas sujettes à ce test nu.",
            "Une créature peut tenter de faire appel à l’action Chercher pour tenter de changer votre état en observé."
        ]
    },
    {
        title: "Condamné",
        icon: "grim-reaper",
        description: "Votre âme se trouve sous le joug d’une puissante force qui vous pousse toujours plus près de la mort.",
        reference: "LDB, pg. 619.",
        bullets: [
            "L’état condamné est toujours accompagné d’une intensité. L’intensité maximale de l’état mourant à partir de laquelle vous mourez est diminuée de l’intensité de votre état condamné.",
            "Si votre intensité maximale d’état mourant est réduite à 0, vous mourez instantanément.",
            "Si vous mourez, vous perdez l’état condamné. Votre intensité d’état condamné est diminuée de 1 à chaque fois que vous vous reposez pendant une nuit complète."
        ]
    },
    {
        title: "Confus",
        icon: "brain-freeze",
        description: "Vous êtes déconcerté et vous attaquez à l’aveuglette.",
        reference: "LDB, pg. 619.",
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
        icon: "brain-tentacle",
        description: "Quelqu’un prend des décisions à votre place, en exerçant généralement un contrôle sur vous par le biais d’une injonction ou d’une domination magique. ",
        reference: "LDB, pg. 619.",
        bullets: [
            "La créature qui vous contrôle décide de vos actions et peut vous faire utiliser n’importe quelle action, y compris des attaques, des réactions et même l’action Retarder.",
            "En outre, cette créature n’a généralement pas besoin de dépenser elle-même d’action pour vous contrôler."
        ]
    },
    {
        title: "Dégâts persistants",
        icon: "burning-skull",
        description: "Les dégâts persistants sont causés par des effets comme l’acide, le feu ou de nombreuses autres choses.",
        reference: "LDB, pg. 619.",
        bullets: [
            "Ils se présentent sous la forme « X dégâts persistants de [type] », où « X » représente la quantité de dégâts infligés et le « [type] » correspond au type de dégâts.",
            "Au lieu de recevoir immédiatement les dégâts persistants, vous les recevez à la fin de chacun de vos tours tant que vous vous trouvez dans cet état et vous devez à chaque fois relancer les dés de dégâts.",
            "Après avoir subi des dégâts persistants, faites un test nu DD 15 afin de déterminer si ceux-ci prennent fin. Sur un <b>succès</b>, vous mettez un terme à l’état."
        ]
    },
    {
        title: "Drainé",
        icon: "fangs",
        description: "Vous vous affaiblissez quand une créature réussit à drainer votre sang ou votre force vitale.",
        reference: "LDB, pg. 619.",
        bullets: [
            "L’état drainé est toujours accompagné d’une intensité. Vous subissez un malus de statut égal à l’intensité de votre état drainé et qui s’applique à vos tests basés sur la Constitution, comme les jets de Vigueur.",
            "Vous perdez également une quantité de points de vie égale à votre niveau (avec un minimum de 1) multiplié par l’intensité de votre état drainé, et votre maximum de points de vie est réduit de ce montant. Par exemple, si vous subissez un effet qui vous inflige drainé 3 et que vous êtes un personnage de niveau 3, vous perdez 9 points de vie et réduisez votre maximum de points de vie de 9. Perdre de ces points de vie n’est pas considéré comme subir des dégâts.",
            "À chaque fois que vous vous reposez une nuit complète, l’intensité de votre état drainé décroît de 1. Votre maximum de points de vie remonte alors, mais vous ne regagnez pas immédiatement les points de vie que vous avez perdus."
        ]
    },
    {
        title: "Ébloui",
        icon: "lightning-tear",
        description: "Vos yeux ont été soumis à un excès de stimuli.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Si la vue est votre seul sens précis, toutes les créatures et les objets vous sont masqués."
        ]
    },
    {
        title: "Effrayé",
        icon: "terror",
        description: "Vous êtes paralysé par la peur et vous luttez pour ne pas céder à la panique.",
        reference: "LDB, pg. 620.",
        bullets: [
            "L’état effrayé est toujours accompagné d’une intensité. Vous subissez un malus de statut égal à cette valeur pour tous vos tests et DD.",
            "Sauf indication contraire, l’intensité de votre état effrayé décroît de 1 à la fin de chacun de vos tours."
        ]
    },
    {
        title: "Empoigné",
        icon: "grab",
        description: "Vous êtes maintenu en place par une autre créature, ce qui vous confère les états pris au dépourvu et immobilisé.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Si vous entreprenez une action de manipulation pendant que vous êtes empoigné, vous devez réussir un test nu DD 5 ou perdre cette action. Vous faites le test après avoir dépensé l’action et avant que ses effets s’appliquent."
        ]
    },
    {
        title: "En fuite",
        icon: "sprint",
        description: "La peur ou une autre forme de compulsion vous contraint à prendre la fuite.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Lors de votre tour, vous devez utiliser toutes vos actions pour tenter de vous éloigner de la source de votre état de fuite aussi rapidement que possible (en utilisant des actions de déplacement pour fuir ou ouvrir des portes qui vous barrent le chemin, par exemple).",
            "Cette source est généralement l’effet ou l’incantateur qui vous a imposé cet état. Cependant, certains effets peuvent désigner quelque chose d’autre comme source.",
            "Vous ne pouvez pas utiliser les actions Retarder ou Préparer en fuyant."
        ]
    },
    {
        title: "Entravé",
        icon: "manacles",
        description: "Vous êtes attaché et ne pouvez pas bouger, ou une créature vous a saisi et immobilisé.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Vous vous trouvez dans les états pris au dépourvu et immobilisé, et vous ne pouvez entreprendre aucune action dotée des traits attaque ou manipulation, sauf si vous tentez ainsi de Vous échapper ou d’Ouvrir vos liens de force.",
            "L’état entravé est prépondérant sur l’état empoigné."
        ]
    },
    {
        title: "Étourdi",
        icon: "star-struck",
        description: "Vous êtes hébété.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Vous ne pouvez pas agir tant que vous êtes étourdi.",
            "L’état étourdi est toujours accompagné d’une intensité qui indique la quantité d’actions que vous perdez, parfois pendant plusieurs tours, du fait de cet état. À chaque fois que vous regagnez des actions (au début de votre tour, par exemple), vous réduisez la quantité d’actions regagnées de l’intensité de votre état étourdi, puis réduisez l’intensité de votre état par le nombre d’actions que vous avez perdues. Par exemple, si vous êtes étourdi 4, vous perdez vos 3 actions au début de votre tour et vous devenez alors étourdi 1. Lors de votre prochain tour, vous perdrez une action supplémentaire, puis vous pourrez utiliser vos 2 actions restantes normalement.",
            "L’état étourdi peut également être accompagné d’une durée à la place d’une intensité, comme « étourdi pendant 1 min ». Dans ce cas-là, vous perdez toutes vos actions pour la durée indiquée.",
            "L’état étourdi est prépondérant sur l’état ralenti. Si la durée de votre état étourdi prend fin alors que vous êtes ralenti, les actions perdues du fait de l’état étourdi sont prises en compte dans le décompte des actions perdues du fait de l’état ralenti. Ainsi, si vous êtes étourdi 1 et ralenti 2 au début de votre tour, vous perdez 1 action à cause de l’état étourdi puis perdez 1 action supplémentaire car vous êtes ralenti, et il vous reste 1 action à utiliser pour ce tour."
        ]
    },
    {
        title: "Fasciné",
        icon: "brass-eye",
        description: "Votre attention est irrésistiblement attirée par quelque chose et vous ne faites plus attention à ce qui se déroule autour de vous.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Vous subissez un malus de statut de −2 à vos tests de Perception et de compétences et vous ne pouvez pas entreprendre d’actions dotées du trait concentration, sauf si ces actions ou leurs conséquences sont liées à l’objet de votre fascination (avec l’accord du MJ). Par exemple, vous pourrez probablement Chercher et Vous souvenir de quelque chose par rapport au sujet de votre fascination, mais vous ne pourrez normalement pas lancer de sort ciblant une autre créature.",
            "Cet état prend fin si une créature entreprend une action hostile contre vous ou n’importe lequel de vos alliés."
        ]
    },
    {
        title: "Fatigué",
        icon: "tired-eye",
        description: "Vous êtes fatigué et n’arrivez pas à rassembler vos forces.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Vous subissez un malus de statut de −1 à votre CA et à vos jets de sauvegarde.",
            "Quand vous explorez, vous ne pouvez pas choisir d’activité d’exploration.",
            "Vous vous remettez de l’état fatigué au terme d’une nuit complète de repos."
        ]
    },
    {
        title: "Hostile",
        icon: "monster-grasp",
        description: "Cet état reflète l’attitude d’une créature envers un personnage donné et seul un effet surnaturel (comme un sort) peut imposer cet état à un personnage joueur.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Une créature hostile souhaite activement faire du mal au personnage qui lui inspire cette attitude. Elle ne l’attaquera pas nécessairement, mais refusera d’accéder aux Sollicitations de ce personnage."
        ]
    },
    {
        title: "Immobilisé",
        icon: "imprisoned",
        description: "Vous ne pouvez entreprendre aucune action dotée du trait déplacement.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Si vous êtes immobilisé par quelque chose qui vous maintient en place et qu’une force extérieure tente de vous faire quitter votre espace, cette force doit réussir un test contre le DD de l’effet ou la défense adaptée (généralement le DD de Vigueur) du monstre qui vous maintient en place."
        ]
    },
    {
        title: "Inamical",
        icon: "suspicious",
        description: "Cet état reflète l’attitude d’une créature envers un personnage donné et seul un effet surnaturel (comme un sort) peut imposer cet état à un personnage joueur.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Une créature inamicale n’apprécie pas un personnage en particulier et elle ne lui fait pas confiance. Elle refusera toutes les Sollicitations de ce personnage."
        ]
    },
    {
        title: "Inaperçu",
        icon: "palm-tree",
        description: "Si vous êtes inaperçu aux yeux d’une créature, elle n’a aucune conscience de votre présence.",
        reference: "LDB, pg. 620.",
        bullets: [
            "Quand vous êtes inaperçu par une créature, vous êtes également non détecté par elle.",
            "Cet état intervient dans le cadre de pouvoirs qui peuvent seulement être utilisés contre des cibles qui n’ont aucune conscience de votre présence."
        ]
    },
    {
        title: "Inconscient",
        icon: "coma",
        description: "Vous dormez ou avez été assommé.",
        reference: "LDB, pg. 621.",
        bullets: [
            "Vous ne pouvez pas faire d’action.",
            "Vous subissez un malus de −4 à votre CA, à votre Perception et à vos jets de Réflexes et vous vous trouvez dans les états aveugle et pris au dépourvu.",
            "Quand vous gagnez cet état, vous tombez à terre et lâchez les objets que vous tenez en main, sauf si l’effet précise le contraire ou que le MJ détermine que vous êtes dans une situation qui ne s’y prête pas.",
            "Si vous êtes inconscient parce que vous êtes mourant, vous ne pouvez pas vous réveiller tant que vous êtes réduit à 0 point de vie.",
            "Si vous regagnez 1 point de vie ou plus grâce à des soins, vous perdez les états mourant et inconscient et vous pouvez agir normalement lors de votre prochain tour.",
            "Si vous êtes inconscient et avez 0 point de vie mais n’êtes pas mourant, vous regagnez naturellement 1 point de vie et vous éveillez au bout d’un certain temps. Le MJ détermine alors combien de temps vous êtes inconscient : un intervalle allant de 10 min à plusieurs heures.",
            "Si vous recevez des soins pendant cet intervalle de temps, vous perdez l’état inconscient et pouvez agir normalement lors de votre prochain tour.",
            "Si vous êtes inconscient et avez plus de 1 point de vie (généralement parce qu’un effet vous a endormi ou rendu inconscient), vous pouvez vous réveiller pour l’une des raisons suivantes. Chacune vous fait perdre l’état inconscient." +
            "<ul>" +
            "<li>Vous subissez des dégâts qui ne vous réduisent pas à 0 point de vie. Si ces dégâts vous réduisent à 0 point de vie, vous restez inconscient et gagnez également l’état mourant.</li>" +
            "<li>Vous êtes soumis à un effet de guérison, autre que la guérison naturelle dont vous bénéficiez en vous reposant.</li>" +
            "<li>Quelqu’un vous réveille avec une action d’Interaction. • Un bruit fort se produit alentour. Vous ne vous réveillez cependant pas automatiquement. Au début de votre tour, vous faites automatiquement un test de Perception contre le DD du bruit (ou, s’il s’agit de plusieurs bruits, le DD le moins élevé). Sur un succès, vous vous réveillez. Si des créatures se trouvent autour de vous et tentent de rester discrètes, ce test de Perception est fait contre leur DD de Discrétion. Certains effets magiques vous font sombrer dans un sommeil si profond que vous ne pouvez pas faire ce test de Perception.</li>" +
            "<li>Si vous êtes simplement endormi, le MJ peut décider que vous vous réveillez parce que vous avez assez dormi ou parce que quelque chose a troublé votre sommeil.</li>" +
            "</ul>"
        ]
    },
    {
        title: "Indifférent",
        icon: "walk",
        description: "Cet état reflète l’attitude d’une créature envers un personnage donné et seul un effet surnaturel (comme un sort) peut imposer cet état à un personnage joueur.",
        reference: "LDB, pg. 621.",
        bullets: [
            "Une créature indifférente n’a aucun préjugé positif ou négatif envers ce personnage.",
            "Sauf indication contraire, partez du principe que l’attitude par défaut d’une créature envers un personnage est indifférente."
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        description: "Vous ne pouvez pas être vu tant que vous êtes invisible.",
        reference: "LDB, pg. 621.",
        bullets: [
            "Vous êtes non détecté aux yeux de tout le monde. Les créatures peuvent cependant vous Chercher pour tenter de vous détecter. Si une créature réussit un test de Perception opposé à votre DD de Discrétion, vous vous trouvez dans l’état caché par rapport à cette créature jusqu’à ce que vous fassiez preuve de Furtivité pour redevenir non détecté.",
            "Si vous devenez invisible alors que quelqu’un peut vous voir, vous commencez par vous trouver dans l’état caché par rapport à ce témoin (au lieu de non détecté) jusqu’à ce que vous vous déplaciez Furtivement.",
            "Tant que vous êtes invisible, vous ne pouvez pas devenir observé, sauf si une créature fait appel à des pouvoirs spéciaux ou de la magie."
        ]
    },
    {
        title: "Malade",
        icon: "dead-head",
        description: "Vous vous sentez malade.",
        reference: "LDB, pg. 622.",
        bullets: [
            "L’état malade est toujours accompagné d’une intensité. Vous subissez un malus de statut égal à cette valeur à tous vos tests et DD.",
            "Quand vous êtes malade, vous ne pouvez pas volontairement ingérer quelque chose, y compris des élixirs et des potions.",
            "Vous pouvez dépenser une action unique pour tenter de vomir afin de vous remettre de cet état. Vous faites alors immédiatement un jet de Vigueur contre le DD de l’effet qui vous a rendu malade. Sur un <b>succès</b>, vous réduisez l’intensité de l’état malade de 1 (ou de 2 sur un <b>succès critique</b>)."
        ]
    },
    {
        title: "Maladroit",
        icon: "broken-axe",
        description: "Vos mouvements deviennent maladroits et incertains.",
        reference: "LDB, pg. 622.",
        bullets: [
            "L’état maladroit est toujours accompagné d’une intensité. Vous subissez un malus de statut égal à l’intensité de l’état et qui s’applique à vos tests et vos DD basés sur la Dextérité, comme votre CA, vos jets de Réflexes, vos jets d’attaque à distance et vos tests de compétences basés sur Acrobaties, Discrétion et Vol."
        ]
    },
    {
        title: "Masqué",
        icon: "double-face-mask",
        description: "Tant que vous êtes masqué face à une créature (si vous êtes dans un épais brouillard, par exemple), cette créature a du mal à vous voir.",
        reference: "LDB, pg. 622.",
        bullets: [
            "Vous pouvez toujours être observé, mais vous êtes plus difficile à cibler. Une créature face à laquelle vous êtes masqué doit réussir un test nu DD 5 pour pouvoir vous prendre pour cible avec une attaque, un sort ou un autre effet. Les zones d’effet ne sont pas sujettes à ce test nu. Si le test échoue, l’attaque, le sort ou l’effet ne vous affecte pas."
        ]
    },
    {
        title: "Mourant",
        icon: "half-dead",
        description: "Vous vous videz de votre sang ou vous trouvez aux portes de la mort pour une autre raison.",
        reference: "LDB, pg. 622.",
        bullets: [
            "Tant que vous êtes dans cet état, vous êtes inconscient.",
            "L’état mourant est toujours associé à une intensité et, si celle-ci atteint mourant 4, vous mourez.",
            "Si vous êtes mourant, vous devez faire un test de récupération (page 459) au début de chacun de vos tours afin de déterminer si votre état s’améliore ou empire.",
            "L’intensité de votre état mourant augmente de 1 si vous subissez des dégâts pendant que vous êtes mourant, ou de 2 si vous subissez des dégâts infligés par un coup critique ou que vous obtenez un échec critique à votre jet de sauvegarde.",
            "Si vous quittez l’état mourant parce que vous avez réussi un test de récupération mais que vous êtes toujours à 0 point de vie, vous restez dans l’état inconscient, mais vous pouvez vous réveiller comme expliqué dans le descriptif de cet état.",
            "Si jamais vous regagnez un point de vie ou plus, vous quittez l’état mourant automatiquement et vous vous réveillez.",
            "À chaque fois que vous quittez l’état mourant, vous gagnez l’état blessé 1, ou augmentez l’intensité de votre état blessé de 1 si vous êtes déjà affecté par cet état."
        ]
    },
    {
        title: "Non detécté",
        icon: "ninja-mask",
        description: "Quand vous êtes non détecté par une créature, celle-ci ne peut pas vous voir du tout, elle n’a aucune idée de l’espace que vous occupez et elle ne peut pas vous prendre pour cible. Vous pouvez cependant toujours être affecté par les pouvoirs qui ciblent une zone.",
        reference: "LDB, pg. 622.",
        bullets: [
            "Quand vous êtes non détecté par une créature, celle-ci se trouve prise au dépourvu face à vous.",
            "Une créature face à laquelle vous êtes non détecté peut tenter de deviner quelle case vous occupez afin de vous prendre pour cible. Elle doit alors désigner une case et tenter une attaque. Le fonctionnement est alors le même que pour cibler une créature cachée (qui nécessite de faire un test nu DD 11), mais le test nu et le jet d’attaque sont faits en secret par le MJ qui ne précise alors pas si l’attaque échoue à cause d’un échec du test nu, du jet d’attaque ou d’un mauvais choix de case. Une créature peut entreprendre l’action Chercher pour tenter de vous trouver."
        ]
    },
    {
        title: "Observé",
        icon: "microscope",
        description: "Tout ce qui est clairement visible est observé en ce qui vous concerne.",
        reference: "LDB, pg. 622.",
        bullets: [
            "Si une créature prend des dispositions pour éviter d’être détectée, en utilisant Discrétion pour Se cacher par exemple, elle peut devenir cachée ou non détectée au lieu d’observée.",
            "Si vous bénéficiez d’un autre sens précis à la place ou en plus de votre vue, vous pourrez peut-être observer cette créature ou cet objet à l’aide de ce sens.",
            "Vous ne pouvez observer une créature qu’à l’aide de sens précis.",
            "Quand vous Cherchez une créature à l’aide de sens imprécis, celle-ci reste cachée plutôt qu’observée."
        ]
    },
    {
        title: "Paralysé",
        icon: "internal-injury",
        description: "Votre corps est figé sur place.",
        reference: "LDB, pg. 622.",
        bullets: [
            "Vous êtes pris au dépourvu et ne pouvez pas agir, sauf pour Vous souvenir de quelque chose et entreprendre des actions qui font seulement appel à votre esprit (ces actions sont déterminées par le MJ).",
            "Vos sens fonctionnent toujours, mais votre perception est limitée aux zones que vous pouvez percevoir sans bouger votre corps, vous n’êtes donc pas capable de Chercher."
        ]
    },
    {
        title: "Pétrifié",
        icon: "stone-bust",
        description: "Vous avez été changé en pierre.",
        reference: "LDB, pg. 623.",
        bullets: [
            "Vous ne pouvez pas agir ou sentir quoi que ce soit.",
            "Vous devenez un objet dont l’Encombrement est le double de votre Encombrement normal (généralement 12 pour une créature Moyenne pétrifiée ou 6 pour une Petite créature pétrifiée), avec CA 9, Solidité 8 et la même quantité de points de vie que vous aviez de votre vivant. Vous n’avez pas de Seuil de rupture.",
            "Quand vous redevenez une créature de chair et de sang, vous conservez la même quantité de points de vie que vous aviez en tant que statue.",
            "Si la statue est détruite, vous mourrez immédiatement.",
            "Tant que vous êtes pétrifié, votre corps et votre esprit se trouvent en stase et vous ne vieillissez pas ni ne remarquez le temps qui passe."
        ]
    },
    {
        title: "Pris au dépourvu",
        icon: "surprised",
        description: "Vous êtes distrait, ou quelque chose d’autre vous empêche de vous concentrer entièrement sur vos défenses.",
        reference: "LDB, pg. 623.",
        bullets: [
            "Vous subissez un malus de circonstances de −2 à votre CA.",
            "Certains effets vous confèrent l’état pris au dépourvu seulement face à certaines créatures ou certaines attaques. D’autres, notamment les états, vous rendent pris au dépourvu contre tout.",
            "Si une règle ne précise pas que cet état est seulement valable dans une situation donnée, il est valable pour toutes les situations. Par exemple, de nombreux effets précisent simplement : « la cible est prise au dépourvu »."
        ]

    },
    {
        title: "Ralenti",
        icon: "team-downgrade",
        description: "Vous perdez des actions.",
        reference: "LDB, pg. 623.",
        bullets: [
            "L’état ralenti est toujours accompagné d’une intensité. Quand vous regagnez des actions au début de votre tour, vous réduisez la quantité d’actions que vous gagnez par l’intensité de votre état ralenti.",
            "Dans la mesure où l’état ralenti produit son effet au début de votre tour, vous ne perdez pas immédiatement des actions si vous gagnez cet état lors de votre tour."
        ]
    },
    {
        title: "Serviable",
        icon: "paranoia",
        description: "Cet état reflète l’attitude d’une créature envers un personnage donné et seul un effet surnaturel (comme un sort) peut imposer cet état à un personnage joueur.",
        reference: "LDB, pg. 623.",
        bullets: [
            "Une créature serviable souhaite activement aider le personnage qui lui inspire cette attitude.",
            "Elle acceptera que ce personnage la Sollicite, tant que ces requêtes n’iront pas à l’encontre des objectifs ou de la qualité de vie de la créature serviable.",
            "Si le personnage ou l’un de ses alliés entreprend une action hostile contre la créature, l’attitude de cette dernière se dégrade proportionnellement à l’hostilité de l’action, dont le degré est déterminé par le MJ."
        ]
    },
    {
        title: "Sourd",
        icon: "human-ear",
        description: "Vous ne pouvez pas entendre.",
        reference: "LDB, pg. 623.",
        bullets: [
            "Vous échouez automatiquement à tous les tests de Perception qui reposent sur votre audition.",
            "Vous subissez un malus de statut de −2 à vos tests de Perception destinés à déterminer l’initiative et aux tests en rapport avec le son et d’autres sens.",
            "Si vous accomplissez une action qui a le trait audible, vous devez réussir un test nu DD 5 ou perdre l’action. Vous faites ce test après avoir dépensé l’action mais avant d’appliquer ses effets. Vous êtes immunisé contre les effets audibles."
        ]
    },
    {
        title: "Stupéfié",
        icon: "brain-dump",
        description: "Vos pensées et votre instinct sont embrouillés.",
        reference: "LDB, pg. 623.",
        bullets: [
            "L’état stupéfié est toujours accompagné d’une intensité. Vous subissez un malus de statut égal à cette intensité qui s’applique à vos tests et vos DD basés sur l’Intelligence, la Sagesse et le Charisme, dont vos jets de Volonté, vos jets d’attaques de sorts, vos DD de sorts et vos tests de compétences basés sur ces caractéristiques.",
            "À chaque fois que vous tentez de Lancer un sort quand vous êtes stupéfié, ce sort est interrompu, sauf si vous réussissez un test nu dont le DD est égal à 5 + l’intensité de votre état stupéfié."
        ]
    },
    {
        title: "Surchargé",
        icon: "weight-lifting-down",
        description: "Vous transportez plus de poids que vous ne pouvez en gérer.",
        reference: "LDB, pg. 623.",
        bullets: [
            "Tant que vous êtes surchargé, vous êtes maladroit 1 et vous subissez un malus de 3 m à toutes vos Vitesses. Comme pour l’ensemble des malus infligés à votre Vitesse, cette dernière ne peut être réduite à moins de 1,5 m."
        ]
    }
]

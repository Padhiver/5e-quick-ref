data_condition = [
        {
        title: "À terre",
        icon: "crawl",
        subtitle: "Vous êtes à terre",
        description: "Vous êtes à terre",
        reference: "PHB, pg. 290.",
        bullets: [
            "Votre seule option de déplacement est de ramper à moins de vous relever et de mettre fin à cet état.",
            "Vous êtes désavantagés lors de vos jets d'attaque.",
            "Un attaquant sera avantagé s'il se trouve à 1,50 mètre ou moins de vous sinon celui-ci sera désavantagé."
        ]
    },
	{
        title: "Assourdi",
        icon: "elf-ear",
        subtitle: "Vous ne pouvez plus entendre ",
        description: "Vous ne pouvez plus entendre",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous n'entendez plus rien et vous ratez automatiquement les tests de caractéristique liés à la perception auditive."
        ]
    },
	{
        title: "Aveuglé",
        icon: "one-eyed",
        subtitle: "Vous ne pouvez plus voir",
        description: "Vous ne pouvez plus voir",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous ratez automatiquement tout test de caractéristique faisant appel à la vue.",
            "Vos jets d'attaque sont désavantagés.",
            "Les jets d'attaque contre vous sont avantagés."
        ]
    },
	{
        title: "Blessures incapacitantes",
        icon: "internal-injury",
        subtitle: "Vous êtes victime d'une blessure",
        description: "Vous êtes victime d'une blessure incapacitante",
        reference: "DMG, pg. 290.",
        bullets: [
            "Le jet est à effectuer si l'un des personnages tombe à zéro points de vie. Pour guérir de ces blessures, il est impératif qu'une personne avec des compétences en médecine les traite.",
			"<i>1. Horrible cicatrice.</i><br> Le personnage est défiguré et il est impossible de dissimuler sa blessure. Il est désavantagé lors des tests de Charisme (Persuasion) mais avantagé lors des tests de Charisme (Intimidation). Cette blessure n'est pas curable.",
			"<i>2-3. Blessure interne.</i><br> Quand le personnage tente une action en plein combat, il doit faire un jet de sauvegarde de Constitution DD 15. S'il le rate, il perd son action et ne peut pas utiliser de réaction jusqu'au début de son prochain tour.",
			"<i>4-5. Boiterie.</i><br>La vitesse du personnage est réduite de 1,50 mètre. Il doit faire un jet de sauvegarde de Dextérité DD 10 après l'action foncer. S'il le rate, il tombe à terre.",
			"<i>6-9. Côte cassée.</i><br>Ces fractures ont le même effet que la blessure interne du dessus mais le DD du jet de sauvegarde est de 10.",
			"<i>10-13. Blessure infectée.</i><br> Le maximum de points de vie du personnage se réduit de 1 toutes les 24 heures tant que cette blessures persiste. S'il tombe à 0, le personnage meurt. La blessure peut être traitée sans compétence particulière sur un jet de Sagesse (Médecine) DD 15 à raison d'un jet toutes les 24h.",
			"<i>14-20. Cicatrice mineure.</i><br> La cicatrice n'a pas d'effet négatif."
        ]
    },
    {
        title: "Charmé",
        icon: "smitten",
        subtitle: "Vous êtes charmé",
        description: "Vous êtes charmé par quelqu'un",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous ne pouvez pas attaquer celui qui vous a charmé ou le viser avec une capacité ou un effet magique néfaste.",
            "Celui qui vous a charmé est avantagé lors des tests de caractérique effectués dans le cadre d'une intéraction sociale avec vous."
        ]
    },
     {
        title: "Empoigné",
        icon: "grab",
        subtitle: "Vous êtes empoigné",
        description: "Vous êtes empoigné",
        reference: "PHB, pg. 290.",
        bullets: [
            "Votre vitesse passe à 0 et vous ne pouvez plus bénéficer d'éventuels bonus de vitesse.",
            "Cet état se termine si la créature à l'origine de l'empoignement est neutralisée.",
            "Cet état prend fin également si vous êtes au délà de l'allonge de l'empoigneur, suite à un effet ou une action visant à ce résultat."
        ]
    },
	{
        title: "Empoisonné",
        icon: "deathcab",
        subtitle: "Vous êtes empoisonné",
        description: "Vous êtes empoisonné",
        reference: "PHB, pg. 291.",
        bullets: [
            "Vous êtes désavantagé lors de vos jets d'attaque et de vos jets de caractérique."
        ]
    },
	    {
        title: "Entravé",
        icon: "imprisoned",
        subtitle: "Vous êtes entravé",
        description: "Vous êtes entravé",
        reference: "PHB, pg. 291.",
        bullets: [
            "Votre vitesse tombe à 0 et vous ne pouvez plus bénéficer d'éventuels bonus de vitesse.",
            "Vos jets d'attaque sont désavantagés.",
            "Les jets d'attaque contre vous sont avantagés.",
            "Vous êtes désavantagés lors de vos jets de sauvagarde de Dextérité."
        ]
    },
	    {
        title: "Epuisement",
        icon: "crawl",
        subtitle: "Vous êtes épuisé",
        description: "L'épuisement se divise en six niveaux",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Niveau</th><th></th><th></th><th style='text-align:left'>Effet</th></tr><tr><td>1</td><td></td><td></td><td>Désavantage lors des tests de caractéristique</td></tr><tr><td>2</td><td></td><td></td><td>Vitesse réduite de moitié</td></tr><tr><td>3</td><td></td><td></td><td>Désavantage lors des jets d'attaque et de sauvegarde</td></tr><tr><td>4</td><td></td><td></td><td>Maximum de points de vie réduit de moitié</td></tr><tr><td>5</td><td></td><td></td><td>Vitesse réduite à 0</td></tr><tr><td>6</td><td></td><td></td><td>Décès</td></tr></table>",
            "Vous souffrez des effets de votre niveau d'épuisement actuel et de tous les effets des niveaux inférieurs.",
            "Un effet peut réduire l'épuisement au niveau indiqué dans sa description. L'épuisement prend fin si le niveau d'épuisement est à 0.",
			"Un repos long réduit de 1 niveau d'épuisement le niveau actuel, à condition d'avoir pu boire et manger."
        ]
    },
    {
        title: "Etourdi",
        icon: "internal-injury",
        subtitle: "Vous êtes étourdi",
        description: "Vous êtes étourdi",
        reference: "PHB, pg. 291.",
        bullets: [
            "Vous êtes neutralisé (voir l'état) et incapable de de vous déplacer et vous parlez en balbutiant.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "Les jets d'attaque contre vous sont avantagés."
        ]
    },
    {
        title: "Inconscient",
        icon: "coma",
        subtitle: "Vous êtes inconscient",
        description: "Vous êtes inconscient",
        reference: "PHB, pg. 291.",
        bullets: [
            "Vous êtes neutralisé (voir l'état), incapable de vous déplacer et de parler, et vous n'avez pas conscience de ce qui vous entoure.",
            "Vous lâchez tout ce que vous aviez en main et vous tomber à terre.",
            "Les jets d'attaque contre vous sont avantagés.",
            "Toute attaque réussie par un assaillant présent dans un rayon de 1,50 mètre de vous est considérée comme un coup critique.",
            "Vous ratez automatiquement tous vos jets de sauvegarde de Force et de Dextérité.",
        ]
	},
	    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "Vous êtes invisible",
        description: "Vous ne pouvez être vu sans l'intervention de la magie ou d'un sens spécial",
        reference: "PHB, pg. 291.",
        bullets: [
            "Vous êtes dans une zone de visibilité nulle si votre intention est de vous cacher.",
            "Vous pouvez cependant être détecté par le bruit ou les traces éventuelles que vous faites.",
            "Vous êtes avantagé lors de votre jet d'attaque.",
            "Les jets d'attaque contre vous sont désavantagés."
        ]
    },    
	{
		title: "Mourant",
        icon: "dead-head",
        subtitle: "Vous êtes en train de mourir",
        description: "Vous avez été réduit à zéro point de vie et vous êtes en train de mourir.",
        reference: "PHB, pg. 197.",
        bullets: [
            "Si vous êtes réduit à 0 point de vie par des dégâts qui ne vous tuent pas, vous tombez inconscient et êtes en train de mourir.",
            "Si vous recevez des soins, vous reprenez immédiatement conscience et vous n'êtes plus mourant.",
            "Lorsque vous êtes mourant, au début de chacun de vos tours, vous faites un jet de sauvegarde contre la mort. Lancez un d20 et n'ajoutez pas de modificateurs.",
            "Un 10 ou plus est un succès, un 9 ou moins est un échec.",
            "A votre troisième succès, vous devenez stable.",
            "A votre troisième échec, vous mourrez.",
            "Lancer un 1 compte comme deux échecs.",
            "Un résultat de 20 vous fait immédiatement regagner 1 point de vie.",
            "Vous pouvez également être stabilisé par un allié qui effectue l'action Stabiliser et réussit un test de Sagesse (médecine) DD 10.",
            "Une fois stable, vous regagnez 1 point de vie après 1d4 heures."
			]
    },
	    {
        title: "Neutralisé",
        icon: "internal-injury",
        subtitle: "Vous ne pouvez plus agir",
        description: "Vous ne pouvez plus effectuer d'actions ou des réactions",
        reference: "PHB, pg. 292.",
        bullets: [
        ]
    },
	    {
        title: "Paralysé",
        icon: "internal-injury",
        subtitle: "Vous êtes paralysé",
        description: "Vous êtes paralysé",
        bullets: [
            "Vous êtes neutralisé (voir l'état) et vous ne pouvez ni parler ni bouger.",
            "Vous ratez automatiquement tous vos jets de sauvegarde de Force et de Dextérité.",
            "Les jets d'attaque contre vous sont avantagés.",
            "Toute attaque réussie par un assaillant présent dans un rayon de 1,50 mètre de vous est considérée comme un coup critique."
        ]
    },
	    {
        title: "Pétrifié",
        icon: "stone-pile",
        subtitle: "Vous êtes transformé en solide",
        description: "Vous êtes transformé en substance solide inanimée (généralement en pierre) ainsi que tous les objets non magiques que vous portiez",
        reference: "PHB, pg. 292.",
        bullets: [
            "Votre poids est multiplié par dix et le vieillissement n'a plus d'effet sur vous tant que vous êtes dans cet état.",
            "Vous êtes neutralisé (voir l'état) et vous ne pouvez plus parler ni vous déplacer et vous n'êtes plus conscient de ce qui se passe autour de vous.",
            "Les jets d'attaque contre vous sont avantagés.",
            "Vous ratez automatiquement tous les jets de sauvegarde de Force et de Dextérité.",
            "Vous êtes résistant à tous les dégâts.",
            "Vous êtes immunisé contre le poison et les maladies, et ceux-ci sont suspendus si vous en étiez affecté."
        ]
    },	
    {
        title: "Terrorisé",
        icon: "sharp-smile",
        subtitle: "Vous êtes terrorisé",
        description: "Vous êtes terrorisé",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous êtes désavantagé lors des tests de caractéristique et de vos jets d'attaque tant que vous voyez la source de votre frayeur .",
            "Vous êtes en incapacité de vous approcher intentionnellement de la source de votre frayeur."
        ]
    }

]

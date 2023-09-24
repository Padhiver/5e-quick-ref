data_action_deplacement = [
    {
        title: "Marcher Rapidement",
        icon: "run",
        subtitle: "Coût: 1 action",
        reference: "LDB, pg. 471.",
        bullets: [
            "Vous vous déplacez d’une distance maximale égale à votre Vitesse"
        ]
    },
	{
        title: "Faire un pas",
        icon: "walking-boot",
        subtitle: "Coût: 1 action",
        description: "Conditions. Votre Vitesse est d’au moins 3 m.",
        reference: "LDB, pg. 470.",
        bullets: [
            "Vous vous déplacez prudemment de 1,50 m. Faire un pas ne déclenche pas de réactions.",
            "Vous ne pouvez pas Faire un pas quand vous vous trouvez sur un terrain difficile, et vous ne pouvez pas Faire un pas en utilisant une autre Vitesse que votre Vitesse au sol."
        ]
    },
	 {
        title: "Bondir",
        icon: "sprint",
        subtitle: "Coût: 1 action",
        reference: "LDB, pg. 470.",
        bullets: [
            "Vous faites un petit saut sans prendre de risque. Vous pouvez Bondir de 3 m au maximum à l’horizontale si votre Vitesse est supérieure ou égale à 4,50 m, ou de 4,50 m au maximum à l’horizontale si votre Vitesse est supérieure ou égale à 9 m. Vous atterrissez dans l’espace où se termine votre Bond.",
            "Si vous Bondissez verticalement, vous pouvez vous déplacer de 90 cm en hauteur et de 1,50 m en longueur pour atteindre une surface surélevée.",
            "Vous devez faire appel à la compétence Athlétisme pour sauter sur de plus grandes distances."
        ]
    },
	    {
        title: "Ramper",
        icon: "crawl",
        subtitle: "Coût: 1 action",
        reference: "LDB, pg. 471.",
        description: "Conditions. Vous êtes à terre et votre Vitesse est d’au moins 3 m.",
        bullets: [
            "Vous vous déplacez de 1,50 m en rampant, en restant à terre."
        ]
    },
	 {
        title: "Se jeter à terre",
        icon: "crawl",
        subtitle: "Coût: 1 action",
        reference: "LDB, pg. 472.",
        bullets: [
            "Vous vous laissez tomber à terre."
        ]
    },
	    {
        title: "Se relever",
        icon: "crawl",
        subtitle: "Coût: 1 action",
        reference: "LDB, pg. 472.",
        bullets: [
			"Vous étiez à terre et vous Vous relevez."
        ]
    },
	 {
        title: "Creuser",
        icon: "stone-pile",
        subtitle: "Coût: 1 action",
        description: "Conditions. Vous avez une vitesse de creusement.",
        reference: "LDB, pg. 470.",
        bullets: [
            "Vous creusez un chemin à travers de la terre, du sable ou un autre matériau meuble avec d’une distance maximale égale à votre Vitesse de creusement. Vous ne pouvez pas creuser à travers la roche ou d’autres substances plus denses que la terre, sauf si un pouvoir vous le permet."
        ]
    },
    {
        title: "Se mettre en selle",
        icon: "horse-head",
        subtitle: "Coût: 1 action",
        description: "Conditions. Vous vous trouvez sur une case adjacente à une créature qui fait au moins une catégorie de taille de plus que la vôtre et qui accepte d’être votre monture.",
        reference: "LDB, pg. 472.",
        bullets: [
            "Vous enfourchez la créature et la chevauchez. Si vous êtes déjà en selle, vous pouvez à la place utiliser cette action pour descendre de selle et mettre pied à terre dans un espace adjacent à votre monture."
        ]
    },
	{
        title: "Voler",
        icon: "angel-wings",
        subtitle: "Coût: 1 action",
        description: "Conditions. Vous avez une vitesse de vol.",
        reference: "LDB, pg. 472.",
        bullets: [
            "Vous vous déplacez dans les airs avec une vitesse d’une distance maximale égale à votre Vitesse de vol.",
            "Vous faites appel aux règles du déplacement à travers un terrain difficile pour vous déplacer vers le haut (verticalement ou en diagonale).",
            "Vous pouvez vous diriger verticalement vers le sol de 3 m en dépensant 1,50 m de déplacement.",
            "Si vous Volez jusqu’au sol, vous ne subissez pas de dégâts de chute.",
            "Vous pouvez utiliser une action pour Voler sur une distance de 0 m afin de faire du vol stationnaire.",
            "Si vous êtes dans les airs à la fin de votre tour et que vous n’avez pas utilisé d’action pour Voler lors de ce tour, vous chutez."
        ]
    },
    {
        title: "Mise à l’abri",
        icon: "arrows-shield",
        subtitle: "Coût: 1 action",
        description: "Conditions. Vous bénéficiez d’un abri, vous trouvez près de vous un élément de votre environnement derrière lequel vous abriter, ou vous êtes à terre.",
        reference: "LDB, pg. 471.",
        bullets: [
            "Vous vous plaquez contre un mur ou vous jetez derrière un obstacle pour mieux vous mettre à l’abri.",
            "Vous bénéficiez des avantages liés à un abri standard (un bonus de circonstances de +2). Ces avantages perdurent jusqu’à ce que vous quittiez votre emplacement actuel, utilisiez une action d’attaque, vous trouviez dans l’état inconscient ou mettiez fin à cet effet par une action gratuite."
        ]
    },
	{
        title: "Arrêter une chute",
        icon: "falling",
        subtitle: "Coût: 1 réaction",
        reference: "LDB, pg. 472.",
        description: "Conditions. Vous avez une Vitesse de vol.",
        bullets: [
            "Vous faites un test d’Acrobaties pour ralentir votre chute. Le DD est généralement de 15, mais il peut être plus élevé en cas de turbulences ou d’autres circonstances particulières.",
            "<b>Succès.</b> Vous chutez délicatement et ne subissez pas de dégâts de chute."
        ]
    },
	{
        title: "Se raccrocher in extremis",
        icon: "hand",
        subtitle: "Coût: 1 réaction",
        reference: "LDB, pg. 472.",
        description: "Conditions. Vos mains ne sont pas entravées d’une quelconque manière.",
        bullets: [
            "Vous pouvez tenter de vous accrocher afin d’interrompre votre chute. Vous devez pour cela réussir un jet de Réflexes, généralement associé avec un DD pour Escalader. Si vous réussissez à vous raccrocher au rebord ou à la prise, vous pouvez alors Escalader en utilisant la compétence Athlétisme.",
            "<b>Succès critique</b> Vous réussissez à vous rattraper in extremis. Vous subissez quand même les dégâts correspondant à la hauteur de laquelle vous avez chuté, mais vous réduisez cette hauteur de 9 m.",
            "<b>Succès.</b> Vous réussissez à vous rattraper. Vous subissez quand même les dégâts correspondant à la hauteur de laquelle vous avez chuté, mais vous réduisez cette hauteur de 6 m.",
            "<b>Échec critique</b> Vous continuez votre chute et, si vous aviez déjà chuté d’une hauteur supérieure ou égale à 6 m quand vous avez utilisé cette réaction, vous subissez 10 dégâts contondants causés par l’impact pour toute tranche de 6 m de chute."
        ]
    }

]

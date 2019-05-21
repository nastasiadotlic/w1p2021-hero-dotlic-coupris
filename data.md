convertir le fichier en js et mettre au debut :
export default 
const img = require ('./assets/pictures/backgroundAthenes');

{
  "steps": [
    {
      "id": 1,
      "img": img,
      "message": "Oh c'est donc toi notre héros en quête de grandes aventures, tu as décidé donc de partir sur les traces des plus grands héros de la mythologie afin de prouver sa bravoure ! Mais... qui es tu ?",
      "actions": [
        {
          "answer": "LÉANDRE",
          "goto": 2
        },
        {
          "answer": "PHAENNA",
          "goto": 2
        }
      ]
    },
    {
      "id": 2,
      "message": "Bienvenue {machin}, ta quête commence ici, il est temps de quitter ton île natale pour partir à l’aventure. Mais tu as besoin d’un navire !",
      "actions": [
        {
          "answer": "DÉCIDER D'Y ALLER A LA NAGE",
          "goto": "/loose1"
        },
        {
          "answer": "SE RENDRE AU PORT",
          "goto": 3
        }
      ]
    },
    {
      "id": 3,
      "message": "Oh au fait, pensez à emporter vos économies, vous avez travaillé durement pour mettre de côté toutes ces oboles. Elles vous servirons forcément !",
      "actions": [
        {
          "answer": "CONTINUER", 
          "goto": 4
        }
      ]
    },
    {
      "id": 4,
      "message": "Vous voilà maintenant au port ! Plusieurs marchants de bateaux sont présents mais deux retiennent votre attention. Une chaloupe flambant neuve est fièrement exposée par son marchant. Son prix est assez élevé mais cela semble tout de même être une bonne affaire. Cependant un vieux rafiot est également disponible à la vente pour une bouchée de pain. Qu’allez vous acheter ?",
      "actions": [
        {
        "answer": "RAFFIOT",
        "goto": 5
        },
        {
          "answer": "CHALOUPE",
          "goto": 5
        }
      ]
    },
    {
      "id": 5,
      "message": "Félicitation vous êtes maintenant en possession d’un bâteau ! Sans attendre davantage, vous embarquez en mer, les eaux semblent plutôt calmes aujourd’hui, c’est le temps idéal ! Mais au bout de quelques heures de navigation en mer, un étrange phénomène se produit... devant vous, au milieu de la brûme apparait Poséidon. Alors que vous vous inclinez devant le dieu des Océans, celui-ci s’adresse à vous.",
      "actions": [
        {
          "answer": "CONTINUER", 
          "goto": 4
        }
      ]
    },
    {
      "id": 6,
      "message": "Je te salue [machin], j’interrompt ton voyage pour te confier une quête, comme tu le sais, j’ai récemment perdu face à ma nièce, les athéniens étaient pris de folie et l’ont choisit à ma place. Le symbole de leur union est un cadeau d’Athéna, un Olivier sacré, planté au coeur de la cité. Je veux que tu te rendes à Athènes et empoisonnes cet arbre ! Si tu remplis ta mission, tu seras très bien recompenser, les dieux savent récompenser le mortel le méritant.",
      "actions": [
        {
          "answer": "ACCEPTER",
          "goto": 7
        },
        {
          "answer": "REFUSER",
          "goto": 6,
          "condition": "chaloupe"
        },
        {
          "answer": "REFUSER",
          "goto": "/loose2",
          "condition": "raffiot"
        }
      ]
    },
    {
      "id": 7,
      "message": "Poséidon, fou de rage face à votre refus, déchaîne les mers et une énorme tempête éclate. Heureusement que vous aviez décidé de mettre toutes vos économies dans cette chaloupe ! Vous arrivez à survivre la tempête.",
      "actions": [
        {
          "answer": "Dormir à la belle étoile",
          "goto": "/loose3"
        },
        {
          "answer": "Passer la nuit à l’auberge",
          "goto": 8
        }
      ]
    },
    {
      "id": 8,
      "message": "Une fois rassasié et après une bonne nuit de sommeil, vous demandez à l’aubergiste le chemin d'Athènes.",
      "actions": [
        {
          "answer": "Reprendre la route",
          "goto": 10,
          "condition": "rafiot"
        },
        {
          "answer": "Reprendre la route",
          "goto": 9,
          "condition": "chaloupe"
        }
      ]
    },
    {
      "id": 9,
      "message": "Au bout de plusieurs heures de marche, vous arrivez dans le petit village de Kalyvia. C’est le jour du marché et la ville est agréablement animée. Après avoir acheté quelques provisions, vous rencontrez un marchand de chevaux. Voyager à cheval serait idéal pour vous rendre jusqu’à Athènes ! Malheureusement vous n'avez plus les moyens d'acheter une monture. Vous regardez aux alentours, le vendeur ne prête pas attention à vous. Aller à Athènes à pied ne  vous enthousiasme guère...",
      "actions": [
        {
          "answer": "Vous décidez de voler le cheval",
          "goto": "/loose4"
        },
        {
          "answer": "Vous décidez de continuer à pied",
          "goto": 11
        }
      ]
    },
    {
      "id": 10,
      "message": "Au bout de plusieurs heures de marche, vous arrivez dans le petit village de Kalyvia. C’est le jour du marché et la ville est agréablement animée. Après avoir acheté quelques provisions, vous rencontrez un marchand de chevaux. Voyager à cheval serait idéal pour vous rendre jusqu’à Athènes ! Vous avez été économe au début de votre voyage, cela vous permet maintenant d'acquérir un cheval !",
      "actions": [
        {
          "answer": "Vous décidez de continuer à pied",
          "goto": 11
        },
        {
          "answer": "Vous achetez le cheval",
          "goto": 11
        }
      ]
    },
    {
      "id": 11,
      "message": "Vous poursuivez votre aventure quand vous tombez sur un vieillard, gravement blessé. Aidez-moi !” vous crie-t-il.",
      "actions": [
        {
          "answer": "Vous l’ignorez",
          "goto": 12
        },
        {
          "answer": "Vous vous arrêtez",
          "goto": 13
        }
      ]
    },
    {
      "id": 12,
      "message": "Quelques jours plus tard, alors que vous poursuiviez votre route, le  paysage change. Des statues jonchent une forêt terriblement silencieuse... Vous entendez des bruits inquiétants tout autour de vous et apercevez alors Méduse... mais vous n’avez aucune arme pour vous défendre !",
      "actions": [
        {
          "answer": "Essayer de se cacher",
          "goto": "/loose5"
        },
        {
          "answer": "Ramasser une pierre pour essayer de se défendre",
          "goto": "/loose5"
        }
      ]
    },
    {
      "id": 13,
      "message": "Le vieillard semble rassuré de vous voir vous arrêter mais il a l’air vraiment mal en point. En reprenant son souffle, il se présente et vous explique ce qui lui est arrivé. Pour défendre son village, Nestor s’est attaqué à un monstre qui terrorisait régulièrement les villageois, le griffon des montagnes... Alors que vous vous étonnez que cette mission ait été confiée à quelqu’un de si âgé, Nestor vous explique que durant sa jeunesse, il avait déjà combattu d’autres créatures de ce genre. Il vous confie aussi que ses exploits d’antan lui ont permis d’obtenir une arme spéciale : une dague magique empoisonnant tous ceux qu’elle frappe. Malheureusement, après avoir poignardé le griffon, l’horrible animal lui a porté un coup fatal. Le pauvre Nestor est à l’agonie, mais il vous explique que c’est aussi le cas du monstre. Il vous propose donc d’aller achever la créature et de récupérer la dague comme récompense !",
      "actions": [
        {
          "answer": "Refuser la quête, vous n’avez pas le temps de l’aider",
          "goto": 12
        },
        {
          "answer": "Vous acceptez la quête et promettez de le venger !",
          "goto": 14
        }
      ]
    },
    {
      "id": 14,
      "message": "Quelques heures de marche suffisent pour atteindre le repère du griffon, vous vous aventurez prudemment dans une sombre caverne où vous apercevez enfin la créature  gravement blessée. La dague dépasse de son flan, le monste est à l’agonie. Vous réfléchissez à un stratagème afin de récupérer la dague prodigieuse.",
      "actions": [
        {
          "answer": "Ramasser une pierre et essayer de fendre le crâne de la bête",
          "goto": "/loose6"
        },
        {
          "answer": "Se cacher et attendre que le poison fasse effet",
          "goto": 15
        }
      ]
    },
    {
      "id": 15,
      "message": "Au bout de quelques heures, votre stratagème paye enfin ! Le griffon a succombé à sa blessure. Vous récupérez la dague tant convoitée ! Il est temps de continuer votre voyage vers Athènes.",
      "actions": [
        {
          "answer": "Poursuivre votre route",
          "goto": 16
        }
      ]
    },
    {
      "id": 16,
      "message": "Quelques jours plus tard, alors que vous poursuiviez votre route, le  paysage change. Des statues jonchent une forêt terriblement silencieuse... Tout semble plus sombre tout à coup. Vous dégainez votre dague, à l’affût de tout danger ! Soudain, vous apercevez une créature qui surgit des ténèbres. C’est Méduse ! Vous avez beaucoup entendu parler de ce monstre et vous connaissez son pouvoir. Vaincre cette créature ferait de vous un héros légendaire !",
      "actions": [
        {
          "answer": "Attaquer Méduse",
          "goto": "/loose5"
        },
        {
          "answer": "Se cacher et attendre une opportunité",
          "goto": 17
        }
      ]
    },
    {
      "id": 17,
      "message": "Loin d’être lâche, se cacher était une excellente idéé ! Vous patientez attendant une opportunité d’attaquer et celle-ci se présente rapidement à vous. Méduse vous tourne le dos. Vous en profitez pour lui lancer votre dague. La créature s’effondre et meurt sur le coup ! Vous pouvez enfin vous approcher d’elle. Après avoir récupéré votre arme, vous lui tranchez la tête. Selon la légende, même morte, les pouvoirs de Méduse restent intacts. Sa tête vous sera utile pour vaincre vos ennemis !",
      "actions": [
        {
          "answer": "Reprendre la route",
          "goto": 18
        }
      ]
    },
    {
      "id": 18,
      "message": "Vous arrivez enfin à Athènes ! La ville est majestueuse et pleine de beauté. Depuis l’extérieur de la ville, vous apercevez l’Acropole. Votre destination finale est au sommet de cette colline ; elle abrite le Parthénon et l’olivier sacré ! Vous hésitez entre entrer dès maintenant et attendre  le coucher du soleil.",
      "actions": [
        {
          "answer": "ENTRER",
          "goto": "/loose7"
        },
        {
          "answer": "ATTENDRE",
          "goto": 19
        }
      ]
    },
    {
      "id": 19,
      "message": "Après avoir attendu jusqu’au soir, vous pénétrez enfin discrètement dans la cité. Il n’y a plus grand-monde dans les rues et vous arrivez sans peine jusqu’à l’Acropole. Devant vous se dresse l’imposant temple d’Athéna, mais vous ne vous attardez pas devant cette prouesse architecturale, votre cible est si proche ! Alors que vous approchez de l’olivier sacré, des gardes vous barrent la route. Prévenu par Athéna de votre arrivée, ils ont ordre de vous arrêter.",
      "actions": [
        {
          "answer": "Se battre avec la dague",
          "goto": "/loose8"
        },
        {
          "answer": "Utiliser la tête de Méduse",
          "goto": 20
        }
      ]
    },
    {
      "id": 20,
      "message": "Vous brandissez la tête de Méduse devant vous et pétrifiez les gardes, complètement impuissants ! La voie est libre et vous voilà devant l’olivier. Poséidon vous a ordonné de l’empoisonner parce que c’est le symbole de la victoire d’Athéna. Concernant le poison, vous avez bien fait de venger Nestor ! Son arme est exactement ce qu’il vous faut. Vous la plantez dans les racines et l’effet semble étonnement rapide. Les branches s’affaissent, les feuilles fanent.",
      "actions": [
        {
          "answer": "Continuer",
          "goto": 21
        }
      ]
    },
    {
      "id": 21,
      "message": "Très vite, comme si une sorte d’alerte avait été donnée, les Athéniens sortent de leurs demeures, désemparés par votre acte ! Comment vont-ils vivre sans la bénédiction d’Athéna ? Fous de colère, ils se ruent vers l’Acropole mais sont arrêtés par l’apparition soudaine de Poséidon. Poséïdon vous félicite pour votre bravoure et promet aux Athéniens de les protéger.",
      "actions": [
        {
          "answer": "Continuer",
          "goto": 22
        }
      ]
    },
    {
      "id": 22,
      "message": "Les dieux savent tenir leurs promesses et Poséidon ne fait pas exception à la règle. Il vous laisse même le choix entre deux présents. Sa bénédiction vous permettra de naviguer librement sur tous les océans tout en vous assurant une victoire dans chacune de vos batailles navales. Sa seconde proposition est une arme, un trident pour être exact. Forgé pour Poséidon en personne, il a pour caractéristique de ne jamais manquer sa cible. Qu'allez vous choisir ?",
      "actions": [
        {
          "answer": "La bénédiction",
          "goto": "/win"
        },
        {
          "answer": "L'arme",
          "goto": "/win"
        }
      ]
    }
  ]
}

"copy" : "rm -rf dist && mkdir dist && mkdir dist/assets && cp -R app/assets/img dist/assets"
"dev": "npm run copy && parcel app/index.html"
"build": "npm run copy && parcel build app/index.html && cp _redirects dist/"

dans json img: mettre l'url de l'image
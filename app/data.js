const city = require('./assets/pictures/backgroundCity.jpg');
const harbour = require('./assets/pictures/backgroundHarbour.jpg');
const sea = require('./assets/pictures/backgroundSea.jpg');
const poseidon = require('./assets/pictures/backgroundPoseidon.jpg');
const storm = require('./assets/pictures/backgroundStorm.jpg');
const hostel = require('./assets/pictures/backgroundHostel.jpg');
const market = require('./assets/pictures/backgroundMarket.jpg');
const oldman = require('./assets/pictures/backgroundOldman.jpg');
const cave = require('./assets/pictures/backgroundCave.jpg');
const forest = require('./assets/pictures/backgroundForest.jpg');
const athene = require('./assets/pictures/backgroundAthene.jpg');
const night = require('./assets/pictures/backgroundAtheneNight.jpg');


export default {
  "steps": [
    {
      "id": 1,
      "img": city,
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
      "img": city,
      "message": "Bienvenue {machin}, ta quête commence ici, il est temps de quitter ton île natale pour partir à l’aventure. Mais tu as besoin d’un navire !",
      "actions": [
        {
          "answer": "DÉCIDER D'Y ALLER A LA NAGE",
          "loose": "loose1"
        },
        {
          "answer": "SE RENDRE AU PORT",
          "goto": 3
        }
      ]
    },
    {
      "id": 3,
      "img": city,
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
      "img": harbour,
      "message": "Vous voilà maintenant au port ! Plusieurs marchants de bateaux sont présents mais deux retiennent votre attention. Une chaloupe flambant neuve est fièrement exposée par son marchant. Son prix est assez élevé mais cela semble tout de même être une bonne affaire. Cependant un vieux rafiot est également disponible à la vente pour une bouchée de pain. Qu’allez vous acheter ?",
      "actions": [
        {
        "answer": "CHALOUPE",
        "goto": 5
        },
        {
          "answer": "RAFFIOT",
          "goto": 11
        }
      ]
    },
    //BRANCHE CHALOUPE
    {
      "id": 5,
      "img": sea,
      "message": "Félicitation vous êtes maintenant en possession d’un bâteau ! Sans attendre davantage, vous embarquez en mer, les eaux semblent plutôt calmes aujourd’hui, c’est le temps idéal ! Mais au bout de quelques heures de navigation en mer, un étrange phénomène se produit... devant vous, au milieu de la brûme apparait Poséidon. Alors que vous vous inclinez devant le dieu des Océans, celui-ci s’adresse à vous.",
      "actions": [
        {
          "answer": "CONTINUER", 
          "goto": 6,
        }
      ]
    },
    {
      "id": 6,
      "img": poseidon,
      "message": "Je te salue [machin], j’interrompt ton voyage pour te confier une quête, comme tu le sais, j’ai récemment perdu face à ma nièce, les athéniens étaient pris de folie et l’ont choisit à ma place. Le symbole de leur union est un cadeau d’Athéna, un Olivier sacré, planté au coeur de la cité. Je veux que tu te rendes à Athènes et empoisonnes cet arbre ! Si tu remplis ta mission, tu seras très bien recompenser, les dieux savent récompenser le mortel le méritant.",
      "actions": [
        {
          "answer": "ACCEPTER",
          "goto": 8
        },
        {
          "answer": "REFUSER",
          "goto": 7,
        },
      ]
    },
    {
      "id": 7,
      "img": storm,
      "message": "Poséidon, fou de rage face à votre refus, déchaîne les mers et une énorme tempête éclate. Heureusement que vous aviez décidé de mettre toutes vos économies dans cette chaloupe ! Vous arrivez à survivre la tempête.",
      "actions": [
        {
          "answer": "CONTINUER", 
          "goto": 8,
        }
      ]
    },
    {
      "id": 8,
      "img": hostel,
      "message": "Vous arrivez au bout de votre voyage en mer et débarquez sur une contrée loin de chez vous. Il fait nuit, vous avez besoin d’un endroit pour dormir. Au loin, vous voyez une auberge. Une nuit au chaud vous ferait le plus grand bien. Mais il ne vous reste que quelques oboles, ou allez-vous dormir ?",
      "actions": [
        {
          "answer": "AUBERGE",
          "goto": 9,
        },
        {
          "answer": "DEHORS",
          "loose": "loose3",
        }
      ]
    },
    {
      "id": 9,
      "img": hostel,
      "message": "Une fois rassasié et après une bonne nuit de sommeil, vous demandez à l’aubergiste le chemin d'Athènes.",
      "actions": [
        {
          "answer": "REPRENDRE LA ROUTE", 
          "goto": 10
        },
      ]
    },
    {
      "id": 10,
      "img": market,
      "message": "Au bout de plusieurs heures de marche, vous arrivez dans le petit village de Kalyvia. C’est le jour du marché et la ville est agréablement animée. Après avoir acheté quelques provisions, vous rencontrez un marchand de chevaux. Voyager à cheval serait idéal pour vous rendre jusqu’à Athènes ! Malheureusement vous n'avez plus les moyens d'acheter une monture. Vous regardez aux alentours, le vendeur ne prête pas attention à vous. Aller à Athènes à pied ne vous enthousiasme guère...",
      "actions": [
        {
          "answer": "VOLER",
          "loose": "loose4"
        },
        {
          "answer": "REPRENDRE LA ROUTE",
          "goto": 16
        }
      ]
    }, //FIN BRANCHE CHALOUPE
    { //BRANCHE RAFFIOT
      "id": 11,
      "img": sea,
      "message": "Félicitation vous êtes maintenant en possession d’un bâteau ! Sans attendre davantage, vous embarquez en mer, les eaux semblent plutôt calmes aujourd’hui, c’est le temps idéal ! Mais au bout de quelques heures de navigation en mer, un étrange phénomène se produit... devant vous, au milieu de la brûme apparait Poséidon. Alors que vous vous inclinez devant le dieu des Océans, celui-ci s’adresse à vous.",
      "actions": [
        {
          "answer": "CONTINUER", 
          "goto": 12,
        }
      ]
    },
    {
      "id": 12,
      "img": poseidon,
      "message": "Je te salue [machin], j’interrompt ton voyage pour te confier une quête, comme tu le sais, j’ai récemment perdu face à ma nièce, les athéniens étaient pris de folie et l’ont choisit à ma place. Le symbole de leur union est un cadeau d’Athéna, un Olivier sacré, planté au coeur de la cité. Je veux que tu te rendes à Athènes et empoisonnes cet arbre ! Si tu remplis ta mission, tu seras très bien recompenser, les dieux savent récompenser le mortel le méritant.",
      "actions": [
        {
          "answer": "ACCEPTER",
          "goto": 13
        },
        {
          "answer": "REFUSER",
          "loose": "loose2",
        },
      ]
    },
    {
      "id": 13,
      "img": hostel,
      "message": "Vous arrivez au bout de votre voyage en mer et débarquez sur une contrée loin de chez vous. Il fait nuit, vous avez besoin d’un endroit pour dormir. Au loin, vous voyez une auberge. Une nuit au chaud vous ferait le plus grand bien. Mais il ne vous reste que quelques oboles, ou allez-vous dormir ?",
      "actions": [
        {
          "answer": "AUBERGE",
          "goto": 14,
        },
        {
          "answer": "DEHORS",
          "loose": "loose3",
        }
      ]
    },

    {
      "id": 14,
      "img": hostel,
      "message": "Une fois rassasié et après une bonne nuit de sommeil, vous demandez à l’aubergiste le chemin d'Athènes.",
      "actions": [
        {
          "answer": "REPRENDRE LA ROUTE", 
          "goto": 15
        },
      ]
    },
    {
      "id": 15,
      "img": market,
      "message": "Au bout de plusieurs heures de marche, vous arrivez dans le petit village de Kalyvia. C’est le jour du marché et la ville est agréablement animée. Après avoir acheté quelques provisions, vous rencontrez un marchand de chevaux. Voyager à cheval serait idéal pour vous rendre jusqu’à Athènes ! Vous avez été économe au début de votre voyage, cela vous permet maintenant d'acquérir un cheval !",
      "actions": [
        {
          "answer": "ACHETER",
          "goto": 16,
        },
        {
          "answer": "REPRENDRE LA ROUTE",
          "goto": 16
        }
      ]
    }, //FIN BRANCHE RAFFIOT
    {  //REPRISE BRANCHE COMMUNE
      "id": 16,
      "img": oldman,
      "message": "Vous poursuivez votre aventure quand vous tombez sur un vieillard, gravement blessé. Aidez-moi !” vous crie-t-il.",
      "actions": [
        {
          "answer": "IGNORER",
          "goto": 22
        },
        {
          "answer": "S'ARRÊTER",
          "goto": 17
        }
      ]
    },
    {
      "id": 17,
      "img": oldman,
      "message": "Le vieillard semble rassuré de vous voir vous arrêter mais il a l’air vraiment mal en point. En reprenant son souffle, il se présente et vous explique ce qui lui est arrivé. Pour défendre son village, Nestor s’est attaqué à un monstre qui terrorisait régulièrement les villageois, le griffon des montagnes... Alors que vous vous étonnez que cette mission ait été confiée à quelqu’un de si âgé, Nestor vous explique que durant sa jeunesse, il avait déjà combattu d’autres créatures de ce genre.",
      "actions": [
        {
          "answer": "CONTINUER",
          "goto": 18
        }
      ]
    },
    {
      "id": 18,
      "img": oldman,
      "message": "Il vous confie aussi que ses exploits d’antan lui ont permis d’obtenir une arme spéciale : une dague magique empoisonnant tous ceux qu’elle frappe. Malheureusement, après avoir poignardé le griffon, l’horrible animal lui a porté un coup fatal. Le pauvre Nestor est à l’agonie, mais il vous explique que c’est aussi le cas du monstre. Il vous propose donc d’aller achever la créature et de récupérer la dague comme récompense !",
      "actions": [
        {
          "answer": "ACCEPTER",
          "goto": 19
        },
        {
          "answer": "REFUSER",
          "goto": 22
        }
      ]
    },
    {
      "id": 19,
      "img": cave,
      "message": "Quelques heures de marche suffisent pour atteindre le repère du griffon, vous vous aventurez prudemment dans une sombre caverne où vous apercevez enfin la créature  gravement blessée. La dague dépasse de son flan, le monste est à l’agonie. Vous réfléchissez à un stratagème afin de récupérer la dague prodigieuse. Vous pourriez ramasser une pierre et essayer de fendre le crâne de la bête ou vous cacher et attendre que le poison fasse effet.",
      "actions": [
        {
          "answer": "ATTAQUER",
          "loose": "loose5"
        },
        {
          "answer": "SE CACHER",
          "goto": 20
        }
      ]
    },
    {
      "id": 20,
      "img": cave,
      "message": "Au bout de quelques heures, votre stratagème paye enfin ! Le griffon a succombé à sa blessure. Vous récupérez la dague tant convoitée ! Il est temps de continuer votre voyage vers Athènes.",
      "actions": [
        {
          "answer": "REPRENDRE LA ROUTE",
          "goto": 21
        }
      ]
    },
    {
      "id": 21,
      "img": forest,
      "message": "Quelques jours plus tard, alors que vous poursuiviez votre route, le  paysage change. Des statues jonchent une forêt terriblement silencieuse... Tout semble plus sombre tout à coup. Vous dégainez votre dague, à l’affût de tout danger ! Soudain, vous apercevez une créature qui surgit des ténèbres.",
      "actions": [
        {
          "answer": "CONTINUER",
          "goto": 23
        }
      ]
    }, 
    {
      "id": 22,
      "img": forest,
      "message": "Quelques jours plus tard, alors que vous poursuiviez votre route, le  paysage change. Des statues jonchent une forêt terriblement silencieuse... Vous entendez des bruits inquiétants tout autour de vous et apercevez alors Méduse... mais vous n’avez aucune arme pour vous défendre !",
      "actions": [
        {
          "answer": "ATTAQUER",
          "loose": "loose6"
        },
        {
          "answer": "SE CACHER",
          "loose": "loose6"
        }
      ]
    },
    {
      "id": 23,
      "img": forest,
      "message": "C’est Méduse ! Vous avez beaucoup entendu parler de ce monstre et vous connaissez son pouvoir. Vaincre cette créature ferait de vous un héros légendaire ! Vous pourriez  attaquer mais il  serait peut être plus sage d'attendre...",
      "actions": [
        {
          "answer": "ATTAQUER",
          "loose": "loose6"
        },
        {
          "answer": "SE CACHER",
          "goto": 24
        }
      ]
    },
    {
      "id": 24,
      "img": forest,
      "message": "Loin d’être lâche, se cacher était une excellente idéé ! Vous patientez attendant une opportunité d’attaquer et celle-ci se présente rapidement à vous. Méduse vous tourne le dos. Vous en profitez pour lui lancer votre dague. La créature s’effondre et meurt sur le coup ! Vous pouvez enfin vous approcher d’elle. Après avoir récupéré votre arme, vous lui tranchez la tête. Selon la légende, même morte, les pouvoirs de Méduse restent intacts. Sa tête vous sera utile pour vaincre vos ennemis !",
      "actions": [
        {
          "answer": "REPRENDRE LA ROUTE",
          "goto": 25
        },
      ]
    },
    {
      "id": 25,
      "img": athene,
      "message": "Vous arrivez enfin à Athènes ! La ville est majestueuse et pleine de beauté. Depuis l’extérieur de la ville, vous apercevez l’Acropole. Votre destination finale est au sommet de cette colline ; elle abrite le Parthénon et l’olivier sacré  !  Mais la ville est encore très fréquenter, qu'allez vous faire ?",
      "actions": [
          {
            "answer": "ENTRER",
            "loose": "loose7"
         },
        {
          "answer": "ATTENDRE",
          "goto": 26
        }
      ]
    },
    {
    "id": 26,
    "img": night,
    "message": "Après avoir attendu jusqu’au soir, vous pénétrez enfin discrètement dans la cité. Il n’y a plus grand-monde dans les rues et vous arrivez sans peine jusqu’à l’Acropole. Devant vous se dresse l’imposant temple d’Athéna, mais vous ne vous attardez pas devant cette prouesse architecturale, votre cible est si proche !",
      "actions": [
          {
          "answer": "CONTINUER",
          "goto": 27
        },
      ]
    },
    {
    "id": 27,
    "img": night,
    "message": "Alors que vous approchez de l’olivier sacré, des gardes vous barrent la route. Prévenu par Athéna de votre arrivée, ils ont ordre de vous arrêter.",
        "actions": [
        {
          "answer": "LA DAGUE EMPOISONNÉE",
          "loose": "loose8"
        },
        {
          "answer": "LA TÊTE DE MÉDUSE",
          "goto": 28
        }
      ]
    },
    {
      "id": 28,
      "img": night,
      "message": "Vous brandissez la tête de Méduse devant vous et pétrifiez les gardes, complètement impuissants ! La voie est libre et vous voilà devant l’olivier. Poséidon vous a ordonné de l’empoisonner parce que c’est le symbole de la victoire d’Athéna.",
        "actions": [
          {
            "answer": "TERMINER VOTRE QUÊTE",
            "goto": 29
          }
        ]
      },
      {
        "id": 29,
        "img": night,
        "message": " A propos de poison, vous avez bien fait de venger Nestor ! Son arme est exactement ce qu’il vous faut. Vous la plantez dans les racines et l’effet semble étonnement rapide. Les branches s’affaissent, les feuilles fanent.",
      "actions": [
        {
          "answer": "CONTINUER",
          "goto": 30
        }
      ]
    },
    {
      "id": 30,
      "img": night,
      "message": "Très vite, comme si une sorte d’alerte avait été donnée, les Athéniens sortent de leurs demeures, désemparés par votre acte ! Comment vont-ils vivre sans la bénédiction d’Athéna ? Fous de colère, ils se ruent vers l’Acropole mais sont arrêtés par l’apparition soudaine de Poséidon. Poséïdon vous félicite pour votre bravoure et promet aux Athéniens de les protéger.",
      "actions": [
        {
          "answer": "ECOUTER",
          "goto": 31
        }
      ]
    },
    {
      "id": 31,
      "img": night,
      "message": "Les dieux savent tenir leurs promesses et Poséidon ne fait pas exception à la règle. Il vous laisse même le choix entre deux présents. Sa bénédiction vous permettra de naviguer librement sur tous les océans tout en vous assurant une victoire dans chacune de vos batailles navales. Sa seconde proposition est une arme, un trident pour être exact. Forgé pour Poséidon en personne, il a pour caractéristique de ne jamais manquer sa cible. Qu'allez vous choisir ?",
      "actions": [
        {
          "answer": "BÉNÉDICTION",
          "goto": "/win"
        },
        {
          "answer": "ARME",
          "goto": "/win"
        }
      ]
    }
  ]
};
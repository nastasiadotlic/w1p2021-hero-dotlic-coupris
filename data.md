{
  "steps": [
    {
      "id": 1,
      "message": "Oh c'est donc toi notre héros en quête de grandes aventures, tu as décidé donc de partir sur les traces des plus grands héros de la mythologie afin de prouver sa bravoure ! Mais... qui es tu ? ",
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
    }
    {
      "id": 2,
      "message": "Bienvenue [name], ta quête commence ici, il est temps de quitter ton île natale pour partir à l’aventure. Mais tu as besoin d’un navire !",
      "actions": [
        {
          "answer": "Décider d’y aller à la nage",
          "goto": 3
        },
        {
          "answer": "Se rendre au port pour acheter un bateau",
          "goto": 4
        }
      ]
    }
    {
      "id": 3,
      "message": "Oh non ! Tu t’es fait dévorer par des requins ! Tu aurais dû prendre le bateau...",
      "actions": [
        {
          "text": "Recommencer",
          "goto": "/home"
        }
      ]
    }
  ]
}
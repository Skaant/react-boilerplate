import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

export default function SelectionTutorial() {
  const game = useContext(GameContext)[0];
  return (
    <div className="bg-light text-dark-lighter mt-2 p-2">
      {game ? (
        game.tutorial === 0 ? (
          <>
            <p>L'espace ... infini, ou presque.</p>
            <p>
              Nous sommes à l'Expans-Era, les Zums se propagent
              exponentiellement dans l'univers à bord d'une immense forêt
              spatiale : Grand-Arbre.
            </p>
            <p>
              Toutes les formes de vie se développent, et toutes les idées du
              bien commun.
            </p>
            <p>
              Mais, encore, dans les recoins les plus éloignés, quelques bribes
              de matières et d'énergie n'ont pas encore été colonisées par la
              vie.
            </p>
            <p>
              Là, un vaisseau-graine file dans la nuit noire, à la recherche
              d'une terre à laquelle s'intégrer.
            </p>
            <p>
              <b>Cliquez sur le vaisseau graine.</b>
            </p>
          </>
        ) : game.tutorial === 1 ? (
          <>
            <p>
              Ni le vaisseau-graine ni les Zums à bord ne le savent, mais au
              loin se profile leur destination.
            </p>
            <p>Bientôt se sera le choc.</p>
            <p>
              Et si tout se passe bien, au contact du Wa, la graine va germer et
              ses habitants se réveiller.
            </p>
            <p>
              <b>Cliquez sur Tour suivant.</b>
            </p>
          </>
        ) : game.tutorial === 2 ? (
          <>
            <p>Impact !</p>
            <p>
              Le vaisseau-graine a percuté la surface et s'est enfoncé dans le
              sol.
            </p>
            <p>
              Un peu de temps, rien en comparaison du voyage, a passé et de la
              pluie est tombée.
            </p>
            <p>La coquille s'est ramollie et un début de racine l'a percé.</p>

            <p>
              <b>Réhydratez le vaisseau-graine.</b>
            </p>
          </>
        ) : game.tutorial === 3 ? (
          <>
            <p>Ca y est, les tissus du vaisseau-graine se sont assouplis.</p>
            <p>
              Des processus organiques s'enclenchent, et même une production de
              Jing s'en suit.
            </p>
            <p>
              Mais, problème : le peu de Wa capté par la racine est toute entier
              consommé dans le processus.
            </p>
            <p>Or</p>
            <p>
              <b>
                Jouez deux tours pour améliorer les racines au moins jusqu'à 3 /
                5.
              </b>
            </p>
          </>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

import React from "react";
import { RecDescp, Recocontainer, RecTittle } from "./RecomendationStyles";

const Recomendation = (props) => {
  const { valor = 0 } = props;

  return (
    <>
      {valor <= 20 && (
        //   Valores menores
        <Recocontainer>
          <RecTittle>Resultados y recomendaciones</RecTittle>
          <RecDescp>
            La Organización Mundial de la Salud (OMS) sugiere que los azúcares
            libres no deben representar más del 10% de nuestra ingesta diaria de
            energía.Para un adulto activo promedio que requiere 2000
            kilocalorías al día, 10% significa no más de 200 kilocalorías
            provenientes de azúcares libres
          </RecDescp>
          <RecTittle>Calculo</RecTittle>
          <RecDescp>
            Tu valor ingresado fue de {valor} lo que equivale a {valor * 4}{" "}
            kilocalorias
          </RecDescp>
          <RecTittle>Tus valores y significado</RecTittle>
          <RecDescp>
            Tus niveles de azucares son bajos lo que significa que
            <ul>
              <li>
                Entrarás en cetosis, como resultado, puedes experimentar algún
                calambre muscular, dolores de cabeza y más fatiga.
              </li>
              <li>
                El azúcar es un alimento alto en calorías, que carece de
                vitaminas, minerales y fibra. Al ser tan pobre en nutrientes y
                rica en calorías, este ingrediente acumula grasa y puede causar
                sobrepeso.
              </li>
              <li>Cuidaras de tu higado</li>
              <li>Se previenen calculos renales en 25% y 33%</li>
            </ul>
          </RecDescp>
        </Recocontainer>
      )}
      {21 <= valor && valor <= 25 && (
        <Recocontainer>
          <RecTittle>Resultados y recomendaciones mayores</RecTittle>
          <RecDescp>
            Tus niveles de ingesta de azucares se encuentran de dentro de la
            valores establecidos por la OMS para el consumo de azucar, recuerda
            no superarlos ya que esto conlleva complicaciones medicas
          </RecDescp>
          <RecTittle>Calculo</RecTittle>
          <RecDescp>
            Tu valor ingresado fue de {valor} lo que equivale a {valor * 4}{" "}
            calorias
          </RecDescp>
          <RecTittle>Tus valores y significado</RecTittle>
          <RecDescp>
            Tus niveles de azucares son promedio lo que significa que
            <ul>
              <li>
                Evita que se presente la resistencia a la insulina. A mayor
                cantidad de azúcar en la dieta, mayor sobrepeso y obesidad.
                Esto, a su vez, aumenta el riesgo de alta presión, niveles altos
                de colesterol en sangre y diabetes tipo 2
              </li>
              <li>
                El azúcar es un alimento alto en calorías, que carece de
                vitaminas, minerales y fibra. Al ser tan pobre en nutrientes y
                rica en calorías, este ingrediente acumula grasa y puede causar
                sobrepeso.
              </li>
              <li>Cuidaras de tu higado</li>
              <li>Recuperación del umbral de los sabores</li>
            </ul>
          </RecDescp>
        </Recocontainer>
      )}
      {(valor) =>
        26 && (
          <>
            <Recocontainer>
              <RecTittle>Resultados y recomendaciones </RecTittle>
              <RecDescp>
                Tu niveles de azucar se encuentran por encima de los niveles
                estipulados por la OMS lo cual te generara complicaciones de
                salud
              </RecDescp>
              <RecTittle>Calculo</RecTittle>
              <RecDescp>
                Tu valor ingresado fue de {valor} lo que equivale a {valor * 4}{" "}
                calorias
              </RecDescp>
              <RecTittle>Tus valores y significado</RecTittle>
              <RecDescp>
                Tus niveles de azucares son promedio lo que significa que
                <ul>
                  <li>
                    Una dieta alta en fructosa a largo plazo altera la capacidad
                    del cerebro de aprender y recordar información
                  </li>
                  <li>
                    Las personas con trastornos del estado de ánimo suelen tener
                    dietas de mala calidad, bajas en frutas y verduras pero
                    elevadas en grasas y azúcares
                  </li>
                  <li>
                    Si una persona ingiere demasiado azúcar, el páncreas trabaja
                    de más: genera muy elevadas cantidades de insulina, que no
                    solo son un factor de riesgo de diabetes, sino que también
                    alteran la regulación del apetito.
                  </li>
                </ul>
              </RecDescp>
            </Recocontainer>
            <Recocontainer>
              <RecTittle> Alimentos que podrian ayudarte </RecTittle>
              <RecDescp>
                Lista de alimentos
                <ul>
                  <li>Brócoli y brotes de brócoli</li>
                  <li>Mariscos</li>
                  <li>Calabaza y semillas de calabaza</li>
                  <li>Nueces y mantequilla de nueces </li>
                </ul>
              </RecDescp>
            </Recocontainer>
          </>
        )
      }
    </>
  );
};

export default Recomendation;

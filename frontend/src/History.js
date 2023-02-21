import React from 'react'
import styles from './styles/History.module.css'
import abe from './images/abelenstra.jpg'
import faas from './images/fasswilkes.jpg'
import johan from './images/johancruijff.jpg'
import marco from './images/marcovanbasten.jpg'

const History = () => {
    return (
        <div className={styles.historyWrapper}>
            <div className={styles.history}>
                <span className={styles.ontstaan}>Ontstaan</span>
                        <div className={styles.historyText}>

                            In 1865 werd de allereerste officiële wedstrijd gespeeld. De wedstrijd vond plaats in Enschede. 
                            De teams die speelden waren Britse textielarbeiders en een team van Haagse textielarbeiders. 
                            De score is onbekend, wel is bekend dat die wedstrijd zich in Enschede heeft afgespeeld.<br /><br />

                            In 1879 werd de eerste voetbalclub opgericht, HFC heette die club. HFC staat voor: Haarlemsche Football Club. 
                            De jongen die het oprichtte was op dat moment veertien jaar oud en heette Pim Mulier, je kan wel stellen dat Pim Mulier de vader van het Nederlandse voetbal is. 
                            Mulier heeft het voetbal verspreid in Nederland.<br /><br />

                            In 1882 waren er al wat meer voetbalclubs opgericht. 
                            Je had clubs zoals Hercules uit Utrecht, ReV uit Apeldoorn, DFC uit Dordrecht en HVV uit Den haag. 
                            Tegenwoordig spelen deze clubs niet meer mee in het betaalde voetbal. 
                            De clubs die wel voor 1900 zijn opgericht die tot op heden nog mee doen met het betaald voetbal zijn Sparta Rotterdam, Vitesse Arnhem en Willem II uit Tilburg. 
                            Van de traditionele top drie zoals we ze nu kennen werd Ajax als eerste opgericht, namelijk in 1900. Feyenoord werd in 1908 opgericht en daarna kwam PSV in 1913. 
                            Voetbal werd lange tijd alleen maar op amateurniveau gespeeld. De reden was dat de KNVB tegen betaald voetbal was. 
                            Als er toch spelers vertrokken naar het buitenland werden ze geschorst voor het Nederlands elftal.<br /><br />

                            De introductie van het betaalde voetbal in Nederland in 1954 door de zogenaamde wilde bond, de NBVB, zorgde voor een revolutie in het voetbal in Nederland.
                            De aantrekkingskracht die clubs in deze bond hadden op zowel spelers als bezoekers, leidde er toe dat ook de KNVB overstag ging.
                            Door de slechte staat van het Nederlands voetbal, zowel bij clubs als het Nederlands Elftal was de bond al jaren verdeeld tussen voorstanders van betaald voetbal en de puriteinen die het amateurisme propageerden.<br /><br />

                            Na weken onderhandelen werden de lopende competities bij beide bonden afgebroken en konden de hoogspelende amateurclubs die wel heil zagen in een profavontuur en een aantal clubs uit de NBVB eind november 1954 instromen in vier hoogste competities.
                            De eerste negen op de ranglijst zouden doorstromen naar twee landelijke nieuwe hoofdklassen voor het seizoen 1955/56.
                            Deze twee seizoenen werd het kampioenschap, net als voorheen, nog beslist door middel van een kampioenscompetitie. In 1955 werd daaraan deelgenomen door de winnaars van de vier eerste klassen.
                            In het volgende seizoen werd het kampioenschap bevochten door de clubs die op de eerste twee plaatsen van de twee hoofdklassen eindigden.<br /><br />

                            In 1956 was het eindelijk zover en werd het systeem verder gewijzigd met de invoering van één hoogste landelijke divisie: de Eredivisie!
                            Hierin waren de hoogst geëindigde negen clubs van beide hoofdklassen uit het seizoen ervoor vertegenwoordigd, waarin zij voor het eerst direct met elkaar om het landskampioenschap zouden strijden.
                            Sindsdien geldt de Eredivisie als de hoogste Nederlandse voetbaldivisie.<br /><br />

                        </div>


                    <span className={styles.legendes}>Voetbal legendes</span>
                    <div className={styles.legendesSpelers}>
                          Het nederlandse voetbal heeft enkele internationaal vermaarde spelers voortgebracht:<br/><br />
                         <span className={styles.naam}>Abe Lenstra</span> (27-11-1920 – 02-09-1985), de eerste legendarische speler uit Nederland. Op veertienjarige leeftijd maakte hij al zijn debuut bij SC Heerenveen.
                          Dankzij de Fries groeide Heerenveen uit tot een machtige club binnen Nederland en domineerde het, het Noorden van het land volledig.<br /><br />
                         <span className={styles.naam}>Faas Wilkes</span> (13-10-1923 – 15-08-2006), Faas debuteerde op zijn zeventiende bij Xerxes en vijf jaar later voor Oranje. Wilkes is één van de sierlijkste spelers die Oranje ooit gekend heeft.<br /><br />
                         <span className={styles.naam}>Johan Cruijf</span> (25-04-1947 – 24-03-2016), Johan wordt gezien als de beste Nederlandse speler aller tijden. Hij is niet voor niets verkozen tot Europees speler van de eeuw.<br /><br />
                         <span className={styles.naam}>Marco van Basten</span> (31-10-1964 – heden), Marco werd beroemd bij Ajax en bij AC Milan. van Basten werd bekend door zijn mooie voetbal en zijn prachtige volley uit die onmogelijke hoek tijdens het EK van ’88 waarmee hij Oranje de Europese titel bezorgde.
                    </div>

                    <div className={styles.gallerij}>
                            <div className={styles.speler}><img src={abe} alt="abe" className={styles.spelerImg} /><div className={styles.spelerNaam}>Abe Lenstra</div></div>
                            <div className={styles.speler}><img src={faas} alt="faas" className={styles.spelerImg} /><div className={styles.spelerNaam}>Faas Wilkes</div></div>
                            <div className={styles.speler}><img src={johan} alt="johan" className={styles.spelerImg} /><div className={styles.spelerNaam}>Johan Cruijff</div></div>
                            <div className={styles.speler}><img src={marco} alt="marco" className={styles.spelerImg} /><div className={styles.spelerNaam}>Marco van Basten</div></div>
                    </div>

                <span className={styles.historyInBeeld}>Korte geschiedenis in beeld</span>

                <div className={styles.youtubeVideo}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/g_AxEJfBv2g" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                   </iframe>
                </div>

            </div>
                
        </div>
    )
}

export default History

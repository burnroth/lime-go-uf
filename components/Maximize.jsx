import React from "react";

const Maximize = () => {
  return (
    <section
      style={{
        backgroundColor: "#f5f5f5"
      }}
      id="maximize"
    >
      <div className="container">
        <div className="row">
          <div
            style={{
              marginBottom: 40
            }}
            className="col-12"
          >
            <h1
              style={{
                marginBottom: 60
              }}
            >
              Maximera ditt UF-år med Lime Go
            </h1>
            <p>
              Alla företagare måste ha ett ekonomisystem. Men hur är det med
              CRM-system* och säljverktyg som Lime Go? Det är minst lika
              viktigt! Utan ett ordentligt säljverktyg riskerar du att lägga tid
              på onödig administration och att lämna ett oprofessionellt
              intryck.
            </p>
            <p
              style={{
                fontSize: 12,
                marginTop: 20
              }}
            >
              *CRM-system sätter dina kunder i centrum och hjälper dig att
              arbeta kundfokuserat.{" "}
              <a href="https://www.lime-technologies.se/crm/">
                Läs gärna mer om CRM som arbetssätt och system här
              </a>
              .
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="/static/images/phone.png" alt="" />
            <h3>Sluta googla telefonnummer</h3>
            <p>
              Om ditt UF-företag ska sälja till andra bolag, behöver du lyfta
              luren och berätta för dem vad du har att erbjuda. Detta kallas
              ”kallringning” och kräver att du har telefonnummer till dina
              potentiella kunder. Det kan du givetvis googla fram, men du kommer
              ganska snart märka att det tar mycket tid. I Lime Go kan du enkelt
              filtrera fram potentiella kunder och
              <a href="https://www.youtube.com/watch?v=djuEo_S2XI4">
                {" "}
                skapa en ringlista på ett ögonblick.
              </a>
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="/static/images/dizzy.png" alt="" />
            <h3>Undvik kaos i mejlkorgen</h3>
            <p>
              Att driva UF innebär en hel del mejlande. Du kommer förmodligen ha
              kontakt med både potentiella kunder och mässarrangörer, kanske
              även leverantörer. Tyvärr blir det snabbt kaos i mejlkorgen och du
              måste spara den viktiga informationen någon annanstans, för den
              inte ska gå förlorad. I Lime Go kan du spara{" "}
              <a href="https://faq.lime-technologies.com/hc/sv/sections/360002216013-Outlook-till%C3%A4gget">
                mejl från Outlook
              </a>{" "}
              och{" "}
              <a href="https://www.youtube.com/watch?v=LclJeaKfX1I">
                {" "}
                notera vad du sagt, gjort och lovat
              </a>
              .
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="/static/images/leaderboard.png" alt="" />
            <h3>Förlora färre affärer</h3>
            <p>
              Idag är det svårt att sticka ut som entreprenör – produkter och
              tjänster liknar varandra allt mer. Men det positiva är att du
              fortfarande kan utmärka dig med bra service! Se till att ha koll
              på dina affärer och håll vad du lovar. På det sättet ger du ett
              professionellt intryck och tar tillvara på alla affärsmöjligheter.
              I Lime Go samlar du all affärsinformation på ett ställe och kan{" "}
              <a href="https://www.youtube.com/watch?v=fTsGkf1dAaI">
                ställa in påminnelser och göra mötesbokningar
              </a>
              .
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img src="/static/images/sales.png" alt="" />
            <h3>Exempel: 5 säljscenarier</h3>
            <p>
              I vår jämförelse{" "}
              <a href="https://lime-go.se/med-vs-utan-saljverktyg/">
                ”Med vs. utan säljverktyg”
              </a>{" "}
              har vi listat fem säljscenarier för att visa hur Lime Go kan
              hjälpa till i din vardag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maximize;

import React from 'react';
import CmsRichText from '.';

const data = {
  type: 'textAreaBlockType',
  value: [
    {
      alias: 'text',
      value:
        '<h3>Har du et spørgsmål? Vil du reklamere, returnere eller noget helt tredje?</h3>\n<h4>Har du et spørgsmål? Vil du reklamere, returnere eller noget helt tredje?</h4>\n<p>Vores kundeservicemedarbejdere sidder klar ved telefonerne og på mailen, så har du et spørgsmål, er du velkommen til at ringe eller skrive. Vi kan bl.a. hjælpe dig med:</p>\n<ul>\n<li>Manglende levering ift. følgeseddel</li>\n<li>Forkert leveret vare ift. følgeseddel</li>\n<li>Forkert leveret mængde ift. følgeseddel</li>\n<li>Manglende følgesedler/certifikater</li>\n<li>Transportskader</li>\n<li>Forsinkelser</li>\n<li>Leveringstid på varer som har forladt centrallagrene</li>\n<li>Forespørgsel på uafhentede returordrer samt emballage</li>\n<li>Oprettelse af returordre i forbindelse med reklamation og tilbagekøb</li>\n</ul>\n<p><a href="/" title="Link to the start page.">This is a link.</a></p>',
    },
  ],
};

export default {
  component: CmsRichText,
  title: 'Components/Rich Text',
};

export const richText = () => <CmsRichText content={data as any} />;

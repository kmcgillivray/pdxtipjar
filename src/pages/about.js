import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      With a government mandate in effect as of Tuesday, March 17th, all bars
      &amp; restaurants in the state of Wisconsin are required to close for the
      next four weeks, with the exception of take-out and delivery operations.
      We don't truly know how long this will last &amp; what the lasting
      economic impact will be for service industry workers. We're following the
      examples of Portland, DC, Pittsburgh, &amp; Indianapolis by starting a Virtual Tip
      Jar.
    </p>
    <p>
      If you'd like to support our Northeast Wisconsin service industry workers during
      these uncertain--and very stressful--times, We're compiling a list of cooks,
      bartenders, servers, baristas, dishwashers, &amp; other essential folks
      who keep our community's food &amp; beverage culture thriving. A small
      contribution can help these folks stay afloat financially while we wait to
      see what develops in the coming weeks.
    </p>
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://ofwemergencyfund.org/">One Fair Wage Emergency Fund</a>
      </li>
      <li>
        <a href=" https://www.restaurantworkerscf.org/news/2020/3/15/restaurant-workers-community-foundation-announces-the-formation-of-restaurant-workers-covid19-crisis-relief-fund">
          Restaurant Workers’ Community Foundation COVID19 Crisis Relief Fund
        </a>
      </li>
      <li>
        <a href="https://www.usbgfoundation.org/beap-application">
          USBG National Charity Foundation
        </a>
      </li>
    </ul>
  </Layout>
);

export default AboutPage;

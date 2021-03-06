import React, { useState } from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RandomButton from "../components/RandomButton";
import RandomPerson from "../components/RandomPerson";
import social1 from "../images/social-1.png";
import social2 from "../images/social-2.png";
import social3 from "../images/social-3.png";
import social4 from "../images/social-4.png";

const Intro = () => (
  <div className="intro">
    <h1>About Northeast Wisconsin Tip Jar</h1>
    <p>
      Northeast Wisconsin Tip Jar is an opportunity to share a small act of kindness with our Service Industry community during these uncertain times. With a government mandate in effect as of Tuesday, March 17th, all bars and restaurants in the state of Wisconsin are required to close for the next four weeks—with the exception of take-out and delivery operations—which has put many folks out of work.
    </p>
    <p>
      The premise is simple: Tip a dollar, $5, $10, $20—or whatever you’d
      like—directly to a Service Industry worker! Tip someone at random or
      browse the <Link to="/donate">full list to find your favorite spots</Link>
      .
    </p>
    <p>
      If you’re a Service Industry worker,{" "}
      <Link to="/signup">fill out the form to receive tips</Link> directly
      through your Cashapp, Venmo, or PayPal.
    </p>
  </div>
);

// const Pledge = () => (
//   <div className="pledge">
//     <h2>Take the pledge!</h2>
//     <p>
//       Take the pledge to tip every time you make a cocktail at home, miss going
//       out, wish you were drinking a latte, wish you had a wood-fired oven, or
//       don’t want to do the dishes.
//     </p>
//     <h3>Help spread the word and share on social media!</h3>
//     <a href={social1}>
//       <img src={social1} alt="Send some love on PDX tip jar" />
//     </a>
//     <a href={social2}>
//       <img
//         src={social2}
//         alt="I pledge to tip for every meal I wish someone else made"
//       />
//     </a>
//     <a href={social3}>
//       <img
//         src={social3}
//         alt="I pledge to tip for every drink I make at home because I really miss going out"
//       />
//     </a>
//     <a href={social4}>
//       <img
//         src={social4}
//         alt="I pledge to tip for every cup of coffee I wish was a latte"
//       />
//     </a>
//   </div>
// );

const IndexPage = () => {
  const [randomPerson, setRandomPerson] = useState({});

  return (
    <Layout>
      <SEO title="Home | Northeast WI Tip Jar" />
      <Intro />
      {Object.keys(randomPerson).length > 0 && (
        <RandomPerson
          person={randomPerson}
          clearPerson={() => setRandomPerson({})}
          random={true}
        />
      )}
      <RandomButton
        handleClick={setRandomPerson}
        text="Find a random person to tip"
      />
      <nav>
        <Link to="/donate">Browse the full list</Link>
        <Link to="/signup">Sign up to receive tips</Link>
      </nav>
    </Layout>
  );
};

export default IndexPage;

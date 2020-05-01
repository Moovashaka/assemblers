import React, { useEffect } from 'react'
import styled from 'styled-components'

const Twitwrapper = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    width: 90vw;
  }
`

const TwitterContainer = () => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "2");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/AssemblersThe");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <Twitwrapper>
    <section className="twitterContainer">
      <div className="twitter-embed"></div>
    </section>
    </Twitwrapper>
  );
};

export default TwitterContainer;

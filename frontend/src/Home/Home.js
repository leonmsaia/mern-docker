// Assets Load
import Languages from '../languages.json';

// Styles
import './Home.css';

// Prepare Elements
// const CurrentLanguage = 'SPA';
const LanguagesData = Languages;

export default function Home(data) {
  const LanguagesData = Languages;
  const Data = data.data.content.home;
  const SocialNetworks = data.data.social;
  return (
    <>
      <section className="home-area element-cover-bg" id="home">
          <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                  <div className="col-12 col-lg-8 home-content text-center">
                    <h1 className="home-name">{Data.name}</h1>
                    <h4 className="cd-headline clip home-headline">
                      I’m a&nbsp;
                      <span className="cd-words-wrapper single-headline">
                        <b className="is-visible">Developer</b>
                        {Data.adjetives.map((adjetive, index) => {
                          return (
                            <b key={index}>
                              {adjetive}
                            </b>
                          );
                        })}
                      </span>
                    </h4>
                  </div>
              </div>
          </div>
          <div className="fixed-wrapper">
              <div className="fixed-block block-left">
                  <ul className="list-unstyled languages-list">
                    {LanguagesData.map((Language, index) => {
                      return (
                        <li key={index}>
                          <a href={Language.slug}><span className="single-language">{Language.language}</span></a>
                        </li>
                      );
                    })}
                  </ul>
              </div>
              <div className="fixed-block block-right">
                  <ul className="list-unstyled social-icons">
                      {SocialNetworks.map((SocialNetwork, index) => {
                          return (
                            <li key={index}> 
                              <a href={SocialNetwork.url} target="_blank" rel="noreferrer"><i className={ "icon ion-logo-" + (SocialNetwork.name || "") }></i></a>
                            </li>
                          );
                      })}
                  </ul>
              </div>
          </div>
      </section>
    </>
  )
}
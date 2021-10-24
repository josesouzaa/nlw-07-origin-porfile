import{s as u,j as g,r as c,W as p,R as m,a as f}from"./vendor.e5ecb0cb.js";const b=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};b();const y=u.div`
  max-width: 250px;
  margin: 0 auto;
  text-align: center;

  color: var(--grey);
  > h1 {
    margin-top: 1.5rem;
  }

  > a {
    color: var(--grey);
    text-decoration: none;

    margin-top: 0.25rem;

    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
  }

  > p {
    margin-top: 2rem;
  }
`,x=u.div`
  width: 10rem;
  margin: 11.5rem auto 0;
  position: relative;

  span {
    position: absolute;
    top: -15px;
    z-index: 1;
  }

  > img {
    width: 10rem;
    height: 11.5rem;
    object-fit: cover;

    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
`;var v="/assets/build.a25d7591.svg",j="/assets/github.069bb747.svg";const r=g.exports.jsx,l=g.exports.jsxs,d=c.exports.createContext({});function k(s){const[o,i]=c.exports.useState({}),n=[{youtube:"channel/UCHrDxaL4qaAh9rzjdA7Ezgg"},{facebook:"jose.desouza.75470"},{instagram:"jose_dsouza"},{twitter:"jose_dsouza_"}],e={user:"josesouzaa",api:"https://api.github.com/users/josesouzaa"};return c.exports.useEffect(()=>{async function t(a){const h=await(await fetch(a)).json();i(h)}t(e.api)},[]),r(d.Provider,{value:{links:n,githubData:o},children:s.children})}const O=u.ul`
  margin-top: 4rem;
  padding: 0;

  list-style: none;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  li a img {
    transition: all 0.3s;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;function w(){const{links:s}=c.exports.useContext(d);return r(O,{children:s.map(o=>r("li",{children:r("a",{href:`https://${Object.keys(o)}.com/${o[Object.keys(o)]}`,target:"_blank",children:r("img",{src:`../../images/${Object.keys(o)}.svg`,alt:`\xCDcone ${Object.keys(o)}`})})},Object.keys(o)))})}function z(){const{githubData:s}=c.exports.useContext(d),{avatar_url:o,html_url:i,name:n,bio:e,login:t}=s;return l(y,{children:[l(x,{children:[r("span",{children:r("img",{src:v,alt:"Selo Rocketseat"})}),r("img",{src:o,alt:n})]}),r("h1",{children:n}),l("a",{href:i,target:"_blank",children:[r("img",{src:j,alt:"\xCDcone github"}),t]}),r("p",{children:e}),r(w,{})]})}var S="/assets/background.3871f658.svg";const C=p`
  html, body {
    --grey: hsl(240, 9%, 89%);
    --black: hsl(240, 6%, 13%);

    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    display: grid;
    place-items: center;
    padding: 0;
    margin: 0;
  }

  main {
    background: url(${S}) no-repeat center/cover;
    width: 100vw;
    min-height: 812px;
    height: 100vh;
  }

  h1 {
    font-size: 1.5rem;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;m.render(l(f.StrictMode,{children:[r(C,{}),r(k,{children:r(z,{})})]}),document.getElementById("root"));

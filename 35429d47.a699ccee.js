(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{121:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/system_overview_with_background-25665cd2de348c4f83eee18452212c3b.png"},65:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return r})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return d}));var n=i(2),s=i(6),a=(i(0),i(85)),o={id:"system_overview",title:"System Overview"},r={unversionedId:"system_overview",id:"system_overview",isDocsHomePage:!1,title:"System Overview",description:"How PPL Bench works",source:"@site/../docs/system_overview.md",slug:"/system_overview",permalink:"/docs/system_overview",editUrl:"https://github.com/facebookresearch/pplbench/edit/master/website/../docs/system_overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Working with PPLs",permalink:"/docs/working_with_ppls"}},l=[{value:"How PPL Bench works",id:"how-ppl-bench-works",children:[{value:"1) Generate Data",id:"1-generate-data",children:[]},{value:"2) Implement Model in a PPL",id:"2-implement-model-in-a-ppl",children:[]},{value:"3) Evaluate Different PPLs",id:"3-evaluate-different-ppls",children:[]}]}],c={rightToc:l};function d(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{src:i(121).default})),Object(a.b)("h2",{id:"how-ppl-bench-works"},"How PPL Bench works"),Object(a.b)("h3",{id:"1-generate-data"},"1) Generate Data"),Object(a.b)("p",null,"The first step is to simulate data (train and test) given the generative model and model parameters. To do this, one can use Numpy or any other Python library that can be used to draws samples from probability distributions. Once this is defined, when benchmarking this model, PPL Bench will use the data generated from this function across all PPLs."),Object(a.b)("h3",{id:"2-implement-model-in-a-ppl"},"2) Implement Model in a PPL"),Object(a.b)("p",null,"Once we have simulated data for a given model, PPL Bench will go through the PPLs which have implemented the model in question. For every PPL that you want to benchmark against, you will need a corresponding model implementation in that PPL."),Object(a.b)("h3",{id:"3-evaluate-different-ppls"},"3) Evaluate Different PPLs"),Object(a.b)("p",null,"PPL Bench automatically generates predictive log likelihood plots (plotted against samples) on the same test dataset across all PPLs."),Object(a.b)("p",null,"We support multiple trials, which runs inference on the same training data, multiple times. Our plots use multiple trials to generate confidence bands in our predictive log likelihood plots."),Object(a.b)("p",null,"We also show other important statistics such as effective sample size, inference time, and r_hat."))}d.isMDXComponent=!0}}]);
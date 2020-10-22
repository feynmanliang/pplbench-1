(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{122:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/model_instantiation-df3ceee619a123516d502c227b2fda60.png"},123:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/posterior_sampling-1937e2dc0972fed130bb0c90853078b1.png"},124:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pll-98ede5fa163a212266019a4a26a600f5.png"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(6),o=(n(0),n(85)),r={id:"introduction",title:"Introduction"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What is PPL Bench?",source:"@site/../docs/introduction.md",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/facebookresearch/pplbench/edit/master/website/../docs/introduction.md",version:"current",sidebar:"someSidebar",next:{title:"Getting Started",permalink:"/docs/getting_started"}},l=[{value:"What is PPL Bench?",id:"what-is-ppl-bench",children:[{value:"Model Instantiation and Data Generation",id:"model-instantiation-and-data-generation",children:[]},{value:"PPL Implementation and Posterior Sampling",id:"ppl-implementation-and-posterior-sampling",children:[]},{value:"Evaluation of Posterior Samples",id:"evaluation-of-posterior-samples",children:[]}]},{value:"Using PPL Bench",id:"using-ppl-bench",children:[]},{value:"Purpose of PPL Bench",id:"purpose-of-ppl-bench",children:[]}],c={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-ppl-bench"},"What is PPL Bench?"),Object(o.b)("p",null,"PPL Bench is a new benchmark framework for evaluating the performance of probabilistic programming languages (PPLs)."),Object(o.b)("h3",{id:"model-instantiation-and-data-generation"},"Model Instantiation and Data Generation"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Model Instantiation and Data Generation ",src:n(122).default})),Object(o.b)("p",null,"A model with all it's parameters set to certain values is referred to as a model instance.\nWe then use the generative model to generate two sets of data - train data and test data.\nThis process of data generation is performed independent of any PPL."),Object(o.b)("h3",{id:"ppl-implementation-and-posterior-sampling"},"PPL Implementation and Posterior Sampling"),Object(o.b)("p",null,Object(o.b)("img",{alt:"PPL Implementation and Posterior Sampling ",src:n(123).default})),Object(o.b)("p",null,"The training data is passed to various PPL implementations to perform inference."),Object(o.b)("h3",{id:"evaluation-of-posterior-samples"},"Evaluation of Posterior Samples"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Evaluation of Posterior Samples",src:n(124).default})),Object(o.b)("p",null,"We compute Predictive Log Likelihood on the test data using posterior samples obtained from each PPL. We also compute other common evalutation metrics such as effective sample size, $r_{hat}$ and inference time."),Object(o.b)("h2",{id:"using-ppl-bench"},"Using PPL Bench"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Comparing model performance across PPLs"),Object(o.b)("li",{parentName:"ul"},"Comparing the effectiveness of inference algorithms across models"),Object(o.b)("li",{parentName:"ul"},"Evaluating new inference algorithms")),Object(o.b)("h2",{id:"purpose-of-ppl-bench"},"Purpose of PPL Bench"),Object(o.b)("p",null,"The purpose of PPL Bench as a probabilistic programming benchmark is two-fold."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To provide researchers with a framework to evaluate improvements in PPLs in a standardized setting."),Object(o.b)("li",{parentName:"ol"},"To enable users to pick the PPL that is most suited for their modelling application.")),Object(o.b)("p",null,"Typically, comparing different ML systems requires duplicating huge segments of work: generating data, running analysis, determining predictive performance, and comparing across implementations. PPL Bench automates nearly all of this workflow."))}d.isMDXComponent=!0}}]);
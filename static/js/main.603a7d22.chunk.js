(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){e.exports=n(292)},163:function(e,t,n){},165:function(e,t,n){},167:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(43),o=n.n(i),m=(n(163),n(25)),l=n(26),s=n(28),u=n(27),c=n(29),p=(n(165),[{name:"Zucchini lasagne",ingredients:[{type:"Vegetables",name:"Zucchini",amount:4},{type:"Cans",name:"Tomato sauce in a can",amount:1.5},{type:"Refrigerated",name:"Mozzarella",amount:1},{type:"Vegetables",name:"Garlic",amount:3},{type:"Refrigerated",name:"Parmigiano",amount:1},{type:"Spices",name:"Basil",amount:1},{type:"Spices",name:"Origano",amount:1}]},{name:"Tortillas",ingredients:[{type:"Bakery",name:"Tortillas",amount:1},{type:"Cans",name:"Tomato sauce in a can",amount:1},{type:"Cans",name:"Beans in a can",amount:1},{type:"Cans",name:"Corn in a can",amount:1},{type:"Cans",name:"Tomato concentrate",amount:1},{type:"Refrigerated",name:"Gruy\xe8re rap\xe9",amount:1},{type:"Spices",name:"Paprika",amount:1},{type:"Vegetables",name:"Parsley",amount:1},{type:"Vegetables",name:"Avocado",amount:1},{type:"Refrigerated",name:"Sour cream",amount:1},{type:"Vegetables",name:"Lemon",amount:1}]},{name:"Mushroom Ricotta Spinach Pie",ingredients:[{type:"Refrigerated",name:"Pate feuillete",amount:2},{type:"Vegetables",name:"Mushrooms",amount:1},{type:"Vegetables",name:"Spinach",amount:1},{type:"Refrigerated",name:"Ricotta",amount:1},{type:"Spices",name:"Nutmeg",amount:1}]},{name:"Spaghetti with Garlic and Chilli",ingredients:[{type:"Pasta",name:"Spaghetti",amount:1},{type:"Vegetables",name:"Chilli",amount:1},{type:"Vegetables",name:"Garlic",amount:4},{type:"Refrigerated",name:"(Optional) Parmigiano",amount:1}]},{name:"Lebanese Meze",ingredients:[{type:"Flour",name:"Flour",amount:1},{type:"Flour",name:"Yeast",amount:1},{type:"Vegetables",name:"Eggplant",amount:1},{type:"Refrigerated",name:"Greek Yogurt",amount:1},{type:"Vegetables",name:"Lemon juice",amount:1},{type:"Bio",name:"Pine nuts",amount:1},{type:"Vegetables",name:"Mint",amount:1},{type:"Vegetables",name:"Parsley",amount:1},{type:"Bio",name:"Sesame seeds",amount:1},{type:"Flour",name:"Spoon of sugar",amount:1}]},{name:"Potato bake (Cat version)",ingredients:[{type:"Vegetables",name:"Potatoes",amount:5},{type:"Vegetables",name:"Garlic",amount:4},{type:"Refrigerated",name:"Milk",amount:1.5},{type:"Refrigerated",name:"Cream",amount:1},{type:"Spices",name:"Nutmeg",amount:1},{type:"Vegetables",name:"Ciboulette",amount:1}]},{name:"Potato bake (Douds mums version)",ingredients:[{type:"Vegetables",name:"Potatoes",amount:5},{type:"Vegetables",name:"Garlic",amount:4},{type:"Refrigerated",name:"Milk",amount:1.5},{type:"Refrigerated",name:"Mozzarella",amount:1},{type:"Spices",name:"Tumeric",amount:1}]},{name:"Vegetable bake with Vegie burger / steak",ingredients:[{type:"Vegetables",name:"Zucchini",amount:2},{type:"Vegetables",name:"Tomatoes",amount:5},{type:"Refrigerated",name:"Mozzarella",amount:1},{type:"Vegetables",name:"Garlic",amount:3},{type:"Vegetables",name:"Ciboulette",amount:1},{type:"Spices",name:"Origano",amount:1},{type:"Cans",name:"Can of beans",amount:1},{type:"Flour",name:"Flour",amount:.1},{type:"Spices",name:"Spices",amount:1},{type:"Refrigerated",name:"Steak",amount:1}]},{name:"Mushroom soup",ingredients:[{type:"Vegetables",name:"Mushrooms",amount:1},{type:"Refrigerated",name:"Butter",amount:1},{type:"Soup",name:"Vegetable stock cube",amount:1},{type:"Refrigerated",name:"Cream",amount:1},{type:"Vegetables",name:"Ciboulette / Parsley",amount:1},{type:"Bakery",name:"Baguette",amount:1},{type:"Refrigerated",name:"Cheese",amount:1}]},{name:"Potato and coconut milk soup",ingredients:[{type:"Vegetables",name:"Potatoes",amount:3},{type:"Asian",name:"Coconut milk in can",amount:1},{type:"Soup",name:"Vegetable stock cube",amount:1},{type:"Spices",name:"Spices",amount:1},{type:"Bakery",name:"Baguette",amount:1},{type:"Refrigerated",name:"Cheese",amount:1}]},{name:"Pasta with vegetables",ingredients:[{type:"Pasta",name:"Pasta",amount:1},{type:"Vegetables",name:"Tomatoes",amount:1},{type:"Vegetables",name:"Mushrooms / Zucchinis",amount:1},{type:"Vegetables",name:"Garlic",amount:3},{type:"Spices",name:"Spices",amount:1}]},{name:"Noodles stir-fry",ingredients:[{type:"Pasta",name:"Rice or Wheat Noodles",amount:1},{type:"Vegetables",name:"Mix of Asian Vegetables",amount:1},{type:"Vegetables",name:"Mushrooms",amount:1},{type:"Asian",name:"Soya Sauce",amount:1},{type:"Vegetables",name:"Ginger",amount:1},{type:"Vegetables",name:"Garlic",amount:2},{type:"Vegetables",name:"Coriander",amount:2},{type:"Vegetables",name:"Chilli",amount:1}]},{name:"Noodles Soup",ingredients:[{type:"Asian",name:"Rice Noodles",amount:1},{type:"Vegetables",name:"Chinese Mushrooms",amount:1},{type:"Vegetables",name:"Carrots",amount:1},{type:"Vegetables",name:"Radish",amount:2},{type:"Asian",name:"Soya Sauce",amount:1},{type:"Vegetables",name:"Ginger",amount:1},{type:"Vegetables",name:"Garlic",amount:2},{type:"Vegetables",name:"Coriander",amount:2},{type:"Vegetables",name:"Chilli",amount:1},{type:"Vegetables",name:"Haricots coco",amount:1}]}]);function d(e,t){if(-1!==e.recipes.indexOf(t.name))return e;e.recipes.push(t.name);for(var n=0;n<t.ingredients.length;n++)e=y(e,t.ingredients[n]);return e}function g(e,t){var n=e.recipes.indexOf(t);if(-1===n)return e;e.recipes.splice(n,1);for(var a=p.find(function(e){return e.name===t}),r=0;r<a.ingredients.length;r++){var i=a.ingredients[r],o=i.type,m=i.name,l=i.amount;e.ingredients[o][m]>l?e.ingredients[o][m]-=l:delete e.ingredients[o][m]}return function e(t){for(var n in t)t[n]&&"object"===typeof t[n]&&(e(t[n]),0===Object.keys(t[n]).length&&delete t[n])}(e.ingredients),e}function y(e,t){var n=t.type,a=t.name,r=t.amount;return h(e.ingredients,n)?h(e.ingredients,n,a)?e.ingredients[n]["".concat(a)]+=r:e.ingredients[n]["".concat(a)]=r:(e.ingredients[n]={},e.ingredients[n][a]=r),e}function h(e){for(var t=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++){if(!e||!e.hasOwnProperty(t[n]))return!1;e=e[t[n]]}return!0}var b=n(300),f=n(303),v=(n(167),n(304)),S=function(e){var t=e.list;return r.a.createElement("div",null,r.a.createElement("h2",null,"Ingredients List"),r.a.createElement(v.a,null,r.a.createElement("h3",null,"Recipes"),r.a.createElement("ul",null,t.recipes.map(function(e){return r.a.createElement("li",{key:e},e)})),r.a.createElement("h3",null,"Ingredients by Category"),Object.keys(t.ingredients).map(function(e,n){return r.a.createElement("div",{key:e},r.a.createElement("h4",{style:{margin:0}},e),r.a.createElement("table",{cellSpacing:"0",style:{width:"100%"}},r.a.createElement("tbody",null,Object.keys(t.ingredients[e]).map(function(n,a){return r.a.createElement("tr",{key:n},r.a.createElement("td",{className:"bottomBorder"},n),r.a.createElement("td",{className:"bottomBorder",style:{textAlign:"right"}},t.ingredients[e][n]))}))),r.a.createElement("br",null))})))},E=n(302),C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={recipe:""},n.handleChange=function(e,t){var a=t.value;return n.setState({recipe:a})},n.handleSubmit=function(){n.props.onSubmit(n.state.recipe)},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=this.props,n=t.recipes;t.onSubmit;for(var a in n)e.push({key:n[a].name,value:n[a].name,text:n[a].name});return r.a.createElement("div",null,r.a.createElement("h2",null,"Add recipes to list"),r.a.createElement("p",null,"Select recipes to add to the ingredients list"),r.a.createElement(E.a,{placeholder:"Select recipe",fluid:!0,search:!0,selection:!0,onChange:this.handleChange,options:e}),r.a.createElement("br",null),r.a.createElement(f.a,{fluid:!0,color:"teal",onClick:this.handleSubmit},"Add recipe to list"))}}]),t}(a.Component),V=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={recipe:""},n.handleChange=function(e,t){var a=t.value;return n.setState({recipe:a})},n.handleSubmit=function(){n.props.onSubmit(n.state.recipe)},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=this.props.recipes;for(var n in t)e.push({key:t[n],value:t[n],text:t[n]});return r.a.createElement("div",null,r.a.createElement("h2",null,"Delete recipe from list"),r.a.createElement("p",null,"Select recipe to remove from the ingredients list"),r.a.createElement(E.a,{placeholder:"Select recipe",fluid:!0,search:!0,selection:!0,onChange:this.handleChange,options:e}),r.a.createElement("br",null),r.a.createElement(f.a,{fluid:!0,color:"orange",onClick:this.handleSubmit},"Remove recipe from list"))}}]),t}(a.Component),k=n(301),R=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={types:["Vegetables","Refrigerated","Spices","Cans","Flour","Bakery","Asian","Bio","Pasta"],ingredient:"",selectedType:"",amount:""},n.handleIngredientChange=function(e){return n.setState({ingredient:e.target.value})},n.handleAmountChange=function(e){return n.setState({amount:e.target.value})},n.handleTypeChange=function(e,t){var a=t.value;return n.setState({selectedType:a})},n.handleSubmit=function(){var e=n.state,t=e.ingredient,a=e.selectedType,r=e.amount;n.props.onSubmit({name:t,type:a,amount:r})},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=[],t=this.state,n=t.types,a=(t.ingredient,t.amount);for(var i in n=n.sort())e.push({key:n[i],value:n[i],text:n[i]});return r.a.createElement("div",null,r.a.createElement("h2",null,"Add individual ingredient to list"),r.a.createElement("p",null,"Enter an ingredient and select a type to add it to the list."),r.a.createElement(b.a,{type:"text",fluid:!0,placeholder:"Enter ingredient",action:!0},r.a.createElement("input",{onChange:this.handleIngredientChange}),r.a.createElement(k.a,{compact:!0,options:e,defaultValue:"other",onChange:this.handleTypeChange})),r.a.createElement("br",null),r.a.createElement(b.a,{fluid:!0,focus:!0,type:"number",step:"1",value:a,placeholder:"Enter amount",onChange:this.handleAmountChange}),r.a.createElement("br",null),r.a.createElement(f.a,{fluid:!0,color:"green",onClick:this.handleSubmit},"Add ingredient to list"))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfRecipes:"",ingredientsList:{recipes:[],ingredients:{}}},n.onSubmitRandomSelection=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e=""===e?1:Number(e);for(var t={recipes:[],ingredients:{}},n=[],a=0;a<e;a++){var r=void 0;do{r=Math.floor(Math.random()*p.length)}while(-1!==n.indexOf(r));n.push(r),t=d(t,p[r])}return t}(n.state.numberOfRecipes);n.setState({ingredientsList:e})},n.onSubmitAddItem=function(e){var t=p.find(function(t){return t.name===e}),a=d(n.state.ingredientsList,t);n.setState({ingredientsList:a})},n.onSubmitAddIngredient=function(e){var t=y(n.state.ingredientsList,e);console.log("lsit",t),n.setState({ingredientsList:t})},n.onSubmitDeleteRecipe=function(e){var t=g(n.state.ingredientsList,e);n.setState({ingredientsList:t})},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.ingredientsList;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Container"},r.a.createElement("h2",null,"Recipes"),r.a.createElement("p",null,"Generate ingredients list from a random selection of recipes."),r.a.createElement(b.a,{fluid:!0,focus:!0,type:"number",step:"1",value:this.state.numberOfRecipes,placeholder:"Enter number of recipes...",onChange:function(t){e.setState({numberOfRecipes:t.target.value})}}),r.a.createElement("br",null),r.a.createElement(f.a,{fluid:!0,color:"blue",onClick:this.onSubmitRandomSelection},"Generate random list"),r.a.createElement("br",null),r.a.createElement(C,{recipes:p,onSubmit:this.onSubmitAddItem}),r.a.createElement("br",null),t.recipes.length>0&&r.a.createElement("div",null,r.a.createElement(R,{onSubmit:this.onSubmitAddIngredient}),r.a.createElement("br",null),r.a.createElement(S,{list:t})," ",r.a.createElement("br",null),r.a.createElement(V,{recipes:t.recipes,onSubmit:this.onSubmitDeleteRecipe}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,2,1]]]);
//# sourceMappingURL=main.603a7d22.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){e.exports=n(292)},163:function(e,t,n){},165:function(e,t,n){},167:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(43),o=n.n(r),s=(n(163),n(25)),m=n(26),l=n(28),u=n(27),c=n(29),d=(n(165),[{name:"Zucchini lasagne",ingredients:[{type:"Vegetables",name:"Zucchini",amount:4},{type:"Cans",name:"Tomato sauce in a can",amount:1.5},{type:"Refrigerated",name:"Mozzarella",amount:1},{type:"Vegetables",name:"Garlic",amount:3},{type:"Refrigerated",name:"Parmigiano",amount:1},{type:"Spices",name:"Basil",amount:1},{type:"Spices",name:"Origano",amount:1}]},{name:"Tortillas",ingredients:[{type:"Bakery",name:"Tortillas",amount:1},{type:"Cans",name:"Tomato sauce in a can",amount:1},{type:"Cans",name:"Beans in a can",amount:1},{type:"Cans",name:"Corn in a can",amount:1},{type:"Cans",name:"Tomato concentrate",amount:1},{type:"Refrigerated",name:"Gruy\xe8re rap\xe9",amount:1},{type:"Spices",name:"Paprika",amount:1},{type:"Vegetables",name:"Parsley",amount:1},{type:"Vegetables",name:"Avocado",amount:1},{type:"Refrigerated",name:"Sour cream",amount:1},{type:"Vegetables",name:"Lemon",amount:1}]},{name:"Mushroom Ricotta Spinach Pie",ingredients:[{type:"Refrigerated",name:"Pate feuillete",amount:2},{type:"Vegetables",name:"Mushrooms",amount:1},{type:"Vegetables",name:"Spinach",amount:1},{type:"Refrigerated",name:"Ricotta",amount:1},{type:"Spices",name:"Nutmeg",amount:1}]},{name:"Spaghetti with Garlic and Chilli",ingredients:[{type:"Pasta",name:"Spaghetti",amount:1},{type:"Vegetables",name:"Chilli",amount:1},{type:"Vegetables",name:"Garlic",amount:4},{type:"Refrigerated",name:"(Optional) Parmigiano",amount:1}]},{name:"Lebanese Meze",ingredients:[{type:"Flour",name:"Flour",amount:1},{type:"Flour",name:"Yeast",amount:1},{type:"Cans",name:"Chickpeas",amount:1},{type:"Vegetables",name:"Eggplant",amount:1},{type:"Refrigerated",name:"Greek Yogurt",amount:1},{type:"Vegetables",name:"Lemon juice",amount:1},{type:"Bio",name:"Pine nuts",amount:1},{type:"Vegetables",name:"Mint",amount:1},{type:"Vegetables",name:"Parsley",amount:1},{type:"Bio",name:"Sesame seeds",amount:1},{type:"Flour",name:"Spoon of sugar",amount:1}]},{name:"Potato bake (Cat version)",ingredients:[{type:"Vegetables",name:"Potatoes",amount:5},{type:"Vegetables",name:"Garlic",amount:4},{type:"Refrigerated",name:"Milk",amount:1.5},{type:"Refrigerated",name:"Cream",amount:1},{type:"Spices",name:"Nutmeg",amount:1},{type:"Vegetables",name:"Ciboulette",amount:1}]},{name:"Potato bake (Douds mums version)",ingredients:[{type:"Vegetables",name:"Potatoes",amount:5},{type:"Vegetables",name:"Garlic",amount:4},{type:"Refrigerated",name:"Milk",amount:1.5},{type:"Refrigerated",name:"Mozzarella",amount:1},{type:"Spices",name:"Tumeric",amount:1}]},{name:"Vegetable bake with Vegie burger / steak",ingredients:[{type:"Vegetables",name:"Zucchini",amount:2},{type:"Vegetables",name:"Tomatoes",amount:5},{type:"Refrigerated",name:"Mozzarella",amount:1},{type:"Vegetables",name:"Garlic",amount:3},{type:"Vegetables",name:"Ciboulette",amount:1},{type:"Spices",name:"Origano",amount:1},{type:"Cans",name:"Can of beans",amount:1},{type:"Flour",name:"Flour",amount:.1},{type:"Spices",name:"Spices",amount:1},{type:"Refrigerated",name:"Steak",amount:1}]},{name:"Mushroom soup",ingredients:[{type:"Vegetables",name:"Mushrooms",amount:1},{type:"Refrigerated",name:"Butter",amount:1},{type:"Soup",name:"Vegetable stock cube",amount:1},{type:"Refrigerated",name:"Cream",amount:1},{type:"Vegetables",name:"Ciboulette / Parsley",amount:1},{type:"Bakery",name:"Baguette",amount:1},{type:"Refrigerated",name:"Cheese",amount:1}]},{name:"Potato and coconut milk soup",ingredients:[{type:"Vegetables",name:"Potatoes",amount:3},{type:"Asian",name:"Coconut milk in can",amount:1},{type:"Soup",name:"Vegetable stock cube",amount:1},{type:"Spices",name:"Spices",amount:1},{type:"Bakery",name:"Baguette",amount:1},{type:"Refrigerated",name:"Cheese",amount:1}]},{name:"Pasta with vegetables",ingredients:[{type:"Pasta",name:"Pasta",amount:1},{type:"Vegetables",name:"Tomatoes",amount:1},{type:"Vegetables",name:"Mushrooms / Zucchinis",amount:1},{type:"Vegetables",name:"Garlic",amount:3},{type:"Spices",name:"Spices",amount:1}]},{name:"Noodles stir-fry",ingredients:[{type:"Pasta",name:"Rice or Wheat Noodles",amount:1},{type:"Vegetables",name:"Mix of Asian Vegetables",amount:1},{type:"Vegetables",name:"Mushrooms",amount:1},{type:"Asian",name:"Soya Sauce",amount:1},{type:"Vegetables",name:"Ginger",amount:1},{type:"Vegetables",name:"Garlic",amount:2},{type:"Vegetables",name:"Coriander",amount:2},{type:"Vegetables",name:"Chilli",amount:1}]},{name:"Noodles Soup",ingredients:[{type:"Asian",name:"Rice Noodles",amount:1},{type:"Vegetables",name:"Chinese Mushrooms",amount:1},{type:"Vegetables",name:"Carrots",amount:1},{type:"Vegetables",name:"Radish",amount:2},{type:"Asian",name:"Soya Sauce",amount:1},{type:"Vegetables",name:"Ginger",amount:1},{type:"Vegetables",name:"Garlic",amount:2},{type:"Vegetables",name:"Coriander",amount:2},{type:"Vegetables",name:"Chilli",amount:1},{type:"Vegetables",name:"Haricots coco",amount:1}]}]);function p(e,t){if(-1!==e.dishes.indexOf(t.name))return e;e.dishes.push(t.name);for(var n=0;n<t.ingredients.length;n++)e=h(e,t.ingredients[n]);return e}function g(e,t){var n=e.dishes.indexOf(t);if(-1===n)return e;e.dishes.splice(n,1);for(var a=d.find(function(e){return e.name===t}),i=0;i<a.ingredients.length;i++){var r=a.ingredients[i],o=r.type,s=r.name,m=r.amount;e.ingredients[o][s]>m?e.ingredients[o][s]-=m:delete e.ingredients[o][s]}return function e(t){for(var n in t)t[n]&&"object"===typeof t[n]&&(e(t[n]),0===Object.keys(t[n]).length&&delete t[n])}(e.ingredients),e}function h(e,t){var n=t.type,a=t.name,i=t.amount;return y(e.ingredients,n)?y(e.ingredients,n,a)?e.ingredients[n]["".concat(a)]+=i:e.ingredients[n]["".concat(a)]=i:(e.ingredients[n]={},e.ingredients[n][a]=i),e}function y(e){for(var t=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++){if(!e||!e.hasOwnProperty(t[n]))return!1;e=e[t[n]]}return!0}var b=n(300),f=n(303),v=(n(167),n(304)),S=function(e){var t=e.list;return i.a.createElement("div",null,i.a.createElement("h2",null,"Ingredients List"),i.a.createElement(v.a,null,i.a.createElement("h3",null,"Dishes"),i.a.createElement("ul",null,t.dishes.map(function(e){return i.a.createElement("li",{key:e},e)})),i.a.createElement("h3",null,"Ingredients by Category"),Object.keys(t.ingredients).map(function(e,n){return i.a.createElement("div",{key:e},i.a.createElement("h4",{style:{margin:0}},e),i.a.createElement("table",{cellSpacing:"0",style:{width:"100%"}},i.a.createElement("tbody",null,Object.keys(t.ingredients[e]).map(function(n,a){return i.a.createElement("tr",{key:n},i.a.createElement("td",{className:"bottomBorder"},n),i.a.createElement("td",{className:"bottomBorder",style:{textAlign:"right"}},t.ingredients[e][n]))}))),i.a.createElement("br",null))})))},E=n(302),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={dish:""},n.handleChange=function(e,t){var a=t.value;return n.setState({dish:a})},n.handleSubmit=function(){n.props.onSubmit(n.state.dish)},n}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[],t=this.props.dishes;for(var n in t)e.push({key:t[n].name,value:t[n].name,text:t[n].name});return i.a.createElement("div",null,i.a.createElement("h2",null,"Add dishes to list"),i.a.createElement("p",null,"Select dish to add to the ingredients list"),i.a.createElement(E.a,{placeholder:"Select dish",fluid:!0,search:!0,selection:!0,onChange:this.handleChange,options:e}),i.a.createElement("br",null),i.a.createElement(f.a,{fluid:!0,color:"teal",onClick:this.handleSubmit},"Add dish to list"))}}]),t}(a.Component),V=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={dish:""},n.handleChange=function(e,t){var a=t.value;return n.setState({dish:a})},n.handleSubmit=function(){n.props.onSubmit(n.state.dish)},n}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[],t=this.props.dishes;for(var n in t)e.push({key:t[n],value:t[n],text:t[n]});return i.a.createElement("div",null,i.a.createElement("h2",null,"Delete dish from list"),i.a.createElement("p",null,"Select dish to remove from the ingredients list"),i.a.createElement(E.a,{placeholder:"Select dish",fluid:!0,search:!0,selection:!0,onChange:this.handleChange,options:e}),i.a.createElement("br",null),i.a.createElement(f.a,{fluid:!0,color:"orange",onClick:this.handleSubmit},"Remove dish from list"))}}]),t}(a.Component),k=n(301),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={types:["Vegetables","Refrigerated","Spices","Cans","Flour","Bakery","Asian","Bio","Pasta"],ingredient:"",selectedType:"",amount:""},n.handleIngredientChange=function(e){return n.setState({ingredient:e.target.value})},n.handleAmountChange=function(e){return n.setState({amount:e.target.value})},n.handleTypeChange=function(e,t){var a=t.value;return n.setState({selectedType:a})},n.handleSubmit=function(){var e=n.state,t=e.ingredient,a=e.selectedType,i=e.amount;n.props.onSubmit({name:t,type:a,amount:i})},n}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[],t=this.state,n=t.types,a=(t.ingredient,t.amount);for(var r in n=n.sort())e.push({key:n[r],value:n[r],text:n[r]});return i.a.createElement("div",null,i.a.createElement("h2",null,"Add individual ingredient to list"),i.a.createElement("p",null,"Enter an ingredient and select a type to add it to the list."),i.a.createElement(b.a,{type:"text",fluid:!0,placeholder:"Enter ingredient",action:!0},i.a.createElement("input",{onChange:this.handleIngredientChange}),i.a.createElement(k.a,{compact:!0,options:e,defaultValue:"other",onChange:this.handleTypeChange})),i.a.createElement("br",null),i.a.createElement(b.a,{fluid:!0,focus:!0,type:"number",step:"1",value:a,placeholder:"Enter amount",onChange:this.handleAmountChange}),i.a.createElement("br",null),i.a.createElement(f.a,{fluid:!0,color:"green",onClick:this.handleSubmit},"Add ingredient to list"))}}]),t}(a.Component),R=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={numberOfDishes:"",ingredientsList:{dishes:[],ingredients:{}}},n.onSubmitRandomSelection=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e=""===e?1:Number(e);for(var t={dishes:[],ingredients:{}},n=[],a=0;a<e;a++){var i=void 0;do{i=Math.floor(Math.random()*d.length)}while(-1!==n.indexOf(i));n.push(i),t=p(t,d[i])}return t}(n.state.numberOfDishes);n.setState({ingredientsList:e})},n.onSubmitAddItem=function(e){var t=d.find(function(t){return t.name===e}),a=p(n.state.ingredientsList,t);n.setState({ingredientsList:a})},n.onSubmitAddIngredient=function(e){var t=h(n.state.ingredientsList,e);console.log("lsit",t),n.setState({ingredientsList:t})},n.onSubmitDeleteDish=function(e){var t=g(n.state.ingredientsList,e);n.setState({ingredientsList:t})},n}return Object(c.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.ingredientsList;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"Container"},i.a.createElement("h2",null,"Dishes"),i.a.createElement("p",null,"Generate ingredients list from a random selection of dishes."),i.a.createElement(b.a,{fluid:!0,focus:!0,type:"number",step:"1",value:this.state.numberOfDishes,placeholder:"Enter number of dishes...",onChange:function(t){e.setState({numberOfDishes:t.target.value})}}),i.a.createElement("br",null),i.a.createElement(f.a,{fluid:!0,color:"blue",onClick:this.onSubmitRandomSelection},"Generate random list"),i.a.createElement("br",null),i.a.createElement(C,{dishes:d,onSubmit:this.onSubmitAddItem}),i.a.createElement("br",null),t.dishes.length>0&&i.a.createElement("div",null,i.a.createElement(O,{onSubmit:this.onSubmitAddIngredient}),i.a.createElement("br",null),i.a.createElement(S,{list:t})," ",i.a.createElement("br",null),i.a.createElement(V,{dishes:t.dishes,onSubmit:this.onSubmitDeleteDish}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,2,1]]]);
//# sourceMappingURL=main.29e95eb5.chunk.js.map
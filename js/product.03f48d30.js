(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"2fdb":function(t,e,i){"use strict";var n=i("5ca1"),o=i("d2c8"),r="includes";n(n.P+n.F*i("5147")(r),"String",{includes:function(t){return!!~o(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3286:function(t,e){var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("strap-window",[i("div",{staticClass:"strap fluid main container"},[i(t.content,{tag:"component"})],1)])},n=[];t.exports=function(t){var e="function"===typeof t?t.options:t;return e.render=i,e.staticRenderFns=n,t}},3846:function(t,e,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},5147:function(t,e,i){var n=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}},6762:function(t,e,i){"use strict";var n=i("5ca1"),o=i("c366")(!0);n(n.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"67ee":function(t,e,i){},"6b54":function(t,e,i){"use strict";i("3846");var n=i("cb7c"),o=i("0bfb"),r=i("9e1e"),a="toString",s=/./[a],d=function(t){i("2aba")(RegExp.prototype,a,t,!0)};i("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?d(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?o.call(t):void 0)}):s.name!=a&&d(function(){return s.call(this)})},"74ce":function(t,e){var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"strap main responsive fluid container"},[i("h1",{staticClass:"strap header dividing"},[t._v(t._s(t.$t("products.title"))),i("strap-button",{staticStyle:{float:"right","font-size":"1rem"},on:{click:t.openHelpWindow}},[t._v(t._s(t.$t("common.help")))]),i("strap-button",{staticStyle:{float:"right","font-size":"1rem"},on:{click:t.openKnowMoreWindow}},[t._v(t._s(t.$t("common.knowMore")))])],1),t._v(" "),i("strap-alert",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{spaced:""}},[i("strap-icon",{attrs:{slot:"icon",icon:"spinner",animation:"pulse",size:"3x"},slot:"icon"}),t._v(t._s(t.$t("common.loading")))],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"strap flex-grid",staticStyle:{flex:"0"}},[i("div",{staticClass:"row"},[i("strap-button",{attrs:{"toggle-model":t.edit,flat:"",color:"indigo"},on:{"update:toggleModel":function(e){t.edit=e},"update:toggle-model":function(e){t.edit=e}}},[t._v(t._s(t.$t("common.pageEditMode")))]),t._v(" "),i("strap-button",{attrs:{flat:"",color:"brown"},on:{click:function(e){return t.$refs.pooledDP.openPremadeWindow()}}},[t._v(t._s(t.$t("common.addElement")))]),t._v(" "),i("strap-button",{attrs:{flat:"",color:"purple"},on:{click:function(e){return t.$refs.pooledDP.openBindingsWindow()}}},[t._v(t._s(t.$t("common.bindingsWindow")))])],1)]),t._v(" "),t.loading?t._e():i("strap-pooled-dynamic-page",{ref:"pooledDP",attrs:{edit:t.edit,pool:t.pool,elements:t.elements,"page-data":t.product,bindings:t.bindings,"user-bindings":t.userBindings}})],1)},n=[];t.exports=function(t){var e="function"===typeof t?t.options:t;return e.render=i,e.staticRenderFns=n,t}},"804d":function(t,e){var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dynamic-element-wrapper",{attrs:{el:t.wrapperParam}},[t.productSales?i("strap-table",{attrs:{items:t.productSales,columns:t.columns,"items-per-pages":5,pagination:"",selectable:"",bordered:"","enable-row-events":""},on:{"row-click":t.goToSale}}):t._e()],1)},n=[];t.exports=function(t){var e="function"===typeof t?t.options:t;return e.render=i,e.staticRenderFns=n,t}},aae3:function(t,e,i){var n=i("d3f4"),o=i("2d95"),r=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==o(t))}},b6fb:function(t,e,i){"use strict";i.r(e);i("7514");var n=i("9ab4"),o=i("60a3"),r=i("2474"),a=i("0eeb"),s=i("3286"),d=i.n(s),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n["c"](e,t),Object.defineProperty(e.prototype,"content",{get:function(){return a["b"][this.$i18n.locale]},enumerable:!0,configurable:!0}),e=n["b"]([d.a,o["a"]],e),e}(Object(o["b"])(r["WindowMixin"])),c=p,u={id:{identifier:"productId",description:"The database id of the product, highly classified !!",type:"text",immutable:!0,internal:!0},reference:{identifier:":i18n:products.bindings.product.reference.identifier",description:":i18n:products.bindings.product.reference.description",type:"text",immutable:!0},name:{identifier:":i18n:products.bindings.product.name.identifier",description:":i18n:products.bindings.product.name.description",type:"text",required:!0,layoutRequired:!0},description:{identifier:":i18n:products.bindings.product.description.identifier",description:":i18n:products.bindings.product.description.description",type:"rich-text"},price:{identifier:":i18n:products.bindings.product.price.identifier",description:":i18n:products.bindings.product.price.description",type:"currency",required:!0,layoutRequired:!0}},l=i("a0c7"),g={id:"priceWithoutVAT",group:"product",steps:[{id:"renderer",type:"renderer",root:!0,pos:{x:275,y:25},inboundPorts:[{id:"valuePort",definitionName:"value",destination:{stepId:"pageData",portId:"pageDataPrice"}}]},{id:"pageData",type:"pageData",pos:{x:25,y:25},outboundPorts:[{id:"pageDataPrice",definitionName:"price",destination:{stepId:"renderer",portId:"valuePort"}}]}]},h={id:"VAT",group:"product",stepsData:{vatConstant:{type:"percentage",value:new l["TypedNumber"]({value:20,type:"percentage",unit:"%"})},applyVATPercentage:{type:"percentage"}},steps:[{id:"renderer",type:"renderer",root:!0,pos:{x:525,y:125},inboundPorts:[{id:"valuePort",definitionName:"value",destination:{stepId:"applyVATPercentage",portId:"vatResult"}}]},{id:"vatConstant",type:"constant",pos:{x:25,y:25},outboundPorts:[{id:"vatConstant",definitionName:"value",destination:{stepId:"applyVATPercentage",portId:"vatPerc"}}]},{id:"pageData",type:"pageData",pos:{x:25,y:125},outboundPorts:[{id:"pageDataPrice",definitionName:"price",destination:{stepId:"applyVATPercentage",portId:"price"}}]},{id:"applyVATPercentage",type:"applyPercentage",pos:{x:275,y:125},inboundPorts:[{id:"vatPerc",definitionName:"percentage",destination:{stepId:"vatConstant",portId:"vatConstant"}},{id:"price",definitionName:"value",destination:{stepId:"pageData",portId:"pageDataPrice"}}],outboundPorts:[{id:"vatResult",definitionName:"result",destination:{stepId:"renderer",portId:"valuePort"}}]}]},f={id:"priceWithVAT",group:"product",stepsData:{vatConstant:{type:"percentage",value:new l["TypedNumber"]({value:20,type:"percentage",unit:"%"})}},steps:[{id:"renderer",type:"renderer",root:!0,pos:{x:525,y:125},inboundPorts:[{id:"valuePort",definitionName:"value",destination:{stepId:"applyVATPercentage",portId:"vatResult"}}]},{id:"vatConstant",type:"constant",pos:{x:25,y:25},outboundPorts:[{id:"vatConstant",definitionName:"value",destination:{stepId:"applyVATPercentage",portId:"vatPerc"}}]},{id:"pageData",type:"pageData",pos:{x:25,y:125},outboundPorts:[{id:"pageDataPrice",definitionName:"price",destination:{stepId:"applyVATPercentage",portId:"price"}}]},{id:"applyVATPercentage",type:"applyPercentage",pos:{x:275,y:125},inboundPorts:[{id:"vatPerc",definitionName:"percentage",destination:{stepId:"vatConstant",portId:"vatConstant"}},{id:"price",definitionName:"value",destination:{stepId:"pageData",portId:"pageDataPrice"}}],outboundPorts:[{id:"vatResult",definitionName:"result",destination:{stepId:"renderer",portId:"valuePort"}}]}]},m=(i("6b54"),i("6762"),i("2fdb"),i("804d")),y=i.n(m),b=(i("67ee"),function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sales=null,e.columns=[new r["TableColumn"]({name:":i18n:products.bindings.sale.billingId.identifier",varName:"billingId",sortable:!0}),new r["TableColumn"]({name:":i18n:products.bindings.sale.date.identifier",varName:"date",sortByOriginalValue:!0,sortable:!0,renderFunction:function(t){return new l["TypedDateTime"]({value:t,type:"date"})}})],e}return n["c"](e,t),Object.defineProperty(e.prototype,"productSales",{get:function(){var t=this;return this.sales?this.sales.filter(function(e){return e.products.includes(t.pageData().id)}):[]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"elementNameTranslation",{get:function(){return this.$t("sales.salesList").toString()},enumerable:!0,configurable:!0}),e.prototype.goToSale=function(t){this.$router.push("/sales/"+t.item.id)},e.prototype.created=function(){var t=this;this.$store.dispatch("getSales").then(function(e){t.sales=e})},e=n["b"]([y.a,Object(o["a"])({components:{DynamicElementWrapper:r["DynamicElementWrapper"]}})],e),e}(Object(o["b"])(r["DynamicElementWrapperMixin"]))),v=b,w=function(t){function e(e){return void 0===e&&(e={}),t.call(this,n["a"]({},e,{type:"productList",component:v,unique:!0,wrapperAlignment:"top",wrapperOverflow:"auto",minHeight:10,minWidth:4,startHeight:12}))||this}return n["c"](e,t),e.prototype.clone=function(){return new e(this.cloneOptions())},e}(r["DynamicPageElement"]),P=[new r["DynamicPageStatElement"]({identifier:":i18n:products.priceWithoutVAT",useFlow:!0,flowId:"priceWithoutVAT",adaptivePosition:{lg:{x:2,y:2,width:2,height:3},md:{x:0,y:2,width:2,height:3},sm:{x:0,y:4,width:2,height:3}}}),new r["DynamicPageStatElement"]({identifier:":i18n:products.VAT",useFlow:!0,flowId:"VAT",adaptivePosition:{lg:{x:4,y:2,width:2,height:3},md:{x:2,y:2,width:3,height:3},sm:{x:2,y:4,width:2,height:3}}}),new r["DynamicPageStatElement"]({identifier:":i18n:products.priceWithVAT",useFlow:!0,flowId:"priceWithVAT",adaptivePosition:{lg:{x:6,y:2,width:2,height:3},md:{x:5,y:2,width:2,height:3},sm:{x:1,y:1,width:2,height:3}}}),new r["DynamicPageDividerElement"]({noText:!0,adaptivePosition:{lg:{x:2,y:23,width:6,height:1},md:{x:1,y:24,width:5,height:1},sm:{x:0,y:25,width:4,height:1}}}),new r["DynamicPageInputElement"]({id:"name",fieldName:"name",unique:!0,adaptivePosition:{lg:{x:1,y:25,width:4,height:2},md:{x:1,y:26,width:5,height:2},sm:{x:0,y:27,width:4,height:2}}}),new r["DynamicPageInputElement"]({id:"description",fieldName:"description",unique:!0,adaptivePosition:{lg:{x:5,y:25,width:4,height:2},md:{x:1,y:26,width:5,height:2},sm:{x:0,y:27,width:4,height:2}}}),new r["DynamicPageInputElement"]({id:"price",fieldName:"price",unique:!0,adaptivePosition:{lg:{x:1,y:27,width:4,height:2},md:{x:1,y:28,width:5,height:2},sm:{x:0,y:29,width:4,height:2}}}),new w({id:"salesList",identifier:":i18n:sales.salesList",unique:!0,adaptivePosition:{lg:{x:0,y:6,width:10,height:16},md:{x:0,y:7,width:7,height:16},sm:{x:0,y:8,width:4,height:16},xs:{x:0,y:8,width:1,height:16}}})],x=i("74ce"),I=i.n(x),D=i("3f0c"),T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loading=0,e.error=null,e.product=null,e.elements=P,e.bindings=u,e.userBindings={},e.edit=!1,e}return n["c"](e,t),Object.defineProperty(e.prototype,"pool",{get:function(){return[new w({id:"salesList",unique:!0})]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"mergedBindings",{get:function(){return n["a"]({},this.bindings,this.userBindings)},enumerable:!0,configurable:!0}),e.prototype.openKnowMoreWindow=function(){this.openWindow({id:"productKnowMore",title:":i18n:common.knowMore",icon:"question",width:500,height:400,component:c,centerOnOpen:!0})},e.prototype.openHelpWindow=function(){this.openWindow({id:"dynamicPageHelp",title:":i18n:common.dynamicPageHelp",icon:"question-circle",width:500,height:425,component:D["a"],centerOnOpen:!0})},e.prototype.created=function(){var t=this;this.loading=3,this.$store.dispatch("getProducts").then(function(e){t.product=e.find(function(e){return e.id===t.productId})}).catch(function(e){t.error=e}).finally(function(){t.loading-=1}),this.$store.dispatch("getProductsListDef").then(function(e){e.length&&(t.elements=e)}).catch(function(e){t.error=e}).finally(function(){t.loading-=1}),this.$store.dispatch("getProductExtBindings").then(function(e){t.userBindings=e}).catch(function(e){t.error=e}).finally(function(){t.loading-=1}),this.$store.state.semstrap&&this.$store.state.semstrap.flows||Object(r["FlowsStorePlugin"])(this.$store),this.$store.dispatch("semstrap/flows/groupBindings",{group:"product",bindings:function(){return t.mergedBindings}}),this.$store.dispatch("semstrap/flows/create",g),this.$store.dispatch("semstrap/flows/create",h),this.$store.dispatch("semstrap/flows/create",f)},e.prototype.beforeDestroy=function(){this.$store.commit("productsListDef",this.elements),this.$store.commit("productExtBindings",this.$refs.pooledDP.mutableUserBindings)},n["b"]([Object(o["c"])({type:String,required:!0})],e.prototype,"productId",void 0),e=n["b"]([I.a,o["a"]],e),e}(Object(o["b"])(r["WindowManagerMixin"]));e["default"]=T},d2c8:function(t,e,i){var n=i("aae3"),o=i("be13");t.exports=function(t,e,i){if(n(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(o(t))}}}]);
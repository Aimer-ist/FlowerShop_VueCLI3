(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4e3cd82"],{"0aca":function(t,a,s){},"4a2f":function(t,a,s){"use strict";var e=s("b1d9"),i=s.n(e);i.a},"56a6":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],r=s("5530"),n=s("2f62"),l={data:function(){return{}},computed:Object(r["a"])({},Object(n["c"])("alertMessageModules",["messages"])),methods:{updateMessage:function(t,a){this.$store.dispatch("alertMessageModules/updateMessage",{message:t,status:a})},removeMessage:function(t){this.$store.dispatch("alertMessageModules/removeMessage",t)}}},c=l,o=(s("4a2f"),s("2877")),d=Object(o["a"])(c,e,i,!1,null,null,null);a["a"]=d.exports},"7caa":function(t,a,s){"use strict";var e=s("0aca"),i=s.n(e);i.a},"7ce7":function(t,a,s){},"88e9":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("AlertMessage"),s("Header"),s("router-view"),s("Footer")],1)},i=[],r=s("56a6"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top bg-white shadow"},[s("div",{staticClass:"container-xl"},[s("a",{staticClass:"navbar-brand text-uppercase",attrs:{href:"/index.html"}},[t._v("flower shop")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExample07XL"}},[s("ul",{staticClass:"navbar-nav mr-auto align-items-center w-100"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Products"}}},[t._v("Product "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Cart"}}},[t._v("Cart")])],1),s("li",{staticClass:"nav-item ml-lg-auto"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"ProductsList"}}},[s("i",{staticClass:"fas fa-user-circle fa-lg"})])],1),s("li",{staticClass:"nav-item"},[s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn text-dark",attrs:{type:"button","data-toggle":"dropdown"}},[s("i",{staticClass:"fas fa-shopping-cart fa-lg"}),s("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cartLength))])]),s("div",{staticClass:"dropdown-menu shadow",class:{show:t.isShowCart}},[s("div",{staticClass:"p-2 px-sm-3"},[s("h5",{staticClass:"text-center"},[t._v("購物車")]),s("table",{staticClass:"table mb-2 table-hover",staticStyle:{"min-width":"270px"}},[s("tbody",[t._l(t.carts.carts,(function(a){return s("tr",{key:a.id,staticClass:"cursor-pointer",on:{click:function(s){return t.productLink(a.product_id)}}},[s("td",{staticClass:"align-middle px-2"},[s("a",{staticClass:"btn-del text-danger",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.removeCart(a.id)}}},[t.status.itemLodingId===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):s("i",{staticClass:"fas fa-trash-alt"})])]),s("td",{staticClass:"align-middle px-1"},[s("div",{staticClass:"bg-cover",style:"background-image:url("+a.product.imageUrl+");"})]),s("td",{staticClass:"align-middle py-1 px-0"},[s("div",{staticClass:"px-0 f-size75"},[s("div",{staticClass:"text-dark"},[t._v(t._s(a.product.title))]),s("div",{staticClass:"text-secondary"},[t._v(" "+t._s(a.qty)+"/"+t._s(a.product.unit))])])]),s("td",{staticClass:"text-right align-middle px-1 text-success font-weight-bold"},[t._v(" "+t._s(t._f("currency")(a.total)))])])})),s("tr",[0===t.cartLength?s("td",{staticClass:"text-center p-0 m-0"},[s("div",{staticClass:"text-center bg-brownlight m-0 p-4"},[s("div",[t._v("購物車內沒有任何商品唷!!")]),s("router-link",{staticClass:"btn btn-md btn-primary py-1 mt-3 h5 text-white",attrs:{to:{name:"Products"}}},[t._v(" 前往購物")])],1)]):t._e()])],2)]),0!==t.cartLength?s("router-link",{staticClass:"btn btn-block btn-important text-white",attrs:{to:{name:"Cart"}}},[s("i",{staticClass:"fas fa-cart-arrow-down"}),t._v(" 結帳去")]):t._e()],1)])]),s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn colorE",attrs:{type:"button","data-toggle":"dropdown"}},[s("i",{staticClass:"fas fa-heart fa-lg"}),s("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.favoriteLength))])]),s("div",{staticClass:"dropdown-menu favorite shadow"},[s("div",{staticClass:"p-2 px-sm-3"},[s("h5",{staticClass:"text-center"},[t._v("收藏夾")]),s("table",{staticClass:"table mb-2 table-hover",staticStyle:{"min-width":"200px"}},[s("tbody",[t._l(t.favorites,(function(a){return s("tr",{key:a.id,staticClass:"cursor-pointer",on:{click:function(s){return t.productLink(a.id)}}},[s("td",{staticClass:"align-middle px-1"},[s("div",{staticClass:"bg-cover",style:"background-image:url("+a.imageUrl+")"})]),s("td",{staticClass:"align-middle px-1"},[t._v(t._s(a.title))]),s("td",{staticClass:"align-middle px-1 text-right"},[s("a",{staticClass:"btn-del text-danger pr-1",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.removeFavorite(!1,a.id)}}},[s("i",{staticClass:"fas fa-trash-alt"})])])])})),0===t.favoriteLength?s("td",{staticClass:"text-center p-0 m-0"},[s("div",{staticClass:"text-center bg-brownlight m-0 p-4"},[s("div",[t._v("沒有任何收藏商品唷!!")]),s("router-link",{staticClass:"btn btn-md btn-primary py-1 mt-3 h5 text-white",attrs:{to:{name:"Products"}}},[t._v(" 前往商店")])],1)]):t._e()],2)]),0!==t.favoriteLength?s("button",{staticClass:"btn btn-outline-danger btn-block",attrs:{"data-toggle":"modal","data-target":"#delFavoriteModal"}},[t._v(" 刪除全部")]):t._e()])])])])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"delFavoriteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog justify-content-center d-flex",attrs:{role:"document"}},[s("div",{staticClass:"modal-content border-0 w-75"},[t._m(1),t._m(2),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.removeFavorite(!0)}}},[t._v("確認刪除")])])])])])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExample07XL","aria-controls":"navbarsExample07XL","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header bg-danger text-white"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[s("span",[t._v("刪除商品 ")])]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),s("strong",{staticClass:"text-danger"},[t._v("全部收藏")]),t._v(" 商品。 "),s("em",{staticClass:"text-gray f-size75"},[t._v("(刪除後將無法恢復 )")])])}],c=s("5530"),o=s("2f62"),d={computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(o["c"])(["status"])),Object(o["c"])("cartModules",["carts","cartLength","isShowCart"])),Object(o["c"])("favoriteModules",["favorites","favoriteLength"])),methods:{removeCart:function(t){this.$store.dispatch("cartModules/removeCart",t)},productLink:function(t){this.$route.params.productId!==t?this.$router.push({name:"ProductDetail",params:{productId:t}}):this.$store.dispatch("alertMessageModules/updateMessage",{message:"您已在本頁",status:"warning"})},removeFavorite:function(t,a){this.$store.dispatch("favoriteModules/removeFavorite",{id:a,isDeleteAll:t})}},created:function(){this.$store.dispatch("cartModules/getCart"),this.$store.dispatch("favoriteModules/getFavorite")}},u=d,v=(s("a9dc"),s("2877")),p=Object(v["a"])(u,n,l,!1,null,"6d6154ee",null),b=p.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("footer",{staticClass:"footer text-center mt-5"},[s("ul",{staticClass:"list-inline contact-info"},[s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"text-brown",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-facebook-f"})])]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"text-brown",attrs:{href:"https://github.com/Aimer-ist",target:"_blank"}},[s("i",{staticClass:"fab fa-github"})])]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"text-brown",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-instagram"})])]),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"text-brown",attrs:{href:"#",type:"mail"}},[s("i",{staticClass:"fas fa-envelope"})])])]),s("div",{staticClass:"copyright font-weight-bold"},[t._v(" 2020 © "),s("a",{staticClass:"link-line text-primary",attrs:{href:"https://github.com/Aimer-ist/FlowerShop",target:"_blank"}},[t._v("WangPeiShing")])]),s("p",{staticClass:"m-0 text-brown text-center"},[t._v("僅做為個人學習使用，非商業用途")])])])}],f=(s("7caa"),{}),C=Object(v["a"])(f,g,m,!1,null,"88475c88",null),h=C.exports,_={components:{AlertMessage:r["a"],Header:b,Footer:h},data:function(){return{isLongin:!1}},methods:{Loginstatus:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/user/check");t.$http.post(a).then((function(a){a.data.success?t.isLongin=!0:t.isLongin=!1}))}},created:function(){this.Loginstatus()}},x=_,w=Object(v["a"])(x,e,i,!1,null,null,null);a["default"]=w.exports},a9dc:function(t,a,s){"use strict";var e=s("7ce7"),i=s.n(e);i.a},b1d9:function(t,a,s){}}]);
//# sourceMappingURL=chunk-a4e3cd82.d27f7c3e.js.map
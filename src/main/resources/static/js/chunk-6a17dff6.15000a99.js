(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a17dff6","chunk-4c6000c8"],{"0301":function(t,e,n){"use strict";var a=n("b2c3"),i=n.n(a);i.a},"86ae":function(t,e,n){},a8fb:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",[n("el-aside",[n("side-menu",{attrs:{sidebar:t.sidebar},on:{select:t.handleSelect}})],1),n("el-main",t._l(t.books,(function(e,a){return n("div",{key:a,attrs:{id:"book-"+a},on:{click:function(n){return t.handleClick(e.isbn)}}},[n("img",{attrs:{src:e.cover,alt:"cover"}}),n("p",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.author))])])})),0),n("detail-dialog",{attrs:{isbn:t.isbn,show:t.show},on:{"update:show":function(e){t.show=e}}})],1),n("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper","page-size":18,total:t.total,"current-page":t.page,background:""},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.handleChange}})],1)},i=[],s=(n("4160"),n("159b"),n("012a"));function o(){return Object(s["a"])({url:"/category/side",method:"get"})}var c=n("2c07"),r=n("e1a7"),l=n("d8e9"),u={name:"Library",components:{"side-menu":r["default"],"detail-dialog":l["default"]},data:function(){return{index:"0",sidebar:[{title:"全部",icon:"book"}],total:0,page:0,books:[],isbn:0,show:!1}},created:function(){var t=this;o().then((function(e){var n=e.data;n.side.forEach((function(e){t.sidebar.push(e)})),t.handleChange(1)}))},methods:{handleChange:function(t){var e=this;this.books=[];var n=this.index>0?this.index:"";Object(c["c"])(n).then((function(t){var n=t.data;e.total=n.total})),Object(c["b"])(t,18,n).then((function(t){var n=t.data;e.books=n.list}))},handleSelect:function(t){this.index!==t&&(this.index=t,this.handleChange(1),this.page=1)},handleClick:function(t){this.isbn=t,this.show=!0}}},d=u,h=(n("0301"),n("2877")),f=Object(h["a"])(d,a,i,!1,null,"4f828b7c",null);e["default"]=f.exports},b2c3:function(t,e,n){},c3ab:function(t,e,n){"use strict";var a=n("86ae"),i=n.n(a);i.a},e1a7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{attrs:{"default-active":"0"},on:{select:t.select}},t._l(t.sidebar,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:a.toString(),id:"side-"+a}},[n("icon-font",{attrs:{"icon-class":e.icon}}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])],1)})),1)},i=[],s={name:"SideBar",props:{sidebar:{type:Array,required:!0}},methods:{select:function(t){this.$emit("select",t)}}},o=s,c=(n("c3ab"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"7258f288",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-6a17dff6.15000a99.js.map
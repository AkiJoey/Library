(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93607d7c"],{"24be":function(e,t,r){},6654:function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"e",(function(){return o})),r.d(t,"d",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return l}));var n=function(e,t,r){""===t?r(new Error("请输入用户名")):r()},o=function(e,t,r){""===t?r(new Error("请输入密码")):t.length<6?r(new Error("密码长度不能小于 6 位")):r()},a=function(e,t,r){""===t?r(new Error("请输入密码")):(""!==this.form.checkPassword&&this.$refs.form.validateField("checkPassword"),r())},s=function(e,t,r){""===t?r(new Error("请再次输入密码")):t!==this.form.oldPassword?r(new Error("两次输入密码不一致")):r()},i=function(e,t,r){""===t?r(new Error("请输入新密码")):t.length<6?r(new Error("密码长度不能小于 6 位")):r()},u=function(e,t,r){""===t?r(new Error("请输入手机号")):/^[1][3,4,5,7,8,9][0-9]{9}$/.test(t)?r():r(new Error("手机号格式不正确"))},l=function(e,t,r){""===t?r(new Error("请输入地址")):r()}},ec2c:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"status-icon":"","label-width":"70px"}},[r("el-form-item",[r("img",{attrs:{src:e.avatar}}),r("el-upload",{ref:"upload",attrs:{action:"#",limit:1,"auto-upload":!1,"before-upload":e.beforeUpdate,"http-request":e.httpRequest}},[r("el-button",{attrs:{slot:"trigger",icon:"el-icon-refresh"},on:{click:e.handleSelect},slot:"trigger"},[e._v("选择图片")]),r("el-button",{attrs:{icon:"el-icon-check",type:"primary"},on:{click:e.handleUpload}},[e._v("点击上传")]),r("p",{attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传 jpg / png 文件, 且不超过 500kb")])],1)],1),r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[r("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{label:"地址",prop:"address"}},[r("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-check",type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")]),r("el-button",{attrs:{icon:"el-icon-switch-button"},on:{click:e.handleLogout}},[e._v("退出")])],1)],1)},o=[],a=(r("b0c0"),r("7b36")),s=r("6654"),i={name:"Info",data:function(){return{avatar:this.$store.getters.avatar,form:{username:this.$store.getters.name,phone:"",address:""},rules:{username:[{validator:s["g"],trigger:"blur"}],phone:[{validator:s["f"],trigger:"blur"}],address:[{validator:s["b"],trigger:"blur"}]}}},created:function(){var e=this;Object(a["a"])().then((function(t){var r=t.data;e.form=r.detail}))},methods:{beforeUpdate:function(e){return"image/jpeg"!==e.type&&"image/png"!==e.type?(this.$message.error("上传头像图片只能是 JPG 或 PNG 格式"),!1):!(e.size>1048576)||(this.$message.error("上传头像图片大小不能超过 1MB"),!1)},httpRequest:function(e){var t=this,r=e.file,n=new FormData;n.append("avatar",r),Object(a["g"])(n).then((function(e){var r=e.message,n=e.data,o=n.avatar;t.avatar=o,t.$store.commit("user/setAvatar",o),t.$message.success(r)})).catch((function(){return t.$refs.upload.clearFiles()}))},handleSelect:function(){this.$refs.upload.clearFiles()},handleUpload:function(){this.$refs.upload.uploadFiles.length>0?this.$refs.upload.submit():this.$message.error("请选择图片")},handleSubmit:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return e.$message.error("Format Error"),!1;console.log("submit")}))},handleLogout:function(){var e=this;this.$store.dispatch("user/logout").then((function(t){var r=t.message;e.$message.success(r),e.$router.push({path:"/"})}))}}},u=i,l=(r("fa4b"),r("2877")),c=Object(l["a"])(u,n,o,!1,null,"d5b01594",null);t["default"]=c.exports},fa4b:function(e,t,r){"use strict";var n=r("24be"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-93607d7c.17eb50ae.js.map
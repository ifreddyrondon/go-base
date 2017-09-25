webpackJsonp([3],{183:function(e,t,c){function a(e){c(192)}var n=c(4)(c(194),c(195),a,null,null);e.exports=n.exports},192:function(e,t,c){var a=c(193);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);c(181)("5fa8da8e",a,!0)},193:function(e,t,c){t=e.exports=c(180)(void 0),t.push([e.i,".margin{margin-bottom:10px}",""])},194:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(5),n=c(30);c.n(n);t.default={components:{QBtn:a.c,QCheckbox:a.i,QCollapsible:a.k,QField:a.o,QIcon:a.q,QInput:a.r,QToggle:a.K},data:function(){return{account:{name:"",email:"",roles:["user"],active:!0},loading:!1}},validations:{account:{name:{required:n.required,minLength:Object(n.minLength)(3)},email:{required:n.required,email:n.email},roles:{required:n.required,minLength:Object(n.minLength)(1)}}},methods:{createAccount:function(){var e=this;this.loading=!0,this.axios.post("/admin/accounts",this.account).then(function(t){e.$emit("accountCreated",t.data),e.clearForm(),a.O.create.positive({html:"Account created"})},function(e){a.O.create.negative({html:e.response.data.error})}),this.loading=!1},clearForm:function(){this.$refs.createAccount.close(),this.account={name:"",email:"",roles:["account"],active:!0},this.$v.account.$reset()}}}},195:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("q-collapsible",{ref:"createAccount",staticClass:"margin",attrs:{icon:"add_circle_outline",label:"Add Account"}},[c("q-field",{attrs:{icon:"account_box",label:"Name",error:e.$v.account.name.$error,"error-label":"Minimum "+e.$v.account.name.$params.minLength.min+" characters"}},[c("q-input",{attrs:{placeholder:"Account Name"},on:{input:function(t){e.$v.account.name.$touch()}},model:{value:e.account.name,callback:function(t){e.account.name="string"==typeof t?t.trim():t},expression:"account.name"}})],1),c("q-field",{attrs:{icon:"mail",label:"Email",error:e.$v.account.email.$error,"error-label":"Not a valid email address"}},[c("q-input",{attrs:{placeholder:"Email Address"},on:{input:function(t){e.$v.account.email.$touch()}},model:{value:e.account.email,callback:function(t){e.account.email="string"==typeof t?t.trim():t},expression:"account.email"}})],1),c("q-field",{attrs:{icon:"supervisor_account",label:"Roles",error:e.$v.account.roles.$error,"error-label":"Choose at least one role"}},[c("q-checkbox",{attrs:{label:"User",val:"user"},on:{focus:function(t){e.$v.account.roles.$touch()}},model:{value:e.account.roles,callback:function(t){e.account.roles=t},expression:"account.roles"}}),c("q-checkbox",{staticClass:"on-right",attrs:{label:"Admin",val:"admin"},model:{value:e.account.roles,callback:function(t){e.account.roles=t},expression:"account.roles"}})],1),c("q-field",{attrs:{icon:"check_circle",label:"Active"}},[c("q-toggle",{model:{value:e.account.active,callback:function(t){e.account.active=t},expression:"account.active"}})],1),c("div",{staticClass:"row justify-end"},[c("q-btn",{on:{click:e.clearForm}},[e._v("Cancel")]),c("q-btn",{staticClass:"on-right",attrs:{disabled:e.$v.account.$invalid||e.loading,color:"primary"},on:{click:e.createAccount}},[e._v("Create")])],1)],1)},staticRenderFns:[]}}});
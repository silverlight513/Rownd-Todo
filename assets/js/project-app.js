/*! projectname - v0.0.1 */var App=Rownd.start({debug:!1,hideInfo:!0});App.createRoute({controller:"index",path:""}),App.createRoute({controller:"index",path:"/completed"}),App.createRoute({controller:"index",path:"/active"}),App.notFound=function(){Rownd.generateTemplate({template:"404"}),console.log("404 page")},App.Helpers.updateLocalStorage=function(a){localStorage.setItem("todos",JSON.stringify(a))},App.createController("index",{view:{template:"index",data:{todos:[],notCompletedCount:0}},controller:function(a){this.set("path",a.path);var b=JSON.parse(localStorage.getItem("todos"))||[];if(this.set("todos",b),this.set("notCompletedCount",0),b.length)for(var c=b.length-1;c>=0;c--)b[c].completed||this.add("notCompletedCount")},actions:{createTodo:function(a,b){var c=a.original.keyCode;if(13===c&&b.length>0){var d={value:b,editing:!1,completed:!1};this.push("todos",d),App.Helpers.updateLocalStorage(this.get("todos")),this.set("newTodo","")}},destroyTodo:function(a,b){this.splice("todos",b,1),App.Helpers.updateLocalStorage(this.get("todos"))},editTodo:function(a){var b=this.get(a.keypath);b.editing=!b.editing,this.set(a.keypath,b),App.Helpers.updateLocalStorage(this.get("todos"))},editingValue:function(a){var b=a.original.keyCode,c=this.get(a.keypath);13===b&&(c.editing=!1,this.set(a.keypath,c),App.Helpers.updateLocalStorage(this.get("todos")))},updateCompletion:function(a){a.context.completed?this.subtract("notCompletedCount"):this.add("notCompletedCount")},clearCompleted:function(){for(var a=this.get("todos"),b=0;b<a.length;b++)a[b].completed&&a.splice(b,1);App.Helpers.updateLocalStorage(this.get("todos"))}}});
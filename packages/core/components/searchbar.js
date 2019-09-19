(function framework7ComponentLoader(a,e){void 0===e&&(e=!0);var r=document,n=(window,a.$),t=(a.Template7,a.utils),s=(a.device,a.support,a.Class),i=(a.Modal,a.ConstructorMethods),l=(a.ModalMethods,function(a){function e(e,r){void 0===r&&(r={}),a.call(this,r,[e]);var s=this,i={el:void 0,inputEl:void 0,inputEvents:"change input compositionend",disableButton:!0,disableButtonEl:void 0,backdropEl:void 0,searchContainer:void 0,searchItem:"li",searchIn:void 0,searchGroup:".list-group",searchGroupTitle:".item-divider, .list-group-title",ignore:".searchbar-ignore",foundEl:".searchbar-found",notFoundEl:".searchbar-not-found",hideOnEnableEl:".searchbar-hide-on-enable",hideOnSearchEl:".searchbar-hide-on-search",backdrop:void 0,removeDiacritics:!0,customSearch:!1,hideDividers:!0,hideGroups:!0,disableOnBackdropClick:!0,expandable:!1,inline:!1};s.useModulesParams(i),s.params=t.extend(i,r);var l,o=n(s.params.el);if(0===o.length)return s;if(o[0].f7Searchbar)return o[0].f7Searchbar;o[0].f7Searchbar=s;var c,d,h,b,p=o.parents(".navbar");if(o.parents(".page").length>0)l=o.parents(".page");else if(p.length>0&&!(l=n(e.navbar.getPageByEl(p[0]))).length){var u=o.parents(".view").find(".page-current");u[0]&&u[0].f7Page&&u[0].f7Page.navbarEl===p[0]&&(l=u)}r.foundEl?c=n(r.foundEl):"string"==typeof s.params.foundEl&&l&&(c=l.find(s.params.foundEl)),r.notFoundEl?d=n(r.notFoundEl):"string"==typeof s.params.notFoundEl&&l&&(d=l.find(s.params.notFoundEl)),r.hideOnEnableEl?h=n(r.hideOnEnableEl):"string"==typeof s.params.hideOnEnableEl&&l&&(h=l.find(s.params.hideOnEnableEl)),r.hideOnSearchEl?b=n(r.hideOnSearchEl):"string"==typeof s.params.hideOnSearchEl&&l&&(b=l.find(s.params.hideOnSearchEl));var f,v,m,E,g=s.params.expandable||o.hasClass("searchbar-expandable"),$=s.params.inline||o.hasClass("searchbar-inline");function y(a){a.preventDefault()}function C(a){s.enable(a),s.$el.addClass("searchbar-focused")}function x(){s.$el.removeClass("searchbar-focused"),"aurora"!==e.theme||E&&E.length&&s.params.disableButton||s.query||s.disable()}function k(){var a=s.$inputEl.val().trim();(s.$searchContainer&&s.$searchContainer.length>0&&(s.params.searchIn||s.isVirtualList||s.params.searchIn===s.params.searchItem)||s.params.customSearch)&&s.search(a,!0)}function B(a,e){s.$el.trigger("searchbar:clear",e),s.emit("local::clear searchbarClear",s,e)}function w(a){s.disable(a)}function S(){!s||s&&!s.$el||s.enabled&&(s.$el.removeClass("searchbar-enabled"),s.expandable&&s.$el.parents(".navbar").removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition"))}function O(){!s||s&&!s.$el||s.enabled&&(s.$el.addClass("searchbar-enabled"),s.expandable&&s.$el.parents(".navbar").addClass("with-searchbar-expandable-enabled-no-transition"))}return void 0===s.params.backdrop&&(s.params.backdrop=!$&&"aurora"!==e.theme),s.params.backdrop&&0===(f=s.params.backdropEl?n(s.params.backdropEl):l&&l.length>0?l.find(".searchbar-backdrop"):o.siblings(".searchbar-backdrop")).length&&(f=n('<div class="searchbar-backdrop"></div>'),l&&l.length?o.parents(l).length>0&&p&&0===o.parents(p).length?f.insertBefore(o):f.insertBefore(l.find(".page-content").eq(0)):f.insertBefore(o)),s.params.searchContainer&&(v=n(s.params.searchContainer)),m=s.params.inputEl?n(s.params.inputEl):o.find('input[type="search"]').eq(0),s.params.disableButton&&(E=s.params.disableButtonEl?n(s.params.disableButtonEl):o.find(".searchbar-disable-button")),t.extend(s,{app:e,view:e.views.get(o.parents(".view")),$el:o,el:o[0],$backdropEl:f,backdropEl:f&&f[0],$searchContainer:v,searchContainer:v&&v[0],$inputEl:m,inputEl:m[0],$disableButtonEl:E,disableButtonEl:E&&E[0],disableButtonHasMargin:!1,$pageEl:l,pageEl:l&&l[0],$navbarEl:p,navbarEl:p&&p[0],$foundEl:c,foundEl:c&&c[0],$notFoundEl:d,notFoundEl:d&&d[0],$hideOnEnableEl:h,hideOnEnableEl:h&&h[0],$hideOnSearchEl:b,hideOnSearchEl:b&&b[0],previousQuery:"",query:"",isVirtualList:v&&v.hasClass("virtual-list"),virtualList:void 0,enabled:!1,expandable:g,inline:$}),s.attachEvents=function(){o.on("submit",y),s.params.disableButton&&s.$disableButtonEl.on("click",w),s.params.disableOnBackdropClick&&s.$backdropEl&&s.$backdropEl.on("click",w),s.expandable&&"ios"===e.theme&&s.view&&p.length&&s.$pageEl&&(s.$pageEl.on("page:beforeout",S),s.$pageEl.on("page:beforein",O)),s.$inputEl.on("focus",C),s.$inputEl.on("blur",x),s.$inputEl.on(s.params.inputEvents,k),s.$inputEl.on("input:clear",B)},s.detachEvents=function(){o.off("submit",y),s.params.disableButton&&s.$disableButtonEl.off("click",w),s.params.disableOnBackdropClick&&s.$backdropEl&&s.$backdropEl.off("click",w),s.expandable&&"ios"===e.theme&&s.view&&p.length&&s.$pageEl&&(s.$pageEl.off("page:beforeout",S),s.$pageEl.off("page:beforein",O)),s.$inputEl.off("focus",C),s.$inputEl.off("blur",x),s.$inputEl.off(s.params.inputEvents,k),s.$inputEl.off("input:clear",B)},s.useModules(),s.init(),s}return a&&(e.__proto__=a),e.prototype=Object.create(a&&a.prototype),e.prototype.constructor=e,e.prototype.clear=function(a){var e=this;if(!e.query&&a&&n(a.target).hasClass("searchbar-clear"))return e.disable(),e;var r=e.value;return e.$inputEl.val("").trigger("change").focus(),e.$el.trigger("searchbar:clear",r),e.emit("local::clear searchbarClear",e,r),e},e.prototype.setDisableButtonMargin=function(){var a=this;if(!a.expandable){var e=a.app;a.$disableButtonEl.transition(0).show(),a.$disableButtonEl.css("margin-"+(e.rtl?"left":"right"),-a.disableButtonEl.offsetWidth+"px"),a._clientLeft=a.$disableButtonEl[0].clientLeft,a.$disableButtonEl.transition(""),a.disableButtonHasMargin=!0}},e.prototype.enable=function(a){var e=this;if(e.enabled)return e;var n=e.app;function s(){e.$backdropEl&&(e.$searchContainer&&e.$searchContainer.length||e.params.customSearch)&&!e.$el.hasClass("searchbar-enabled")&&!e.query&&e.backdropShow(),e.$el.addClass("searchbar-enabled"),(!e.$disableButtonEl||e.$disableButtonEl&&0===e.$disableButtonEl.length)&&e.$el.addClass("searchbar-enabled-no-disable-button"),!e.expandable&&e.$disableButtonEl&&e.$disableButtonEl.length>0&&"md"!==n.theme&&(e.disableButtonHasMargin||e.setDisableButtonMargin(),e.$disableButtonEl.css("margin-"+(n.rtl?"left":"right"),"0px")),e.expandable&&(e.$el.parents(".navbar").hasClass("navbar-large")&&e.$pageEl&&e.$pageEl.find(".page-content").addClass("with-searchbar-expandable-enabled"),"md"===n.theme&&e.$el.parents(".navbar").length?e.$el.parents(".navbar").addClass("with-searchbar-expandable-enabled"):(e.$el.parents(".navbar").addClass("with-searchbar-expandable-enabled"),e.$el.parents(".navbar-large").addClass("navbar-large-collapsed"))),e.$hideOnEnableEl&&e.$hideOnEnableEl.addClass("hidden-by-searchbar"),e.$el.trigger("searchbar:enable"),e.emit("local::enable searchbarEnable",e)}e.enabled=!0;var i=!1;return!0===a&&r.activeElement!==e.inputEl&&(i=!0),n.device.ios&&"ios"===n.theme?e.expandable?(i&&e.$inputEl.focus(),s()):(i&&e.$inputEl.focus(),!a||"focus"!==a.type&&!0!==a?s():t.nextTick(function(){s()},400)):(i&&e.$inputEl.focus(),"md"===n.theme&&e.expandable&&e.$el.parents(".page, .view, .navbar-inner, .navbar").scrollLeft(n.rtl?100:0),s()),e},e.prototype.disable=function(){var a=this;if(!a.enabled)return a;var e=a.app;return a.$inputEl.val("").trigger("change"),a.$el.removeClass("searchbar-enabled searchbar-focused searchbar-enabled-no-disable-button"),a.expandable&&(a.$el.parents(".navbar").hasClass("navbar-large")&&a.$pageEl&&(a.$pageEl.find(".page-content").removeClass("with-searchbar-expandable-enabled").addClass("with-searchbar-expandable-closing"),a.$el.transitionEnd(function(){a.$pageEl.find(".page-content").removeClass("with-searchbar-expandable-closing")})),"md"===e.theme&&a.$el.parents(".navbar").length?(a.$el.parents(".navbar").removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition").addClass("with-searchbar-expandable-closing"),a.$el.transitionEnd(function(){a.$el.parents(".navbar").removeClass("with-searchbar-expandable-closing")})):(a.$el.parents(".navbar").removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition").addClass("with-searchbar-expandable-closing"),a.$el.transitionEnd(function(){a.$el.parents(".navbar").removeClass("with-searchbar-expandable-closing")}),a.$pageEl&&a.$pageEl.find(".page-content").trigger("scroll"))),!a.expandable&&a.$disableButtonEl&&a.$disableButtonEl.length>0&&"md"!==e.theme&&a.$disableButtonEl.css("margin-"+(e.rtl?"left":"right"),-a.disableButtonEl.offsetWidth+"px"),a.$backdropEl&&(a.$searchContainer&&a.$searchContainer.length||a.params.customSearch)&&a.backdropHide(),a.enabled=!1,a.$inputEl.blur(),a.$hideOnEnableEl&&a.$hideOnEnableEl.removeClass("hidden-by-searchbar"),a.$el.trigger("searchbar:disable"),a.emit("local::disable searchbarDisable",a),a},e.prototype.toggle=function(){return this.enabled?this.disable():this.enable(!0),this},e.prototype.backdropShow=function(){return this.$backdropEl&&this.$backdropEl.addClass("searchbar-backdrop-in"),this},e.prototype.backdropHide=function(){return this.$backdropEl&&this.$backdropEl.removeClass("searchbar-backdrop-in"),this},e.prototype.search=function(a,e){var r=this;if(r.previousQuery=r.query||"",a===r.previousQuery)return r;e||(r.enabled||r.enable(),r.$inputEl.val(a),r.$inputEl.trigger("input")),r.query=a,r.value=a;var s=r.$searchContainer,i=r.$el,l=r.$foundEl,o=r.$notFoundEl,c=r.$hideOnSearchEl,d=r.isVirtualList;if(a.length>0&&c?c.addClass("hidden-by-searchbar"):c&&c.removeClass("hidden-by-searchbar"),(s&&s.length&&i.hasClass("searchbar-enabled")||r.params.customSearch&&i.hasClass("searchbar-enabled"))&&(0===a.length?r.backdropShow():r.backdropHide()),r.params.customSearch)return i.trigger("searchbar:search",{query:a,previousQuery:r.previousQuery}),r.emit("local::search searchbarSearch",r,a,r.previousQuery),r;var h,b=[];if(d){if(r.virtualList=s[0].f7VirtualList,""===a.trim())return r.virtualList.resetFilter(),o&&o.hide(),l&&l.show(),i.trigger("searchbar:search",{query:a,previousQuery:r.previousQuery}),r.emit("local::search searchbarSearch",r,a,r.previousQuery),r;if(h=r.params.removeDiacritics?t.removeDiacritics(a):a,r.virtualList.params.searchAll)b=r.virtualList.params.searchAll(h,r.virtualList.items)||[];else if(r.virtualList.params.searchByItem)for(var p=0;p<r.virtualList.items.length;p+=1)r.virtualList.params.searchByItem(h,r.virtualList.params.items[p],p)&&b.push(p)}else{var u;u=r.params.removeDiacritics?t.removeDiacritics(a.trim().toLowerCase()).split(" "):a.trim().toLowerCase().split(" "),s.find(r.params.searchItem).removeClass("hidden-by-searchbar").each(function(a,e){var s=n(e),i=[],l=r.params.searchIn?s.find(r.params.searchIn):s;r.params.searchIn===r.params.searchItem&&(l=s),l.each(function(a,e){var s=n(e).text().trim().toLowerCase();r.params.removeDiacritics&&(s=t.removeDiacritics(s)),i.push(s)}),i=i.join(" ");for(var o=0,c=0;c<u.length;c+=1)i.indexOf(u[c])>=0&&(o+=1);o===u.length||r.params.ignore&&s.is(r.params.ignore)?b.push(s[0]):s.addClass("hidden-by-searchbar")}),r.params.hideDividers&&s.find(r.params.searchGroupTitle).each(function(a,e){for(var t=n(e),s=t.nextAll(r.params.searchItem),i=!0,l=0;l<s.length;l+=1){var o=s.eq(l);if(o.is(r.params.searchGroupTitle))break;o.hasClass("hidden-by-searchbar")||(i=!1)}var c=r.params.ignore&&t.is(r.params.ignore);i&&!c?t.addClass("hidden-by-searchbar"):t.removeClass("hidden-by-searchbar")}),r.params.hideGroups&&s.find(r.params.searchGroup).each(function(a,e){var t=n(e),s=r.params.ignore&&t.is(r.params.ignore);0!==t.find(r.params.searchItem).filter(function(a,e){return!n(e).hasClass("hidden-by-searchbar")}).length||s?t.removeClass("hidden-by-searchbar"):t.addClass("hidden-by-searchbar")})}return 0===b.length?(o&&o.show(),l&&l.hide()):(o&&o.hide(),l&&l.show()),d&&r.virtualList&&r.virtualList.filterItems(b),i.trigger("searchbar:search",{query:a,previousQuery:r.previousQuery,foundItems:b}),r.emit("local::search searchbarSearch",r,a,r.previousQuery,b),r},e.prototype.init=function(){var a=this;a.expandable&&a.$el&&a.$el.addClass("searchbar-expandable"),a.inline&&a.$el&&a.$el.addClass("searchbar-inline"),a.attachEvents()},e.prototype.destroy=function(){var a=this;a.emit("local::beforeDestroy searchbarBeforeDestroy",a),a.$el.trigger("searchbar:beforedestroy"),a.detachEvents(),a.$el[0]&&(a.$el[0].f7Searchbar=null,delete a.$el[0].f7Searchbar),t.deleteProps(a)},e}(s)),o={name:"searchbar",static:{Searchbar:l},create:function(){this.searchbar=i({defaultSelector:".searchbar",constructor:l,app:this,domProp:"f7Searchbar",addMethods:"clear enable disable toggle search".split(" ")})},on:{tabMounted:function(a){var e=this;n(a).find(".searchbar-init").each(function(a,r){var s=n(r);e.searchbar.create(t.extend(s.dataset(),{el:r}))})},tabBeforeRemove:function(a){n(a).find(".searchbar-init").each(function(a,e){e.f7Searchbar&&e.f7Searchbar.destroy&&e.f7Searchbar.destroy()})},pageInit:function(a){var e=this;a.$el.find(".searchbar-init").each(function(a,r){var s=n(r);e.searchbar.create(t.extend(s.dataset(),{el:r}))}),"ios"===e.theme&&a.view&&a.view.router.dynamicNavbar&&a.$navbarEl&&a.$navbarEl.length>0&&a.$navbarEl.find(".searchbar-init").each(function(a,r){var s=n(r);e.searchbar.create(t.extend(s.dataset(),{el:r}))})},pageBeforeRemove:function(a){a.$el.find(".searchbar-init").each(function(a,e){e.f7Searchbar&&e.f7Searchbar.destroy&&e.f7Searchbar.destroy()}),"ios"===this.theme&&a.view&&a.view.router.dynamicNavbar&&a.$navbarEl&&a.$navbarEl.length>0&&a.$navbarEl.find(".searchbar-init").each(function(a,e){e.f7Searchbar&&e.f7Searchbar.destroy&&e.f7Searchbar.destroy()})}},clicks:{".searchbar-clear":function(a,e){void 0===e&&(e={});var r=this.searchbar.get(e.searchbar);r&&r.clear()},".searchbar-enable":function(a,e){void 0===e&&(e={});var r=this.searchbar.get(e.searchbar);r&&r.enable(!0)},".searchbar-disable":function(a,e){void 0===e&&(e={});var r=this.searchbar.get(e.searchbar);r&&r.disable()},".searchbar-toggle":function(a,e){void 0===e&&(e={});var r=this.searchbar.get(e.searchbar);r&&r.toggle()}},vnode:{"searchbar-init":{insert:function(a){var e=a.elm,r=n(e);this.searchbar.create(t.extend(r.dataset(),{el:e}))},destroy:function(a){var e=a.elm;e.f7Searchbar&&e.f7Searchbar.destroy&&e.f7Searchbar.destroy()}}}};if(e){if(a.prototype.modules&&a.prototype.modules[o.name])return;a.use(o),a.instance&&(a.instance.useModuleParams(o,a.instance.params),a.instance.useModule(o))}return o}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))

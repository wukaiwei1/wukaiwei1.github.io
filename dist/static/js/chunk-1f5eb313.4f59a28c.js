(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f5eb313"],{"2cf5":function(t,a,s){"use strict";s("5e42")},"5e42":function(t,a,s){},"86d2":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"app-container"},[s("el-row",{staticClass:"el-row"},[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"head"},[s("div",{staticClass:"title"},[t._v("运营人员（当天）")]),s("div",{staticClass:"body"},[s("div",{staticClass:"child"},[s("div",{staticClass:"text1"},[t._v(t._s(t.repDate.total))]),s("div",{staticClass:"text2"},[t._v("工单总数（个）")])]),s("div",{staticClass:"child"},[s("div",{staticClass:"text1"},[t._v(t._s(t.repDate.completedTotal))]),s("div",{staticClass:"text2"},[t._v("完成工单（个）")])]),s("div",{staticClass:"child"},[s("div",{staticClass:"text1"},[t._v(t._s(t.repDate.cancelTotal))]),s("div",{staticClass:"text2"},[t._v("拒绝工单（个）")])]),s("div",{staticClass:"child"},[s("div",{staticClass:"text1"},[t._v(t._s(t.repDate.workerCount))]),s("div",{staticClass:"text2"},[t._v("运营人员数（个）")])])])])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"head h-right"},[s("div",{staticClass:"title"},[t._v("运维人员（当天）")]),s("div",{staticClass:"body"},[s("div",{staticClass:"child"},[s("div",{staticClass:"text1"},[t._v(t._s(t.repDate.total))]),s("div",{staticClass:"text2"},[t._v("工单总数（个）")])]),s("div",{staticClass:"child"},[s("div",{staticClass:"text1"},[t._v(t._s(t.repDate.completedTotal))]),s("div",{staticClass:"text2"},[t._v("完成工单（个）")])]),s("div",{staticClass:"child"},[s("div",{staticClass:"text1"},[t._v(t._s(t.repDate.cancelTotal))]),s("div",{staticClass:"text2"},[t._v("拒绝工单（个）")])]),s("div",{staticClass:"child"},[s("div",{staticClass:"text1"},[t._v(t._s(t.repDate.workerCount))]),s("div",{staticClass:"text2"},[t._v("运维人员数（个）")])])])])])],1),s("el-row",{staticClass:"el-row",attrs:{gutter:50}},[s("el-col",{attrs:{span:17}},[s("div",{staticClass:"body-l"},[s("div",{staticClass:"header"},[s("div",{staticClass:"title"},[t._v("工单状态")]),s("el-date-picker",{staticClass:"date",attrs:{clearable:"false","value-format":"yyyy-MM-dd",type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.getTime},model:{value:t.time,callback:function(a){t.time=a},expression:"time"}}),s("div",{staticClass:"timer"},[s("span",{class:{active:"w"===t.s},on:{click:t.weekClick}},[t._v("周")]),s("span",{class:{active:"m"===t.s},on:{click:t.monthClick}},[t._v("月")]),s("span",{class:{active:"y"===t.s},on:{click:t.yearClick}},[t._v("年")])])],1),s("div",{staticClass:"charts"},[t.isShow?s("MyCharts",{attrs:{finshData:t.finshData,cancelData:t.cancelData,days:t.days}}):s("div",{staticClass:"role-content1"},[s("div",{staticClass:"empty2"},[s("img",{attrs:{src:"\thttp://likede2-admin.itheima.net/img/empty.87c4f71b.png",alt:""}}),s("p",[t._v("暂无数据")])])])],1)])]),s("el-col",{staticClass:"box bom-right bom",attrs:{span:6}},[s("div",{staticClass:"header"},[s("div",{staticClass:"title",staticStyle:{"margin-bottom":"0"}},[t._v("人效排名（月度）")]),s("el-select",{staticClass:"select",attrs:{placeholder:"全部"},model:{value:t.area,callback:function(a){t.area=a},expression:"area"}},t._l(t.areaList,(function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1)],1),s("div",{staticClass:"role-group"},[s("div",{staticClass:"role-list"},[s("div",{staticClass:"role",class:{isChecked:"role"===t.r},on:{click:t.clickL}},[t._v(" 运营人员 ")]),s("div",{staticClass:"role",class:{isChecked:"nrole"===t.r},on:{click:t.clickR}},[t._v(" 运维人员 ")])])]),s("div",{staticClass:"role-content"},[s("div",{staticClass:"empty2"},[s("img",{attrs:{src:"\thttp://likede2-admin.itheima.net/img/empty.87c4f71b.png",alt:""}}),s("p",[t._v("暂无数据")])])])])],1)],1)},i=[],c=s("c7eb"),r=s("1da1"),l=(s("d81d"),s("5a0c")),n=s.n(l),o=s("365c"),d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{ref:"chart",staticClass:"charts-m"})},v=[],u={data:function(){return{chart:null}},props:{finshData:{type:Array,requrie:!0},cancelData:{type:Array,requrie:!0},days:{type:Array,requrie:!0}},created:function(){},mounted:function(){this.init()},methods:{init:function(){var t=this.$refs.chart;if(t){var a=this.$Echarts.init(t),s={color:["blue","red"],tooltip:{trigger:"axis"},legend:{data:["完成工单","取消工单"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.days,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"完成工单",type:"bar",barWidth:"10%",data:this.finshData},{name:"取消工单",type:"bar",barWidth:"10%",data:this.cancelData}]};a.setOption(s),window.addEventListener("resize",(function(){a.resize()}))}}}},h=u,p=(s("9c3c"),s("2877")),C=Object(p["a"])(h,d,v,!1,null,"acde94d6",null),f=C.exports,m={data:function(){return{repDate:{toral:"",completedTotal:"",cancelTotal:"",progressTotal:"",workerCount:"",repair:"",date:""},NrepDate:{toral:"",completedTotal:"",cancelTotal:"",progressTotal:"",workerCount:"",repair:"",date:""},areaList:[],area:"",time:"",s:"w",r:"role",workstatusList:[],isShow:"",finshData:[],cancelData:[],days:[]}},created:function(){this.workerCount(),this.getRegionsList(),this.defaultDate()},methods:{workerCount:function(){var t=this;return Object(r["a"])(Object(c["a"])().mark((function a(){var s,e,i;return Object(c["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=n()().startOf("day").format("YYYY-MM-DD HH:mm:ss"),e=n()().endOf("day").format("YYYY-MM-DD HH:mm:ss"),a.next=4,Object(o["ib"])(s,e);case 4:i=a.sent,t.repDate=i.data[0],t.NrepDate=i.data[1];case 7:case"end":return a.stop()}}),a)})))()},getRegionsList:function(){var t=this;return Object(r["a"])(Object(c["a"])().mark((function a(){var s;return Object(c["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(o["E"])();case 2:s=a.sent,console.log(s),t.areaList=s.data.currentPageRecords;case 5:case"end":return a.stop()}}),a)})))()},weekClick:function(){this.s="w"},monthClick:function(){this.s="m"},yearClick:function(){this.s="y"},clickL:function(){this.r="role"},clickR:function(){this.r="nrole"},getTime:function(){var t=this;return Object(r["a"])(Object(c["a"])().mark((function a(){var s,e,i;return Object(c["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(t.time),s=t.time[0],e=t.time[1],a.next=5,Object(o["hb"])(s,e);case 5:i=a.sent,console.log(i),t.workstatusList=i.data,console.log(t.workstatusList),t.finshData=t.workstatusList.map((function(t){return t.finishCount})),t.cancelData=t.workstatusList.map((function(t){return t.cancelCount})),t.days=t.workstatusList.map((function(t){return n()(t.collectDate).format("MM月DD日")})),0===t.workstatusList.length?t.isShow=!1:t.isShow=!0;case 13:case"end":return a.stop()}}),a)})))()},defaultDate:function(){var t=n()().startOf("D").format("YYYY-MM-DD"),a=n()().startOf("M").format("YYYY-MM-DD");this.time=[a,t]}},components:{MyCharts:f}},k=m,b=(s("2cf5"),Object(p["a"])(k,e,i,!1,null,"0311d9d4",null));a["default"]=b.exports},"9c3c":function(t,a,s){"use strict";s("b6f5")},b6f5:function(t,a,s){}}]);
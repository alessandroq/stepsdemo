$(document).ready(function() {
  var _that = this;
  _that.StepsDashboardLibrary_StatisticsLibrary_averageValue = null;
  _that.StepsDashboardLibrary_StatisticsLibrary_maxValue = null;
  _that.StepsDashboardLibrary_StatisticsLibrary_minValue = null;
  _that.StepsDashboardLibrary_targetCount = null;
  _that.StepsDashboardLibrary_currCount = null;
  _that.StepsDashboardLibrary_weekList = null;
  _that.StepsDashboardLibrary_stepsList = null;
  /**
   * Describe this function...
   */
  function StepsDashboardLibrary__StatisticsLibrary__average(list) {
    return new Promise(function(resolve, reject) {
      // Block#: 99YE!yte3t7Tjm`GT0mB
      _that.StepsDashboardLibrary_StatisticsLibrary_averageValue = 0;
      // Block#: `115}W*Lfr:u]7~YX?J6
      var index_end = list.length - 1;
      var index_inc = 1;
      if(0 > index_end) {
        index_inc = -index_inc;
      }
      for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
        // Block#: jOP?b1{dR?y~OvjGv}M+
        _that.StepsDashboardLibrary_StatisticsLibrary_averageValue = _that.StepsDashboardLibrary_StatisticsLibrary_averageValue + list[index];
      }
      // Block#: f_VyNJfIH#dH-Prq?iOY
      if(list.length != 0) {
        // Block#: ZJ6!WBBiH2^q7/OnpZi3
        _that.StepsDashboardLibrary_StatisticsLibrary_averageValue = _that.StepsDashboardLibrary_StatisticsLibrary_averageValue / list.length;
        // Block#: QAG285RL/,4T82Tx0xtc
        resolve({
          name: "value",
          data: _that.StepsDashboardLibrary_StatisticsLibrary_averageValue
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function StepsDashboardLibrary__StatisticsLibrary__max(list) {
    return new Promise(function(resolve, reject) {
      // Block#: $6nO|{jxUQXM{0^g~.T]
      _that.StepsDashboardLibrary_StatisticsLibrary_maxValue = list[0];
      // Block#: *x.Y8aUaOZ-[2rN(mW^=
      var index_end2 = list.length - 1;
      var index_inc2 = 1;
      if(0 > index_end2) {
        index_inc2 = -index_inc2;
      }
      for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
        // Block#: G:(9R_/QZghFAuZxGooS
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(list[index], "GT", _that.StepsDashboardLibrary_StatisticsLibrary_maxValue)) {
          // Block#: YkxU}2!aAFa:IXygCA?0
          _that.StepsDashboardLibrary_StatisticsLibrary_maxValue = list[index];
        }
      }
      // Block#: )^@Bh6$U?r!5PTSkUFMk
      resolve({
        name: "value",
        data: _that.StepsDashboardLibrary_StatisticsLibrary_maxValue
      });
    });
  }
  /**
   * Describe this function...
   */
  function StepsDashboardLibrary__StatisticsLibrary__min(list) {
    return new Promise(function(resolve, reject) {
      // Block#: +V?T$4x6j)7U==o$IAwq
      _that.StepsDashboardLibrary_StatisticsLibrary_minValue = list[0];
      // Block#: zBWWS2.+K4798[s{vTst
      var index_end3 = list.length - 1;
      var index_inc3 = 1;
      if(0 > index_end3) {
        index_inc3 = -index_inc3;
      }
      for(index = 0; index_inc3 >= 0 ? index <= index_end3 : index >= index_end3; index += index_inc3) {
        // Block#: U@DcT2*CxD$fj[hF7MlI
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(list[index], "LT", _that.StepsDashboardLibrary_StatisticsLibrary_minValue)) {
          // Block#: Lf4C|.03!L7[u{z]_IU@
          _that.StepsDashboardLibrary_StatisticsLibrary_minValue = list[index];
        }
      }
      // Block#: RrO:2RyR]fsF5g2`xM,6
      resolve({
        name: "value",
        data: _that.StepsDashboardLibrary_StatisticsLibrary_minValue
      });
    });
  }
  /**
   * Describe this function...
   */
  function StepsDashboardLibrary__setTargetCount(count) {
    return new Promise(function(resolve, reject) {
      // Block#: .^t#K:*6a5wrzcu`JG?W
      _that.StepsDashboardLibrary_targetCount = count;
    });
  }
  /**
   * Describe this function...
   */
  function StepsDashboardLibrary__setCurrCount(count) {
    return new Promise(function(resolve, reject) {
      // Block#: I+/MA4ut[4P7|~hIO^p$
      _that.StepsDashboardLibrary_currCount = count;
    });
  }
  /**
   * Describe this function...
   */
  function StepsDashboardLibrary__setHistoricalData(xAxisList, yAxisList) {
    return new Promise(function(resolve, reject) {
      // Block#: ^./^#-0O86#AQC!WO;o$
      _that.StepsDashboardLibrary_weekList = xAxisList;
      // Block#: zmZOY9pDHx+`@Fn|SN~C
      _that.StepsDashboardLibrary_stepsList = yAxisList;
    });
  }
  /**
   * Describe this function...
   */
  function StepsDashboardLibrary__displayDashboard() {
    return new Promise(function(resolve, reject) {
      // Block#: 3tC^;ndvd[[B6rf]0CQ@
      com.fc.JavaScriptDistLib.Gauge.setProperty["Minimum Value"]("stepsGauge", 0); // Block#: b(3GAT$)~DM;$(A]-*]/
      com.fc.JavaScriptDistLib.Gauge.setProperty["Maximum Value"]("stepsGauge", _that.StepsDashboardLibrary_targetCount); // Block#: Mhm_olJnL[kx/_@Z*q7A
      com.fc.JavaScriptDistLib.Gauge.setProperty["Current Value"]("stepsGauge", _that.StepsDashboardLibrary_currCount); // Block#: k0n;[-yhZQ^K{j-AddK[
      com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('GraphContainer', _that.StepsDashboardLibrary_weekList, _that.StepsDashboardLibrary_stepsList, 'targetline') // Block#: fweal:pXQfVgS%#9IRK6
      com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('GraphContainer', 500, 500); // Block#: 8`ZSbbj*ZIB0IA,I@d3:
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("stepCount", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.StepsDashboardLibrary_currCount))); // Block#: ^5[BlH9no@uE}QfL?THk
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("remainingCount", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.StepsDashboardLibrary_targetCount - _that.StepsDashboardLibrary_currCount))); // Imported from Lib: StatisticsLibrary
      // Block#: |IS[8R+Z(OzCY$DbBhP`
      StepsDashboardLibrary__StatisticsLibrary__average(_that.StepsDashboardLibrary_stepsList).then(response => {;
        if(response.name === "value") {
          // Block#: 2i.,A)pb!N@@0GXqtOT0
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("averageLabel", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data))));
        }
      });
      // Imported from Lib: StatisticsLibrary
      // Block#: Cv/G$s?f==QvBk)}jDzP
      StepsDashboardLibrary__StatisticsLibrary__max(_that.StepsDashboardLibrary_stepsList).then(response => {;
        if(response.name === "value") {
          // Block#: YO1WU:;efnQ1Tu!Ku4c!
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("maxLabel", (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)));
        }
      });
      // Imported from Lib: StatisticsLibrary
      // Block#: hyz0Tm+_|)*#7F0g+7Ed
      StepsDashboardLibrary__StatisticsLibrary__min(_that.StepsDashboardLibrary_stepsList).then(response => {;
        if(response.name === "value") {
          // Block#: /ikPBEvIU_2nI8*-ChqJ
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("minLabel", (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)));
        }
      });
    });
  }
  /**
   * Imported from Lib: StepsDashboardLibrary
   */
  function StepsDashboardLibrary__onStepsDashboardClosed() {
    return new Promise(function(resolve, reject) {
      // Block#: /[kg}b;rb!w7VP7Rt$?=
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="MainScreen"]');
      showScreen.show();
      history.pushState({
        'view': 'MainScreen'
      }, 'MainScreen', 'MainScreen');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    });
  }
  // Block#: b4X+K-8C~A~[`OpKN}mt
  function on_backButton_click(e) {
    try {
      // Block#: RE3PBf^_:hOAkpg3F`Z[
      StepsDashboardLibrary__onStepsDashboardClosed().then(response => {;
      });
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="backButton"]').on('click', on_backButton_click);
  // Block#: Lv23p!Aj9){4Yc_~ofB`
  function on_stepsDashboardButton_click(e) {
    try {
      // Block#: @?1tPR}H]Su(3KB3jhmB
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      //Close all dialogs
      com.fc.JavaScriptDistLib.Screen.closeDialogs();
      hideScreen.hide();
      let showScreen = $('[obj-name="StepsDashboard"]');
      showScreen.show();
      history.pushState({
        'view': 'StepsDashboard'
      }, 'StepsDashboard', 'StepsDashboard');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="stepsDashboardButton"]').on('click', on_stepsDashboardButton_click);
  // Block#: m9h;It$YcUw]9)T-QI2r
  function on_screen_showStepsDashboard() {
    try {
      // Imported from Lib: StepsDashboardLibrary
      // Block#: )6zg$,*Vh[om-?sGST`o
      StepsDashboardLibrary__setTargetCount(15000).then(response => {;
      });
      // Imported from Lib: StepsDashboardLibrary
      // Block#: *7ZkJQHJH5eS)tT.llQ^
      StepsDashboardLibrary__setCurrCount(7500).then(response => {;
      });
      // Imported from Lib: StepsDashboardLibrary
      // Block#: ::AxTa3=k|q#@c2,0-A[
      StepsDashboardLibrary__setHistoricalData(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'], [9000, 11000, 13000, 15000, 13000, 11000, 9000]).then(response => {;
      });
      // Imported from Lib: StepsDashboardLibrary
      // Block#: Su}IW0G,uw^n+h5_rq,Z
      StepsDashboardLibrary__displayDashboard().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="StepsDashboard"]').on('show', on_screen_showStepsDashboard);
  com.fc.JavaScriptDistLib.Screen.screenDict['showStepsDashboard'] = on_screen_showStepsDashboard;
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 31471-572260-484894-274907

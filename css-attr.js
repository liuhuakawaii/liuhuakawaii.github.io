/**
 * @description CSS attr()鏂规硶鐨勬敮鎸佸拰浣跨敤
 * @author zhangxinxu(.com) 2020-08-11
 * @docs https://www.zhangxinxu.com/wordpress/?p=9443
 * @license MIT 浣滆€呭拰鍑哄淇濈暀
 */

(function () {
  if (!window.CSS) {
    return;
  }

  if (CSS.supports('color: attr(color color)')) {
    return;
  }


  if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  // 瑙傚療鐨勫厓绱犻€夋嫨鍣�
  var watchSelector = window.watchSelector || '*';

  // 鑾峰彇椤甸潰涓墍鏈夌殑CSS鑷畾涔夊睘鎬�
  var isSameDomain = function (styleSheet) {
    if (!styleSheet.href) {
      return true;
    }

    return styleSheet.href.indexOf(window.location.origin) === 0;
  };

  var isStyleRule = function (rule) {
    return rule.type === 1;
  };

  var arrCSSCustomProps = (function () {
    return [].slice.call(document.styleSheets).filter(isSameDomain).reduce(function (finalArr, sheet) {
      return finalArr.concat([].slice.call(sheet.cssRules).filter(isStyleRule).reduce(function (propValArr, rule) {
        var props = [].slice.call(rule.style).map(function (propName) {
          return [
            propName.trim(),
            rule.style.getPropertyValue(propName).trim()
          ];
        }).filter(function ([propName]) {
          return propName.indexOf('--') === 0;
        });

        return [].concat(propValArr, props);
      }, []));
    }, []);
  })();

  // 浣跨敤浜唊eyword()璇硶鐨凜SS鑷畾涔夊睘鎬у悕
  var arrCssPropsValueIsAttr = arrCSSCustomProps.filter(function (arrPropVal) {
    return /attr\([\w\W]+\)/i.test(arrPropVal[1]);
  });

  // attr()璇硶鐨勮В鏋�
  // 杩斿洖瀵瑰簲鐨�<attr-name> <type-or-unit> 鍜� <attr-fallback>
  var funParseAttr = function (valueVar) {
    var attrName, typeOrUnit, attrFallback;
    if (valueVar) {

      valueVar = valueVar.replace(/attr\(([\w\W]*)\)/i, '$1');
      // fallback鑾峰彇
      var arrValueVar = valueVar.split(',');
      // 杩欐槸鍚庡鏍峰紡锛屽鏋滄病鏈夊搴旂殑灞炴€э紝鍒欎娇鐢ㄨ繖涓€�
      if (arrValueVar.length > 1) {
        attrFallback = arrValueVar[1].trim();
      }

      // 鍓嶉潰鐨勫睘鎬у拰鍗曚綅
      var arrFirstPart = arrValueVar[0].trim().split(/\s+/);
      attrName = arrFirstPart[0];
      typeOrUnit = arrFirstPart[1] || 'string';
    }

    return {
      attrName: attrName,
      typeOrUnit: typeOrUnit,
      attrFallback: attrFallback
    };
  };

  // attr()璇硶杞崲鎴愮洰鍓岰SS鍙橀噺鍙瘑鍒殑璇硶
  var funAttrVar2NormalVar = function (objParseAttr, valueAttr) {
    // attr()璇硶 attr( <attr-name> <type-or-unit>? [, <attr-fallback> ]? )
    // valueVar绀烘剰锛歛ttr(bgcolor color, deeppink)
    // valueAttr绀烘剰锛� 'deepskyblue'鎴栬€卬ull

    var attrName = objParseAttr.attrName;
    var typeOrUnit = objParseAttr.typeOrUnit;

    // typeOrUnit鍊煎寘鎷細
    // string | color | url | integer | number | length | angle | time | frequency | cap | ch | em | ex | ic | lh | rlh | rem | vb | vi | vw | vh | vmin | vmax | mm | Q | cm | in | pt | pc | px | deg | grad | rad | turn | ms | s | Hz | kHz | %

    var arrUnits = ['ch', 'em', 'ex', 'ic', 'lh', 'rlh', 'rem', 'vb', 'vi', 'vw', 'vh', 'vmin', 'vmax', 'mm', 'cm', 'in', 'pt', 'pc', 'px', 'deg', 'grad', 'rad', 'turn', 'ms', 's', 'Hz', 'kHz', '%'];

    var valueVarNormal = valueAttr;
    // 濡傛灉鏄痵tring绫诲瀷
    switch (typeOrUnit) {
      case 'string': {
        valueVarNormal = '"' + valueAttr + '"';
        break;
      }
      case 'url': {
        if (/^url\(/i.test(valueAttr) == false) {
          valueVarNormal = 'url(' + valueAttr + ')';
        }
        break;
      }
    }

    // 鏁板€煎彉鍗曚綅鐨勫鐞�
    if (arrUnits.includes(typeOrUnit) && valueAttr.indexOf(typeOrUnit) == -1 && parseFloat(valueAttr) == valueAttr) {
      valueVarNormal = parseFloat(valueAttr) + typeOrUnit;
    }

    return valueVarNormal;
  };

  // 璁剧疆鑷畾涔夊睘鎬у€肩殑鏂规硶
  var funSetAttr = function (node) {
    if (node.nodeType != 1 || node.matches(watchSelector) == false) {
      return;
    }

    // 閫氶厤绗﹀尮閰嶆椂鍊欐湁浜涘厓绱犲拷鐣�
    if (watchSelector == '*' && ['script', 'style', 'meta', 'title', 'head'].includes(node.nodeName.toLowerCase())) {
      return;
    }

    var objStyle = window.getComputedStyle(node);

    // 褰撳墠鑺傜偣鐨勬墍鏈夋牱寮忓璞�
    var objStyle = window.getComputedStyle(node);

    // 鎵€鏈夎缃簡keyword()鐨勮嚜瀹氫箟灞炴€х殑閬嶅巻澶勭悊
    arrCssPropsValueIsAttr.forEach(function (arr) {
      var cssProp = arr[0];
      var cssValue = node['originCssValue' + cssProp] || arr[1];

      // 鍒ゆ柇褰撳墠鑺傜偣鏈夋病鏈夎缃搴旂殑鑷畾涔夊睘鎬�
      var cssVarValueAttr = objStyle.getPropertyValue(cssProp);

      if (!cssVarValueAttr || !cssVarValueAttr.trim() || (!/attr\(([\w\W]*)\)/i.test(cssVarValueAttr) && !node['originCssValue' + cssProp])) {
        return;
      }

      // 杩欎釜鏄疕TML灞炴€ф敼鍙樻椂鍊欑敤鐨�
      if (!node['originCssValue' + cssProp]) {
        node['originCssValue' + cssProp] = cssValue;
      }

      // 鎬绘槸浣跨敤鍒濆鑾峰彇鐨勮嚜瀹氫箟灞炴€у€�
      cssVarValueAttr = cssValue;

      var objParseAttr = funParseAttr(cssVarValueAttr);

      // 鑾峰彇灞炴€у搴旂殑鍊�
      if (!objParseAttr.attrName) {
        return;
      }

      // attr()灞炴€у悕
      var attrName = objParseAttr.attrName;

      // 鑾峰彇姝ゆ椂鑺傜偣杩欎簺灞炴€х洰鍓嶅搴旂殑鍊�
      // 濡傛灉娌℃湁鍊硷紝鍒欎娇鐢ㄥ悗澶囧€�
      var strHtmlAttr = node.getAttribute(attrName) || objParseAttr.attrFallback;
      if (!strHtmlAttr) {
        // 璁剧疆涓虹┖
        node.style.setProperty(cssProp, '');
        return;
      }

      // 鏍囪闇€瑕佽瀵熺殑HTML灞炴€�
      node.attrNeedWatch = node.attrNeedWatch || [];
      if (node.attrNeedWatch.includes(attrName) == false) {
        node.attrNeedWatch.push(attrName);
      }

      // 鏍稿績鏂规硶
      // 娴忚鍣ㄤ笉鏀寔鐨刟ttr()璇硶杞彉鎴愭敮鎸佺殑璇硶
      var valueVarNormal = funAttrVar2NormalVar(objParseAttr, strHtmlAttr);

      console.log(valueVarNormal);
      // 璁剧疆
      node.style.setProperty(cssProp, valueVarNormal);
    });
  };


  var funAutoInitAndWatching = function () {
    // DOM Insert鑷姩鍒濆鍖�
    if (window.MutationObserver) {
      var observerSelect = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
          var nodeAdded = mutation.addedNodes;
          // 鏂板鍏冪礌
          nodeAdded.forEach(function (eleAdd) {
            funSetAttr(eleAdd);
          });
          // 濡傛灉鏄睘鎬у彂鐢熷彉鍖�
          var attributeName = mutation.attributeName;

          if (mutation.target && mutation.target.attrNeedWatch && mutation.target.attrNeedWatch.includes(attributeName)) {
            funSetAttr(mutation.target);
          }
        });
      });

      observerSelect.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true
      });
    }

    // 濡傛灉娌℃湁寮€鍚嚜鍔ㄥ垵濮嬪寲锛屽垯杩斿洖
    document.querySelectorAll(watchSelector).forEach(function (ele) {
      funSetAttr(ele);
    });
  };

  if (document.readyState != 'loading') {
    funAutoInitAndWatching();
  } else {
    window.addEventListener('DOMContentLoaded', funAutoInitAndWatching);
  }
})();
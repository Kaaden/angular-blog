/*global exports */
/*!
 * emoji
 *
 * This file auto create by `bin/create_emoji_js.py`.
 * Emoji\'s table come from <a href="http://code.iamcal.com/php/emoji/">http://code.iamcal.com/php/emoji/</a>
 *
 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

; (function (name, definition) {
  // Come from eventproxy: https://github.com/JacksonTian/eventproxy/blob/master/lib/eventproxy.js#L7

  // this is considered "safe":
  var hasDefine = typeof define === 'function';
  var hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    // AMD Module or CMD Module
    define(definition);
  } else if (hasExports) {
    // Node.js Module
    module.exports = definition();
  } else {
    // Assign to common namespaces or simply the global object (window)
    this[name] = definition();
  }
})('jEmoji', function () {

  var jEmoji = {
    EMOJI_RE: function () {
      return EMOJI_RE
        || (EMOJI_RE = _createRegexp(EMOJI_MAP));
    },
    EMOJI_DOCOMO_RE: function () {
      return EMOJI_DOCOMO_RE
        || (EMOJI_DOCOMO_RE = _createRegexp(EMOJI_DOCOMO_MAP));
    },
    EMOJI_KDDI_RE: function () {
      return EMOJI_KDDI_RE
        || (EMOJI_KDDI_RE = _createRegexp(EMOJI_KDDI_MAP));
    },
    EMOJI_SOFTBANK_RE: function () {
      return EMOJI_SOFTBANK_RE
        || (EMOJI_SOFTBANK_RE = _createRegexp(EMOJI_SOFTBANK_MAP));
    },
    EMOJI_GOOGLE_RE: function () {
      return EMOJI_GOOGLE_RE
        || (EMOJI_GOOGLE_RE = _createRegexp(EMOJI_GOOGLE_MAP));
    }
  };

  /**
   * Emoji code map.
   *
   * format:
   *   Unified: [unified_unicode, title, classname, DoCoMo, KDDI, Softbank, Google]'
   *
   * @type {Object}
   */
  var EMOJI_MAP = jEmoji.EMOJI_MAP = {
    // missing
    "😠": ["U+1F620", "angry face", "1f620", ["", "U+E6F1"], ["", "U+E472"], ["", "U+E059"], ["󾌠", "U+FE320"]],
    "😩": ["U+1F629", "weary face", "1f629", ["", "U+E6F3"], ["", "U+EB67"], ["", "U+E403"], ["󾌡", "U+FE321"]],
    "😲": ["U+1F632", "astonished face", "1f632", ["", "U+E6F4"], ["", "U+EACA"], ["", "U+E410"], ["󾌢", "U+FE322"]],
    "😞": ["U+1F61E", "disappointed face", "1f61e", ["", "U+E6F2"], ["", "U+EAC0"], ["", "U+E058"], ["󾌣", "U+FE323"]],
    "😵": ["U+1F635", "dizzy face", "1f635", ["", "U+E6F4"], ["", "U+E5AE"], ["", "U+E406"], ["󾌤", "U+FE324"]],
    "😰": ["U+1F630", "face with open mouth and cold sweat", "1f630", ["", "U+E723"], ["", "U+EACB"], ["", "U+E40F"], ["󾌥", "U+FE325"]],
    "😒": ["U+1F612", "unamused face", "1f612", ["", "U+E725"], ["", "U+EAC9"], ["", "U+E40E"], ["󾌦", "U+FE326"]],
    "😍": ["U+1F60D", "smiling face with heart-shaped eyes", "1f60d", ["", "U+E726"], ["", "U+E5C4"], ["", "U+E106"], ["󾌧", "U+FE327"]],
    "😤": ["U+1F624", "face with look of triumph", "1f624", ["", "U+E753"], ["", "U+EAC1"], ["", "U+E404"], ["󾌨", "U+FE328"]],
    "😜": ["U+1F61C", "face with stuck-out tongue and winking eye", "1f61c", ["", "U+E728"], ["", "U+E4E7"], ["", "U+E105"], ["󾌩", "U+FE329"]],
    "😝": ["U+1F61D", "face with stuck-out tongue and tightly-closed eyes", "1f61d", ["", "U+E728"], ["", "U+E4E7"], ["", "U+E409"], ["󾌪", "U+FE32A"]],
    "😋": ["U+1F60B", "face savouring delicious food", "1f60b", ["", "U+E752"], ["", "U+EACD"], ["", "U+E056"], ["󾌫", "U+FE32B"]],
    "😘": ["U+1F618", "face throwing a kiss", "1f618", ["", "U+E726"], ["", "U+EACF"], ["", "U+E418"], ["󾌬", "U+FE32C"]],
    "😚": ["U+1F61A", "kissing face with closed eyes", "1f61a", ["", "U+E726"], ["", "U+EACE"], ["", "U+E417"], ["󾌭", "U+FE32D"]],
    "😷": ["U+1F637", "face with medical mask", "1f637", ["-", "-"], ["", "U+EAC7"], ["", "U+E40C"], ["󾌮", "U+FE32E"]],
    "😳": ["U+1F633", "flushed face", "1f633", ["", "U+E72A"], ["", "U+EAC8"], ["", "U+E40D"], ["󾌯", "U+FE32F"]],
    "😃": ["U+1F603", "smiling face with open mouth", "1f603", ["", "U+E6F0"], ["", "U+E471"], ["", "U+E057"], ["󾌰", "U+FE330"]],
    "😅": ["U+1F605", "smiling face with open mouth and cold sweat", "1f605", ["", "U+E722"], ["", "U+E471 U+E5B1"], ["", "U+E415 U+E331"], ["󾌱", "U+FE331"]],
    "😆": ["U+1F606", "smiling face with open mouth and tightly-closed eyes", "1f606", ["", "U+E72A"], ["", "U+EAC5"], ["", "U+E40A"], ["󾌲", "U+FE332"]],
    "😁": ["U+1F601", "grinning face with smiling eyes", "1f601", ["", "U+E753"], ["", "U+EB80"], ["", "U+E404"], ["󾌳", "U+FE333"]],
    "😂": ["U+1F602", "face with tears of joy", "1f602", ["", "U+E72A"], ["", "U+EB64"], ["", "U+E412"], ["󾌴", "U+FE334"]],
    "😊": ["U+1F60A", "smiling face with smiling eyes", "1f60a", ["", "U+E6F0"], ["", "U+EACD"], ["", "U+E056"], ["󾌵", "U+FE335"]],
    "☺": ["U+263A", "white smiling face", "263a", ["", "U+E6F0"], ["", "U+E4FB"], ["", "U+E414"], ["󾌶", "U+FE336"]],
    "😄": ["U+1F604", "smiling face with open mouth and smiling eyes", "1f604", ["", "U+E6F0"], ["", "U+E471"], ["", "U+E415"], ["󾌸", "U+FE338"]],
    "😢": ["U+1F622", "crying face", "1f622", ["", "U+E72E"], ["", "U+EB69"], ["", "U+E413"], ["󾌹", "U+FE339"]],
    "😭": ["U+1F62D", "loudly crying face", "1f62d", ["", "U+E72D"], ["", "U+E473"], ["", "U+E411"], ["󾌺", "U+FE33A"]],
    "😨": ["U+1F628", "fearful face", "1f628", ["", "U+E757"], ["", "U+EAC6"], ["", "U+E40B"], ["󾌻", "U+FE33B"]],
    "😣": ["U+1F623", "persevering face", "1f623", ["", "U+E72B"], ["", "U+EAC2"], ["", "U+E406"], ["󾌼", "U+FE33C"]],
    "😡": ["U+1F621", "pouting face", "1f621", ["", "U+E724"], ["", "U+EB5D"], ["", "U+E416"], ["󾌽", "U+FE33D"]],
    "😌": ["U+1F60C", "relieved face", "1f60c", ["", "U+E721"], ["", "U+EAC5"], ["", "U+E40A"], ["󾌾", "U+FE33E"]],
    "😖": ["U+1F616", "confounded face", "1f616", ["", "U+E6F3"], ["", "U+EAC3"], ["", "U+E407"], ["󾌿", "U+FE33F"]],
    "😔": ["U+1F614", "pensive face", "1f614", ["", "U+E720"], ["", "U+EAC0"], ["", "U+E403"], ["󾍀", "U+FE340"]],
    "😱": ["U+1F631", "face screaming in fear", "1f631", ["", "U+E757"], ["", "U+E5C5"], ["", "U+E107"], ["󾍁", "U+FE341"]],
    "😪": ["U+1F62A", "sleepy face", "1f62a", ["", "U+E701"], ["", "U+EAC4"], ["", "U+E408"], ["󾍂", "U+FE342"]],
    "😏": ["U+1F60F", "smirking face", "1f60f", ["", "U+E72C"], ["", "U+EABF"], ["", "U+E402"], ["󾍃", "U+FE343"]],
    "😓": ["U+1F613", "face with cold sweat", "1f613", ["", "U+E723"], ["", "U+E5C6"], ["", "U+E108"], ["󾍄", "U+FE344"]],
    "😥": ["U+1F625", "disappointed but relieved face", "1f625", ["", "U+E723"], ["", "U+E5C6"], ["", "U+E401"], ["󾍅", "U+FE345"]],
    "😫": ["U+1F62B", "tired face", "1f62b", ["", "U+E72B"], ["", "U+E474"], ["", "U+E406"], ["󾍆", "U+FE346"]],
    "😉": ["U+1F609", "winking face", "1f609", ["", "U+E729"], ["", "U+E5C3"], ["", "U+E405"], ["󾍇", "U+FE347"]],

    "😎": ["U+1F60E", "smiling face with sunglasses", "1f60e", ["", "U+E726"], ["", "U+E5C4"], ["", "U+E106"], ["󾌧", "U+FE327"]],

    "😇": ["U+1F607", "smiling face with halo", "1f607", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
    "😈": ["U+1F608", "smiling face with horns", "1f608", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],
    "😐": ["U+1F610", "neutral face", "1f610", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],

    "😥": ["U+1F625", "disappointed but relieved face", "1f625", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],

    "😶": ["U+1F636", "face without mouth", "1f636", ["-", "-"], ["-", "-"], ["-", "-"], ["-", "-"]],

    // table.html  "☀": ["U+2600", "black sun with rays", "2600", ["", "U+E63E"], ["", "U+E488"], ["", "U+E04A"], ["󾀀", "U+FE000"]],
    "☁": ["U+2601", "cloud", "2601", ["", "U+E63F"], ["", "U+E48D"], ["", "U+E049"], ["󾀁", "U+FE001"]],
    "☔": ["U+2614", "umbrella with rain drops", "2614", ["", "U+E640"], ["", "U+E48C"], ["", "U+E04B"], ["󾀂", "U+FE002"]],
    "⛄": ["U+26C4", "snowman without snow", "26c4", ["", "U+E641"], ["", "U+E485"], ["", "U+E048"], ["󾀃", "U+FE003"]],
    "⚡": ["U+26A1", "high voltage sign", "26a1", ["", "U+E642"], ["", "U+E487"], ["", "U+E13D"], ["󾀄", "U+FE004"]],
    "🌀": ["U+1F300", "cyclone", "1f300", ["", "U+E643"], ["", "U+E469"], ["", "U+E443"], ["󾀅", "U+FE005"]],
    "🌁": ["U+1F301", "foggy", "1f301", ["", "U+E644"], ["", "U+E598"], ["-", "-"], ["󾀆", "U+FE006"]],
    "🌂": ["U+1F302", "closed umbrella", "1f302", ["", "U+E645"], ["", "U+EAE8"], ["", "U+E43C"], ["󾀇", "U+FE007"]],
    "🌃": ["U+1F303", "night with stars", "1f303", ["", "U+E6B3"], ["", "U+EAF1"], ["", "U+E44B"], ["󾀈", "U+FE008"]],
    "🌄": ["U+1F304", "sunrise over mountains", "1f304", ["", "U+E63E"], ["", "U+EAF4"], ["", "U+E04D"], ["󾀉", "U+FE009"]],
    "🌅": ["U+1F305", "sunrise", "1f305", ["", "U+E63E"], ["", "U+EAF4"], ["", "U+E449"], ["󾀊", "U+FE00A"]],
    "🌆": ["U+1F306", "cityscape at dusk", "1f306", ["-", "-"], ["", "U+E5DA"], ["", "U+E146"], ["󾀋", "U+FE00B"]],
    "🌇": ["U+1F307", "sunset over buildings", "1f307", ["", "U+E63E"], ["", "U+E5DA"], ["", "U+E44A"], ["󾀌", "U+FE00C"]],
    "🌈": ["U+1F308", "rainbow", "1f308", ["-", "-"], ["", "U+EAF2"], ["", "U+E44C"], ["󾀍", "U+FE00D"]],
    "❄": ["U+2744", "snowflake", "2744", ["-", "-"], ["", "U+E48A"], ["-", "-"], ["󾀎", "U+FE00E"]],
    "⛅": ["U+26C5", "sun behind cloud", "26c5", ["", "U+E63E U+E63F"], ["", "U+E48E"], ["", "U+E04A U+E049"], ["󾀏", "U+FE00F"]],
    "🌉": ["U+1F309", "bridge at night", "1f309", ["", "U+E6B3"], ["", "U+E4BF"], ["", "U+E44B"], ["󾀐", "U+FE010"]],
    "🌊": ["U+1F30A", "water wave", "1f30a", ["", "U+E73F"], ["", "U+EB7C"], ["", "U+E43E"], ["󾀸", "U+FE038"]],
    "🌋": ["U+1F30B", "volcano", "1f30b", ["-", "-"], ["", "U+EB53"], ["-", "-"], ["󾀺", "U+FE03A"]],
    "🌌": ["U+1F30C", "milky way", "1f30c", ["", "U+E6B3"], ["", "U+EB5F"], ["", "U+E44B"], ["󾀻", "U+FE03B"]],
    "🌏": ["U+1F30F", "earth globe asia-australia", "1f30f", ["-", "-"], ["", "U+E5B3"], ["-", "-"], ["󾀹", "U+FE039"]],
    "🌑": ["U+1F311", "new moon symbol", "1f311", ["", "U+E69C"], ["", "U+E5A8"], ["-", "-"], ["󾀑", "U+FE011"]],
    "🌔": ["U+1F314", "waxing gibbous moon symbol", "1f314", ["", "U+E69D"], ["", "U+E5A9"], ["", "U+E04C"], ["󾀒", "U+FE012"]],
    "🌓": ["U+1F313", "first quarter moon symbol", "1f313", ["", "U+E69E"], ["", "U+E5AA"], ["", "U+E04C"], ["󾀓", "U+FE013"]],
    "🌙": ["U+1F319", "crescent moon", "1f319", ["", "U+E69F"], ["", "U+E486"], ["", "U+E04C"], ["󾀔", "U+FE014"]],
    "🌕": ["U+1F315", "full moon symbol", "1f315", ["", "U+E6A0"], ["-", "-"], ["-", "-"], ["󾀕", "U+FE015"]],
    "🌛": ["U+1F31B", "first quarter moon with face", "1f31b", ["", "U+E69E"], ["", "U+E489"], ["", "U+E04C"], ["󾀖", "U+FE016"]],
    "🌟": ["U+1F31F", "glowing star", "1f31f", ["-", "-"], ["", "U+E48B"], ["", "U+E335"], ["󾭩", "U+FEB69"]],
    "🌠": ["U+1F320", "shooting star", "1f320", ["-", "-"], ["", "U+E468"], ["-", "-"], ["󾭪", "U+FEB6A"]],
    "🕐": ["U+1F550", "clock face one oclock", "1f550", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E024"], ["󾀞", "U+FE01E"]],
    "🕑": ["U+1F551", "clock face two oclock", "1f551", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E025"], ["󾀟", "U+FE01F"]],
    "🕒": ["U+1F552", "clock face three oclock", "1f552", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E026"], ["󾀠", "U+FE020"]],
    "🕓": ["U+1F553", "clock face four oclock", "1f553", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E027"], ["󾀡", "U+FE021"]],
    "🕔": ["U+1F554", "clock face five oclock", "1f554", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E028"], ["󾀢", "U+FE022"]],
    "🕕": ["U+1F555", "clock face six oclock", "1f555", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E029"], ["󾀣", "U+FE023"]],
    "🕖": ["U+1F556", "clock face seven oclock", "1f556", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02A"], ["󾀤", "U+FE024"]],
    "🕗": ["U+1F557", "clock face eight oclock", "1f557", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02B"], ["󾀥", "U+FE025"]],
    "🕘": ["U+1F558", "clock face nine oclock", "1f558", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02C"], ["󾀦", "U+FE026"]],
    "🕙": ["U+1F559", "clock face ten oclock", "1f559", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02D"], ["󾀧", "U+FE027"]],
    "🕚": ["U+1F55A", "clock face eleven oclock", "1f55a", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02E"], ["󾀨", "U+FE028"]],
    "🕛": ["U+1F55B", "clock face twelve oclock", "1f55b", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02F"], ["󾀩", "U+FE029"]],
    "⌚": ["U+231A", "watch", "231a", ["", "U+E71F"], ["", "U+E57A"], ["-", "-"], ["󾀝", "U+FE01D"]],
    "⌛": ["U+231B", "hourglass", "231b", ["", "U+E71C"], ["", "U+E57B"], ["-", "-"], ["󾀜", "U+FE01C"]],
    "⏰": ["U+23F0", "alarm clock", "23f0", ["", "U+E6BA"], ["", "U+E594"], ["", "U+E02D"], ["󾀪", "U+FE02A"]],
    "⏳": ["U+23F3", "hourglass with flowing sand", "23f3", ["", "U+E71C"], ["", "U+E47C"], ["-", "-"], ["󾀛", "U+FE01B"]],
    "♈": ["U+2648", "aries", "2648", ["", "U+E646"], ["", "U+E48F"], ["", "U+E23F"], ["󾀫", "U+FE02B"]],
    "♉": ["U+2649", "taurus", "2649", ["", "U+E647"], ["", "U+E490"], ["", "U+E240"], ["󾀬", "U+FE02C"]],
    "♊": ["U+264A", "gemini", "264a", ["", "U+E648"], ["", "U+E491"], ["", "U+E241"], ["󾀭", "U+FE02D"]],
    "♋": ["U+264B", "cancer", "264b", ["", "U+E649"], ["", "U+E492"], ["", "U+E242"], ["󾀮", "U+FE02E"]],
    "♌": ["U+264C", "leo", "264c", ["", "U+E64A"], ["", "U+E493"], ["", "U+E243"], ["󾀯", "U+FE02F"]],
    "♍": ["U+264D", "virgo", "264d", ["", "U+E64B"], ["", "U+E494"], ["", "U+E244"], ["󾀰", "U+FE030"]],
    "♎": ["U+264E", "libra", "264e", ["", "U+E64C"], ["", "U+E495"], ["", "U+E245"], ["󾀱", "U+FE031"]],
    "♏": ["U+264F", "scorpius", "264f", ["", "U+E64D"], ["", "U+E496"], ["", "U+E246"], ["󾀲", "U+FE032"]],
    "♐": ["U+2650", "sagittarius", "2650", ["", "U+E64E"], ["", "U+E497"], ["", "U+E247"], ["󾀳", "U+FE033"]],
    "♑": ["U+2651", "capricorn", "2651", ["", "U+E64F"], ["", "U+E498"], ["", "U+E248"], ["󾀴", "U+FE034"]],
    "♒": ["U+2652", "aquarius", "2652", ["", "U+E650"], ["", "U+E499"], ["", "U+E249"], ["󾀵", "U+FE035"]],
    "♓": ["U+2653", "pisces", "2653", ["", "U+E651"], ["", "U+E49A"], ["", "U+E24A"], ["󾀶", "U+FE036"]],
    "⛎": ["U+26CE", "ophiuchus", "26ce", ["-", "-"], ["", "U+E49B"], ["", "U+E24B"], ["󾀷", "U+FE037"]],
    "🍀": ["U+1F340", "four leaf clover", "1f340", ["", "U+E741"], ["", "U+E513"], ["", "U+E110"], ["󾀼", "U+FE03C"]],
    "🌷": ["U+1F337", "tulip", "1f337", ["", "U+E743"], ["", "U+E4E4"], ["", "U+E304"], ["󾀽", "U+FE03D"]],
    "🌱": ["U+1F331", "seedling", "1f331", ["", "U+E746"], ["", "U+EB7D"], ["", "U+E110"], ["󾀾", "U+FE03E"]],
    "🍁": ["U+1F341", "maple leaf", "1f341", ["", "U+E747"], ["", "U+E4CE"], ["", "U+E118"], ["󾀿", "U+FE03F"]],
    "🌸": ["U+1F338", "cherry blossom", "1f338", ["", "U+E748"], ["", "U+E4CA"], ["", "U+E030"], ["󾁀", "U+FE040"]],
    "🌹": ["U+1F339", "rose", "1f339", ["-", "-"], ["", "U+E5BA"], ["", "U+E032"], ["󾁁", "U+FE041"]],
    "🍂": ["U+1F342", "fallen leaf", "1f342", ["", "U+E747"], ["", "U+E5CD"], ["", "U+E119"], ["󾁂", "U+FE042"]],
    "🍃": ["U+1F343", "leaf fluttering in wind", "1f343", ["-", "-"], ["", "U+E5CD"], ["", "U+E447"], ["󾁃", "U+FE043"]],
    "🌺": ["U+1F33A", "hibiscus", "1f33a", ["-", "-"], ["", "U+EA94"], ["", "U+E303"], ["󾁅", "U+FE045"]],
    "🌻": ["U+1F33B", "sunflower", "1f33b", ["-", "-"], ["", "U+E4E3"], ["", "U+E305"], ["󾁆", "U+FE046"]],
    "🌴": ["U+1F334", "palm tree", "1f334", ["-", "-"], ["", "U+E4E2"], ["", "U+E307"], ["󾁇", "U+FE047"]],
    "🌵": ["U+1F335", "cactus", "1f335", ["-", "-"], ["", "U+EA96"], ["", "U+E308"], ["󾁈", "U+FE048"]],
    "🌾": ["U+1F33E", "ear of rice", "1f33e", ["-", "-"], ["-", "-"], ["", "U+E444"], ["󾁉", "U+FE049"]],
    "🌽": ["U+1F33D", "ear of maize", "1f33d", ["-", "-"], ["", "U+EB36"], ["-", "-"], ["󾁊", "U+FE04A"]],
    "🍄": ["U+1F344", "mushroom", "1f344", ["-", "-"], ["", "U+EB37"], ["-", "-"], ["󾁋", "U+FE04B"]],
    "🌰": ["U+1F330", "chestnut", "1f330", ["-", "-"], ["", "U+EB38"], ["-", "-"], ["󾁌", "U+FE04C"]],
    "🌼": ["U+1F33C", "blossom", "1f33c", ["-", "-"], ["", "U+EB49"], ["", "U+E305"], ["󾁍", "U+FE04D"]],
    "🌿": ["U+1F33F", "herb", "1f33f", ["", "U+E741"], ["", "U+EB82"], ["", "U+E110"], ["󾁎", "U+FE04E"]],
    "🍒": ["U+1F352", "cherries", "1f352", ["", "U+E742"], ["", "U+E4D2"], ["-", "-"], ["󾁏", "U+FE04F"]],
    "🍌": ["U+1F34C", "banana", "1f34c", ["", "U+E744"], ["", "U+EB35"], ["-", "-"], ["󾁐", "U+FE050"]],
    "🍎": ["U+1F34E", "red apple", "1f34e", ["", "U+E745"], ["", "U+EAB9"], ["", "U+E345"], ["󾁑", "U+FE051"]],
    "🍊": ["U+1F34A", "tangerine", "1f34a", ["-", "-"], ["", "U+EABA"], ["", "U+E346"], ["󾁒", "U+FE052"]],
    "🍓": ["U+1F353", "strawberry", "1f353", ["-", "-"], ["", "U+E4D4"], ["", "U+E347"], ["󾁓", "U+FE053"]],
    "🍉": ["U+1F349", "watermelon", "1f349", ["-", "-"], ["", "U+E4CD"], ["", "U+E348"], ["󾁔", "U+FE054"]],
    "🍅": ["U+1F345", "tomato", "1f345", ["-", "-"], ["", "U+EABB"], ["", "U+E349"], ["󾁕", "U+FE055"]],
    "🍆": ["U+1F346", "aubergine", "1f346", ["-", "-"], ["", "U+EABC"], ["", "U+E34A"], ["󾁖", "U+FE056"]],
    "🍈": ["U+1F348", "melon", "1f348", ["-", "-"], ["", "U+EB32"], ["-", "-"], ["󾁗", "U+FE057"]],
    "🍍": ["U+1F34D", "pineapple", "1f34d", ["-", "-"], ["", "U+EB33"], ["-", "-"], ["󾁘", "U+FE058"]],
    "🍇": ["U+1F347", "grapes", "1f347", ["-", "-"], ["", "U+EB34"], ["-", "-"], ["󾁙", "U+FE059"]],
    "🍑": ["U+1F351", "peach", "1f351", ["-", "-"], ["", "U+EB39"], ["-", "-"], ["󾁚", "U+FE05A"]],
    "🍏": ["U+1F34F", "green apple", "1f34f", ["", "U+E745"], ["", "U+EB5A"], ["", "U+E345"], ["󾁛", "U+FE05B"]],
    "👀": ["U+1F440", "eyes", "1f440", ["", "U+E691"], ["", "U+E5A4"], ["", "U+E419"], ["󾆐", "U+FE190"]],
    "👂": ["U+1F442", "ear", "1f442", ["", "U+E692"], ["", "U+E5A5"], ["", "U+E41B"], ["󾆑", "U+FE191"]],
    "👃": ["U+1F443", "nose", "1f443", ["-", "-"], ["", "U+EAD0"], ["", "U+E41A"], ["󾆒", "U+FE192"]],
    "👄": ["U+1F444", "mouth", "1f444", ["", "U+E6F9"], ["", "U+EAD1"], ["", "U+E41C"], ["󾆓", "U+FE193"]],
    "👅": ["U+1F445", "tongue", "1f445", ["", "U+E728"], ["", "U+EB47"], ["", "U+E409"], ["󾆔", "U+FE194"]],
    "💄": ["U+1F484", "lipstick", "1f484", ["", "U+E710"], ["", "U+E509"], ["", "U+E31C"], ["󾆕", "U+FE195"]],
    "💅": ["U+1F485", "nail polish", "1f485", ["-", "-"], ["", "U+EAA0"], ["", "U+E31D"], ["󾆖", "U+FE196"]],
    "💆": ["U+1F486", "face massage", "1f486", ["-", "-"], ["", "U+E50B"], ["", "U+E31E"], ["󾆗", "U+FE197"]],
    "💇": ["U+1F487", "haircut", "1f487", ["", "U+E675"], ["", "U+EAA1"], ["", "U+E31F"], ["󾆘", "U+FE198"]],
    "💈": ["U+1F488", "barber pole", "1f488", ["-", "-"], ["", "U+EAA2"], ["", "U+E320"], ["󾆙", "U+FE199"]],
    "👤": ["U+1F464", "bust in silhouette", "1f464", ["", "U+E6B1"], ["-", "-"], ["-", "-"], ["󾆚", "U+FE19A"]],
    "👦": ["U+1F466", "boy", "1f466", ["", "U+E6F0"], ["", "U+E4FC"], ["", "U+E001"], ["󾆛", "U+FE19B"]],
    "👧": ["U+1F467", "girl", "1f467", ["", "U+E6F0"], ["", "U+E4FA"], ["", "U+E002"], ["󾆜", "U+FE19C"]],
    "👨": ["U+1F468", "man", "1f468", ["", "U+E6F0"], ["", "U+E4FC"], ["", "U+E004"], ["󾆝", "U+FE19D"]],
    "👩": ["U+1F469", "woman", "1f469", ["", "U+E6F0"], ["", "U+E4FA"], ["", "U+E005"], ["󾆞", "U+FE19E"]],
    "👪": ["U+1F46A", "family", "1f46a", ["-", "-"], ["", "U+E501"], ["-", "-"], ["󾆟", "U+FE19F"]],
    "👫": ["U+1F46B", "man and woman holding hands", "1f46b", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
    "👮": ["U+1F46E", "police officer", "1f46e", ["-", "-"], ["", "U+E5DD"], ["", "U+E152"], ["󾆡", "U+FE1A1"]],
    "👯": ["U+1F46F", "woman with bunny ears", "1f46f", ["-", "-"], ["", "U+EADB"], ["", "U+E429"], ["󾆢", "U+FE1A2"]],
    "👰": ["U+1F470", "bride with veil", "1f470", ["-", "-"], ["", "U+EAE9"], ["-", "-"], ["󾆣", "U+FE1A3"]],
    "👱": ["U+1F471", "person with blond hair", "1f471", ["-", "-"], ["", "U+EB13"], ["", "U+E515"], ["󾆤", "U+FE1A4"]],
    "👲": ["U+1F472", "man with gua pi mao", "1f472", ["-", "-"], ["", "U+EB14"], ["", "U+E516"], ["󾆥", "U+FE1A5"]],
    "👳": ["U+1F473", "man with turban", "1f473", ["-", "-"], ["", "U+EB15"], ["", "U+E517"], ["󾆦", "U+FE1A6"]],
    "👴": ["U+1F474", "older man", "1f474", ["-", "-"], ["", "U+EB16"], ["", "U+E518"], ["󾆧", "U+FE1A7"]],
    "👵": ["U+1F475", "older woman", "1f475", ["-", "-"], ["", "U+EB17"], ["", "U+E519"], ["󾆨", "U+FE1A8"]],
    "👶": ["U+1F476", "baby", "1f476", ["-", "-"], ["", "U+EB18"], ["", "U+E51A"], ["󾆩", "U+FE1A9"]],
    "👷": ["U+1F477", "construction worker", "1f477", ["-", "-"], ["", "U+EB19"], ["", "U+E51B"], ["󾆪", "U+FE1AA"]],
    "👸": ["U+1F478", "princess", "1f478", ["-", "-"], ["", "U+EB1A"], ["", "U+E51C"], ["󾆫", "U+FE1AB"]],
    "👹": ["U+1F479", "japanese ogre", "1f479", ["-", "-"], ["", "U+EB44"], ["-", "-"], ["󾆬", "U+FE1AC"]],
    "👺": ["U+1F47A", "japanese goblin", "1f47a", ["-", "-"], ["", "U+EB45"], ["-", "-"], ["󾆭", "U+FE1AD"]],
    "👻": ["U+1F47B", "ghost", "1f47b", ["-", "-"], ["", "U+E4CB"], ["", "U+E11B"], ["󾆮", "U+FE1AE"]],
    "👼": ["U+1F47C", "baby angel", "1f47c", ["-", "-"], ["", "U+E5BF"], ["", "U+E04E"], ["󾆯", "U+FE1AF"]],
    "👽": ["U+1F47D", "extraterrestrial alien", "1f47d", ["-", "-"], ["", "U+E50E"], ["", "U+E10C"], ["󾆰", "U+FE1B0"]],
    "👾": ["U+1F47E", "alien monster", "1f47e", ["-", "-"], ["", "U+E4EC"], ["", "U+E12B"], ["󾆱", "U+FE1B1"]],
    "👿": ["U+1F47F", "imp", "1f47f", ["-", "-"], ["", "U+E4EF"], ["", "U+E11A"], ["󾆲", "U+FE1B2"]],
    "💀": ["U+1F480", "skull", "1f480", ["-", "-"], ["", "U+E4F8"], ["", "U+E11C"], ["󾆳", "U+FE1B3"]],
    "💁": ["U+1F481", "information desk person", "1f481", ["-", "-"], ["-", "-"], ["", "U+E253"], ["󾆴", "U+FE1B4"]],
    "💂": ["U+1F482", "guardsman", "1f482", ["-", "-"], ["-", "-"], ["", "U+E51E"], ["󾆵", "U+FE1B5"]],
    "💃": ["U+1F483", "dancer", "1f483", ["-", "-"], ["", "U+EB1C"], ["", "U+E51F"], ["󾆶", "U+FE1B6"]],
    "🐌": ["U+1F40C", "snail", "1f40c", ["", "U+E74E"], ["", "U+EB7E"], ["-", "-"], ["󾆹", "U+FE1B9"]],
    "🐍": ["U+1F40D", "snake", "1f40d", ["-", "-"], ["", "U+EB22"], ["", "U+E52D"], ["󾇓", "U+FE1D3"]],
    "🐎": ["U+1F40E", "horse", "1f40e", ["", "U+E754"], ["", "U+E4D8"], ["", "U+E134"], ["󾟜", "U+FE7DC"]],

    "🐔": ["U+1F414", "chicken", "1f414", ["-", "-"], ["", "U+EB23"], ["", "U+E52E"], ["󾇔", "U+FE1D4"]],
    "🐗": ["U+1F417", "boar", "1f417", ["-", "-"], ["", "U+EB24"], ["", "U+E52F"], ["󾇕", "U+FE1D5"]],
    "🐫": ["U+1F42B", "bactrian camel", "1f42b", ["-", "-"], ["", "U+EB25"], ["", "U+E530"], ["󾇖", "U+FE1D6"]],
    "🐘": ["U+1F418", "elephant", "1f418", ["-", "-"], ["", "U+EB1F"], ["", "U+E526"], ["󾇌", "U+FE1CC"]],
    "🐨": ["U+1F428", "koala", "1f428", ["-", "-"], ["", "U+EB20"], ["", "U+E527"], ["󾇍", "U+FE1CD"]],
    "🐒": ["U+1F412", "monkey", "1f412", ["-", "-"], ["", "U+E4D9"], ["", "U+E528"], ["󾇎", "U+FE1CE"]],
    "🐑": ["U+1F411", "sheep", "1f411", ["-", "-"], ["", "U+E48F"], ["", "U+E529"], ["󾇏", "U+FE1CF"]],
    "🐙": ["U+1F419", "octopus", "1f419", ["-", "-"], ["", "U+E5C7"], ["", "U+E10A"], ["󾇅", "U+FE1C5"]],
    "🐚": ["U+1F41A", "spiral shell", "1f41a", ["-", "-"], ["", "U+EAEC"], ["", "U+E441"], ["󾇆", "U+FE1C6"]],
    "🐛": ["U+1F41B", "bug", "1f41b", ["-", "-"], ["", "U+EB1E"], ["", "U+E525"], ["󾇋", "U+FE1CB"]],
    "🐜": ["U+1F41C", "ant", "1f41c", ["-", "-"], ["", "U+E4DD"], ["-", "-"], ["󾇚", "U+FE1DA"]],
    "🐝": ["U+1F41D", "honeybee", "1f41d", ["-", "-"], ["", "U+EB57"], ["-", "-"], ["󾇡", "U+FE1E1"]],
    "🐞": ["U+1F41E", "lady beetle", "1f41e", ["-", "-"], ["", "U+EB58"], ["-", "-"], ["󾇢", "U+FE1E2"]],
    "🐠": ["U+1F420", "tropical fish", "1f420", ["", "U+E751"], ["", "U+EB1D"], ["", "U+E522"], ["󾇉", "U+FE1C9"]],
    "🐡": ["U+1F421", "blowfish", "1f421", ["", "U+E751"], ["", "U+E4D3"], ["", "U+E019"], ["󾇙", "U+FE1D9"]],
    "🐢": ["U+1F422", "turtle", "1f422", ["-", "-"], ["", "U+E5D4"], ["-", "-"], ["󾇜", "U+FE1DC"]],
    "🐤": ["U+1F424", "baby chick", "1f424", ["", "U+E74F"], ["", "U+E4E0"], ["", "U+E523"], ["󾆺", "U+FE1BA"]],
    "🐥": ["U+1F425", "front-facing baby chick", "1f425", ["", "U+E74F"], ["", "U+EB76"], ["", "U+E523"], ["󾆻", "U+FE1BB"]],
    "🐦": ["U+1F426", "bird", "1f426", ["", "U+E74F"], ["", "U+E4E0"], ["", "U+E521"], ["󾇈", "U+FE1C8"]],
    "🐣": ["U+1F423", "hatching chick", "1f423", ["", "U+E74F"], ["", "U+E5DB"], ["", "U+E523"], ["󾇝", "U+FE1DD"]],
    "🐧": ["U+1F427", "penguin", "1f427", ["", "U+E750"], ["", "U+E4DC"], ["", "U+E055"], ["󾆼", "U+FE1BC"]],
    "🐩": ["U+1F429", "poodle", "1f429", ["", "U+E6A1"], ["", "U+E4DF"], ["", "U+E052"], ["󾇘", "U+FE1D8"]],
    "🐟": ["U+1F41F", "fish", "1f41f", ["", "U+E751"], ["", "U+E49A"], ["", "U+E019"], ["󾆽", "U+FE1BD"]],
    "🐬": ["U+1F42C", "dolphin", "1f42c", ["-", "-"], ["", "U+EB1B"], ["", "U+E520"], ["󾇇", "U+FE1C7"]],
    "🐭": ["U+1F42D", "mouse face", "1f42d", ["-", "-"], ["", "U+E5C2"], ["", "U+E053"], ["󾇂", "U+FE1C2"]],
    "🐯": ["U+1F42F", "tiger face", "1f42f", ["-", "-"], ["", "U+E5C0"], ["", "U+E050"], ["󾇀", "U+FE1C0"]],
    "🐱": ["U+1F431", "cat face", "1f431", ["", "U+E6A2"], ["", "U+E4DB"], ["", "U+E04F"], ["󾆸", "U+FE1B8"]],
    "🐳": ["U+1F433", "spouting whale", "1f433", ["-", "-"], ["", "U+E470"], ["", "U+E054"], ["󾇃", "U+FE1C3"]],
    "🐴": ["U+1F434", "horse face", "1f434", ["", "U+E754"], ["", "U+E4D8"], ["", "U+E01A"], ["󾆾", "U+FE1BE"]],
    "🐵": ["U+1F435", "monkey face", "1f435", ["-", "-"], ["", "U+E4D9"], ["", "U+E109"], ["󾇄", "U+FE1C4"]],
    "🐶": ["U+1F436", "dog face", "1f436", ["", "U+E6A1"], ["", "U+E4E1"], ["", "U+E052"], ["󾆷", "U+FE1B7"]],
    "🐷": ["U+1F437", "pig face", "1f437", ["", "U+E755"], ["", "U+E4DE"], ["", "U+E10B"], ["󾆿", "U+FE1BF"]],
    "🐻": ["U+1F43B", "bear face", "1f43b", ["-", "-"], ["", "U+E5C1"], ["", "U+E051"], ["󾇁", "U+FE1C1"]],
    "🐹": ["U+1F439", "hamster face", "1f439", ["-", "-"], ["-", "-"], ["", "U+E524"], ["󾇊", "U+FE1CA"]],
    "🐺": ["U+1F43A", "wolf face", "1f43a", ["", "U+E6A1"], ["", "U+E4E1"], ["", "U+E52A"], ["󾇐", "U+FE1D0"]],
    "🐮": ["U+1F42E", "cow face", "1f42e", ["-", "-"], ["", "U+EB21"], ["", "U+E52B"], ["󾇑", "U+FE1D1"]],
    "🐰": ["U+1F430", "rabbit face", "1f430", ["-", "-"], ["", "U+E4D7"], ["", "U+E52C"], ["󾇒", "U+FE1D2"]],
    "🐸": ["U+1F438", "frog face", "1f438", ["-", "-"], ["", "U+E4DA"], ["", "U+E531"], ["󾇗", "U+FE1D7"]],
    "🐾": ["U+1F43E", "paw prints", "1f43e", ["", "U+E698"], ["", "U+E4EE"], ["", "U+E536"], ["󾇛", "U+FE1DB"]],
    "🐲": ["U+1F432", "dragon face", "1f432", ["-", "-"], ["", "U+EB3F"], ["-", "-"], ["󾇞", "U+FE1DE"]],
    "🐼": ["U+1F43C", "panda face", "1f43c", ["-", "-"], ["", "U+EB46"], ["-", "-"], ["󾇟", "U+FE1DF"]],
    "🐽": ["U+1F43D", "pig nose", "1f43d", ["", "U+E755"], ["", "U+EB48"], ["", "U+E10B"], ["󾇠", "U+FE1E0"]],

    "😺": ["U+1F63A", "smiling cat face with open mouth", "1f63a", ["", "U+E6F0"], ["", "U+EB61"], ["", "U+E057"], ["󾍈", "U+FE348"]],
    "😸": ["U+1F638", "grinning cat face with smiling eyes", "1f638", ["", "U+E753"], ["", "U+EB7F"], ["", "U+E404"], ["󾍉", "U+FE349"]],
    "😹": ["U+1F639", "cat face with tears of joy", "1f639", ["", "U+E72A"], ["", "U+EB63"], ["", "U+E412"], ["󾍊", "U+FE34A"]],
    "😽": ["U+1F63D", "kissing cat face with closed eyes", "1f63d", ["", "U+E726"], ["", "U+EB60"], ["", "U+E418"], ["󾍋", "U+FE34B"]],
    "😻": ["U+1F63B", "smiling cat face with heart-shaped eyes", "1f63b", ["", "U+E726"], ["", "U+EB65"], ["", "U+E106"], ["󾍌", "U+FE34C"]],
    "😿": ["U+1F63F", "crying cat face", "1f63f", ["", "U+E72E"], ["", "U+EB68"], ["", "U+E413"], ["󾍍", "U+FE34D"]],
    "😾": ["U+1F63E", "pouting cat face", "1f63e", ["", "U+E724"], ["", "U+EB5E"], ["", "U+E416"], ["󾍎", "U+FE34E"]],
    "😼": ["U+1F63C", "cat face with wry smile", "1f63c", ["", "U+E753"], ["", "U+EB6A"], ["", "U+E404"], ["󾍏", "U+FE34F"]],
    "🙀": ["U+1F640", "weary cat face", "1f640", ["", "U+E6F3"], ["", "U+EB66"], ["", "U+E403"], ["󾍐", "U+FE350"]],
    "🙅": ["U+1F645", "face with no good gesture", "1f645", ["", "U+E72F"], ["", "U+EAD7"], ["", "U+E423"], ["󾍑", "U+FE351"]],
    "🙆": ["U+1F646", "face with ok gesture", "1f646", ["", "U+E70B"], ["", "U+EAD8"], ["", "U+E424"], ["󾍒", "U+FE352"]],
    "🙇": ["U+1F647", "person bowing deeply", "1f647", ["-", "-"], ["", "U+EAD9"], ["", "U+E426"], ["󾍓", "U+FE353"]],
    "🙈": ["U+1F648", "see-no-evil monkey", "1f648", ["-", "-"], ["", "U+EB50"], ["-", "-"], ["󾍔", "U+FE354"]],
    "🙊": ["U+1F64A", "speak-no-evil monkey", "1f64a", ["-", "-"], ["", "U+EB51"], ["-", "-"], ["󾍕", "U+FE355"]],
    "🙉": ["U+1F649", "hear-no-evil monkey", "1f649", ["-", "-"], ["", "U+EB52"], ["-", "-"], ["󾍖", "U+FE356"]],
    "🙋": ["U+1F64B", "happy person raising one hand", "1f64b", ["-", "-"], ["", "U+EB85"], ["", "U+E012"], ["󾍗", "U+FE357"]],
    "🙌": ["U+1F64C", "person raising both hands in celebration", "1f64c", ["-", "-"], ["", "U+EB86"], ["", "U+E427"], ["󾍘", "U+FE358"]],
    "🙍": ["U+1F64D", "person frowning", "1f64d", ["", "U+E6F3"], ["", "U+EB87"], ["", "U+E403"], ["󾍙", "U+FE359"]],
    "🙎": ["U+1F64E", "person with pouting face", "1f64e", ["", "U+E6F1"], ["", "U+EB88"], ["", "U+E416"], ["󾍚", "U+FE35A"]],
    "🙏": ["U+1F64F", "person with folded hands", "1f64f", ["-", "-"], ["", "U+EAD2"], ["", "U+E41D"], ["󾍛", "U+FE35B"]],
    "🏠": ["U+1F3E0", "house building", "1f3e0", ["", "U+E663"], ["", "U+E4AB"], ["", "U+E036"], ["󾒰", "U+FE4B0"]],
    "🏡": ["U+1F3E1", "house with garden", "1f3e1", ["", "U+E663"], ["", "U+EB09"], ["", "U+E036"], ["󾒱", "U+FE4B1"]],
    "🏢": ["U+1F3E2", "office building", "1f3e2", ["", "U+E664"], ["", "U+E4AD"], ["", "U+E038"], ["󾒲", "U+FE4B2"]],
    "🏣": ["U+1F3E3", "japanese post office", "1f3e3", ["", "U+E665"], ["", "U+E5DE"], ["", "U+E153"], ["󾒳", "U+FE4B3"]],
    "🏥": ["U+1F3E5", "hospital", "1f3e5", ["", "U+E666"], ["", "U+E5DF"], ["", "U+E155"], ["󾒴", "U+FE4B4"]],
    "🏦": ["U+1F3E6", "bank", "1f3e6", ["", "U+E667"], ["", "U+E4AA"], ["", "U+E14D"], ["󾒵", "U+FE4B5"]],
    "🏧": ["U+1F3E7", "automated teller machine", "1f3e7", ["", "U+E668"], ["", "U+E4A3"], ["", "U+E154"], ["󾒶", "U+FE4B6"]],
    "🏨": ["U+1F3E8", "hotel", "1f3e8", ["", "U+E669"], ["", "U+EA81"], ["", "U+E158"], ["󾒷", "U+FE4B7"]],
    "🏩": ["U+1F3E9", "love hotel", "1f3e9", ["", "U+E669 U+E6EF"], ["", "U+EAF3"], ["", "U+E501"], ["󾒸", "U+FE4B8"]],
    "🏪": ["U+1F3EA", "convenience store", "1f3ea", ["", "U+E66A"], ["", "U+E4A4"], ["", "U+E156"], ["󾒹", "U+FE4B9"]],
    "🏫": ["U+1F3EB", "school", "1f3eb", ["", "U+E73E"], ["", "U+EA80"], ["", "U+E157"], ["󾒺", "U+FE4BA"]],
    "⛪": ["U+26EA", "church", "26ea", ["-", "-"], ["", "U+E5BB"], ["", "U+E037"], ["󾒻", "U+FE4BB"]],
    "⛲": ["U+26F2", "fountain", "26f2", ["-", "-"], ["", "U+E5CF"], ["", "U+E121"], ["󾒼", "U+FE4BC"]],
    "🏬": ["U+1F3EC", "department store", "1f3ec", ["-", "-"], ["", "U+EAF6"], ["", "U+E504"], ["󾒽", "U+FE4BD"]],
    "🏯": ["U+1F3EF", "japanese castle", "1f3ef", ["-", "-"], ["", "U+EAF7"], ["", "U+E505"], ["󾒾", "U+FE4BE"]],
    "🏰": ["U+1F3F0", "european castle", "1f3f0", ["-", "-"], ["", "U+EAF8"], ["", "U+E506"], ["󾒿", "U+FE4BF"]],
    "🏭": ["U+1F3ED", "factory", "1f3ed", ["-", "-"], ["", "U+EAF9"], ["", "U+E508"], ["󾓀", "U+FE4C0"]],
    "⚓": ["U+2693", "anchor", "2693", ["", "U+E661"], ["", "U+E4A9"], ["", "U+E202"], ["󾓁", "U+FE4C1"]],
    "🏮": ["U+1F3EE", "izakaya lantern", "1f3ee", ["", "U+E74B"], ["", "U+E4BD"], ["", "U+E30B"], ["󾓂", "U+FE4C2"]],
    "🗻": ["U+1F5FB", "mount fuji", "1f5fb", ["", "U+E740"], ["", "U+E5BD"], ["", "U+E03B"], ["󾓃", "U+FE4C3"]],
    "🗼": ["U+1F5FC", "tokyo tower", "1f5fc", ["-", "-"], ["", "U+E4C0"], ["", "U+E509"], ["󾓄", "U+FE4C4"]],
    "🗽": ["U+1F5FD", "statue of liberty", "1f5fd", ["-", "-"], ["-", "-"], ["", "U+E51D"], ["󾓆", "U+FE4C6"]],
    "🗾": ["U+1F5FE", "silhouette of japan", "1f5fe", ["-", "-"], ["", "U+E572"], ["-", "-"], ["󾓇", "U+FE4C7"]],
    "🗿": ["U+1F5FF", "moyai", "1f5ff", ["-", "-"], ["", "U+EB6C"], ["-", "-"], ["󾓈", "U+FE4C8"]],
    "👞": ["U+1F45E", "mans shoe", "1f45e", ["", "U+E699"], ["", "U+E5B7"], ["", "U+E007"], ["󾓌", "U+FE4CC"]],
    "👟": ["U+1F45F", "athletic shoe", "1f45f", ["", "U+E699"], ["", "U+EB2B"], ["", "U+E007"], ["󾓍", "U+FE4CD"]],
    "👠": ["U+1F460", "high-heeled shoe", "1f460", ["", "U+E674"], ["", "U+E51A"], ["", "U+E13E"], ["󾓖", "U+FE4D6"]],
    "👡": ["U+1F461", "womans sandal", "1f461", ["", "U+E674"], ["", "U+E51A"], ["", "U+E31A"], ["󾓗", "U+FE4D7"]],
    "👢": ["U+1F462", "womans boots", "1f462", ["-", "-"], ["", "U+EA9F"], ["", "U+E31B"], ["󾓘", "U+FE4D8"]],
    "👣": ["U+1F463", "footprints", "1f463", ["", "U+E698"], ["", "U+EB2A"], ["", "U+E536"], ["󾕓", "U+FE553"]],
    "👓": ["U+1F453", "eyeglasses", "1f453", ["", "U+E69A"], ["", "U+E4FE"], ["-", "-"], ["󾓎", "U+FE4CE"]],
    "👕": ["U+1F455", "t-shirt", "1f455", ["", "U+E70E"], ["", "U+E5B6"], ["", "U+E006"], ["󾓏", "U+FE4CF"]],
    "👖": ["U+1F456", "jeans", "1f456", ["", "U+E711"], ["", "U+EB77"], ["-", "-"], ["󾓐", "U+FE4D0"]],
    "👑": ["U+1F451", "crown", "1f451", ["", "U+E71A"], ["", "U+E5C9"], ["", "U+E10E"], ["󾓑", "U+FE4D1"]],
    "👔": ["U+1F454", "necktie", "1f454", ["-", "-"], ["", "U+EA93"], ["", "U+E302"], ["󾓓", "U+FE4D3"]],
    "👒": ["U+1F452", "womans hat", "1f452", ["-", "-"], ["", "U+EA9E"], ["", "U+E318"], ["󾓔", "U+FE4D4"]],
    "👗": ["U+1F457", "dress", "1f457", ["-", "-"], ["", "U+EB6B"], ["", "U+E319"], ["󾓕", "U+FE4D5"]],
    "👘": ["U+1F458", "kimono", "1f458", ["-", "-"], ["", "U+EAA3"], ["", "U+E321"], ["󾓙", "U+FE4D9"]],
    "👙": ["U+1F459", "bikini", "1f459", ["-", "-"], ["", "U+EAA4"], ["", "U+E322"], ["󾓚", "U+FE4DA"]],
    "👚": ["U+1F45A", "womans clothes", "1f45a", ["", "U+E70E"], ["", "U+E50D"], ["", "U+E006"], ["󾓛", "U+FE4DB"]],
    "👛": ["U+1F45B", "purse", "1f45b", ["", "U+E70F"], ["", "U+E504"], ["-", "-"], ["󾓜", "U+FE4DC"]],
    "👜": ["U+1F45C", "handbag", "1f45c", ["", "U+E682"], ["", "U+E49C"], ["", "U+E323"], ["󾓰", "U+FE4F0"]],
    "👝": ["U+1F45D", "pouch", "1f45d", ["", "U+E6AD"], ["-", "-"], ["-", "-"], ["󾓱", "U+FE4F1"]],
    "💰": ["U+1F4B0", "money bag", "1f4b0", ["", "U+E715"], ["", "U+E4C7"], ["", "U+E12F"], ["󾓝", "U+FE4DD"]],
    "💱": ["U+1F4B1", "currency exchange", "1f4b1", ["-", "-"], ["-", "-"], ["", "U+E149"], ["󾓞", "U+FE4DE"]],
    "💹": ["U+1F4B9", "chart with upwards trend and yen sign", "1f4b9", ["-", "-"], ["", "U+E5DC"], ["", "U+E14A"], ["󾓟", "U+FE4DF"]],
    "💲": ["U+1F4B2", "heavy dollar sign", "1f4b2", ["", "U+E715"], ["", "U+E579"], ["", "U+E12F"], ["󾓠", "U+FE4E0"]],
    "💳": ["U+1F4B3", "credit card", "1f4b3", ["-", "-"], ["", "U+E57C"], ["-", "-"], ["󾓡", "U+FE4E1"]],
    "💴": ["U+1F4B4", "banknote with yen sign", "1f4b4", ["", "U+E6D6"], ["", "U+E57D"], ["-", "-"], ["󾓢", "U+FE4E2"]],
    "💵": ["U+1F4B5", "banknote with dollar sign", "1f4b5", ["", "U+E715"], ["", "U+E585"], ["", "U+E12F"], ["󾓣", "U+FE4E3"]],
    "💸": ["U+1F4B8", "money with wings", "1f4b8", ["-", "-"], ["", "U+EB5B"], ["-", "-"], ["󾓤", "U+FE4E4"]],
    "🇨🇳": ["U+1F1E8 U+1F1F3", "regional indicator symbol letters cn", "1f1e81f1f3", ["-", "-"], ["", "U+EB11"], ["", "U+E513"], ["󾓭", "U+FE4ED"]],
    "🇩🇪": ["U+1F1E9 U+1F1EA", "regional indicator symbol letters de", "1f1e91f1ea", ["-", "-"], ["", "U+EB0E"], ["", "U+E50E"], ["󾓨", "U+FE4E8"]],
    "🇪🇸": ["U+1F1EA U+1F1F8", "regional indicator symbol letters es", "1f1ea1f1f8", ["-", "-"], ["", "U+E5D5"], ["", "U+E511"], ["󾓫", "U+FE4EB"]],
    "🇫🇷": ["U+1F1EB U+1F1F7", "regional indicator symbol letters fr", "1f1eb1f1f7", ["-", "-"], ["", "U+EAFA"], ["", "U+E50D"], ["󾓧", "U+FE4E7"]],
    "🇬🇧": ["U+1F1EC U+1F1E7", "regional indicator symbol letters gb", "1f1ec1f1e7", ["-", "-"], ["", "U+EB10"], ["", "U+E510"], ["󾓪", "U+FE4EA"]],
    "🇮🇹": ["U+1F1EE U+1F1F9", "regional indicator symbol letters it", "1f1ee1f1f9", ["-", "-"], ["", "U+EB0F"], ["", "U+E50F"], ["󾓩", "U+FE4E9"]],
    "🇯🇵": ["U+1F1EF U+1F1F5", "regional indicator symbol letters jp", "1f1ef1f1f5", ["-", "-"], ["", "U+E4CC"], ["", "U+E50B"], ["󾓥", "U+FE4E5"]],
    "🇰🇷": ["U+1F1F0 U+1F1F7", "regional indicator symbol letters kr", "1f1f01f1f7", ["-", "-"], ["", "U+EB12"], ["", "U+E514"], ["󾓮", "U+FE4EE"]],
    "🇷🇺": ["U+1F1F7 U+1F1FA", "regional indicator symbol letters ru", "1f1f71f1fa", ["-", "-"], ["", "U+E5D6"], ["", "U+E512"], ["󾓬", "U+FE4EC"]],
    "🇺🇸": ["U+1F1FA U+1F1F8", "regional indicator symbol letters us", "1f1fa1f1f8", ["-", "-"], ["", "U+E573"], ["", "U+E50C"], ["󾓦", "U+FE4E6"]],
    "🔥": ["U+1F525", "fire", "1f525", ["-", "-"], ["", "U+E47B"], ["", "U+E11D"], ["󾓶", "U+FE4F6"]],
    "🔦": ["U+1F526", "electric torch", "1f526", ["", "U+E6FB"], ["", "U+E583"], ["-", "-"], ["󾓻", "U+FE4FB"]],
    "🔧": ["U+1F527", "wrench", "1f527", ["", "U+E718"], ["", "U+E587"], ["-", "-"], ["󾓉", "U+FE4C9"]],
    "🔨": ["U+1F528", "hammer", "1f528", ["-", "-"], ["", "U+E5CB"], ["", "U+E116"], ["󾓊", "U+FE4CA"]],
    "🔩": ["U+1F529", "nut and bolt", "1f529", ["-", "-"], ["", "U+E581"], ["-", "-"], ["󾓋", "U+FE4CB"]],
    "🔪": ["U+1F52A", "hocho", "1f52a", ["-", "-"], ["", "U+E57F"], ["-", "-"], ["󾓺", "U+FE4FA"]],
    "🔫": ["U+1F52B", "pistol", "1f52b", ["-", "-"], ["", "U+E50A"], ["", "U+E113"], ["󾓵", "U+FE4F5"]],
    "🔮": ["U+1F52E", "crystal ball", "1f52e", ["-", "-"], ["", "U+EA8F"], ["", "U+E23E"], ["󾓷", "U+FE4F7"]],
    "🔯": ["U+1F52F", "six pointed star with middle dot", "1f52f", ["-", "-"], ["", "U+EA8F"], ["", "U+E23E"], ["󾓸", "U+FE4F8"]],
    "🔰": ["U+1F530", "japanese symbol for beginner", "1f530", ["-", "-"], ["", "U+E480"], ["", "U+E209"], ["󾁄", "U+FE044"]],
    "🔱": ["U+1F531", "trident emblem", "1f531", ["", "U+E71A"], ["", "U+E5C9"], ["", "U+E031"], ["󾓒", "U+FE4D2"]],
    "💉": ["U+1F489", "syringe", "1f489", ["-", "-"], ["", "U+E510"], ["", "U+E13B"], ["󾔉", "U+FE509"]],
    "💊": ["U+1F48A", "pill", "1f48a", ["-", "-"], ["", "U+EA9A"], ["", "U+E30F"], ["󾔊", "U+FE50A"]],
    "🅰": ["U+1F170", "negative squared latin capital letter a", "1f170", ["-", "-"], ["", "U+EB26"], ["", "U+E532"], ["󾔋", "U+FE50B"]],
    "🅱": ["U+1F171", "negative squared latin capital letter b", "1f171", ["-", "-"], ["", "U+EB27"], ["", "U+E533"], ["󾔌", "U+FE50C"]],
    "🆎": ["U+1F18E", "negative squared ab", "1f18e", ["-", "-"], ["", "U+EB29"], ["", "U+E534"], ["󾔍", "U+FE50D"]],
    "🅾": ["U+1F17E", "negative squared latin capital letter o", "1f17e", ["-", "-"], ["", "U+EB28"], ["", "U+E535"], ["󾔎", "U+FE50E"]],
    "🎀": ["U+1F380", "ribbon", "1f380", ["", "U+E684"], ["", "U+E59F"], ["", "U+E314"], ["󾔏", "U+FE50F"]],
    "🎁": ["U+1F381", "wrapped present", "1f381", ["", "U+E685"], ["", "U+E4CF"], ["", "U+E112"], ["󾔐", "U+FE510"]],
    "🎂": ["U+1F382", "birthday cake", "1f382", ["", "U+E686"], ["", "U+E5A0"], ["", "U+E34B"], ["󾔑", "U+FE511"]],
    "🎄": ["U+1F384", "christmas tree", "1f384", ["", "U+E6A4"], ["", "U+E4C9"], ["", "U+E033"], ["󾔒", "U+FE512"]],
    "🎅": ["U+1F385", "father christmas", "1f385", ["-", "-"], ["", "U+EAF0"], ["", "U+E448"], ["󾔓", "U+FE513"]],
    "🎌": ["U+1F38C", "crossed flags", "1f38c", ["-", "-"], ["", "U+E5D9"], ["", "U+E143"], ["󾔔", "U+FE514"]],
    "🎆": ["U+1F386", "fireworks", "1f386", ["-", "-"], ["", "U+E5CC"], ["", "U+E117"], ["󾔕", "U+FE515"]],
    "🎈": ["U+1F388", "balloon", "1f388", ["-", "-"], ["", "U+EA9B"], ["", "U+E310"], ["󾔖", "U+FE516"]],
    "🎉": ["U+1F389", "party popper", "1f389", ["-", "-"], ["", "U+EA9C"], ["", "U+E312"], ["󾔗", "U+FE517"]],
    "🎍": ["U+1F38D", "pine decoration", "1f38d", ["-", "-"], ["", "U+EAE3"], ["", "U+E436"], ["󾔘", "U+FE518"]],
    "🎎": ["U+1F38E", "japanese dolls", "1f38e", ["-", "-"], ["", "U+EAE4"], ["", "U+E438"], ["󾔙", "U+FE519"]],
    "🎓": ["U+1F393", "graduation cap", "1f393", ["-", "-"], ["", "U+EAE5"], ["", "U+E439"], ["󾔚", "U+FE51A"]],
    "🎒": ["U+1F392", "school satchel", "1f392", ["-", "-"], ["", "U+EAE6"], ["", "U+E43A"], ["󾔛", "U+FE51B"]],
    "🎏": ["U+1F38F", "carp streamer", "1f38f", ["-", "-"], ["", "U+EAE7"], ["", "U+E43B"], ["󾔜", "U+FE51C"]],
    "🎇": ["U+1F387", "firework sparkler", "1f387", ["-", "-"], ["", "U+EAEB"], ["", "U+E440"], ["󾔝", "U+FE51D"]],
    "🎐": ["U+1F390", "wind chime", "1f390", ["-", "-"], ["", "U+EAED"], ["", "U+E442"], ["󾔞", "U+FE51E"]],
    "🎃": ["U+1F383", "jack-o-lantern", "1f383", ["-", "-"], ["", "U+EAEE"], ["", "U+E445"], ["󾔟", "U+FE51F"]],
    "🎊": ["U+1F38A", "confetti ball", "1f38a", ["-", "-"], ["", "U+E46F"], ["-", "-"], ["󾔠", "U+FE520"]],
    "🎋": ["U+1F38B", "tanabata tree", "1f38b", ["-", "-"], ["", "U+EB3D"], ["-", "-"], ["󾔡", "U+FE521"]],
    "🎑": ["U+1F391", "moon viewing ceremony", "1f391", ["-", "-"], ["", "U+EAEF"], ["", "U+E446"], ["󾀗", "U+FE017"]],
    "📟": ["U+1F4DF", "pager", "1f4df", ["", "U+E65A"], ["", "U+E59B"], ["-", "-"], ["󾔢", "U+FE522"]],
    "☎": ["U+260E", "black telephone", "260e", ["", "U+E687"], ["", "U+E596"], ["", "U+E009"], ["󾔣", "U+FE523"]],
    "📞": ["U+1F4DE", "telephone receiver", "1f4de", ["", "U+E687"], ["", "U+E51E"], ["", "U+E009"], ["󾔤", "U+FE524"]],
    "📱": ["U+1F4F1", "mobile phone", "1f4f1", ["", "U+E688"], ["", "U+E588"], ["", "U+E00A"], ["󾔥", "U+FE525"]],
    "📲": ["U+1F4F2", "mobile phone with rightwards arrow at left", "1f4f2", ["", "U+E6CE"], ["", "U+EB08"], ["", "U+E104"], ["󾔦", "U+FE526"]],
    "📝": ["U+1F4DD", "memo", "1f4dd", ["", "U+E689"], ["", "U+EA92"], ["", "U+E301"], ["󾔧", "U+FE527"]],
    "📠": ["U+1F4E0", "fax machine", "1f4e0", ["", "U+E6D0"], ["", "U+E520"], ["", "U+E00B"], ["󾔨", "U+FE528"]],
    "✉": ["U+2709", "envelope", "2709", ["", "U+E6D3"], ["", "U+E521"], ["", "U+E103"], ["󾔩", "U+FE529"]],
    "📨": ["U+1F4E8", "incoming envelope", "1f4e8", ["", "U+E6CF"], ["", "U+E591"], ["", "U+E103"], ["󾔪", "U+FE52A"]],
    "📩": ["U+1F4E9", "envelope with downwards arrow above", "1f4e9", ["", "U+E6CF"], ["", "U+EB62"], ["", "U+E103"], ["󾔫", "U+FE52B"]],
    "📪": ["U+1F4EA", "closed mailbox with lowered flag", "1f4ea", ["", "U+E665"], ["", "U+E51B"], ["", "U+E101"], ["󾔬", "U+FE52C"]],
    "📫": ["U+1F4EB", "closed mailbox with raised flag", "1f4eb", ["", "U+E665"], ["", "U+EB0A"], ["", "U+E101"], ["󾔭", "U+FE52D"]],
    "📮": ["U+1F4EE", "postbox", "1f4ee", ["", "U+E665"], ["", "U+E51B"], ["", "U+E102"], ["󾔮", "U+FE52E"]],
    "📰": ["U+1F4F0", "newspaper", "1f4f0", ["-", "-"], ["", "U+E58B"], ["-", "-"], ["󾠢", "U+FE822"]],
    "📢": ["U+1F4E2", "public address loudspeaker", "1f4e2", ["-", "-"], ["", "U+E511"], ["", "U+E142"], ["󾔯", "U+FE52F"]],
    "📣": ["U+1F4E3", "cheering megaphone", "1f4e3", ["-", "-"], ["", "U+E511"], ["", "U+E317"], ["󾔰", "U+FE530"]],
    "📡": ["U+1F4E1", "satellite antenna", "1f4e1", ["-", "-"], ["", "U+E4A8"], ["", "U+E14B"], ["󾔱", "U+FE531"]],
    "📤": ["U+1F4E4", "outbox tray", "1f4e4", ["-", "-"], ["", "U+E592"], ["-", "-"], ["󾔳", "U+FE533"]],
    "📥": ["U+1F4E5", "inbox tray", "1f4e5", ["-", "-"], ["", "U+E593"], ["-", "-"], ["󾔴", "U+FE534"]],
    "📦": ["U+1F4E6", "package", "1f4e6", ["", "U+E685"], ["", "U+E51F"], ["", "U+E112"], ["󾔵", "U+FE535"]],
    "📧": ["U+1F4E7", "e-mail symbol", "1f4e7", ["", "U+E6D3"], ["", "U+EB71"], ["", "U+E103"], ["󾮒", "U+FEB92"]],
    "🔠": ["U+1F520", "input symbol for latin capital letters", "1f520", ["-", "-"], ["", "U+EAFD"], ["-", "-"], ["󾭼", "U+FEB7C"]],
    "🔡": ["U+1F521", "input symbol for latin small letters", "1f521", ["-", "-"], ["", "U+EAFE"], ["-", "-"], ["󾭽", "U+FEB7D"]],
    "🔢": ["U+1F522", "input symbol for numbers", "1f522", ["-", "-"], ["", "U+EAFF"], ["-", "-"], ["󾭾", "U+FEB7E"]],
    "🔣": ["U+1F523", "input symbol for symbols", "1f523", ["-", "-"], ["", "U+EB00"], ["-", "-"], ["󾭿", "U+FEB7F"]],
    "🔤": ["U+1F524", "input symbol for latin letters", "1f524", ["-", "-"], ["", "U+EB55"], ["-", "-"], ["󾮀", "U+FEB80"]],
    "✒": ["U+2712", "black nib", "2712", ["", "U+E6AE"], ["", "U+EB03"], ["-", "-"], ["󾔶", "U+FE536"]],
    "💺": ["U+1F4BA", "seat", "1f4ba", ["", "U+E6B2"], ["-", "-"], ["", "U+E11F"], ["󾔷", "U+FE537"]],
    "💻": ["U+1F4BB", "personal computer", "1f4bb", ["", "U+E716"], ["", "U+E5B8"], ["", "U+E00C"], ["󾔸", "U+FE538"]],
    "✏": ["U+270F", "pencil", "270f", ["", "U+E719"], ["", "U+E4A1"], ["", "U+E301"], ["󾔹", "U+FE539"]],
    "📎": ["U+1F4CE", "paperclip", "1f4ce", ["", "U+E730"], ["", "U+E4A0"], ["-", "-"], ["󾔺", "U+FE53A"]],
    "💼": ["U+1F4BC", "briefcase", "1f4bc", ["", "U+E682"], ["", "U+E5CE"], ["", "U+E11E"], ["󾔻", "U+FE53B"]],
    "💽": ["U+1F4BD", "minidisc", "1f4bd", ["-", "-"], ["", "U+E582"], ["", "U+E316"], ["󾔼", "U+FE53C"]],
    "💾": ["U+1F4BE", "floppy disk", "1f4be", ["-", "-"], ["", "U+E562"], ["", "U+E316"], ["󾔽", "U+FE53D"]],
    "💿": ["U+1F4BF", "optical disc", "1f4bf", ["", "U+E68C"], ["", "U+E50C"], ["", "U+E126"], ["󾠝", "U+FE81D"]],
    "📀": ["U+1F4C0", "dvd", "1f4c0", ["", "U+E68C"], ["", "U+E50C"], ["", "U+E127"], ["󾠞", "U+FE81E"]],
    "✂": ["U+2702", "black scissors", "2702", ["", "U+E675"], ["", "U+E516"], ["", "U+E313"], ["󾔾", "U+FE53E"]],
    "📍": ["U+1F4CD", "round pushpin", "1f4cd", ["-", "-"], ["", "U+E560"], ["-", "-"], ["󾔿", "U+FE53F"]],
    "📃": ["U+1F4C3", "page with curl", "1f4c3", ["", "U+E689"], ["", "U+E561"], ["", "U+E301"], ["󾕀", "U+FE540"]],
    "📄": ["U+1F4C4", "page facing up", "1f4c4", ["", "U+E689"], ["", "U+E569"], ["", "U+E301"], ["󾕁", "U+FE541"]],
    "📅": ["U+1F4C5", "calendar", "1f4c5", ["-", "-"], ["", "U+E563"], ["-", "-"], ["󾕂", "U+FE542"]],
    "📁": ["U+1F4C1", "file folder", "1f4c1", ["-", "-"], ["", "U+E58F"], ["-", "-"], ["󾕃", "U+FE543"]],
    "📂": ["U+1F4C2", "open file folder", "1f4c2", ["-", "-"], ["", "U+E590"], ["-", "-"], ["󾕄", "U+FE544"]],
    "📓": ["U+1F4D3", "notebook", "1f4d3", ["", "U+E683"], ["", "U+E56B"], ["", "U+E148"], ["󾕅", "U+FE545"]],
    "📖": ["U+1F4D6", "open book", "1f4d6", ["", "U+E683"], ["", "U+E49F"], ["", "U+E148"], ["󾕆", "U+FE546"]],
    "📔": ["U+1F4D4", "notebook with decorative cover", "1f4d4", ["", "U+E683"], ["", "U+E49D"], ["", "U+E148"], ["󾕇", "U+FE547"]],
    "📕": ["U+1F4D5", "closed book", "1f4d5", ["", "U+E683"], ["", "U+E568"], ["", "U+E148"], ["󾔂", "U+FE502"]],
    "📗": ["U+1F4D7", "green book", "1f4d7", ["", "U+E683"], ["", "U+E565"], ["", "U+E148"], ["󾓿", "U+FE4FF"]],
    "📘": ["U+1F4D8", "blue book", "1f4d8", ["", "U+E683"], ["", "U+E566"], ["", "U+E148"], ["󾔀", "U+FE500"]],
    "📙": ["U+1F4D9", "orange book", "1f4d9", ["", "U+E683"], ["", "U+E567"], ["", "U+E148"], ["󾔁", "U+FE501"]],
    "📚": ["U+1F4DA", "books", "1f4da", ["", "U+E683"], ["", "U+E56F"], ["", "U+E148"], ["󾔃", "U+FE503"]],
    "📛": ["U+1F4DB", "name badge", "1f4db", ["-", "-"], ["", "U+E51D"], ["-", "-"], ["󾔄", "U+FE504"]],
    "📜": ["U+1F4DC", "scroll", "1f4dc", ["", "U+E70A"], ["", "U+E55F"], ["-", "-"], ["󾓽", "U+FE4FD"]],
    "📋": ["U+1F4CB", "clipboard", "1f4cb", ["", "U+E689"], ["", "U+E564"], ["", "U+E301"], ["󾕈", "U+FE548"]],
    "📆": ["U+1F4C6", "tear-off calendar", "1f4c6", ["-", "-"], ["", "U+E56A"], ["-", "-"], ["󾕉", "U+FE549"]],
    "📊": ["U+1F4CA", "bar chart", "1f4ca", ["-", "-"], ["", "U+E574"], ["", "U+E14A"], ["󾕊", "U+FE54A"]],
    "📈": ["U+1F4C8", "chart with upwards trend", "1f4c8", ["-", "-"], ["", "U+E575"], ["", "U+E14A"], ["󾕋", "U+FE54B"]],
    "📉": ["U+1F4C9", "chart with downwards trend", "1f4c9", ["-", "-"], ["", "U+E576"], ["-", "-"], ["󾕌", "U+FE54C"]],
    "📇": ["U+1F4C7", "card index", "1f4c7", ["", "U+E683"], ["", "U+E56C"], ["", "U+E148"], ["󾕍", "U+FE54D"]],
    "📌": ["U+1F4CC", "pushpin", "1f4cc", ["-", "-"], ["", "U+E56D"], ["-", "-"], ["󾕎", "U+FE54E"]],
    "📒": ["U+1F4D2", "ledger", "1f4d2", ["", "U+E683"], ["", "U+E56E"], ["", "U+E148"], ["󾕏", "U+FE54F"]],
    "📏": ["U+1F4CF", "straight ruler", "1f4cf", ["-", "-"], ["", "U+E570"], ["-", "-"], ["󾕐", "U+FE550"]],
    "📐": ["U+1F4D0", "triangular ruler", "1f4d0", ["-", "-"], ["", "U+E4A2"], ["-", "-"], ["󾕑", "U+FE551"]],
    "📑": ["U+1F4D1", "bookmark tabs", "1f4d1", ["", "U+E689"], ["", "U+EB0B"], ["", "U+E301"], ["󾕒", "U+FE552"]],
    "🎽": ["U+1F3BD", "running shirt with sash", "1f3bd", ["", "U+E652"], ["-", "-"], ["-", "-"], ["󾟐", "U+FE7D0"]],
    "⚾": ["U+26BE", "baseball", "26be", ["", "U+E653"], ["", "U+E4BA"], ["", "U+E016"], ["󾟑", "U+FE7D1"]],
    "⛳": ["U+26F3", "flag in hole", "26f3", ["", "U+E654"], ["", "U+E599"], ["", "U+E014"], ["󾟒", "U+FE7D2"]],
    "🎾": ["U+1F3BE", "tennis racquet and ball", "1f3be", ["", "U+E655"], ["", "U+E4B7"], ["", "U+E015"], ["󾟓", "U+FE7D3"]],
    "⚽": ["U+26BD", "soccer ball", "26bd", ["", "U+E656"], ["", "U+E4B6"], ["", "U+E018"], ["󾟔", "U+FE7D4"]],
    "🎿": ["U+1F3BF", "ski and ski boot", "1f3bf", ["", "U+E657"], ["", "U+EAAC"], ["", "U+E013"], ["󾟕", "U+FE7D5"]],
    "🏀": ["U+1F3C0", "basketball and hoop", "1f3c0", ["", "U+E658"], ["", "U+E59A"], ["", "U+E42A"], ["󾟖", "U+FE7D6"]],
    "🏁": ["U+1F3C1", "chequered flag", "1f3c1", ["", "U+E659"], ["", "U+E4B9"], ["", "U+E132"], ["󾟗", "U+FE7D7"]],
    "🏂": ["U+1F3C2", "snowboarder", "1f3c2", ["", "U+E712"], ["", "U+E4B8"], ["-", "-"], ["󾟘", "U+FE7D8"]],
    "🏃": ["U+1F3C3", "runner", "1f3c3", ["", "U+E733"], ["", "U+E46B"], ["", "U+E115"], ["󾟙", "U+FE7D9"]],
    "🏄": ["U+1F3C4", "surfer", "1f3c4", ["", "U+E712"], ["", "U+EB41"], ["", "U+E017"], ["󾟚", "U+FE7DA"]],
    "🏆": ["U+1F3C6", "trophy", "1f3c6", ["-", "-"], ["", "U+E5D3"], ["", "U+E131"], ["󾟛", "U+FE7DB"]],
    "🏈": ["U+1F3C8", "american football", "1f3c8", ["-", "-"], ["", "U+E4BB"], ["", "U+E42B"], ["󾟝", "U+FE7DD"]],
    "🏊": ["U+1F3CA", "swimmer", "1f3ca", ["-", "-"], ["", "U+EADE"], ["", "U+E42D"], ["󾟞", "U+FE7DE"]],
    "🚃": ["U+1F683", "railway car", "1f683", ["", "U+E65B"], ["", "U+E4B5"], ["", "U+E01E"], ["󾟟", "U+FE7DF"]],
    "🚇": ["U+1F687", "metro", "1f687", ["", "U+E65C"], ["", "U+E5BC"], ["", "U+E434"], ["󾟠", "U+FE7E0"]],
    "Ⓜ": ["U+24C2", "circled latin capital letter m", "24c2", ["", "U+E65C"], ["", "U+E5BC"], ["", "U+E434"], ["󾟡", "U+FE7E1"]],
    "🚄": ["U+1F684", "high-speed train", "1f684", ["", "U+E65D"], ["", "U+E4B0"], ["", "U+E435"], ["󾟢", "U+FE7E2"]],
    "🚅": ["U+1F685", "high-speed train with bullet nose", "1f685", ["", "U+E65D"], ["", "U+E4B0"], ["", "U+E01F"], ["󾟣", "U+FE7E3"]],
    "🚗": ["U+1F697", "automobile", "1f697", ["", "U+E65E"], ["", "U+E4B1"], ["", "U+E01B"], ["󾟤", "U+FE7E4"]],
    "🚙": ["U+1F699", "recreational vehicle", "1f699", ["", "U+E65F"], ["", "U+E4B1"], ["", "U+E42E"], ["󾟥", "U+FE7E5"]],
    "🚌": ["U+1F68C", "bus", "1f68c", ["", "U+E660"], ["", "U+E4AF"], ["", "U+E159"], ["󾟦", "U+FE7E6"]],
    "🚏": ["U+1F68F", "bus stop", "1f68f", ["-", "-"], ["", "U+E4A7"], ["", "U+E150"], ["󾟧", "U+FE7E7"]],
    "🚢": ["U+1F6A2", "ship", "1f6a2", ["", "U+E661"], ["", "U+EA82"], ["", "U+E202"], ["󾟨", "U+FE7E8"]],
    "✈": ["U+2708", "airplane", "2708", ["", "U+E662"], ["", "U+E4B3"], ["", "U+E01D"], ["󾟩", "U+FE7E9"]],
    "⛵": ["U+26F5", "sailboat", "26f5", ["", "U+E6A3"], ["", "U+E4B4"], ["", "U+E01C"], ["󾟪", "U+FE7EA"]],
    "🚉": ["U+1F689", "station", "1f689", ["-", "-"], ["", "U+EB6D"], ["", "U+E039"], ["󾟬", "U+FE7EC"]],
    "🚀": ["U+1F680", "rocket", "1f680", ["-", "-"], ["", "U+E5C8"], ["", "U+E10D"], ["󾟭", "U+FE7ED"]],
    "🚤": ["U+1F6A4", "speedboat", "1f6a4", ["", "U+E6A3"], ["", "U+E4B4"], ["", "U+E135"], ["󾟮", "U+FE7EE"]],
    "🚕": ["U+1F695", "taxi", "1f695", ["", "U+E65E"], ["", "U+E4B1"], ["", "U+E15A"], ["󾟯", "U+FE7EF"]],
    "🚚": ["U+1F69A", "delivery truck", "1f69a", ["-", "-"], ["", "U+E4B2"], ["", "U+E42F"], ["󾟱", "U+FE7F1"]],
    "🚒": ["U+1F692", "fire engine", "1f692", ["-", "-"], ["", "U+EADF"], ["", "U+E430"], ["󾟲", "U+FE7F2"]],
    "🚑": ["U+1F691", "ambulance", "1f691", ["-", "-"], ["", "U+EAE0"], ["", "U+E431"], ["󾟳", "U+FE7F3"]],
    "🚓": ["U+1F693", "police car", "1f693", ["-", "-"], ["", "U+EAE1"], ["", "U+E432"], ["󾟴", "U+FE7F4"]],
    "⛽": ["U+26FD", "fuel pump", "26fd", ["", "U+E66B"], ["", "U+E571"], ["", "U+E03A"], ["󾟵", "U+FE7F5"]],
    "🅿": ["U+1F17F", "negative squared latin capital letter p", "1f17f", ["", "U+E66C"], ["", "U+E4A6"], ["", "U+E14F"], ["󾟶", "U+FE7F6"]],
    "🚥": ["U+1F6A5", "horizontal traffic light", "1f6a5", ["", "U+E66D"], ["", "U+E46A"], ["", "U+E14E"], ["󾟷", "U+FE7F7"]],
    "🚧": ["U+1F6A7", "construction sign", "1f6a7", ["-", "-"], ["", "U+E5D7"], ["", "U+E137"], ["󾟸", "U+FE7F8"]],
    "🚨": ["U+1F6A8", "police cars revolving light", "1f6a8", ["-", "-"], ["", "U+EB73"], ["", "U+E432"], ["󾟹", "U+FE7F9"]],
    "♨": ["U+2668", "hot springs", "2668", ["", "U+E6F7"], ["", "U+E4BC"], ["", "U+E123"], ["󾟺", "U+FE7FA"]],
    "⛺": ["U+26FA", "tent", "26fa", ["-", "-"], ["", "U+E5D0"], ["", "U+E122"], ["󾟻", "U+FE7FB"]],
    "🎠": ["U+1F3A0", "carousel horse", "1f3a0", ["", "U+E679"], ["-", "-"], ["-", "-"], ["󾟼", "U+FE7FC"]],
    "🎡": ["U+1F3A1", "ferris wheel", "1f3a1", ["-", "-"], ["", "U+E46D"], ["", "U+E124"], ["󾟽", "U+FE7FD"]],
    "🎢": ["U+1F3A2", "roller coaster", "1f3a2", ["-", "-"], ["", "U+EAE2"], ["", "U+E433"], ["󾟾", "U+FE7FE"]],
    "🎣": ["U+1F3A3", "fishing pole and fish", "1f3a3", ["", "U+E751"], ["", "U+EB42"], ["", "U+E019"], ["󾟿", "U+FE7FF"]],
    "🎤": ["U+1F3A4", "microphone", "1f3a4", ["", "U+E676"], ["", "U+E503"], ["", "U+E03C"], ["󾠀", "U+FE800"]],
    "🎥": ["U+1F3A5", "movie camera", "1f3a5", ["", "U+E677"], ["", "U+E517"], ["", "U+E03D"], ["󾠁", "U+FE801"]],
    "🎦": ["U+1F3A6", "cinema", "1f3a6", ["", "U+E677"], ["", "U+E517"], ["", "U+E507"], ["󾠂", "U+FE802"]],
    "🎧": ["U+1F3A7", "headphone", "1f3a7", ["", "U+E67A"], ["", "U+E508"], ["", "U+E30A"], ["󾠃", "U+FE803"]],
    "🎨": ["U+1F3A8", "artist palette", "1f3a8", ["", "U+E67B"], ["", "U+E59C"], ["", "U+E502"], ["󾠄", "U+FE804"]],
    "🎩": ["U+1F3A9", "top hat", "1f3a9", ["", "U+E67C"], ["", "U+EAF5"], ["", "U+E503"], ["󾠅", "U+FE805"]],
    "🎪": ["U+1F3AA", "circus tent", "1f3aa", ["", "U+E67D"], ["", "U+E59E"], ["-", "-"], ["󾠆", "U+FE806"]],
    "🎫": ["U+1F3AB", "ticket", "1f3ab", ["", "U+E67E"], ["", "U+E49E"], ["", "U+E125"], ["󾠇", "U+FE807"]],
    "🎬": ["U+1F3AC", "clapper board", "1f3ac", ["", "U+E6AC"], ["", "U+E4BE"], ["", "U+E324"], ["󾠈", "U+FE808"]],
    "🎭": ["U+1F3AD", "performing arts", "1f3ad", ["-", "-"], ["", "U+E59D"], ["", "U+E503"], ["󾠉", "U+FE809"]],
    "🎮": ["U+1F3AE", "video game", "1f3ae", ["", "U+E68B"], ["", "U+E4C6"], ["-", "-"], ["󾠊", "U+FE80A"]],
    "🀄": ["U+1F004", "mahjong tile red dragon", "1f004", ["-", "-"], ["", "U+E5D1"], ["", "U+E12D"], ["󾠋", "U+FE80B"]],
    "🎯": ["U+1F3AF", "direct hit", "1f3af", ["-", "-"], ["", "U+E4C5"], ["", "U+E130"], ["󾠌", "U+FE80C"]],
    "🎰": ["U+1F3B0", "slot machine", "1f3b0", ["-", "-"], ["", "U+E46E"], ["", "U+E133"], ["󾠍", "U+FE80D"]],
    "🎱": ["U+1F3B1", "billiards", "1f3b1", ["-", "-"], ["", "U+EADD"], ["", "U+E42C"], ["󾠎", "U+FE80E"]],
    "🎲": ["U+1F3B2", "game die", "1f3b2", ["-", "-"], ["", "U+E4C8"], ["-", "-"], ["󾠏", "U+FE80F"]],
    "🎳": ["U+1F3B3", "bowling", "1f3b3", ["-", "-"], ["", "U+EB43"], ["-", "-"], ["󾠐", "U+FE810"]],
    "🎴": ["U+1F3B4", "flower playing cards", "1f3b4", ["-", "-"], ["", "U+EB6E"], ["-", "-"], ["󾠑", "U+FE811"]],
    "🃏": ["U+1F0CF", "playing card black joker", "1f0cf", ["-", "-"], ["", "U+EB6F"], ["-", "-"], ["󾠒", "U+FE812"]],
    "🎵": ["U+1F3B5", "musical note", "1f3b5", ["", "U+E6F6"], ["", "U+E5BE"], ["", "U+E03E"], ["󾠓", "U+FE813"]],
    "🎶": ["U+1F3B6", "multiple musical notes", "1f3b6", ["", "U+E6FF"], ["", "U+E505"], ["", "U+E326"], ["󾠔", "U+FE814"]],
    "🎷": ["U+1F3B7", "saxophone", "1f3b7", ["-", "-"], ["-", "-"], ["", "U+E040"], ["󾠕", "U+FE815"]],
    "🎸": ["U+1F3B8", "guitar", "1f3b8", ["-", "-"], ["", "U+E506"], ["", "U+E041"], ["󾠖", "U+FE816"]],
    "🎹": ["U+1F3B9", "musical keyboard", "1f3b9", ["-", "-"], ["", "U+EB40"], ["-", "-"], ["󾠗", "U+FE817"]],
    "🎺": ["U+1F3BA", "trumpet", "1f3ba", ["-", "-"], ["", "U+EADC"], ["", "U+E042"], ["󾠘", "U+FE818"]],
    "🎻": ["U+1F3BB", "violin", "1f3bb", ["-", "-"], ["", "U+E507"], ["-", "-"], ["󾠙", "U+FE819"]],
    "🎼": ["U+1F3BC", "musical score", "1f3bc", ["", "U+E6FF"], ["", "U+EACC"], ["", "U+E326"], ["󾠚", "U+FE81A"]],
    "〽": ["U+303D", "part alternation mark", "303d", ["-", "-"], ["-", "-"], ["", "U+E12C"], ["󾠛", "U+FE81B"]],
    "📷": ["U+1F4F7", "camera", "1f4f7", ["", "U+E681"], ["", "U+E515"], ["", "U+E008"], ["󾓯", "U+FE4EF"]],
    "📹": ["U+1F4F9", "video camera", "1f4f9", ["", "U+E677"], ["", "U+E57E"], ["", "U+E03D"], ["󾓹", "U+FE4F9"]],
    "📺": ["U+1F4FA", "television", "1f4fa", ["", "U+E68A"], ["", "U+E502"], ["", "U+E12A"], ["󾠜", "U+FE81C"]],
    "📻": ["U+1F4FB", "radio", "1f4fb", ["-", "-"], ["", "U+E5B9"], ["", "U+E128"], ["󾠟", "U+FE81F"]],
    "📼": ["U+1F4FC", "videocassette", "1f4fc", ["-", "-"], ["", "U+E580"], ["", "U+E129"], ["󾠠", "U+FE820"]],
    "💋": ["U+1F48B", "kiss mark", "1f48b", ["", "U+E6F9"], ["", "U+E4EB"], ["", "U+E003"], ["󾠣", "U+FE823"]],
    "💌": ["U+1F48C", "love letter", "1f48c", ["", "U+E717"], ["", "U+EB78"], ["", "U+E103 U+E328"], ["󾠤", "U+FE824"]],
    "💍": ["U+1F48D", "ring", "1f48d", ["", "U+E71B"], ["", "U+E514"], ["", "U+E034"], ["󾠥", "U+FE825"]],
    "💎": ["U+1F48E", "gem stone", "1f48e", ["", "U+E71B"], ["", "U+E514"], ["", "U+E035"], ["󾠦", "U+FE826"]],
    "💏": ["U+1F48F", "kiss", "1f48f", ["", "U+E6F9"], ["", "U+E5CA"], ["", "U+E111"], ["󾠧", "U+FE827"]],
    "💐": ["U+1F490", "bouquet", "1f490", ["-", "-"], ["", "U+EA95"], ["", "U+E306"], ["󾠨", "U+FE828"]],
    "💑": ["U+1F491", "couple with heart", "1f491", ["", "U+E6ED"], ["", "U+EADA"], ["", "U+E425"], ["󾠩", "U+FE829"]],
    "💒": ["U+1F492", "wedding", "1f492", ["-", "-"], ["", "U+E5BB"], ["", "U+E43D"], ["󾠪", "U+FE82A"]],
    "🔞": ["U+1F51E", "no one under eighteen symbol", "1f51e", ["-", "-"], ["", "U+EA83"], ["", "U+E207"], ["󾬥", "U+FEB25"]],
    "©": ["U+00A9", "copyright sign", "a9", ["", "U+E731"], ["", "U+E558"], ["", "U+E24E"], ["󾬩", "U+FEB29"]],
    "®": ["U+00AE", "registered sign", "ae", ["", "U+E736"], ["", "U+E559"], ["", "U+E24F"], ["󾬭", "U+FEB2D"]],
    "™": ["U+2122", "trade mark sign", "2122", ["", "U+E732"], ["", "U+E54E"], ["", "U+E537"], ["󾬪", "U+FEB2A"]],

    "#⃣": ["U+0023 U+20E3", "hash key", "2320e3", ["", "U+E6E0"], ["", "U+EB84"], ["", "U+E210"], ["󾠬", "U+FE82C"]],
    "1⃣": ["U+0031 U+20E3", "keycap 1", "3120e3", ["", "U+E6E2"], ["", "U+E522"], ["", "U+E21C"], ["󾠮", "U+FE82E"]],
    "2⃣": ["U+0032 U+20E3", "keycap 2", "3220e3", ["", "U+E6E3"], ["", "U+E523"], ["", "U+E21D"], ["󾠯", "U+FE82F"]],
    "3⃣": ["U+0033 U+20E3", "keycap 3", "3320e3", ["", "U+E6E4"], ["", "U+E524"], ["", "U+E21E"], ["󾠰", "U+FE830"]],
    "4⃣": ["U+0034 U+20E3", "keycap 4", "3420e3", ["", "U+E6E5"], ["", "U+E525"], ["", "U+E21F"], ["󾠱", "U+FE831"]],
    "5⃣": ["U+0035 U+20E3", "keycap 5", "3520e3", ["", "U+E6E6"], ["", "U+E526"], ["", "U+E220"], ["󾠲", "U+FE832"]],
    "6⃣": ["U+0036 U+20E3", "keycap 6", "3620e3", ["", "U+E6E7"], ["", "U+E527"], ["", "U+E221"], ["󾠳", "U+FE833"]],
    "7⃣": ["U+0037 U+20E3", "keycap 7", "3720e3", ["", "U+E6E8"], ["", "U+E528"], ["", "U+E222"], ["󾠴", "U+FE834"]],
    "8⃣": ["U+0038 U+20E3", "keycap 8", "3820e3", ["", "U+E6E9"], ["", "U+E529"], ["", "U+E223"], ["󾠵", "U+FE835"]],
    "9⃣": ["U+0039 U+20E3", "keycap 9", "3920e3", ["", "U+E6EA"], ["", "U+E52A"], ["", "U+E224"], ["󾠶", "U+FE836"]],
    "0⃣": ["U+0030 U+20E3", "keycap 0", "3020e3", ["", "U+E6EB"], ["", "U+E5AC"], ["", "U+E225"], ["󾠷", "U+FE837"]],
    "🔟": ["U+1F51F", "keycap ten", "1f51f", ["-", "-"], ["", "U+E52B"], ["-", "-"], ["󾠻", "U+FE83B"]],
    "📶": ["U+1F4F6", "antenna with bars", "1f4f6", ["-", "-"], ["", "U+EA84"], ["", "U+E20B"], ["󾠸", "U+FE838"]],
    "📳": ["U+1F4F3", "vibration mode", "1f4f3", ["-", "-"], ["", "U+EA90"], ["", "U+E250"], ["󾠹", "U+FE839"]],
    "📴": ["U+1F4F4", "mobile phone off", "1f4f4", ["-", "-"], ["", "U+EA91"], ["", "U+E251"], ["󾠺", "U+FE83A"]],
    "🍔": ["U+1F354", "hamburger", "1f354", ["", "U+E673"], ["", "U+E4D6"], ["", "U+E120"], ["󾥠", "U+FE960"]],
    "🍙": ["U+1F359", "rice ball", "1f359", ["", "U+E749"], ["", "U+E4D5"], ["", "U+E342"], ["󾥡", "U+FE961"]],
    "🍰": ["U+1F370", "shortcake", "1f370", ["", "U+E74A"], ["", "U+E4D0"], ["", "U+E046"], ["󾥢", "U+FE962"]],
    "🍜": ["U+1F35C", "steaming bowl", "1f35c", ["", "U+E74C"], ["", "U+E5B4"], ["", "U+E340"], ["󾥣", "U+FE963"]],
    "🍞": ["U+1F35E", "bread", "1f35e", ["", "U+E74D"], ["", "U+EAAF"], ["", "U+E339"], ["󾥤", "U+FE964"]],
    "🍳": ["U+1F373", "cooking", "1f373", ["-", "-"], ["", "U+E4D1"], ["", "U+E147"], ["󾥥", "U+FE965"]],
    "🍦": ["U+1F366", "soft ice cream", "1f366", ["-", "-"], ["", "U+EAB0"], ["", "U+E33A"], ["󾥦", "U+FE966"]],
    "🍟": ["U+1F35F", "french fries", "1f35f", ["-", "-"], ["", "U+EAB1"], ["", "U+E33B"], ["󾥧", "U+FE967"]],
    "🍡": ["U+1F361", "dango", "1f361", ["-", "-"], ["", "U+EAB2"], ["", "U+E33C"], ["󾥨", "U+FE968"]],
    "🍘": ["U+1F358", "rice cracker", "1f358", ["-", "-"], ["", "U+EAB3"], ["", "U+E33D"], ["󾥩", "U+FE969"]],
    "🍚": ["U+1F35A", "cooked rice", "1f35a", ["", "U+E74C"], ["", "U+EAB4"], ["", "U+E33E"], ["󾥪", "U+FE96A"]],
    "🍝": ["U+1F35D", "spaghetti", "1f35d", ["-", "-"], ["", "U+EAB5"], ["", "U+E33F"], ["󾥫", "U+FE96B"]],
    "🍛": ["U+1F35B", "curry and rice", "1f35b", ["-", "-"], ["", "U+EAB6"], ["", "U+E341"], ["󾥬", "U+FE96C"]],
    "🍢": ["U+1F362", "oden", "1f362", ["-", "-"], ["", "U+EAB7"], ["", "U+E343"], ["󾥭", "U+FE96D"]],
    "🍣": ["U+1F363", "sushi", "1f363", ["-", "-"], ["", "U+EAB8"], ["", "U+E344"], ["󾥮", "U+FE96E"]],
    "🍱": ["U+1F371", "bento box", "1f371", ["-", "-"], ["", "U+EABD"], ["", "U+E34C"], ["󾥯", "U+FE96F"]],
    "🍲": ["U+1F372", "pot of food", "1f372", ["-", "-"], ["", "U+EABE"], ["", "U+E34D"], ["󾥰", "U+FE970"]],
    "🍧": ["U+1F367", "shaved ice", "1f367", ["-", "-"], ["", "U+EAEA"], ["", "U+E43F"], ["󾥱", "U+FE971"]],
    "🍖": ["U+1F356", "meat on bone", "1f356", ["-", "-"], ["", "U+E4C4"], ["-", "-"], ["󾥲", "U+FE972"]],
    "🍥": ["U+1F365", "fish cake with swirl design", "1f365", ["", "U+E643"], ["", "U+E4ED"], ["-", "-"], ["󾥳", "U+FE973"]],
    "🍠": ["U+1F360", "roasted sweet potato", "1f360", ["-", "-"], ["", "U+EB3A"], ["-", "-"], ["󾥴", "U+FE974"]],
    "🍕": ["U+1F355", "slice of pizza", "1f355", ["-", "-"], ["", "U+EB3B"], ["-", "-"], ["󾥵", "U+FE975"]],
    "🍗": ["U+1F357", "poultry leg", "1f357", ["-", "-"], ["", "U+EB3C"], ["-", "-"], ["󾥶", "U+FE976"]],
    "🍨": ["U+1F368", "ice cream", "1f368", ["-", "-"], ["", "U+EB4A"], ["-", "-"], ["󾥷", "U+FE977"]],
    "🍩": ["U+1F369", "doughnut", "1f369", ["-", "-"], ["", "U+EB4B"], ["-", "-"], ["󾥸", "U+FE978"]],
    "🍪": ["U+1F36A", "cookie", "1f36a", ["-", "-"], ["", "U+EB4C"], ["-", "-"], ["󾥹", "U+FE979"]],
    "🍫": ["U+1F36B", "chocolate bar", "1f36b", ["-", "-"], ["", "U+EB4D"], ["-", "-"], ["󾥺", "U+FE97A"]],
    "🍬": ["U+1F36C", "candy", "1f36c", ["-", "-"], ["", "U+EB4E"], ["-", "-"], ["󾥻", "U+FE97B"]],
    "🍭": ["U+1F36D", "lollipop", "1f36d", ["-", "-"], ["", "U+EB4F"], ["-", "-"], ["󾥼", "U+FE97C"]],
    "🍮": ["U+1F36E", "custard", "1f36e", ["-", "-"], ["", "U+EB56"], ["-", "-"], ["󾥽", "U+FE97D"]],
    "🍯": ["U+1F36F", "honey pot", "1f36f", ["-", "-"], ["", "U+EB59"], ["-", "-"], ["󾥾", "U+FE97E"]],
    "🍤": ["U+1F364", "fried shrimp", "1f364", ["-", "-"], ["", "U+EB70"], ["-", "-"], ["󾥿", "U+FE97F"]],
    "🍴": ["U+1F374", "fork and knife", "1f374", ["", "U+E66F"], ["", "U+E4AC"], ["", "U+E043"], ["󾦀", "U+FE980"]],
    "☕": ["U+2615", "hot beverage", "2615", ["", "U+E670"], ["", "U+E597"], ["", "U+E045"], ["󾦁", "U+FE981"]],
    "🍸": ["U+1F378", "cocktail glass", "1f378", ["", "U+E671"], ["", "U+E4C2"], ["", "U+E044"], ["󾦂", "U+FE982"]],
    "🍺": ["U+1F37A", "beer mug", "1f37a", ["", "U+E672"], ["", "U+E4C3"], ["", "U+E047"], ["󾦃", "U+FE983"]],
    "🍵": ["U+1F375", "teacup without handle", "1f375", ["", "U+E71E"], ["", "U+EAAE"], ["", "U+E338"], ["󾦄", "U+FE984"]],
    "🍶": ["U+1F376", "sake bottle and cup", "1f376", ["", "U+E74B"], ["", "U+EA97"], ["", "U+E30B"], ["󾦅", "U+FE985"]],
    "🍷": ["U+1F377", "wine glass", "1f377", ["", "U+E756"], ["", "U+E4C1"], ["", "U+E044"], ["󾦆", "U+FE986"]],
    "🍻": ["U+1F37B", "clinking beer mugs", "1f37b", ["", "U+E672"], ["", "U+EA98"], ["", "U+E30C"], ["󾦇", "U+FE987"]],
    "🍹": ["U+1F379", "tropical drink", "1f379", ["", "U+E671"], ["", "U+EB3E"], ["", "U+E044"], ["󾦈", "U+FE988"]],
    "↗": ["U+2197", "north east arrow", "2197", ["", "U+E678"], ["", "U+E555"], ["", "U+E236"], ["󾫰", "U+FEAF0"]],
    "↘": ["U+2198", "south east arrow", "2198", ["", "U+E696"], ["", "U+E54D"], ["", "U+E238"], ["󾫱", "U+FEAF1"]],
    "↖": ["U+2196", "north west arrow", "2196", ["", "U+E697"], ["", "U+E54C"], ["", "U+E237"], ["󾫲", "U+FEAF2"]],
    "↙": ["U+2199", "south west arrow", "2199", ["", "U+E6A5"], ["", "U+E556"], ["", "U+E239"], ["󾫳", "U+FEAF3"]],
    "⤴": ["U+2934", "arrow pointing rightwards then curving upwards", "2934", ["", "U+E6F5"], ["", "U+EB2D"], ["", "U+E236"], ["󾫴", "U+FEAF4"]],
    "⤵": ["U+2935", "arrow pointing rightwards then curving downwards", "2935", ["", "U+E700"], ["", "U+EB2E"], ["", "U+E238"], ["󾫵", "U+FEAF5"]],
    "↔": ["U+2194", "left right arrow", "2194", ["", "U+E73C"], ["", "U+EB7A"], ["-", "-"], ["󾫶", "U+FEAF6"]],
    "↕": ["U+2195", "up down arrow", "2195", ["", "U+E73D"], ["", "U+EB7B"], ["-", "-"], ["󾫷", "U+FEAF7"]],
    "⬆": ["U+2B06", "upwards black arrow", "2b06", ["-", "-"], ["", "U+E53F"], ["", "U+E232"], ["󾫸", "U+FEAF8"]],
    "⬇": ["U+2B07", "downwards black arrow", "2b07", ["-", "-"], ["", "U+E540"], ["", "U+E233"], ["󾫹", "U+FEAF9"]],
    "➡": ["U+27A1", "black rightwards arrow", "27a1", ["-", "-"], ["", "U+E552"], ["", "U+E234"], ["󾫺", "U+FEAFA"]],
    "⬅": ["U+2B05", "leftwards black arrow", "2b05", ["-", "-"], ["", "U+E553"], ["", "U+E235"], ["󾫻", "U+FEAFB"]],
    "▶": ["U+25B6", "black right-pointing triangle", "25b6", ["-", "-"], ["", "U+E52E"], ["", "U+E23A"], ["󾫼", "U+FEAFC"]],
    "◀": ["U+25C0", "black left-pointing triangle", "25c0", ["-", "-"], ["", "U+E52D"], ["", "U+E23B"], ["󾫽", "U+FEAFD"]],
    "⏩": ["U+23E9", "black right-pointing double triangle", "23e9", ["-", "-"], ["", "U+E530"], ["", "U+E23C"], ["󾫾", "U+FEAFE"]],
    "⏪": ["U+23EA", "black left-pointing double triangle", "23ea", ["-", "-"], ["", "U+E52F"], ["", "U+E23D"], ["󾫿", "U+FEAFF"]],
    "⏫": ["U+23EB", "black up-pointing double triangle", "23eb", ["-", "-"], ["", "U+E545"], ["-", "-"], ["󾬃", "U+FEB03"]],
    "⏬": ["U+23EC", "black down-pointing double triangle", "23ec", ["-", "-"], ["", "U+E544"], ["-", "-"], ["󾬂", "U+FEB02"]],
    "🔺": ["U+1F53A", "up-pointing red triangle", "1f53a", ["-", "-"], ["", "U+E55A"], ["-", "-"], ["󾭸", "U+FEB78"]],
    "🔻": ["U+1F53B", "down-pointing red triangle", "1f53b", ["-", "-"], ["", "U+E55B"], ["-", "-"], ["󾭹", "U+FEB79"]],
    "🔼": ["U+1F53C", "up-pointing small red triangle", "1f53c", ["-", "-"], ["", "U+E543"], ["-", "-"], ["󾬁", "U+FEB01"]],
    "🔽": ["U+1F53D", "down-pointing small red triangle", "1f53d", ["-", "-"], ["", "U+E542"], ["-", "-"], ["󾬀", "U+FEB00"]],
    "⭕": ["U+2B55", "heavy large circle", "2b55", ["", "U+E6A0"], ["", "U+EAAD"], ["", "U+E332"], ["󾭄", "U+FEB44"]],
    "❌": ["U+274C", "cross mark", "274c", ["-", "-"], ["", "U+E550"], ["", "U+E333"], ["󾭅", "U+FEB45"]],
    "❎": ["U+274E", "negative squared cross mark", "274e", ["-", "-"], ["", "U+E551"], ["", "U+E333"], ["󾭆", "U+FEB46"]],
    "❗": ["U+2757", "heavy exclamation mark symbol", "2757", ["", "U+E702"], ["", "U+E482"], ["", "U+E021"], ["󾬄", "U+FEB04"]],
    "⁉": ["U+2049", "exclamation question mark", "2049", ["", "U+E703"], ["", "U+EB2F"], ["-", "-"], ["󾬅", "U+FEB05"]],
    "‼": ["U+203C", "double exclamation mark", "203c", ["", "U+E704"], ["", "U+EB30"], ["-", "-"], ["󾬆", "U+FEB06"]],
    "❓": ["U+2753", "black question mark ornament", "2753", ["-", "-"], ["", "U+E483"], ["", "U+E020"], ["󾬉", "U+FEB09"]],
    "❔": ["U+2754", "white question mark ornament", "2754", ["-", "-"], ["", "U+E483"], ["", "U+E336"], ["󾬊", "U+FEB0A"]],
    "❕": ["U+2755", "white exclamation mark ornament", "2755", ["", "U+E702"], ["", "U+E482"], ["", "U+E337"], ["󾬋", "U+FEB0B"]],
    "〰": ["U+3030", "wavy dash", "3030", ["", "U+E709"], ["-", "-"], ["-", "-"], ["󾬇", "U+FEB07"]],
    "➰": ["U+27B0", "curly loop", "27b0", ["", "U+E70A"], ["", "U+EB31"], ["-", "-"], ["󾬈", "U+FEB08"]],
    "➿": ["U+27BF", "double curly loop", "27bf", ["", "U+E6DF"], ["-", "-"], ["", "U+E211"], ["󾠫", "U+FE82B"]],
    "❤": ["U+2764", "heavy black heart", "2764", ["", "U+E6EC"], ["", "U+E595"], ["", "U+E022"], ["󾬌", "U+FEB0C"]],
    "💓": ["U+1F493", "beating heart", "1f493", ["", "U+E6ED"], ["", "U+EB75"], ["", "U+E327"], ["󾬍", "U+FEB0D"]],
    "💔": ["U+1F494", "broken heart", "1f494", ["", "U+E6EE"], ["", "U+E477"], ["", "U+E023"], ["󾬎", "U+FEB0E"]],
    "💕": ["U+1F495", "two hearts", "1f495", ["", "U+E6EF"], ["", "U+E478"], ["", "U+E327"], ["󾬏", "U+FEB0F"]],
    "💖": ["U+1F496", "sparkling heart", "1f496", ["", "U+E6EC"], ["", "U+EAA6"], ["", "U+E327"], ["󾬐", "U+FEB10"]],
    "💗": ["U+1F497", "growing heart", "1f497", ["", "U+E6ED"], ["", "U+EB75"], ["", "U+E328"], ["󾬑", "U+FEB11"]],
    "💘": ["U+1F498", "heart with arrow", "1f498", ["", "U+E6EC"], ["", "U+E4EA"], ["", "U+E329"], ["󾬒", "U+FEB12"]],
    "💙": ["U+1F499", "blue heart", "1f499", ["", "U+E6EC"], ["", "U+EAA7"], ["", "U+E32A"], ["󾬓", "U+FEB13"]],
    "💚": ["U+1F49A", "green heart", "1f49a", ["", "U+E6EC"], ["", "U+EAA8"], ["", "U+E32B"], ["󾬔", "U+FEB14"]],
    "💛": ["U+1F49B", "yellow heart", "1f49b", ["", "U+E6EC"], ["", "U+EAA9"], ["", "U+E32C"], ["󾬕", "U+FEB15"]],
    "💜": ["U+1F49C", "purple heart", "1f49c", ["", "U+E6EC"], ["", "U+EAAA"], ["", "U+E32D"], ["󾬖", "U+FEB16"]],
    "💝": ["U+1F49D", "heart with ribbon", "1f49d", ["", "U+E6EC"], ["", "U+EB54"], ["", "U+E437"], ["󾬗", "U+FEB17"]],
    "💞": ["U+1F49E", "revolving hearts", "1f49e", ["", "U+E6ED"], ["", "U+E5AF"], ["", "U+E327"], ["󾬘", "U+FEB18"]],
    "💟": ["U+1F49F", "heart decoration", "1f49f", ["", "U+E6F8"], ["", "U+E595"], ["", "U+E204"], ["󾬙", "U+FEB19"]],
    "♥": ["U+2665", "black heart suit", "2665", ["", "U+E68D"], ["", "U+EAA5"], ["", "U+E20C"], ["󾬚", "U+FEB1A"]],
    "♠": ["U+2660", "black spade suit", "2660", ["", "U+E68E"], ["", "U+E5A1"], ["", "U+E20E"], ["󾬛", "U+FEB1B"]],
    "♦": ["U+2666", "black diamond suit", "2666", ["", "U+E68F"], ["", "U+E5A2"], ["", "U+E20D"], ["󾬜", "U+FEB1C"]],
    "♣": ["U+2663", "black club suit", "2663", ["", "U+E690"], ["", "U+E5A3"], ["", "U+E20F"], ["󾬝", "U+FEB1D"]],
    "🚬": ["U+1F6AC", "smoking symbol", "1f6ac", ["", "U+E67F"], ["", "U+E47D"], ["", "U+E30E"], ["󾬞", "U+FEB1E"]],
    "🚭": ["U+1F6AD", "no smoking symbol", "1f6ad", ["", "U+E680"], ["", "U+E47E"], ["", "U+E208"], ["󾬟", "U+FEB1F"]],
    "♿": ["U+267F", "wheelchair symbol", "267f", ["", "U+E69B"], ["", "U+E47F"], ["", "U+E20A"], ["󾬠", "U+FEB20"]],
    "🚩": ["U+1F6A9", "triangular flag on post", "1f6a9", ["", "U+E6DE"], ["", "U+EB2C"], ["-", "-"], ["󾬢", "U+FEB22"]],
    "⚠": ["U+26A0", "warning sign", "26a0", ["", "U+E737"], ["", "U+E481"], ["", "U+E252"], ["󾬣", "U+FEB23"]],
    "⛔": ["U+26D4", "no entry", "26d4", ["", "U+E72F"], ["", "U+E484"], ["", "U+E137"], ["󾬦", "U+FEB26"]],
    "♻": ["U+267B", "black universal recycling symbol", "267b", ["", "U+E735"], ["", "U+EB79"], ["-", "-"], ["󾬬", "U+FEB2C"]],
    "🚲": ["U+1F6B2", "bicycle", "1f6b2", ["", "U+E71D"], ["", "U+E4AE"], ["", "U+E136"], ["󾟫", "U+FE7EB"]],
    "🚶": ["U+1F6B6", "pedestrian", "1f6b6", ["", "U+E733"], ["", "U+EB72"], ["", "U+E201"], ["󾟰", "U+FE7F0"]],
    "🚹": ["U+1F6B9", "mens symbol", "1f6b9", ["-", "-"], ["-", "-"], ["", "U+E138"], ["󾬳", "U+FEB33"]],
    "🚺": ["U+1F6BA", "womens symbol", "1f6ba", ["-", "-"], ["-", "-"], ["", "U+E139"], ["󾬴", "U+FEB34"]],
    "🛀": ["U+1F6C0", "bath", "1f6c0", ["", "U+E6F7"], ["", "U+E5D8"], ["", "U+E13F"], ["󾔅", "U+FE505"]],
    "🚻": ["U+1F6BB", "restroom", "1f6bb", ["", "U+E66E"], ["", "U+E4A5"], ["", "U+E151"], ["󾔆", "U+FE506"]],
    "🚽": ["U+1F6BD", "toilet", "1f6bd", ["", "U+E66E"], ["", "U+E4A5"], ["", "U+E140"], ["󾔇", "U+FE507"]],
    "🚾": ["U+1F6BE", "water closet", "1f6be", ["", "U+E66E"], ["", "U+E4A5"], ["", "U+E309"], ["󾔈", "U+FE508"]],
    "🚼": ["U+1F6BC", "baby symbol", "1f6bc", ["-", "-"], ["", "U+EB18"], ["", "U+E13A"], ["󾬵", "U+FEB35"]],
    "🚪": ["U+1F6AA", "door", "1f6aa", ["", "U+E714"], ["-", "-"], ["-", "-"], ["󾓳", "U+FE4F3"]],
    "🚫": ["U+1F6AB", "no entry sign", "1f6ab", ["", "U+E738"], ["", "U+E541"], ["-", "-"], ["󾭈", "U+FEB48"]],
    "✔": ["U+2714", "heavy check mark", "2714", ["-", "-"], ["", "U+E557"], ["-", "-"], ["󾭉", "U+FEB49"]],
    "🆑": ["U+1F191", "squared cl", "1f191", ["", "U+E6DB"], ["", "U+E5AB"], ["-", "-"], ["󾮄", "U+FEB84"]],
    "🆒": ["U+1F192", "squared cool", "1f192", ["-", "-"], ["", "U+EA85"], ["", "U+E214"], ["󾬸", "U+FEB38"]],
    "🆓": ["U+1F193", "squared free", "1f193", ["", "U+E6D7"], ["", "U+E578"], ["-", "-"], ["󾬡", "U+FEB21"]],
    "🆔": ["U+1F194", "squared id", "1f194", ["", "U+E6D8"], ["", "U+EA88"], ["", "U+E229"], ["󾮁", "U+FEB81"]],
    "🆕": ["U+1F195", "squared new", "1f195", ["", "U+E6DD"], ["", "U+E5B5"], ["", "U+E212"], ["󾬶", "U+FEB36"]],
    "🆖": ["U+1F196", "squared ng", "1f196", ["", "U+E72F"], ["-", "-"], ["-", "-"], ["󾬨", "U+FEB28"]],
    "🆗": ["U+1F197", "squared ok", "1f197", ["", "U+E70B"], ["", "U+E5AD"], ["", "U+E24D"], ["󾬧", "U+FEB27"]],
    "🆘": ["U+1F198", "squared sos", "1f198", ["-", "-"], ["", "U+E4E8"], ["-", "-"], ["󾭏", "U+FEB4F"]],
    "🆙": ["U+1F199", "squared up with exclamation mark", "1f199", ["-", "-"], ["", "U+E50F"], ["", "U+E213"], ["󾬷", "U+FEB37"]],
    "🆚": ["U+1F19A", "squared vs", "1f19a", ["-", "-"], ["", "U+E5D2"], ["", "U+E12E"], ["󾬲", "U+FEB32"]],
    "🈁": ["U+1F201", "squared katakana koko", "1f201", ["-", "-"], ["-", "-"], ["", "U+E203"], ["󾬤", "U+FEB24"]],

    "🈲": ["U+1F232", "squared cjk unified ideograph-7981", "1f232", ["", "U+E738"], ["-", "-"], ["-", "-"], ["󾬮", "U+FEB2E"]],
    "🈳": ["U+1F233", "squared cjk unified ideograph-7a7a", "1f233", ["", "U+E739"], ["", "U+EA8A"], ["", "U+E22B"], ["󾬯", "U+FEB2F"]],
    "🈴": ["U+1F234", "squared cjk unified ideograph-5408", "1f234", ["", "U+E73A"], ["-", "-"], ["-", "-"], ["󾬰", "U+FEB30"]],
    "🈵": ["U+1F235", "squared cjk unified ideograph-6e80", "1f235", ["", "U+E73B"], ["", "U+EA89"], ["", "U+E22A"], ["󾬱", "U+FEB31"]],
    "🈶": ["U+1F236", "squared cjk unified ideograph-6709", "1f236", ["-", "-"], ["-", "-"], ["", "U+E215"], ["󾬹", "U+FEB39"]],
    "🈚": ["U+1F21A", "squared cjk unified ideograph-7121", "1f21a", ["-", "-"], ["-", "-"], ["", "U+E216"], ["󾬺", "U+FEB3A"]],

    "🈸": ["U+1F238", "squared cjk unified ideograph-7533", "1f238", ["-", "-"], ["-", "-"], ["", "U+E218"], ["󾬼", "U+FEB3C"]],
    "🈹": ["U+1F239", "squared cjk unified ideograph-5272", "1f239", ["-", "-"], ["", "U+EA86"], ["", "U+E227"], ["󾬾", "U+FEB3E"]],
    "🈯": ["U+1F22F", "squared cjk unified ideograph-6307", "1f22f", ["-", "-"], ["", "U+EA8B"], ["", "U+E22C"], ["󾭀", "U+FEB40"]],
    "🈺": ["U+1F23A", "squared cjk unified ideograph-55b6", "1f23a", ["-", "-"], ["", "U+EA8C"], ["", "U+E22D"], ["󾭁", "U+FEB41"]],
    "㊙": ["U+3299", "circled ideograph secret", "3299", ["", "U+E734"], ["", "U+E4F1"], ["", "U+E315"], ["󾬫", "U+FEB2B"]],
    "㊗": ["U+3297", "circled ideograph congratulation", "3297", ["-", "-"], ["", "U+EA99"], ["", "U+E30D"], ["󾭃", "U+FEB43"]],
    "🉐": ["U+1F250", "circled ideograph advantage", "1f250", ["-", "-"], ["", "U+E4F7"], ["", "U+E226"], ["󾬽", "U+FEB3D"]],
    "🉑": ["U+1F251", "circled ideograph accept", "1f251", ["-", "-"], ["", "U+EB01"], ["-", "-"], ["󾭐", "U+FEB50"]],
    "➕": ["U+2795", "heavy plus sign", "2795", ["-", "-"], ["", "U+E53C"], ["-", "-"], ["󾭑", "U+FEB51"]],
    "➖": ["U+2796", "heavy minus sign", "2796", ["-", "-"], ["", "U+E53D"], ["-", "-"], ["󾭒", "U+FEB52"]],
    "✖": ["U+2716", "heavy multiplication x", "2716", ["-", "-"], ["", "U+E54F"], ["", "U+E333"], ["󾭓", "U+FEB53"]],
    "➗": ["U+2797", "heavy division sign", "2797", ["-", "-"], ["", "U+E554"], ["-", "-"], ["󾭔", "U+FEB54"]],
    "💠": ["U+1F4A0", "diamond shape with a dot inside", "1f4a0", ["", "U+E6F8"], ["-", "-"], ["-", "-"], ["󾭕", "U+FEB55"]],
    "💡": ["U+1F4A1", "electric light bulb", "1f4a1", ["", "U+E6FB"], ["", "U+E476"], ["", "U+E10F"], ["󾭖", "U+FEB56"]],
    "💢": ["U+1F4A2", "anger symbol", "1f4a2", ["", "U+E6FC"], ["", "U+E4E5"], ["", "U+E334"], ["󾭗", "U+FEB57"]],
    "💣": ["U+1F4A3", "bomb", "1f4a3", ["", "U+E6FE"], ["", "U+E47A"], ["", "U+E311"], ["󾭘", "U+FEB58"]],
    "💤": ["U+1F4A4", "sleeping symbol", "1f4a4", ["", "U+E701"], ["", "U+E475"], ["", "U+E13C"], ["󾭙", "U+FEB59"]],
    "💥": ["U+1F4A5", "collision symbol", "1f4a5", ["", "U+E705"], ["", "U+E5B0"], ["-", "-"], ["󾭚", "U+FEB5A"]],
    "💦": ["U+1F4A6", "splashing sweat symbol", "1f4a6", ["", "U+E706"], ["", "U+E5B1"], ["", "U+E331"], ["󾭛", "U+FEB5B"]],
    "💧": ["U+1F4A7", "droplet", "1f4a7", ["", "U+E707"], ["", "U+E4E6"], ["", "U+E331"], ["󾭜", "U+FEB5C"]],
    "💨": ["U+1F4A8", "dash symbol", "1f4a8", ["", "U+E708"], ["", "U+E4F4"], ["", "U+E330"], ["󾭝", "U+FEB5D"]],
    "💩": ["U+1F4A9", "pile of poo", "1f4a9", ["-", "-"], ["", "U+E4F5"], ["", "U+E05A"], ["󾓴", "U+FE4F4"]],
    "💪": ["U+1F4AA", "flexed biceps", "1f4aa", ["-", "-"], ["", "U+E4E9"], ["", "U+E14C"], ["󾭞", "U+FEB5E"]],
    "💫": ["U+1F4AB", "dizzy symbol", "1f4ab", ["-", "-"], ["", "U+EB5C"], ["", "U+E407"], ["󾭟", "U+FEB5F"]],
    "💬": ["U+1F4AC", "speech balloon", "1f4ac", ["-", "-"], ["", "U+E4FD"], ["-", "-"], ["󾔲", "U+FE532"]],
    "✨": ["U+2728", "sparkles", "2728", ["", "U+E6FA"], ["", "U+EAAB"], ["", "U+E32E"], ["󾭠", "U+FEB60"]],
    "✴": ["U+2734", "eight pointed black star", "2734", ["", "U+E6F8"], ["", "U+E479"], ["", "U+E205"], ["󾭡", "U+FEB61"]],
    "✳": ["U+2733", "eight spoked asterisk", "2733", ["", "U+E6F8"], ["", "U+E53E"], ["", "U+E206"], ["󾭢", "U+FEB62"]],
    "⚪": ["U+26AA", "medium white circle", "26aa", ["", "U+E69C"], ["", "U+E53A"], ["", "U+E219"], ["󾭥", "U+FEB65"]],
    "⚫": ["U+26AB", "medium black circle", "26ab", ["", "U+E69C"], ["", "U+E53B"], ["", "U+E219"], ["󾭦", "U+FEB66"]],
    "🔴": ["U+1F534", "large red circle", "1f534", ["", "U+E69C"], ["", "U+E54A"], ["", "U+E219"], ["󾭣", "U+FEB63"]],
    "🔵": ["U+1F535", "large blue circle", "1f535", ["", "U+E69C"], ["", "U+E54B"], ["", "U+E21A"], ["󾭤", "U+FEB64"]],
    "🔲": ["U+1F532", "black square button", "1f532", ["", "U+E69C"], ["", "U+E54B"], ["", "U+E21A"], ["󾭤", "U+FEB64"]],
    "🔳": ["U+1F533", "white square button", "1f533", ["", "U+E69C"], ["", "U+E54B"], ["", "U+E21B"], ["󾭧", "U+FEB67"]],
    "⭐": ["U+2B50", "white medium star", "2b50", ["-", "-"], ["", "U+E48B"], ["", "U+E32F"], ["󾭨", "U+FEB68"]],




    "🔶": ["U+1F536", "large orange diamond", "1f536", ["-", "-"], ["", "U+E546"], ["", "U+E21B"], ["󾭳", "U+FEB73"]],
    "🔷": ["U+1F537", "large blue diamond", "1f537", ["-", "-"], ["", "U+E547"], ["", "U+E21B"], ["󾭴", "U+FEB74"]],
    "🔸": ["U+1F538", "small orange diamond", "1f538", ["-", "-"], ["", "U+E536"], ["", "U+E21B"], ["󾭵", "U+FEB75"]],
    "🔹": ["U+1F539", "small blue diamond", "1f539", ["-", "-"], ["", "U+E537"], ["", "U+E21B"], ["󾭶", "U+FEB76"]],
    "❇": ["U+2747", "sparkle", "2747", ["", "U+E6FA"], ["", "U+E46C"], ["", "U+E32E"], ["󾭷", "U+FEB77"]],
    "💮": ["U+1F4AE", "white flower", "1f4ae", ["-", "-"], ["", "U+E4F0"], ["-", "-"], ["󾭺", "U+FEB7A"]],
    "💯": ["U+1F4AF", "hundred points symbol", "1f4af", ["-", "-"], ["", "U+E4F2"], ["-", "-"], ["󾭻", "U+FEB7B"]],
    "↩": ["U+21A9", "leftwards arrow with hook", "21a9", ["", "U+E6DA"], ["", "U+E55D"], ["-", "-"], ["󾮃", "U+FEB83"]],
    "↪": ["U+21AA", "rightwards arrow with hook", "21aa", ["-", "-"], ["", "U+E55C"], ["-", "-"], ["󾮈", "U+FEB88"]],
    "🔃": ["U+1F503", "clockwise downwards and upwards open circle arrows", "1f503", ["", "U+E735"], ["", "U+EB0D"], ["-", "-"], ["󾮑", "U+FEB91"]],
    "🔊": ["U+1F50A", "speaker with three sound waves", "1f50a", ["-", "-"], ["", "U+E511"], ["", "U+E141"], ["󾠡", "U+FE821"]],
    "🔋": ["U+1F50B", "battery", "1f50b", ["-", "-"], ["", "U+E584"], ["-", "-"], ["󾓼", "U+FE4FC"]],
    "🔌": ["U+1F50C", "electric plug", "1f50c", ["-", "-"], ["", "U+E589"], ["-", "-"], ["󾓾", "U+FE4FE"]],
    "🔍": ["U+1F50D", "left-pointing magnifying glass", "1f50d", ["", "U+E6DC"], ["", "U+E518"], ["", "U+E114"], ["󾮅", "U+FEB85"]],
    "🔎": ["U+1F50E", "right-pointing magnifying glass", "1f50e", ["", "U+E6DC"], ["", "U+EB05"], ["", "U+E114"], ["󾮍", "U+FEB8D"]],
    "🔒": ["U+1F512", "lock", "1f512", ["", "U+E6D9"], ["", "U+E51C"], ["", "U+E144"], ["󾮆", "U+FEB86"]],
    "🔓": ["U+1F513", "open lock", "1f513", ["", "U+E6D9"], ["", "U+E51C"], ["", "U+E145"], ["󾮇", "U+FEB87"]],
    "🔏": ["U+1F50F", "lock with ink pen", "1f50f", ["", "U+E6D9"], ["", "U+EB0C"], ["", "U+E144"], ["󾮐", "U+FEB90"]],
    "🔐": ["U+1F510", "closed lock with key", "1f510", ["", "U+E6D9"], ["", "U+EAFC"], ["", "U+E144"], ["󾮊", "U+FEB8A"]],
    "🔑": ["U+1F511", "key", "1f511", ["", "U+E6D9"], ["", "U+E519"], ["", "U+E03F"], ["󾮂", "U+FEB82"]],
    "🔔": ["U+1F514", "bell", "1f514", ["", "U+E713"], ["", "U+E512"], ["", "U+E325"], ["󾓲", "U+FE4F2"]],
    "☑": ["U+2611", "ballot box with check", "2611", ["-", "-"], ["", "U+EB02"], ["-", "-"], ["󾮋", "U+FEB8B"]],
    "🔘": ["U+1F518", "radio button", "1f518", ["-", "-"], ["", "U+EB04"], ["-", "-"], ["󾮌", "U+FEB8C"]],
    "🔖": ["U+1F516", "bookmark", "1f516", ["-", "-"], ["", "U+EB07"], ["-", "-"], ["󾮏", "U+FEB8F"]],
    "🔗": ["U+1F517", "link symbol", "1f517", ["-", "-"], ["", "U+E58A"], ["-", "-"], ["󾭋", "U+FEB4B"]],
    "🔙": ["U+1F519", "back with leftwards arrow above", "1f519", ["-", "-"], ["", "U+EB06"], ["", "U+E235"], ["󾮎", "U+FEB8E"]],
    "🔚": ["U+1F51A", "end with leftwards arrow above", "1f51a", ["", "U+E6B9"], ["-", "-"], ["-", "-"], ["󾀚", "U+FE01A"]],
    "🔛": ["U+1F51B", "on with exclamation mark with left right arrow above", "1f51b", ["", "U+E6B8"], ["-", "-"], ["-", "-"], ["󾀙", "U+FE019"]],
    "🔜": ["U+1F51C", "soon with rightwards arrow above", "1f51c", ["", "U+E6B7"], ["-", "-"], ["-", "-"], ["󾀘", "U+FE018"]],
    "🔝": ["U+1F51D", "top with upwards arrow above", "1f51d", ["-", "-"], ["-", "-"], ["", "U+E24C"], ["󾭂", "U+FEB42"]],
    "✅": ["U+2705", "white heavy check mark", "2705", ["-", "-"], ["", "U+E55E"], ["-", "-"], ["󾭊", "U+FEB4A"]],
    "✊": ["U+270A", "raised fist", "270a", ["", "U+E693"], ["", "U+EB83"], ["", "U+E010"], ["󾮓", "U+FEB93"]],
    "✋": ["U+270B", "raised hand", "270b", ["", "U+E695"], ["", "U+E5A7"], ["", "U+E012"], ["󾮕", "U+FEB95"]],
    "✌": ["U+270C", "victory hand", "270c", ["", "U+E694"], ["", "U+E5A6"], ["", "U+E011"], ["󾮔", "U+FEB94"]],
    "👊": ["U+1F44A", "fisted hand sign", "1f44a", ["", "U+E6FD"], ["", "U+E4F3"], ["", "U+E00D"], ["󾮖", "U+FEB96"]],
    "👍": ["U+1F44D", "thumbs up sign", "1f44d", ["", "U+E727"], ["", "U+E4F9"], ["", "U+E00E"], ["󾮗", "U+FEB97"]],
    "☝": ["U+261D", "white up pointing index", "261d", ["-", "-"], ["", "U+E4F6"], ["", "U+E00F"], ["󾮘", "U+FEB98"]],
    "👆": ["U+1F446", "white up pointing backhand index", "1f446", ["-", "-"], ["", "U+EA8D"], ["", "U+E22E"], ["󾮙", "U+FEB99"]],
    "👇": ["U+1F447", "white down pointing backhand index", "1f447", ["-", "-"], ["", "U+EA8E"], ["", "U+E22F"], ["󾮚", "U+FEB9A"]],
    "👈": ["U+1F448", "white left pointing backhand index", "1f448", ["-", "-"], ["", "U+E4FF"], ["", "U+E230"], ["󾮛", "U+FEB9B"]],
    "👉": ["U+1F449", "white right pointing backhand index", "1f449", ["-", "-"], ["", "U+E500"], ["", "U+E231"], ["󾮜", "U+FEB9C"]],
    "👋": ["U+1F44B", "waving hand sign", "1f44b", ["", "U+E695"], ["", "U+EAD6"], ["", "U+E41E"], ["󾮝", "U+FEB9D"]],
    "👏": ["U+1F44F", "clapping hands sign", "1f44f", ["-", "-"], ["", "U+EAD3"], ["", "U+E41F"], ["󾮞", "U+FEB9E"]],
    "👌": ["U+1F44C", "ok hand sign", "1f44c", ["", "U+E70B"], ["", "U+EAD4"], ["", "U+E420"], ["󾮟", "U+FEB9F"]],
    "👎": ["U+1F44E", "thumbs down sign", "1f44e", ["", "U+E700"], ["", "U+EAD5"], ["", "U+E421"], ["󾮠", "U+FEBA0"]],
    "👐": ["U+1F450", "open hands sign", "1f450", ["", "U+E695"], ["", "U+EAD6"], ["", "U+E422"], ["󾮡", "U+FEBA1"]],

  };


  /**
   * Create map keys rexgep, keys sort by key's length desc.
   *
   * @param {Object} map
   * @return {RegExp}
   */
  function _createRegexp(map) {
    var keys = Object.keys(map);
    keys.sort(function (a, b) {
      return b.length - a.length;
    });
    return new RegExp('(' + keys.join('|') + ')', 'g');
  }

  var EMOJI_RE = null;
  /**
   * Convert unified code to HTML.
   *
   * @param {String} text
   * @return {String} html with emoji classname.
   */
  function unifiedToHTML(text) {
    return text.replace(jEmoji.EMOJI_RE(), function (_, m) {
      var em = EMOJI_MAP[m];
      return '<span class="emoji emoji' + em[2] + '" title="' + em[1] + '"></span>';
    });
  }
  jEmoji.unifiedToHTML = unifiedToHTML;

  var EMOJI_DOCOMO_MAP = {};
  var EMOJI_KDDI_MAP = {};
  var EMOJI_SOFTBANK_MAP = {};
  var EMOJI_GOOGLE_MAP = {};
  var _maps = [EMOJI_DOCOMO_MAP, EMOJI_KDDI_MAP, EMOJI_SOFTBANK_MAP, EMOJI_GOOGLE_MAP];
  for (var k in EMOJI_MAP) {
    var em = EMOJI_MAP[k];
    for (var i = 0; i < _maps.length; i++) {
      var index = i + 3;
      var code = em[index][0];
      var map = _maps[i];
      if (code === '-' || map[code]) { // use first code
        continue;
      }
      map[code] = k;
    }
  }

  var EMOJI_DOCOMO_RE = null;
  /**
   * Convert DoCoMo code to Unified code.
   *
   * @param {String} text
   * @return {String}
   */
  function docomoToUnified(text) {
    return text.replace(jEmoji.EMOJI_DOCOMO_RE(), function (_, m) {
      return EMOJI_DOCOMO_MAP[m];
    });
  }
  jEmoji.docomoToUnified = docomoToUnified;

  var EMOJI_KDDI_RE = null;
  /**
   * Convert KDDI code to Unified code.
   *
   * @param {String} text
   * @return {String}
   */
  function kddiToUnified(text) {
    return text.replace(jEmoji.EMOJI_KDDI_RE(), function (_, m) {
      return EMOJI_KDDI_MAP[m];
    });
  }
  jEmoji.kddiToUnified = kddiToUnified;

  var EMOJI_SOFTBANK_RE = null;
  /**
   * Convert SoftBank code to Unified code.
   *
   * @param {String} text
   * @return {String}
   */
  function softbankToUnified(text) {
    return text.replace(jEmoji.EMOJI_SOFTBANK_RE(), function (_, m) {
      return EMOJI_SOFTBANK_MAP[m];
    });
  }
  jEmoji.softbankToUnified = softbankToUnified;

  var EMOJI_GOOGLE_RE = null;
  /**
   * Convert Google code to Unified code.
   *
   * @param {String} text
   * @return {String}
   */
  function googleToUnified(text) {
    return text.replace(jEmoji.EMOJI_GOOGLE_RE(), function (_, m) {
      return EMOJI_GOOGLE_MAP[m];
    });
  }
  jEmoji.googleToUnified = googleToUnified;

  return jEmoji;

});

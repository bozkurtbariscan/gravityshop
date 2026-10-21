// Gravity Shop — site script: picks Turkish or English (?lang=tr / ?lang=en, else the browser's language) and fills in
// the contact address. Without JavaScript both languages show, one after the other.
(function () {
  "use strict";

  // ↓↓↓ Write your contact e-mail address here (Site/README.md, step 2). It appears on every page. ↓↓↓
  var CONTACT_EMAIL = "panopaxion@gmail.com";

  var LANGUAGES = ["tr", "en"];

  function pickLanguage() {
    var asked = new URLSearchParams(window.location.search).get("lang");
    var wanted = (asked || navigator.language || "en").toLowerCase();
    return wanted.indexOf("tr") === 0 ? "tr" : "en"; // the game's other nine languages read the English page
  }

  function apply(lang) {
    var root = document.documentElement;
    root.setAttribute("data-lang", lang);
    root.lang = lang;
    var title = root.getAttribute("data-title-" + lang);
    if (title) document.title = title;
    document.querySelectorAll("[data-set-lang]").forEach(function (a) {
      a.setAttribute("aria-current", a.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    document.querySelectorAll("a[data-page]").forEach(function (a) {
      a.href = a.getAttribute("data-page") + "?lang=" + lang;
    });
  }

  function fillContact() {
    var ready = CONTACT_EMAIL.indexOf("@") > 0;
    document.querySelectorAll("[data-contact]").forEach(function (el) {
      if (ready) {
        el.textContent = CONTACT_EMAIL;
        el.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Gravity Shop");
      } else {
        el.textContent = "[e-mail]";
        el.className = "todo";
        el.removeAttribute("href");
      }
    });
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var lang = a.getAttribute("data-set-lang");
      if (LANGUAGES.indexOf(lang) < 0) return;
      e.preventDefault();
      window.history.replaceState(null, "", "?lang=" + lang + window.location.hash);
      apply(lang);
    });
  });

  apply(pickLanguage());
  fillContact();
})();

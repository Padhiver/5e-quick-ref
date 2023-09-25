function add_quickref_item(parent, data, type) {
  var icon = data.icon || "perspective-dice-six-faces-one";
  var subtitle = data.subtitle || "";
  var title = data.title || "[no title]";

  var item = document.createElement("div");
  item.className += "item itemsize"
  item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc pf2-action">' + subtitle + '</div>\
    </div>\
    ';

  var style = window.getComputedStyle(parent.parentNode.parentNode);
  var color = style.backgroundColor;

  item.onclick = function () {
    show_modal(data, color, type);
  }

  parent.appendChild(item);
}

function get_action_html(data) {
  if (!data.subtitle) {
    return '';
  }

  var actionText = '';

  switch (data.subtitle) {
    case 'A':
    // cascade
    case 'a':
      actionText = '1 action';
      break;
    case 'D':
    // cascade
    case 'd':
      actionText = '2 actions';
      break;
    case 'T':
    // cascade
    case 't':
      actionText = '3 actions';
      break;
    case 'F':
    // cascade
    case 'f':
      actionText = 'Action gratuite';
      break;
    case 'R':
    // cascade
    case 'r':
      actionText = 'Réaction';
      break;
  }

  return '<span class="pf2-action">' + data.subtitle + '</span> ' + actionText;
}

function show_modal(data, color, type) {
  var title = data.title || "[no title]";
  var subtitle = [(data.description || ''), get_action_html(data)].filter(v => v.length).join("<br />");
  var bullets = data.bullets || [];
  var reference = data.reference || "";
  type = type || "";
  color = color || "black"

  $("body").addClass("modal-open");
  $("#modal").addClass("modal-visible");
  $("#modal-backdrop").css("height", window.innerHeight + "px");
  $("#modal-container").css("background-color", color).css("border-color", color);
  $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
  $("#modal-subtitle").html(subtitle);
  $("#modal-reference").text(reference);

  var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n<hr>\n");
  $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
  $("body").removeClass("modal-open");
  $("#modal").removeClass("modal-visible");
}

function fill_section(data, parentname, type) {
  var parent = document.getElementById(parentname);
  data.forEach(function (item) {
    add_quickref_item(parent, item, type);
  });
}

function init() {
  fill_section(data_action_deplacement, "basic-mouvements", "Actions basiques");
  fill_section(data_action_combat, "basic-actions", "Actions de combat");
  fill_section(data_action_interaction, "basic-interactions", "Actions d'interaction");
  fill_section(data_action_magie, "basic-magies", "Action de magie");
  fill_section(data_action_acrobatique_dex, "basic-acrobatiques", "Actions acrobatique (Dex)");
  fill_section(data_action_etats, "basic-etats", "États et Conditions");


  var modal = document.getElementById("modal");
  modal.onclick = hide_modal;
}

$(window).load(init);

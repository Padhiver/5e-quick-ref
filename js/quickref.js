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
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    }

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black"

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
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
    fill_section(data_action_deplacement, "basic-movement", "Actions basiques");
    fill_section(data_action_combat, "basic-actions", "Actions de combat");
    fill_section(data_action_interaction, "basic-bonus-actions", "Actions d'interaction");
    fill_section(data_action_magie, "basic-reactions", "Action de magie");
    fill_section(data_action_objets, "basic-conditions", "Actions d'objets magiques");
    fill_section(data_action_acrobatique_dex, "environment-obscurance", "Actions acrobatique (Dex)");
    fill_section(data_action_arcane_int, "basic-arcane", "Actions d'arcanes (Int)");
    fill_section(data_action_artisanat_int, "basic-artisanat", "Actions d'arcanes (Int)");
    fill_section(data_action_athletisme_for, "basic-athletisme", "Actions d'arcanes (Int)");
    fill_section(data_action_connaissances_int, "basic-connaissances", "Actions d'arcanes (Int)");
    fill_section(data_action_diplomatie_cha, "basic-diplomatie", "Actions d'arcanes (Int)");
    fill_section(data_action_discretion_dex, "basic-discretion", "Actions d'arcanes (Int)");
    fill_section(data_action_duperie_cha, "basic-duperie", "Actions d'arcanes (Int)");
    fill_section(data_action_intimidation_cha, "basic-intimidation", "Actions d'arcanes (Int)");
    fill_section(data_action_medecine_sag, "basic-medecine", "Actions d'arcanes (Int)");
    fill_section(data_action_nature_sag, "basic-nature", "Actions d'arcanes (Int)");
    fill_section(data_action_representation_cha, "basic-representation", "Actions d'arcanes (Int)");
    fill_section(data_action_societe_int, "basic-societe", "Actions d'arcanes (Int)");
    fill_section(data_action_survie_sag, "basic-survie", "Actions d'arcanes (Int)");
    fill_section(data_action_vol_dex, "basic-vol", "Actions d'arcanes (Int)");


    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(init);

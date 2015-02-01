this["ballstreams"] = this["ballstreams"] || {};

this["ballstreams"]["score.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class='game'>\r\n  <a href=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=teamscore>"
    + escapeExpression(((helper = (helper = helpers.homeTeam || (depth0 != null ? depth0.homeTeam : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"homeTeam","hash":{},"data":data}) : helper)))
    + " <span class=score>"
    + escapeExpression(((helper = (helper = helpers.homeScore || (depth0 != null ? depth0.homeScore : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"homeScore","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n    <div class=teamscore>"
    + escapeExpression(((helper = (helper = helpers.awayTeam || (depth0 != null ? depth0.awayTeam : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"awayTeam","hash":{},"data":data}) : helper)))
    + " <span class=score>"
    + escapeExpression(((helper = (helper = helpers.awayScore || (depth0 != null ? depth0.awayScore : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"awayScore","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n  </a>\r\n</div>\r\n";
},"useData":true});